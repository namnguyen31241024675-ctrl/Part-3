"use strict";

const screen = document.querySelector('#screen');
const notice = document.querySelector('#notice');
const steps = document.querySelector('#steps');
const groups = (window.TOEIC_PART3 ?? []).map(original => {
  const supplement = supplementalTranslations[original.id];
  if (!supplement) {
    const translations = synchronizedLearningData[original.id]?.sentences;
    return translations ? {...original,sentences:original.sentences.map((sentence,index) => ({
      ...sentence,translation:translations[index] || sentence.translation
    }))} : original;
  }
  const sentences = original.sentences.map((sentence,index) => ({...sentence,translation:supplement.sentences[index]}));
  const dialogue = sentences.map(sentence => ((sentence.speaker === 'W' ? 'Nữ' : 'Nam') + ': ' + sentence.translation)).join('\n');
  const questions = original.questions.map((question,index) => {
    const [title,...options] = supplement.questions[index];
    return question.number + '. ' + title + '\n' + options.map((option,i) => '(' + 'ABCD'[i] + ') ' + option).join('\n');
  }).join('\n');
  return {...original,sentences,translation:dialogue + '\n' + questions};
});
const byId = new Map(groups.map(group => [group.id, group]));
const tests = [...new Set(groups.map(group => group.test))];
const storageKey = 'toeic-part3-study-v1';
const empty = () => ({version: 1, current: groups[0]?.id, attempts: {}, phrases: {}});
const escape = value => String(value ?? '').replace(/[&<>"']/g, token =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[token]);
const selection = () => window.getSelection();
const audio = new Audio();
audio.controls = true;
audio.preload = 'none';
audio.setAttribute('aria-label', 'Audio hội thoại');

let state = empty();
let page = 'quiz';
let showTranslation = true;
let pendingSelection;
let queue = [];
let queueIndex = 0;
let revealed = false;
let playVersion = 0;
let clipEnd;
let audioFailure = null;
let playingSentenceId;

const group = () => byId.get(state.current);
const attempt = () => state.attempts[state.current] ??= {answers:{}, checked:false};
const phrases = () => Object.values(state.phrases);
const phraseKey = item => JSON.stringify([item.groupId,item.sentenceId,item.start,item.end]);
const sentenceId = (sentence,index) => String(sentence.id ?? index);
const getSentence = item => studySource(byId.get(item.groupId),item.sentenceId);
const statusLabel = {new:'Chưa luyện', stuck:'Còn vướng', clear:'Nghe ra rồi'};
const drillGroups = listeningDrillGroups.filter(category => category.lessons.length);
const labels = {quiz:'Làm bài', ...(drillGroups.length ? {drill:'Luyện theo nhóm'} : {}),
  transcript:'Chữa bài', practice:'Luyện cụm', review:'Ôn lại', finish:'Kết thúc'};
const button = (text, action, attrs='') => `<button type="button" data-action="${action}" ${attrs}>${text}</button>`;
const asset = path => 'part3/' + path.split('/').map(encodeURIComponent).join('/');
let drillGroupIndex = 0;
let drillIndex = 0;
let drillAnswer;
let drillHidden = false;
const drillGroup = () => drillGroups[drillGroupIndex];
const drillLesson = () => drillGroup().lessons[drillIndex];

function clean(data) {
  if (data?.version !== 1 || !data.attempts || !data.phrases ||
      typeof data.attempts !== 'object' || typeof data.phrases !== 'object') {
    throw new Error('File tiến độ không đúng định dạng.');
  }
  const result = empty();
  if (byId.has(data.current)) result.current = data.current;
  for (const [id, saved] of Object.entries(data.attempts)) {
    const original = byId.get(id);
    if (!original || !saved) continue;
    const answers = {};
    for (const question of original.questions) {
      const value = saved.answers?.[question.number];
      if (question.options.some(option => option.letter === value)) answers[question.number] = value;
    }
    result.attempts[id] = {answers, checked:saved.checked === true && Object.keys(answers).length === original.questions.length};
  }
  for (const item of Object.values(data.phrases)) {
    if (!item || !Object.hasOwn(statusLabel, item.status)) continue;
    const source = getSentence(item);
    if (!source || source.text !== item.text || !Number.isInteger(item.start) ||
        !Number.isInteger(item.end) || item.start < 0 || item.end > source.text.length ||
        item.start >= item.end || !source.text.slice(item.start,item.end).trim()) continue;
    const {groupId,sentenceId,text,start,end,status} = item;
    const record = {groupId,sentenceId,text,start,end,status};
    result.phrases[phraseKey(record)] = record;
  }
  return result;
}

try {
  const saved = localStorage.getItem(storageKey);
  if (saved) state = clean(JSON.parse(saved));
} catch {
  notice.textContent = 'Không đọc được tiến độ đã lưu.';
}

function save() {
  try {
    localStorage.setItem(storageKey,JSON.stringify(state));
    return true;
  } catch {
    notice.textContent = 'Trình duyệt không lưu được tiến độ. Hãy xuất file sao lưu.';
    return false;
  }
}

function highlight(id) {

  for (const row of screen.querySelectorAll('[data-row]')) row.classList.toggle('playing', row.dataset.row === id);
  for (const control of screen.querySelectorAll('[data-action="meaning-audio"]')) {
    const index = Number(control.dataset.index);
    const sentence = group()?.sentences[index];
    const playing = id !== undefined && sentence && sentenceId(sentence,index) === id;
    control.setAttribute('aria-pressed',String(Boolean(playing)));
    control.classList.toggle('is-playing',Boolean(playing));
  }
}

function stopAudio() {
  playVersion++;
  clipEnd = undefined;
  audioFailure = null;
  playingSentenceId = undefined;
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  highlight(undefined);
}

function useAudio(path, failure) {
  audioFailure = failure;
  audio.src = asset(path);
}

audio.addEventListener('error', () => {
  const handle = audioFailure;
  audioFailure = null;
  handle?.();
});
audio.addEventListener('ended', () => highlight(undefined));
audio.addEventListener('pause', () => highlight(undefined));
audio.addEventListener('play', () => highlight(playingSentenceId));
audio.addEventListener('timeupdate', () => {
  if (clipEnd !== undefined && audio.currentTime >= clipEnd) {
    audio.pause();
    clipEnd = undefined;
  }
});

async function playSentence(original, sentence, id) {
  stopAudio();
  playingSentenceId = id;
  notice.textContent = '';
  const version = playVersion;
  const unavailable = () => {
    if (version !== playVersion) return;
    audioFailure = null;
    highlight(undefined);
    notice.textContent = 'Không phát được audio cho câu này.';
  };

  async function play() {
    if (version !== playVersion) return;
    try {
      await audio.play();
      if (version === playVersion) highlight(id);
    } catch (error) {
      if (version === playVersion && error.name === 'NotAllowedError') unavailable();
      else if (version === playVersion && audioFailure && audio.error) {
        const handle = audioFailure;
        audioFailure = null;
        handle();
      } else if (version === playVersion && error.name !== 'AbortError') unavailable();
    }
  }

  function fallback() {
    const start = sentence.audioStart ?? sentence.start;
    const end = sentence.audioEnd ?? sentence.end;
    if (!original.audio || sentence.timed !== true || !Number.isFinite(start) ||
        !Number.isFinite(end) || start < 0 || start >= end) return unavailable();
    audio.addEventListener('loadedmetadata', () => {
      if (version !== playVersion) return;
      if (start >= audio.duration || end > audio.duration + 0.1) return unavailable();
      audio.currentTime = start;
      clipEnd = Math.min(end,audio.duration);
      void play();
    }, {once:true});
    useAudio(original.audio,unavailable);
  }

  if (sentence.audio) {
    useAudio(sentence.audio,fallback);
    await play();
  } else fallback();
}

function fullAudio(playNow = false) {
  const source = group().audio;
  if (!source) {
    notice.textContent = 'Bài này chưa có audio toàn đoạn.';
    return;
  }
  useAudio(source, () => {notice.textContent = 'Không tải được audio toàn đoạn.';});
  screen.querySelector('[data-player]')?.append(audio);
  if (playNow) audio.play().catch(() => {if (page === 'finish') notice.textContent = 'Không phát được audio toàn đoạn.';});
}

function marked(text, ranges) {
  const merged = [];
  for (const {start,end} of [...ranges].sort((a,b) => a.start-b.start)) {
    const last = merged.at(-1);
    if (last && start <= last.end) last.end = Math.max(last.end,end);
    else merged.push({start,end});
  }
  let pointer = 0;
  let html = '';
  for (const range of merged) {
    html += escape(text.slice(pointer,range.start)) + '<mark>' + escape(text.slice(range.start,range.end)) + '</mark>';
    pointer = range.end;
  }
  return html + escape(text.slice(pointer));
}

function questionText(original, question, checked) {
  const source = question.text;
  const approved = quizApproved[original.id + ':' + question.number];
  if (!checked && approved) return renderEmphasis(source,approved.en.flatMap(([text,style]) => emphasisSpans(source,[text],style)));
  const emphasis = testOneQuestionEmphasis[original.id + ':' + question.number];
  if (!emphasis) return escape(source);

  let spans = Object.entries(emphasis).flatMap(([style, excerpts]) =>
    emphasisSpans(source, excerpts, style));
  if (original.test > 1) {
    for (const actor of synchronizedQuestionActors[original.id + ':' + question.number] ?? []) {
      spans = spans.flatMap(span => {
        if (span.style !== 'focus' || actor.start >= span.end || actor.end <= span.start) return [span];
        const pieces = [];
        if (span.start < actor.start) pieces.push({...span,end:actor.start});
        if (span.end > actor.end) pieces.push({...span,start:actor.end});
        return pieces;
      });
      if (!spans.some(span => span.style === 'actor' && actor.start < span.end && actor.end > span.start)) spans.push(actor);
    }
  }
  // Guarantee emphasis for explicit negative instructions in annotated questions.
  for (const match of source.matchAll(/\b(?:NOT|EXCEPT)\b/g)) {
    if (spans.some(span => span.style === 'focus' && span.start <= match.index &&
        span.end >= match.index + match[0].length)) continue;
    spans.push({start: match.index, end: match.index + match[0].length, style: 'focus'});
  }
  return checked ? learningText(original,'q'+question.number,source,spans) : renderEmphasis(source,spans);
}

function emphasisSpans(source, excerpts, style) {
  return excerpts.flatMap(excerpt => {
    if (!excerpt) return [];
    const start = source.indexOf(excerpt);
    if (start < 0 || source.lastIndexOf(excerpt) !== start) return [];
    return [{start, end: start + excerpt.length, style}];
  });
}

function renderEmphasis(source, spans) {
  spans.sort((a,b) => a.start - b.start);
  let cursor = 0;
  let html = '';
  for (const {start, end, style} of spans) {
    if (start < cursor) continue;
    html += escape(source.slice(cursor,start));
    const className = style === 'focus' ? ' class="question-focus"' : '';
    html += '<strong' + className + '>' + escape(source.slice(start,end)) + '</strong>';
    cursor = end;
  }
  return html + escape(source.slice(cursor));
}

function optionEmphasis(source, bold, notes) {
  const red = notes.filter(note => note.type === 'phrasal' || note.type === 'collocation');
  const boundaries = [...new Set([0,source.length,...bold.flatMap(s => [s.start,s.end]),...red.flatMap(s => [s.start,s.end])])].sort((a,b) => a-b);
  return boundaries.slice(0,-1).map((start,i) => {
    const end = boundaries[i+1], text = escape(source.slice(start,end));
    if (red.some(s => s.start <= start && s.end >= end)) return `<strong class="option-focus">${text}</strong>`;
    return bold.some(s => s.start <= start && s.end >= end) ? `<strong>${text}</strong>` : text;
  }).join('');
}

const languageTypes = {phrasal:'Cụm động từ', collocation:'Collocation', structure:'Cấu trúc'};
let activeLanguageNote;

function studySource(original,id) {
  const match = /^q(\d+)(?::([A-D]))?$/.exec(id);
  if (!match) return original?.sentences?.find((row,index) => sentenceId(row,index) === id);
  const question = original?.questions.find(row => row.number === Number(match[1]));
  return match[2] ? question?.options.find(option => option.letter === match[2]) : question;
}

function languageNotes(original,id,source) {
  const existing = [...(testOneLanguageNotes[original.id]?.[id] ?? []),...(synchronizedLanguageNotes[original.id]?.[id] ?? [])];
  for (const [text,type,meaning] of optionPhraseCatalog) {
    if (!/^q\d+:[A-D]$/.test(id)) break;
    const start = source.toLowerCase().indexOf(text.toLowerCase()), end = start + text.length;
    if (start < 0 || source.toLowerCase().lastIndexOf(text.toLowerCase()) !== start || /[a-z]/i.test(source[start-1] ?? '') || /[a-z]/i.test(source[end] ?? '') || existing.some(note => start < note.end && end > note.start)) continue;
    existing.push({text:source.slice(start,end),start,end,type,meaning});
  }
  return existing.filter(note => source.slice(note.start,note.end) === note.text).sort((a,b)=>a.start-b.start);
}

const optionPhraseCatalog = [
 ['cancel a reservation','collocation','hủy đặt chỗ'],['make a reservation','collocation','đặt chỗ'],
 ['confirm a reservation','collocation','xác nhận đặt chỗ'],['sign up for','phrasal','đăng ký'],
 ['sign up','phrasal','đăng ký'],['pick up','phrasal','lấy'],['set up','phrasal','thiết lập'],
 ['setting up','phrasal','thiết lập'],['turn on','phrasal','bật'],['print out','phrasal','in ra'],
 ['send out','phrasal','gửi đi'],['went out of business','phrasal','ngừng kinh doanh'],
 ['reach out to','phrasal','liên hệ với'],['cut down','phrasal','chặt'],['cleaning out','phrasal','dọn sạch'],
 ['place an order','collocation','đặt hàng'],['sign a contract','collocation','ký hợp đồng'],
 ['negotiate a contract','collocation','đàm phán hợp đồng'],['give a presentation','collocation','thuyết trình'],
 ['make a phone call','collocation','gọi điện'],['conduct an interview','collocation','tiến hành phỏng vấn'],
 ['conduct an inspection','collocation','tiến hành kiểm tra'],['conduct some research','collocation','thực hiện nghiên cứu'],
 ['apply for a permit','collocation','xin giấy phép'],['apply for a job','collocation','ứng tuyển'],
 ['receive a refund','collocation','nhận tiền hoàn lại'],['request a refund','collocation','yêu cầu hoàn tiền'],
 ['pay a deposit','collocation','trả tiền đặt cọc'],['pay a bill','collocation','thanh toán hóa đơn'],
 ['receive a discount','collocation','được giảm giá'],['offer a discount','collocation','giảm giá'],
 ['meet heavy demand','collocation','đáp ứng nhu cầu cao'],['customer feedback','collocation','phản hồi khách hàng'],
 ['advertising campaign','collocation','chiến dịch quảng cáo'],['press conference','collocation','họp báo'],
 ['trade show','collocation','hội chợ thương mại'],['job opening','collocation','vị trí tuyển dụng'],
 ['training session','collocation','buổi đào tạo'],['business hours','collocation','giờ làm việc'],
 ['hours of operation','collocation','giờ hoạt động'],['customer service','collocation','dịch vụ khách hàng'],
 ['business cards','collocation','danh thiếp'],['market research','collocation','nghiên cứu thị trường'],
 ['fund-raising dinner','collocation','bữa tối gây quỹ'],['marketing strategy','collocation','chiến lược tiếp thị'],
 ['real estate agent','collocation','nhân viên bất động sản'],['medical appointment','collocation','cuộc hẹn khám bệnh'],
 ['safety regulations','collocation','quy định an toàn'],['performance review','collocation','đánh giá hiệu suất'],
 ['job candidate','collocation','ứng viên'],['delivery fee','collocation','phí giao hàng'],
 ['purchase a membership','collocation','mua thẻ thành viên'],['buy tickets','collocation','mua vé'],
 ['reserve a booth','collocation','đặt gian hàng'],['organize a focus group','collocation','tổ chức nhóm tập trung'],
 ['secure some funding','collocation','đảm bảo nguồn tài trợ'],['take inventory','collocation','kiểm kê'],
 ['make a complaint','collocation','khiếu nại'],['make a payment','collocation','thanh toán'],
 ['request time off','collocation','xin nghỉ phép'],['extend store hours','collocation','kéo dài giờ mở cửa']
];

function learningText(original,id,source,bold=[],saved=[]) {
  const notes = languageNotes(original,id,source).sort((a,b) => a.start-b.start);
  if (!notes.length) return saved.length ? marked(source,saved) : renderEmphasis(source,bold);
  function piece(start,end) {
    const inline = bold.filter(span => span.start < end && span.end > start)
      .map(span => ({...span,start:Math.max(span.start,start)-start,end:Math.min(span.end,end)-start}));
    const selected = saved.filter(span => span.start < end && span.end > start)
      .map(span => ({start:Math.max(span.start,start)-start,end:Math.min(span.end,end)-start}));
    const text = source.slice(start,end);
    return selected.length ? marked(text,selected) : renderEmphasis(text,inline);
  }
  let cursor = 0;
  let html = '';
  for (const note of notes) {
    if (note.start < cursor) continue;
    html += piece(cursor,note.start);
    const inner = renderEmphasis(note.text,bold.filter(span => span.start < note.end && span.end > note.start)
      .map(span => ({...span,start:Math.max(span.start,note.start)-note.start,end:Math.min(span.end,note.end)-note.start})));
    const selected = saved.some(span => span.start < note.end && span.end > note.start);
    html += `<span class="language-note ${note.type}${selected?' saved-note':''}" tabindex="0" role="button" aria-haspopup="dialog" data-action="language-note" data-source="${escape(id)}" data-start="${note.start}">${inner}</span>`;
    cursor = note.end;
  }
  return html + piece(cursor,source.length);
}

function audioSentence(original,id,excerpt) {
  if (!id.startsWith('q')) return original.sentences?.find((row,index) => sentenceId(row,index) === id);
  const words = excerpt.toLowerCase();
  return original.sentences?.find(row => {
    const line = row.text.toLowerCase();
    const start = line.indexOf(words);
    return start >= 0 && !/\w/.test(line[start-1] ?? '') && !/\w/.test(line[start+words.length] ?? '');
  });
}

function openLanguageNote(original,id,offset) {
  const source = studySource(original,id);
  const note = languageNotes(original,id,source.text).find(entry => entry.start === offset);
  if (!note) return;
  const item = {groupId:original.id,sentenceId:id,text:source.text,start:note.start,end:note.end,status:'new'};
  const sentence = audioSentence(original,id,note.text);
  activeLanguageNote = {original,item,sentence};
  const dialog = screen.querySelector('#language-dialog');
  dialog.innerHTML = `<h3 id="language-title" lang="en">${escape(note.text)}</h3>
    <p class="muted">${languageTypes[note.type]}</p><p>${escape(note.meaning)}</p>
    <div class="actions">${button('Nghe câu chứa cụm','note-audio',sentence?'':'disabled')}
    ${button('Thêm vào luyện cụm','note-save',Object.hasOwn(state.phrases,phraseKey(item))?'disabled':'')}
    ${button('Đóng','note-close')}</div>${sentence?'':'<p class="muted">Không có câu audio tương ứng.</p>'}`;
  dialog.showModal();
}
function questionTranslations(original) {
  if (typeof original.translation !== 'string') return new Map();

  // The source puts numbered questions and lettered options after the dialogue.
  const source = original.translation;
  const markers = [...source.matchAll(/^[ \t]*(?:(\d{2})[.)]?[ \t]+|\(([A-D])\)[ \t]*)/gm)];
  const start = markers.findIndex(marker => Number(marker[1]) === original.questions[0]?.number);
  if (start === -1) return new Map();
  const entries = markers.slice(start);
  const expected = original.questions.flatMap(question => [String(question.number), ...question.options.map(option => option.letter)]);
  if (entries.length !== expected.length || entries.some((marker,index) =>
    (marker[1] ?? marker[2]) !== expected[index])) return new Map();

  let index = 0;
  function read(english) {
    const marker = entries[index++];
    const text = source.slice(marker.index + marker[0].length, entries[index]?.index)
      .trim().replace(/\s+/gu,' ');
    // Some source blocks repeat the English line before the Vietnamese text.
    if (original.id === 't1-38' && marker[1] === '40') return '';
    if (original.id === 't1-38' && index > 11 && text === english) return '';
    return text.startsWith(english + ' ') ? text.slice(english.length).trim() : text;
  }

  return new Map(original.questions.map(question => {
    const key = original.id + ':' + question.number;
    const translatedQuestion = read(question.text);
    const options = Object.fromEntries(question.options.map(option => {
      const translated = read(option.text);
      return [option.letter,synchronizedTranslationCorrections[key + ':' + option.letter] ?? translated];
    }));
    return [question.number, {question:synchronizedTranslationCorrections[key] ?? translatedQuestion,options}];
  }));
}

function fullTranslationText(original) {
  const numbers = new Set(original.questions.map(question => question.number));
  const paragraphs = [];
  for (const raw of original.translation.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const number = /^(\d{2})[.)]?\s/.exec(line);
    const newEntry = /^(?:(?:Nam|Nữ|M\d?|W\d?)\s*:|[MW]\d?\s|\([A-D]\)\s*)/u.test(line)
      || (number && numbers.has(Number(number[1])));
    if (!paragraphs.length || newEntry) paragraphs.push(line);
    else paragraphs[paragraphs.length - 1] += ' ' + line;
  }
  return paragraphs.join('\n');
}

function questions(checked) {
  const original = group();
  const answers = attempt().answers;
  const translations = questionTranslations(original);
  return original.questions.map(question => {
    const pick = answers[question.number];
    const translated = translations.get(question.number);
    const prefix = (checked ? 'review' : 'quiz') + '-vi-' + question.number;
    const targets = [prefix];
    const emphasis = original.test === 1 ? testOneBilingualEmphasis[question.number]
      : additionalBilingualEmphasis[original.id + ':' + question.number];
    const translation = (text,id,spans) => {
      const content = text ? renderEmphasis(text,spans) : 'Chưa có bản dịch.';
      return `<span id="${id}" class="question-translation" lang="vi" hidden>${content}</span>`;
    };
    const graphic = question.graphic ? `<img class="graphic" src="${escape(asset(question.graphic))}" alt="Hình cho câu ${question.number}">` : '';
    const options = question.options.map(option => {
      const correct = checked && question.answer === option.letter;
      const wrong = checked && pick === option.letter && !correct;
      const id = prefix + '-' + option.letter;
      targets.push(id);
      const pair = emphasis?.['ABCD'.indexOf(option.letter) + 1] ?? '';
      const separator = pair.indexOf('/');
      const english = separator === -1 ? pair : pair.slice(0,separator);
      const vietnamese = separator === -1 ? '' : pair.slice(separator + 1);
      const synchronized = original.test > 1 ? synchronizedOptionEmphasis[original.id + ':' + question.number + ':' + option.letter] : undefined;
      const bold = synchronized?.en ?? emphasisSpans(option.text,[english]);
      const sourceId = 'q'+question.number+':'+option.letter;
      const notes = languageNotes(original,sourceId,option.text);
      const approved = quizApproved[original.id + ':' + question.number + ':' + option.letter];
      const optionText = checked ? learningText(original,sourceId,option.text,bold) : approved ? renderEmphasis(option.text,approved.en.flatMap(([text,style]) => emphasisSpans(option.text,[text],style))) : renderEmphasis(option.text,bold);
      const tag = checked ? 'div' : 'label';
      const translatedOption = translated?.options[option.letter] ?? '';
      const translatedBold = synchronized?.vi ?? emphasisSpans(translatedOption,[vietnamese]);
      const translatedNotes = notes.filter(note => note.type === 'phrasal' || note.type === 'collocation').flatMap(note => emphasisSpans(translatedOption,[note.meaning]));
      const translatedHtml = translatedOption ? (!checked && approved ? renderEmphasis(translatedOption,approved.vi.flatMap(([text,style]) => emphasisSpans(translatedOption,[text],style))) : checked ? optionEmphasis(translatedOption,translatedBold,translatedNotes.map(span => ({...span,type:'collocation'}))) : renderEmphasis(translatedOption,translatedBold)) : 'Chưa có bản dịch.';
      return `<${tag} class="option ${correct?'correct':wrong?'wrong':''}"><input type="radio" ${checked?'aria-label="'+escape(option.letter+'. '+option.text)+'"':''} name="q${question.number}" value="${escape(option.letter)}" ${pick===option.letter?'checked':''} ${checked?'disabled':''}><span><b>${escape(option.letter)}.</b> ${optionText}${correct?' · Đáp án đúng':wrong?' · Bạn chọn sai':''}<span id="${id}" class="question-translation" lang="vi" hidden>${translatedHtml}</span></span></${tag}>`;
    }).join('');
    const translatedQuestion = translated?.question ?? '';
    const actorIndex = testOneQuestionEmphasis[original.id + ':' + question.number]?.actor
      ? (testOneVietnameseActorIndex[question.number] ?? 0) : -1;
    const approved = !checked && quizApproved[original.id + ':' + question.number];
    const translatedSpans = approved ? approved.vi.flatMap(([text,style]) => emphasisSpans(translatedQuestion,[text],style)) : (original.test > 1 ? synchronizedQuestionVietnamese[original.id + ':' + question.number] : undefined) ?? (emphasis?.[0].split('|') ?? []).flatMap((excerpt,index) =>
      emphasisSpans(translatedQuestion,[excerpt],index === actorIndex ? 'actor' : 'focus'));
    return `<fieldset><legend><span class="question-heading"><span>${question.number}. ${questionText(original,question,checked)}${translation(translatedQuestion,prefix,translatedSpans)}</span>
      ${button('<span class="chevron" aria-hidden="true"></span>','question-translation',`class="question-translation-control" aria-label="Hiện bản dịch" aria-expanded="false" aria-controls="${targets.join(' ')}"`)}
      </span></legend><div>${graphic}${options}</div></fieldset>`;
  }).join('');
}

function renderQuiz() {
  const selected = group();
  const saved = attempt();
  const options = groups.filter(row => row.test === selected.test);
  const testOptions = tests.map(test => `<option value="${test}" ${test===selected.test?'selected':''}>Test ${test}</option>`).join('');
  return `<div class="picker"><label>Test<select id="test-select">${testOptions}</select></label><label>Hội thoại<select id="group-select">${options.map(row => `<option value="${escape(row.id)}" ${row.id===selected.id?'selected':''}>Câu ${row.start}–${row.end}</option>`).join('')}</select></label></div>
    <h2>Nghe và chọn đáp án</h2><div data-player></div>${questions(false)}
    <div class="actions">${button('Kiểm tra','check',`class="primary" ${Object.keys(saved.answers).length===selected.questions.length?'':'disabled'}`)}${saved.checked?button('Xem chữa bài','transcript')+button('Làm lại hội thoại','reset-quiz'):''}</div>`;
}

let reviewSection = 'meaning';
const meaningAnswers = new Map();
const meaningPositions = new Map();

function meaningItems(original) {
  const authored = [...(testOneMeaningExercises[original.id] ?? []), ...(testOneExtraMeaningExercises[original.id] ?? []), ...(testOneMoreMeaningExercises[original.id] ?? []), ...(additionalMeaningExercises[original.id] ?? [])];
  const supplied = synchronizedLearningData[original.id]?.exercises ?? [];
  const authoredSentences = new Set(authored.map(item => item[0]));
  return [...authored,...supplied.filter(item => !authoredSentences.has(item[0]))].sort((a,b) => a[0] - b[0]);
}

function normalizeMeaning(text) {
  return text.normalize('NFC').toLocaleLowerCase('vi').trim().replace(/\s+/gu,' ').replace(/[.!?,;:]+$/u,'').trim();
}

const meaningPatterns = {
  'đặt ba vé': /^(?:đặt(?: trước)?|đăng ký mua) (?:ba|3) (?:tấm |chiếc )?vé$/u,
  'chỗ trống': /^(?:(?:chỗ|ghế)(?: ngồi)?(?: còn trống| trống| còn lại)?|vị trí còn trống)$/u,
  'bán rất nhanh': /^(?:(?:được )?bán|tiêu thụ) (?:(?:rất|khá|cực kỳ) )?(?:nhanh|chạy|nhanh chóng)$/u,
  'màn trình diễn đáng kinh ngạc': /^(?:(?:một |cái )?(?:màn|buổi|phần) (?:trình diễn|biểu diễn|thể hiện)|phong độ|sự thể hiện)(?: của cô ấy)? (?:rất |thật )?(?:đáng kinh ngạc|ấn tượng|xuất sắc|tuyệt vời|ngoạn mục|đáng nể)(?: của cô ấy)?$/u,
  'thanh toán trước': /^(?:(?:thanh toán|trả(?: tiền)?|chi trả) (?:từ )?trước|trả trước tiền)$/u,
  'liên lạc với': /^(?:liên lạc|liên hệ|kết nối)(?: với)?$/u,
  'đang cho thuê': /^(?:đang (?:được )?(?:chào )?cho thuê|có thể thuê|đang rao cho thuê)$/u,
  'mang lại': /^(?:mang|đem|thu) (?:về|lại|được)$/u
};

function meaningMatches(value,answer,alternatives) {
  return [answer,...alternatives].some(accepted => normalizeMeaning(accepted) === value)
    || meaningPatterns[answer]?.test(value) === true;
}

function meaningFeedback(result,answer,index) {
  if (result === true) return 'Đúng ý rồi.';
  if (result !== false) return '';
  return `<span>Đối chiếu nghĩa: <strong>${escape(answer)}</strong>.</span>
    ${button('Mình hiểu đúng ý','meaning-confirm',`data-index="${index}"`)}`;
}

function renderMeaningExercise(original,items) {
  const positions = [...new Set(items.map(item => item[0]))];
  const position = Math.min(meaningPositions.get(original.id) ?? 0,positions.length-1);
  return `<section id="meaning-exercise" class="meaning-exercise">
    <div class="meaning-heading"><h3>Điền nghĩa tiếng Việt</h3><span class="meaning-progress">Câu ${position+1}/${positions.length}</span></div>
    <div class="meaning-picker" role="group" aria-label="Chọn câu điền nghĩa">
      ${positions.map((_,index) => button(index+1,'meaning-move',`data-index="${index}" aria-label="Câu ${index+1}" aria-current="${index===position?'step':'false'}"`)).join('')}
    </div>
    <form data-meaning-exercise novalidate>
    ${items.map(([sentenceIndex,vietnamese,answer,,cue=0,excerpt],index) => {
      const sentence = original.sentences[sentenceIndex];
      const id = sentenceId(sentence,sentenceIndex);
      const source = excerpt && sentence.text.includes(excerpt) ? excerpt : sentence.text;
      const spans = typeof cue === 'string' ? emphasisSpans(source,[cue]) : languageNotes(original,id,source).slice(cue,cue+1);
      const {start:cueStart,end:cueEnd} = spans[0] ?? {start:0,end:source.length};
      const tail = source.slice(cueEnd);
      const punctuation = tail.match(/^[?!.:,;]+/u)?.[0] ?? '';
      const start = vietnamese.indexOf(answer);
      const saved = meaningAnswers.get(original.id + ':' + index);
      const result = saved?.correct;
      return `<div class="meaning-item" data-meaning-index="${index}" data-meaning-page="${positions.indexOf(sentenceIndex)}" ${positions.indexOf(sentenceIndex)===position?'':'hidden'}>
        <div class="meaning-pair">
          <p class="meaning-aligned meaning-english" lang="en">
            <span class="meaning-language-label" lang="vi">Tiếng Anh</span>
            ${button('<span class="play-icon" aria-hidden="true"></span>','meaning-audio',`class="sentence-play meaning-audio" data-index="${sentenceIndex}" aria-label="Nghe câu tiếng Anh" title="Nghe câu tiếng Anh (Ctrl)"`)}
            <span class="meaning-before">${escape(source.slice(0,cueStart).trimEnd())}</span>
            <span><strong class="meaning-target" id="meaning-en-${index}">${escape(source.slice(cueStart,cueEnd))}</strong>${escape(punctuation)}</span>
            <span>${escape(tail.slice(punctuation.length).trimStart())}</span>
          </p>
          <p class="meaning-aligned meaning-line" lang="vi">
            <span class="meaning-language-label">Tiếng Việt</span>
            <span class="meaning-before">${escape(vietnamese.slice(0,start).trimEnd())}</span>
            <input type="text" aria-label="Điền nghĩa tiếng Việt, câu ${index+1}" aria-describedby="meaning-en-${index} meaning-result-${index}" placeholder="Điền nghĩa" autocomplete="off" value="${escape(saved?.value)}">
            <span>${escape(vietnamese.slice(start + answer.length).trimStart())}</span>
          </p>
        </div>
        <span id="meaning-result-${index}" class="meaning-result" data-result="${result===true?'correct':result===false?'retry':''}">${meaningFeedback(result,answer,index)}</span>
      </div>`;
    }).join('')}
    <div class="actions meaning-actions">
      ${button('Câu trước','meaning-previous',position===0?'disabled':'')}
      ${button('Câu tiếp','meaning-next',`class="primary" ${position===positions.length-1?'hidden':''}`)}
      <button type="submit" class="primary" ${position===positions.length-1?'':'hidden'}>Kiểm tra cả bài</button>
    </div>
    <p class="meaning-summary" role="status"></p>
    </form>
  </section>`;
}

function combineMeaningBlanks() {
  const exercise = screen.querySelector('#meaning-exercise');
  if (!exercise) return;
  const items = meaningItems(group());
  const rows = [...exercise.querySelectorAll('.meaning-item')];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row.dataset.combined) continue;
    const same = rows.slice(i+1).filter(other =>
      !other.dataset.combined && other.dataset.meaningPage === row.dataset.meaningPage
      && items[i][1].includes(items[Number(other.dataset.meaningIndex)][1]));
    if (!same.length) continue;
    const line = row.querySelector('.meaning-line');
    const source = items[i][1];
    const members = [row,...same].map(element => {
      const index = Number(element.dataset.meaningIndex);
      return {element,index,answer:items[index][2],start:source.indexOf(items[index][2]),
        input:element.querySelector('input'),feedback:element.querySelector('.meaning-result')};
    }).sort((a,b) => a.start-b.start);
    if (members.some((member,index) => member.start < 0 ||
      (index > 0 && member.start < members[index-1].start + members[index-1].answer.length))) continue;
    const label = line.querySelector('.meaning-language-label');
    line.replaceChildren(label);
    let cursor = 0;
    for (const member of members) {
      line.append(document.createTextNode(source.slice(cursor,member.start)));
      const wrapper = document.createElement('span');
      wrapper.className = 'meaning-blank-entry';
      const input = member.input;
      input.dataset.answerIndex = member.index;
      if (member.element !== row) {
        wrapper.dataset.meaningIndex = member.index;
        wrapper.dataset.meaningPage = row.dataset.meaningPage;
      }
      wrapper.append(input);
      if (member.element !== row) wrapper.append(member.feedback);
      line.append(wrapper);
      cursor = member.start + member.answer.length;
      if (member.element !== row) {
        const highlight = member.element.querySelector('.meaning-target');
        const text = highlight?.textContent;
        const english = row.querySelector('.meaning-english');
        if (text) {
          const walker = document.createTreeWalker(english,NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            if (node.parentElement.closest('strong,button') || !node.data.includes(text)) continue;
            const offset = node.data.indexOf(text);
            const tail = node.splitText(offset);
            tail.splitText(text.length);
            const strong = document.createElement('strong');
            strong.className = 'meaning-target';
            tail.replaceWith(strong);
            strong.append(tail);
            break;
          }
        }
        member.element.dataset.combined = 'true';
        member.element.hidden = true;
      }
    }
    line.append(document.createTextNode(source.slice(cursor)));
  }
}

function renderTranscript() {
  const selected = group();
  const exercises = meaningItems(selected);
  const sections = [['answers','Đáp án'],['transcript','Transcript']];
  if (exercises.length) sections.push(['meaning','Điền nghĩa']);
  const visibleSection = sections.some(([id]) => id === reviewSection) ? reviewSection : 'answers';
  const hasTranslation = (!exercises.length && typeof selected.translation === 'string')
    || selected.sentences?.some(sentence => sentence.translation);
  const saved = phrases().filter(item => item.groupId === selected.id);
  const correct = selected.questions.filter(question => attempt().answers[question.number] === question.answer).length;
  const lines = (selected.sentences ?? []).map((sentence,index) => {
    const id = sentenceId(sentence,index);
    const speaker = ({W:'Nữ',M:'Nam',W1:'Nữ 1',W2:'Nữ 2',M1:'Nam 1',M2:'Nam 2'})[sentence.speaker] ?? sentence.speaker;
    const ranges = saved.filter(item => item.sentenceId === id);
    return `<article class="sentence" data-row="${escape(id)}">
      ${button('<span class="play-icon" aria-hidden="true"></span>','sentence',`class="sentence-play" data-index="${index}" aria-label="Nghe câu ${index+1}"`)}
      <div><span class="speaker">${escape(speaker)}</span><p class="english" lang="en" data-sentence="${index}">${learningText(selected,id,sentence.text,[],ranges)}</p>
      ${sentence.translation?`<p class="line-translation" ${showTranslation?'':'hidden'}>${escape(sentence.translation)}</p>`:''}</div></article>`;
  }).join('');
  return `<div class="review-header"><div><p class="muted">Test ${selected.test} · Câu ${selected.start}–${selected.end}</p><h2>Chữa bài</h2></div>
    <span class="review-score">${correct}/${selected.questions.length} câu đúng</span></div>
    <div class="review-switch" role="group" aria-label="Nội dung chữa bài">
      ${sections.map(([id,label]) => button(label,'review-section',`data-section="${id}" aria-controls="review-${id}" aria-pressed="${visibleSection===id}"`)).join('')}
    </div>
    <section id="review-answers" ${visibleSection==='answers'?'':'hidden'}>${questions(true)}</section>
    <section id="review-transcript" ${visibleSection==='transcript'?'':'hidden'}>
    ${hasTranslation ? `<div class="bar transcript-tools">${button(showTranslation?'Ẩn bản dịch':'Hiện bản dịch','translation',`aria-pressed="${showTranslation}"`)}</div>` : ''}
    <p class="muted">Bôi đen từ hoặc cụm tiếng Anh trong một câu. Thử chọn 2–3 cụm mỗi buổi.</p>
    <div class="transcript-lines">${lines || '<p>Bài này chưa có dữ liệu từng câu.</p>'}</div><div id="selection-action" class="selection-action"></div>
    ${!exercises.length && typeof selected.translation==='string'?`<section id="full-translation" class="translation" ${showTranslation?'':'hidden'}><h3>Bản dịch của cả bài</h3><p>${escape(fullTranslationText(selected))}</p></section>`:''}
    </section>
    ${exercises.length?`<section id="review-meaning" ${visibleSection==='meaning'?'':'hidden'}>${renderMeaningExercise(selected,exercises)}</section>`:''}
    <div class="review-footer">
    <div class="actions">${button(`Luyện cụm đã chọn (${saved.length})`,'study-selected',`class="primary" ${saved.length?'':'disabled'}`)}${button('Kết thúc buổi','finish')}</div>
    ${saved.length?`<h3>Cụm đã chọn</h3>${saved.map(item => `<div class="saved"><div class="bar"><span>${escape(item.text.slice(item.start,item.end))}</span>${button('Bỏ chọn','remove',`data-key="${escape(phraseKey(item))}"`)}</div></div>`).join('')}`:''}</div>`;
}

function renderPractice() {
  const item = state.phrases[queue[queueIndex]];
  if (!item) return `<h2>Luyện cụm</h2><p>Đã hết lượt luyện này.</p><div class="actions">${button('Ôn lại','review')}${button('Kết thúc buổi','finish','class="primary"')}</div>`;
  const source = byId.get(item.groupId);
  const sentence = getSentence(item);
  const canListen = audioSentence(source,item.sentenceId,item.text.slice(item.start,item.end));
  return `<h2>Luyện cụm</h2><p class="muted">Cụm ${queueIndex+1}/${queue.length} · Test ${source.test}, câu ${source.start}–${source.end} · ${statusLabel[item.status]}</p>
    <div class="answer-text" id="practice-text" ${revealed?'':'hidden'}><p lang="en">${learningText(source,item.sentenceId,item.text,[],[item])}</p>${sentence.translation?`<p>${escape(sentence.translation)}</p>`:''}</div>
    <div class="actions">${button('Nghe không nhìn chữ','blind',`class="primary" ${canListen?'':'disabled'}`)}${button(revealed?'Ẩn chữ':'Hiện chữ','reveal')}${button('Nghe lại để nhại theo','shadow',canListen?'':'disabled')}</div>
    <p class="muted">${canListen?'Audio phát câu hoặc nhóm ý chứa cụm đã chọn.':'Không có câu audio tương ứng với cụm này.'}</p>
    <div class="actions">${button('Nghe ra rồi','rate','data-status="clear"')}${button('Còn vướng','rate','data-status="stuck"')}${button('Cụm tiếp theo','next')}${button('Kết thúc buổi','finish')}</div>`;
}

function renderReview() {
  const saved = phrases();
  const sections = ['stuck','new','clear'].map(status => {
    const count = saved.filter(item => item.status === status).length;
    return `<div class="saved"><div class="bar"><div><strong>${statusLabel[status]}</strong> · ${count} cụm</div>${button(status==='clear'?'Kiểm tra lại':'Luyện nhóm này','review-status',`data-status="${status}" ${count?'':'disabled'}`)}</div></div>`;
  }).join('');
  return `<h2>Ôn lại các cụm đã lưu</h2><p>${saved.length?'Các cụm còn vướng được ưu tiên trong lượt ôn. Chữ được ẩn khi bắt đầu.':'Các cụm bạn chọn trong phần chữa bài sẽ xuất hiện ở đây.'}</p>
    ${saved.length?`<div class="actions">${button('Bắt đầu ôn','review-all','class="primary"')}</div>${sections}`:button('Làm bài','quiz','class="primary"')}`;
}

function renderFinish() {
  return `<h2>Kết thúc buổi học</h2><p>Test ${group().test} · Hội thoại câu ${group().start}–${group().end}</p>
    <div data-player></div><div class="actions">${button('Nghe lại toàn đoạn','replay')}${button('Xong buổi học','done','class="primary"')}</div>`;
}

function renderDrill() {
  const {title,lessons} = drillGroup();
  const categories = drillGroups.length > 1 ? `<div class="actions" role="group" aria-label="Nhóm bài luyện">
    ${drillGroups.map((category,index) => button(escape(category.title),'drill-group',
      `data-index="${index}" aria-pressed="${index===drillGroupIndex}"`)).join('')}</div>` : '';
  const heading = `${categories}<h2 tabindex="-1">${escape(title)}</h2>`;
  const lesson = drillLesson();
  if (!lesson) return `${heading}<p>Đã hoàn thành ${lessons.length} bài luyện.</p>
    ${button('Luyện lại nhóm','drill-restart','class="primary"')}`;

  const {dialogueId,sentenceIndex,lead,question,clue,choices,correct,explanation} = lesson;
  const sentence = byId.get(dialogueId)?.sentences[sentenceIndex];
  const start = sentence?.text.indexOf(clue) ?? -1;
  const transcript = start < 0 ? escape(sentence?.text) :
    escape(sentence.text.slice(0,start)) + '<mark>' + escape(clue) + '</mark>' +
    escape(sentence.text.slice(start+clue.length));
  return `<div class="drill-heading">
      ${heading}
      <p class="drill-progress">Bài ${drillIndex+1}/${lessons.length}</p>
    </div>
    <div class="drill-listen">
      <p>${escape(lead)}</p>
      ${button('<span class="play-icon" aria-hidden="true"></span>Nghe đoạn audio','drill-play','class="primary"')}
    </div>
    <fieldset class="drill-question">
      <legend>${escape(question)}</legend>
      <div id="drill-options">
        <div class="drill-choices" lang="en">
          ${choices.map((choice,index) => button(
            `<span class="drill-choice-key" aria-hidden="true">${'ABCD'[index]}</span>${escape(choice)}`,
            'drill-answer',`data-index="${index}"`)).join('')}
        </div>
        ${button('Chưa nghe ra','drill-answer','data-index="-1"')}
      </div>
    </fieldset>
    <section class="answer-text drill-explanation" aria-labelledby="drill-clue" hidden>
      <h3 id="drill-clue" tabindex="-1">Lời giải</h3>
      <p id="drill-feedback" role="status"></p>
      <div class="drill-pair">
        <div><span>Cụm nghe được</span><strong lang="en">${escape(clue)}</strong></div>
        <div><span>Cách diễn đạt tương đương</span><strong lang="en">${escape(choices[correct])}</strong></div>
      </div>
      <p class="drill-transcript" lang="en">${transcript}</p>
      <p>${escape(explanation)}</p>
    </section>
    <div class="actions" id="drill-actions" hidden>
      ${button('Ẩn chữ và nghe lại','drill-hide')}
      ${button('Xem lại giải thích','drill-explanation')}
      ${button('Bài tiếp theo','drill-next','class="primary"')}
    </div>`;
}

function updateDrill() {
  const answered = drillAnswer !== undefined;
  const visible = answered && !drillHidden;
  const previousScroll = window.scrollY;
  const panel = screen.querySelector('.panel');
  panel.style.minHeight = '';
  if (visible) {
    screen.querySelector('#drill-feedback').textContent = drillAnswer === drillLesson().correct
      ? 'Bạn đã chọn đúng.'
      : drillAnswer === -1 ? 'Cùng nghe lại manh mối.' : 'Đáp án bạn chọn chưa khớp.';
  }
  for (const control of screen.querySelectorAll('[data-action="drill-answer"]')) {
    control.setAttribute('aria-pressed',String(Number(control.dataset.index) === drillAnswer));
  }
  screen.querySelector('#drill-options').hidden = drillHidden;
  screen.querySelector('.drill-explanation').hidden = !visible;
  screen.querySelector('#drill-actions').hidden = !answered;
  screen.querySelector('[data-action="drill-hide"]').hidden = !visible;
  screen.querySelector('[data-action="drill-explanation"]').hidden = !drillHidden;

  // Keep enough room below the controls when the shorter view would clamp the scroll.
  const scroller = document.scrollingElement;
  if (previousScroll > scroller.scrollHeight - scroller.clientHeight) {
    const panelTop = panel.getBoundingClientRect().top + window.scrollY;
    panel.style.minHeight = `${Math.ceil(previousScroll + scroller.clientHeight - panelTop)}px`;
  }
  window.scrollTo({top:previousScroll,behavior:'instant'});
}

function playDrill() {
  const {dialogueId,sentenceIndex} = drillLesson();
  const original = byId.get(dialogueId);
  const sentence = original?.sentences[sentenceIndex];
  if (sentence) void playSentence(original,sentence,sentenceId(sentence,sentenceIndex));
  else notice.textContent = 'Không tìm thấy câu thoại cho bài luyện này.';
}

function render({scroll=false} = {}) {
  stopAudio();
  activeLanguageNote = undefined;
  pendingSelection = undefined;
  steps.innerHTML = Object.entries(labels).map(([id,label]) =>
    button(label,id,`${page===id?'aria-current="step"':''} ${id==='transcript'&&!attempt().checked?'disabled':''} ${id==='practice'&&!phrases().length?'disabled':''}`)).join('');
  const views = {quiz:renderQuiz,drill:renderDrill,transcript:renderTranscript,practice:renderPractice,review:renderReview,finish:renderFinish};
  screen.innerHTML = `<div class="panel">${page==='done'?'<h2>Đã xong buổi học</h2><div class="actions">'+button('Ôn lại','review')+button('Làm bài','quiz','class="primary"')+'</div>':views[page]()}</div>`;
  if (page === 'quiz') fullAudio();
  if (page === 'drill' && drillLesson()) updateDrill();
  if (page === 'transcript') combineMeaningBlanks();
  if (page === 'transcript' || page === 'practice') {
    screen.insertAdjacentHTML('beforeend','<dialog id="language-dialog" aria-labelledby="language-title"></dialog>');
  }
  if (scroll) screen.scrollIntoView({block:'nearest'});
}

function showPage(next) {
  notice.textContent = '';
  page = next;
  render({scroll:true});
}

function go(next) {
  if (next === 'transcript') {
    if (!save()) return;
    history.pushState(null,'',reviewAddress(state.current));
  } else if (location.hash.startsWith('#chua-bai/')) {
    history.pushState(null,'',location.pathname + location.search);
  }
  showPage(next);
}

function reviewAddress(id) {
  return '#chua-bai/' + encodeURIComponent(id);
}

function pageFromAddress() {
  const legacy = /^#chua-bai\/([\w-]+)$/.exec(location.hash);
  const id = legacy?.[1];
  if (id && byId.has(id) && state.attempts[id]?.checked) {
    state.current = id;
    return 'transcript';
  }
  if (legacy) history.replaceState(null,'',location.pathname + location.search);
  return 'quiz';
}

function start(items) {
  queue = items.map(phraseKey);
  queueIndex = 0;
  revealed = false;
  go('practice');
}

function reviewOrder() {
  return ['stuck','new','clear'].flatMap(status => phrases().filter(item => item.status === status));
}

document.addEventListener('selectionchange', () => {
  if (page !== 'transcript') return;
  const current = selection();
  const area = screen.querySelector('#selection-action');
  if (!area) return;
  const range = current.rangeCount ? current.getRangeAt(0) : null;
  const element = node => node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
  const line = element(range?.startContainer)?.closest('[data-sentence]');
  if (!range || range.collapsed || !line || !line.contains(range.endContainer)) {
    pendingSelection = undefined;
    area.replaceChildren();
    return;
  }
  const index = Number(line.dataset.sentence);
  const sentence = group().sentences[index];
  const before = range.cloneRange();
  before.selectNodeContents(line);
  before.setEnd(range.startContainer,range.startOffset);
  const raw = range.toString();
  if (!raw.trim()) {
    pendingSelection = undefined;
    area.replaceChildren();
    return;
  }
  const offset = before.toString().length;
  const start = offset + raw.length - raw.trimStart().length;
  const end = offset + raw.trimEnd().length;
  pendingSelection = {groupId:group().id,sentenceId:sentenceId(sentence,index),text:sentence.text,start,end,status:'new'};
  const key = phraseKey(pendingSelection);
  const label = Object.hasOwn(state.phrases,key)?'Bỏ chọn cụm này':'Luyện cụm này';
  if (area.firstElementChild?.textContent !== label) area.innerHTML = button(label,'save-phrase','class="primary"');
});

screen.addEventListener('pointerdown', event => {
  if (event.target.closest('[data-action="save-phrase"]')) event.preventDefault();
});

screen.addEventListener('change', event => {
  const input = event.target;
  if (input.id === 'test-select' || input.id === 'group-select') {
    state.current = input.id === 'test-select'
      ? groups.find(row => String(row.test) === input.value).id : input.value;
    go('quiz');
    save();
  } else if (input.type === 'radio') {
    const saved = attempt();
    const question = input.name.slice(1);
    if (saved.answers[question] !== input.value) saved.checked = false;
    saved.answers[question] = input.value;
    screen.querySelector('[data-action="check"]').disabled = Object.keys(saved.answers).length !== group().questions.length;
    const review = screen.querySelector('[data-action="transcript"]');
    if (review) review.hidden = !saved.checked;
    steps.querySelector('[data-action="transcript"]').disabled = !saved.checked;
    save();
  }
});

function handleAction(event) {
  const control = event.target.closest('[data-action]');
  if (!control || control.disabled) return;
  const {action,index,status,key} = control.dataset;
  const item = state.phrases[queue[queueIndex]];
  switch (action) {
    case 'drill-play':
      playDrill();
      break;
    case 'drill-answer':
    case 'drill-explanation':
      if (action === 'drill-answer') drillAnswer = Number(index);
      drillHidden = false;
      updateDrill();
      screen.querySelector('#drill-clue').focus({preventScroll:true});
      break;
    case 'drill-hide':
      drillHidden = true;
      updateDrill();
      screen.querySelector('[data-action="drill-explanation"]').focus({preventScroll:true});
      playDrill();
      break;
    case 'drill-group':
    case 'drill-restart':
    case 'drill-next':
      if (action === 'drill-group') drillGroupIndex = Number(index);
      drillIndex = action === 'drill-next' ? drillIndex+1 : 0;
      drillAnswer = undefined;
      drillHidden = false;
      showPage('drill');
      screen.querySelector('h2').focus({preventScroll:true});
      break;
    case 'check':
      if (Object.keys(attempt().answers).length !== group().questions.length) return;
      attempt().checked = true;
      go('transcript');
      break;
    case 'reset-quiz':
      delete state.attempts[state.current];
      go('quiz');
      save();
      break;
    case 'question-translation': {
      const open = control.getAttribute('aria-expanded') === 'false';
      control.setAttribute('aria-expanded',String(open));
      control.setAttribute('aria-label',open ? 'Ẩn bản dịch' : 'Hiện bản dịch');
      control.closest('fieldset').querySelectorAll('.question-translation').forEach(line => { line.hidden = !open; });
      break;
    }
    case 'review-section':
      reviewSection = control.dataset.section;
      selection()?.removeAllRanges();
      stopAudio();
      for (const tab of screen.querySelectorAll('[data-action="review-section"]')) {
        const selected = tab === control;
        tab.setAttribute('aria-pressed',String(selected));
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
      }
      break;
    case 'meaning-confirm': {
      const row = control.closest('[data-meaning-index]');
      const record = meaningAnswers.get(group().id + ':' + index);
      if (record?.correct !== false) return;
      record.correct = true;
      updateMeaningResult(row,index,record.correct);
      updateMeaningSummary(row.closest('form'));
      row.querySelector('input').focus();
      break;
    }
    case 'meaning-move':
    case 'meaning-next':
    case 'meaning-previous': {
      const position = meaningPositions.get(group().id) ?? 0;
      const next = action === 'meaning-move' ? Number(index) : position + (action === 'meaning-next' ? 1 : -1);
      showMeaningItem(control.closest('#meaning-exercise'),next);
      break;
    }
    case 'translation':
      showTranslation = !showTranslation;
      control.textContent = showTranslation?'Ẩn bản dịch':'Hiện bản dịch';
      control.setAttribute('aria-pressed',String(showTranslation));
      screen.querySelectorAll('#full-translation,.line-translation').forEach(element => {element.hidden = !showTranslation;});
      break;
    case 'sentence': {
      const sentence = group().sentences[Number(index)];
      void playSentence(group(),sentence,sentenceId(sentence,Number(index)));
      break;
    }
    case 'meaning-audio': {
      const sentence = group().sentences[Number(index)];
      if (sentence) void playSentence(group(),sentence,sentenceId(sentence,Number(index)));
      break;
    }
    case 'language-note':
      if (!selection()?.isCollapsed) return;
      openLanguageNote(page === 'practice' ? byId.get(item.groupId) : group(),control.dataset.source,Number(control.dataset.start));
      break;
    case 'note-audio': {
      const {original,sentence} = activeLanguageNote;
      if (sentence) void playSentence(original,sentence,sentenceId(sentence,original.sentences.indexOf(sentence)));
      break;
    }
    case 'note-save': {
      const record = activeLanguageNote.item;
      state.phrases[phraseKey(record)] ??= record;
      control.disabled = true;
      control.textContent = 'Đã thêm';
      if (page === 'transcript') {
        screen.querySelector('#language-dialog').close();
        repaintTranscript();
        screen.querySelector('[data-action="study-selected"]').focus();
      } else save();
      break;
    }
    case 'note-close':
      screen.querySelector('#language-dialog').close();
      break;
    case 'save-phrase': {
      if (!pendingSelection) return;
      const savedKey = phraseKey(pendingSelection);
      if (Object.hasOwn(state.phrases,savedKey)) delete state.phrases[savedKey];
      else state.phrases[savedKey] = pendingSelection;
      repaintTranscript();
      break;
    }
    case 'remove':
      delete state.phrases[key];
      repaintTranscript();
      break;
    case 'study-selected': start(phrases().filter(phrase => phrase.groupId === group().id)); break;
    case 'review-all': start(reviewOrder()); break;
    case 'review-status': start(phrases().filter(phrase => phrase.status === status)); break;
    case 'practice': start(reviewOrder()); break;
    case 'blind':
    case 'shadow': {
      if (action === 'blind') setReveal(false);
      const original = byId.get(item.groupId);
      const sentence = audioSentence(original,item.sentenceId,item.text.slice(item.start,item.end));
      if (sentence) void playSentence(original,sentence,sentenceId(sentence,original.sentences.indexOf(sentence)));
      break;
    }
    case 'reveal': setReveal(!revealed); break;
    case 'rate':
      item.status = status;
      screen.querySelector('.muted').textContent = screen.querySelector('.muted').textContent.split(' · ').slice(0,-1).join(' · ') + ' · ' + statusLabel[status];
      notice.textContent = 'Đã lưu: ' + statusLabel[status] + '.';
      save();
      break;
    case 'next':
      queueIndex++;
      revealed = false;
      go('practice');
      break;
    case 'replay':
      stopAudio();
      fullAudio(true);
      break;
    case 'done':
      go('done');
      save();
      break;
    default:
      if (Object.hasOwn(labels,action)) go(action);
  }
}

function repaintTranscript() {
  const position = window.scrollY;
  selection()?.removeAllRanges();
  render();
  window.scrollTo(0,position);
  save();
}

function setReveal(value) {
  revealed = value;
  screen.querySelector('#practice-text').hidden = !revealed;
  screen.querySelector('[data-action="reveal"]').textContent = revealed?'Ẩn chữ':'Hiện chữ';
}

screen.addEventListener('click',handleAction);
screen.addEventListener('input',event => {
  const form = event.target.closest('[data-meaning-index]');
  if (!form) return;
  const index = Number(event.target.dataset.answerIndex ?? form.dataset.meaningIndex);
  meaningAnswers.set(group().id + ':' + index,{value:event.target.value});
  updateMeaningResult(form,index,undefined);
  form.closest('form').querySelector('.meaning-summary').textContent = '';
});
function updateMeaningResult(row,index,correct) {
  const feedback = screen.querySelector('#meaning-result-' + index);
  const result = correct === true ? 'correct' : correct === false ? 'retry' : '';
  feedback.dataset.result = result;
  feedback.innerHTML = meaningFeedback(correct,meaningItems(group())[index][2],index);
  const picker = row.closest('#meaning-exercise').querySelector(`[data-action="meaning-move"][data-index="${row.dataset.meaningPage}"]`);
  if (!picker) return;
  const page = Number(row.dataset.meaningPage);
  const indices = meaningItems(group()).map((item,i) => ({item,i}))
    .filter(({item}) => item[0] === meaningItems(group())[index][0]).map(({i}) => i);
  const results = indices.map(i => meaningAnswers.get(group().id + ':' + i)?.correct);
  const pageResult = results.some(value => value === false) ? 'retry'
    : results.every(value => value === true) ? 'correct' : '';
  picker.dataset.result = pageResult;
  picker.setAttribute('aria-label','Câu ' + (page+1) + (pageResult === 'correct' ? ', đúng ý' : pageResult === 'retry' ? ', cần đối chiếu' : ''));
}

function showMeaningItem(exercise,index) {
  const rows = [...exercise.querySelectorAll('.meaning-item[data-meaning-index]')];
  const pages = [...new Set(rows.map(row => Number(row.dataset.meaningPage)))];
  const current = rows.filter(row => Number(row.dataset.meaningPage) === index);
  if (!current.length) return;
  meaningPositions.set(group().id,index);
  rows.forEach(row => { row.hidden = row.dataset.combined === 'true' || Number(row.dataset.meaningPage) !== index; });
  exercise.querySelector('.meaning-progress').textContent = 'Câu ' + (index+1) + '/' + pages.length;
  for (const control of exercise.querySelectorAll('[data-action="meaning-move"]')) {
    control.setAttribute('aria-current',Number(control.dataset.index) === index ? 'step' : 'false');
  }
  exercise.querySelector('[data-action="meaning-previous"]').disabled = index === 0;
  exercise.querySelector('[data-action="meaning-next"]').hidden = index === pages.length-1;
  exercise.querySelector('button[type="submit"]').hidden = index !== pages.length-1;
  current[0].querySelector('input').focus({preventScroll:true});
}

function updateMeaningSummary(form) {
  const records = meaningItems(group()).map((_,index) => meaningAnswers.get(group().id + ':' + index));
  const correct = records.filter(record => record?.correct === true).length;
  const review = records.filter(record => record?.correct === false).length;
  const empty = records.filter(record => !normalizeMeaning(record?.value ?? '')).length;
  const summary = [correct + '/' + records.length + ' đúng ý'];
  if (review) summary.push(review + ' ô cần đối chiếu');
  if (empty) summary.push(empty + ' ô chưa điền');
  form.querySelector('.meaning-summary').textContent = summary.join(' · ');
}

screen.addEventListener('submit',event => {
  const form = event.target.closest('[data-meaning-exercise]');
  if (!form) return;
  event.preventDefault();
  const items = meaningItems(group());
  const position = meaningPositions.get(group().id) ?? 0;
  const exercise = form.closest('#meaning-exercise');
  const currentRows = [...exercise.querySelectorAll('.meaning-item[data-meaning-page]')]
    .filter(row => Number(row.dataset.meaningPage) === position && !row.hidden);
  const currentInputs = currentRows.flatMap(row => [...row.querySelectorAll('input')]);
  const emptyInput = currentInputs.find(input => !normalizeMeaning(input.value));
  if (emptyInput) {
    emptyInput.focus({preventScroll:true});
    emptyInput.scrollIntoView({block:'nearest'});
    return;
  }
  const pageCount = new Set(items.map(item => item[0])).size;
  if (position < pageCount-1) {
    showMeaningItem(form.closest('#meaning-exercise'),position+1);
    return;
  }
  for (const row of form.querySelectorAll('[data-meaning-index]')) {
    const index = Number(row.dataset.meaningIndex);
    const [, , answer, alternatives] = items[index];
    const input = row.dataset.combined === 'true' ? null :
      row.querySelector(`input[data-answer-index="${index}"]`) ?? row.querySelector('input');
    if (!input) continue;
    const value = input.value;
    const normalized = normalizeMeaning(value);
    const key = group().id + ':' + index;
    const previous = meaningAnswers.get(key);
    const correct = normalized ? (previous?.value === value && previous.correct === true) || meaningMatches(normalized,answer,alternatives) : undefined;
    meaningAnswers.set(key,{value,correct});
    updateMeaningResult(row,index,correct);
  }
  updateMeaningSummary(form);
});
screen.addEventListener('keydown',event => {
  if (!event.target.matches('.language-note') || !['Enter',' '].includes(event.key)) return;
  event.preventDefault();
  event.target.click();
});
document.addEventListener('keydown',event => {
  if (event.key === ' ' && !event.repeat && !event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey) {
    const target = event.target;
    const editing = target instanceof HTMLElement && (target.isContentEditable || target.closest('input,textarea,select,button:not([data-action="meaning-audio"]),[role="button"]'));
    const exercise = screen.querySelector('#review-meaning:not([hidden])');
    if (exercise && !editing && audio.getAttribute('src')) {
      event.preventDefault();
      if (audio.paused) audio.play().catch(() => { notice.textContent = 'Không phát được audio.'; });
      else audio.pause();
    }
    return;
  }
  if (event.key !== 'Control' || event.repeat || event.altKey || event.metaKey || event.shiftKey) return;
  const exercise = screen.querySelector('#review-meaning:not([hidden]) .meaning-item:not([hidden])');
  const control = exercise?.querySelector('[data-action="meaning-audio"]');
  if (!control) return;
  const button = control;
  let pending = true;
  const cancel = e => { if (e.key !== 'Control') pending = false; };
  document.addEventListener('keydown',cancel);
  document.addEventListener('keyup',function release(e) {
    if (e.key !== 'Control') return;
    document.removeEventListener('keyup',release);
    document.removeEventListener('keydown',cancel);
    if (pending && button.isConnected && button.closest('.meaning-item:not([hidden])')) button.click();
  });
});
steps.addEventListener('click',handleAction);
document.querySelector('#export').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'toeic-part3-tien-do.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url),1000);
});
const backup = document.querySelector('#backup-file');
document.querySelector('#import').addEventListener('click', () => backup.click());
backup.addEventListener('change', async () => {
  const file = backup.files[0];
  if (!file) return;
  try {
    const restored = clean(JSON.parse(await file.text()));
    state.attempts = {...state.attempts,...restored.attempts};
    state.phrases = {...state.phrases,...restored.phrases};
    state.current = restored.current;
    go('review');
    if (save()) notice.textContent = 'Đã nhập tiến độ.';
  } catch {
    notice.textContent = 'Không nhập được file tiến độ. Hãy dùng file JSON đã xuất từ trang này.';
  } finally {
    backup.value = '';
  }
});

if (groups.length) {
  page = pageFromAddress();
  render();
  window.addEventListener('popstate', () => showPage(pageFromAddress()));
} else notice.textContent = 'Không tìm thấy dữ liệu hội thoại trong part3/data.js.';




