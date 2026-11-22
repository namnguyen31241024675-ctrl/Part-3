'use strict';

// Each exact excerpt must appear only once in its source question.
const testOneQuestionEmphasis = {
  't6-32:32': {actor:['woman'],focus:['last week']},
  't6-32:33': {actor:['speakers'],focus:['industry','work in']},
  't6-32:34': {actor:['man'],focus:['check on']},
  't1-32:32': {focus: ['type of food product'], actor: ["speakers' company"]},
  't1-32:33': {focus: ['suggest'], actor: ['man']},
  't1-32:34': {focus: ['will do'], actor: ['woman']},
  't1-35:35': {focus: ['Why', 'calling'], actor: ['man']},
  't1-35:36': {focus: ['last month'], actor: ['Ife Rotimi']},
  't1-35:37': {focus: ['required'], actor: ['woman']},
  't1-38:38': {focus: ['event', 'planning'], actor: ['speakers']},
  't1-38:39': {focus: ['task'], actor: ['woman ask the man']},
  't1-38:40': {focus: ['will do'], actor: ['woman']},
  't1-41:41': {focus: ['event', 'preparing for'], actor: ['speakers']},
  't1-41:42': {focus: ['mentioned about some pens']},
  't1-41:43': {focus: ['offer to do'], actor: ['woman']},
  't1-44:44': {focus: ['Where', 'work'], actor: ['woman']},
  't1-44:45': {focus: ['dispose of'], actor: ['man']},
  't1-44:46': {focus: ['found on a Web site'], actor: ['woman']},
  't1-47:47': {focus: ['How', 'know each other'], actor: ['speakers']},
  't1-47:48': {focus: ['type of business', 'own'], actor: ['man']},
  't1-47:49': {focus: ['advantage', 'rental space'], actor: ['woman']},
  't1-50:50': {focus: ['Who most likely'], actor: ['speakers']},
  't1-50:51': {focus: ['recently'], actor: ['man']},
  't1-50:52': {focus: ['suggest'], actor: ['woman']},
  't1-53:53': {focus: ['Who most likely'], actor: ['man']},
  't1-53:54': {focus: ['problem'], actor: ['woman']},
  't1-53:55': {focus: ['mean', 'below freezing tonight'], actor: ['woman']},
  't1-56:56': {focus: ['Why'], actor: ['men want to speak to the woman']},
  't1-56:57': {focus: ['type of business', 'own'], actor: ['men']},
  't1-56:58': {focus: ['changed recently'], actor: ['men']},
  't1-59:59': {focus: ['want to do'], actor: ['man']},
  't1-59:60': {focus: ['concerned about'], actor: ['woman']},
  't1-59:61': {focus: ['mean', 'with a smartphone'], actor: ['man']},
  't1-62:62': {focus: ['Where'], actor: ['woman']},
  't1-62:63': {focus: ['When', 'meet with an investor'], actor: ['woman']},
  't1-62:64': {focus: ['good news'], actor: ['man']},
  't1-65:65': {focus: ['Where', 'work'], actor: ['speakers']},
  't1-65:66': {focus: ['Which page', 'change'], actor: ['man']},
  't1-65:67': {focus: ['Why', 'cannot complete', 'until Monday'], actor: ['woman']},
  't1-68:68': {focus: ['news'], actor: ['man']},
  't1-68:69': {focus: ['Where', 'install some bicycle racks'], actor: ['speakers']},
  't1-68:70': {focus: ['Why', 'contact some companies'], actor: ['woman']}
};

const additionalBilingualEmphasis = {
  't6-32:32': ['người phụ nữ|tuần trước','product/sản phẩm','location/địa điểm','advertising campaign/Chiến dịch quảng cáo','budget/Ngân sách'],
  't6-32:33': ['Những người nói|ngành','Finance/Tài chính','Retail/Bán lẻ','Energy/Năng lượng','Tourism/Du lịch'],
  't6-32:34': ['Người đàn ông|kiểm tra','Transportation/Phương tiện di chuyển','Tickets/Vé','prices/giá cả','contracts/hợp đồng']
};

// Vietnamese question excerpts follow the meaning of the English emphasis.
// Each option pairs an English excerpt with its Vietnamese counterpart, in A–D order.
const testOneBilingualEmphasis = {
  32: ['Công ty của những người nói|loại thực phẩm', 'Candy/Kẹo', 'Cheese/Phô mai', 'Bread/Bánh mì', 'Pasta/Mì Ý'],
  33: ['Người đàn ông|đề xuất', 'Lowering/Giảm', 'Hiring/Thuê thêm', 'recipe/công thức nấu ăn', 'additional options/lựa chọn bổ sung'],
  34: ['Người phụ nữ|sẽ làm gì', 'schedule update/cập nhật lịch trình', 'production manager/quản lý sản xuất', 'headquarters/trụ sở chính', 'advertising campaign/chiến dịch quảng cáo'],
  35: ['Tại sao|người đàn ông|gọi điện', 'sign up/đăng ký', 'competition/cuộc thi', 'buy tickets/mua vé', 'branded merchandise/hàng hóa có thương hiệu'],
  36: ['Ife Rotimi|tháng trước', 'regional tournament/giải đấu khu vực', 'television interview/phỏng vấn truyền hình', 'institute/học viện', 'new coach/huấn luyện viên mới'],
  37: ['Người phụ nữ|bắt buộc', 'parking permit/Giấy phép đậu xe', 'photo ID/Giấy tờ tùy thân có ảnh', 'Contact information/Thông tin liên lạc', 'Advance payment/Thanh toán trước'],
  38: ['Các diễn giả|lên kế hoạch|sự kiện', 'fund-raising dinner/bữa tối gây quỹ', 'art gallery opening/Khai trương phòng trưng bày nghệ thuật', 'awards ceremony/lễ trao giải', "children's book fair/hội chợ sách thiếu nhi"],
  39: ['Người phụ nữ nhờ người đàn ông|việc gì', 'shuttle service/dịch vụ xe đưa đón', 'catering firm/công ty cung cấp tiệc tận nơi', 'speech/bài phát biểu', 'invitations/thiệp mời'],
  40: ['', 'E-mail a list', 'Speak with a colleague', 'Provide a password', 'Post a job opening'],
  41: ['Các diễn giả|chuẩn bị cho|sự kiện', 'new-employee orientation/Buổi định hướng nhân viên mới', 'grand opening/Lễ khai trương', 'community festival/lễ hội cộng đồng', 'trade show/hội chợ triển lãm thương mại'],
  42: ['được đề cập về một số chiếc bút', 'multiple colors/nhiều màu sắc', 'permanent ink/mực vĩnh cửu', 'book authors/tác giả sách', 'paper/giấy'],
  43: ['Người phụ nữ|đề nghị làm gì', 'booth/gian hàng', 'Place an order/Đặt hàng', 'focus group/nhóm khảo sát tập trung', 'budget/ngân sách'],
  44: ['Người phụ nữ|làm việc|ở đâu', 'delivery service/dịch vụ giao hàng', 'electronics store/cửa hàng điện tử', 'recycling facility/cơ sở tái chế', 'real estate agency/công ty bất động sản'],
  45: ['Người đàn ông|vứt bỏ', 'Yard waste/Rác thải sân vườn', 'Used furniture/Đồ nội thất cũ', 'Electronics/Đồ điện tử', 'Books/Sách'],
  46: ['Người phụ nữ|tìm thấy gì trên một trang web', 'list of companies/Danh sách các công ty', 'Hours of operation/Giờ hoạt động', 'permit application/Đơn xin giấy phép', 'Directions to a site/Hướng dẫn đến một địa điểm'],
  47: ['Làm thế nào|các diễn giả|biết nhau', 'took a class together/học cùng lớp', 'same company/cùng một công ty', 'same neighborhood/cùng một khu phố', 'train/tàu hỏa'],
  48: ['Người đàn ông|sở hữu|loại hình kinh doanh', 'fitness center/Trung tâm thể dục', 'real estate agency/Đại lý bất động sản', 'culinary school/Trường dạy nấu ăn', 'bakery/Tiệm bánh'],
  49: ['Người phụ nữ|ưu điểm|không gian cho thuê', 'price/Giá cả', 'size/Kích thước', 'location/Vị trí', 'design/Thiết kế'],
  50: ['Các diễn giả|có khả năng cao là ai', 'Film actors/Diễn viên điện ảnh', 'Museum directors/Giám đốc bảo tàng', 'Video game developers/Nhà phát triển trò chơi điện tử', 'Investigative journalists/Nhà báo điều tra'],
  51: ['Người đàn ông|gần đây', 'funding/nguồn tài trợ', 'tested/thử nghiệm', 'script/kịch bản', 'interview/cuộc phỏng vấn'],
  52: ['Người phụ nữ|gợi ý', 'Consulting/Tham khảo ý kiến', 'event/sự kiện', 'Negotiating/Thương lượng', 'an update/Cập nhật thông tin'],
  53: ['Người đàn ông|có khả năng cao là ai', 'delivery driver/lái xe giao hàng', 'security guard/nhân viên bảo vệ', 'maintenance worker/nhân viên bảo trì', 'customer service representative/đại diện dịch vụ khách hàng'],
  54: ['Người phụ nữ|vấn đề', 'malfunctioning/bị hỏng', 'key/chìa khóa', 'parking area/Khu vực đỗ xe', 'package/gói hàng'],
  55: ['Người phụ nữ|có ý gì|dưới mức đóng băng tối nay', 'weather forecast/dự báo thời tiết', 'sooner/sớm hơn', 'indoors/vào trong nhà', 'near her apartment/gần căn hộ của mình'],
  56: ['Tại sao|những người đàn ông muốn nói chuyện với người phụ nữ', 'building design/thiết kế tòa nhà', 'loan/khoản vay', 'advertising plan/kế hoạch quảng cáo', 'supplies/vật tư'],
  57: ['Những người đàn ông|sở hữu|loại hình kinh doanh', 'sports equipment store/Cửa hàng thiết bị thể thao', 'winter apparel store/Cửa hàng quần áo mùa đông', 'automobile dealership/Đại lý ô tô', 'hotel chain/Chuỗi khách sạn'],
  58: ['những người đàn ông|thay đổi gần đây', 'more accessible/dễ tiếp cận hơn', 'decreased/giảm xuống', 'Tourism/Du lịch', 'Weather patterns/hình thái thời tiết'],
  59: ['Người đàn ông|muốn làm gì', 'training opportunities/cơ hội đào tạo', 'Upgrade/Nâng cấp', 'additional employees/thêm nhân viên', 'factory layout/bố cục nhà máy'],
  60: ['Người phụ nữ|lo lắng về', 'Increasing expenses/Chi phí gia tăng', 'Introducing errors/Gây ra lỗi', 'Reducing productivity/Giảm năng suất', 'Causing confusion/Gây ra sự bối rối'],
  61: ['Người đàn ông|có ý gì|bằng điện thoại thông minh', 'new policy/chính sách mới', 'easy to implement/dễ thực hiện', 'Data security/Bảo mật dữ liệu', 'verified/xác minh'],
  62: ['Người phụ nữ|ở đâu', 'restaurant/nhà hàng', 'travel agency/đại lý du lịch', 'airport/sân bay', 'warehouse/nhà kho'],
  63: ['Khi nào|người phụ nữ|gặp nhà đầu tư', 'Monday/Thứ Hai', 'Tuesday/Thứ Ba', 'Wednesday/Thứ Tư', 'Thursday/Thứ Năm'],
  64: ['Người đàn ông|tin tốt', 'promotion/thăng chức', 'conference proposal/Đề xuất hội nghị', 'upgraded/nâng hạng', 'award/giải thưởng'],
  65: ['Các diễn giả|làm việc|ở đâu', 'amusement park/công viên giải trí', 'art museum/bảo tàng nghệ thuật', 'concert hall/phòng hòa nhạc', 'botanical garden/vườn bách thảo'],
  66: ['Trang nào|người đàn ông|thay đổi', 'Page 1/Trang 1', 'Page 2/Trang 2', 'Page 3/Trang 3', 'Page 4/Trang 4'],
  67: ['Tại sao|người phụ nữ|không thể hoàn thành|cho đến thứ Hai', 'approval/sự chấp thuận', 'workshop/buổi hội thảo', 'updated/cập nhật', 'arriving soon/sớm đến'],
  68: ['Người đàn ông|tin tức', 'closed for repair/đóng cửa để sửa chữa', 'approved/phê duyệt', 'expanded/mở rộng', 'relocate/chuyển địa điểm'],
  69: ['Các diễn giả|lắp đặt một số giá để xe đạp|ở đâu', 'covered/có mái che', 'long-term/dài hạn', 'short-term/ngắn hạn', 'overflow/dự phòng'],
  70: ['Tại sao|người phụ nữ|liên lạc với một số công ty', 'loan/khoản vay', 'permit/giấy phép', 'estimates/báo giá/ước tính chi phí', 'proposal/bản đề xuất']
};

// The Vietnamese actor usually comes first, but these translations lead with the focus.
const testOneVietnameseActorIndex = {35:1, 47:1, 56:1, 63:1, 66:1, 67:1, 70:1};

// Reviewed character ranges by dialogue and source ID.
const testOneLanguageNotes = {
  "t1-32": {
    "0": [{"text":"focus group","start":29,"end":40,"type":"collocation","meaning":"nhóm khách hàng được mời góp ý về sản phẩm"}],
    "2": [{"text":"a great addition to","start":18,"end":37,"type":"structure","meaning":"một sự bổ sung rất phù hợp cho"}],
    "5": [{"text":"get in touch with","start":32,"end":49,"type":"collocation","meaning":"liên hệ với"}],
  },
  "t1-35": {
    "0": [{"text":"book three tickets","start":19,"end":37,"type":"collocation","meaning":"đặt ba vé"}],
    "1": [{"text":"Are there any seats left","start":0,"end":24,"type":"structure","meaning":"còn chỗ ngồi nào không"}],
    "3": [{"text":"regional championship tournament","start":49,"end":81,"type":"collocation","meaning":"giải vô địch khu vực"}],
    "6": [{"text":"Advance payment","start":0,"end":15,"type":"collocation","meaning":"thanh toán trước"}],
    "q35:A": [{"text":"sign up","start":3,"end":10,"type":"phrasal","meaning":"đăng ký"}],
    "q35:B": [{"text":"enter a competition","start":3,"end":22,"type":"collocation","meaning":"tham gia một cuộc thi"}],
    "q35:C": [{"text":"buy tickets","start":3,"end":14,"type":"collocation","meaning":"mua vé"}],
    "q35:D": [{"text":"branded merchandise","start":13,"end":32,"type":"collocation","meaning":"hàng hóa mang thương hiệu"}],
    "q36:A": [{"text":"regional tournament","start":10,"end":29,"type":"collocation","meaning":"giải đấu khu vực"}],
    "q36:B": [{"text":"television interview","start":11,"end":31,"type":"collocation","meaning":"cuộc phỏng vấn trên truyền hình"}],
    "q36:C": [{"text":"started an institute","start":4,"end":24,"type":"collocation","meaning":"thành lập một học viện"}],
    "q36:D": [{"text":"hired a new coach","start":4,"end":21,"type":"collocation","meaning":"thuê một huấn luyện viên mới"}],
    "q37:A": [{"text":"parking permit","start":2,"end":16,"type":"collocation","meaning":"giấy phép đậu xe"}],
    "q37:B": [{"text":"photo ID","start":2,"end":10,"type":"collocation","meaning":"giấy tờ tùy thân có ảnh"}],
    "q37:C": [{"text":"Contact information","start":0,"end":19,"type":"collocation","meaning":"thông tin liên lạc"}],
    "q37:D": [{"text":"Advance payment","start":0,"end":15,"type":"collocation","meaning":"thanh toán trước"}],
  },
  "t1-38": {
    "0": [{"text":"fund-raising dinner","start":61,"end":80,"type":"collocation","meaning":"bữa tối gây quỹ"}],
    "1": [{"text":"brings in","start":18,"end":27,"type":"phrasal","meaning":"mang về, thu được"}],
    "3": [{"text":"could use some help","start":8,"end":27,"type":"structure","meaning":"cần được giúp một chút"},{"text":"sending out","start":28,"end":39,"type":"phrasal","meaning":"gửi đi cho nhiều người"}],
    "4": [{"text":"take care of","start":10,"end":22,"type":"collocation","meaning":"đảm nhận, lo liệu"}],
    "q39": [{"text":"ask the man to help","start":25,"end":44,"type":"structure","meaning":"nhờ người đàn ông giúp"}],
    "q39:A": [{"text":"shuttle service","start":12,"end":27,"type":"collocation","meaning":"dịch vụ xe đưa đón"}],
    "q39:B": [{"text":"catering firm","start":11,"end":24,"type":"collocation","meaning":"công ty cung cấp dịch vụ tiệc"}],
    "q39:C": [{"text":"Preparing a speech","start":0,"end":18,"type":"collocation","meaning":"chuẩn bị bài phát biểu"}],
    "q39:D": [{"text":"Sending out","start":0,"end":11,"type":"phrasal","meaning":"gửi đi cho nhiều người"}],
  },
  "t1-41": {
    "0": [{"text":"give away","start":50,"end":59,"type":"phrasal","meaning":"tặng miễn phí"}],
    "2": [{"text":"for no extra charge","start":5,"end":24,"type":"collocation","meaning":"không tính thêm phí"}],
    "3": [{"text":"made from paper","start":35,"end":50,"type":"structure","meaning":"được làm từ giấy"}],
    "4": [{"text":"hand them out","start":11,"end":24,"type":"phrasal","meaning":"phát chúng cho mọi người"}],
    "6": [{"text":"go ahead","start":9,"end":17,"type":"phrasal","meaning":"tiến hành luôn"}],
    "q42:A": [{"text":"available in multiple colors","start":9,"end":37,"type":"structure","meaning":"có nhiều màu để chọn"}],
    "q42:B": [{"text":"permanent ink","start":9,"end":22,"type":"collocation","meaning":"mực không phai"}],
    "q42:C": [{"text":"preferred by book authors","start":9,"end":34,"type":"structure","meaning":"được các tác giả sách ưa chuộng"}],
    "q42:D": [{"text":"made from paper","start":9,"end":24,"type":"structure","meaning":"được làm từ giấy"}],
    "q43": [{"text":"offer to do","start":20,"end":31,"type":"structure","meaning":"đề nghị làm gì"}],
    "q43:A": [{"text":"Reserve a booth","start":0,"end":15,"type":"collocation","meaning":"đặt một gian hàng"}],
    "q43:B": [{"text":"Place an order","start":0,"end":14,"type":"collocation","meaning":"đặt hàng"}],
    "q43:C": [{"text":"focus group","start":11,"end":22,"type":"collocation","meaning":"nhóm khảo sát tập trung"}],
    "q43:D": [{"text":"Revise a budget","start":0,"end":15,"type":"collocation","meaning":"điều chỉnh ngân sách"}],
  },
  "t1-44": {
    "1": [{"text":"get rid of","start":113,"end":123,"type":"collocation","meaning":"loại bỏ đồ không còn cần"},{"text":"put my house on the market","start":133,"end":159,"type":"collocation","meaning":"rao bán nhà"}],
    "4": [{"text":"pickup service","start":17,"end":31,"type":"collocation","meaning":"dịch vụ đến lấy đồ"}],
    "6": [{"text":"dispose of","start":75,"end":85,"type":"collocation","meaning":"xử lý hoặc vứt bỏ đồ"}],
    "q45": [{"text":"dispose of","start":26,"end":36,"type":"collocation","meaning":"xử lý hoặc vứt bỏ đồ"}],
  },
  "t1-47": {
    "1": [{"text":"stop in","start":62,"end":69,"type":"phrasal","meaning":"ghé qua một lát"}],
    "2": [{"text":"baked goods","start":27,"end":38,"type":"collocation","meaning":"các loại bánh nướng"}],
    "5": [{"text":"went out of business","start":50,"end":70,"type":"collocation","meaning":"đã ngừng kinh doanh"},{"text":"up for lease","start":91,"end":103,"type":"collocation","meaning":"đang được chào cho thuê"}],
  },
  "t1-50": {
    "1": [{"text":"need to be made","start":39,"end":54,"type":"structure","meaning":"cần được thực hiện"}],
    "7": [{"text":"came up","start":15,"end":22,"type":"phrasal","meaning":"lại xuất hiện, phát sinh"}],
    "q51:A": [{"text":"secured some funding","start":3,"end":23,"type":"collocation","meaning":"đã huy động được một khoản tài trợ"}],
    "q51:B": [{"text":"tested a product","start":3,"end":19,"type":"collocation","meaning":"thử nghiệm một sản phẩm"}],
    "q51:C": [{"text":"read a script","start":3,"end":16,"type":"collocation","meaning":"đọc kịch bản"}],
    "q51:D": [{"text":"conducted an interview","start":3,"end":25,"type":"collocation","meaning":"thực hiện một cuộc phỏng vấn"}],
  },
  "t1-53": {
    "3": [{"text":"shutting off","start":9,"end":21,"type":"phrasal","meaning":"tự tắt"},{"text":"turning on","start":26,"end":36,"type":"phrasal","meaning":"bật lên"}],
    "7": [{"text":"take a look at","start":19,"end":33,"type":"collocation","meaning":"xem qua, kiểm tra"}],
    "8": [{"text":"it's supposed to be below freezing","start":4,"end":38,"type":"structure","meaning":"theo dự báo trời sẽ xuống dưới mức đóng băng"}],
    "q55": [{"text":"supposed to be below freezing","start":46,"end":75,"type":"structure","meaning":"theo dự báo sẽ xuống dưới mức đóng băng"}],
  },
  "t1-56": {
    "1": [{"text":"discuss a loan","start":30,"end":44,"type":"collocation","meaning":"trao đổi về khoản vay"}],
    "2": [{"text":"Why don't you tell me more","start":0,"end":26,"type":"structure","meaning":"anh có thể nói thêm cho tôi biết không"}],
    "3": [{"text":"renting out","start":99,"end":110,"type":"phrasal","meaning":"cho thuê"}],
    "4": [{"text":"carry more inventory","start":101,"end":121,"type":"collocation","meaning":"dự trữ được nhiều hàng hơn"}],
  },
  "t1-59": {
    "0": [{"text":"expressed interest in","start":33,"end":54,"type":"collocation","meaning":"đã bày tỏ sự quan tâm đến"}],
    "2": [{"text":"become a burden","start":22,"end":37,"type":"collocation","meaning":"trở thành gánh nặng"}],
    "3": [{"text":"slow down","start":16,"end":25,"type":"phrasal","meaning":"làm chậm"}],
    "4": [{"text":"What if we videotaped","start":0,"end":21,"type":"structure","meaning":"nếu chúng ta quay video thì sao"}],
    "6": [{"text":"slowing down","start":60,"end":72,"type":"phrasal","meaning":"làm chậm"},{"text":"production line","start":77,"end":92,"type":"collocation","meaning":"dây chuyền sản xuất"}],
    "q59:A": [{"text":"training opportunities","start":8,"end":30,"type":"collocation","meaning":"cơ hội đào tạo"}],
    "q59:B": [{"text":"Upgrade machinery","start":0,"end":17,"type":"collocation","meaning":"nâng cấp máy móc"}],
    "q59:C": [{"text":"Hire additional employees","start":0,"end":25,"type":"collocation","meaning":"tuyển thêm nhân viên"}],
    "q59:D": [{"text":"factory layout","start":15,"end":29,"type":"collocation","meaning":"bố cục nhà máy"}],
  },
  "t1-62": {
    "1": [{"text":"potential investor","start":22,"end":40,"type":"collocation","meaning":"nhà đầu tư tiềm năng"}],
    "4": [{"text":"How about right after","start":0,"end":21,"type":"structure","meaning":"ngay sau đó thì sao"}],
    "5": [{"text":"won an award","start":45,"end":57,"type":"collocation","meaning":"đã giành được giải thưởng"}],
    "q64:A": [{"text":"received a promotion","start":12,"end":32,"type":"collocation","meaning":"được thăng chức"}],
    "q64:B": [{"text":"conference proposal","start":2,"end":21,"type":"collocation","meaning":"đề xuất cho hội nghị"}],
    "q64:C": [{"text":"has been upgraded","start":18,"end":35,"type":"structure","meaning":"đã được nâng hạng"}],
    "q64:D": [{"text":"won an award","start":10,"end":22,"type":"collocation","meaning":"đã giành được giải thưởng"}],
  },
  "t1-65": {
    "2": [{"text":"scroll to the bottom","start":56,"end":76,"type":"collocation","meaning":"cuộn xuống cuối trang"}],
    "5": [{"text":"I'd be happy to make that change","start":0,"end":32,"type":"structure","meaning":"tôi sẵn lòng thực hiện thay đổi đó"}],
    "6": [{"text":"in the middle of updating","start":10,"end":35,"type":"structure","meaning":"đang trong quá trình cập nhật"}],
  },
  "t1-68": {
    "0": [{"text":"received the go-ahead","start":27,"end":48,"type":"collocation","meaning":"đã được bật đèn xanh để triển khai"}],
    "3": [{"text":"as close to the platform as possible","start":75,"end":111,"type":"structure","meaning":"càng gần sân ga càng tốt"}],
    "q69:A": [{"text":"covered parking area","start":9,"end":29,"type":"collocation","meaning":"khu đỗ xe có mái che"}],
    "q69:B": [{"text":"long-term parking","start":9,"end":26,"type":"collocation","meaning":"đỗ xe dài hạn"}],
    "q69:C": [{"text":"short-term parking","start":9,"end":27,"type":"collocation","meaning":"đỗ xe ngắn hạn"}],
    "q69:D": [{"text":"overflow parking","start":9,"end":25,"type":"collocation","meaning":"chỗ đỗ xe dự phòng khi bãi chính đầy"}],
    "q70:A": [{"text":"arrange a loan","start":3,"end":17,"type":"collocation","meaning":"thu xếp khoản vay"}],
    "q70:B": [{"text":"apply for a permit","start":3,"end":21,"type":"collocation","meaning":"nộp đơn xin giấy phép"}],
    "q70:C": [{"text":"ask for estimates","start":3,"end":20,"type":"collocation","meaning":"yêu cầu báo giá"}],
    "q70:D": [{"text":"create a proposal","start":3,"end":20,"type":"collocation","meaning":"soạn đề xuất"}],
  },
};

// Each item pairs an English sentence index with a Vietnamese sentence from the source.
// The last array lists alternative answers accepted in that context.
const testOneMeaningExercises = {
  't1-32': [
    [0,"Anh đã thấy kết quả khảo sát nhóm khách hàng mục tiêu cho loại phô mai cheddar cay mới của chúng ta chưa?","nhóm khách hàng mục tiêu",["nhóm thảo luận","nhóm khảo sát"]],
    [5,"Tôi sẽ liên lạc với quản lý sản xuất về yêu cầu đó.","liên lạc với",["liên hệ với","liên lạc","liên hệ"]]
  ],
  't1-35': [
    [0,"Tôi gọi điện để đặt ba vé cho trận đấu quần vợt vào thứ Năm này.","đặt ba vé",["đặt 3 vé","đặt trước ba vé","đặt trước 3 vé"]],
    [1,"Còn chỗ trống nào không?","chỗ trống",["chỗ ngồi trống","ghế trống"],"seats left"],
    [2,"Vé cho trận đấu thứ Năm đang bán rất nhanh.","bán rất nhanh",["bán nhanh","được bán rất nhanh","bán chạy"],"selling quickly"],
    [3,"Suy cho cùng, Ife Rotimi đã giành chức vô địch giải đấu khu vực vào tháng trước.","chức vô địch giải đấu khu vực",["chức vô địch khu vực","ngôi vô địch giải khu vực","chức vô địch giải khu vực"]],
    [4,"Mọi người đều muốn xem cô ấy thi đấu sau màn trình diễn đáng kinh ngạc đó.","màn trình diễn đáng kinh ngạc",["màn trình diễn ấn tượng","màn thể hiện ấn tượng","màn trình diễn xuất sắc","màn thể hiện xuất sắc"],"incredible performance"],
    [6,"Cần phải thanh toán trước để giữ chỗ.","thanh toán trước",["trả tiền trước","trả trước"]]
  ],
  't1-38': [
    [0,"Cảm ơn anh đã đồng ý giúp tôi tổ chức bữa tiệc tối gây quỹ thường niên của thư viện, Klaus.","bữa tiệc tối gây quỹ",["bữa tối gây quỹ","tiệc tối gây quỹ"]],
    [3,"Chà, tôi cần sự giúp đỡ trong việc gửi thư mời.","gửi thư mời",["gửi thiệp mời","gửi lời mời"]],
    [4,"Được rồi, tôi có thể đảm nhận việc đó.","đảm nhận",["lo liệu","xử lý","phụ trách"]]
  ],
  't1-41': [
    [0,"Tôi đã tìm thấy một số chiếc bút rất tuyệt để phát tặng tại lễ hội cộng đồng nhằm quảng bá doanh nghiệp của chúng ta.","phát tặng",["tặng miễn phí","tặng"]],
    [2,"Có chứ, không mất thêm phí đâu.","không mất thêm phí",["không tính thêm phí","không tốn thêm phí"]],
    [3,"Chúng được làm từ giấy.","được làm từ giấy",["làm từ giấy","được làm bằng giấy","làm bằng giấy"]]
  ],
  't1-44': [
    [1,"trước khi rao bán nhà.","rao bán nhà",["đăng bán nhà","đưa nhà ra bán"],"put my house on the market","before I put my house on the market"],
    [4,"Các bạn có cung cấp dịch vụ đến tận nơi lấy hàng không?","dịch vụ đến tận nơi lấy hàng",["dịch vụ đến lấy đồ","dịch vụ tới lấy đồ","dịch vụ lấy đồ tận nơi"]]
  ],
  't1-47': [
    [1,"Tôi vừa có việc ở khu này và nghĩ mình nên ghé vào mua một chiếc bánh quy hoặc một miếng bánh ngọt.","ghé vào",["ghé qua","tạt vào"]],
    [5,"Chà, tôi thấy nhà hàng Sunnyvale đã đóng cửa và tòa nhà đó đang cho thuê.","đang cho thuê",["đang được cho thuê","đang được chào cho thuê"],1]
  ],
  't1-50': [
    [1,"Anh có biết có cải tiến nào cần thực hiện trước đó không?","cần thực hiện",["cần được thực hiện","cần làm"]],
    [7,"Vấn đề tương tự vẫn xảy ra.","xảy ra",["xuất hiện","phát sinh"]]
  ],
  't1-53': [
    [3,"Nó cứ tự tắt rồi bật ngẫu nhiên, khiến căn hộ của tôi trở nên rất lạnh.","tự tắt",["tắt","tự ngắt"]],
    [7,"Tôi có thể ghé qua kiểm tra vào sáng mai.","kiểm tra",["xem qua","xem xét"]]
  ],
  't1-56': [
    [1,"Cảm ơn cô đã gặp chúng tôi để thảo luận về khoản vay cho doanh nghiệp của chúng tôi.","thảo luận về khoản vay",["trao đổi về khoản vay","bàn về khoản vay"]],
    [3,"Chà, mười năm trước chúng tôi mở một cửa hàng sửa chữa xe trượt tuyết, nhưng sau vài năm, chúng tôi cũng bắt đầu cho thuê xe trượt tuyết và các thiết bị thể thao khác.","cho thuê",["cho người khác thuê"]]
  ],
  't1-59': [
    [0,"Nhiều công nhân nhà máy của chúng ta bày tỏ sự quan tâm đến việc nâng cao kỹ năng.","bày tỏ sự quan tâm đến",["bày tỏ quan tâm đến","thể hiện sự quan tâm đến"]],
    [6,"Nó cho phép chúng ta ghi lại chuyên môn của công nhân mà không làm chậm dây chuyền sản xuất.","dây chuyền sản xuất",["dây chuyền chế tạo"],1]
  ],
  't1-62': [
    [1,"Tôi muốn gặp một nhà đầu tư tiềm năng trong khi ở Chicago.","nhà đầu tư tiềm năng",[]],
    [5,"Nhân tiện, cô có thấy công ty chúng ta vừa giành được giải thưởng vì những đóng góp cho cộng đồng không?","giành được giải thưởng",["đoạt giải","giành giải","đạt giải"]]
  ],
  't1-65': [
    [2,'Có chứ, nhưng anh phải nhấp vào trang "Về chúng tôi" và cuộn xuống cuối trang đó.',"cuộn xuống cuối trang",["kéo xuống cuối trang"]],
    [6,"Nhưng chúng ta đang trong quá trình cập nhật phần mềm, vì vậy việc này sẽ phải đợi đến thứ Hai.","đang trong quá trình cập nhật",["đang cập nhật","đang tiến hành cập nhật"]]
  ],
  't1-68': [
    [0,"Cuối cùng chúng ta đã nhận được sự đồng ý cho dự án của bộ phận mình về việc lắp đặt giá để xe đạp tại ga tàu trung tâm thành phố.","nhận được sự đồng ý",["được chấp thuận","được bật đèn xanh","nhận được sự chấp thuận"]],
    [3,"Hừm. Nếu chúng ta hỏi những người đi xe, tôi cá là họ sẽ nói rằng vị trí thuận tiện nhất là càng gần sân ga càng tốt.","càng gần sân ga càng tốt",[]]
  ]
};

// Additional exercises use Vietnamese excerpts verified against the dialogue translation.
const testOneExtraMeaningExercises = {
  't1-32': [
    [2,"Nó sẽ là một sự bổ sung tuyệt vời cho dòng phô mai của công ty chúng ta.","một sự bổ sung tuyệt vời cho",["một bổ sung tuyệt vời cho","một sự bổ sung rất phù hợp cho"]]
  ],
  't1-38': [
    [0,"Cảm ơn anh đã đồng ý giúp tôi tổ chức bữa tiệc tối gây quỹ thường niên của thư viện, Klaus.","đồng ý giúp",["đồng ý hỗ trợ","đồng ý giúp đỡ"],"agreeing to help"],
    [1,"Chúng tôi hy vọng sự kiện sẽ mang lại đủ tiền để mở rộng phần sách dành cho thiếu nhi.","mang lại",["thu về","đem về","đem lại"]],
    [1,"Chúng tôi hy vọng sự kiện sẽ mang lại đủ tiền để mở rộng phần sách dành cho thiếu nhi.","mở rộng",["mở rộng thêm","phát triển thêm"],"expand"],
    [2,"Tôi nên bắt đầu với công việc nào đây?","bắt đầu với",["bắt đầu bằng","bắt đầu từ"],"start with"],
    [3,"Chà, tôi cần sự giúp đỡ trong việc gửi thư mời.","cần sự giúp đỡ",["cần giúp đỡ","cần hỗ trợ"],"could use some help"],
    [5,"Có sẵn danh sách người tham dự không?","danh sách người tham dự",["danh sách người tham gia","danh sách khách mời"],"list of attendees"],
    [7,"Tôi sẽ gửi email cho anh.","gửi email",["gửi thư điện tử","gửi thư qua email"],"e-mail"]
  ],
  't1-41': [
    [4,"Vậy khi chúng ta phát bút, chúng ta có thể đề cập đến điều đó.","phát bút",["phát chúng","phân phát bút","phát bút cho mọi người"]],
    [6,"Tôi sẽ tiến hành đặt hàng vài thùng.","tiến hành",["bắt tay vào"]]
  ],
  't1-44': [
    [0,"Cơ sở tái chế Jamestown xin nghe.","Cơ sở tái chế",["trung tâm tái chế","cơ sở thu gom tái chế"],"Recycling Facility","Jamestown Recycling Facility. How can I help you?"],
    [1,"Tôi sắp chuyển nhà","chuyển nhà",["dọn nhà","dọn đi"],"move","I'm preparing to move soon"],
    [1,"và tôi có một số thiết bị điện tử như tivi, máy tính","thiết bị điện tử",["đồ điện tử","các thiết bị điện tử"],"electronics","and I have some electronics, such as televisions and computers"],
    [1,"muốn bỏ đi","bỏ đi",["loại bỏ","vứt bỏ","vứt đi"],"get rid of","that I'd like to get rid of"],
    [2,"Chúng tôi nhận tất cả các thiết bị điện tử.","nhận",["tiếp nhận","nhận lấy","thu nhận"],"take","We'll take all electronics"],
    [4,"Các bạn có cung cấp dịch vụ đến tận nơi lấy hàng không?","cung cấp",["có cung cấp","cung ứng"],"provide","Do you provide a pickup service?"],
    [5,"Không, tiếc là ông sẽ phải tự mang mọi thứ đến đây.","tự mang mọi thứ đến đây",["tự đem mọi thứ đến đây","tự mang tất cả đến đây"],"bring everything here yourself"],
    [6,"Tuy nhiên, trên trang web của chúng tôi có liệt kê một số công ty có thể đến dọn dẹp và xử lý các món đồ đó giúp ông.","xử lý",["loại bỏ","vứt bỏ"],"dispose of","on our Web site we list a number of companies that can remove and dispose of the items for you"]
  ],
  't1-47': [
    [2,"Ở đây anh có nhiều đồ nướng ngon quá.","đồ nướng",["bánh nướng","các loại bánh nướng"]],
    [4,"Tôi thậm chí đang cân nhắc mở cơ sở thứ hai.","cân nhắc mở cơ sở thứ hai",["xem xét mở cơ sở thứ hai","cân nhắc mở địa điểm thứ hai"],"considering opening a second location"]
  ],
  't1-50': [
    [0,"Tôi nghĩ trò chơi điện tử mới của chúng ta gần như đã sẵn sàng để phát hành.","sẵn sàng để phát hành",["sẵn sàng phát hành","sẵn sàng ra mắt"],"ready to be released"],
    [1,"Anh có biết có cải tiến nào cần thực hiện trước đó không?","có biết",["biết","nhận biết","nhận thức được"],"aware of"],
    [2,"Thực ra, tôi vừa mới kiểm tra xong trò chơi sáng nay.","vừa mới kiểm tra xong",["vừa kiểm tra xong","mới kiểm tra xong","vừa thử nghiệm xong"],"finished testing"],
    [3,"Tôi đã tìm thấy một vấn đề ở màn thứ ba.","một vấn đề",["vấn đề","một lỗi","lỗi"],"a problem"],
    [4,"Có vài lần nhân vật của tôi không thể di chuyển được.","không thể di chuyển",["không di chuyển được","không thể di chuyển được"],"couldn't move"],
    [6,"Tôi đã kiểm tra lại vấn đề bằng cách sử dụng một bộ điều khiển khác.","kiểm tra lại",["kiểm tra lần nữa","kiểm tra lại cho chắc"],"double-checked"],
    [8,"Tôi nghĩ Pauline cũng gặp vấn đề tương tự với một trò chơi cô ấy đã kiểm tra.","vấn đề tương tự",["một vấn đề tương tự","vấn đề giống vậy","lỗi tương tự"],"a similar problem"]
  ],
  't1-53': [
    [0,"Đây là văn phòng bảo trì tại khu chung cư Hillview.","văn phòng bảo trì",["văn phòng bảo dưỡng","phòng bảo trì"],"maintenance office"],
    [2,"Tôi gọi vì bộ điều chỉnh nhiệt mới trong căn hộ của tôi không hoạt động.","bộ điều chỉnh nhiệt",["bộ điều nhiệt","thiết bị điều nhiệt","máy điều nhiệt"],"thermostat"],
    [2,"Tôi gọi vì bộ điều chỉnh nhiệt mới trong căn hộ của tôi không hoạt động.","không hoạt động",["không chạy","bị hỏng","không làm việc"],"isn't working"],
    [3,"Nó cứ tự tắt rồi bật ngẫu nhiên, khiến căn hộ của tôi trở nên rất lạnh.","bật",["bật lên","tự bật","tự bật lên"],"turning on"],
    [3,"Nó cứ tự tắt rồi bật ngẫu nhiên, khiến căn hộ của tôi trở nên rất lạnh.","ngẫu nhiên",["bất chợt","không theo quy luật"],"randomly"],
    [6,"Bộ điều chỉnh nhiệt vừa mới được lắp đặt vào ngày hôm qua.","Bộ điều chỉnh nhiệt",["bộ điều nhiệt","thiết bị điều nhiệt","máy điều nhiệt"],"thermostat"],
    [6,"Bộ điều chỉnh nhiệt vừa mới được lắp đặt vào ngày hôm qua.","vừa mới được lắp đặt",["vừa được lắp đặt","mới được lắp đặt","vừa mới lắp đặt"],"was just installed"],
    [8,"Nhưng dự báo đêm nay nhiệt độ sẽ xuống dưới mức đóng băng đấy!","xuống dưới mức đóng băng",["xuống dưới ngưỡng đóng băng","thấp hơn mức đóng băng"],"below freezing"]
  ],
  't1-56': [
    [4,"Vâng, và vì du lịch mùa đông tăng lên gần đây, chúng tôi muốn mở rộng không gian để có thể chứa được nhiều hàng tồn kho hơn.","chứa được nhiều hàng tồn kho hơn",["chứa nhiều hàng tồn kho hơn","dự trữ được nhiều hàng hơn","chứa được nhiều hàng hơn"]]
  ],
  't1-59': [
    [2,"Tôi e rằng điều đó có thể trở thành gánh nặng cho những nhân viên lâu năm.","trở thành gánh nặng",["thành gánh nặng","gây thêm gánh nặng"]],
    [3,"Họ sẽ phải làm chậm công việc của mình để giải thích những gì họ đang làm.","làm chậm",["làm chậm lại","giảm tốc độ"]],
    [4,"Nếu chúng ta quay video những nhân viên giàu kinh nghiệm thực hiện các nhiệm vụ cụ thể thì sao?","thực hiện các nhiệm vụ cụ thể",["làm các nhiệm vụ cụ thể","thực hiện những công việc cụ thể"],"doing specific tasks"]
  ],
  't1-62': [
    [4,"Ngay sau cuộc họp của tôi với nhân viên ở Chicago thì sao?","Ngay sau",["Liền sau","Ngay khi kết thúc"],"right after"]
  ],
  't1-65': [
    [5,"Tôi rất sẵn lòng thực hiện thay đổi đó.","rất sẵn lòng",["sẵn lòng","rất sẵn sàng","sẵn sàng"],"I'd be happy to"]
  ],
  't1-68': [
    [4,"Tôi sẽ liên hệ với một số công ty để lấy báo giá.","lấy báo giá",["xin báo giá","yêu cầu báo giá","hỏi báo giá"],"for estimates"]
  ]
};

// Additional context-checked meaning exercises for Test 1.
const testOneMoreMeaningExercises = {
 't1-32': [
 [0,"kết quả khảo sát nhóm khách hàng mục tiêu","kết quả khảo sát",["kết quả nghiên cứu","kết quả khảo sát khách hàng"],"results","focus group results"],
 [0,"loại phô mai cheddar cay mới của chúng ta","phô mai cheddar cay",["phô mai cheddar vị cay","phô mai cheddar cay mới"],"spicy cheddar cheese","our new spicy cheddar cheese"],
 [3,"sử dụng nó trong các công thức nấu ăn","công thức nấu ăn",["công thức món ăn","công thức"],"recipes","use it in recipes"],
 [3,"ví dụ như thêm vào nước sốt","thêm vào nước sốt",["cho vào nước sốt","thêm vào sốt"],"add to sauces","to add to sauces, for example"],
 [4,"cân nhắc bán phiên bản dạng bào sợi","dạng bào sợi",["dạng sợi","dạng bào","đã bào sợi"],"shredded version","consider selling a shredded version"],
 [4,"để nó có thể tan chảy dễ dàng khi nấu","tan chảy dễ dàng",["dễ tan chảy","tan chảy nhanh"],"melt easily","that would melt easily when cooked"]
 ],
 't1-35': [
 [0,"cho trận đấu quần vợt vào thứ Năm này","trận đấu quần vợt",["trận tennis","trận đấu tennis"],"tennis match","this Thursday's tennis match"],
 [3,"vào tháng trước","tháng trước",["tháng vừa rồi","tháng vừa qua"],"last month","last month"],
 [5,"chỉ còn duy nhất một cụm ba ghế cạnh nhau","ba ghế cạnh nhau",["3 ghế cạnh nhau","ba chỗ ngồi cạnh nhau","3 chỗ ngồi cạnh nhau"],"three seats together","one group of three seats together"]
 ],
 't1-38': [
 [0,"tổ chức bữa tiệc tối gây quỹ thường niên của thư viện","thường niên",["hàng năm","hằng năm","mỗi năm"],"annual","organize the library's annual fund-raising dinner"],
 [1,"đủ tiền để mở rộng phần sách dành cho thiếu nhi","đủ tiền",["đủ số tiền","đủ kinh phí"],"enough money","enough money to expand our children's book section"],
 [6,"Nó nằm trong tệp máy tính của tôi.","tệp máy tính",["tập tin máy tính","file máy tính","tệp trên máy tính"],"computer files","It's in my computer files"]
 ],
 't1-41': [
 [0,"tại lễ hội cộng đồng","lễ hội cộng đồng",["lễ hội của cộng đồng","lễ hội địa phương"],"community festival","at the community festival"],
 [0,"nhằm quảng bá doanh nghiệp của chúng ta","quảng bá doanh nghiệp",["quảng bá công ty","giới thiệu doanh nghiệp","quảng bá việc kinh doanh"],"promote our business","to promote our business"],
 [1,"Chúng ta có thể in logo dịch vụ vệ sinh của mình lên đó không?","dịch vụ vệ sinh",["dịch vụ làm sạch","dịch vụ dọn vệ sinh"],"cleaning service","Can we put our cleaning service logo on them?"],
 [3,"chúng có thể phân hủy sinh học","phân hủy sinh học",["có khả năng phân hủy sinh học","tự phân hủy sinh học"],"biodegradable","they're biodegradable"],
 [5,"các vật dụng vệ sinh hữu cơ mà công ty chúng ta sử dụng","vật dụng vệ sinh hữu cơ",["sản phẩm vệ sinh hữu cơ","đồ dùng vệ sinh hữu cơ"],"organic cleaning supplies","the organic cleaning supplies our company uses"],
 [6,"đặt hàng vài thùng","vài thùng",["một vài thùng","mấy thùng","nhiều thùng"],"several cases","order several cases"]
 ],
 't1-44': [
 [6,"có liệt kê một số công ty","liệt kê",["ghi danh sách","ghi ra","liệt kê ra"],"list","we list a number of companies"],
 [6,"có thể đến dọn dẹp và xử lý các món đồ đó giúp ông","dọn dẹp",["mang đi","dọn đi","thu dọn"],"remove","on our Web site we list a number of companies that can remove and dispose of the items for you"]
 ],
 't1-47': [
 [0,"chúng ta cùng học lớp dành cho chủ doanh nghiệp vào năm ngoái","chủ doanh nghiệp",["chủ kinh doanh","người chủ doanh nghiệp"],"business owners","we took that class for business owners together last year"],
 [1,"Tôi vừa có việc ở khu này","ở khu này",["trong khu này","ở gần đây","trong khu vực này"],"in the neighborhood","I was just in the neighborhood"],
 [4,"mở cơ sở thứ hai","cơ sở thứ hai",["địa điểm thứ hai","chi nhánh thứ hai"],"a second location","opening a second location"],
 [5,"nhà hàng Sunnyvale đã đóng cửa","đã đóng cửa",["đã ngừng kinh doanh","đã dừng kinh doanh"],"went out of business","Sunnyvale Restaurant went out of business"],
 [6,"Nó rất gần trường đại học địa phương.","trường đại học địa phương",["trường đại học gần đó","đại học trong vùng"],"local university","It's very close to the local university"]
 ],
 't1-50': [
 [1,"có cải tiến nào cần thực hiện","cải tiến",["sự cải thiện","các cải tiến","những cải tiến"],"improvements","any improvements that need to be made"],
 [3,"ở màn thứ ba","màn thứ ba",["màn ba","cấp độ thứ ba","màn 3"],"third stage","in the third stage of the game"],
 [6,"bằng cách sử dụng một bộ điều khiển khác","bộ điều khiển",["tay cầm","tay cầm điều khiển","thiết bị điều khiển"],"controller","using a different controller"]
 ],
 't1-53': [
 [0,"tại khu chung cư Hillview","khu chung cư",["khu căn hộ","chung cư"],"Apartment Complex","Hillview Apartment Complex"],
 [4,"Vấn đề này bắt đầu từ khi nào?","Vấn đề này",["vấn đề","sự cố này","sự cố"],"this issue","When did this issue start?"],
 [5,"Cách đây vài giờ.","vài giờ",["một vài giờ","mấy giờ","vài tiếng"],"A few hours","A few hours ago"]
 ],
 't1-56': [
 [1,"khoản vay cho doanh nghiệp của chúng tôi","khoản vay",["một khoản vay","tiền vay"],"a loan","a loan for our business"],
 [2,"một cửa hàng sửa chữa","cửa hàng sửa chữa",["tiệm sửa chữa","cửa tiệm sửa chữa"],"a repair shop","a repair shop"],
 [3,"một cửa hàng sửa chữa xe trượt tuyết","xe trượt tuyết",["xe chạy trên tuyết","xe máy trượt tuyết"],"snowmobile","a snowmobile repair shop"],
 [3,"các thiết bị thể thao khác","thiết bị thể thao",["dụng cụ thể thao","đồ thể thao"],"sports equipment","other sports equipment"],
 [4,"du lịch mùa đông tăng lên gần đây","du lịch mùa đông",["hoạt động du lịch mùa đông","du lịch vào mùa đông"],"winter tourism","winter tourism has increased recently"],
 [4,"chúng tôi muốn mở rộng không gian","mở rộng không gian",["nới rộng không gian","mở rộng diện tích"],"expand our space","we'd like to expand our space"]
 ],
 't1-59': [
 [0,"nâng cao kỹ năng","nâng cao kỹ năng",["cải thiện kỹ năng","nâng cấp kỹ năng"],"upgrading their skills","upgrading their skills"],
 [1,"triển khai chương trình đào tạo chéo","triển khai",["thực hiện","áp dụng","tổ chức"],"implement","implement a peer-training program"],
 [1,"người học sẽ theo sát những nhân viên giàu kinh nghiệm","theo sát",["theo dõi","quan sát sát sao","đi theo quan sát"],"shadow","learners shadow more-experienced employees"],
 [2,"những nhân viên lâu năm","nhân viên lâu năm",["nhân viên làm việc lâu năm","những người làm lâu năm"],"long-time employees","our long-time employees"],
 [4,"Video chất lượng cao có thể được ghi lại và chỉnh sửa bằng điện thoại thông minh.","ghi lại và chỉnh sửa",["quay và chỉnh sửa","ghi hình và biên tập","ghi lại và biên tập"],"recorded and edited","High-quality video can be recorded and edited with a smartphone"]
 ],
 't1-62': [
 [0,"tôi đang ở sân bay đợi chuyến bay","đợi chuyến bay",["chờ chuyến bay","đợi máy bay","chờ máy bay"],"waiting for my flight","I'm at the airport waiting for my flight"],
 [3,"Cô muốn gặp cô ấy vào ngày nào?","muốn",["thích","muốn hơn","ưa thích"],"prefer","Which day would you prefer to meet with her?"],
 [5,"vì những đóng góp cho cộng đồng","đóng góp cho cộng đồng",["những đóng góp cho cộng đồng","cống hiến cho cộng đồng"],"contributions to the community","for our contributions to the community"],
 [5,"Nó vừa được công bố sáng nay.","vừa được công bố",["mới được công bố","vừa mới công bố","vừa được thông báo"],"just announced","It was just announced this morning"]
 ],
 't1-65': [
 [0,"chúng ta liên tục nhận được cuộc gọi","liên tục nhận được cuộc gọi",["liên tục nhận các cuộc gọi","cứ nhận được cuộc gọi"],"keep getting calls","we keep getting calls"],
 [0,"muốn tham quan vườn bách thảo","vườn bách thảo",["vườn thực vật","khu vườn bách thảo"],"botanical garden","visit the botanical garden"],
 [0,"không tìm thấy thông tin bãi đậu xe","thông tin bãi đậu xe",["thông tin đỗ xe","thông tin bãi đỗ xe"],"parking information","can't find parking information"],
 [4,"tạo một trang riêng cho chỉ đường và thông tin đậu xe","một trang riêng",["trang riêng","một trang tách riêng","trang riêng biệt"],"a separate page","make a separate page for directions and parking information"]
 ],
 't1-68': [
 [0,"việc lắp đặt giá để xe đạp","giá để xe đạp",["giá đỗ xe đạp","giá dựng xe đạp","kệ để xe đạp"],"bicycle racks","install bicycle racks"],
 [1,"quyết định nơi đặt các giá để xe","quyết định",["lựa chọn","đưa ra quyết định"],"decide","decide where to place the racks"],
 [2,"Ngay cạnh lối vào nhà ga thì sao?","lối vào nhà ga",["cửa vào nhà ga","lối vào ga"],"station entrance","by the station entrance"],
 [3,"vị trí thuận tiện nhất","vị trí thuận tiện nhất",["chỗ thuận tiện nhất","địa điểm thuận tiện nhất"],"the most convenient spot","the most convenient spot"]
 ]
};

const additionalMeaningExercises = {
 't6-32': [
  [0,"Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.","quảng cáo mới",["quảng cáo mới nhất","mẫu quảng cáo mới"],"new commercials"],
  [0,"Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.","trên truyền hình",["trên tivi","trên TV"],"on television"],
  [1,"Tôi đoán chiến dịch quảng cáo đã bắt đầu rồi.","chiến dịch quảng cáo",["chiến dịch tiếp thị","chiến dịch quảng bá"],"advertising campaign"],
  [1,"Tôi đoán chiến dịch quảng cáo đã bắt đầu rồi.","đã bắt đầu",["đã khởi động","đã ra mắt","đã triển khai"],"has already launched"],
  [2,"Chiến dịch quảng cáo này ra mắt vào thời điểm tuyệt vời cho chúng ta.","ra mắt",["được phát hành","được tung ra","bắt đầu"],"coming out"],
  [3,"Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.","mùa cao điểm",["mùa bận rộn","mùa cao điểm du lịch"],"busy season"],
  [3,"Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.","đặt tour",["đặt chuyến tham quan","đặt chuyến du lịch","đặt tua"],"book our tours"],
  [4,"Vẫn còn một chút tiền trong ngân sách.","ngân sách",["quỹ ngân sách","ngân quỹ"],"budget"],
  [5,"Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.","gói dịch vụ mới nhất",["gói mới nhất","gói dịch vụ gần đây nhất"],"most recent package"],
  [5,"Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.","bao gồm vé xem biểu diễn",["bao gồm vé xem buổi biểu diễn","gồm vé xem biểu diễn","bao gồm vé xem chương trình"],"including tickets to a performance"],
  [7,"Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu.","chi phí",["giá","số tiền","mức phí"],"cost"],
  [7,"Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu.","quảng cáo hiện tại",["quảng cáo đang có","quảng cáo hiện nay"],"current commercials"]
 ],
 't2-32': [
  [0,"Các chuyến giao hàng hôm nay thế nào?","Các chuyến giao hàng",["những chuyến giao hàng","các lần giao hàng","việc giao hàng"],"deliveries"],
  [1,"Không tệ, ngoại trừ ở tòa nhà chung cư mới trên phố South.","tòa nhà chung cư",["chung cư","tòa nhà dân cư","tòa nhà căn hộ"],"residential building"],
  [2,"Tôi phải gọi điện cho họ để họ ra lấy đồ ăn.","lấy đồ ăn",["nhận đồ ăn","lấy thức ăn","nhận thức ăn"],"pick up their food"],
  [3,"Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.","hệ thống liên lạc nội bộ",["hệ thống liên lạc trong tòa nhà","máy liên lạc nội bộ","bộ đàm nội bộ"],"building intercom"],
  [3,"Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.","vẫn bị hỏng",["vẫn hỏng","vẫn còn hỏng","vẫn bị lỗi"],"still broken"],
  [5,"Tuần trước, một khách hàng gọi điện phàn nàn rằng đồ ăn đã nguội lạnh khi họ tìm thấy.","phàn nàn",["than phiền","khiếu nại"],"complain"],
  [6,"Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.","chủ nhà",["người cho thuê","chủ tòa nhà"],"landlord"],
  [6,"Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.","giao hàng",["giao đồ","giao thức ăn"],"make deliveries"],
  [7,"Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động của chúng ta, bảo khách hàng ra gặp chúng ta ở cửa chính tòa nhà.","cập nhật hướng dẫn",["cập nhật chỉ dẫn","sửa hướng dẫn"],"update the instructions"],
  [7,"Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động của chúng ta, bảo khách hàng ra gặp chúng ta ở cửa chính tòa nhà.","cửa chính tòa nhà",["cửa chính của tòa nhà","cửa ra vào chính","cửa trước tòa nhà"],"building's front door"]
 ]
};
// Reviewed question highlights for Test 4.
Object.assign(testOneQuestionEmphasis, {
't4-32:32':{actor:['woman'],focus:['Who most likely']},
't4-32:33':{actor:['man'],focus:['looking forward to']},
't4-32:34':{actor:['woman'],focus:['ask for']},
't4-35:35':{actor:['man'],focus:['job']},
't4-35:36':{actor:['woman'],focus:['Why','concerned']},
't4-35:37':{actor:['man'],focus:['will check']},
't4-38:38':{actor:['man','Pelicon'],focus:['produce']},
't4-38:39':{actor:['woman'],focus:['concerned about']},
't4-38:40':{actor:['man'],focus:['Why','recommend reading an e-mail']},
't4-41:41':{actor:['woman'],focus:['next month']},
't4-41:42':{actor:['man want the woman'],focus:['to do']},
't4-41:43':{actor:['woman ask the man'],focus:['for']},
't4-44:44':{actor:['woman'],focus:['Why','calling']},
't4-44:45':{actor:['Giovanni Marino'],focus:['Who most likely']},
't4-44:46':{actor:['man'],focus:['send','in an e-mail']},
't4-47:47':{actor:['speakers'],focus:['discussing']},
't4-47:48':{actor:['man'],focus:['want to do']},
't4-47:49':{actor:['woman'],focus:['needs to do now']},
't4-50:50':{actor:['woman'],focus:['Who most likely']},
't4-50:51':{actor:['woman recommend that the man']},
't4-50:52':{actor:['woman'],focus:['happens each month']},
't4-53:53':{actor:['woman want the man'],focus:['look at']},
't4-53:54':{actor:['man'],focus:['imply']},
't4-53:55':{actor:['woman'],focus:['suggested','in the past']},
't4-56:56':{actor:['women'],focus:['type of business','own']},
't4-56:57':{actor:['man'],focus:['regarding television']},
't4-56:58':{actor:['the man','Saskia Hoffman'],focus:['why','good choice']},
't4-59:59':{actor:['speakers’ company'],focus:['manufacture']},
't4-59:60':{actor:['woman'],focus:['imply']},
't4-59:61':{actor:['woman'],focus:['do next']},
't4-62:62':{actor:['man'],focus:['Where','work']},
't4-62:63':{actor:['woman'],focus:['Which amount','ask about']},
't4-62:64':{actor:['man give the woman']},
't4-65:65':{actor:['man thank the woman'],focus:['for doing']},
't4-65:66':{actor:['man'],focus:['worried about']},
't4-65:67':{focus:['Where','table','set up']},
't4-68:68':{actor:['woman'],focus:['Why','garden center']},
't4-68:69':{actor:['woman'],focus:["Which month's post",'read']},
't4-68:70':{actor:['man show to the woman'],focus:['kind of products']}
});

// Approved quiz examples: English and Vietnamese excerpts are paired by meaning.
const quizApproved = {
 't1-41:41': {en:[['event','focus'],['speakers','actor'],['preparing for','actor']],vi:[['sự kiện gì','focus'],['Các diễn giả','actor'],['đang chuẩn bị cho','actor']]},
 't1-41:42': {en:[['mentioned','focus'],['pens','actor']],vi:[['được đề cập','focus'],['bút','actor']]},
 't1-41:43': {en:[['woman','focus'],['offer to do','focus']],vi:[['Người phụ nữ','focus'],['đề nghị làm gì','focus']]},
 't1-41:41:A':{en:[['new-employee orientation','focus']],vi:[['định hướng nhân viên mới','focus']]},
 't1-41:41:B':{en:[['grand opening','focus']],vi:[['Lễ khai trương','focus']]},
 't1-41:42:B':{en:[['permanent ink','focus']],vi:[['mực vĩnh cửu','focus']]},
 't1-41:42:D':{en:[['made from paper','actor']],vi:[['được làm từ giấy','actor']]},
 't1-41:43:B':{en:[['Place an order','focus']],vi:[['Đặt hàng','focus']]},
 't1-41:43:D':{en:[['Revise a budget','focus']],vi:[['Xem xét lại ngân sách','focus']]},
 't1-44:44:C':{en:[['recycling facility','focus']],vi:[['cơ sở tái chế','focus']]},
 't1-44:44:D':{en:[['real estate agency','focus']],vi:[['công ty bất động sản','focus']]},
 't1-44:45:B':{en:[['Used furniture','actor']],vi:[['Đồ nội thất cũ','actor']]},
 't1-44:45:C':{en:[['Electronics','actor']],vi:[['Đồ điện tử','actor']]},
 't1-44:46:C':{en:[['permit application','focus']],vi:[['Đơn xin giấy phép','focus']]},
 't1-47:47:C':{en:[['grew up','focus']],vi:[['lớn lên','focus']]},
 't1-47:48:B':{en:[['real estate agency','focus']],vi:[['Đại lý bất động sản','focus']]},
 't1-50:51:A':{en:[['secured some funding','focus']],vi:[['đảm bảo được một số nguồn tài trợ','focus']]},
 't1-50:51:B':{en:[['tested a product','actor']],vi:[['thử nghiệm một sản phẩm','actor']]},
 't1-50:51:D':{en:[['conducted an interview','focus']],vi:[['thực hiện một cuộc phỏng vấn','focus']]},
 't1-35:35:C':{en:[['buy tickets','actor']],vi:[['mua vé','actor']]}
};


Object.assign(additionalBilingualEmphasis, {
't4-32:32':['Người phụ nữ|có khả năng là ai','landscape architect/Kiến trúc sư cảnh quan','interior designer/Nhà thiết kế nội thất','real estate agent/Nhân viên môi giới bất động sản','building inspector'],
't4-32:33':['|mong chờ','particular area/một khu vực cụ thể','Walking/Đi bộ','vacation/Đi nghỉ mát','Saving money/Tiết kiệm tiền'],
't4-32:34':['Người phụ nữ|yêu cầu','references/thư giới thiệu','identification/giấy tờ tùy thân','signature/chữ ký','payment/thanh toán']
});
// Reviewed question emphasis for Test 2.
Object.assign(testOneQuestionEmphasis, {
't2-32:32':{actor:['man'],focus:['kind of work']},
't2-32:33':{actor:['speakers’ business'],focus:['caused problems']},
't2-32:34':{actor:['woman'],focus:['update','mobile application']},
't2-35:35':{actor:['speakers'],focus:['industry','work in']},
't2-35:36':{actor:['man'],focus:['suggest']},
't2-35:37':{actor:['speakers'],focus:['Why','wait']},
't2-38:38':{actor:['woman'],focus:['Who']},
't2-38:39':{actor:['woman'],focus:['online shopping']},
't2-38:40':{actor:['woman'],focus:['suggest doing']},
't2-41:41':{focus:['Why','sales increased']},
't2-41:42':{actor:['speakers'],focus:['industry','work in']},
't2-41:43':{actor:['man'],focus:['planning to do']},
't2-44:44':{actor:['speakers'],focus:['upcoming event','discussing']},
't2-44:45':{actor:['speakers’ company'],focus:['product','recently developed']},
't2-44:46':{actor:['woman','Kavi'],focus:['Why','recommend']},
't2-47:47':{actor:['speakers'],focus:['Where','work']},
't2-47:48':{actor:['man tell the woman'],focus:['about']},
't2-47:49':{actor:['man','Kelly Graham'],focus:['Why','contact']},
't2-50:50':{actor:['men'],focus:['industry','work in']},
't2-50:51':{actor:['men','woman'],focus:['How','learn about']},
't2-50:52':{actor:['woman'],focus:['want to do','next week']},
't2-53:53':{actor:['speakers'],focus:['type of business','work for']},
't2-53:54':{actor:['man'],focus:['Why']},
't2-53:55':{actor:['woman'],focus:['suggest']},
't2-56:56':{actor:['men'],focus:['industry','work in']},
't2-56:57':{actor:['men'],focus:['Why','request a meeting']},
't2-56:58':{actor:['speakers'],focus:['do next']},
't2-59:59':{actor:['woman'],focus:['type of business','work in']},
't2-59:60':{actor:['woman'],focus:['Why']},
't2-59:61':{actor:['man’s business'],focus:['offer']},
't2-62:62':{actor:['man’s client'],focus:['request']},
't2-62:63':{actor:['man’s coffee'],focus:['How much','cost']},
't2-62:64':{actor:['woman','David']},
't2-65:65':{actor:['man'],focus:['most likely do']},
't2-65:66':{actor:['woman'],focus:['provide']},
't2-65:67':{actor:['man'],focus:['Which appointment','reschedule']},
't2-68:68':{actor:['speakers'],focus:['industry','work in']},
't2-68:69':{actor:['woman want the man'],focus:['Why','attend a conference']},
't2-68:70':{actor:['woman'],focus:['Which tip','point out']}
});

// Question focus excerpts reviewed against each question.
Object.assign(testOneQuestionEmphasis, {
"t3-32:32": {"focus":["Where","work"]},
"t3-32:33": {"focus":["suggest considering"]},
"t3-32:34": {"focus":["will do"]},
"t3-35:35": {"focus":["Where","taking place"]},
"t3-35:36": {"focus":["type of event","this evening"]},
"t3-35:37": {"focus":["forget to bring"]},
"t3-38:38": {"focus":["decided to do"]},
"t3-38:39": {"focus":["business","work for"]},
"t3-38:40": {"focus":["help her do"]},
"t3-41:41": {"focus":["problem"]},
"t3-41:42": {"focus":["Where","work"]},
"t3-41:43": {"focus":["this afternoon"]},
"t3-44:44": {"focus":["Why","calling"]},
"t3-44:45": {"focus":["offer to do"]},
"t3-44:46": {"focus":["Why","congratulate"]},
"t3-47:47": {"focus":["Where","take place"]},
"t3-47:48": {"focus":["Why","refund"]},
"t3-47:49": {"focus":["imply"]},
"t3-50:50": {"focus":["job"]},
"t3-50:51": {"focus":["while the man was gone"]},
"t3-50:52": {"focus":["recently changed"]},
"t3-53:53": {"focus":["type of company"]},
"t3-53:54": {"focus":["recently done"]},
"t3-53:55": {"focus":["will do"]},
"t3-56:56": {"focus":["maintenance check"]},
"t3-56:57": {"focus":["news"]},
"t3-56:58": {"focus":["Why","traveling to Toronto"]},
"t3-59:59": {"focus":["type of business"]},
"t3-59:60": {"focus":["imply"]},
"t3-59:61": {"focus":["agree to do"]},
"t3-62:62": {"focus":["Which dollar amount","change"]},
"t3-62:63": {"focus":["added","front of the store"]},
"t3-62:64": {"focus":["why","arrive late"]},
"t3-65:65": {"focus":["needs to have done"]},
"t3-65:66": {"focus":["bring to an appointment"]},
"t3-65:67": {"focus":["Which day","appointment"]},
"t3-68:68": {"focus":["event","last week"]},
"t3-68:69": {"focus":["documents"]},
"t3-68:70": {"focus":["Which section","ask about"]},
"t5-32:32": {"focus":["ask the man to do"]},
"t5-32:33": {"focus":["equipment"]},
"t5-32:34": {"focus":["Where"]},
"t5-35:35": {"focus":["Where","work"]},
"t5-35:36": {"focus":["Why","tomorrow"]},
"t5-35:37": {"focus":["information","next"]},
"t5-38:38": {"focus":["department"]},
"t5-38:39": {"focus":["kind of work"]},
"t5-38:40": {"focus":["this afternoon"]},
"t5-41:41": {"focus":["recently happened"]},
"t5-41:42": {"focus":["help the business"]},
"t5-41:43": {"focus":["call today"]},
"t5-44:44": {"focus":["manufacture"]},
"t5-44:45": {"focus":["suggest contacting"]},
"t5-44:46": {"focus":["Why","opposed"]},
"t5-47:47": {"focus":["meeting to discuss"]},
"t5-47:48": {"focus":["mean"]},
"t5-47:49": {"focus":["Who most likely"]},
"t5-50:50": {"focus":["Why","miss a meeting"]},
"t5-50:51": {"focus":["Which sport"]},
"t5-50:52": {"focus":["Why","early"]},
"t5-53:53": {"focus":["industry"]},
"t5-53:54": {"focus":["reason","not get a contract"]},
"t5-53:55": {"focus":["ask the man to do"]},
"t5-56:56": {"focus":["last month"]},
"t5-56:57": {"focus":["Why"]},
"t5-56:58": {"focus":["this afternoon"]},
"t5-59:59": {"focus":["Where","work"]},
"t5-59:60": {"focus":["ask the woman to do"]},
"t5-59:61": {"focus":["this afternoon"]},
"t5-62:62": {"focus":["Which project phase","just completed"]},
"t5-62:63": {"focus":["ask the man to do"]},
"t5-62:64": {"focus":["intend to do next"]},
"t5-65:65": {"focus":["type of business"]},
"t5-65:66": {"focus":["which area","most of its deliveries"]},
"t5-65:67": {"focus":["lowering business expenses"]},
"t5-68:68": {"focus":["Who most likely"]},
"t5-68:69": {"focus":["Which step"]},
"t5-68:70": {"focus":["do next"]},
"t6-32:32": {"focus":["last week"]},
"t6-32:33": {"focus":["industry"]},
"t6-32:34": {"focus":["check on"]},
"t6-35:35": {"focus":["Where","work"]},
"t6-35:36": {"focus":["address a problem"]},
"t6-35:37": {"focus":["Why","next week"]},
"t6-38:38": {"focus":["job"]},
"t6-38:39": {"focus":["help with"]},
"t6-38:40": {"focus":["next week"]},
"t6-41:41": {"focus":["Where most likely"]},
"t6-41:42": {"focus":["Why","unable to help"]},
"t6-41:43": {"focus":["Why","unavailable"]},
"t6-44:44": {"focus":["Who most likely"]},
"t6-44:45": {"focus":["project","proposed"]},
"t6-44:46": {"focus":["inquire about"]},
"t6-47:47": {"focus":["Why","miss a meeting"]},
"t6-47:48": {"focus":["good news"]},
"t6-47:49": {"focus":["will do"]},
"t6-50:50": {"focus":["planning"]},
"t6-50:51": {"focus":["excited about"]},
"t6-50:52": {"focus":["research"]},
"t6-53:53": {"focus":["Who most likely"]},
"t6-53:54": {"focus":["Why"]},
"t6-53:55": {"focus":["do next"]},
"t6-56:56": {"focus":["last month"]},
"t6-56:57": {"focus":["Why","next month"]},
"t6-56:58": {"focus":["send","link"]},
"t6-59:59": {"focus":["type of product"]},
"t6-59:60": {"focus":["propose offering"]},
"t6-59:61": {"focus":["mean"]},
"t6-62:62": {"focus":["Why","hosting a banquet"]},
"t6-62:63": {"focus":["included in a presentation"]},
"t6-62:64": {"focus":["Where","seated"]},
"t6-65:65": {"focus":["Where","work"]},
"t6-65:66": {"focus":["new departure time"]},
"t6-65:67": {"focus":["ask the man for"]},
"t6-68:68": {"focus":["recently purchased"]},
"t6-68:69": {"focus":["ask the woman to do"]},
"t6-68:70": {"focus":["How much","electrical switch"]},
});

// Translations newly authored from the corrected English transcript.
// Audio alignment evidence comes from the project's existing validated timing.
const supplementalTranslations = {
 't3-47': {
 sentences:[
 "Chào mừng đến với Scott's Supplies! Xin thông báo, hôm nay toàn bộ dụng cụ điện cầm tay và thang của chúng tôi đều được giảm giá hai mươi phần trăm.",
 "Tôi có thể giúp gì cho ông không?",
 "Có. Tuần trước tôi đến mua một ít gỗ cho công việc sửa sang nhà đang làm, nhưng những tấm ván tôi mua có chiều rộng không phù hợp.",
 "Tôi muốn hỏi liệu tôi có thể được hoàn tiền không.",
 "Được chứ. Ông có hóa đơn không?",
 "Tiếc là không. Chắc tôi làm mất rồi.",
 "Ừm, được rồi. Để tôi tìm quản lý."
 ],
 questions:[
 ["Cuộc trò chuyện có khả năng diễn ra ở đâu?","Tại cửa hàng nội thất","Tại cửa hàng điện tử","Tại cửa hàng đồ thể thao","Tại cửa hàng vật liệu xây dựng"],
 ["Tại sao người đàn ông muốn được hoàn tiền?","Ông ấy tìm được lựa chọn rẻ hơn","Ông ấy mua sai kích thước","Ông ấy không thích màu của món hàng","Ông ấy nhận thấy món hàng bị hỏng"],
 ["Người phụ nữ ngụ ý gì khi nói “Để tôi tìm quản lý”?","Cô ấy cần phục vụ khách hàng khác","Cô ấy không có thẩm quyền đáp ứng yêu cầu","Một giao dịch chưa được xử lý đúng","Cần ghi nhận khiếu nại về chất lượng"]
 ]
 },
 't3-50': {
 sentences:[
 "Anh về rồi! Các chuyến giao đồ ăn trưa thế nào?",
 "Cũng ổn, ngoại trừ việc một chiếc túi bị rách và hộp thức ăn rơi ra đúng lúc tôi đang đi đến cửa nhà khách.",
 "Hộp vẫn còn đóng kín và khách đã nhận, nên cuối cùng mọi việc cũng ổn.",
 "Tôi mừng vì mọi chuyện đã ổn thỏa.",
 "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc anh đi vắng.",
 "Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được gom lại để tài xế giao hàng hiệu quả hơn.",
 "Tôi cũng vậy. Gần đây số khách hàng của chúng ta tăng đáng kể, nên phần mềm này sẽ rất hữu ích."
 ],
 questions:[
 ["Người đàn ông có khả năng làm nghề gì?","Thợ sửa ống nước","Thợ sửa ô tô","Nhân viên giao đồ ăn","Kỹ thuật viên máy tính"],
 ["Người phụ nữ đã làm gì khi người đàn ông đi vắng?","Cô ấy tạo một quảng cáo","Cô ấy hoàn tất một hợp đồng","Cô ấy xử lý khiếu nại của khách hàng","Cô ấy cho cài phần mềm mới"],
 ["Người phụ nữ nói gần đây điều gì đã thay đổi?","Chi phí đã giảm","Đối thủ mở địa điểm gần đó","Số lượng khách hàng tăng","Các quy định an toàn đã được đưa ra"]
 ]
 }
};
Object.assign(additionalMeaningExercises,{
 't3-47': [
 [0,"Chào mừng đến với Scott's Supplies! Xin thông báo, hôm nay toàn bộ dụng cụ điện cầm tay và thang của chúng tôi đều được giảm giá hai mươi phần trăm.","dụng cụ điện cầm tay",["dụng cụ điện","công cụ điện"],"power tools"],
 [0,"Chào mừng đến với Scott's Supplies! Xin thông báo, hôm nay toàn bộ dụng cụ điện cầm tay và thang của chúng tôi đều được giảm giá hai mươi phần trăm.","giảm giá hai mươi phần trăm",["giảm giá 20 phần trăm","giảm 20%","giảm hai mươi phần trăm"],"twenty percent off"],
 [2,"Có. Tuần trước tôi đến mua một ít gỗ cho công việc sửa sang nhà đang làm, nhưng những tấm ván tôi mua có chiều rộng không phù hợp.","gỗ",["gỗ xẻ","vật liệu gỗ"],"lumber"],
 [2,"Có. Tuần trước tôi đến mua một ít gỗ cho công việc sửa sang nhà đang làm, nhưng những tấm ván tôi mua có chiều rộng không phù hợp.","chiều rộng không phù hợp",["sai chiều rộng","không đúng chiều rộng"],"wrong width"],
 [3,"Tôi muốn hỏi liệu tôi có thể được hoàn tiền không.","hoàn tiền",["trả lại tiền","hoàn lại tiền"],"get a refund"],
 [4,"Được chứ. Ông có hóa đơn không?","hóa đơn",["biên lai","hóa đơn mua hàng"],"receipt"],
 [5,"Tiếc là không. Chắc tôi làm mất rồi.","Chắc tôi làm mất",["chắc là tôi đã làm mất","hẳn tôi đã làm mất","tôi chắc đã làm mất"],"I must've lost"],
 [6,"Ừm, được rồi. Để tôi tìm quản lý.","quản lý",["người quản lý","quản lý cửa hàng"],"manager"]
 ],
 't3-50': [
 [0,"Anh về rồi! Các chuyến giao đồ ăn trưa thế nào?","giao đồ ăn trưa",["giao thức ăn trưa","giao bữa trưa"],"lunch deliveries"],
 [1,"Cũng ổn, ngoại trừ việc một chiếc túi bị rách và hộp thức ăn rơi ra đúng lúc tôi đang đi đến cửa nhà khách.","hộp thức ăn",["hộp đồ ăn","hộp đựng thức ăn"],"food container"],
 [1,"Cũng ổn, ngoại trừ việc một chiếc túi bị rách và hộp thức ăn rơi ra đúng lúc tôi đang đi đến cửa nhà khách.","rơi ra",["rớt ra","rơi ra ngoài"],"fell out"],
 [2,"Hộp vẫn còn đóng kín và khách đã nhận, nên cuối cùng mọi việc cũng ổn.","đóng kín",["niêm phong","được niêm phong","kín"],"sealed"],
 [2,"Hộp vẫn còn đóng kín và khách đã nhận, nên cuối cùng mọi việc cũng ổn.","cuối cùng",["rốt cuộc","sau cùng"],"in the end"],
 [3,"Tôi mừng vì mọi chuyện đã ổn thỏa.","ổn thỏa",["ổn","suôn sẻ","được giải quyết"],"worked out"],
 [4,"Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc anh đi vắng.","phần mềm giao hàng",["phần mềm giao nhận","ứng dụng giao hàng"],"delivery software"],
 [4,"Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc anh đi vắng.","trong lúc anh đi vắng",["khi anh đi vắng","trong khi anh vắng mặt"],"while you were gone"],
 [5,"Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được gom lại để tài xế giao hàng hiệu quả hơn.","gom lại",["nhóm lại","gộp lại","xếp chung"],"grouped together"],
 [5,"Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được gom lại để tài xế giao hàng hiệu quả hơn.","hiệu quả hơn",["một cách hiệu quả hơn","năng suất hơn"],"more efficiently"],
 [6,"Tôi cũng vậy. Gần đây số khách hàng của chúng ta tăng đáng kể, nên phần mềm này sẽ rất hữu ích.","tăng đáng kể",["tăng mạnh","gia tăng đáng kể"],"significant increase"]
 ]
});
Object.assign(additionalBilingualEmphasis,{
't3-47:47':['|Cuộc trò chuyện|ở đâu','furniture/nội thất','electronics/điện tử','sporting goods/đồ thể thao','building supply/vật liệu xây dựng'],
't3-47:48':['người đàn ông|Tại sao|hoàn tiền','less expensive/rẻ hơn','wrong size/sai kích thước','color/màu','damaged/bị hỏng'],
't3-47:49':['Người phụ nữ|ngụ ý','other customers/khách hàng khác','authority/thẩm quyền','processed correctly/xử lý đúng','quality complaint/khiếu nại về chất lượng'],
't3-50:50':['Người đàn ông|nghề gì','Plumber/Thợ sửa ống nước','Auto mechanic/Thợ sửa ô tô','Food delivery/giao đồ ăn','Computer technician/Kỹ thuật viên máy tính'],
't3-50:51':['người đàn ông|đi vắng','advertisement/quảng cáo','contract/hợp đồng','customer complaint/khiếu nại của khách hàng','software/phần mềm'],
't3-50:52':['Người phụ nữ|gần đây|thay đổi','Costs/Chi phí','competitor/Đối thủ','number of customers/Số lượng khách hàng','Safety regulations/quy định an toàn']
});

// Focus phrases chosen for each individual question in Tests 7–10.
Object.assign(testOneQuestionEmphasis,{
"t7-32:32":{"focus":["complaint"]},
"t7-32:33":{"focus":["will do"]},
"t7-32:34":{"focus":["remind the woman about"]},
"t7-35:35":{"focus":["occupation"]},
"t7-35:36":{"focus":["likes"]},
"t7-35:37":{"focus":["Why","make a phone call"]},
"t7-38:38":{"focus":["Where","work"]},
"t7-38:39":{"focus":["request"]},
"t7-38:40":{"focus":["suggest the man do"]},
"t7-41:41":{"focus":["type of business"]},
"t7-41:42":{"focus":["decide to do"]},
"t7-41:43":{"focus":["send by e-mail"]},
"t7-44:44":{"focus":["area of expertise"]},
"t7-44:45":{"focus":["current job"]},
"t7-44:46":{"focus":["next week"]},
"t7-47:47":{"focus":["preparing for","in June"]},
"t7-47:48":{"focus":["Why","pleased"]},
"t7-47:49":{"focus":["remind the woman about"]},
"t7-50:50":{"focus":["Who most likely"]},
"t7-50:51":{"focus":["asked to do"]},
"t7-50:52":{"focus":["event","next month"]},
"t7-53:53":{"focus":["Where","taking place"]},
"t7-53:54":{"focus":["Why","concerned"]},
"t7-53:55":{"focus":["Why"]},
"t7-56:56":{"focus":["attending"]},
"t7-56:57":{"focus":["pleased about"]},
"t7-56:58":{"focus":["suggest doing"]},
"t7-59:59":{"focus":["Where","work"]},
"t7-59:60":{"focus":["motivated","visit the business"]},
"t7-59:61":{"focus":["Why"]},
"t7-62:62":{"focus":["Who"]},
"t7-62:63":{"focus":["Why","check a manual"]},
"t7-62:64":{"focus":["What day","take place"]},
"t7-65:65":{"focus":["Why","make a decision quickly"]},
"t7-65:66":{"focus":["Which logo design","prefer"]},
"t7-65:67":{"focus":["scheduled","next week"]},
"t7-68:68":{"focus":["ask about"]},
"t7-68:69":{"focus":["When","most popular crop","planted"]},
"t7-68:70":{"focus":["offer to do"]},
"t8-32:32":{"focus":["Who most likely"]},
"t8-32:33":{"focus":["agree to do"]},
"t8-32:34":{"focus":["do next"]},
"t8-35:35":{"focus":["Where","work"]},
"t8-35:36":{"focus":["problem"]},
"t8-35:37":{"focus":["will do"]},
"t8-38:38":{"focus":["mainly discussing"]},
"t8-38:39":{"focus":["like about a project"]},
"t8-38:40":{"focus":["suggest doing"]},
"t8-41:41":{"focus":["Who most likely"]},
"t8-41:42":{"focus":["next week"]},
"t8-41:43":{"focus":["want to do"]},
"t8-44:44":{"focus":["Where","work"]},
"t8-44:45":{"focus":["in the spring"]},
"t8-44:46":{"focus":["ask the woman to do"]},
"t8-47:47":{"focus":["working on"]},
"t8-47:48":{"focus":["will do"]},
"t8-47:49":{"focus":["suggest","later"]},
"t8-50:50":{"focus":["like about a restaurant"]},
"t8-50:51":{"focus":["problem"]},
"t8-50:52":{"focus":["do next"]},
"t8-53:53":{"focus":["Where"]},
"t8-53:54":{"focus":["Why"]},
"t8-53:55":{"focus":["do next"]},
"t8-56:56":{"focus":["Where","taking place"]},
"t8-56:57":{"focus":["Why","traveling to Toronto"]},
"t8-56:58":{"focus":["offer to do"]},
"t8-59:59":{"focus":["been doing"]},
"t8-59:60":{"focus":["Why"]},
"t8-59:61":{"focus":["check next"]},
"t8-62:62":{"focus":["Who most likely"]},
"t8-62:63":{"focus":["Which tire model","invoice"]},
"t8-62:64":{"focus":["invite the woman to share"]},
"t8-65:65":{"focus":["Why","buy a new pillow"]},
"t8-65:66":{"focus":["How much","recommends"]},
"t8-65:67":{"focus":["ask about"]},
"t8-68:68":{"focus":["area of expertise"]},
"t8-68:69":{"focus":["recently do"]},
"t8-68:70":{"focus":["Which step","especially enjoy"]},
"t9-32:32":{"focus":["purpose"]},
"t9-32:33":{"focus":["additional service","offer"]},
"t9-32:34":{"focus":["ask the man to provide"]},
"t9-35:35":{"focus":["Who most likely"]},
"t9-35:36":{"focus":["learned from another factory"]},
"t9-35:37":{"focus":["start of each shift"]},
"t9-38:38":{"focus":["human resources department","concerned about"]},
"t9-38:39":{"focus":["Which department","work in"]},
"t9-38:40":{"focus":["will do"]},
"t9-41:41":{"focus":["mainly discussing"]},
"t9-41:42":{"focus":["concerned about"]},
"t9-41:43":{"focus":["will do"]},
"t9-44:44":{"focus":["working on"]},
"t9-44:45":{"focus":["Why"]},
"t9-44:46":{"focus":["offer to show the man"]},
"t9-47:47":{"focus":["Who most likely"]},
"t9-47:48":{"focus":["company’s goal"]},
"t9-47:49":{"focus":["hope will happen"]},
"t9-50:50":{"focus":["Which department","hiring for"]},
"t9-50:51":{"focus":["Why","unsure"]},
"t9-50:52":{"focus":["suggest doing"]},
"t9-53:53":{"focus":["mainly about"]},
"t9-53:54":{"focus":["Why"]},
"t9-53:55":{"focus":["do next"]},
"t9-56:56":{"focus":["unique","cookbook recipes"]},
"t9-56:57":{"focus":["study at university"]},
"t9-56:58":{"focus":["appreciate about the recipes"]},
"t9-59:59":{"focus":["Which industry","work in"]},
"t9-59:60":{"focus":["men be doing"]},
"t9-59:61":{"focus":["do next"]},
"t9-62:62":{"focus":["problem"]},
"t9-62:63":{"focus":["Which day","change the special offer"]},
"t9-62:64":{"focus":["wants to confirm"]},
"t9-65:65":{"focus":["Where","gift shop"]},
"t9-65:66":{"focus":["How much","pay"]},
"t9-65:67":{"focus":["suggest doing"]},
"t9-68:68":{"focus":["Where","install a fence"]},
"t9-68:69":{"focus":["How","receive a discount"]},
"t9-68:70":{"focus":["Why","on Saturday"]},
"t10-32:32":{"focus":["planning to do","in June"]},
"t10-32:33":{"focus":["Where","work"]},
"t10-32:34":{"focus":["by the end of the year"]},
"t10-35:35":{"focus":["type of project","working on"]},
"t10-35:36":{"focus":["Why","avoiding the color red"]},
"t10-35:37":{"focus":["ask the man to do"]},
"t10-38:38":{"focus":["trying to do"]},
"t10-38:39":{"focus":["ask to see"]},
"t10-38:40":{"focus":["Why"]},
"t10-41:41":{"focus":["Where","work"]},
"t10-41:42":{"focus":["familiar with"]},
"t10-41:43":{"focus":["remind the woman about"]},
"t10-44:44":{"focus":["concerned about"]},
"t10-44:45":{"focus":["working on"]},
"t10-44:46":{"focus":["assistance with"]},
"t10-47:47":{"focus":["job"]},
"t10-47:48":{"focus":["How","getting to terminal A"]},
"t10-47:49":{"focus":["by the rental-car lot"]},
"t10-50:50":{"focus":["Where"]},
"t10-50:51":{"focus":["Why"]},
"t10-50:52":{"focus":["tomorrow"]},
"t10-53:53":{"focus":["product","calling about"]},
"t10-53:54":{"focus":["Why","go to a store"]},
"t10-53:55":{"focus":["Who","give a note to"]},
"t10-56:56":{"focus":["Where","work"]},
"t10-56:57":{"focus":["request"]},
"t10-56:58":{"focus":["do next"]},
"t10-59:59":{"focus":["Why","calling"]},
"t10-59:60":{"focus":["about his company"]},
"t10-59:61":{"focus":["provide"]},
"t10-62:62":{"focus":["Where","taking place"]},
"t10-62:63":{"focus":["Which prize","win"]},
"t10-62:64":{"focus":["How","notified"]},
"t10-65:65":{"focus":["Why","purchase flowers"]},
"t10-65:66":{"focus":["How much","flower arrangement"]},
"t10-65:67":{"focus":["additional items"]},
"t10-68:68":{"focus":["Who most likely"]},
"t10-68:69":{"focus":["Where","upcoming harvest","stored"]},
"t10-68:70":{"focus":["ask about"]},
});

Object.assign(testOneQuestionEmphasis, {
  't2-47:48': {actor:['man','woman'],focus:['tell']},
  't2-62:64': {actor:['woman','David'],focus:['say about']},
  't4-50:51': {actor:['woman','man'],focus:['recommend']},
  't4-62:64': {actor:['man','woman'],focus:['give']}
});
