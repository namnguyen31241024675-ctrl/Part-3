'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const project = path.resolve(process.argv[2] || __dirname);
const part3 = path.join(project,'part3');
const port = Number(process.argv[3] ?? 8765);
if (!fs.existsSync(path.join(part3,'data.js'))) {
  console.error('Missing part3/data.js in ' + project);
  process.exit(1);
}

const appFiles = new Map([['/','index.html'],['/index.html','index.html'],['/chua-bai','index.html'],['/study.css','study.css'],['/study.js','study.js'],['/question-emphasis.js','question-emphasis.js']]);
appFiles.set('/learning-data.js','learning-data.js');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};

const server = http.createServer((req,res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return res.writeHead(405,{Allow:'GET, HEAD'}).end();
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  } catch {
    return res.writeHead(400).end();
  }
  let file;
  if (appFiles.has(pathname)) file = path.join(__dirname,appFiles.get(pathname));
  else if (pathname === '/part3/data.js') file = path.join(part3,'data.js');
  else if (/^\/part3\/(audio|audio-sentences|graphics)\/[\w ./-]+$/u.test(pathname)) {
    const relative = pathname.slice('/part3/'.length);
    if (relative.split('/').some(segment => segment === '..')) return res.writeHead(404).end();
    file = path.join(part3,relative);
  }
  if (!file || !types[path.extname(file).toLowerCase()]) return res.writeHead(404).end();

  fs.stat(file,(error,info) => {
    if (error || !info.isFile()) return res.writeHead(404).end();
    const headers = {'Content-Type':types[path.extname(file).toLowerCase()],'Cache-Control':'no-cache','Accept-Ranges':'bytes'};
    const size = info.size;
    let start = 0;
    let end = size - 1;
    if (req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (!match || (!match[1] && !match[2])) return res.writeHead(416,{'Content-Range':'bytes */'+size}).end();
      if (match[1]) {
        start = Number(match[1]);
        if (match[2]) end = Math.min(Number(match[2]),end);
      } else start = Math.max(0,size-Number(match[2]));
      if (start > end || start >= size) return res.writeHead(416,{'Content-Range':'bytes */'+size}).end();
      headers['Content-Range'] = 'bytes '+start+'-'+end+'/'+size;
    }
    headers['Content-Length'] = end-start+1;
    res.writeHead(req.headers.range?206:200,headers);
    if (req.method === 'HEAD' || size === 0) return res.end();
    const stream = fs.createReadStream(file,{start,end});
    stream.on('error',() => res.destroy());
    res.on('close',() => stream.destroy());
    stream.pipe(res);
  });
});
server.on('error',error => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port,'127.0.0.1',() => {
  console.log('Local: http://127.0.0.1:' + server.address().port + '/');
  console.log('Source: ' + part3);
});

