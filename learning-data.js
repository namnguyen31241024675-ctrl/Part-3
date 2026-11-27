"use strict";
// Reuses sentence translations and bilingual keyword pairs already supplied in visual-story.
const synchronizedLearningData = {
  "t2-32": {
    "sentences": [
      "Các chuyến giao hàng hôm nay thế nào?",
      "Không tệ, ngoại trừ ở tòa nhà chung cư mới trên phố South.",
      "Tôi phải gọi điện cho họ để họ ra lấy đồ ăn.",
      "Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.",
      "Anh không phải người đầu tiên nói vậy đâu.",
      "Tuần trước, một khách hàng gọi điện phàn nàn rằng đồ ăn đã nguội lạnh khi họ tìm thấy.",
      "Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.",
      "Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động của chúng ta, bảo khách hàng ra gặp chúng ta ở cửa chính tòa nhà.",
      "Xem thử cách này có giúp không."
    ],
    "exercises": [
      [
        0,
        "Các chuyến giao hàng hôm nay thế nào?",
        "Các chuyến giao hàng",
        [],
        "deliveries"
      ],
      [
        1,
        "Không tệ, ngoại trừ ở tòa nhà chung cư mới trên phố South.",
        "Không",
        [],
        "Not"
      ],
      [
        1,
        "Không tệ, ngoại trừ ở tòa nhà chung cư mới trên phố South.",
        "tòa nhà",
        [],
        "building"
      ],
      [
        2,
        "Tôi phải gọi điện cho họ để họ ra lấy đồ ăn.",
        "gọi điện",
        [],
        "call"
      ],
      [
        2,
        "Tôi phải gọi điện cho họ để họ ra lấy đồ ăn.",
        "lấy",
        [],
        "pick up"
      ],
      [
        2,
        "Tôi phải gọi điện cho họ để họ ra lấy đồ ăn.",
        "đồ ăn",
        [],
        "food"
      ],
      [
        3,
        "Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.",
        "gọi",
        [],
        "call"
      ],
      [
        3,
        "Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.",
        "tòa nhà",
        [],
        "building"
      ],
      [
        3,
        "Ban đầu tôi thử gọi qua hệ thống liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng.",
        "hệ thống liên lạc nội bộ",
        [],
        "intercom"
      ],
      [
        4,
        "Anh không phải người đầu tiên nói vậy đâu.",
        "không",
        [],
        "not"
      ],
      [
        5,
        "Tuần trước, một khách hàng gọi điện phàn nàn rằng đồ ăn đã nguội lạnh khi họ tìm thấy.",
        "gọi điện",
        [],
        "called"
      ],
      [
        5,
        "Tuần trước, một khách hàng gọi điện phàn nàn rằng đồ ăn đã nguội lạnh khi họ tìm thấy.",
        "nguội",
        [],
        "cold"
      ],
      [
        5,
        "Tuần trước, một khách hàng gọi điện phàn nàn rằng đồ ăn đã nguội lạnh khi họ tìm thấy.",
        "tìm thấy",
        [],
        "found"
      ],
      [
        6,
        "Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.",
        "không",
        [],
        "can't"
      ],
      [
        6,
        "Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.",
        "giao hàng",
        [],
        "deliveries"
      ],
      [
        6,
        "Có lẽ chúng ta không thể giao hàng ở đó cho đến khi chủ nhà sửa hệ thống liên lạc nội bộ.",
        "hệ thống liên lạc nội bộ",
        [],
        "intercom system"
      ],
      [
        7,
        "Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động của chúng ta, bảo khách hàng ra gặp chúng ta ở cửa chính tòa nhà.",
        "cập nhật",
        [],
        "update"
      ],
      [
        7,
        "Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động của chúng ta, bảo khách hàng ra gặp chúng ta ở cửa chính tòa nhà.",
        "ứng dụng di động",
        [],
        "mobile app"
      ],
      [
        8,
        "Xem thử cách này có giúp không.",
        "Xem",
        [],
        "see"
      ],
      [
        8,
        "Xem thử cách này có giúp không.",
        "giúp",
        [],
        "helps"
      ]
    ]
  },
  "t2-35": {
    "sentences": [
      "Chúng ta đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lập kế hoạch cho chuỗi Theater in the Park cho mùa hè.",
      "Chúng ta có rất nhiều quyết định phải đưa ra về các buổi biểu diễn, ngày tháng, và người biểu diễn.",
      "Đúng vậy. Tôi sẽ sắp xếp một cuộc họp cho tháng này.",
      "Bạn biết đấy, tôi có một ý tưởng.",
      "Tại sao chúng ta không mời cư dân cộng đồng tình nguyện giúp đỡ xây dựng bối cảnh, sơn phết, và thiết lập sân khấu?",
      "Chúng ta có thể, nhưng tôi không biết liệu chúng ta có thể sử dụng tình nguyện viên năm nay không.",
      "Chúng ta sẽ cần sự phê duyệt để bắt đầu loại chương trình đó.",
      "Nó sẽ mất thời gian. Hãy kiểm tra điều đó cho năm sau."
    ],
    "exercises": [
      [
        0,
        "Chúng ta đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lập kế hoạch cho chuỗi Theater in the Park cho mùa hè.",
        "gần",
        [],
        "close"
      ],
      [
        0,
        "Chúng ta đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lập kế hoạch cho chuỗi Theater in the Park cho mùa hè.",
        "cần",
        [],
        "need to"
      ],
      [
        0,
        "Chúng ta đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lập kế hoạch cho chuỗi Theater in the Park cho mùa hè.",
        "bắt đầu",
        [],
        "begin"
      ],
      [
        0,
        "Chúng ta đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lập kế hoạch cho chuỗi Theater in the Park cho mùa hè.",
        "kế hoạch",
        [],
        "planning"
      ],
      [
        1,
        "Chúng ta có rất nhiều quyết định phải đưa ra về các buổi biểu diễn, ngày tháng, và người biểu diễn.",
        "quyết định",
        [],
        "decisions"
      ],
      [
        1,
        "Chúng ta có rất nhiều quyết định phải đưa ra về các buổi biểu diễn, ngày tháng, và người biểu diễn.",
        "buổi biểu diễn",
        [],
        "shows"
      ],
      [
        1,
        "Chúng ta có rất nhiều quyết định phải đưa ra về các buổi biểu diễn, ngày tháng, và người biểu diễn.",
        "ngày tháng",
        [],
        "dates"
      ],
      [
        1,
        "Chúng ta có rất nhiều quyết định phải đưa ra về các buổi biểu diễn, ngày tháng, và người biểu diễn.",
        "người biểu diễn",
        [],
        "performers"
      ],
      [
        2,
        "Đúng vậy. Tôi sẽ sắp xếp một cuộc họp cho tháng này.",
        "sắp xếp",
        [],
        "set up"
      ],
      [
        2,
        "Đúng vậy. Tôi sẽ sắp xếp một cuộc họp cho tháng này.",
        "cuộc họp",
        [],
        "meeting"
      ],
      [
        3,
        "Bạn biết đấy, tôi có một ý tưởng.",
        "biết",
        [],
        "know"
      ],
      [
        3,
        "Bạn biết đấy, tôi có một ý tưởng.",
        "ý tưởng",
        [],
        "idea"
      ],
      [
        4,
        "Tại sao chúng ta không mời cư dân cộng đồng tình nguyện giúp đỡ xây dựng bối cảnh, sơn phết, và thiết lập sân khấu?",
        "không",
        [],
        "don't"
      ],
      [
        4,
        "Tại sao chúng ta không mời cư dân cộng đồng tình nguyện giúp đỡ xây dựng bối cảnh, sơn phết, và thiết lập sân khấu?",
        "cư dân cộng đồng",
        [],
        "community residents"
      ],
      [
        4,
        "Tại sao chúng ta không mời cư dân cộng đồng tình nguyện giúp đỡ xây dựng bối cảnh, sơn phết, và thiết lập sân khấu?",
        "xây dựng",
        [],
        "building"
      ],
      [
        4,
        "Tại sao chúng ta không mời cư dân cộng đồng tình nguyện giúp đỡ xây dựng bối cảnh, sơn phết, và thiết lập sân khấu?",
        "thiết lập",
        [],
        "setting up the stage"
      ],
      [
        5,
        "Chúng ta có thể, nhưng tôi không biết liệu chúng ta có thể sử dụng tình nguyện viên năm nay không.",
        "sử dụng",
        [],
        "use"
      ],
      [
        6,
        "Chúng ta sẽ cần sự phê duyệt để bắt đầu loại chương trình đó.",
        "sự phê duyệt",
        [],
        "approval"
      ],
      [
        6,
        "Chúng ta sẽ cần sự phê duyệt để bắt đầu loại chương trình đó.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        7,
        "Nó sẽ mất thời gian. Hãy kiểm tra điều đó cho năm sau.",
        "kiểm tra",
        [],
        "check"
      ]
    ]
  },
  "t2-38": {
    "sentences": [
      "Trở lại với podcast của chúng ta cùng khách mời đặc biệt Kimberly Stuart, người hiện đang tư vấn cho thành phố chúng ta về các dự án phát triển kinh doanh.",
      "Trước giờ nghỉ, chúng ta đã hứa sẽ đề cập đến sự suy giảm mua sắm ở khu trung tâm.",
      "Vâng—và tình hình tồi tệ nhất ở các cửa hàng bán các mặt hàng độc đáo như đồ cổ và trang sức.",
      "Những mặt hàng này luôn được mua tại các cửa hàng truyền thống nhưng giờ chủ yếu được mua trực tuyến.",
      "Vậy, những cửa hàng đó có tương lai không?",
      "Tôi nghĩ là có, đặc biệt nếu chúng ta chú trọng tổ chức các hoạt động cộng đồng trực tiếp ở khu trung tâm, chẳng hạn như hòa nhạc hoặc lễ hội.",
      "Khi mọi người đi dạo quanh thị trấn, họ có khả năng ghé thăm các cửa hàng—và mua hàng."
    ],
    "exercises": [
      [
        0,
        "Trở lại với podcast của chúng ta cùng khách mời đặc biệt Kimberly Stuart, người hiện đang tư vấn cho thành phố chúng ta về các dự án phát triển kinh doanh.",
        "các dự án phát triển kinh doanh",
        [],
        "business development projects"
      ],
      [
        1,
        "Trước giờ nghỉ, chúng ta đã hứa sẽ đề cập đến sự suy giảm mua sắm ở khu trung tâm.",
        "giờ nghỉ",
        [],
        "break"
      ],
      [
        1,
        "Trước giờ nghỉ, chúng ta đã hứa sẽ đề cập đến sự suy giảm mua sắm ở khu trung tâm.",
        "hứa",
        [],
        "promised"
      ],
      [
        1,
        "Trước giờ nghỉ, chúng ta đã hứa sẽ đề cập đến sự suy giảm mua sắm ở khu trung tâm.",
        "suy giảm",
        [],
        "decline"
      ],
      [
        2,
        "Vâng—và tình hình tồi tệ nhất ở các cửa hàng bán các mặt hàng độc đáo như đồ cổ và trang sức.",
        "cửa hàng",
        [],
        "stores"
      ],
      [
        2,
        "Vâng—và tình hình tồi tệ nhất ở các cửa hàng bán các mặt hàng độc đáo như đồ cổ và trang sức.",
        "bán",
        [],
        "sell"
      ],
      [
        2,
        "Vâng—và tình hình tồi tệ nhất ở các cửa hàng bán các mặt hàng độc đáo như đồ cổ và trang sức.",
        "đồ cổ",
        [],
        "antiques"
      ],
      [
        3,
        "Những mặt hàng này luôn được mua tại các cửa hàng truyền thống nhưng giờ chủ yếu được mua trực tuyến.",
        "trực tuyến",
        [],
        "online"
      ],
      [
        4,
        "Vậy, những cửa hàng đó có tương lai không?",
        "cửa hàng",
        [],
        "stores"
      ],
      [
        5,
        "Tôi nghĩ là có, đặc biệt nếu chúng ta chú trọng tổ chức các hoạt động cộng đồng trực tiếp ở khu trung tâm, chẳng hạn như hòa nhạc hoặc lễ hội.",
        "tổ chức",
        [],
        "organizing"
      ],
      [
        5,
        "Tôi nghĩ là có, đặc biệt nếu chúng ta chú trọng tổ chức các hoạt động cộng đồng trực tiếp ở khu trung tâm, chẳng hạn như hòa nhạc hoặc lễ hội.",
        "chẳng hạn như",
        [],
        "such as"
      ],
      [
        6,
        "Khi mọi người đi dạo quanh thị trấn, họ có khả năng ghé thăm các cửa hàng—và mua hàng.",
        "cửa hàng",
        [],
        "stores"
      ],
      [
        6,
        "Khi mọi người đi dạo quanh thị trấn, họ có khả năng ghé thăm các cửa hàng—và mua hàng.",
        "mua",
        [],
        "purchases"
      ]
    ]
  },
  "t2-41": {
    "sentences": [
      "Công ty chúng ta đã chứng kiến sự tăng vọt lớn về doanh số kể từ khi khởi động chương trình hoàn tiền cho khách hàng.",
      "Với hoàn tiền, khách hàng nhận lại tiền.",
      "Và họ đang kể cho bạn bè, tăng doanh số của chúng ta.",
      "Vâng. Chương trình hoàn tiền rất tốt cho công ty chúng ta vì giờ đây nhiều chủ nhà hơn có động lực lắp đặt tấm pin mặt trời trên tài sản của họ, vì họ được thưởng cho điện mà tấm pin mặt trời sản xuất.",
      "Nhưng các kỹ thuật viên của chúng ta không theo kịp nhu cầu cao.",
      "Đúng vậy. Tôi đang lên kế hoạch thuê thêm kỹ thuật viên.",
      "Tôi đã nhận được một số sơ yếu lý lịch từ các ứng viên tiềm năng."
    ],
    "exercises": [
      [
        0,
        "Công ty chúng ta đã chứng kiến sự tăng vọt lớn về doanh số kể từ khi khởi động chương trình hoàn tiền cho khách hàng.",
        "doanh số",
        [],
        "sales"
      ],
      [
        0,
        "Công ty chúng ta đã chứng kiến sự tăng vọt lớn về doanh số kể từ khi khởi động chương trình hoàn tiền cho khách hàng.",
        "chương trình hoàn tiền",
        [],
        "rebate program"
      ],
      [
        1,
        "Với hoàn tiền, khách hàng nhận lại tiền.",
        "khách hàng",
        [],
        "customers"
      ],
      [
        1,
        "Với hoàn tiền, khách hàng nhận lại tiền.",
        "nhận",
        [],
        "get"
      ],
      [
        2,
        "Và họ đang kể cho bạn bè, tăng doanh số của chúng ta.",
        "tăng",
        [],
        "increasing"
      ],
      [
        2,
        "Và họ đang kể cho bạn bè, tăng doanh số của chúng ta.",
        "doanh số",
        [],
        "sales"
      ],
      [
        3,
        "Vâng. Chương trình hoàn tiền rất tốt cho công ty chúng ta vì giờ đây nhiều chủ nhà hơn có động lực lắp đặt tấm pin mặt trời trên tài sản của họ, vì họ được thưởng cho điện mà tấm pin mặt trời sản xuất.",
        "lắp đặt",
        [],
        "install"
      ],
      [
        4,
        "Nhưng các kỹ thuật viên của chúng ta không theo kịp nhu cầu cao.",
        "không",
        [],
        "can't"
      ],
      [
        4,
        "Nhưng các kỹ thuật viên của chúng ta không theo kịp nhu cầu cao.",
        "nhu cầu cao",
        [],
        "high demand"
      ],
      [
        5,
        "Đúng vậy. Tôi đang lên kế hoạch thuê thêm kỹ thuật viên.",
        "lên kế hoạch",
        [],
        "planning"
      ],
      [
        5,
        "Đúng vậy. Tôi đang lên kế hoạch thuê thêm kỹ thuật viên.",
        "thuê",
        [],
        "hire"
      ],
      [
        5,
        "Đúng vậy. Tôi đang lên kế hoạch thuê thêm kỹ thuật viên.",
        "kỹ thuật viên",
        [],
        "technicians"
      ],
      [
        6,
        "Tôi đã nhận được một số sơ yếu lý lịch từ các ứng viên tiềm năng.",
        "nhận được",
        [],
        "received"
      ]
    ]
  },
  "t2-44": {
    "sentences": [
      "Fernanda, tôi vừa xem lịch công ty, và tôi nhận thấy hội chợ thương mại điện tử quốc gia sắp diễn ra.",
      "Ồ, đúng rồi! Đó sẽ là cơ hội tuyệt vời để chúng ta trưng bày sản phẩm mà chúng ta đang phát triển—máy hút bụi robot mới của chúng ta.",
      "Chúng ta cần quyết định ai chúng ta muốn gửi đi đại diện cho công ty tại hội chợ.",
      "Ừm, tôi biết chính xác người phù hợp—Kavi.",
      "Kavi làm tốt công việc giải thích rõ ràng các khái niệm kỹ thuật cao cấp theo cách mà mọi người đều có thể hiểu."
    ],
    "exercises": [
      [
        0,
        "Fernanda, tôi vừa xem lịch công ty, và tôi nhận thấy hội chợ thương mại điện tử quốc gia sắp diễn ra.",
        "lịch",
        [],
        "calendar"
      ],
      [
        0,
        "Fernanda, tôi vừa xem lịch công ty, và tôi nhận thấy hội chợ thương mại điện tử quốc gia sắp diễn ra.",
        "nhận thấy",
        [],
        "noticed"
      ],
      [
        0,
        "Fernanda, tôi vừa xem lịch công ty, và tôi nhận thấy hội chợ thương mại điện tử quốc gia sắp diễn ra.",
        "hội chợ thương mại",
        [],
        "trade show"
      ],
      [
        1,
        "Ồ, đúng rồi! Đó sẽ là cơ hội tuyệt vời để chúng ta trưng bày sản phẩm mà chúng ta đang phát triển—máy hút bụi robot mới của chúng ta.",
        "sản phẩm",
        [],
        "product"
      ],
      [
        1,
        "Ồ, đúng rồi! Đó sẽ là cơ hội tuyệt vời để chúng ta trưng bày sản phẩm mà chúng ta đang phát triển—máy hút bụi robot mới của chúng ta.",
        "máy hút bụi robot",
        [],
        "robotic vacuum cleaner"
      ],
      [
        2,
        "Chúng ta cần quyết định ai chúng ta muốn gửi đi đại diện cho công ty tại hội chợ.",
        "cần",
        [],
        "need to"
      ],
      [
        2,
        "Chúng ta cần quyết định ai chúng ta muốn gửi đi đại diện cho công ty tại hội chợ.",
        "gửi",
        [],
        "send"
      ],
      [
        3,
        "Ừm, tôi biết chính xác người phù hợp—Kavi.",
        "biết",
        [],
        "know"
      ],
      [
        3,
        "Ừm, tôi biết chính xác người phù hợp—Kavi.",
        "người",
        [],
        "person"
      ],
      [
        4,
        "Kavi làm tốt công việc giải thích rõ ràng các khái niệm kỹ thuật cao cấp theo cách mà mọi người đều có thể hiểu.",
        "giải thích",
        [],
        "explaining"
      ],
      [
        4,
        "Kavi làm tốt công việc giải thích rõ ràng các khái niệm kỹ thuật cao cấp theo cách mà mọi người đều có thể hiểu.",
        "khái niệm kỹ thuật",
        [],
        "technical concepts"
      ],
      [
        4,
        "Kavi làm tốt công việc giải thích rõ ràng các khái niệm kỹ thuật cao cấp theo cách mà mọi người đều có thể hiểu.",
        "hiểu",
        [],
        "understand"
      ]
    ]
  },
  "t2-47": {
    "sentences": [
      "Bác sĩ Fuentes, xin lỗi vì làm gián đoạn.",
      "Bà có một phút không?",
      "Có. Bệnh nhân làm sạch răng lúc 9 giờ của tôi vừa hủy.",
      "Tôi biết bà đang tìm lễ tân mới.",
      "Tôi muốn giới thiệu ai đó cho vị trí đó.",
      "Ồ. Bà đang nghĩ đến ai?",
      "Ừm, một đồng nghiệp cũ của tôi vừa chuyển về thị trấn.",
      "Tên cô ấy là Kelly Graham, và cô ấy có vài năm kinh nghiệm.",
      "OK. Ông có thể bảo Kelly gửi sơ yếu lý lịch cho tôi không? Tôi sẽ vui lòng xem qua."
    ],
    "exercises": [
      [
        0,
        "Bác sĩ Fuentes, xin lỗi vì làm gián đoạn.",
        "làm gián đoạn",
        [],
        "interrupt"
      ],
      [
        2,
        "Có. Bệnh nhân làm sạch răng lúc 9 giờ của tôi vừa hủy.",
        "làm sạch răng",
        [],
        "dental cleaning"
      ],
      [
        2,
        "Có. Bệnh nhân làm sạch răng lúc 9 giờ của tôi vừa hủy.",
        "Bệnh nhân",
        [],
        "patient"
      ],
      [
        2,
        "Có. Bệnh nhân làm sạch răng lúc 9 giờ của tôi vừa hủy.",
        "hủy",
        [],
        "canceled"
      ],
      [
        3,
        "Tôi biết bà đang tìm lễ tân mới.",
        "tìm",
        [],
        "looking for"
      ],
      [
        4,
        "Tôi muốn giới thiệu ai đó cho vị trí đó.",
        "giới thiệu",
        [],
        "recommend"
      ],
      [
        4,
        "Tôi muốn giới thiệu ai đó cho vị trí đó.",
        "vị trí",
        [],
        "position"
      ],
      [
        5,
        "Ồ. Bà đang nghĩ đến ai?",
        "nghĩ đến",
        [],
        "have in mind"
      ],
      [
        6,
        "Ừm, một đồng nghiệp cũ của tôi vừa chuyển về thị trấn.",
        "đồng nghiệp",
        [],
        "former colleague"
      ],
      [
        6,
        "Ừm, một đồng nghiệp cũ của tôi vừa chuyển về thị trấn.",
        "chuyển",
        [],
        "moved"
      ],
      [
        7,
        "Tên cô ấy là Kelly Graham, và cô ấy có vài năm kinh nghiệm.",
        "kinh nghiệm",
        [],
        "experience"
      ],
      [
        8,
        "OK. Ông có thể bảo Kelly gửi sơ yếu lý lịch cho tôi không? Tôi sẽ vui lòng xem qua.",
        "gửi",
        [],
        "send"
      ]
    ]
  },
  "t2-50": {
    "sentences": [
      "Cô Gao? Tôi là Hector, và đây là đồng nghiệp của tôi Sergey.",
      "Cảm ơn vì đã gặp chúng tôi.",
      "Rất vui được gặp cả hai.",
      "Tôi có thể giúp gì?",
      "Chúng tôi đang làm một số video đào tạo cho khách hàng của chúng tôi, FiveStar Industries.",
      "Chúng tôi tìm thấy quảng cáo của cô trong một ấn phẩm thương mại.",
      "Chúng tôi cần ai đó chọn địa điểm quay phim phù hợp tại các nhà máy của FiveStar, và nó nói cô có nhiều kinh nghiệm tìm kiếm địa điểm công nghiệp.",
      "Chắc chắn. Tôi muốn bắt đầu bằng việc tham quan các nhà máy của họ.",
      "Các ông có thể sắp xếp thời gian cho tôi làm điều đó tuần tới không?",
      "Có, tôi sẽ gọi họ hôm nay để sắp xếp."
    ],
    "exercises": [
      [
        0,
        "Cô Gao? Tôi là Hector, và đây là đồng nghiệp của tôi Sergey.",
        "đồng nghiệp",
        [],
        "colleague"
      ],
      [
        1,
        "Cảm ơn vì đã gặp chúng tôi.",
        "gặp",
        [],
        "meeting"
      ],
      [
        2,
        "Rất vui được gặp cả hai.",
        "gặp",
        [],
        "meet"
      ],
      [
        3,
        "Tôi có thể giúp gì?",
        "giúp",
        [],
        "help"
      ],
      [
        4,
        "Chúng tôi đang làm một số video đào tạo cho khách hàng của chúng tôi, FiveStar Industries.",
        "video đào tạo",
        [],
        "training videos"
      ],
      [
        4,
        "Chúng tôi đang làm một số video đào tạo cho khách hàng của chúng tôi, FiveStar Industries.",
        "khách hàng",
        [],
        "client"
      ],
      [
        5,
        "Chúng tôi tìm thấy quảng cáo của cô trong một ấn phẩm thương mại.",
        "tìm thấy",
        [],
        "found"
      ],
      [
        6,
        "Chúng tôi cần ai đó chọn địa điểm quay phim phù hợp tại các nhà máy của FiveStar, và nó nói cô có nhiều kinh nghiệm tìm kiếm địa điểm công nghiệp.",
        "chọn",
        [],
        "choose"
      ],
      [
        6,
        "Chúng tôi cần ai đó chọn địa điểm quay phim phù hợp tại các nhà máy của FiveStar, và nó nói cô có nhiều kinh nghiệm tìm kiếm địa điểm công nghiệp.",
        "địa điểm quay phim",
        [],
        "filming sites"
      ],
      [
        6,
        "Chúng tôi cần ai đó chọn địa điểm quay phim phù hợp tại các nhà máy của FiveStar, và nó nói cô có nhiều kinh nghiệm tìm kiếm địa điểm công nghiệp.",
        "các nhà máy",
        [],
        "factories"
      ],
      [
        7,
        "Chắc chắn. Tôi muốn bắt đầu bằng việc tham quan các nhà máy của họ.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        7,
        "Chắc chắn. Tôi muốn bắt đầu bằng việc tham quan các nhà máy của họ.",
        "các nhà máy",
        [],
        "factories"
      ],
      [
        8,
        "Các ông có thể sắp xếp thời gian cho tôi làm điều đó tuần tới không?",
        "sắp xếp thời gian",
        [],
        "schedule"
      ],
      [
        9,
        "Có, tôi sẽ gọi họ hôm nay để sắp xếp.",
        "gọi",
        [],
        "call"
      ],
      [
        9,
        "Có, tôi sẽ gọi họ hôm nay để sắp xếp.",
        "sắp xếp",
        [],
        "arrange"
      ]
    ]
  },
  "t2-53": {
    "sentences": [
      "Công ty kỹ thuật của chúng ta được yêu cầu cắt giảm ngân sách du lịch doanh nghiệp 20%, nhưng sẽ không dễ dàng.",
      "Các tư vấn viên kỹ thuật phải du lịch để gặp khách hàng.",
      "Đúng, và họ thường du lịch đột xuất.",
      "Sắp xếp chuyến bay vào phút chót rất đắt, đặc biệt là chuyến bay thẳng.",
      "Sẽ rẻ hơn nếu họ bay chuyển tiếp.",
      "Vâng, nhưng điều đó có thể mất nhiều thời gian.",
      "Đúng. Có lẽ chúng ta có thể bù đắp chi phí chuyến bay bằng cách tiết kiệm khách sạn.",
      "Hãy xem xét điều đó."
    ],
    "exercises": [
      [
        0,
        "Công ty kỹ thuật của chúng ta được yêu cầu cắt giảm ngân sách du lịch doanh nghiệp 20%, nhưng sẽ không dễ dàng.",
        "yêu cầu",
        [],
        "asked"
      ],
      [
        0,
        "Công ty kỹ thuật của chúng ta được yêu cầu cắt giảm ngân sách du lịch doanh nghiệp 20%, nhưng sẽ không dễ dàng.",
        "cắt",
        [],
        "cut"
      ],
      [
        0,
        "Công ty kỹ thuật của chúng ta được yêu cầu cắt giảm ngân sách du lịch doanh nghiệp 20%, nhưng sẽ không dễ dàng.",
        "không",
        [],
        "won't"
      ],
      [
        1,
        "Các tư vấn viên kỹ thuật phải du lịch để gặp khách hàng.",
        "phải",
        [],
        "have to"
      ],
      [
        1,
        "Các tư vấn viên kỹ thuật phải du lịch để gặp khách hàng.",
        "du lịch",
        [],
        "travel"
      ],
      [
        1,
        "Các tư vấn viên kỹ thuật phải du lịch để gặp khách hàng.",
        "gặp",
        [],
        "meet"
      ],
      [
        1,
        "Các tư vấn viên kỹ thuật phải du lịch để gặp khách hàng.",
        "khách hàng",
        [],
        "clients"
      ],
      [
        2,
        "Đúng, và họ thường du lịch đột xuất.",
        "du lịch",
        [],
        "travel"
      ],
      [
        3,
        "Sắp xếp chuyến bay vào phút chót rất đắt, đặc biệt là chuyến bay thẳng.",
        "chuyến bay thẳng",
        [],
        "nonstop flights"
      ],
      [
        4,
        "Sẽ rẻ hơn nếu họ bay chuyển tiếp.",
        "rẻ hơn",
        [],
        "cheaper"
      ],
      [
        4,
        "Sẽ rẻ hơn nếu họ bay chuyển tiếp.",
        "bay chuyển tiếp",
        [],
        "connecting flights"
      ],
      [
        5,
        "Vâng, nhưng điều đó có thể mất nhiều thời gian.",
        "mất",
        [],
        "take"
      ],
      [
        6,
        "Đúng. Có lẽ chúng ta có thể bù đắp chi phí chuyến bay bằng cách tiết kiệm khách sạn.",
        "chi phí",
        [],
        "cost"
      ],
      [
        6,
        "Đúng. Có lẽ chúng ta có thể bù đắp chi phí chuyến bay bằng cách tiết kiệm khách sạn.",
        "chuyến bay",
        [],
        "flights"
      ],
      [
        6,
        "Đúng. Có lẽ chúng ta có thể bù đắp chi phí chuyến bay bằng cách tiết kiệm khách sạn.",
        "khách sạn",
        [],
        "hotels"
      ],
      [
        7,
        "Hãy xem xét điều đó.",
        "xem xét",
        [],
        "look into"
      ]
    ]
  },
  "t2-56": {
    "sentences": [
      "Cảm ơn vì đã gặp chúng tôi, cô Azuma.",
      "Đây là Scott Ajibade, một trong những quản lý dự án cấp cao của chúng tôi.",
      "Tôi ngưỡng mộ công việc của cô, cô Azuma.",
      "Cảm ơn. Tôi ngạc nhiên vì lời mời của các ông.",
      "Tôi thường thiết kế trang sức, nhưng công ty của các ông nổi tiếng với việc làm máy tính và điện thoại di động.",
      "Đội của Scott hiện đang làm việc trên đồng hồ thông minh.",
      "Nhưng có nhiều cạnh tranh, như cô biết.",
      "Chúng tôi hy vọng cô có thể tạo ra thiết kế mới mẻ giúp sản phẩm của chúng tôi nổi bật.",
      "Các ông đã có ý tưởng về đồng hồ nên trông như thế nào chưa, hay chúng ta bắt đầu từ con số không?",
      "Tôi có một số bản phác thảo sơ bộ chúng ta có thể xem, nhưng không cái nào dường như khá đúng."
    ],
    "exercises": [
      [
        0,
        "Cảm ơn vì đã gặp chúng tôi, cô Azuma.",
        "gặp",
        [],
        "meeting"
      ],
      [
        1,
        "Đây là Scott Ajibade, một trong những quản lý dự án cấp cao của chúng tôi.",
        "quản lý dự án",
        [],
        "project managers"
      ],
      [
        2,
        "Tôi ngưỡng mộ công việc của cô, cô Azuma.",
        "công việc",
        [],
        "work"
      ],
      [
        3,
        "Cảm ơn. Tôi ngạc nhiên vì lời mời của các ông.",
        "ngạc nhiên",
        [],
        "surprised"
      ],
      [
        3,
        "Cảm ơn. Tôi ngạc nhiên vì lời mời của các ông.",
        "lời mời",
        [],
        "invitation"
      ],
      [
        4,
        "Tôi thường thiết kế trang sức, nhưng công ty của các ông nổi tiếng với việc làm máy tính và điện thoại di động.",
        "thiết kế",
        [],
        "design"
      ],
      [
        4,
        "Tôi thường thiết kế trang sức, nhưng công ty của các ông nổi tiếng với việc làm máy tính và điện thoại di động.",
        "trang sức",
        [],
        "jewelry"
      ],
      [
        4,
        "Tôi thường thiết kế trang sức, nhưng công ty của các ông nổi tiếng với việc làm máy tính và điện thoại di động.",
        "điện thoại",
        [],
        "mobile phones"
      ],
      [
        5,
        "Đội của Scott hiện đang làm việc trên đồng hồ thông minh.",
        "làm việc",
        [],
        "working"
      ],
      [
        5,
        "Đội của Scott hiện đang làm việc trên đồng hồ thông minh.",
        "đồng hồ thông minh",
        [],
        "smartwatch"
      ],
      [
        6,
        "Nhưng có nhiều cạnh tranh, như cô biết.",
        "cạnh tranh",
        [],
        "competition"
      ],
      [
        6,
        "Nhưng có nhiều cạnh tranh, như cô biết.",
        "biết",
        [],
        "know"
      ],
      [
        7,
        "Chúng tôi hy vọng cô có thể tạo ra thiết kế mới mẻ giúp sản phẩm của chúng tôi nổi bật.",
        "tạo",
        [],
        "create"
      ],
      [
        7,
        "Chúng tôi hy vọng cô có thể tạo ra thiết kế mới mẻ giúp sản phẩm của chúng tôi nổi bật.",
        "thiết kế",
        [],
        "design"
      ],
      [
        8,
        "Các ông đã có ý tưởng về đồng hồ nên trông như thế nào chưa, hay chúng ta bắt đầu từ con số không?",
        "ý tưởng",
        [],
        "idea"
      ],
      [
        8,
        "Các ông đã có ý tưởng về đồng hồ nên trông như thế nào chưa, hay chúng ta bắt đầu từ con số không?",
        "bắt đầu",
        [],
        "starting"
      ],
      [
        9,
        "Tôi có một số bản phác thảo sơ bộ chúng ta có thể xem, nhưng không cái nào dường như khá đúng.",
        "bản phác thảo",
        [],
        "preliminary sketches"
      ],
      [
        9,
        "Tôi có một số bản phác thảo sơ bộ chúng ta có thể xem, nhưng không cái nào dường như khá đúng.",
        "xem",
        [],
        "look"
      ]
    ]
  },
  "t2-59": {
    "sentences": [
      "Xin chào. Tôi muốn mua thảm mới.",
      "Nó dành cho phòng chờ tại tiệm làm tóc của tôi.",
      "Chúng tôi có nhiều kiểu khác nhau.",
      "Cô đang tìm cái gì khác biệt?",
      "Ừm, chúng tôi có nhiều khách hàng đi qua, và thảm hiện tại của chúng tôi có màu sáng.",
      "Dù màu gì, tất cả thảm của chúng tôi đều bền và có thể chịu lượng người đi lại cao.",
      "Đối với doanh nghiệp như của cô, tôi khuyên nên đặt thảm bảo vệ gần cửa.",
      "Đó là ý hay.",
      "Ngoài ra, tôi cung cấp dịch vụ vệ sinh miễn phí trong một năm cho tất cả các mua hàng."
    ],
    "exercises": [
      [
        0,
        "Xin chào. Tôi muốn mua thảm mới.",
        "mua",
        [],
        "purchase"
      ],
      [
        1,
        "Nó dành cho phòng chờ tại tiệm làm tóc của tôi.",
        "chờ",
        [],
        "waiting"
      ],
      [
        1,
        "Nó dành cho phòng chờ tại tiệm làm tóc của tôi.",
        "phòng",
        [],
        "room"
      ],
      [
        2,
        "Chúng tôi có nhiều kiểu khác nhau.",
        "kiểu",
        [],
        "styles"
      ],
      [
        3,
        "Cô đang tìm cái gì khác biệt?",
        "tìm",
        [],
        "looking for"
      ],
      [
        4,
        "Ừm, chúng tôi có nhiều khách hàng đi qua, và thảm hiện tại của chúng tôi có màu sáng.",
        "màu sáng",
        [],
        "light color"
      ],
      [
        5,
        "Dù màu gì, tất cả thảm của chúng tôi đều bền và có thể chịu lượng người đi lại cao.",
        "thảm",
        [],
        "carpets"
      ],
      [
        5,
        "Dù màu gì, tất cả thảm của chúng tôi đều bền và có thể chịu lượng người đi lại cao.",
        "người đi lại",
        [],
        "foot traffic"
      ],
      [
        6,
        "Đối với doanh nghiệp như của cô, tôi khuyên nên đặt thảm bảo vệ gần cửa.",
        "doanh nghiệp",
        [],
        "businesses"
      ],
      [
        6,
        "Đối với doanh nghiệp như của cô, tôi khuyên nên đặt thảm bảo vệ gần cửa.",
        "khuyên",
        [],
        "recommend"
      ],
      [
        6,
        "Đối với doanh nghiệp như của cô, tôi khuyên nên đặt thảm bảo vệ gần cửa.",
        "thảm bảo vệ",
        [],
        "protective mat"
      ],
      [
        7,
        "Đó là ý hay.",
        "ý hay",
        [],
        "idea"
      ],
      [
        8,
        "Ngoài ra, tôi cung cấp dịch vụ vệ sinh miễn phí trong một năm cho tất cả các mua hàng.",
        "cung cấp",
        [],
        "offer"
      ],
      [
        8,
        "Ngoài ra, tôi cung cấp dịch vụ vệ sinh miễn phí trong một năm cho tất cả các mua hàng.",
        "miễn phí",
        [],
        "free"
      ],
      [
        8,
        "Ngoài ra, tôi cung cấp dịch vụ vệ sinh miễn phí trong một năm cho tất cả các mua hàng.",
        "dịch vụ vệ sinh",
        [],
        "cleaning services"
      ],
      [
        8,
        "Ngoài ra, tôi cung cấp dịch vụ vệ sinh miễn phí trong một năm cho tất cả các mua hàng.",
        "mua",
        [],
        "purchases"
      ]
    ]
  },
  "t2-62": {
    "sentences": [
      "Tôi thực sự cần nghỉ ngơi uống cà phê.",
      "Cuộc họp sáng nay với khách hàng thật sự khó khăn.",
      "Các anh thảo luận gì vậy?",
      "Lịch trình dự án. Họ yêu cầu chúng tôi cung cấp thiết kế mẫu ba tuần sớm hơn kế hoạch ban đầu.",
      "Ừm. Vậy hôm nay tôi mời.",
      "Anh muốn loại nào?",
      "Thật tốt quá! Tôi sẽ lấy White Cloud Coffee.",
      "Tôi thích có chút sữa trong cà phê.",
      "Lựa chọn tốt. Vậy, tôi có tin tức để chia sẻ với anh.",
      "Anh có nghe về David không?",
      "Không, chuyện gì vậy?",
      "Có vẻ như anh ấy đang lên kế hoạch nghỉ hưu tháng tới."
    ],
    "exercises": [
      [
        0,
        "Tôi thực sự cần nghỉ ngơi uống cà phê.",
        "nghỉ ngơi uống cà phê",
        [],
        "coffee break"
      ],
      [
        1,
        "Cuộc họp sáng nay với khách hàng thật sự khó khăn.",
        "Cuộc họp",
        [],
        "meeting"
      ],
      [
        1,
        "Cuộc họp sáng nay với khách hàng thật sự khó khăn.",
        "khách hàng",
        [],
        "client"
      ],
      [
        2,
        "Các anh thảo luận gì vậy?",
        "thảo luận",
        [],
        "discussing"
      ],
      [
        3,
        "Lịch trình dự án. Họ yêu cầu chúng tôi cung cấp thiết kế mẫu ba tuần sớm hơn kế hoạch ban đầu.",
        "Lịch trình",
        [],
        "schedule"
      ],
      [
        3,
        "Lịch trình dự án. Họ yêu cầu chúng tôi cung cấp thiết kế mẫu ba tuần sớm hơn kế hoạch ban đầu.",
        "yêu cầu",
        [],
        "asked"
      ],
      [
        4,
        "Ừm. Vậy hôm nay tôi mời.",
        "mời",
        [],
        "treat"
      ],
      [
        5,
        "Anh muốn loại nào?",
        "muốn",
        [],
        "like"
      ],
      [
        7,
        "Tôi thích có chút sữa trong cà phê.",
        "thích",
        [],
        "like"
      ],
      [
        7,
        "Tôi thích có chút sữa trong cà phê.",
        "sữa",
        [],
        "milk"
      ],
      [
        8,
        "Lựa chọn tốt. Vậy, tôi có tin tức để chia sẻ với anh.",
        "tin tức",
        [],
        "news"
      ],
      [
        8,
        "Lựa chọn tốt. Vậy, tôi có tin tức để chia sẻ với anh.",
        "chia sẻ",
        [],
        "share"
      ],
      [
        11,
        "Có vẻ như anh ấy đang lên kế hoạch nghỉ hưu tháng tới.",
        "lên kế hoạch",
        [],
        "planning"
      ],
      [
        11,
        "Có vẻ như anh ấy đang lên kế hoạch nghỉ hưu tháng tới.",
        "nghỉ hưu",
        [],
        "retire"
      ]
    ]
  },
  "t2-65": {
    "sentences": [
      "Đây là Bradley từ Windows Galore.",
      "Tôi có thể giúp gì cho bạn?",
      "Xin chào! Tôi muốn thêm màn chắn vào cửa sổ nhà tôi.",
      "Tôi tự hỏi liệu bạn có thể ghé qua và xem không.",
      "Nhân tiện, tôi sống ở 42 West Third Street.",
      "OK—không xa lắm.",
      "Để tôi xem. Tôi có thể đến bất kỳ buổi sáng nào trong tuần này.",
      "Buổi chiều thì sao?",
      "Hmm. Tôi có thể sắp xếp lại cuộc hẹn chiều thứ Ba.",
      "Tôi sẽ kiểm tra và liên lạc lại với bạn—bây giờ tôi có số của bạn rồi.",
      "Và tên bạn là?",
      "Hoffman—Claudia Hoffman. Cảm ơn.",
      "Nói chuyện sau."
    ],
    "exercises": [
      [
        1,
        "Tôi có thể giúp gì cho bạn?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Xin chào! Tôi muốn thêm màn chắn vào cửa sổ nhà tôi.",
        "thêm",
        [],
        "added"
      ],
      [
        2,
        "Xin chào! Tôi muốn thêm màn chắn vào cửa sổ nhà tôi.",
        "cửa sổ",
        [],
        "windows"
      ],
      [
        3,
        "Tôi tự hỏi liệu bạn có thể ghé qua và xem không.",
        "ghé qua",
        [],
        "stop by"
      ],
      [
        5,
        "OK—không xa lắm.",
        "không",
        [],
        "not"
      ],
      [
        5,
        "OK—không xa lắm.",
        "xa",
        [],
        "far"
      ],
      [
        6,
        "Để tôi xem. Tôi có thể đến bất kỳ buổi sáng nào trong tuần này.",
        "xem",
        [],
        "see"
      ],
      [
        8,
        "Hmm. Tôi có thể sắp xếp lại cuộc hẹn chiều thứ Ba.",
        "sắp xếp lại",
        [],
        "reschedule"
      ],
      [
        8,
        "Hmm. Tôi có thể sắp xếp lại cuộc hẹn chiều thứ Ba.",
        "thứ Ba",
        [],
        "Tuesday"
      ],
      [
        8,
        "Hmm. Tôi có thể sắp xếp lại cuộc hẹn chiều thứ Ba.",
        "cuộc hẹn",
        [],
        "appointment"
      ],
      [
        9,
        "Tôi sẽ kiểm tra và liên lạc lại với bạn—bây giờ tôi có số của bạn rồi.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        9,
        "Tôi sẽ kiểm tra và liên lạc lại với bạn—bây giờ tôi có số của bạn rồi.",
        "liên lạc lại",
        [],
        "get back to"
      ],
      [
        10,
        "Và tên bạn là?",
        "tên",
        [],
        "name"
      ],
      [
        12,
        "Nói chuyện sau.",
        "Nói chuyện",
        [],
        "Talk"
      ]
    ]
  },
  "t2-68": {
    "sentences": [
      "Cô Kwon, cảm ơn vì đã gửi tôi đến hội nghị robot sắp tới.",
      "Tôi không ngờ có cơ hội như thế này sớm sau khi được thuê ở đây.",
      "Điều quan trọng là bạn phải quen thuộc với các thiết kế robot hiện tại.",
      "Luôn có xu hướng và công nghệ mới xuất hiện, và tôi muốn bạn dẫn đầu các phát triển trong ngành của chúng ta.",
      "Tôi đồng ý. Ngoài ra, nó sẽ cho tôi cơ hội giới thiệu bản thân với khách hàng tiềm năng.",
      "Ồ, về điều đó: đây là tài liệu tôi cung cấp cho tất cả nhân viên mới.",
      "Nó bao gồm một số mẹo hữu ích— đặc biệt là cái này.",
      "Bạn đã có danh thiếp chưa?",
      "Hmm. Tôi chưa nhận được, nhưng tôi sẽ gọi cho nhà in hôm nay để cập nhật."
    ],
    "exercises": [
      [
        0,
        "Cô Kwon, cảm ơn vì đã gửi tôi đến hội nghị robot sắp tới.",
        "gửi",
        [],
        "sending"
      ],
      [
        1,
        "Tôi không ngờ có cơ hội như thế này sớm sau khi được thuê ở đây.",
        "không",
        [],
        "didn't"
      ],
      [
        1,
        "Tôi không ngờ có cơ hội như thế này sớm sau khi được thuê ở đây.",
        "ngờ",
        [],
        "expect"
      ],
      [
        1,
        "Tôi không ngờ có cơ hội như thế này sớm sau khi được thuê ở đây.",
        "cơ hội",
        [],
        "opportunity"
      ],
      [
        1,
        "Tôi không ngờ có cơ hội như thế này sớm sau khi được thuê ở đây.",
        "thuê",
        [],
        "hired"
      ],
      [
        2,
        "Điều quan trọng là bạn phải quen thuộc với các thiết kế robot hiện tại.",
        "quen thuộc",
        [],
        "familiar with"
      ],
      [
        2,
        "Điều quan trọng là bạn phải quen thuộc với các thiết kế robot hiện tại.",
        "thiết kế robot",
        [],
        "robot designs"
      ],
      [
        3,
        "Luôn có xu hướng và công nghệ mới xuất hiện, và tôi muốn bạn dẫn đầu các phát triển trong ngành của chúng ta.",
        "xu hướng",
        [],
        "trends"
      ],
      [
        3,
        "Luôn có xu hướng và công nghệ mới xuất hiện, và tôi muốn bạn dẫn đầu các phát triển trong ngành của chúng ta.",
        "công nghệ",
        [],
        "technologies"
      ],
      [
        3,
        "Luôn có xu hướng và công nghệ mới xuất hiện, và tôi muốn bạn dẫn đầu các phát triển trong ngành của chúng ta.",
        "dẫn đầu",
        [],
        "stay ahead"
      ],
      [
        3,
        "Luôn có xu hướng và công nghệ mới xuất hiện, và tôi muốn bạn dẫn đầu các phát triển trong ngành của chúng ta.",
        "phát triển",
        [],
        "developments"
      ],
      [
        4,
        "Tôi đồng ý. Ngoài ra, nó sẽ cho tôi cơ hội giới thiệu bản thân với khách hàng tiềm năng.",
        "cho",
        [],
        "give"
      ],
      [
        4,
        "Tôi đồng ý. Ngoài ra, nó sẽ cho tôi cơ hội giới thiệu bản thân với khách hàng tiềm năng.",
        "khách hàng tiềm năng",
        [],
        "potential clients"
      ],
      [
        5,
        "Ồ, về điều đó: đây là tài liệu tôi cung cấp cho tất cả nhân viên mới.",
        "cung cấp",
        [],
        "provide"
      ],
      [
        6,
        "Nó bao gồm một số mẹo hữu ích— đặc biệt là cái này.",
        "bao gồm",
        [],
        "includes"
      ],
      [
        7,
        "Bạn đã có danh thiếp chưa?",
        "danh thiếp",
        [],
        "business cards"
      ],
      [
        8,
        "Hmm. Tôi chưa nhận được, nhưng tôi sẽ gọi cho nhà in hôm nay để cập nhật.",
        "chưa",
        [],
        "haven't"
      ],
      [
        8,
        "Hmm. Tôi chưa nhận được, nhưng tôi sẽ gọi cho nhà in hôm nay để cập nhật.",
        "nhận được",
        [],
        "received"
      ],
      [
        8,
        "Hmm. Tôi chưa nhận được, nhưng tôi sẽ gọi cho nhà in hôm nay để cập nhật.",
        "gọi",
        [],
        "call"
      ]
    ]
  },
  "t3-32": {
    "sentences": [
      "Chào, đầu bếp Ayaka. Tôi vừa xem qua doanh số tuần này và nhận thấy nhiều người đặt món bò hầm đặc biệt.",
      "Đúng vậy. Món này rất được khách hàng ưa chuộng.",
      "Thực ra tôi muốn thêm nó vào menu chính thức.",
      "Ý hay đấy. Tuy nhiên giá thịt bò thay đổi thường xuyên, nên nếu chúng ta định bán hàng ngày thì khi định giá món ăn cần cân nhắc điều đó.",
      "Được rồi. Tôi cũng sẽ gọi cho nhà cung cấp.",
      "Chúng ta cần đảm bảo họ có thể cung cấp đủ thịt bò mỗi tuần."
    ],
    "exercises": [
      [
        0,
        "Chào, đầu bếp Ayaka. Tôi vừa xem qua doanh số tuần này và nhận thấy nhiều người đặt món bò hầm đặc biệt.",
        "xem",
        [],
        "looking"
      ],
      [
        0,
        "Chào, đầu bếp Ayaka. Tôi vừa xem qua doanh số tuần này và nhận thấy nhiều người đặt món bò hầm đặc biệt.",
        "món bò hầm",
        [],
        "beef stew"
      ],
      [
        1,
        "Đúng vậy. Món này rất được khách hàng ưa chuộng.",
        "ưa chuộng",
        [],
        "popular"
      ],
      [
        1,
        "Đúng vậy. Món này rất được khách hàng ưa chuộng.",
        "khách hàng",
        [],
        "patrons"
      ],
      [
        2,
        "Thực ra tôi muốn thêm nó vào menu chính thức.",
        "Thực ra",
        [],
        "fact"
      ],
      [
        2,
        "Thực ra tôi muốn thêm nó vào menu chính thức.",
        "thêm",
        [],
        "add"
      ],
      [
        2,
        "Thực ra tôi muốn thêm nó vào menu chính thức.",
        "menu",
        [],
        "regular menu"
      ],
      [
        3,
        "Ý hay đấy. Tuy nhiên giá thịt bò thay đổi thường xuyên, nên nếu chúng ta định bán hàng ngày thì khi định giá món ăn cần cân nhắc điều đó.",
        "thay đổi",
        [],
        "change"
      ],
      [
        3,
        "Ý hay đấy. Tuy nhiên giá thịt bò thay đổi thường xuyên, nên nếu chúng ta định bán hàng ngày thì khi định giá món ăn cần cân nhắc điều đó.",
        "cần",
        [],
        "need to"
      ],
      [
        3,
        "Ý hay đấy. Tuy nhiên giá thịt bò thay đổi thường xuyên, nên nếu chúng ta định bán hàng ngày thì khi định giá món ăn cần cân nhắc điều đó.",
        "cân nhắc",
        [],
        "consider"
      ],
      [
        4,
        "Được rồi. Tôi cũng sẽ gọi cho nhà cung cấp.",
        "gọi",
        [],
        "call"
      ],
      [
        4,
        "Được rồi. Tôi cũng sẽ gọi cho nhà cung cấp.",
        "nhà cung cấp",
        [],
        "supplier"
      ],
      [
        5,
        "Chúng ta cần đảm bảo họ có thể cung cấp đủ thịt bò mỗi tuần.",
        "cần",
        [],
        "need to"
      ],
      [
        5,
        "Chúng ta cần đảm bảo họ có thể cung cấp đủ thịt bò mỗi tuần.",
        "thịt bò",
        [],
        "beef"
      ]
    ]
  },
  "t3-35": {
    "sentences": [
      "Xin lỗi, tàu 1401 có dừng ở ga Lexington Street không?",
      "Có. Chuyến đó khoảng 20 phút.",
      "Ồ tốt quá, vậy thì chúng ta có đủ thời gian đến bữa tiệc.",
      "Tàu sẽ khởi hành từ sân ga số 12 sau 3 phút nữa.",
      "Đi sang đó ngay đi Sergey.",
      "Tối nay tôi thực sự mong chờ sự kiện gala của công ty.",
      "Tôi cũng vậy. Này, cậu có mang theo ô không? Tôi quên mang rồi.",
      "Trên đường đi bộ từ ga có thể trời mưa.",
      "Tôi mang rồi! Chúng ta dùng chung nhé."
    ],
    "exercises": [
      [
        0,
        "Xin lỗi, tàu 1401 có dừng ở ga Lexington Street không?",
        "tàu",
        [],
        "train"
      ],
      [
        1,
        "Có. Chuyến đó khoảng 20 phút.",
        "20",
        [],
        "twenty"
      ],
      [
        1,
        "Có. Chuyến đó khoảng 20 phút.",
        "Chuyến",
        [],
        "ride"
      ],
      [
        2,
        "Ồ tốt quá, vậy thì chúng ta có đủ thời gian đến bữa tiệc.",
        "đủ",
        [],
        "plenty"
      ],
      [
        2,
        "Ồ tốt quá, vậy thì chúng ta có đủ thời gian đến bữa tiệc.",
        "đến",
        [],
        "get"
      ],
      [
        2,
        "Ồ tốt quá, vậy thì chúng ta có đủ thời gian đến bữa tiệc.",
        "bữa tiệc",
        [],
        "party"
      ],
      [
        3,
        "Tàu sẽ khởi hành từ sân ga số 12 sau 3 phút nữa.",
        "Tàu",
        [],
        "train"
      ],
      [
        3,
        "Tàu sẽ khởi hành từ sân ga số 12 sau 3 phút nữa.",
        "sân ga",
        [],
        "platform"
      ],
      [
        5,
        "Tối nay tôi thực sự mong chờ sự kiện gala của công ty.",
        "mong chờ",
        [],
        "looking forward to"
      ],
      [
        5,
        "Tối nay tôi thực sự mong chờ sự kiện gala của công ty.",
        "sự kiện gala",
        [],
        "gala event"
      ],
      [
        6,
        "Tôi cũng vậy. Này, cậu có mang theo ô không? Tôi quên mang rồi.",
        "quên",
        [],
        "forgot"
      ],
      [
        7,
        "Trên đường đi bộ từ ga có thể trời mưa.",
        "mưa",
        [],
        "rain"
      ],
      [
        8,
        "Tôi mang rồi! Chúng ta dùng chung nhé.",
        "dùng chung",
        [],
        "share"
      ]
    ]
  },
  "t3-38": {
    "sentences": [
      "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
      "Ý hay đấy.",
      "Tôi biết nhiều người thấy bất tiện khi phải đến trực tiếp để lấy thuốc.",
      "Nhưng nhiều khách hàng của chúng ta cũng mua thêm đồ khác khi đến đây.",
      "Ồ, họ vẫn có thể mua thêm các sản phẩm khác và được giao cùng thuốc.",
      "Thực ra tôi phải soạn một bài đăng tuyển dụng tài xế giao hàng.",
      "Anh có thể giúp tôi không?"
    ],
    "exercises": [
      [
        0,
        "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
        "nói chuyện",
        [],
        "talked"
      ],
      [
        0,
        "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
        "quyết định",
        [],
        "decided"
      ],
      [
        0,
        "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
        "dịch vụ giao hàng",
        [],
        "delivery service"
      ],
      [
        0,
        "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
        "lấy",
        [],
        "picking up"
      ],
      [
        0,
        "Sáng nay tôi đã nói chuyện với ông Hoffman, và ông ấy nói đã quyết định bắt đầu dịch vụ giao hàng cho những khách hàng gặp khó khăn khi tự đến lấy đơn thuốc.",
        "đơn thuốc",
        [],
        "prescriptions"
      ],
      [
        1,
        "Ý hay đấy.",
        "Ý hay",
        [],
        "idea"
      ],
      [
        2,
        "Tôi biết nhiều người thấy bất tiện khi phải đến trực tiếp để lấy thuốc.",
        "biết",
        [],
        "find"
      ],
      [
        2,
        "Tôi biết nhiều người thấy bất tiện khi phải đến trực tiếp để lấy thuốc.",
        "trực tiếp",
        [],
        "in person"
      ],
      [
        2,
        "Tôi biết nhiều người thấy bất tiện khi phải đến trực tiếp để lấy thuốc.",
        "thuốc",
        [],
        "medications"
      ],
      [
        3,
        "Nhưng nhiều khách hàng của chúng ta cũng mua thêm đồ khác khi đến đây.",
        "khách hàng",
        [],
        "customers"
      ],
      [
        3,
        "Nhưng nhiều khách hàng của chúng ta cũng mua thêm đồ khác khi đến đây.",
        "mua",
        [],
        "buy"
      ],
      [
        4,
        "Ồ, họ vẫn có thể mua thêm các sản phẩm khác và được giao cùng thuốc.",
        "mua",
        [],
        "purchases"
      ],
      [
        4,
        "Ồ, họ vẫn có thể mua thêm các sản phẩm khác và được giao cùng thuốc.",
        "giao",
        [],
        "delivered"
      ],
      [
        5,
        "Thực ra tôi phải soạn một bài đăng tuyển dụng tài xế giao hàng.",
        "đăng",
        [],
        "job posting"
      ],
      [
        5,
        "Thực ra tôi phải soạn một bài đăng tuyển dụng tài xế giao hàng.",
        "tài xế giao hàng",
        [],
        "delivery drivers"
      ],
      [
        6,
        "Anh có thể giúp tôi không?",
        "giúp",
        [],
        "help"
      ]
    ]
  },
  "t3-41": {
    "sentences": [
      "Marcel, tôi không biết anh đã xem báo cáo mới nhất chưa.",
      "Thật không may, doanh số của chúng ta tiếp tục giảm.",
      "Đúng vậy, cạnh tranh đang ở mức cao kỷ lục.",
      "Ngày càng nhiều công ty bán quần áo và đồ dùng cho hoạt động ngoài trời.",
      "Chúng ta cần những cách tốt hơn để làm nổi bật thương hiệu.",
      "Ừm, có lẽ chúng ta sẽ được lợi nếu có thêm ý kiến trực tiếp từ các vận động viên sử dụng đồ của chúng ta.",
      "Tôi đang nghĩ có thể thuê một vận động viên leo núi chuyên nghiệp để tư vấn cho đội thiết kế.",
      "Ý tưởng thú vị đấy.",
      "Anh có nghĩ đến ai cụ thể không?",
      "Chiều nay tôi sẽ gửi email cho em danh sách."
    ],
    "exercises": [
      [
        0,
        "Marcel, tôi không biết anh đã xem báo cáo mới nhất chưa.",
        "không",
        [],
        "don't"
      ],
      [
        0,
        "Marcel, tôi không biết anh đã xem báo cáo mới nhất chưa.",
        "báo cáo",
        [],
        "report"
      ],
      [
        1,
        "Thật không may, doanh số của chúng ta tiếp tục giảm.",
        "doanh số",
        [],
        "sales"
      ],
      [
        2,
        "Đúng vậy, cạnh tranh đang ở mức cao kỷ lục.",
        "cạnh tranh",
        [],
        "competition"
      ],
      [
        2,
        "Đúng vậy, cạnh tranh đang ở mức cao kỷ lục.",
        "cao",
        [],
        "high"
      ],
      [
        3,
        "Ngày càng nhiều công ty bán quần áo và đồ dùng cho hoạt động ngoài trời.",
        "bán",
        [],
        "selling"
      ],
      [
        4,
        "Chúng ta cần những cách tốt hơn để làm nổi bật thương hiệu.",
        "cần",
        [],
        "need"
      ],
      [
        5,
        "Ừm, có lẽ chúng ta sẽ được lợi nếu có thêm ý kiến trực tiếp từ các vận động viên sử dụng đồ của chúng ta.",
        "sử dụng",
        [],
        "use"
      ],
      [
        6,
        "Tôi đang nghĩ có thể thuê một vận động viên leo núi chuyên nghiệp để tư vấn cho đội thiết kế.",
        "nghĩ",
        [],
        "thinking"
      ],
      [
        6,
        "Tôi đang nghĩ có thể thuê một vận động viên leo núi chuyên nghiệp để tư vấn cho đội thiết kế.",
        "thuê",
        [],
        "hire"
      ],
      [
        8,
        "Anh có nghĩ đến ai cụ thể không?",
        "nghĩ đến",
        [],
        "have in mind"
      ],
      [
        9,
        "Chiều nay tôi sẽ gửi email cho em danh sách.",
        "email",
        [],
        "mail"
      ],
      [
        9,
        "Chiều nay tôi sẽ gửi email cho em danh sách.",
        "danh sách",
        [],
        "list"
      ]
    ]
  },
  "t3-44": {
    "sentences": [
      "Xin chào. Khoảng 5 năm trước tôi đã được đăng bài trên báo của quý báo.",
      "Giờ khi tôi click vào link thì không hiện gì cả.",
      "Ồ, các link công khai hết hạn sau 3 năm, nhưng tôi có thể tìm bài báo của cô trong cơ sở dữ liệu.",
      "Tôi chỉ cần vài từ khóa từ bài báo để tìm kiếm.",
      "Đó là về kỳ thực tập của tôi tại một phòng khám nha khoa.",
      "Được rồi. Để tôi kiểm tra kho lưu trữ.",
      "Cảm ơn. Lúc bài báo đăng tôi còn đang học đại học, nhưng giờ tôi đang mở phòng khám riêng.",
      "Tôi muốn treo bài báo lên tường.",
      "Ồ! Chúc mừng nhé."
    ],
    "exercises": [
      [
        2,
        "Ồ, các link công khai hết hạn sau 3 năm, nhưng tôi có thể tìm bài báo của cô trong cơ sở dữ liệu.",
        "bài báo",
        [],
        "article"
      ],
      [
        2,
        "Ồ, các link công khai hết hạn sau 3 năm, nhưng tôi có thể tìm bài báo của cô trong cơ sở dữ liệu.",
        "cơ sở dữ liệu",
        [],
        "database"
      ],
      [
        3,
        "Tôi chỉ cần vài từ khóa từ bài báo để tìm kiếm.",
        "bài báo",
        [],
        "article"
      ],
      [
        4,
        "Đó là về kỳ thực tập của tôi tại một phòng khám nha khoa.",
        "phòng khám nha khoa",
        [],
        "dental office"
      ],
      [
        5,
        "Được rồi. Để tôi kiểm tra kho lưu trữ.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        6,
        "Cảm ơn. Lúc bài báo đăng tôi còn đang học đại học, nhưng giờ tôi đang mở phòng khám riêng.",
        "bài báo",
        [],
        "article"
      ],
      [
        7,
        "Tôi muốn treo bài báo lên tường.",
        "muốn",
        [],
        "like"
      ],
      [
        7,
        "Tôi muốn treo bài báo lên tường.",
        "treo",
        [],
        "hang"
      ],
      [
        7,
        "Tôi muốn treo bài báo lên tường.",
        "bài báo",
        [],
        "article"
      ]
    ]
  },
  "t3-47": {
    "sentences": [
      "Chào mừng bạn đến với Scott's Supplies! Xin thông báo, hôm nay tất cả dụng cụ điện và thang của chúng tôi đều được giảm giá 20%.",
      "Tôi có thể giúp gì cho bạn không?",
      "Có. Tuần trước tôi đến mua gỗ để làm một công trình tại nhà, nhưng những tấm ván tôi mua có chiều rộng không phù hợp.",
      "Tôi muốn hỏi liệu mình có thể được hoàn tiền không.",
      "Được chứ. Bạn có mang hóa đơn không?",
      "Tiếc là không. Chắc tôi làm mất rồi.",
      "Ừm, được rồi. Để tôi đi tìm quản lý."
    ],
    "exercises": [
      [
        0,
        "Chào mừng bạn đến với Scott's Supplies! Xin thông báo, hôm nay tất cả dụng cụ điện và thang của chúng tôi đều được giảm giá 20%.",
        "dụng cụ điện",
        [],
        "power tools"
      ],
      [
        0,
        "Chào mừng bạn đến với Scott's Supplies! Xin thông báo, hôm nay tất cả dụng cụ điện và thang của chúng tôi đều được giảm giá 20%.",
        "thang",
        [],
        "ladders"
      ],
      [
        0,
        "Chào mừng bạn đến với Scott's Supplies! Xin thông báo, hôm nay tất cả dụng cụ điện và thang của chúng tôi đều được giảm giá 20%.",
        "20",
        [],
        "twenty percent"
      ],
      [
        1,
        "Tôi có thể giúp gì cho bạn không?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Có. Tuần trước tôi đến mua gỗ để làm một công trình tại nhà, nhưng những tấm ván tôi mua có chiều rộng không phù hợp.",
        "gỗ",
        [],
        "lumber"
      ],
      [
        3,
        "Tôi muốn hỏi liệu mình có thể được hoàn tiền không.",
        "hoàn tiền",
        [],
        "refund"
      ],
      [
        4,
        "Được chứ. Bạn có mang hóa đơn không?",
        "hóa đơn",
        [],
        "receipt"
      ],
      [
        5,
        "Tiếc là không. Chắc tôi làm mất rồi.",
        "mất",
        [],
        "lost"
      ],
      [
        6,
        "Ừm, được rồi. Để tôi đi tìm quản lý.",
        "tìm",
        [],
        "find"
      ],
      [
        6,
        "Ừm, được rồi. Để tôi đi tìm quản lý.",
        "quản lý",
        [],
        "manager"
      ]
    ]
  },
  "t3-50": {
    "sentences": [
      "Chào mừng bạn quay lại! Việc giao đồ ăn trưa thế nào?",
      "Cũng ổn, chỉ có một chiếc túi bị rách và hộp thức ăn rơi ra đúng lúc tôi đang đi đến cửa nhà khách hàng.",
      "Hộp vẫn còn được niêm phong và khách hàng đã nhận, nên cuối cùng mọi chuyện cũng ổn.",
      "Tốt quá, tôi mừng là mọi chuyện đã ổn thỏa.",
      "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc bạn đi vắng.",
      "Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được nhóm lại để tài xế giao hàng hiệu quả hơn.",
      "Tôi cũng vậy. Gần đây số lượng khách hàng của chúng ta tăng đáng kể, nên phần mềm này sẽ rất hữu ích."
    ],
    "exercises": [
      [
        1,
        "Cũng ổn, chỉ có một chiếc túi bị rách và hộp thức ăn rơi ra đúng lúc tôi đang đi đến cửa nhà khách hàng.",
        "rách",
        [],
        "broke"
      ],
      [
        2,
        "Hộp vẫn còn được niêm phong và khách hàng đã nhận, nên cuối cùng mọi chuyện cũng ổn.",
        "Hộp",
        [],
        "container"
      ],
      [
        2,
        "Hộp vẫn còn được niêm phong và khách hàng đã nhận, nên cuối cùng mọi chuyện cũng ổn.",
        "niêm phong",
        [],
        "sealed"
      ],
      [
        2,
        "Hộp vẫn còn được niêm phong và khách hàng đã nhận, nên cuối cùng mọi chuyện cũng ổn.",
        "nhận",
        [],
        "accepted"
      ],
      [
        3,
        "Tốt quá, tôi mừng là mọi chuyện đã ổn thỏa.",
        "ổn thỏa",
        [],
        "worked"
      ],
      [
        4,
        "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc bạn đi vắng.",
        "màn hình",
        [],
        "screen"
      ],
      [
        4,
        "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc bạn đi vắng.",
        "phần mềm giao hàng",
        [],
        "delivery software"
      ],
      [
        4,
        "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc bạn đi vắng.",
        "cài đặt",
        [],
        "installed"
      ],
      [
        4,
        "Nhân tiện, nhìn màn hình của tôi này! Tôi đã cài đặt và cho chạy phần mềm giao hàng mới trong lúc bạn đi vắng.",
        "chạy",
        [],
        "running"
      ],
      [
        5,
        "Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được nhóm lại để tài xế giao hàng hiệu quả hơn.",
        "khu vực",
        [],
        "areas"
      ],
      [
        5,
        "Trông tuyệt đấy! Tôi thích cách các khu vực khác nhau có thể được nhóm lại để tài xế giao hàng hiệu quả hơn.",
        "giao hàng",
        [],
        "deliver"
      ],
      [
        6,
        "Tôi cũng vậy. Gần đây số lượng khách hàng của chúng ta tăng đáng kể, nên phần mềm này sẽ rất hữu ích.",
        "tăng",
        [],
        "increase"
      ],
      [
        6,
        "Tôi cũng vậy. Gần đây số lượng khách hàng của chúng ta tăng đáng kể, nên phần mềm này sẽ rất hữu ích.",
        "khách hàng",
        [],
        "customers"
      ]
    ]
  },
  "t3-53": {
    "sentences": [
      "Chào Jin-Ah. Tôi có tin tốt. Chúng ta đã ký hợp đồng để tạo chiến dịch quảng cáo cho một khách hàng mới.",
      "Tuyệt vời! Đó là ai vậy?",
      "Đó là HMD Incorporated, một công ty đồ ăn vặt hữu cơ.",
      "Họ vừa phát triển một dòng đồ ăn vặt mới làm hoàn toàn từ rau củ.",
      "Họ muốn tiếp thị đồ ăn vặt cho các đội thể thao cũng như cá nhân.",
      "Nghe hay đấy nhưng khó hiểu.",
      "Tôi đoán chúng ta cần tìm hiểu thêm về sản phẩm trước.",
      "Chính xác. Chúng ta sẽ để khách hàng đến để cung cấp thông tin dinh dưỡng và cung cấp mẫu cho chúng ta.",
      "Tôi sẽ lên lịch họp với họ sớm."
    ],
    "exercises": [
      [
        0,
        "Chào Jin-Ah. Tôi có tin tốt. Chúng ta đã ký hợp đồng để tạo chiến dịch quảng cáo cho một khách hàng mới.",
        "ký",
        [],
        "signed"
      ],
      [
        0,
        "Chào Jin-Ah. Tôi có tin tốt. Chúng ta đã ký hợp đồng để tạo chiến dịch quảng cáo cho một khách hàng mới.",
        "hợp đồng",
        [],
        "contract"
      ],
      [
        0,
        "Chào Jin-Ah. Tôi có tin tốt. Chúng ta đã ký hợp đồng để tạo chiến dịch quảng cáo cho một khách hàng mới.",
        "tạo",
        [],
        "create"
      ],
      [
        0,
        "Chào Jin-Ah. Tôi có tin tốt. Chúng ta đã ký hợp đồng để tạo chiến dịch quảng cáo cho một khách hàng mới.",
        "chiến dịch",
        [],
        "campaign"
      ],
      [
        3,
        "Họ vừa phát triển một dòng đồ ăn vặt mới làm hoàn toàn từ rau củ.",
        "rau củ",
        [],
        "vegetables"
      ],
      [
        4,
        "Họ muốn tiếp thị đồ ăn vặt cho các đội thể thao cũng như cá nhân.",
        "các đội thể thao",
        [],
        "sports teams"
      ],
      [
        5,
        "Nghe hay đấy nhưng khó hiểu.",
        "khó",
        [],
        "hard"
      ],
      [
        5,
        "Nghe hay đấy nhưng khó hiểu.",
        "hiểu",
        [],
        "understand"
      ],
      [
        6,
        "Tôi đoán chúng ta cần tìm hiểu thêm về sản phẩm trước.",
        "cần",
        [],
        "need to"
      ],
      [
        6,
        "Tôi đoán chúng ta cần tìm hiểu thêm về sản phẩm trước.",
        "tìm hiểu",
        [],
        "learn"
      ],
      [
        6,
        "Tôi đoán chúng ta cần tìm hiểu thêm về sản phẩm trước.",
        "sản phẩm",
        [],
        "products"
      ],
      [
        7,
        "Chính xác. Chúng ta sẽ để khách hàng đến để cung cấp thông tin dinh dưỡng và cung cấp mẫu cho chúng ta.",
        "cho",
        [],
        "give"
      ],
      [
        7,
        "Chính xác. Chúng ta sẽ để khách hàng đến để cung cấp thông tin dinh dưỡng và cung cấp mẫu cho chúng ta.",
        "mẫu",
        [],
        "samples"
      ],
      [
        8,
        "Tôi sẽ lên lịch họp với họ sớm.",
        "lên lịch",
        [],
        "schedule"
      ],
      [
        8,
        "Tôi sẽ lên lịch họp với họ sớm.",
        "họp",
        [],
        "meeting"
      ]
    ]
  },
  "t3-56": {
    "sentences": [
      "Oliver, anh đã hoàn thành kiểm tra bảo dưỡng cho chiếc máy bay nhỏ đến sáng nay chưa? Chủ nhân hy vọng bay nó cuối tuần này.",
      "Tôi đã hoàn thành kiểm tra sáng sớm nay.",
      "Nó cần bơm phun nhiên liệu mới, nên tôi đã yêu cầu Camille đặt hàng một cái.",
      "Ồ, cô ấy đến rồi.",
      "Camille, bơm mới có đến hôm nay không?",
      "Thật tiếc, không. Nhà sản xuất nói sẽ bị trì hoãn, và sẽ không đến đến thứ Hai.",
      "Tôi nên thông báo cho khách hàng.",
      "Cô ấy dự định bay máy bay đến Toronto cuối tuần này cho đám cưới bạn.",
      "Cô ấy cần tìm cách khác để đến đó."
    ],
    "exercises": [
      [
        0,
        "Oliver, anh đã hoàn thành kiểm tra bảo dưỡng cho chiếc máy bay nhỏ đến sáng nay chưa? Chủ nhân hy vọng bay nó cuối tuần này.",
        "hoàn thành",
        [],
        "finished"
      ],
      [
        0,
        "Oliver, anh đã hoàn thành kiểm tra bảo dưỡng cho chiếc máy bay nhỏ đến sáng nay chưa? Chủ nhân hy vọng bay nó cuối tuần này.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        0,
        "Oliver, anh đã hoàn thành kiểm tra bảo dưỡng cho chiếc máy bay nhỏ đến sáng nay chưa? Chủ nhân hy vọng bay nó cuối tuần này.",
        "máy bay nhỏ",
        [],
        "small airplane"
      ],
      [
        1,
        "Tôi đã hoàn thành kiểm tra sáng sớm nay.",
        "hoàn thành",
        [],
        "finished"
      ],
      [
        1,
        "Tôi đã hoàn thành kiểm tra sáng sớm nay.",
        "kiểm tra",
        [],
        "checking"
      ],
      [
        2,
        "Nó cần bơm phun nhiên liệu mới, nên tôi đã yêu cầu Camille đặt hàng một cái.",
        "bơm phun nhiên liệu",
        [],
        "fuel injection pump"
      ],
      [
        2,
        "Nó cần bơm phun nhiên liệu mới, nên tôi đã yêu cầu Camille đặt hàng một cái.",
        "yêu cầu",
        [],
        "asked"
      ],
      [
        2,
        "Nó cần bơm phun nhiên liệu mới, nên tôi đã yêu cầu Camille đặt hàng một cái.",
        "đặt hàng",
        [],
        "order"
      ],
      [
        4,
        "Camille, bơm mới có đến hôm nay không?",
        "đến",
        [],
        "arrive"
      ],
      [
        6,
        "Tôi nên thông báo cho khách hàng.",
        "khách hàng",
        [],
        "customer"
      ],
      [
        7,
        "Cô ấy dự định bay máy bay đến Toronto cuối tuần này cho đám cưới bạn.",
        "dự định",
        [],
        "planning"
      ],
      [
        7,
        "Cô ấy dự định bay máy bay đến Toronto cuối tuần này cho đám cưới bạn.",
        "đám cưới",
        [],
        "wedding"
      ],
      [
        8,
        "Cô ấy cần tìm cách khác để đến đó.",
        "cần",
        [],
        "need to"
      ],
      [
        8,
        "Cô ấy cần tìm cách khác để đến đó.",
        "tìm",
        [],
        "find"
      ]
    ]
  },
  "t3-59": {
    "sentences": [
      "Chào, bạn đã gọi đến đường dây dịch vụ khách hàng của Quality Internet Service.",
      "Tôi có thể giúp gì cho bạn?",
      "Tôi là Mona Shannak, và số tài khoản của tôi là PK62H5.",
      "Tôi muốn đóng tài khoản vào ngày 30 tháng Sáu.",
      "Ồ, bạn có gặp vấn đề với dịch vụ không?",
      "Thực ra, công ty tôi yêu cầu tôi chuyển đến Tây Ban Nha.",
      "Hay đấy! Tôi sẽ xử lý yêu cầu của bạn.",
      "Cảm ơn—Tôi đánh giá cao điều đó.",
      "Khi tôi cập nhật xong hồ sơ, bạn có sẵn lòng ở lại đường dây để tham gia khảo sát về trải nghiệm khách hàng không?",
      "Chắc chắn rồi."
    ],
    "exercises": [
      [
        0,
        "Chào, bạn đã gọi đến đường dây dịch vụ khách hàng của Quality Internet Service.",
        "dịch vụ khách hàng",
        [],
        "customer service"
      ],
      [
        1,
        "Tôi có thể giúp gì cho bạn?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Tôi là Mona Shannak, và số tài khoản của tôi là PK62H5.",
        "tài khoản",
        [],
        "account"
      ],
      [
        3,
        "Tôi muốn đóng tài khoản vào ngày 30 tháng Sáu.",
        "đóng tài khoản",
        [],
        "close my account"
      ],
      [
        4,
        "Ồ, bạn có gặp vấn đề với dịch vụ không?",
        "dịch vụ",
        [],
        "service"
      ],
      [
        5,
        "Thực ra, công ty tôi yêu cầu tôi chuyển đến Tây Ban Nha.",
        "công ty",
        [],
        "company"
      ],
      [
        5,
        "Thực ra, công ty tôi yêu cầu tôi chuyển đến Tây Ban Nha.",
        "yêu cầu",
        [],
        "asked"
      ],
      [
        6,
        "Hay đấy! Tôi sẽ xử lý yêu cầu của bạn.",
        "xử lý",
        [],
        "care"
      ],
      [
        6,
        "Hay đấy! Tôi sẽ xử lý yêu cầu của bạn.",
        "yêu cầu",
        [],
        "request"
      ],
      [
        7,
        "Cảm ơn—Tôi đánh giá cao điều đó.",
        "đánh giá cao",
        [],
        "appreciate"
      ],
      [
        8,
        "Khi tôi cập nhật xong hồ sơ, bạn có sẵn lòng ở lại đường dây để tham gia khảo sát về trải nghiệm khách hàng không?",
        "cập nhật",
        [],
        "updating"
      ],
      [
        8,
        "Khi tôi cập nhật xong hồ sơ, bạn có sẵn lòng ở lại đường dây để tham gia khảo sát về trải nghiệm khách hàng không?",
        "khảo sát",
        [],
        "survey"
      ]
    ]
  },
  "t3-62": {
    "sentences": [
      "Marco, anh sẽ bổ sung sản phẩm làm sạch sáng nay phải không? Trong khi làm vậy, anh có thể dán nhãn giá khuyến mãi cập nhật lên bình xà phòng tay không? Chúng ở kệ ngay trên bột giặt.",
      "Không vấn đề—sẽ không mất lâu.",
      "Tôi có thể giúp gì nữa?",
      "Anh có thể dọn chỗ cho khu vực thực phẩm quốc tế mới ở phía trước cửa hàng không?",
      "Ồ, lô hàng cuối cùng đã đến? Bão tuyết ở phía bắc thực sự ảnh hưởng đến lịch giao hàng."
    ],
    "exercises": [
      [
        0,
        "Marco, anh sẽ bổ sung sản phẩm làm sạch sáng nay phải không? Trong khi làm vậy, anh có thể dán nhãn giá khuyến mãi cập nhật lên bình xà phòng tay không? Chúng ở kệ ngay trên bột giặt.",
        "làm sạch",
        [],
        "cleaning"
      ],
      [
        0,
        "Marco, anh sẽ bổ sung sản phẩm làm sạch sáng nay phải không? Trong khi làm vậy, anh có thể dán nhãn giá khuyến mãi cập nhật lên bình xà phòng tay không? Chúng ở kệ ngay trên bột giặt.",
        "khuyến mãi",
        [],
        "sale-price labels"
      ],
      [
        1,
        "Không vấn đề—sẽ không mất lâu.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        2,
        "Tôi có thể giúp gì nữa?",
        "giúp",
        [],
        "help"
      ],
      [
        3,
        "Anh có thể dọn chỗ cho khu vực thực phẩm quốc tế mới ở phía trước cửa hàng không?",
        "thực phẩm quốc tế",
        [],
        "international foods"
      ],
      [
        3,
        "Anh có thể dọn chỗ cho khu vực thực phẩm quốc tế mới ở phía trước cửa hàng không?",
        "cửa hàng",
        [],
        "store"
      ],
      [
        4,
        "Ồ, lô hàng cuối cùng đã đến? Bão tuyết ở phía bắc thực sự ảnh hưởng đến lịch giao hàng.",
        "lô hàng",
        [],
        "shipment"
      ],
      [
        4,
        "Ồ, lô hàng cuối cùng đã đến? Bão tuyết ở phía bắc thực sự ảnh hưởng đến lịch giao hàng.",
        "lịch giao hàng",
        [],
        "delivery schedules"
      ]
    ]
  },
  "t3-65": {
    "sentences": [
      "Cảm ơn đã gọi đến Kwon Photography Studio.",
      "Chào. Tôi cần chụp ảnh cho hộ chiếu Canada.",
      "OK. Bạn có thể đặt lịch từ thứ Hai đến thứ Sáu.",
      "Chỉ cần mang theo bản sao đơn xin để chúng tôi xem yêu cầu kích thước.",
      "Tôi làm việc từ chín đến năm mỗi ngày ở công việc hiện tại.",
      "Bạn có lịch trống sau năm giờ chiều không?",
      "Không vấn đề. Chúng tôi mở đến sáu giờ chiều một ngày mỗi tuần."
    ],
    "exercises": [
      [
        1,
        "Chào. Tôi cần chụp ảnh cho hộ chiếu Canada.",
        "cần",
        [],
        "need to"
      ],
      [
        1,
        "Chào. Tôi cần chụp ảnh cho hộ chiếu Canada.",
        "ảnh",
        [],
        "photo"
      ],
      [
        1,
        "Chào. Tôi cần chụp ảnh cho hộ chiếu Canada.",
        "hộ chiếu",
        [],
        "passport"
      ],
      [
        2,
        "OK. Bạn có thể đặt lịch từ thứ Hai đến thứ Sáu.",
        "thứ Sáu",
        [],
        "Friday"
      ],
      [
        3,
        "Chỉ cần mang theo bản sao đơn xin để chúng tôi xem yêu cầu kích thước.",
        "mang",
        [],
        "bring"
      ],
      [
        3,
        "Chỉ cần mang theo bản sao đơn xin để chúng tôi xem yêu cầu kích thước.",
        "xem",
        [],
        "see"
      ],
      [
        4,
        "Tôi làm việc từ chín đến năm mỗi ngày ở công việc hiện tại.",
        "công việc",
        [],
        "work"
      ],
      [
        5,
        "Bạn có lịch trống sau năm giờ chiều không?",
        "lịch trống",
        [],
        "openings"
      ],
      [
        6,
        "Không vấn đề. Chúng tôi mở đến sáu giờ chiều một ngày mỗi tuần.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        6,
        "Không vấn đề. Chúng tôi mở đến sáu giờ chiều một ngày mỗi tuần.",
        "mở",
        [],
        "open"
      ],
      [
        6,
        "Không vấn đề. Chúng tôi mở đến sáu giờ chiều một ngày mỗi tuần.",
        "sáu",
        [],
        "six"
      ]
    ]
  },
  "t3-68": {
    "sentences": [
      "Chào Marina. Bạn có biên nhận cho chi phí từ hội nghị vệ sinh răng miệng bạn tham dự tuần trước không?",
      "Có, tôi có chúng.",
      "Tôi vừa định quét và gửi cho bạn qua email.",
      "Cảm ơn rất nhiều. Khi tôi nhận được, tôi sẽ xử lý yêu cầu hoàn tiền của bạn.",
      "Đừng quên điền biểu mẫu chi phí du lịch và đính kèm vào email.",
      "OK. Nhắc tôi, tôi nên dùng gì cho mã bộ phận?",
      "Ồ, xin lỗi. Tôi quên nói với bạn.",
      "Sử dụng số 1009."
    ],
    "exercises": [
      [
        0,
        "Chào Marina. Bạn có biên nhận cho chi phí từ hội nghị vệ sinh răng miệng bạn tham dự tuần trước không?",
        "chi phí",
        [],
        "expenses"
      ],
      [
        0,
        "Chào Marina. Bạn có biên nhận cho chi phí từ hội nghị vệ sinh răng miệng bạn tham dự tuần trước không?",
        "tham dự",
        [],
        "attended"
      ],
      [
        2,
        "Tôi vừa định quét và gửi cho bạn qua email.",
        "gửi",
        [],
        "send"
      ],
      [
        2,
        "Tôi vừa định quét và gửi cho bạn qua email.",
        "email",
        [],
        "mail"
      ],
      [
        3,
        "Cảm ơn rất nhiều. Khi tôi nhận được, tôi sẽ xử lý yêu cầu hoàn tiền của bạn.",
        "nhận được",
        [],
        "receive"
      ],
      [
        3,
        "Cảm ơn rất nhiều. Khi tôi nhận được, tôi sẽ xử lý yêu cầu hoàn tiền của bạn.",
        "xử lý",
        [],
        "process"
      ],
      [
        4,
        "Đừng quên điền biểu mẫu chi phí du lịch và đính kèm vào email.",
        "Đừng",
        [],
        "Don't"
      ],
      [
        4,
        "Đừng quên điền biểu mẫu chi phí du lịch và đính kèm vào email.",
        "điền",
        [],
        "fill out"
      ],
      [
        5,
        "OK. Nhắc tôi, tôi nên dùng gì cho mã bộ phận?",
        "Nhắc",
        [],
        "Remind"
      ],
      [
        5,
        "OK. Nhắc tôi, tôi nên dùng gì cho mã bộ phận?",
        "dùng",
        [],
        "use"
      ],
      [
        6,
        "Ồ, xin lỗi. Tôi quên nói với bạn.",
        "quên",
        [],
        "forgot"
      ],
      [
        6,
        "Ồ, xin lỗi. Tôi quên nói với bạn.",
        "nói",
        [],
        "tell"
      ],
      [
        7,
        "Sử dụng số 1009.",
        "Sử dụng",
        [],
        "Use"
      ]
    ]
  },
  "t4-32": {
    "sentences": [
      "Chào buổi sáng. Cảm ơn vì đã đến tham quan tòa nhà chung cư này.",
      "Tôi rất vui vì có thể đến trực tiếp.",
      "Tôi luôn muốn sống ở khu phố này—nó thật đẹp.",
      "Tòa nhà này là mới xây, phải không?",
      "Đúng vậy. Thực ra, nếu bạn quyết định chuyển đến đây, bạn sẽ là một trong những người thuê đầu tiên.",
      "Trước khi xem một số căn hộ, bạn vui lòng ký tên vào sổ khách ở đây chứ?",
      "Ồ, tất nhiên.."
    ],
    "exercises": [
      [
        0,
        "Chào buổi sáng. Cảm ơn vì đã đến tham quan tòa nhà chung cư này.",
        "tòa nhà chung cư",
        [],
        "apartment building"
      ],
      [
        1,
        "Tôi rất vui vì có thể đến trực tiếp.",
        "đến",
        [],
        "visit"
      ],
      [
        1,
        "Tôi rất vui vì có thể đến trực tiếp.",
        "trực tiếp",
        [],
        "in person"
      ],
      [
        2,
        "Tôi luôn muốn sống ở khu phố này—nó thật đẹp.",
        "muốn",
        [],
        "wanted"
      ],
      [
        3,
        "Tòa nhà này là mới xây, phải không?",
        "Tòa nhà",
        [],
        "building"
      ],
      [
        3,
        "Tòa nhà này là mới xây, phải không?",
        "không",
        [],
        "isn't"
      ],
      [
        4,
        "Đúng vậy. Thực ra, nếu bạn quyết định chuyển đến đây, bạn sẽ là một trong những người thuê đầu tiên.",
        "chuyển",
        [],
        "move"
      ],
      [
        5,
        "Trước khi xem một số căn hộ, bạn vui lòng ký tên vào sổ khách ở đây chứ?",
        "căn hộ",
        [],
        "apartments"
      ],
      [
        5,
        "Trước khi xem một số căn hộ, bạn vui lòng ký tên vào sổ khách ở đây chứ?",
        "ký tên",
        [],
        "sign"
      ]
    ]
  },
  "t4-35": {
    "sentences": [
      "Chen, hy vọng mọi thứ suôn sẻ trong ngày đầu tiên của bạn.",
      "Tôi thấy bạn có lịch giao hải sản qua vịnh đến Quận Morgan.",
      "Tại sao bạn chưa khởi hành?",
      "Tôi định một giờ nữa mới đi đến khu vực đó.",
      "Các nhà hàng ở Quận Morgan có muốn nhận hàng sớm hơn lịch không?",
      "Không, nhưng tôi lo về tắc nghẽn trên Cầu Bay.",
      "Nó thường xuyên kẹt xe.",
      "Vì vậy bạn nên luôn thêm ít nhất một giờ nữa cho chuyến đi đến đó.",
      "Cảm ơn lời khuyên.",
      "Tôi cũng sẽ kiểm tra webcam giao thông trên trang web của cơ quan đường cao tốc."
    ],
    "exercises": [
      [
        1,
        "Tôi thấy bạn có lịch giao hải sản qua vịnh đến Quận Morgan.",
        "thấy",
        [],
        "saw"
      ],
      [
        1,
        "Tôi thấy bạn có lịch giao hải sản qua vịnh đến Quận Morgan.",
        "lịch",
        [],
        "scheduled"
      ],
      [
        1,
        "Tôi thấy bạn có lịch giao hải sản qua vịnh đến Quận Morgan.",
        "giao hải sản",
        [],
        "seafood deliveries"
      ],
      [
        2,
        "Tại sao bạn chưa khởi hành?",
        "chưa",
        [],
        "haven't"
      ],
      [
        3,
        "Tôi định một giờ nữa mới đi đến khu vực đó.",
        "đi",
        [],
        "head"
      ],
      [
        3,
        "Tôi định một giờ nữa mới đi đến khu vực đó.",
        "khu vực",
        [],
        "particular area"
      ],
      [
        3,
        "Tôi định một giờ nữa mới đi đến khu vực đó.",
        "giờ",
        [],
        "hour"
      ],
      [
        4,
        "Các nhà hàng ở Quận Morgan có muốn nhận hàng sớm hơn lịch không?",
        "nhà hàng",
        [],
        "restaurants"
      ],
      [
        4,
        "Các nhà hàng ở Quận Morgan có muốn nhận hàng sớm hơn lịch không?",
        "lịch",
        [],
        "scheduled"
      ],
      [
        5,
        "Không, nhưng tôi lo về tắc nghẽn trên Cầu Bay.",
        "lo",
        [],
        "concerned"
      ],
      [
        5,
        "Không, nhưng tôi lo về tắc nghẽn trên Cầu Bay.",
        "tắc nghẽn",
        [],
        "traffic"
      ],
      [
        6,
        "Nó thường xuyên kẹt xe.",
        "kẹt xe",
        [],
        "routinely congested"
      ],
      [
        7,
        "Vì vậy bạn nên luôn thêm ít nhất một giờ nữa cho chuyến đi đến đó.",
        "thêm",
        [],
        "add"
      ],
      [
        8,
        "Cảm ơn lời khuyên.",
        "lời khuyên",
        [],
        "tip"
      ],
      [
        9,
        "Tôi cũng sẽ kiểm tra webcam giao thông trên trang web của cơ quan đường cao tốc.",
        "giao thông",
        [],
        "traffic"
      ],
      [
        9,
        "Tôi cũng sẽ kiểm tra webcam giao thông trên trang web của cơ quan đường cao tốc.",
        "trang web",
        [],
        "highway agency's Web site"
      ]
    ]
  },
  "t4-38": {
    "sentences": [
      "Sáng nay tôi nhận được email từ Pelicon, một nhà sản xuất sản phẩm làm đẹp địa phương.",
      "Họ quan tâm đến việc mua lanolin từ chúng ta để sử dụng trong dòng trang điểm tự nhiên hoàn toàn mới.",
      "Tôi không chắc về điều đó.",
      "Chúng ta là một trang trại khá nhỏ, và chúng ta đã bán lanolin cho một doanh nghiệp địa phương khác.",
      "Tôi lo rằng chúng ta không sản xuất đủ lanolin để đáp ứng nhu cầu của một khách hàng khác.",
      "Tôi không muốn mở rộng và đảm nhận sản xuất len nhiều hơn.",
      "Nhưng hợp đồng của chúng ta với doanh nghiệp mà chúng ta hiện đang cung cấp lanolin sắp hết hạn—không có gì đảm bảo sẽ được gia hạn.",
      "Tôi nghĩ bạn nên ít nhất đọc đề xuất của Pelicon.",
      "Được rồi. Bạn có thể chuyển email cho tôi không?"
    ],
    "exercises": [
      [
        0,
        "Sáng nay tôi nhận được email từ Pelicon, một nhà sản xuất sản phẩm làm đẹp địa phương.",
        "email",
        [],
        "mail"
      ],
      [
        0,
        "Sáng nay tôi nhận được email từ Pelicon, một nhà sản xuất sản phẩm làm đẹp địa phương.",
        "sản phẩm làm đẹp",
        [],
        "beauty products"
      ],
      [
        1,
        "Họ quan tâm đến việc mua lanolin từ chúng ta để sử dụng trong dòng trang điểm tự nhiên hoàn toàn mới.",
        "mua",
        [],
        "purchasing"
      ],
      [
        1,
        "Họ quan tâm đến việc mua lanolin từ chúng ta để sử dụng trong dòng trang điểm tự nhiên hoàn toàn mới.",
        "sử dụng",
        [],
        "use"
      ],
      [
        2,
        "Tôi không chắc về điều đó.",
        "không",
        [],
        "not"
      ],
      [
        3,
        "Chúng ta là một trang trại khá nhỏ, và chúng ta đã bán lanolin cho một doanh nghiệp địa phương khác.",
        "bán",
        [],
        "sell"
      ],
      [
        3,
        "Chúng ta là một trang trại khá nhỏ, và chúng ta đã bán lanolin cho một doanh nghiệp địa phương khác.",
        "doanh nghiệp",
        [],
        "local business"
      ],
      [
        4,
        "Tôi lo rằng chúng ta không sản xuất đủ lanolin để đáp ứng nhu cầu của một khách hàng khác.",
        "không",
        [],
        "don't"
      ],
      [
        5,
        "Tôi không muốn mở rộng và đảm nhận sản xuất len nhiều hơn.",
        "không",
        [],
        "don't"
      ],
      [
        5,
        "Tôi không muốn mở rộng và đảm nhận sản xuất len nhiều hơn.",
        "mở rộng",
        [],
        "expand"
      ],
      [
        5,
        "Tôi không muốn mở rộng và đảm nhận sản xuất len nhiều hơn.",
        "sản xuất len",
        [],
        "wool production"
      ],
      [
        7,
        "Tôi nghĩ bạn nên ít nhất đọc đề xuất của Pelicon.",
        "đọc",
        [],
        "read"
      ],
      [
        7,
        "Tôi nghĩ bạn nên ít nhất đọc đề xuất của Pelicon.",
        "đề xuất",
        [],
        "proposal"
      ],
      [
        8,
        "Được rồi. Bạn có thể chuyển email cho tôi không?",
        "email",
        [],
        "mail"
      ]
    ]
  },
  "t4-41": {
    "sentences": [
      "Nisreen? Đây là Lewis.",
      "Tôi nghe nói bạn sẽ làm việc cho công ty chúng ta ở nước ngoài, tại văn phòng New Zealand.",
      "Thật là cơ hội tuyệt vời!",
      "Vâng, cảm ơn. Tôi bắt đầu tháng tới, và tôi rất hào hứng.",
      "Tôi gọi để thảo luận với bạn về một số hợp đồng nhà cung cấp của chúng ta.",
      "Đã đến lúc gia hạn hợp đồng, và tôi muốn yêu cầu bạn xử lý việc đó trước khi đi.",
      "Không vấn đề. Tôi biết các tệp đó nằm ở đâu trên ổ đĩa máy tính chia sẻ của chúng ta.",
      "Tôi chỉ cần mật khẩu để truy cập chúng."
    ],
    "exercises": [
      [
        1,
        "Tôi nghe nói bạn sẽ làm việc cho công ty chúng ta ở nước ngoài, tại văn phòng New Zealand.",
        "làm việc",
        [],
        "working"
      ],
      [
        1,
        "Tôi nghe nói bạn sẽ làm việc cho công ty chúng ta ở nước ngoài, tại văn phòng New Zealand.",
        "ở nước ngoài",
        [],
        "overseas"
      ],
      [
        1,
        "Tôi nghe nói bạn sẽ làm việc cho công ty chúng ta ở nước ngoài, tại văn phòng New Zealand.",
        "văn phòng",
        [],
        "office"
      ],
      [
        2,
        "Thật là cơ hội tuyệt vời!",
        "cơ hội",
        [],
        "opportunity"
      ],
      [
        3,
        "Vâng, cảm ơn. Tôi bắt đầu tháng tới, và tôi rất hào hứng.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        3,
        "Vâng, cảm ơn. Tôi bắt đầu tháng tới, và tôi rất hào hứng.",
        "hào hứng",
        [],
        "excited"
      ],
      [
        4,
        "Tôi gọi để thảo luận với bạn về một số hợp đồng nhà cung cấp của chúng ta.",
        "gọi",
        [],
        "calling"
      ],
      [
        4,
        "Tôi gọi để thảo luận với bạn về một số hợp đồng nhà cung cấp của chúng ta.",
        "hợp đồng nhà cung cấp",
        [],
        "vendor contracts"
      ],
      [
        5,
        "Đã đến lúc gia hạn hợp đồng, và tôi muốn yêu cầu bạn xử lý việc đó trước khi đi.",
        "hợp đồng",
        [],
        "contracts"
      ],
      [
        5,
        "Đã đến lúc gia hạn hợp đồng, và tôi muốn yêu cầu bạn xử lý việc đó trước khi đi.",
        "muốn",
        [],
        "wanted"
      ],
      [
        5,
        "Đã đến lúc gia hạn hợp đồng, và tôi muốn yêu cầu bạn xử lý việc đó trước khi đi.",
        "yêu cầu",
        [],
        "ask"
      ],
      [
        6,
        "Không vấn đề. Tôi biết các tệp đó nằm ở đâu trên ổ đĩa máy tính chia sẻ của chúng ta.",
        "nằm",
        [],
        "located"
      ],
      [
        7,
        "Tôi chỉ cần mật khẩu để truy cập chúng.",
        "cần",
        [],
        "need"
      ],
      [
        7,
        "Tôi chỉ cần mật khẩu để truy cập chúng.",
        "mật khẩu",
        [],
        "password"
      ]
    ]
  },
  "t4-44": {
    "sentences": [
      "Chào. Đây là đại diện của Giovanni Marino. Tôi gọi để lên lịch lại lịch xuất hiện đã lên kế hoạch của anh ấy trên Sunday Morning Show.",
      "Đúng rồi. Chúng tôi đã đặt lịch cho anh ấy xuất hiện trên chương trình vào tháng Bảy để quảng bá bộ phim mới.",
      "Thật không may, bộ phim anh ấy đang đóng bị chậm tiến độ, và anh ấy sẽ ở địa điểm quay đến cuối tháng Tám.",
      "Hmm, tôi hiểu rồi. Để tôi xem lịch khách mời.",
      "Tôi có một khoảng trống cần lấp vào ngày 14 tháng Chín—có được không?",
      "Vâng, sẽ tuyệt vời, cảm ơn.",
      "Được rồi. Tôi sẽ cập nhật hợp đồng với ngày mới và gửi email cho bạn."
    ],
    "exercises": [
      [
        0,
        "Chào. Đây là đại diện của Giovanni Marino. Tôi gọi để lên lịch lại lịch xuất hiện đã lên kế hoạch của anh ấy trên Sunday Morning Show.",
        "gọi",
        [],
        "calling"
      ],
      [
        0,
        "Chào. Đây là đại diện của Giovanni Marino. Tôi gọi để lên lịch lại lịch xuất hiện đã lên kế hoạch của anh ấy trên Sunday Morning Show.",
        "lên lịch lại",
        [],
        "reschedule"
      ],
      [
        1,
        "Đúng rồi. Chúng tôi đã đặt lịch cho anh ấy xuất hiện trên chương trình vào tháng Bảy để quảng bá bộ phim mới.",
        "đặt",
        [],
        "booked"
      ],
      [
        1,
        "Đúng rồi. Chúng tôi đã đặt lịch cho anh ấy xuất hiện trên chương trình vào tháng Bảy để quảng bá bộ phim mới.",
        "tháng Bảy",
        [],
        "July"
      ],
      [
        2,
        "Thật không may, bộ phim anh ấy đang đóng bị chậm tiến độ, và anh ấy sẽ ở địa điểm quay đến cuối tháng Tám.",
        "đóng",
        [],
        "acting"
      ],
      [
        2,
        "Thật không may, bộ phim anh ấy đang đóng bị chậm tiến độ, và anh ấy sẽ ở địa điểm quay đến cuối tháng Tám.",
        "chậm tiến độ",
        [],
        "behind schedule"
      ],
      [
        2,
        "Thật không may, bộ phim anh ấy đang đóng bị chậm tiến độ, và anh ấy sẽ ở địa điểm quay đến cuối tháng Tám.",
        "địa điểm quay",
        [],
        "on location"
      ],
      [
        3,
        "Hmm, tôi hiểu rồi. Để tôi xem lịch khách mời.",
        "hiểu",
        [],
        "see"
      ],
      [
        3,
        "Hmm, tôi hiểu rồi. Để tôi xem lịch khách mời.",
        "lịch khách mời",
        [],
        "guest calendar"
      ],
      [
        4,
        "Tôi có một khoảng trống cần lấp vào ngày 14 tháng Chín—có được không?",
        "khoảng trống",
        [],
        "slot"
      ],
      [
        4,
        "Tôi có một khoảng trống cần lấp vào ngày 14 tháng Chín—có được không?",
        "lấp",
        [],
        "fill"
      ],
      [
        4,
        "Tôi có một khoảng trống cần lấp vào ngày 14 tháng Chín—có được không?",
        "tháng Chín",
        [],
        "September fourteenth"
      ],
      [
        6,
        "Được rồi. Tôi sẽ cập nhật hợp đồng với ngày mới và gửi email cho bạn.",
        "cập nhật",
        [],
        "update"
      ],
      [
        6,
        "Được rồi. Tôi sẽ cập nhật hợp đồng với ngày mới và gửi email cho bạn.",
        "hợp đồng",
        [],
        "contract"
      ],
      [
        6,
        "Được rồi. Tôi sẽ cập nhật hợp đồng với ngày mới và gửi email cho bạn.",
        "email",
        [],
        "mail"
      ]
    ]
  },
  "t4-47": {
    "sentences": [
      "Chào Usha. Chào Pablo.",
      "Chào Konstantin. Chúng tôi đang nói về suy nghĩ của mình về chính sách công ty mới dành cho nhân viên làm việc từ xa.",
      "Vào những ngày tôi phải đến văn phòng, tôi luôn lo lắng về việc tìm một chỗ làm việc phù hợp.",
      "Vâng, tôi cũng không thích sự không chắc chắn đó.",
      "Tại sao chúng ta không thể đăng ký chỗ làm việc trước? Bạn nghĩ sao?",
      "Những điểm tốt đấy.",
      "Hãy cùng đến gặp giám đốc để thảo luận với bà ấy.",
      "Tôi tin bà ấy đang ở văn phòng, vậy bây giờ là lúc tốt.",
      "Ồ, tôi không thể đi bây giờ.",
      "Tôi có báo cáo cần hoàn tất trước trưa."
    ],
    "exercises": [
      [
        1,
        "Chào Konstantin. Chúng tôi đang nói về suy nghĩ của mình về chính sách công ty mới dành cho nhân viên làm việc từ xa.",
        "nói",
        [],
        "talking"
      ],
      [
        1,
        "Chào Konstantin. Chúng tôi đang nói về suy nghĩ của mình về chính sách công ty mới dành cho nhân viên làm việc từ xa.",
        "nghĩ",
        [],
        "thoughts"
      ],
      [
        1,
        "Chào Konstantin. Chúng tôi đang nói về suy nghĩ của mình về chính sách công ty mới dành cho nhân viên làm việc từ xa.",
        "chính sách công ty",
        [],
        "company policy"
      ],
      [
        1,
        "Chào Konstantin. Chúng tôi đang nói về suy nghĩ của mình về chính sách công ty mới dành cho nhân viên làm việc từ xa.",
        "nhân viên làm việc từ xa",
        [],
        "remote workers"
      ],
      [
        2,
        "Vào những ngày tôi phải đến văn phòng, tôi luôn lo lắng về việc tìm một chỗ làm việc phù hợp.",
        "phải",
        [],
        "have to"
      ],
      [
        2,
        "Vào những ngày tôi phải đến văn phòng, tôi luôn lo lắng về việc tìm một chỗ làm việc phù hợp.",
        "văn phòng",
        [],
        "office"
      ],
      [
        2,
        "Vào những ngày tôi phải đến văn phòng, tôi luôn lo lắng về việc tìm một chỗ làm việc phù hợp.",
        "tìm",
        [],
        "finding"
      ],
      [
        2,
        "Vào những ngày tôi phải đến văn phòng, tôi luôn lo lắng về việc tìm một chỗ làm việc phù hợp.",
        "chỗ làm việc",
        [],
        "workstation"
      ],
      [
        3,
        "Vâng, tôi cũng không thích sự không chắc chắn đó.",
        "thích",
        [],
        "like"
      ],
      [
        4,
        "Tại sao chúng ta không thể đăng ký chỗ làm việc trước? Bạn nghĩ sao?",
        "không",
        [],
        "can't"
      ],
      [
        4,
        "Tại sao chúng ta không thể đăng ký chỗ làm việc trước? Bạn nghĩ sao?",
        "đăng ký",
        [],
        "sign up"
      ],
      [
        4,
        "Tại sao chúng ta không thể đăng ký chỗ làm việc trước? Bạn nghĩ sao?",
        "chỗ làm việc",
        [],
        "workstation"
      ],
      [
        4,
        "Tại sao chúng ta không thể đăng ký chỗ làm việc trước? Bạn nghĩ sao?",
        "trước",
        [],
        "in advance"
      ],
      [
        5,
        "Những điểm tốt đấy.",
        "điểm",
        [],
        "points"
      ],
      [
        6,
        "Hãy cùng đến gặp giám đốc để thảo luận với bà ấy.",
        "giám đốc",
        [],
        "director"
      ],
      [
        6,
        "Hãy cùng đến gặp giám đốc để thảo luận với bà ấy.",
        "thảo luận",
        [],
        "discuss"
      ],
      [
        7,
        "Tôi tin bà ấy đang ở văn phòng, vậy bây giờ là lúc tốt.",
        "văn phòng",
        [],
        "office"
      ],
      [
        8,
        "Ồ, tôi không thể đi bây giờ.",
        "không",
        [],
        "can't"
      ],
      [
        9,
        "Tôi có báo cáo cần hoàn tất trước trưa.",
        "báo cáo",
        [],
        "report"
      ],
      [
        9,
        "Tôi có báo cáo cần hoàn tất trước trưa.",
        "hoàn tất",
        [],
        "finalize"
      ]
    ]
  },
  "t4-50": {
    "sentences": [
      "OK, ông Jebreen. Đây là thẻ thư viện mới của ông.",
      "Nhớ rằng ông có thể mượn sách, CD và DVD từ bộ sưu tập của chúng tôi bằng nó.",
      "Cảm ơn. Tôi đọc đâu đó rằng mọi người cũng có thể mượn các mặt hàng kỹ thuật số.",
      "Vâng! Chúng tôi cung cấp ứng dụng Cloud-Camel.",
      "Tất cả những gì ông phải làm là tải ứng dụng và sử dụng thông tin trên thẻ để thiết lập tài khoản.",
      "Tuyệt vời. Tôi đi công tác mỗi tháng, vì vậy việc dễ dàng truy cập nội dung trực tuyến sẽ tiện lợi."
    ],
    "exercises": [
      [
        0,
        "OK, ông Jebreen. Đây là thẻ thư viện mới của ông.",
        "thẻ thư viện",
        [],
        "library card"
      ],
      [
        1,
        "Nhớ rằng ông có thể mượn sách, CD và DVD từ bộ sưu tập của chúng tôi bằng nó.",
        "Nhớ",
        [],
        "Remember"
      ],
      [
        1,
        "Nhớ rằng ông có thể mượn sách, CD và DVD từ bộ sưu tập của chúng tôi bằng nó.",
        "mượn",
        [],
        "borrow"
      ],
      [
        2,
        "Cảm ơn. Tôi đọc đâu đó rằng mọi người cũng có thể mượn các mặt hàng kỹ thuật số.",
        "đọc",
        [],
        "read"
      ],
      [
        2,
        "Cảm ơn. Tôi đọc đâu đó rằng mọi người cũng có thể mượn các mặt hàng kỹ thuật số.",
        "mượn",
        [],
        "borrow"
      ],
      [
        3,
        "Vâng! Chúng tôi cung cấp ứng dụng Cloud-Camel.",
        "cung cấp",
        [],
        "offer"
      ],
      [
        3,
        "Vâng! Chúng tôi cung cấp ứng dụng Cloud-Camel.",
        "ứng dụng",
        [],
        "application"
      ],
      [
        4,
        "Tất cả những gì ông phải làm là tải ứng dụng và sử dụng thông tin trên thẻ để thiết lập tài khoản.",
        "phải",
        [],
        "have to"
      ],
      [
        4,
        "Tất cả những gì ông phải làm là tải ứng dụng và sử dụng thông tin trên thẻ để thiết lập tài khoản.",
        "sử dụng",
        [],
        "use"
      ],
      [
        4,
        "Tất cả những gì ông phải làm là tải ứng dụng và sử dụng thông tin trên thẻ để thiết lập tài khoản.",
        "thiết lập",
        [],
        "set up"
      ],
      [
        4,
        "Tất cả những gì ông phải làm là tải ứng dụng và sử dụng thông tin trên thẻ để thiết lập tài khoản.",
        "tài khoản",
        [],
        "account"
      ],
      [
        5,
        "Tuyệt vời. Tôi đi công tác mỗi tháng, vì vậy việc dễ dàng truy cập nội dung trực tuyến sẽ tiện lợi.",
        "nội dung trực tuyến",
        [],
        "online content"
      ],
      [
        5,
        "Tuyệt vời. Tôi đi công tác mỗi tháng, vì vậy việc dễ dàng truy cập nội dung trực tuyến sẽ tiện lợi.",
        "tiện",
        [],
        "convenient"
      ]
    ]
  },
  "t4-53": {
    "sentences": [
      "Bạn đã xem xét dữ liệu từ cuộc khảo sát nơi làm việc chưa? Bạn thực sự nên làm vậy.",
      "Có vẻ như hầu hết nhân viên cảm thấy tích cực về hướng đi của công ty.",
      "Nhưng gần 40 phần trăm cảm thấy những đóng góp cá nhân của họ không được công nhận.",
      "Chà, công ty chắc chắn có những ưu tiên khác.",
      "Tôi tự hỏi đội ngũ quản lý sẽ phản ứng thế nào.",
      "Tôi đã gợi ý nhiều lần rằng họ nên trao giải thưởng hàng quý cho hiệu suất xuất sắc.",
      "Có lẽ bây giờ họ cuối cùng sẽ bắt đầu làm điều đó."
    ],
    "exercises": [
      [
        0,
        "Bạn đã xem xét dữ liệu từ cuộc khảo sát nơi làm việc chưa? Bạn thực sự nên làm vậy.",
        "xem xét",
        [],
        "reviewed"
      ],
      [
        0,
        "Bạn đã xem xét dữ liệu từ cuộc khảo sát nơi làm việc chưa? Bạn thực sự nên làm vậy.",
        "khảo sát nơi làm việc",
        [],
        "workplace survey"
      ],
      [
        1,
        "Có vẻ như hầu hết nhân viên cảm thấy tích cực về hướng đi của công ty.",
        "Có vẻ",
        [],
        "looks"
      ],
      [
        1,
        "Có vẻ như hầu hết nhân viên cảm thấy tích cực về hướng đi của công ty.",
        "nhân viên",
        [],
        "staff"
      ],
      [
        2,
        "Nhưng gần 40 phần trăm cảm thấy những đóng góp cá nhân của họ không được công nhận.",
        "những đóng góp",
        [],
        "contributions"
      ],
      [
        2,
        "Nhưng gần 40 phần trăm cảm thấy những đóng góp cá nhân của họ không được công nhận.",
        "không",
        [],
        "aren't"
      ],
      [
        4,
        "Tôi tự hỏi đội ngũ quản lý sẽ phản ứng thế nào.",
        "tự hỏi",
        [],
        "wonder"
      ],
      [
        4,
        "Tôi tự hỏi đội ngũ quản lý sẽ phản ứng thế nào.",
        "đội ngũ quản lý",
        [],
        "management team"
      ],
      [
        5,
        "Tôi đã gợi ý nhiều lần rằng họ nên trao giải thưởng hàng quý cho hiệu suất xuất sắc.",
        "gợi ý",
        [],
        "suggested"
      ],
      [
        5,
        "Tôi đã gợi ý nhiều lần rằng họ nên trao giải thưởng hàng quý cho hiệu suất xuất sắc.",
        "cho",
        [],
        "give"
      ],
      [
        5,
        "Tôi đã gợi ý nhiều lần rằng họ nên trao giải thưởng hàng quý cho hiệu suất xuất sắc.",
        "giải thưởng",
        [],
        "awards"
      ],
      [
        6,
        "Có lẽ bây giờ họ cuối cùng sẽ bắt đầu làm điều đó.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        6,
        "Có lẽ bây giờ họ cuối cùng sẽ bắt đầu làm điều đó.",
        "làm",
        [],
        "doing"
      ]
    ]
  },
  "t4-56": {
    "sentences": [
      "Chào, Ajijola. Như tôi đã đề cập qua điện thoại, đồng nghiệp của tôi và tôi gần đây đã thành lập một công ty quần áo và hy vọng công ty thương hiệu của bạn có thể giúp chúng tôi quảng bá dòng quần áo thể thao.",
      "Bạn nghĩ chúng ta nên tập trung vào quảng cáo trên mạng xã hội, phải không?",
      "Đúng vậy. Trái với niềm tin phổ biến, truyền hình chắc chắn không phải là toàn bộ bối cảnh quảng cáo.",
      "Quảng cáo trên Internet cũng là một cách tuyệt vời để công ty tăng khả năng hiển thị.",
      "Tôi nghe bạn khuyến nghị làm việc với một người ảnh hưởng trực tuyến.",
      "Vâng—Saskia Hoffman. Saskia rất am hiểu về tập luyện, và nhiều người sử dụng các bài tập trực tuyến của cô ấy.",
      "Khán giả của cô ấy sẽ chú ý đến những gì cô ấy khuyến nghị và mặc."
    ],
    "exercises": [
      [
        1,
        "Bạn nghĩ chúng ta nên tập trung vào quảng cáo trên mạng xã hội, phải không?",
        "tập trung",
        [],
        "focus"
      ],
      [
        1,
        "Bạn nghĩ chúng ta nên tập trung vào quảng cáo trên mạng xã hội, phải không?",
        "quảng cáo",
        [],
        "advertising"
      ],
      [
        1,
        "Bạn nghĩ chúng ta nên tập trung vào quảng cáo trên mạng xã hội, phải không?",
        "mạng xã hội",
        [],
        "social media"
      ],
      [
        2,
        "Đúng vậy. Trái với niềm tin phổ biến, truyền hình chắc chắn không phải là toàn bộ bối cảnh quảng cáo.",
        "không",
        [],
        "not"
      ],
      [
        2,
        "Đúng vậy. Trái với niềm tin phổ biến, truyền hình chắc chắn không phải là toàn bộ bối cảnh quảng cáo.",
        "quảng cáo",
        [],
        "advertising"
      ],
      [
        3,
        "Quảng cáo trên Internet cũng là một cách tuyệt vời để công ty tăng khả năng hiển thị.",
        "Quảng cáo",
        [],
        "Advertising"
      ],
      [
        3,
        "Quảng cáo trên Internet cũng là một cách tuyệt vời để công ty tăng khả năng hiển thị.",
        "tăng",
        [],
        "increase"
      ],
      [
        5,
        "Vâng—Saskia Hoffman. Saskia rất am hiểu về tập luyện, và nhiều người sử dụng các bài tập trực tuyến của cô ấy.",
        "sử dụng",
        [],
        "use"
      ],
      [
        6,
        "Khán giả của cô ấy sẽ chú ý đến những gì cô ấy khuyến nghị và mặc.",
        "mặc",
        [],
        "wears"
      ]
    ]
  },
  "t4-59": {
    "sentences": [
      "Chào, Shinji. Tôi muốn hỏi bạn về đơn hàng chúng ta nhận được từ chuỗi cửa hàng bách hóa.",
      "Bạn biết đấy, cái đặt hàng 5.000 câu đố ghép hình?",
      "Vâng. Họ muốn đơn hàng trong một tuần để có thể dự trữ trước kỳ nghỉ.",
      "Một tuần không phải là thời gian dài.",
      "Chúng ta đã có thời hạn ngắn trước đây.",
      "Dù sao, các họa sĩ minh họa của chúng ta đã gửi một số minh họa câu đố mới, phải không? Tôi nghe họ đang làm phiên bản đặc biệt.",
      "Vâng, và tôi rất hào hứng! Tôi có bản phác thảo ngay đây.",
      "Để tôi cho bạn xem."
    ],
    "exercises": [
      [
        0,
        "Chào, Shinji. Tôi muốn hỏi bạn về đơn hàng chúng ta nhận được từ chuỗi cửa hàng bách hóa.",
        "muốn",
        [],
        "wanted"
      ],
      [
        0,
        "Chào, Shinji. Tôi muốn hỏi bạn về đơn hàng chúng ta nhận được từ chuỗi cửa hàng bách hóa.",
        "hỏi",
        [],
        "ask"
      ],
      [
        0,
        "Chào, Shinji. Tôi muốn hỏi bạn về đơn hàng chúng ta nhận được từ chuỗi cửa hàng bách hóa.",
        "chuỗi cửa hàng bách hóa",
        [],
        "department store chain"
      ],
      [
        1,
        "Bạn biết đấy, cái đặt hàng 5.000 câu đố ghép hình?",
        "đặt hàng",
        [],
        "order"
      ],
      [
        2,
        "Vâng. Họ muốn đơn hàng trong một tuần để có thể dự trữ trước kỳ nghỉ.",
        "đơn hàng",
        [],
        "order"
      ],
      [
        3,
        "Một tuần không phải là thời gian dài.",
        "không",
        [],
        "not"
      ],
      [
        3,
        "Một tuần không phải là thời gian dài.",
        "dài",
        [],
        "long"
      ],
      [
        4,
        "Chúng ta đã có thời hạn ngắn trước đây.",
        "thời hạn ngắn",
        [],
        "short timelines"
      ],
      [
        5,
        "Dù sao, các họa sĩ minh họa của chúng ta đã gửi một số minh họa câu đố mới, phải không? Tôi nghe họ đang làm phiên bản đặc biệt.",
        "gửi",
        [],
        "sent"
      ],
      [
        6,
        "Vâng, và tôi rất hào hứng! Tôi có bản phác thảo ngay đây.",
        "hào hứng",
        [],
        "excited"
      ],
      [
        6,
        "Vâng, và tôi rất hào hứng! Tôi có bản phác thảo ngay đây.",
        "có",
        [],
        "got"
      ],
      [
        6,
        "Vâng, và tôi rất hào hứng! Tôi có bản phác thảo ngay đây.",
        "bản phác thảo",
        [],
        "sketches"
      ],
      [
        7,
        "Để tôi cho bạn xem.",
        "xem",
        [],
        "show"
      ]
    ]
  },
  "t4-62": {
    "sentences": [
      "Chào, bà Rossi. Tôi hiểu bà đang lo lắng về một khoản phí xuất hiện trên bảng kê khai tài khoản kinh doanh của bà.",
      "Vâng, tôi có câu hỏi về khoản phí vào ngày 3 tháng 5.",
      "Tôi không nhớ mua bất cứ thứ gì với số tiền đó.",
      "Để tôi xem lại bảng kê của bà ngay.",
      "Hmm. Có vẻ như giao dịch đó được thực hiện ở nước ngoài.",
      "Vì vậy phí giao dịch quốc tế đã được thêm vào số tiền mua.",
      "Ồ, vâng—Tôi đã ra khỏi nước lúc đó.",
      "Cảm ơn vì đã làm rõ. Ông có thể cung cấp cho tôi danh sách tất cả các phí ngân hàng cho các giao dịch thực hiện ở nước ngoài không?",
      "Vâng, tất nhiên. Đây là tài liệu liệt kê tất cả thông tin."
    ],
    "exercises": [
      [
        0,
        "Chào, bà Rossi. Tôi hiểu bà đang lo lắng về một khoản phí xuất hiện trên bảng kê khai tài khoản kinh doanh của bà.",
        "phí",
        [],
        "charge"
      ],
      [
        1,
        "Vâng, tôi có câu hỏi về khoản phí vào ngày 3 tháng 5.",
        "câu hỏi",
        [],
        "question"
      ],
      [
        1,
        "Vâng, tôi có câu hỏi về khoản phí vào ngày 3 tháng 5.",
        "phí",
        [],
        "charge"
      ],
      [
        2,
        "Tôi không nhớ mua bất cứ thứ gì với số tiền đó.",
        "không",
        [],
        "don't"
      ],
      [
        2,
        "Tôi không nhớ mua bất cứ thứ gì với số tiền đó.",
        "nhớ",
        [],
        "remember"
      ],
      [
        2,
        "Tôi không nhớ mua bất cứ thứ gì với số tiền đó.",
        "mua",
        [],
        "purchasing"
      ],
      [
        3,
        "Để tôi xem lại bảng kê của bà ngay.",
        "xem lại",
        [],
        "review"
      ],
      [
        4,
        "Hmm. Có vẻ như giao dịch đó được thực hiện ở nước ngoài.",
        "Có vẻ",
        [],
        "looks"
      ],
      [
        4,
        "Hmm. Có vẻ như giao dịch đó được thực hiện ở nước ngoài.",
        "giao dịch",
        [],
        "purchase"
      ],
      [
        4,
        "Hmm. Có vẻ như giao dịch đó được thực hiện ở nước ngoài.",
        "nước ngoài",
        [],
        "abroad"
      ],
      [
        5,
        "Vì vậy phí giao dịch quốc tế đã được thêm vào số tiền mua.",
        "phí giao dịch quốc tế",
        [],
        "international transaction fee"
      ],
      [
        5,
        "Vì vậy phí giao dịch quốc tế đã được thêm vào số tiền mua.",
        "thêm",
        [],
        "added"
      ],
      [
        5,
        "Vì vậy phí giao dịch quốc tế đã được thêm vào số tiền mua.",
        "mua",
        [],
        "purchase"
      ],
      [
        6,
        "Ồ, vâng—Tôi đã ra khỏi nước lúc đó.",
        "nước",
        [],
        "country"
      ],
      [
        7,
        "Cảm ơn vì đã làm rõ. Ông có thể cung cấp cho tôi danh sách tất cả các phí ngân hàng cho các giao dịch thực hiện ở nước ngoài không?",
        "cung cấp",
        [],
        "provide"
      ],
      [
        7,
        "Cảm ơn vì đã làm rõ. Ông có thể cung cấp cho tôi danh sách tất cả các phí ngân hàng cho các giao dịch thực hiện ở nước ngoài không?",
        "phí ngân hàng",
        [],
        "bank fees"
      ],
      [
        8,
        "Vâng, tất nhiên. Đây là tài liệu liệt kê tất cả thông tin.",
        "tài liệu",
        [],
        "document"
      ]
    ]
  },
  "t4-65": {
    "sentences": [
      "Magali, bạn có thể đặt chỗ trung tâm nghệ thuật biểu diễn cho buổi hòa nhạc piano không?",
      "Vâng. Tôi đã đặt hội trường chính của họ cho ngày đó.",
      "Họ đang gửi hợp đồng cho tôi.",
      "Cảm ơn vì đã làm điều đó.",
      "Không vấn đề. Hy vọng sẽ thành công như năm ngoái.",
      "Chúng ta bán 2.000 vé năm ngoái, nhưng chúng ta có ba nghệ sĩ nổi tiếng.",
      "Tôi lo lắng chúng ta sẽ không bán được nhiều vé năm nay.",
      "Chà, Xinyu Gu là một nghệ sĩ piano rất nổi tiếng.",
      "Và cô ấy ở lại sau buổi hòa nhạc để ký tặng.",
      "Điều đó nhắc tôi, chúng ta nên đặt bàn cho việc đó ở đâu?",
      "Câu hỏi hay. Hmm. Quán cà phê nên đóng cửa lúc đó.",
      "Hãy đặt nó bên cạnh quán cà phê."
    ],
    "exercises": [
      [
        0,
        "Magali, bạn có thể đặt chỗ trung tâm nghệ thuật biểu diễn cho buổi hòa nhạc piano không?",
        "đặt chỗ",
        [],
        "reserve"
      ],
      [
        1,
        "Vâng. Tôi đã đặt hội trường chính của họ cho ngày đó.",
        "đặt",
        [],
        "booked"
      ],
      [
        2,
        "Họ đang gửi hợp đồng cho tôi.",
        "gửi",
        [],
        "sending"
      ],
      [
        2,
        "Họ đang gửi hợp đồng cho tôi.",
        "hợp đồng",
        [],
        "contract"
      ],
      [
        3,
        "Cảm ơn vì đã làm điều đó.",
        "làm",
        [],
        "doing"
      ],
      [
        4,
        "Không vấn đề. Hy vọng sẽ thành công như năm ngoái.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        5,
        "Chúng ta bán 2.000 vé năm ngoái, nhưng chúng ta có ba nghệ sĩ nổi tiếng.",
        "bán",
        [],
        "sold"
      ],
      [
        5,
        "Chúng ta bán 2.000 vé năm ngoái, nhưng chúng ta có ba nghệ sĩ nổi tiếng.",
        "vé",
        [],
        "tickets"
      ],
      [
        6,
        "Tôi lo lắng chúng ta sẽ không bán được nhiều vé năm nay.",
        "không",
        [],
        "won't"
      ],
      [
        6,
        "Tôi lo lắng chúng ta sẽ không bán được nhiều vé năm nay.",
        "bán",
        [],
        "sell"
      ],
      [
        6,
        "Tôi lo lắng chúng ta sẽ không bán được nhiều vé năm nay.",
        "vé",
        [],
        "tickets"
      ],
      [
        7,
        "Chà, Xinyu Gu là một nghệ sĩ piano rất nổi tiếng.",
        "nghệ sĩ piano",
        [],
        "pianist"
      ],
      [
        8,
        "Và cô ấy ở lại sau buổi hòa nhạc để ký tặng.",
        "ký",
        [],
        "sign"
      ],
      [
        9,
        "Điều đó nhắc tôi, chúng ta nên đặt bàn cho việc đó ở đâu?",
        "nhắc",
        [],
        "reminds"
      ],
      [
        9,
        "Điều đó nhắc tôi, chúng ta nên đặt bàn cho việc đó ở đâu?",
        "đặt",
        [],
        "set up"
      ],
      [
        10,
        "Câu hỏi hay. Hmm. Quán cà phê nên đóng cửa lúc đó.",
        "Câu hỏi",
        [],
        "question"
      ],
      [
        10,
        "Câu hỏi hay. Hmm. Quán cà phê nên đóng cửa lúc đó.",
        "Quán cà phê",
        [],
        "café"
      ],
      [
        10,
        "Câu hỏi hay. Hmm. Quán cà phê nên đóng cửa lúc đó.",
        "đóng cửa",
        [],
        "closed"
      ],
      [
        11,
        "Hãy đặt nó bên cạnh quán cà phê.",
        "đặt",
        [],
        "set"
      ],
      [
        11,
        "Hãy đặt nó bên cạnh quán cà phê.",
        "quán cà phê",
        [],
        "café"
      ]
    ]
  },
  "t4-68": {
    "sentences": [
      "Chào mừng đến với trung tâm vườn.",
      "Tôi có thể giúp gì cho bạn?",
      "Chào. Tôi đã bắt đầu trồng bụi hoa hồng, và tôi nghe chúng cần chăm sóc đặc biệt.",
      "Có sản phẩm nào bạn có thể khuyến nghị không?",
      "Vâng! Nhưng trước tiên, tôi muốn cho bạn xem một tài nguyên tuyệt vời trên trang web của chúng tôi.",
      "Bạn đã xem blog của chúng tôi chưa?",
      "Không, chưa.",
      "Chúng tôi có bài đăng hàng tháng về nhiều chủ đề làm vườn, và có một bài gần đây về trồng hoa hồng.",
      "Tôi sẽ kiểm tra! Cảm ơn rất nhiều.",
      "Không có chi. Bây giờ— để tôi cho bạn xem phân bón của chúng tôi.",
      "Chúng ở lối đi sáu."
    ],
    "exercises": [
      [
        0,
        "Chào mừng đến với trung tâm vườn.",
        "trung tâm vườn",
        [],
        "garden center"
      ],
      [
        1,
        "Tôi có thể giúp gì cho bạn?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Chào. Tôi đã bắt đầu trồng bụi hoa hồng, và tôi nghe chúng cần chăm sóc đặc biệt.",
        "bắt đầu",
        [],
        "started"
      ],
      [
        2,
        "Chào. Tôi đã bắt đầu trồng bụi hoa hồng, và tôi nghe chúng cần chăm sóc đặc biệt.",
        "bụi hoa hồng",
        [],
        "rose bushes"
      ],
      [
        3,
        "Có sản phẩm nào bạn có thể khuyến nghị không?",
        "sản phẩm",
        [],
        "products"
      ],
      [
        4,
        "Vâng! Nhưng trước tiên, tôi muốn cho bạn xem một tài nguyên tuyệt vời trên trang web của chúng tôi.",
        "xem",
        [],
        "show"
      ],
      [
        4,
        "Vâng! Nhưng trước tiên, tôi muốn cho bạn xem một tài nguyên tuyệt vời trên trang web của chúng tôi.",
        "trang web",
        [],
        "Web site"
      ],
      [
        5,
        "Bạn đã xem blog của chúng tôi chưa?",
        "xem",
        [],
        "seen"
      ],
      [
        6,
        "Không, chưa.",
        "chưa",
        [],
        "haven't"
      ],
      [
        8,
        "Tôi sẽ kiểm tra! Cảm ơn rất nhiều.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        9,
        "Không có chi. Bây giờ— để tôi cho bạn xem phân bón của chúng tôi.",
        "xem",
        [],
        "show"
      ],
      [
        9,
        "Không có chi. Bây giờ— để tôi cho bạn xem phân bón của chúng tôi.",
        "phân bón",
        [],
        "fertilizers"
      ]
    ]
  },
  "t5-32": {
    "sentences": [
      "Chào Tariq. Bạn có thể giúp tôi một việc không?",
      "Chắc chắn rồi—việc gì vậy?",
      "Tôi sẽ gặp nhóm Gerhard lúc 10 giờ sáng để trình bày sản phẩm, và tôi cần bản sao báo cáo phân tích thị trường của bạn cho từng đại diện.",
      "Bạn không đang ở văn phòng sao?",
      "Thực ra, tôi đến sớm hôm nay, nhưng không thể làm máy photocopy hoạt động.",
      "Thật sao? Chúng ta mua nó tháng trước mà!",
      "Tôi e là vậy.",
      "Tôi vừa xuống tàu.",
      "Tôi sẽ ghé Business Express trên phố McAllister và xử lý việc đó trên đường đến văn phòng."
    ],
    "exercises": [
      [
        0,
        "Chào Tariq. Bạn có thể giúp tôi một việc không?",
        "giúp tôi một việc",
        [],
        "favor"
      ],
      [
        2,
        "Tôi sẽ gặp nhóm Gerhard lúc 10 giờ sáng để trình bày sản phẩm, và tôi cần bản sao báo cáo phân tích thị trường của bạn cho từng đại diện.",
        "gặp",
        [],
        "meeting"
      ],
      [
        2,
        "Tôi sẽ gặp nhóm Gerhard lúc 10 giờ sáng để trình bày sản phẩm, và tôi cần bản sao báo cáo phân tích thị trường của bạn cho từng đại diện.",
        "báo cáo phân tích thị trường",
        [],
        "market analysis report"
      ],
      [
        3,
        "Bạn không đang ở văn phòng sao?",
        "không",
        [],
        "Aren't"
      ],
      [
        3,
        "Bạn không đang ở văn phòng sao?",
        "văn phòng",
        [],
        "office"
      ],
      [
        4,
        "Thực ra, tôi đến sớm hôm nay, nhưng không thể làm máy photocopy hoạt động.",
        "không",
        [],
        "couldn't"
      ],
      [
        4,
        "Thực ra, tôi đến sớm hôm nay, nhưng không thể làm máy photocopy hoạt động.",
        "máy photocopy",
        [],
        "copy machine"
      ],
      [
        4,
        "Thực ra, tôi đến sớm hôm nay, nhưng không thể làm máy photocopy hoạt động.",
        "hoạt động",
        [],
        "work"
      ],
      [
        5,
        "Thật sao? Chúng ta mua nó tháng trước mà!",
        "mua",
        [],
        "bought"
      ],
      [
        6,
        "Tôi e là vậy.",
        "e",
        [],
        "afraid"
      ],
      [
        7,
        "Tôi vừa xuống tàu.",
        "tàu",
        [],
        "train"
      ],
      [
        8,
        "Tôi sẽ ghé Business Express trên phố McAllister và xử lý việc đó trên đường đến văn phòng.",
        "phố",
        [],
        "McAllister Street"
      ],
      [
        8,
        "Tôi sẽ ghé Business Express trên phố McAllister và xử lý việc đó trên đường đến văn phòng.",
        "xử lý",
        [],
        "care"
      ]
    ]
  },
  "t5-35": {
    "sentences": [
      "Delton Van Lines. Tôi có thể giúp gì cho bạn?",
      "Chào. Tôi là quản lý văn phòng tại Công ty Bảo hiểm Woodsom.",
      "Chúng tôi sẽ chuyển đến văn phòng mới vào tháng Sáu và muốn đặt dịch vụ của bạn.",
      "Chắc chắn rồi! Nhưng trước khi đặt ngày chuyển, chúng tôi cần đến vị trí hiện tại của bạn để ước tính chi phí di chuyển đồ nội thất và thiết bị.",
      "Chúng tôi có cuộc họp nhân viên sáng mai, nên không ai rảnh để hướng dẫn bạn lúc đó.",
      "Nhưng chiều mai thì được.",
      "Hoàn hảo! Đại diện của chúng tôi có thể đến lúc 2 giờ.",
      "Tôi chỉ cần biết vị trí của bạn."
    ],
    "exercises": [
      [
        0,
        "Delton Van Lines. Tôi có thể giúp gì cho bạn?",
        "giúp",
        [],
        "help"
      ],
      [
        1,
        "Chào. Tôi là quản lý văn phòng tại Công ty Bảo hiểm Woodsom.",
        "quản lý văn phòng",
        [],
        "office manager"
      ],
      [
        2,
        "Chúng tôi sẽ chuyển đến văn phòng mới vào tháng Sáu và muốn đặt dịch vụ của bạn.",
        "tháng Sáu",
        [],
        "June"
      ],
      [
        2,
        "Chúng tôi sẽ chuyển đến văn phòng mới vào tháng Sáu và muốn đặt dịch vụ của bạn.",
        "đặt",
        [],
        "book"
      ],
      [
        2,
        "Chúng tôi sẽ chuyển đến văn phòng mới vào tháng Sáu và muốn đặt dịch vụ của bạn.",
        "dịch vụ",
        [],
        "services"
      ],
      [
        3,
        "Chắc chắn rồi! Nhưng trước khi đặt ngày chuyển, chúng tôi cần đến vị trí hiện tại của bạn để ước tính chi phí di chuyển đồ nội thất và thiết bị.",
        "đặt",
        [],
        "reserve"
      ],
      [
        3,
        "Chắc chắn rồi! Nhưng trước khi đặt ngày chuyển, chúng tôi cần đến vị trí hiện tại của bạn để ước tính chi phí di chuyển đồ nội thất và thiết bị.",
        "di chuyển",
        [],
        "move"
      ],
      [
        3,
        "Chắc chắn rồi! Nhưng trước khi đặt ngày chuyển, chúng tôi cần đến vị trí hiện tại của bạn để ước tính chi phí di chuyển đồ nội thất và thiết bị.",
        "cần",
        [],
        "need to"
      ],
      [
        3,
        "Chắc chắn rồi! Nhưng trước khi đặt ngày chuyển, chúng tôi cần đến vị trí hiện tại của bạn để ước tính chi phí di chuyển đồ nội thất và thiết bị.",
        "nội thất và thiết bị",
        [],
        "furniture and equipment"
      ],
      [
        4,
        "Chúng tôi có cuộc họp nhân viên sáng mai, nên không ai rảnh để hướng dẫn bạn lúc đó.",
        "cuộc họp nhân viên",
        [],
        "staff meeting"
      ],
      [
        5,
        "Nhưng chiều mai thì được.",
        "được",
        [],
        "works"
      ],
      [
        6,
        "Hoàn hảo! Đại diện của chúng tôi có thể đến lúc 2 giờ.",
        "Đại diện",
        [],
        "representative"
      ],
      [
        7,
        "Tôi chỉ cần biết vị trí của bạn.",
        "cần",
        [],
        "need to"
      ],
      [
        7,
        "Tôi chỉ cần biết vị trí của bạn.",
        "biết",
        [],
        "know"
      ]
    ]
  },
  "t5-38": {
    "sentences": [
      "Bác sĩ MacMillan, tôi gọi từ bộ phận nhân sự.",
      "Tôi phụ trách việc onboarding của bạn, và tôi muốn xác nhận ngày bắt đầu.",
      "Là ngày 1 tháng Tư, đúng không?",
      "Đúng vậy. Đó là khi tôi sẽ tham gia đội ngũ nghiên cứu khoa học.",
      "Và như bạn có lẽ biết, tôi vẫn đang hoàn tất một bài nghiên cứu với tổ chức hiện tại.",
      "Vâng, giám đốc đã kể cho tôi.",
      "Hợp đồng của bạn bao gồm thời gian để hoàn tất các cam kết trước đó.",
      "Tôi có thể gửi nó cho bạn chiều nay."
    ],
    "exercises": [
      [
        0,
        "Bác sĩ MacMillan, tôi gọi từ bộ phận nhân sự.",
        "gọi",
        [],
        "calling"
      ],
      [
        1,
        "Tôi phụ trách việc onboarding của bạn, và tôi muốn xác nhận ngày bắt đầu.",
        "muốn",
        [],
        "wanted"
      ],
      [
        2,
        "Là ngày 1 tháng Tư, đúng không?",
        "tháng Tư",
        [],
        "April"
      ],
      [
        3,
        "Đúng vậy. Đó là khi tôi sẽ tham gia đội ngũ nghiên cứu khoa học.",
        "tham gia",
        [],
        "joining"
      ],
      [
        4,
        "Và như bạn có lẽ biết, tôi vẫn đang hoàn tất một bài nghiên cứu với tổ chức hiện tại.",
        "bài nghiên cứu",
        [],
        "research paper"
      ],
      [
        5,
        "Vâng, giám đốc đã kể cho tôi.",
        "giám đốc",
        [],
        "director"
      ],
      [
        5,
        "Vâng, giám đốc đã kể cho tôi.",
        "kể",
        [],
        "tell"
      ],
      [
        6,
        "Hợp đồng của bạn bao gồm thời gian để hoàn tất các cam kết trước đó.",
        "Hợp đồng",
        [],
        "contract"
      ],
      [
        7,
        "Tôi có thể gửi nó cho bạn chiều nay.",
        "gửi",
        [],
        "send"
      ]
    ]
  },
  "t5-41": {
    "sentences": [
      "Chúng ta gần đây nhận được nhiều đơn hàng trực tuyến cho kẹo sô cô la.",
      "Tôi vui vì thấy đơn hàng tăng, nhưng lo về việc đáp ứng nhu cầu.",
      "Chúng ta có thể hoàn tất và giao hết các đơn hàng này không?",
      "Tôi nghĩ chúng ta nên thuê thêm vài người làm việc buổi sáng.",
      "Họ có thể giúp đóng gói và vận chuyển.",
      "Bạn nghĩ sao, Rebecca?",
      "Tôi đồng ý. Tôi cũng nghĩ chúng ta nên hỏi dịch vụ giao hàng có thể lấy hàng hai lần một ngày thay vì chỉ một lần—có lẽ sáng và chiều.",
      "Tôi sẽ gọi họ hôm nay."
    ],
    "exercises": [
      [
        0,
        "Chúng ta gần đây nhận được nhiều đơn hàng trực tuyến cho kẹo sô cô la.",
        "nhận",
        [],
        "getting"
      ],
      [
        0,
        "Chúng ta gần đây nhận được nhiều đơn hàng trực tuyến cho kẹo sô cô la.",
        "đơn hàng trực tuyến",
        [],
        "online orders"
      ],
      [
        0,
        "Chúng ta gần đây nhận được nhiều đơn hàng trực tuyến cho kẹo sô cô la.",
        "kẹo sô cô la",
        [],
        "chocolate candies"
      ],
      [
        1,
        "Tôi vui vì thấy đơn hàng tăng, nhưng lo về việc đáp ứng nhu cầu.",
        "thấy",
        [],
        "see"
      ],
      [
        1,
        "Tôi vui vì thấy đơn hàng tăng, nhưng lo về việc đáp ứng nhu cầu.",
        "tăng",
        [],
        "increase"
      ],
      [
        1,
        "Tôi vui vì thấy đơn hàng tăng, nhưng lo về việc đáp ứng nhu cầu.",
        "đơn hàng",
        [],
        "orders"
      ],
      [
        2,
        "Chúng ta có thể hoàn tất và giao hết các đơn hàng này không?",
        "đơn hàng",
        [],
        "orders"
      ],
      [
        3,
        "Tôi nghĩ chúng ta nên thuê thêm vài người làm việc buổi sáng.",
        "thuê",
        [],
        "hire"
      ],
      [
        3,
        "Tôi nghĩ chúng ta nên thuê thêm vài người làm việc buổi sáng.",
        "người",
        [],
        "people"
      ],
      [
        4,
        "Họ có thể giúp đóng gói và vận chuyển.",
        "đóng gói và vận chuyển",
        [],
        "packaging and shipping"
      ],
      [
        5,
        "Bạn nghĩ sao, Rebecca?",
        "nghĩ",
        [],
        "think"
      ],
      [
        6,
        "Tôi đồng ý. Tôi cũng nghĩ chúng ta nên hỏi dịch vụ giao hàng có thể lấy hàng hai lần một ngày thay vì chỉ một lần—có lẽ sáng và chiều.",
        "hỏi",
        [],
        "ask"
      ],
      [
        6,
        "Tôi đồng ý. Tôi cũng nghĩ chúng ta nên hỏi dịch vụ giao hàng có thể lấy hàng hai lần một ngày thay vì chỉ một lần—có lẽ sáng và chiều.",
        "dịch vụ giao hàng",
        [],
        "delivery service"
      ],
      [
        6,
        "Tôi đồng ý. Tôi cũng nghĩ chúng ta nên hỏi dịch vụ giao hàng có thể lấy hàng hai lần một ngày thay vì chỉ một lần—có lẽ sáng và chiều.",
        "lấy",
        [],
        "pick up"
      ],
      [
        6,
        "Tôi đồng ý. Tôi cũng nghĩ chúng ta nên hỏi dịch vụ giao hàng có thể lấy hàng hai lần một ngày thay vì chỉ một lần—có lẽ sáng và chiều.",
        "thay vì",
        [],
        "instead of"
      ],
      [
        7,
        "Tôi sẽ gọi họ hôm nay.",
        "gọi",
        [],
        "call"
      ]
    ]
  },
  "t5-44": {
    "sentences": [
      "Tôi đã nói với anh em Mancini.",
      "Họ vừa gửi đơn hàng da của chúng ta—màu hạt dẻ.",
      "Nhưng sẽ mất thời gian để đến.",
      "Chúng ta không có đủ hàng tồn kho để hoàn tất mười đơn hàng sofa mà chúng ta nhận được vài ngày qua.",
      "Còn nhà cung cấp da địa phương mang mẫu cho chúng ta tuần trước thì sao? Chúng ta có thể hỏi họ xem có đủ cho mười sofa không.",
      "Thật lòng, tôi không ấn tượng lắm với chất lượng da của họ.",
      "Tôi thà chờ. Tôi sẽ liên lạc với khách hàng về sự chậm trễ."
    ],
    "exercises": [
      [
        0,
        "Tôi đã nói với anh em Mancini.",
        "nói",
        [],
        "spoke"
      ],
      [
        1,
        "Họ vừa gửi đơn hàng da của chúng ta—màu hạt dẻ.",
        "da",
        [],
        "leather"
      ],
      [
        1,
        "Họ vừa gửi đơn hàng da của chúng ta—màu hạt dẻ.",
        "đơn hàng",
        [],
        "order"
      ],
      [
        2,
        "Nhưng sẽ mất thời gian để đến.",
        "đến",
        [],
        "arrive"
      ],
      [
        3,
        "Chúng ta không có đủ hàng tồn kho để hoàn tất mười đơn hàng sofa mà chúng ta nhận được vài ngày qua.",
        "không",
        [],
        "don't"
      ],
      [
        3,
        "Chúng ta không có đủ hàng tồn kho để hoàn tất mười đơn hàng sofa mà chúng ta nhận được vài ngày qua.",
        "nhận được",
        [],
        "received"
      ],
      [
        4,
        "Còn nhà cung cấp da địa phương mang mẫu cho chúng ta tuần trước thì sao? Chúng ta có thể hỏi họ xem có đủ cho mười sofa không.",
        "da",
        [],
        "leather"
      ],
      [
        4,
        "Còn nhà cung cấp da địa phương mang mẫu cho chúng ta tuần trước thì sao? Chúng ta có thể hỏi họ xem có đủ cho mười sofa không.",
        "mang",
        [],
        "brought"
      ],
      [
        4,
        "Còn nhà cung cấp da địa phương mang mẫu cho chúng ta tuần trước thì sao? Chúng ta có thể hỏi họ xem có đủ cho mười sofa không.",
        "mẫu",
        [],
        "samples"
      ],
      [
        5,
        "Thật lòng, tôi không ấn tượng lắm với chất lượng da của họ.",
        "không",
        [],
        "wasn't"
      ],
      [
        5,
        "Thật lòng, tôi không ấn tượng lắm với chất lượng da của họ.",
        "da",
        [],
        "leather"
      ],
      [
        6,
        "Tôi thà chờ. Tôi sẽ liên lạc với khách hàng về sự chậm trễ.",
        "chờ",
        [],
        "wait"
      ],
      [
        6,
        "Tôi thà chờ. Tôi sẽ liên lạc với khách hàng về sự chậm trễ.",
        "khách hàng",
        [],
        "customers"
      ],
      [
        6,
        "Tôi thà chờ. Tôi sẽ liên lạc với khách hàng về sự chậm trễ.",
        "sự chậm trễ",
        [],
        "delay"
      ]
    ]
  },
  "t5-47": {
    "sentences": [
      "Cảm ơn vì đã đến, Marcos.",
      "Tôi vừa nhận kết quả từ công ty tư vấn chúng ta thuê.",
      "Họ có một số ý tưởng về cách tăng doanh số quần jeans denim xanh.",
      "Tôi hy vọng vậy. Khán giả mục tiêu của chúng ta muốn gì?",
      "Ừ, họ nghĩ đã đến lúc cập nhật thương hiệu với kiểu dáng hoặc màu sắc mới.",
      "Bạn biết đấy, cần nhiều nỗ lực để phát triển và ra mắt kiểu dáng mới.",
      "Vâng. Nhưng nếu chúng ta không làm, công ty khác sẽ làm.",
      "Bạn đúng. Tôi sẽ yêu cầu Junko đưa ra một số thiết kế mới để chúng ta xem xét."
    ],
    "exercises": [
      [
        1,
        "Tôi vừa nhận kết quả từ công ty tư vấn chúng ta thuê.",
        "kết quả",
        [],
        "results"
      ],
      [
        1,
        "Tôi vừa nhận kết quả từ công ty tư vấn chúng ta thuê.",
        "công ty tư vấn",
        [],
        "consulting firm"
      ],
      [
        1,
        "Tôi vừa nhận kết quả từ công ty tư vấn chúng ta thuê.",
        "thuê",
        [],
        "hired"
      ],
      [
        2,
        "Họ có một số ý tưởng về cách tăng doanh số quần jeans denim xanh.",
        "ý tưởng",
        [],
        "ideas"
      ],
      [
        2,
        "Họ có một số ý tưởng về cách tăng doanh số quần jeans denim xanh.",
        "tăng doanh số",
        [],
        "increase sales"
      ],
      [
        3,
        "Tôi hy vọng vậy. Khán giả mục tiêu của chúng ta muốn gì?",
        "muốn",
        [],
        "want"
      ],
      [
        4,
        "Ừ, họ nghĩ đã đến lúc cập nhật thương hiệu với kiểu dáng hoặc màu sắc mới.",
        "cập nhật",
        [],
        "updated"
      ],
      [
        4,
        "Ừ, họ nghĩ đã đến lúc cập nhật thương hiệu với kiểu dáng hoặc màu sắc mới.",
        "kiểu dáng hoặc màu sắc",
        [],
        "styles or colors"
      ],
      [
        5,
        "Bạn biết đấy, cần nhiều nỗ lực để phát triển và ra mắt kiểu dáng mới.",
        "ra mắt",
        [],
        "launch"
      ],
      [
        5,
        "Bạn biết đấy, cần nhiều nỗ lực để phát triển và ra mắt kiểu dáng mới.",
        "kiểu",
        [],
        "styles"
      ],
      [
        6,
        "Vâng. Nhưng nếu chúng ta không làm, công ty khác sẽ làm.",
        "không",
        [],
        "don't"
      ],
      [
        6,
        "Vâng. Nhưng nếu chúng ta không làm, công ty khác sẽ làm.",
        "công ty",
        [],
        "company"
      ],
      [
        7,
        "Bạn đúng. Tôi sẽ yêu cầu Junko đưa ra một số thiết kế mới để chúng ta xem xét.",
        "yêu cầu",
        [],
        "ask"
      ],
      [
        7,
        "Bạn đúng. Tôi sẽ yêu cầu Junko đưa ra một số thiết kế mới để chúng ta xem xét.",
        "thiết kế",
        [],
        "designs"
      ],
      [
        7,
        "Bạn đúng. Tôi sẽ yêu cầu Junko đưa ra một số thiết kế mới để chúng ta xem xét.",
        "xem xét",
        [],
        "consider"
      ]
    ]
  },
  "t5-50": {
    "sentences": [
      "Chào Gabriela. Cảm ơn vì đã đồng ý cập nhật cho tôi những điểm chính về cuộc thảo luận ngân sách trong cuộc họp hàng tháng.",
      "Tôi vừa về từ kỳ nghỉ và vẫn đang bắt kịp công việc.",
      "Không có gì. Đây là bản sao báo cáo.",
      "Mọi người trong hội đồng quản trị của Tennis United đều đồng ý tăng phí cho trại tennis dành cho các vận động viên trẻ.",
      "Tốt rồi. Và tại sao chúng ta lại có áo thun trong hạng mục chi phí?",
      "Mặc dù giải đấu tiếp theo diễn ra vào mùa thu, nhưng áo thun đã được đặt hàng rất sớm.",
      "Nhờ vậy chúng ta được giảm nửa giá, vì nhà cung cấp muốn thanh lý hàng tồn kho mùa hè."
    ],
    "exercises": [
      [
        0,
        "Chào Gabriela. Cảm ơn vì đã đồng ý cập nhật cho tôi những điểm chính về cuộc thảo luận ngân sách trong cuộc họp hàng tháng.",
        "cho",
        [],
        "give"
      ],
      [
        0,
        "Chào Gabriela. Cảm ơn vì đã đồng ý cập nhật cho tôi những điểm chính về cuộc thảo luận ngân sách trong cuộc họp hàng tháng.",
        "thảo luận ngân sách",
        [],
        "budget discussion"
      ],
      [
        0,
        "Chào Gabriela. Cảm ơn vì đã đồng ý cập nhật cho tôi những điểm chính về cuộc thảo luận ngân sách trong cuộc họp hàng tháng.",
        "cuộc họp",
        [],
        "meeting"
      ],
      [
        1,
        "Tôi vừa về từ kỳ nghỉ và vẫn đang bắt kịp công việc.",
        "kỳ nghỉ",
        [],
        "vacation"
      ],
      [
        2,
        "Không có gì. Đây là bản sao báo cáo.",
        "báo cáo",
        [],
        "report"
      ],
      [
        3,
        "Mọi người trong hội đồng quản trị của Tennis United đều đồng ý tăng phí cho trại tennis dành cho các vận động viên trẻ.",
        "đồng ý",
        [],
        "agreed"
      ],
      [
        3,
        "Mọi người trong hội đồng quản trị của Tennis United đều đồng ý tăng phí cho trại tennis dành cho các vận động viên trẻ.",
        "tăng",
        [],
        "increase"
      ],
      [
        4,
        "Tốt rồi. Và tại sao chúng ta lại có áo thun trong hạng mục chi phí?",
        "áo thun",
        [],
        "T-shirts"
      ],
      [
        5,
        "Mặc dù giải đấu tiếp theo diễn ra vào mùa thu, nhưng áo thun đã được đặt hàng rất sớm.",
        "áo thun",
        [],
        "T-shirts"
      ],
      [
        5,
        "Mặc dù giải đấu tiếp theo diễn ra vào mùa thu, nhưng áo thun đã được đặt hàng rất sớm.",
        "đặt hàng",
        [],
        "ordered"
      ],
      [
        6,
        "Nhờ vậy chúng ta được giảm nửa giá, vì nhà cung cấp muốn thanh lý hàng tồn kho mùa hè.",
        "muốn",
        [],
        "wanted"
      ],
      [
        6,
        "Nhờ vậy chúng ta được giảm nửa giá, vì nhà cung cấp muốn thanh lý hàng tồn kho mùa hè.",
        "hàng tồn kho",
        [],
        "inventory"
      ]
    ]
  },
  "t5-53": {
    "sentences": [
      "Mục đầu tiên trong nghị sự họp hôm nay là đề xuất của chúng ta về việc cải tạo cầu Morrisville.",
      "Chúng ta có cập nhật gì về việc đó chưa?",
      "Vâng—thật tiếc là chúng ta không trúng thầu.",
      "Vâng, lý do duy nhất được đưa ra là một công ty xây dựng khác đã nộp đề xuất với thời gian ngắn hơn.",
      "Vậy chúng ta biết gì về đối thủ này? Họ có tham gia các dự án địa phương khác không?",
      "Điều duy nhất tôi nghe được là tên của họ—Công ty Xây dựng CDQ.",
      "Ừm, tôi muốn biết thêm về họ.",
      "Hai anh có thể nghiên cứu trước cuộc họp tiếp theo không?"
    ],
    "exercises": [
      [
        0,
        "Mục đầu tiên trong nghị sự họp hôm nay là đề xuất của chúng ta về việc cải tạo cầu Morrisville.",
        "họp",
        [],
        "meeting"
      ],
      [
        0,
        "Mục đầu tiên trong nghị sự họp hôm nay là đề xuất của chúng ta về việc cải tạo cầu Morrisville.",
        "cải tạo",
        [],
        "renovate"
      ],
      [
        0,
        "Mục đầu tiên trong nghị sự họp hôm nay là đề xuất của chúng ta về việc cải tạo cầu Morrisville.",
        "cầu",
        [],
        "Bridge"
      ],
      [
        1,
        "Chúng ta có cập nhật gì về việc đó chưa?",
        "cập nhật",
        [],
        "update"
      ],
      [
        1,
        "Chúng ta có cập nhật gì về việc đó chưa?",
        "chưa",
        [],
        "yet"
      ],
      [
        2,
        "Vâng—thật tiếc là chúng ta không trúng thầu.",
        "không",
        [],
        "didn't"
      ],
      [
        3,
        "Vâng, lý do duy nhất được đưa ra là một công ty xây dựng khác đã nộp đề xuất với thời gian ngắn hơn.",
        "đưa",
        [],
        "given"
      ],
      [
        3,
        "Vâng, lý do duy nhất được đưa ra là một công ty xây dựng khác đã nộp đề xuất với thời gian ngắn hơn.",
        "công ty xây dựng",
        [],
        "construction company"
      ],
      [
        3,
        "Vâng, lý do duy nhất được đưa ra là một công ty xây dựng khác đã nộp đề xuất với thời gian ngắn hơn.",
        "nộp",
        [],
        "submitted"
      ],
      [
        5,
        "Điều duy nhất tôi nghe được là tên của họ—Công ty Xây dựng CDQ.",
        "tên",
        [],
        "name"
      ],
      [
        5,
        "Điều duy nhất tôi nghe được là tên của họ—Công ty Xây dựng CDQ.",
        "Công ty Xây dựng",
        [],
        "CDQ Construction Company"
      ],
      [
        6,
        "Ừm, tôi muốn biết thêm về họ.",
        "muốn",
        [],
        "like"
      ],
      [
        6,
        "Ừm, tôi muốn biết thêm về họ.",
        "biết",
        [],
        "know"
      ],
      [
        7,
        "Hai anh có thể nghiên cứu trước cuộc họp tiếp theo không?",
        "nghiên cứu",
        [],
        "research"
      ],
      [
        7,
        "Hai anh có thể nghiên cứu trước cuộc họp tiếp theo không?",
        "cuộc họp",
        [],
        "meeting"
      ]
    ]
  },
  "t5-56": {
    "sentences": [
      "Anh có thấy kết quả khảo sát nhân viên tháng trước đã được tổng hợp chưa? Tất cả phản hồi từ nhân viên đều sẵn sàng.",
      "Vâng, và tôi vừa xem xong các bình luận.",
      "Anh biết đấy, tôi nhận thấy một khiếu nại lặp lại nhiều lần.",
      "Kích thước phòng nghỉ quá nhỏ.",
      "Có lẽ chúng ta có thể mở rộng phòng nghỉ bằng cách phá bỏ bức tường giữa nó và phòng họp bên cạnh.",
      "Ừm, chúng ta vẫn còn tiền trong ngân sách.",
      "Vậy anh có thể liên hệ với người quen ở công ty xây dựng không?",
      "Tôi không thể làm chiều nay vì phải gặp nha sĩ, nhưng tôi chắc chắn sẽ gọi."
    ],
    "exercises": [
      [
        0,
        "Anh có thấy kết quả khảo sát nhân viên tháng trước đã được tổng hợp chưa? Tất cả phản hồi từ nhân viên đều sẵn sàng.",
        "thấy",
        [],
        "see"
      ],
      [
        0,
        "Anh có thấy kết quả khảo sát nhân viên tháng trước đã được tổng hợp chưa? Tất cả phản hồi từ nhân viên đều sẵn sàng.",
        "khảo sát nhân viên",
        [],
        "employee survey"
      ],
      [
        1,
        "Vâng, và tôi vừa xem xong các bình luận.",
        "xong",
        [],
        "finished"
      ],
      [
        2,
        "Anh biết đấy, tôi nhận thấy một khiếu nại lặp lại nhiều lần.",
        "biết",
        [],
        "know"
      ],
      [
        2,
        "Anh biết đấy, tôi nhận thấy một khiếu nại lặp lại nhiều lần.",
        "nhận thấy",
        [],
        "noticed"
      ],
      [
        3,
        "Kích thước phòng nghỉ quá nhỏ.",
        "Kích thước",
        [],
        "size"
      ],
      [
        3,
        "Kích thước phòng nghỉ quá nhỏ.",
        "phòng nghỉ",
        [],
        "break room"
      ],
      [
        3,
        "Kích thước phòng nghỉ quá nhỏ.",
        "nhỏ",
        [],
        "small"
      ],
      [
        4,
        "Có lẽ chúng ta có thể mở rộng phòng nghỉ bằng cách phá bỏ bức tường giữa nó và phòng họp bên cạnh.",
        "phòng nghỉ",
        [],
        "break room"
      ],
      [
        4,
        "Có lẽ chúng ta có thể mở rộng phòng nghỉ bằng cách phá bỏ bức tường giữa nó và phòng họp bên cạnh.",
        "bức tường",
        [],
        "wall"
      ],
      [
        5,
        "Ừm, chúng ta vẫn còn tiền trong ngân sách.",
        "ngân sách",
        [],
        "budget"
      ],
      [
        6,
        "Vậy anh có thể liên hệ với người quen ở công ty xây dựng không?",
        "liên hệ",
        [],
        "contact"
      ],
      [
        6,
        "Vậy anh có thể liên hệ với người quen ở công ty xây dựng không?",
        "công ty xây dựng",
        [],
        "construction company"
      ],
      [
        7,
        "Tôi không thể làm chiều nay vì phải gặp nha sĩ, nhưng tôi chắc chắn sẽ gọi.",
        "không",
        [],
        "can't"
      ],
      [
        7,
        "Tôi không thể làm chiều nay vì phải gặp nha sĩ, nhưng tôi chắc chắn sẽ gọi.",
        "gọi",
        [],
        "call"
      ]
    ]
  },
  "t5-59": {
    "sentences": [
      "Cảm ơn đã gọi đến Công ty Tái chế Kim loại Hang.",
      "Tôi có thể giúp gì cho anh?",
      "Chào. Tôi từ Công ty Xây dựng Shannak. Chúng tôi có nhiều phế liệu kim loại đồng từ công việc sửa chữa cải tạo gần đây.",
      "Công ty có đang mua phế liệu kim loại không?",
      "Vâng, chúng tôi đang mua. Hiện tại chúng tôi trả hai đô la một pound.",
      "Ồ, có một trung tâm tái chế khác trả hai đô la hai mươi lăm cent một pound.",
      "Công ty có sẵn lòng khớp giá đó không?",
      "Vâng, chúng tôi có chính sách khớp giá.",
      "Tuyệt vời. Vậy tôi sẽ mang kim loại đến chiều nay."
    ],
    "exercises": [
      [
        0,
        "Cảm ơn đã gọi đến Công ty Tái chế Kim loại Hang.",
        "gọi",
        [],
        "calling"
      ],
      [
        0,
        "Cảm ơn đã gọi đến Công ty Tái chế Kim loại Hang.",
        "Công ty Tái chế Kim loại",
        [],
        "Metal Recycling Company"
      ],
      [
        1,
        "Tôi có thể giúp gì cho anh?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Chào. Tôi từ Công ty Xây dựng Shannak. Chúng tôi có nhiều phế liệu kim loại đồng từ công việc sửa chữa cải tạo gần đây.",
        "Công ty Xây dựng",
        [],
        "Shannak Construction Company"
      ],
      [
        2,
        "Chào. Tôi từ Công ty Xây dựng Shannak. Chúng tôi có nhiều phế liệu kim loại đồng từ công việc sửa chữa cải tạo gần đây.",
        "có",
        [],
        "got"
      ],
      [
        3,
        "Công ty có đang mua phế liệu kim loại không?",
        "mua",
        [],
        "buying"
      ],
      [
        5,
        "Ồ, có một trung tâm tái chế khác trả hai đô la hai mươi lăm cent một pound.",
        "trung tâm tái chế",
        [],
        "recycling center"
      ],
      [
        6,
        "Công ty có sẵn lòng khớp giá đó không?",
        "giá",
        [],
        "price"
      ],
      [
        8,
        "Tuyệt vời. Vậy tôi sẽ mang kim loại đến chiều nay.",
        "mang",
        [],
        "bring"
      ]
    ]
  },
  "t5-62": {
    "sentences": [
      "Chào, tôi vừa kết thúc cuộc gọi với ban quản lý.",
      "Họ không hài lòng. Việc xây dựng đường hầm tàu hỏa không tiến triển đủ nhanh.",
      "Ừ, tôi không ngạc nhiên.",
      "Việc khoan đã hoàn tất.",
      "Vấn đề là chúng ta không thể bắt đầu lắp đặt cột chống đỡ cho đến khi có đầy đủ vật liệu cho bê tông.",
      "Vật liệu sẽ đến khi nào?",
      "Một tuần, có lẽ hai tuần.",
      "Hãy xem liệu lô hàng có thể được đẩy nhanh không.",
      "Anh có thể làm điều đó không?",
      "Chắc chắn. Tôi sẽ gọi nhà cung cấp để hỏi về việc giao sớm hơn.",
      "Trong lúc đó, tôi sẽ viết email cho ban quản lý để giải thích cách chúng ta đang cố gắng giải quyết tình hình."
    ],
    "exercises": [
      [
        0,
        "Chào, tôi vừa kết thúc cuộc gọi với ban quản lý.",
        "kết thúc",
        [],
        "got"
      ],
      [
        0,
        "Chào, tôi vừa kết thúc cuộc gọi với ban quản lý.",
        "cuộc gọi",
        [],
        "phone"
      ],
      [
        0,
        "Chào, tôi vừa kết thúc cuộc gọi với ban quản lý.",
        "ban quản lý",
        [],
        "management"
      ],
      [
        1,
        "Họ không hài lòng. Việc xây dựng đường hầm tàu hỏa không tiến triển đủ nhanh.",
        "xây dựng",
        [],
        "construction"
      ],
      [
        1,
        "Họ không hài lòng. Việc xây dựng đường hầm tàu hỏa không tiến triển đủ nhanh.",
        "đường hầm tàu hỏa",
        [],
        "train tunnel"
      ],
      [
        2,
        "Ừ, tôi không ngạc nhiên.",
        "không",
        [],
        "not"
      ],
      [
        2,
        "Ừ, tôi không ngạc nhiên.",
        "ngạc nhiên",
        [],
        "surprised"
      ],
      [
        3,
        "Việc khoan đã hoàn tất.",
        "khoan",
        [],
        "drilling"
      ],
      [
        4,
        "Vấn đề là chúng ta không thể bắt đầu lắp đặt cột chống đỡ cho đến khi có đầy đủ vật liệu cho bê tông.",
        "không",
        [],
        "can't"
      ],
      [
        4,
        "Vấn đề là chúng ta không thể bắt đầu lắp đặt cột chống đỡ cho đến khi có đầy đủ vật liệu cho bê tông.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        4,
        "Vấn đề là chúng ta không thể bắt đầu lắp đặt cột chống đỡ cho đến khi có đầy đủ vật liệu cho bê tông.",
        "lắp đặt",
        [],
        "installing"
      ],
      [
        4,
        "Vấn đề là chúng ta không thể bắt đầu lắp đặt cột chống đỡ cho đến khi có đầy đủ vật liệu cho bê tông.",
        "cột chống đỡ",
        [],
        "support columns"
      ],
      [
        5,
        "Vật liệu sẽ đến khi nào?",
        "Vật liệu",
        [],
        "materials"
      ],
      [
        5,
        "Vật liệu sẽ đến khi nào?",
        "đến",
        [],
        "get"
      ],
      [
        7,
        "Hãy xem liệu lô hàng có thể được đẩy nhanh không.",
        "xem",
        [],
        "see"
      ],
      [
        7,
        "Hãy xem liệu lô hàng có thể được đẩy nhanh không.",
        "lô hàng",
        [],
        "shipment"
      ],
      [
        9,
        "Chắc chắn. Tôi sẽ gọi nhà cung cấp để hỏi về việc giao sớm hơn.",
        "gọi",
        [],
        "call"
      ],
      [
        9,
        "Chắc chắn. Tôi sẽ gọi nhà cung cấp để hỏi về việc giao sớm hơn.",
        "nhà cung cấp",
        [],
        "supplier"
      ],
      [
        9,
        "Chắc chắn. Tôi sẽ gọi nhà cung cấp để hỏi về việc giao sớm hơn.",
        "hỏi",
        [],
        "ask"
      ],
      [
        10,
        "Trong lúc đó, tôi sẽ viết email cho ban quản lý để giải thích cách chúng ta đang cố gắng giải quyết tình hình.",
        "viết",
        [],
        "write"
      ],
      [
        10,
        "Trong lúc đó, tôi sẽ viết email cho ban quản lý để giải thích cách chúng ta đang cố gắng giải quyết tình hình.",
        "giải thích",
        [],
        "explain"
      ]
    ]
  },
  "t5-65": {
    "sentences": [
      "Thành phố vừa công bố mức phí đỗ xe mới, và chúng ta cần thảo luận về cách chúng ảnh hưởng đến dịch vụ giao đồ ăn của nhà hàng.",
      "Tôi lo chúng ta sẽ lỗ vì phải trả thêm phí đỗ xe trong lúc tài xế giao thức ăn cho khách.",
      "Ồ. Phí đỗ xe ở khu vực giao hàng chính lên đến mười lăm đô la một giờ cơ à? Đó là vấn đề lớn.",
      "Nhưng cung cấp giao hàng miễn phí sẽ thu hút nhiều khách hàng.",
      "Chúng ta có thể làm gì khác để giảm chi phí không?",
      "Chúng ta có thể bắt đầu sử dụng giao hàng bằng xe đạp khi có thể.",
      "Điều đó sẽ giúp ích.",
      "Ý hay đấy. Tôi sẽ nói chuyện với các tài xế để xem ai sẵn lòng chuyển sang giao bằng xe đạp cho khách ở gần đây không.",
      "Một số người thực sự thích tập luyện mà."
    ],
    "exercises": [
      [
        0,
        "Thành phố vừa công bố mức phí đỗ xe mới, và chúng ta cần thảo luận về cách chúng ảnh hưởng đến dịch vụ giao đồ ăn của nhà hàng.",
        "đỗ xe",
        [],
        "parking"
      ],
      [
        0,
        "Thành phố vừa công bố mức phí đỗ xe mới, và chúng ta cần thảo luận về cách chúng ảnh hưởng đến dịch vụ giao đồ ăn của nhà hàng.",
        "cần",
        [],
        "need to"
      ],
      [
        0,
        "Thành phố vừa công bố mức phí đỗ xe mới, và chúng ta cần thảo luận về cách chúng ảnh hưởng đến dịch vụ giao đồ ăn của nhà hàng.",
        "dịch vụ giao đồ ăn",
        [],
        "food delivery service"
      ],
      [
        1,
        "Tôi lo chúng ta sẽ lỗ vì phải trả thêm phí đỗ xe trong lúc tài xế giao thức ăn cho khách.",
        "đỗ xe",
        [],
        "parking"
      ],
      [
        1,
        "Tôi lo chúng ta sẽ lỗ vì phải trả thêm phí đỗ xe trong lúc tài xế giao thức ăn cho khách.",
        "giao",
        [],
        "delivery driver takes"
      ],
      [
        2,
        "Ồ. Phí đỗ xe ở khu vực giao hàng chính lên đến mười lăm đô la một giờ cơ à? Đó là vấn đề lớn.",
        "đỗ xe",
        [],
        "Parking"
      ],
      [
        2,
        "Ồ. Phí đỗ xe ở khu vực giao hàng chính lên đến mười lăm đô la một giờ cơ à? Đó là vấn đề lớn.",
        "giao hàng",
        [],
        "main delivery area"
      ],
      [
        2,
        "Ồ. Phí đỗ xe ở khu vực giao hàng chính lên đến mười lăm đô la một giờ cơ à? Đó là vấn đề lớn.",
        "giờ",
        [],
        "hour"
      ],
      [
        3,
        "Nhưng cung cấp giao hàng miễn phí sẽ thu hút nhiều khách hàng.",
        "cung cấp",
        [],
        "offering"
      ],
      [
        3,
        "Nhưng cung cấp giao hàng miễn phí sẽ thu hút nhiều khách hàng.",
        "giao hàng",
        [],
        "free delivery attracts"
      ],
      [
        4,
        "Chúng ta có thể làm gì khác để giảm chi phí không?",
        "chi phí",
        [],
        "lower expenses"
      ],
      [
        5,
        "Chúng ta có thể bắt đầu sử dụng giao hàng bằng xe đạp khi có thể.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        5,
        "Chúng ta có thể bắt đầu sử dụng giao hàng bằng xe đạp khi có thể.",
        "sử dụng",
        [],
        "using"
      ],
      [
        5,
        "Chúng ta có thể bắt đầu sử dụng giao hàng bằng xe đạp khi có thể.",
        "giao hàng bằng xe đạp",
        [],
        "bicycle delivery"
      ],
      [
        6,
        "Điều đó sẽ giúp ích.",
        "giúp",
        [],
        "help"
      ],
      [
        7,
        "Ý hay đấy. Tôi sẽ nói chuyện với các tài xế để xem ai sẵn lòng chuyển sang giao bằng xe đạp cho khách ở gần đây không.",
        "nói chuyện",
        [],
        "talk"
      ],
      [
        7,
        "Ý hay đấy. Tôi sẽ nói chuyện với các tài xế để xem ai sẵn lòng chuyển sang giao bằng xe đạp cho khách ở gần đây không.",
        "xem",
        [],
        "see"
      ],
      [
        7,
        "Ý hay đấy. Tôi sẽ nói chuyện với các tài xế để xem ai sẵn lòng chuyển sang giao bằng xe đạp cho khách ở gần đây không.",
        "giao",
        [],
        "bicycle deliveries"
      ],
      [
        8,
        "Một số người thực sự thích tập luyện mà.",
        "người",
        [],
        "people"
      ],
      [
        8,
        "Một số người thực sự thích tập luyện mà.",
        "thích",
        [],
        "like"
      ]
    ]
  },
  "t5-68": {
    "sentences": [
      "Khi khách hàng bước vào Ngân hàng Khu vực Miền Nam, tôi muốn họ cảm thấy tự tin khi giao phó tiền bạc cho chúng tôi.",
      "Như tôi đã đề cập lần gặp trước, tôi hy vọng công ty thiết kế nội thất của quý vị có thể mang lại vẻ ngoài chuyên nghiệp, bóng bẩy hơn cho sảnh của chúng tôi.",
      "Đề xuất của chúng tôi làm chính xác điều đó.",
      "Đây- hãy xem qua.",
      "Trang bìa bao gồm tóm tắt các công việc cho lần cải tạo này.",
      "Ừm. Bên cô có thực sự nghĩ chúng ta cần giếng trời không? Đó sẽ là chi phí lớn.",
      "Sảnh của các anh không có nhiều cửa sổ, nên đó là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng.",
      "Hơn nữa, các công việc cải tạo đề xuất của chúng tôi thực tế sẽ dưới ngân sách.",
      "Nếu anh lật sang trang bốn, anh sẽ thấy phân tích chi phí cụ thể."
    ],
    "exercises": [
      [
        0,
        "Khi khách hàng bước vào Ngân hàng Khu vực Miền Nam, tôi muốn họ cảm thấy tự tin khi giao phó tiền bạc cho chúng tôi.",
        "khách hàng",
        [],
        "customers walk"
      ],
      [
        0,
        "Khi khách hàng bước vào Ngân hàng Khu vực Miền Nam, tôi muốn họ cảm thấy tự tin khi giao phó tiền bạc cho chúng tôi.",
        "Ngân hàng",
        [],
        "Bank"
      ],
      [
        1,
        "Như tôi đã đề cập lần gặp trước, tôi hy vọng công ty thiết kế nội thất của quý vị có thể mang lại vẻ ngoài chuyên nghiệp, bóng bẩy hơn cho sảnh của chúng tôi.",
        "gặp",
        [],
        "met"
      ],
      [
        1,
        "Như tôi đã đề cập lần gặp trước, tôi hy vọng công ty thiết kế nội thất của quý vị có thể mang lại vẻ ngoài chuyên nghiệp, bóng bẩy hơn cho sảnh của chúng tôi.",
        "thiết kế",
        [],
        "design"
      ],
      [
        2,
        "Đề xuất của chúng tôi làm chính xác điều đó.",
        "Đề xuất",
        [],
        "proposal"
      ],
      [
        3,
        "Đây- hãy xem qua.",
        "xem",
        [],
        "look"
      ],
      [
        4,
        "Trang bìa bao gồm tóm tắt các công việc cho lần cải tạo này.",
        "Trang bìa",
        [],
        "cover page includes"
      ],
      [
        4,
        "Trang bìa bao gồm tóm tắt các công việc cho lần cải tạo này.",
        "cải tạo",
        [],
        "renovations"
      ],
      [
        5,
        "Ừm. Bên cô có thực sự nghĩ chúng ta cần giếng trời không? Đó sẽ là chi phí lớn.",
        "nghĩ",
        [],
        "think"
      ],
      [
        5,
        "Ừm. Bên cô có thực sự nghĩ chúng ta cần giếng trời không? Đó sẽ là chi phí lớn.",
        "cần",
        [],
        "need"
      ],
      [
        5,
        "Ừm. Bên cô có thực sự nghĩ chúng ta cần giếng trời không? Đó sẽ là chi phí lớn.",
        "giếng trời",
        [],
        "skylights"
      ],
      [
        6,
        "Sảnh của các anh không có nhiều cửa sổ, nên đó là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng.",
        "không",
        [],
        "aren't"
      ],
      [
        6,
        "Sảnh của các anh không có nhiều cửa sổ, nên đó là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng.",
        "cửa sổ",
        [],
        "windows"
      ],
      [
        6,
        "Sảnh của các anh không có nhiều cửa sổ, nên đó là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng.",
        "đưa",
        [],
        "bring"
      ],
      [
        6,
        "Sảnh của các anh không có nhiều cửa sổ, nên đó là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng.",
        "ánh sáng tự nhiên",
        [],
        "natural light"
      ],
      [
        7,
        "Hơn nữa, các công việc cải tạo đề xuất của chúng tôi thực tế sẽ dưới ngân sách.",
        "việc cải tạo",
        [],
        "renovations"
      ],
      [
        7,
        "Hơn nữa, các công việc cải tạo đề xuất của chúng tôi thực tế sẽ dưới ngân sách.",
        "ngân sách",
        [],
        "budget"
      ],
      [
        8,
        "Nếu anh lật sang trang bốn, anh sẽ thấy phân tích chi phí cụ thể.",
        "trang",
        [],
        "page"
      ],
      [
        8,
        "Nếu anh lật sang trang bốn, anh sẽ thấy phân tích chi phí cụ thể.",
        "thấy",
        [],
        "see"
      ],
      [
        8,
        "Nếu anh lật sang trang bốn, anh sẽ thấy phân tích chi phí cụ thể.",
        "phân tích chi phí",
        [],
        "cost breakdown"
      ]
    ]
  },
  "t6-32": {
    "sentences": [
      "Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.",
      "Tôi đoán chiến dịch quảng cáo đã bắt đầu rồi.",
      "Chiến dịch quảng cáo này ra mắt vào thời điểm tuyệt vời cho chúng ta.",
      "Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.",
      "Vẫn còn một chút tiền trong ngân sách.",
      "Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.",
      "Ý hay đấy.",
      "Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu."
    ],
    "exercises": [
      [
        0,
        "Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.",
        "thấy",
        [],
        "saw"
      ],
      [
        0,
        "Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.",
        "quảng cáo",
        [],
        "commercials"
      ],
      [
        0,
        "Tuần trước tôi thấy một trong những quảng cáo mới về công ty chúng ta trên truyền hình.",
        "công ty",
        [],
        "business"
      ],
      [
        1,
        "Tôi đoán chiến dịch quảng cáo đã bắt đầu rồi.",
        "chiến dịch quảng cáo",
        [],
        "advertising campaign"
      ],
      [
        1,
        "Tôi đoán chiến dịch quảng cáo đã bắt đầu rồi.",
        "bắt đầu",
        [],
        "launched"
      ],
      [
        2,
        "Chiến dịch quảng cáo này ra mắt vào thời điểm tuyệt vời cho chúng ta.",
        "Chiến dịch",
        [],
        "campaign's"
      ],
      [
        3,
        "Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.",
        "mùa cao điểm",
        [],
        "busy season"
      ],
      [
        3,
        "Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.",
        "bắt đầu",
        [],
        "starting"
      ],
      [
        3,
        "Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.",
        "đặt",
        [],
        "book"
      ],
      [
        3,
        "Đây là mùa cao điểm—mọi người đang bắt đầu đặt tour cho kỳ nghỉ của họ.",
        "tour",
        [],
        "tours"
      ],
      [
        4,
        "Vẫn còn một chút tiền trong ngân sách.",
        "tiền",
        [],
        "money"
      ],
      [
        4,
        "Vẫn còn một chút tiền trong ngân sách.",
        "ngân sách",
        [],
        "budget"
      ],
      [
        5,
        "Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.",
        "dùng",
        [],
        "use"
      ],
      [
        5,
        "Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.",
        "quảng cáo",
        [],
        "advertise"
      ],
      [
        5,
        "Chúng ta nên dùng nó để quảng cáo gói dịch vụ mới nhất—một chuyến khám phá khu vực nhà hát có hướng dẫn, bao gồm vé xem biểu diễn.",
        "khu vực nhà hát",
        [],
        "theater district"
      ],
      [
        6,
        "Ý hay đấy.",
        "Ý hay",
        [],
        "idea"
      ],
      [
        7,
        "Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        7,
        "Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu.",
        "chi phí",
        [],
        "cost"
      ],
      [
        7,
        "Để tôi kiểm tra xem chi phí thêm thông tin đó vào quảng cáo hiện tại là bao nhiêu.",
        "quảng cáo",
        [],
        "commercials"
      ]
    ]
  },
  "t6-35": {
    "sentences": [
      "Marcel, chúng ta đang nhận được một số khiếu nại từ khách khi họ check out.",
      "Một số người nghĩ phí đỗ xe đã bao gồm trong đặt phòng.",
      "Họ không biết phải trả tiền khi rời đi.",
      "Ồ. Nó được ghi trên xác nhận họ nhận được.",
      "Nhưng tôi sẽ bắt đầu nhắc nhở khách lúc check-in nữa.",
      "Tuyệt, cảm ơn. Ngoài ra, nhớ là đội làm cảnh quan sẽ đến tuần sau để trồng hoa mùa xuân ở lối vào sảnh.",
      "Ngoài trời bắt đầu ấm hơn rồi."
    ],
    "exercises": [
      [
        1,
        "Một số người nghĩ phí đỗ xe đã bao gồm trong đặt phòng.",
        "người",
        [],
        "people"
      ],
      [
        1,
        "Một số người nghĩ phí đỗ xe đã bao gồm trong đặt phòng.",
        "bao gồm",
        [],
        "included"
      ],
      [
        1,
        "Một số người nghĩ phí đỗ xe đã bao gồm trong đặt phòng.",
        "đặt phòng",
        [],
        "room reservation"
      ],
      [
        2,
        "Họ không biết phải trả tiền khi rời đi.",
        "không",
        [],
        "don't"
      ],
      [
        2,
        "Họ không biết phải trả tiền khi rời đi.",
        "phải",
        [],
        "have to"
      ],
      [
        2,
        "Họ không biết phải trả tiền khi rời đi.",
        "trả tiền",
        [],
        "pay"
      ],
      [
        3,
        "Ồ. Nó được ghi trên xác nhận họ nhận được.",
        "nhận được",
        [],
        "receive"
      ],
      [
        4,
        "Nhưng tôi sẽ bắt đầu nhắc nhở khách lúc check-in nữa.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        4,
        "Nhưng tôi sẽ bắt đầu nhắc nhở khách lúc check-in nữa.",
        "nhắc",
        [],
        "reminding"
      ],
      [
        5,
        "Tuyệt, cảm ơn. Ngoài ra, nhớ là đội làm cảnh quan sẽ đến tuần sau để trồng hoa mùa xuân ở lối vào sảnh.",
        "nhớ",
        [],
        "remember"
      ],
      [
        5,
        "Tuyệt, cảm ơn. Ngoài ra, nhớ là đội làm cảnh quan sẽ đến tuần sau để trồng hoa mùa xuân ở lối vào sảnh.",
        "đội làm cảnh quan",
        [],
        "landscaping crew"
      ],
      [
        5,
        "Tuyệt, cảm ơn. Ngoài ra, nhớ là đội làm cảnh quan sẽ đến tuần sau để trồng hoa mùa xuân ở lối vào sảnh.",
        "hoa mùa xuân",
        [],
        "spring flowers"
      ],
      [
        5,
        "Tuyệt, cảm ơn. Ngoài ra, nhớ là đội làm cảnh quan sẽ đến tuần sau để trồng hoa mùa xuân ở lối vào sảnh.",
        "lối vào",
        [],
        "entrance"
      ],
      [
        6,
        "Ngoài trời bắt đầu ấm hơn rồi.",
        "bắt đầu",
        [],
        "starting"
      ]
    ]
  },
  "t6-38": {
    "sentences": [
      "Polina, chúc mừng bạn được bình chọn là Y tá của Năm tại bệnh viện chúng ta.",
      "Bạn thực sự xứng đáng với vinh dự này!",
      "Cảm ơn! Nhưng tôi hơi ngại với tất cả sự chú ý này.",
      "Ồ, bạn không nên thế.",
      "Sau tất cả, bệnh nhân và đồng nghiệp của bạn đều cảm thấy bạn nên được công nhận vì những nỗ lực xuất sắc.",
      "Thực ra, tôi hy vọng bạn sẽ giúp tôi cập nhật tài liệu đào tạo cho y tá mới.",
      "Tôi rất vui được giúp! Nhân tiện, bạn có tham dự lễ trao giải tuần sau không? Tất cả người thắng cuộc của bệnh viện sẽ được chúc mừng.",
      "Tất nhiên! Tôi đang mong chờ đây."
    ],
    "exercises": [
      [
        0,
        "Polina, chúc mừng bạn được bình chọn là Y tá của Năm tại bệnh viện chúng ta.",
        "chúc mừng",
        [],
        "congratulations"
      ],
      [
        1,
        "Bạn thực sự xứng đáng với vinh dự này!",
        "xứng đáng",
        [],
        "deserve"
      ],
      [
        1,
        "Bạn thực sự xứng đáng với vinh dự này!",
        "vinh dự",
        [],
        "honor"
      ],
      [
        2,
        "Cảm ơn! Nhưng tôi hơi ngại với tất cả sự chú ý này.",
        "ngại",
        [],
        "embarrassed"
      ],
      [
        2,
        "Cảm ơn! Nhưng tôi hơi ngại với tất cả sự chú ý này.",
        "chú ý",
        [],
        "attention"
      ],
      [
        2,
        "Cảm ơn! Nhưng tôi hơi ngại với tất cả sự chú ý này.",
        "Nhưng",
        [],
        "though"
      ],
      [
        3,
        "Ồ, bạn không nên thế.",
        "không nên",
        [],
        "shouldn't"
      ],
      [
        4,
        "Sau tất cả, bệnh nhân và đồng nghiệp của bạn đều cảm thấy bạn nên được công nhận vì những nỗ lực xuất sắc.",
        "bệnh nhân",
        [],
        "patients"
      ],
      [
        4,
        "Sau tất cả, bệnh nhân và đồng nghiệp của bạn đều cảm thấy bạn nên được công nhận vì những nỗ lực xuất sắc.",
        "đồng nghiệp",
        [],
        "colleagues"
      ],
      [
        5,
        "Thực ra, tôi hy vọng bạn sẽ giúp tôi cập nhật tài liệu đào tạo cho y tá mới.",
        "cập nhật",
        [],
        "update"
      ],
      [
        5,
        "Thực ra, tôi hy vọng bạn sẽ giúp tôi cập nhật tài liệu đào tạo cho y tá mới.",
        "tài liệu đào tạo",
        [],
        "training materials"
      ],
      [
        6,
        "Tôi rất vui được giúp! Nhân tiện, bạn có tham dự lễ trao giải tuần sau không? Tất cả người thắng cuộc của bệnh viện sẽ được chúc mừng.",
        "giúp",
        [],
        "help"
      ],
      [
        7,
        "Tất nhiên! Tôi đang mong chờ đây.",
        "mong chờ",
        [],
        "looking forward to"
      ]
    ]
  },
  "t6-41": {
    "sentences": [
      "Xin chào. Tôi đang tìm một cuốn sách được liệt kê trong danh mục thư viện của quý vị, nhưng không tìm thấy trên kệ.",
      "Quý vị có thể giúp không?",
      "Xin lỗi, tôi đang giúp một khách khác qua điện thoại.",
      "Để tôi gọi một đồng nghiệp cho anh.",
      "Chào. Tôi có thể giúp gì?",
      "Tôi đang tìm sách về nghệ thuật trừu tượng tên Night Canvases.",
      "Ồ! Chúng tôi vừa nhận vài bản sao, nhưng vẫn còn trong hộp.",
      "Nếu anh quay lại ngày mai, chúng sẽ sẵn sàng để mượn."
    ],
    "exercises": [
      [
        0,
        "Xin chào. Tôi đang tìm một cuốn sách được liệt kê trong danh mục thư viện của quý vị, nhưng không tìm thấy trên kệ.",
        "cuốn sách",
        [],
        "book"
      ],
      [
        0,
        "Xin chào. Tôi đang tìm một cuốn sách được liệt kê trong danh mục thư viện của quý vị, nhưng không tìm thấy trên kệ.",
        "không",
        [],
        "can't"
      ],
      [
        0,
        "Xin chào. Tôi đang tìm một cuốn sách được liệt kê trong danh mục thư viện của quý vị, nhưng không tìm thấy trên kệ.",
        "kệ",
        [],
        "shelves"
      ],
      [
        1,
        "Quý vị có thể giúp không?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Xin lỗi, tôi đang giúp một khách khác qua điện thoại.",
        "giúp",
        [],
        "helping"
      ],
      [
        2,
        "Xin lỗi, tôi đang giúp một khách khác qua điện thoại.",
        "điện thoại",
        [],
        "phone"
      ],
      [
        3,
        "Để tôi gọi một đồng nghiệp cho anh.",
        "Để",
        [],
        "Let"
      ],
      [
        3,
        "Để tôi gọi một đồng nghiệp cho anh.",
        "gọi",
        [],
        "get"
      ],
      [
        3,
        "Để tôi gọi một đồng nghiệp cho anh.",
        "đồng nghiệp",
        [],
        "coworkers"
      ],
      [
        4,
        "Chào. Tôi có thể giúp gì?",
        "giúp",
        [],
        "help"
      ],
      [
        5,
        "Tôi đang tìm sách về nghệ thuật trừu tượng tên Night Canvases.",
        "tìm",
        [],
        "looking for"
      ],
      [
        6,
        "Ồ! Chúng tôi vừa nhận vài bản sao, nhưng vẫn còn trong hộp.",
        "nhận",
        [],
        "received"
      ],
      [
        7,
        "Nếu anh quay lại ngày mai, chúng sẽ sẵn sàng để mượn.",
        "mượn",
        [],
        "borrow"
      ]
    ]
  },
  "t6-44": {
    "sentences": [
      "Silvia, tôi vừa nghe thị trưởng sẽ tổ chức họp báo chiều nay.",
      "Bạn có thể đưa tin không? Tôi sẽ ở lễ khai trương ga tàu mới.",
      "OK, tôi sẽ tập hợp đội quay phim ngay.",
      "Hy vọng thị trưởng sẽ cung cấp chi tiết về đề xuất xây dựng trang trại gió ngoài khơi.",
      "Vâng, tôi nghe ông ấy sẽ thảo luận về đó.",
      "Có nhiều quan tâm đến năng lượng gió, nên có lẽ đây sẽ là tin chính tối nay.",
      "Hoàn hảo. Tôi sẽ hỏi thị trưởng về nguồn tài trợ cho dự án.",
      "Dân cư thành phố sẽ muốn biết tiền từ đâu."
    ],
    "exercises": [
      [
        0,
        "Silvia, tôi vừa nghe thị trưởng sẽ tổ chức họp báo chiều nay.",
        "thị trưởng",
        [],
        "city mayor"
      ],
      [
        0,
        "Silvia, tôi vừa nghe thị trưởng sẽ tổ chức họp báo chiều nay.",
        "tổ chức",
        [],
        "hold"
      ],
      [
        0,
        "Silvia, tôi vừa nghe thị trưởng sẽ tổ chức họp báo chiều nay.",
        "họp báo",
        [],
        "press conference"
      ],
      [
        1,
        "Bạn có thể đưa tin không? Tôi sẽ ở lễ khai trương ga tàu mới.",
        "khai trương",
        [],
        "opening"
      ],
      [
        1,
        "Bạn có thể đưa tin không? Tôi sẽ ở lễ khai trương ga tàu mới.",
        "ga tàu",
        [],
        "train station"
      ],
      [
        2,
        "OK, tôi sẽ tập hợp đội quay phim ngay.",
        "đội quay phim",
        [],
        "camera crew"
      ],
      [
        3,
        "Hy vọng thị trưởng sẽ cung cấp chi tiết về đề xuất xây dựng trang trại gió ngoài khơi.",
        "cung cấp",
        [],
        "provide"
      ],
      [
        3,
        "Hy vọng thị trưởng sẽ cung cấp chi tiết về đề xuất xây dựng trang trại gió ngoài khơi.",
        "xây dựng",
        [],
        "build"
      ],
      [
        3,
        "Hy vọng thị trưởng sẽ cung cấp chi tiết về đề xuất xây dựng trang trại gió ngoài khơi.",
        "trang trại gió",
        [],
        "offshore wind farm"
      ],
      [
        4,
        "Vâng, tôi nghe ông ấy sẽ thảo luận về đó.",
        "thảo luận",
        [],
        "discuss"
      ],
      [
        5,
        "Có nhiều quan tâm đến năng lượng gió, nên có lẽ đây sẽ là tin chính tối nay.",
        "năng lượng gió",
        [],
        "wind energy"
      ],
      [
        6,
        "Hoàn hảo. Tôi sẽ hỏi thị trưởng về nguồn tài trợ cho dự án.",
        "hỏi",
        [],
        "ask"
      ],
      [
        6,
        "Hoàn hảo. Tôi sẽ hỏi thị trưởng về nguồn tài trợ cho dự án.",
        "thị trưởng",
        [],
        "mayor"
      ],
      [
        6,
        "Hoàn hảo. Tôi sẽ hỏi thị trưởng về nguồn tài trợ cho dự án.",
        "nguồn tài trợ",
        [],
        "funding"
      ],
      [
        6,
        "Hoàn hảo. Tôi sẽ hỏi thị trưởng về nguồn tài trợ cho dự án.",
        "dự án",
        [],
        "project"
      ],
      [
        7,
        "Dân cư thành phố sẽ muốn biết tiền từ đâu.",
        "Dân cư",
        [],
        "city residents"
      ],
      [
        7,
        "Dân cư thành phố sẽ muốn biết tiền từ đâu.",
        "muốn",
        [],
        "want"
      ],
      [
        7,
        "Dân cư thành phố sẽ muốn biết tiền từ đâu.",
        "biết",
        [],
        "know"
      ]
    ]
  },
  "t6-47": {
    "sentences": [
      "Koji, anh không ở cuộc họp đội sáng nay.",
      "Mọi thứ ổn chứ?",
      "Tôi phải đưa xe đến thợ sửa.",
      "Tôi bỏ lỡ gì?",
      "Ồ, chúng ta nhận tin tốt.",
      "Công ty dự định thuê thêm kế toán!",
      "Hay quá! Chúng ta bận rộn hơn bao giờ hết kể từ khi làm việc với True Valley Industries.",
      "Vâng. Nhân tiện, có bài báo trên web về người sáng lập True Valley.",
      "Tôi khuyên nên đọc.",
      "Tôi chắc chắn sẽ kiểm tra."
    ],
    "exercises": [
      [
        0,
        "Koji, anh không ở cuộc họp đội sáng nay.",
        "không",
        [],
        "weren't"
      ],
      [
        0,
        "Koji, anh không ở cuộc họp đội sáng nay.",
        "đội",
        [],
        "team"
      ],
      [
        0,
        "Koji, anh không ở cuộc họp đội sáng nay.",
        "cuộc họp",
        [],
        "meeting"
      ],
      [
        2,
        "Tôi phải đưa xe đến thợ sửa.",
        "xe",
        [],
        "car"
      ],
      [
        2,
        "Tôi phải đưa xe đến thợ sửa.",
        "sửa",
        [],
        "repairs"
      ],
      [
        4,
        "Ồ, chúng ta nhận tin tốt.",
        "nhận",
        [],
        "received"
      ],
      [
        4,
        "Ồ, chúng ta nhận tin tốt.",
        "tin",
        [],
        "news"
      ],
      [
        5,
        "Công ty dự định thuê thêm kế toán!",
        "dự định",
        [],
        "planning"
      ],
      [
        5,
        "Công ty dự định thuê thêm kế toán!",
        "thuê",
        [],
        "hire"
      ],
      [
        7,
        "Vâng. Nhân tiện, có bài báo trên web về người sáng lập True Valley.",
        "bài báo",
        [],
        "article"
      ],
      [
        8,
        "Tôi khuyên nên đọc.",
        "đọc",
        [],
        "reading"
      ],
      [
        9,
        "Tôi chắc chắn sẽ kiểm tra.",
        "kiểm tra",
        [],
        "check"
      ]
    ]
  },
  "t6-50": {
    "sentences": [
      "Hãy thảo luận về chuyến dã ngoại sắp tới cho các kiến trúc sư tại công ty chúng ta.",
      "Việc lập kế hoạch thế nào rồi, Hongtai và Raya?",
      "Ừm, Khu bảo tồn Thiên nhiên Evans nói họ có thể tổ chức chuyến thám hiểm hai ngày cho chúng ta.",
      "Vâng, họ thậm chí còn cung cấp hội thảo nhiếp ảnh động vật hoang dã vào ngày thứ hai.",
      "Tôi rất hào hứng về điều đó.",
      "Ồ, nghe thú vị đấy! Bạn có biết chúng ta có thể cắm trại qua đêm trong khu bảo tồn không?",
      "Có, đó là lựa chọn.",
      "Nhưng tôi không biết liệu tất cả nhân viên có lều và thiết bị cắm trại không.",
      "Dù sao, tôi chắc chúng ta có thể thuê đủ cho mọi người.",
      "Để tôi kiểm tra."
    ],
    "exercises": [
      [
        0,
        "Hãy thảo luận về chuyến dã ngoại sắp tới cho các kiến trúc sư tại công ty chúng ta.",
        "thảo luận",
        [],
        "discuss"
      ],
      [
        0,
        "Hãy thảo luận về chuyến dã ngoại sắp tới cho các kiến trúc sư tại công ty chúng ta.",
        "kiến trúc sư",
        [],
        "architects"
      ],
      [
        1,
        "Việc lập kế hoạch thế nào rồi, Hongtai và Raya?",
        "kế hoạch",
        [],
        "planning"
      ],
      [
        2,
        "Ừm, Khu bảo tồn Thiên nhiên Evans nói họ có thể tổ chức chuyến thám hiểm hai ngày cho chúng ta.",
        "Khu bảo tồn",
        [],
        "Reserve"
      ],
      [
        2,
        "Ừm, Khu bảo tồn Thiên nhiên Evans nói họ có thể tổ chức chuyến thám hiểm hai ngày cho chúng ta.",
        "tổ chức",
        [],
        "organize"
      ],
      [
        3,
        "Vâng, họ thậm chí còn cung cấp hội thảo nhiếp ảnh động vật hoang dã vào ngày thứ hai.",
        "cung cấp",
        [],
        "offering"
      ],
      [
        3,
        "Vâng, họ thậm chí còn cung cấp hội thảo nhiếp ảnh động vật hoang dã vào ngày thứ hai.",
        "nhiếp ảnh",
        [],
        "photography"
      ],
      [
        4,
        "Tôi rất hào hứng về điều đó.",
        "hào hứng",
        [],
        "excited"
      ],
      [
        5,
        "Ồ, nghe thú vị đấy! Bạn có biết chúng ta có thể cắm trại qua đêm trong khu bảo tồn không?",
        "thú vị",
        [],
        "exciting"
      ],
      [
        5,
        "Ồ, nghe thú vị đấy! Bạn có biết chúng ta có thể cắm trại qua đêm trong khu bảo tồn không?",
        "cắm trại",
        [],
        "camp"
      ],
      [
        5,
        "Ồ, nghe thú vị đấy! Bạn có biết chúng ta có thể cắm trại qua đêm trong khu bảo tồn không?",
        "khu bảo tồn",
        [],
        "reserve"
      ],
      [
        5,
        "Ồ, nghe thú vị đấy! Bạn có biết chúng ta có thể cắm trại qua đêm trong khu bảo tồn không?",
        "qua đêm",
        [],
        "overnight"
      ],
      [
        6,
        "Có, đó là lựa chọn.",
        "lựa chọn",
        [],
        "option"
      ],
      [
        7,
        "Nhưng tôi không biết liệu tất cả nhân viên có lều và thiết bị cắm trại không.",
        "nhân viên",
        [],
        "staff"
      ],
      [
        7,
        "Nhưng tôi không biết liệu tất cả nhân viên có lều và thiết bị cắm trại không.",
        "lều",
        [],
        "tents"
      ],
      [
        7,
        "Nhưng tôi không biết liệu tất cả nhân viên có lều và thiết bị cắm trại không.",
        "thiết bị cắm trại",
        [],
        "camping equipment"
      ],
      [
        8,
        "Dù sao, tôi chắc chúng ta có thể thuê đủ cho mọi người.",
        "thuê",
        [],
        "rent"
      ],
      [
        9,
        "Để tôi kiểm tra.",
        "Để",
        [],
        "Let"
      ],
      [
        9,
        "Để tôi kiểm tra.",
        "kiểm tra",
        [],
        "look"
      ]
    ]
  },
  "t6-53": {
    "sentences": [
      "Chào bà Espinoza. Tôi là Malik từ ACC Internet Providers.",
      "Tôi đang ở nhà bà tại 88 Glassbury Avenue để lắp đặt internet.",
      "Ồ! Xin lỗi, nhưng tôi vẫn đang trên đường về nhà từ chỗ làm.",
      "Lúc này giao thông rất đông.",
      "Tôi hiểu rồi. Ừm, nhà khách hàng tiếp theo của tôi không xa lắm.",
      "Tôi có thể quay lại sau khoảng một giờ.",
      "Nghe ổn chứ?",
      "Vâng, thế thì tốt quá.",
      "Cảm ơn rất nhiều."
    ],
    "exercises": [
      [
        1,
        "Tôi đang ở nhà bà tại 88 Glassbury Avenue để lắp đặt internet.",
        "nhà",
        [],
        "residence"
      ],
      [
        1,
        "Tôi đang ở nhà bà tại 88 Glassbury Avenue để lắp đặt internet.",
        "đặt",
        [],
        "set up"
      ],
      [
        2,
        "Ồ! Xin lỗi, nhưng tôi vẫn đang trên đường về nhà từ chỗ làm.",
        "đang trên đường về nhà",
        [],
        "on my way home"
      ],
      [
        2,
        "Ồ! Xin lỗi, nhưng tôi vẫn đang trên đường về nhà từ chỗ làm.",
        "làm",
        [],
        "work"
      ],
      [
        3,
        "Lúc này giao thông rất đông.",
        "giao thông",
        [],
        "traffic"
      ],
      [
        4,
        "Tôi hiểu rồi. Ừm, nhà khách hàng tiếp theo của tôi không xa lắm.",
        "hiểu",
        [],
        "see"
      ],
      [
        4,
        "Tôi hiểu rồi. Ừm, nhà khách hàng tiếp theo của tôi không xa lắm.",
        "không",
        [],
        "isn't"
      ],
      [
        4,
        "Tôi hiểu rồi. Ừm, nhà khách hàng tiếp theo của tôi không xa lắm.",
        "xa",
        [],
        "far away"
      ],
      [
        5,
        "Tôi có thể quay lại sau khoảng một giờ.",
        "giờ",
        [],
        "hour"
      ],
      [
        6,
        "Nghe ổn chứ?",
        "Nghe",
        [],
        "sound"
      ],
      [
        7,
        "Vâng, thế thì tốt quá.",
        "thế thì",
        [],
        "that'd"
      ]
    ]
  },
  "t6-56": {
    "sentences": [
      "Klaus, anh là thành viên đội nghiên cứu đến Bắc Cực tháng trước phải không? Cho dự án mới?",
      "Vâng, tôi sẽ đi lại tháng sau.",
      "Bạn tham gia à?",
      "Vâng—Sabine không đi được, nên điều phối viên dự án yêu cầu tôi thay thế.",
      "Hay đấy, nhưng hãy chuẩn bị cho nhiệt độ lạnh giá! Tôi khuyên nên mua áo khoác sưởi ấm.",
      "Cái tôi có dùng pin, và có các yếu tố sưởi ấm bên trong vải.",
      "Tôi sẽ gửi link cửa hàng trực tuyến.",
      "Áo không đắt lắm đâu."
    ],
    "exercises": [
      [
        0,
        "Klaus, anh là thành viên đội nghiên cứu đến Bắc Cực tháng trước phải không? Cho dự án mới?",
        "dự án",
        [],
        "project"
      ],
      [
        2,
        "Bạn tham gia à?",
        "tham gia",
        [],
        "joining"
      ],
      [
        3,
        "Vâng—Sabine không đi được, nên điều phối viên dự án yêu cầu tôi thay thế.",
        "không",
        [],
        "can't"
      ],
      [
        3,
        "Vâng—Sabine không đi được, nên điều phối viên dự án yêu cầu tôi thay thế.",
        "điều phối viên dự án",
        [],
        "project coordinator"
      ],
      [
        3,
        "Vâng—Sabine không đi được, nên điều phối viên dự án yêu cầu tôi thay thế.",
        "yêu cầu",
        [],
        "asked"
      ],
      [
        4,
        "Hay đấy, nhưng hãy chuẩn bị cho nhiệt độ lạnh giá! Tôi khuyên nên mua áo khoác sưởi ấm.",
        "chuẩn bị",
        [],
        "prepare"
      ],
      [
        4,
        "Hay đấy, nhưng hãy chuẩn bị cho nhiệt độ lạnh giá! Tôi khuyên nên mua áo khoác sưởi ấm.",
        "khuyên",
        [],
        "recommend"
      ],
      [
        5,
        "Cái tôi có dùng pin, và có các yếu tố sưởi ấm bên trong vải.",
        "pin",
        [],
        "battery-operated"
      ],
      [
        5,
        "Cái tôi có dùng pin, và có các yếu tố sưởi ấm bên trong vải.",
        "vải",
        [],
        "fabric"
      ],
      [
        6,
        "Tôi sẽ gửi link cửa hàng trực tuyến.",
        "gửi",
        [],
        "send"
      ],
      [
        6,
        "Tôi sẽ gửi link cửa hàng trực tuyến.",
        "cửa hàng trực tuyến",
        [],
        "online store"
      ],
      [
        7,
        "Áo không đắt lắm đâu.",
        "không",
        [],
        "didn't"
      ]
    ]
  },
  "t6-59": {
    "sentences": [
      "Chúng ta vừa nhận đơn hàng gấp từ Great Fitness.",
      "Họ cần áo thun in tên và logo công ty ở mặt trước—chính xác 1.000 cái.",
      "Đó là đơn hàng lớn bất thường.",
      "Chúng ta chắc chắn cần một số nhân viên làm thêm giờ cho nó.",
      "Ừm, tôi không biết sẽ dễ dàng thế nào.",
      "Giờ là hè, và nhiều nhân viên hy vọng nghỉ phép.",
      "Ừm, OK. Chúng ta có thể cho họ thêm một ngày nghỉ tháng sau.",
      "Tôi vẫn lo về ba đơn hàng khác cần hoàn thành tuần này.",
      "Tôi biết, nhưng Great Fitness luôn đặt hàng từ chúng ta."
    ],
    "exercises": [
      [
        0,
        "Chúng ta vừa nhận đơn hàng gấp từ Great Fitness.",
        "đơn hàng",
        [],
        "order"
      ],
      [
        1,
        "Họ cần áo thun in tên và logo công ty ở mặt trước—chính xác 1.000 cái.",
        "áo thun",
        [],
        "T-shirts"
      ],
      [
        1,
        "Họ cần áo thun in tên và logo công ty ở mặt trước—chính xác 1.000 cái.",
        "in",
        [],
        "printed"
      ],
      [
        2,
        "Đó là đơn hàng lớn bất thường.",
        "đơn hàng",
        [],
        "order"
      ],
      [
        3,
        "Chúng ta chắc chắn cần một số nhân viên làm thêm giờ cho nó.",
        "chắc chắn",
        [],
        "definitely"
      ],
      [
        3,
        "Chúng ta chắc chắn cần một số nhân viên làm thêm giờ cho nó.",
        "cần",
        [],
        "need"
      ],
      [
        3,
        "Chúng ta chắc chắn cần một số nhân viên làm thêm giờ cho nó.",
        "nhân viên",
        [],
        "employees"
      ],
      [
        4,
        "Ừm, tôi không biết sẽ dễ dàng thế nào.",
        "không",
        [],
        "don't"
      ],
      [
        4,
        "Ừm, tôi không biết sẽ dễ dàng thế nào.",
        "biết",
        [],
        "know"
      ],
      [
        5,
        "Giờ là hè, và nhiều nhân viên hy vọng nghỉ phép.",
        "nhân viên",
        [],
        "employees"
      ],
      [
        6,
        "Ừm, OK. Chúng ta có thể cho họ thêm một ngày nghỉ tháng sau.",
        "cho",
        [],
        "offer"
      ],
      [
        6,
        "Ừm, OK. Chúng ta có thể cho họ thêm một ngày nghỉ tháng sau.",
        "thêm",
        [],
        "additional"
      ],
      [
        7,
        "Tôi vẫn lo về ba đơn hàng khác cần hoàn thành tuần này.",
        "đơn hàng",
        [],
        "orders"
      ],
      [
        7,
        "Tôi vẫn lo về ba đơn hàng khác cần hoàn thành tuần này.",
        "cần",
        [],
        "need to"
      ],
      [
        7,
        "Tôi vẫn lo về ba đơn hàng khác cần hoàn thành tuần này.",
        "hoàn thành",
        [],
        "complete"
      ],
      [
        8,
        "Tôi biết, nhưng Great Fitness luôn đặt hàng từ chúng ta.",
        "biết",
        [],
        "know"
      ]
    ]
  },
  "t6-62": {
    "sentences": [
      "Tôi mong chờ buổi tiệc kỷ niệm, Shreya.",
      "Khó tin là chúng ta kinh doanh được mười năm rồi!",
      "Tôi biết. Tối qua tôi xem qua ảnh công ty cũ.",
      "Tôi tìm thấy vài cái từ khi chúng ta mới bắt đầu và chỉ có đội ba người.",
      "Ồ. Những cái đó sẽ tuyệt để dùng cho slideshow trong lời chào mừng.",
      "Đồng ý. Nhân tiện, vì tôi sẽ đứng dậy vài lần để thông báo, tôi muốn ngồi bàn gần sân khấu nhất.",
      "Tôi sẽ đảm bảo giữ chỗ cho bạn ở đó."
    ],
    "exercises": [
      [
        0,
        "Tôi mong chờ buổi tiệc kỷ niệm, Shreya.",
        "mong chờ",
        [],
        "looking forward to"
      ],
      [
        1,
        "Khó tin là chúng ta kinh doanh được mười năm rồi!",
        "Khó",
        [],
        "hard"
      ],
      [
        1,
        "Khó tin là chúng ta kinh doanh được mười năm rồi!",
        "kinh doanh",
        [],
        "business"
      ],
      [
        2,
        "Tôi biết. Tối qua tôi xem qua ảnh công ty cũ.",
        "xem",
        [],
        "looking"
      ],
      [
        2,
        "Tôi biết. Tối qua tôi xem qua ảnh công ty cũ.",
        "ảnh",
        [],
        "photos"
      ],
      [
        3,
        "Tôi tìm thấy vài cái từ khi chúng ta mới bắt đầu và chỉ có đội ba người.",
        "tìm thấy",
        [],
        "found"
      ],
      [
        3,
        "Tôi tìm thấy vài cái từ khi chúng ta mới bắt đầu và chỉ có đội ba người.",
        "bắt đầu",
        [],
        "started"
      ],
      [
        3,
        "Tôi tìm thấy vài cái từ khi chúng ta mới bắt đầu và chỉ có đội ba người.",
        "đội",
        [],
        "team"
      ],
      [
        3,
        "Tôi tìm thấy vài cái từ khi chúng ta mới bắt đầu và chỉ có đội ba người.",
        "người",
        [],
        "people"
      ],
      [
        4,
        "Ồ. Những cái đó sẽ tuyệt để dùng cho slideshow trong lời chào mừng.",
        "dùng",
        [],
        "use"
      ],
      [
        5,
        "Đồng ý. Nhân tiện, vì tôi sẽ đứng dậy vài lần để thông báo, tôi muốn ngồi bàn gần sân khấu nhất.",
        "sân khấu",
        [],
        "stage"
      ],
      [
        6,
        "Tôi sẽ đảm bảo giữ chỗ cho bạn ở đó.",
        "giữ chỗ",
        [],
        "reserve"
      ]
    ]
  },
  "t6-65": {
    "sentences": [
      "Cảm ơn đã chờ.",
      "Tôi là Bianca. Tôi có thể giúp gì?",
      "Chào. Tôi có vé xe buýt đến Springdale sáng nay, nhưng kế hoạch thay đổi và tôi cần đổi điểm đến.",
      "Chắc chắn. Tôi có thể giúp.",
      "Cảm ơn nhiều. Tôi cần xe đến Centerton thay vì vậy.",
      "Không vấn đề. Nếu bạn mua vé xe buýt điện tử, tôi chỉ cần số xác nhận.",
      "OK, để tôi tìm email có nó."
    ],
    "exercises": [
      [
        0,
        "Cảm ơn đã chờ.",
        "chờ",
        [],
        "holding"
      ],
      [
        1,
        "Tôi là Bianca. Tôi có thể giúp gì?",
        "giúp",
        [],
        "help"
      ],
      [
        2,
        "Chào. Tôi có vé xe buýt đến Springdale sáng nay, nhưng kế hoạch thay đổi và tôi cần đổi điểm đến.",
        "vé",
        [],
        "ticket"
      ],
      [
        2,
        "Chào. Tôi có vé xe buýt đến Springdale sáng nay, nhưng kế hoạch thay đổi và tôi cần đổi điểm đến.",
        "thay đổi",
        [],
        "changed"
      ],
      [
        2,
        "Chào. Tôi có vé xe buýt đến Springdale sáng nay, nhưng kế hoạch thay đổi và tôi cần đổi điểm đến.",
        "cần",
        [],
        "need to"
      ],
      [
        3,
        "Chắc chắn. Tôi có thể giúp.",
        "giúp",
        [],
        "help"
      ],
      [
        4,
        "Cảm ơn nhiều. Tôi cần xe đến Centerton thay vì vậy.",
        "cần",
        [],
        "need"
      ],
      [
        5,
        "Không vấn đề. Nếu bạn mua vé xe buýt điện tử, tôi chỉ cần số xác nhận.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        5,
        "Không vấn đề. Nếu bạn mua vé xe buýt điện tử, tôi chỉ cần số xác nhận.",
        "mua",
        [],
        "purchased"
      ],
      [
        6,
        "OK, để tôi tìm email có nó.",
        "tìm",
        [],
        "find"
      ],
      [
        6,
        "OK, để tôi tìm email có nó.",
        "email",
        [],
        "e-mail"
      ]
    ]
  },
  "t6-68": {
    "sentences": [
      "Henderson's Electricians. Tôi có thể giúp gì?",
      "Chào. Tôi gọi vì tôi mua máy sấy quần áo vài ngày trước.",
      "Nhưng có vấn đề.",
      "Tôi không chắc hệ thống điện nhà tôi có hỗ trợ không.",
      "Ừm, để xem. Bà có thể xem bảng điện không? Nên có loạt công tắc trên đó.",
      "Chắc chắn. Chờ chút. OK.",
      "Tôi đang xem.",
      "OK. Bà có thấy không gian chưa dùng nào để lắp công tắc thêm không?",
      "Chỉ một.",
      "Tôi hiểu. Ừm, máy sấy quần áo cần hai không gian.",
      "Nên có lẽ cần lắp bảng phụ.",
      "Tin tốt là bà chỉ cần công tắc điện 60-amp để sửa vấn đề."
    ],
    "exercises": [
      [
        0,
        "Henderson's Electricians. Tôi có thể giúp gì?",
        "giúp",
        [],
        "help"
      ],
      [
        1,
        "Chào. Tôi gọi vì tôi mua máy sấy quần áo vài ngày trước.",
        "gọi",
        [],
        "calling"
      ],
      [
        1,
        "Chào. Tôi gọi vì tôi mua máy sấy quần áo vài ngày trước.",
        "mua",
        [],
        "purchased"
      ],
      [
        1,
        "Chào. Tôi gọi vì tôi mua máy sấy quần áo vài ngày trước.",
        "máy sấy quần áo",
        [],
        "clothes dryer"
      ],
      [
        2,
        "Nhưng có vấn đề.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        3,
        "Tôi không chắc hệ thống điện nhà tôi có hỗ trợ không.",
        "hỗ trợ",
        [],
        "support"
      ],
      [
        4,
        "Ừm, để xem. Bà có thể xem bảng điện không? Nên có loạt công tắc trên đó.",
        "bảng điện",
        [],
        "electric panel"
      ],
      [
        5,
        "Chắc chắn. Chờ chút. OK.",
        "Chờ",
        [],
        "Hold"
      ],
      [
        6,
        "Tôi đang xem.",
        "xem",
        [],
        "looking"
      ],
      [
        7,
        "OK. Bà có thấy không gian chưa dùng nào để lắp công tắc thêm không?",
        "thấy",
        [],
        "see"
      ],
      [
        9,
        "Tôi hiểu. Ừm, máy sấy quần áo cần hai không gian.",
        "hiểu",
        [],
        "see"
      ],
      [
        9,
        "Tôi hiểu. Ừm, máy sấy quần áo cần hai không gian.",
        "máy sấy quần áo",
        [],
        "clothes dryer"
      ],
      [
        9,
        "Tôi hiểu. Ừm, máy sấy quần áo cần hai không gian.",
        "không gian",
        [],
        "spaces"
      ],
      [
        10,
        "Nên có lẽ cần lắp bảng phụ.",
        "có lẽ",
        [],
        "likely"
      ],
      [
        10,
        "Nên có lẽ cần lắp bảng phụ.",
        "cần",
        [],
        "need to"
      ],
      [
        10,
        "Nên có lẽ cần lắp bảng phụ.",
        "lắp",
        [],
        "install"
      ],
      [
        10,
        "Nên có lẽ cần lắp bảng phụ.",
        "bảng phụ",
        [],
        "subpanel"
      ],
      [
        11,
        "Tin tốt là bà chỉ cần công tắc điện 60-amp để sửa vấn đề.",
        "Tin",
        [],
        "news"
      ],
      [
        11,
        "Tin tốt là bà chỉ cần công tắc điện 60-amp để sửa vấn đề.",
        "sửa",
        [],
        "fix"
      ]
    ]
  },
  "t7-32": {
    "sentences": [
      "Carmen, không biết cô có nhận ra không, nhưng mỗi lần cô di chuyển thì ghế văn phòng của cô lại phát ra tiếng kêu cót két.",
      "Khi văn phòng yên tĩnh thì hơi bị làm phiền đấy.",
      "Ồ! Tôi đang đeo tai nghe nên không nhận ra.",
      "Tôi sẽ đi đổi ghế này lấy một cái ở phòng họp.",
      "Cảm ơn cô đã thông cảm. Và đừng quên là đội mình đang đặt đồ ăn Thái mang về cho bữa trưa nhé.",
      "Cô muốn ăn gì không?",
      "Có chứ. Tôi muốn ăn chả giò!"
    ],
    "exercises": [
      [
        0,
        "Carmen, không biết cô có nhận ra không, nhưng mỗi lần cô di chuyển thì ghế văn phòng của cô lại phát ra tiếng kêu cót két.",
        "ghế",
        [],
        "chair"
      ],
      [
        0,
        "Carmen, không biết cô có nhận ra không, nhưng mỗi lần cô di chuyển thì ghế văn phòng của cô lại phát ra tiếng kêu cót két.",
        "di chuyển",
        [],
        "move"
      ],
      [
        1,
        "Khi văn phòng yên tĩnh thì hơi bị làm phiền đấy.",
        "văn phòng",
        [],
        "office"
      ],
      [
        2,
        "Ồ! Tôi đang đeo tai nghe nên không nhận ra.",
        "không",
        [],
        "didn't"
      ],
      [
        3,
        "Tôi sẽ đi đổi ghế này lấy một cái ở phòng họp.",
        "ghế",
        [],
        "chair"
      ],
      [
        3,
        "Tôi sẽ đi đổi ghế này lấy một cái ở phòng họp.",
        "phòng họp",
        [],
        "conference room"
      ],
      [
        4,
        "Cảm ơn cô đã thông cảm. Và đừng quên là đội mình đang đặt đồ ăn Thái mang về cho bữa trưa nhé.",
        "đừng",
        [],
        "don't"
      ],
      [
        4,
        "Cảm ơn cô đã thông cảm. Và đừng quên là đội mình đang đặt đồ ăn Thái mang về cho bữa trưa nhé.",
        "đặt",
        [],
        "ordering"
      ],
      [
        4,
        "Cảm ơn cô đã thông cảm. Và đừng quên là đội mình đang đặt đồ ăn Thái mang về cho bữa trưa nhé.",
        "mang về",
        [],
        "takeout"
      ],
      [
        4,
        "Cảm ơn cô đã thông cảm. Và đừng quên là đội mình đang đặt đồ ăn Thái mang về cho bữa trưa nhé.",
        "đồ ăn Thái",
        [],
        "Thai restaurant"
      ],
      [
        5,
        "Cô muốn ăn gì không?",
        "muốn",
        [],
        "want"
      ],
      [
        6,
        "Có chứ. Tôi muốn ăn chả giò!",
        "chả giò",
        [],
        "spring rolls"
      ]
    ]
  },
  "t7-35": {
    "sentences": [
      "Amina, cô có ít phút không? Tôi đã làm xong món mẫu mà cô yêu cầu.",
      "Cô muốn thử ngay bây giờ không?",
      "Được, giờ tôi rảnh.",
      "Tôi thấy món pasta ngon lắm.",
      "Tôi thích chút hương chanh tươi nhẹ nhàng này.",
      "Nó sẽ là một bổ sung tuyệt vời cho thực đơn mùa hè của chúng ta.",
      "Tôi đồng ý. Nhưng chúng ta không dùng chanh trong món nào khác.",
      "Tôi có nên liên lạc với nhà cung cấp rau củ quả không?",
      "Cảm ơn. Chỉ cần hỏi ông ấy nếu thêm năm kilogram chanh vào đơn hàng định kỳ thì chi phí chênh lệch bao nhiêu thôi."
    ],
    "exercises": [
      [
        0,
        "Amina, cô có ít phút không? Tôi đã làm xong món mẫu mà cô yêu cầu.",
        "xong",
        [],
        "finished"
      ],
      [
        1,
        "Cô muốn thử ngay bây giờ không?",
        "muốn",
        [],
        "like"
      ],
      [
        3,
        "Tôi thấy món pasta ngon lắm.",
        "thấy",
        [],
        "think"
      ],
      [
        4,
        "Tôi thích chút hương chanh tươi nhẹ nhàng này.",
        "thích",
        [],
        "like"
      ],
      [
        5,
        "Nó sẽ là một bổ sung tuyệt vời cho thực đơn mùa hè của chúng ta.",
        "thực đơn mùa hè",
        [],
        "summer menu"
      ],
      [
        6,
        "Tôi đồng ý. Nhưng chúng ta không dùng chanh trong món nào khác.",
        "không",
        [],
        "don't"
      ],
      [
        6,
        "Tôi đồng ý. Nhưng chúng ta không dùng chanh trong món nào khác.",
        "dùng",
        [],
        "use"
      ],
      [
        7,
        "Tôi có nên liên lạc với nhà cung cấp rau củ quả không?",
        "nhà cung cấp",
        [],
        "vegetable supplier"
      ],
      [
        8,
        "Cảm ơn. Chỉ cần hỏi ông ấy nếu thêm năm kilogram chanh vào đơn hàng định kỳ thì chi phí chênh lệch bao nhiêu thôi.",
        "hỏi",
        [],
        "ask"
      ],
      [
        8,
        "Cảm ơn. Chỉ cần hỏi ông ấy nếu thêm năm kilogram chanh vào đơn hàng định kỳ thì chi phí chênh lệch bao nhiêu thôi.",
        "chi phí",
        [],
        "cost"
      ]
    ]
  },
  "t7-38": {
    "sentences": [
      "Bác sĩ Ruiz, ngài có chút thời gian không?",
      "Có.",
      "Hình như bệnh viện còn dư một ít tiền trong ngân sách phát triển nhân viên.",
      "Ngài có nghĩ ra thứ gì để chi tiêu không? Tôi chỉ đang tìm ý tưởng thôi.",
      "Ừm, tôi rất muốn chúng ta đăng ký nhận bản tin của Prescriber Med.",
      "Có rất nhiều tóm tắt chuyên gia trong đó hữu ích cho công việc lâm sàng của tôi.",
      "Nghe hay đấy. Tôi cũng sẽ hỏi các bác sĩ khác để xem cách sử dụng quỹ này tốt nhất.",
      "Tuyệt. Nhưng tôi đề nghị gửi một cuộc khảo sát đi.",
      "Như vậy sẽ tiện hơn.",
      "Ý hay! Tôi sẽ làm thế."
    ],
    "exercises": [
      [
        2,
        "Hình như bệnh viện còn dư một ít tiền trong ngân sách phát triển nhân viên.",
        "còn",
        [],
        "left"
      ],
      [
        2,
        "Hình như bệnh viện còn dư một ít tiền trong ngân sách phát triển nhân viên.",
        "ngân sách phát triển nhân viên",
        [],
        "staff development budget"
      ],
      [
        3,
        "Ngài có nghĩ ra thứ gì để chi tiêu không? Tôi chỉ đang tìm ý tưởng thôi.",
        "chi",
        [],
        "spend"
      ],
      [
        3,
        "Ngài có nghĩ ra thứ gì để chi tiêu không? Tôi chỉ đang tìm ý tưởng thôi.",
        "tìm",
        [],
        "looking for"
      ],
      [
        3,
        "Ngài có nghĩ ra thứ gì để chi tiêu không? Tôi chỉ đang tìm ý tưởng thôi.",
        "ý tưởng",
        [],
        "ideas"
      ],
      [
        4,
        "Ừm, tôi rất muốn chúng ta đăng ký nhận bản tin của Prescriber Med.",
        "nhận",
        [],
        "get"
      ],
      [
        4,
        "Ừm, tôi rất muốn chúng ta đăng ký nhận bản tin của Prescriber Med.",
        "đăng ký",
        [],
        "subscription"
      ],
      [
        4,
        "Ừm, tôi rất muốn chúng ta đăng ký nhận bản tin của Prescriber Med.",
        "bản tin",
        [],
        "newsletter"
      ],
      [
        5,
        "Có rất nhiều tóm tắt chuyên gia trong đó hữu ích cho công việc lâm sàng của tôi.",
        "công việc",
        [],
        "work"
      ],
      [
        6,
        "Nghe hay đấy. Tôi cũng sẽ hỏi các bác sĩ khác để xem cách sử dụng quỹ này tốt nhất.",
        "hỏi",
        [],
        "ask"
      ],
      [
        6,
        "Nghe hay đấy. Tôi cũng sẽ hỏi các bác sĩ khác để xem cách sử dụng quỹ này tốt nhất.",
        "xem",
        [],
        "see"
      ],
      [
        7,
        "Tuyệt. Nhưng tôi đề nghị gửi một cuộc khảo sát đi.",
        "gửi",
        [],
        "sending"
      ],
      [
        7,
        "Tuyệt. Nhưng tôi đề nghị gửi một cuộc khảo sát đi.",
        "khảo sát",
        [],
        "survey"
      ],
      [
        7,
        "Tuyệt. Nhưng tôi đề nghị gửi một cuộc khảo sát đi.",
        "Nhưng",
        [],
        "though"
      ],
      [
        8,
        "Như vậy sẽ tiện hơn.",
        "tiện",
        [],
        "convenient"
      ],
      [
        9,
        "Ý hay! Tôi sẽ làm thế.",
        "Ý hay",
        [],
        "idea"
      ]
    ]
  },
  "t7-41": {
    "sentences": [
      "Xin chào, tôi vừa nhận được đôi giày đặt từ cửa hàng trực tuyến của quý công ty.",
      "Đẹp đấy nhưng không vừa chân.",
      "Tôi có thể gửi trả lại để được hoàn tiền không?",
      "Có ạ. Nhưng để hoàn tiền thì rất tiếc khách hàng phải tự chịu phí gửi trả.",
      "Ngược lại, nếu anh muốn đổi thì chúng tôi sẽ gửi nhãn trả hàng miễn phí.",
      "Vậy thì tôi đổi sang kích cỡ khác.",
      "Làm thế nào ạ?",
      "Tôi sẽ gửi email cho anh một đường link.",
      "Anh chỉ cần nhấp vào là sẽ được chuyển đến trang hướng dẫn đổi hàng trên website của chúng tôi."
    ],
    "exercises": [
      [
        0,
        "Xin chào, tôi vừa nhận được đôi giày đặt từ cửa hàng trực tuyến của quý công ty.",
        "nhận được",
        [],
        "received"
      ],
      [
        0,
        "Xin chào, tôi vừa nhận được đôi giày đặt từ cửa hàng trực tuyến của quý công ty.",
        "giày",
        [],
        "shoes"
      ],
      [
        0,
        "Xin chào, tôi vừa nhận được đôi giày đặt từ cửa hàng trực tuyến của quý công ty.",
        "cửa hàng trực tuyến",
        [],
        "online store"
      ],
      [
        1,
        "Đẹp đấy nhưng không vừa chân.",
        "không",
        [],
        "don't"
      ],
      [
        2,
        "Tôi có thể gửi trả lại để được hoàn tiền không?",
        "hoàn tiền",
        [],
        "refund"
      ],
      [
        3,
        "Có ạ. Nhưng để hoàn tiền thì rất tiếc khách hàng phải tự chịu phí gửi trả.",
        "hoàn tiền",
        [],
        "refund"
      ],
      [
        3,
        "Có ạ. Nhưng để hoàn tiền thì rất tiếc khách hàng phải tự chịu phí gửi trả.",
        "phải",
        [],
        "have to"
      ],
      [
        4,
        "Ngược lại, nếu anh muốn đổi thì chúng tôi sẽ gửi nhãn trả hàng miễn phí.",
        "đổi",
        [],
        "exchange"
      ],
      [
        4,
        "Ngược lại, nếu anh muốn đổi thì chúng tôi sẽ gửi nhãn trả hàng miễn phí.",
        "gửi",
        [],
        "send"
      ],
      [
        4,
        "Ngược lại, nếu anh muốn đổi thì chúng tôi sẽ gửi nhãn trả hàng miễn phí.",
        "nhãn",
        [],
        "label"
      ],
      [
        5,
        "Vậy thì tôi đổi sang kích cỡ khác.",
        "đổi",
        [],
        "exchange"
      ],
      [
        5,
        "Vậy thì tôi đổi sang kích cỡ khác.",
        "kích cỡ",
        [],
        "size"
      ],
      [
        7,
        "Tôi sẽ gửi email cho anh một đường link.",
        "email",
        [],
        "mail"
      ],
      [
        8,
        "Anh chỉ cần nhấp vào là sẽ được chuyển đến trang hướng dẫn đổi hàng trên website của chúng tôi.",
        "đổi hàng",
        [],
        "exchanges"
      ],
      [
        8,
        "Anh chỉ cần nhấp vào là sẽ được chuyển đến trang hướng dẫn đổi hàng trên website của chúng tôi.",
        "website",
        [],
        "Web site"
      ]
    ]
  },
  "t7-44": {
    "sentences": [
      "Trong podcast hôm nay, chúng ta có Gabriela Espinoza, một cựu giáo sư lịch sử chuyên về các nền văn minh cổ đại.",
      "Gần đây cô ấy đã rời trường đại học để làm công việc khác – xin kể về điều đó.",
      "À, năm ngoái một hãng phim đang sản xuất phim về các kim tự tháp nổi tiếng ở Giza.",
      "Họ cần chuyên gia về Ai Cập cổ đại và đã tìm được tôi.",
      "Giờ tôi làm cố vấn toàn thời gian cho ngành công nghiệp phim.",
      "Cô có thực sự làm việc tại phim trường không?",
      "Có. Khi có thay đổi phút chót, tôi đảm bảo những thay đổi đó chính xác về mặt lịch sử.",
      "Thực ra tuần tới tôi sẽ ở Ai Cập, đi thuyền dọc sông Nile."
    ],
    "exercises": [
      [
        1,
        "Gần đây cô ấy đã rời trường đại học để làm công việc khác – xin kể về điều đó.",
        "rời",
        [],
        "left"
      ],
      [
        1,
        "Gần đây cô ấy đã rời trường đại học để làm công việc khác – xin kể về điều đó.",
        "kể",
        [],
        "tell"
      ],
      [
        2,
        "À, năm ngoái một hãng phim đang sản xuất phim về các kim tự tháp nổi tiếng ở Giza.",
        "kim tự tháp",
        [],
        "pyramids"
      ],
      [
        3,
        "Họ cần chuyên gia về Ai Cập cổ đại và đã tìm được tôi.",
        "cần",
        [],
        "needed"
      ],
      [
        3,
        "Họ cần chuyên gia về Ai Cập cổ đại và đã tìm được tôi.",
        "tìm được",
        [],
        "found"
      ],
      [
        4,
        "Giờ tôi làm cố vấn toàn thời gian cho ngành công nghiệp phim.",
        "làm",
        [],
        "work"
      ],
      [
        4,
        "Giờ tôi làm cố vấn toàn thời gian cho ngành công nghiệp phim.",
        "toàn thời gian",
        [],
        "full"
      ],
      [
        4,
        "Giờ tôi làm cố vấn toàn thời gian cho ngành công nghiệp phim.",
        "cố vấn",
        [],
        "consultant"
      ],
      [
        4,
        "Giờ tôi làm cố vấn toàn thời gian cho ngành công nghiệp phim.",
        "ngành công nghiệp phim",
        [],
        "film industry"
      ],
      [
        5,
        "Cô có thực sự làm việc tại phim trường không?",
        "phim trường",
        [],
        "set"
      ],
      [
        7,
        "Thực ra tuần tới tôi sẽ ở Ai Cập, đi thuyền dọc sông Nile.",
        "Thực ra",
        [],
        "fact"
      ],
      [
        7,
        "Thực ra tuần tới tôi sẽ ở Ai Cập, đi thuyền dọc sông Nile.",
        "Ai Cập",
        [],
        "Egypt"
      ],
      [
        7,
        "Thực ra tuần tới tôi sẽ ở Ai Cập, đi thuyền dọc sông Nile.",
        "đi thuyền dọc",
        [],
        "sailing down"
      ],
      [
        7,
        "Thực ra tuần tới tôi sẽ ở Ai Cập, đi thuyền dọc sông Nile.",
        "sông Nile",
        [],
        "Nile River"
      ]
    ]
  },
  "t7-47": {
    "sentences": [
      "Pedro, tôi vừa đăng ký hội nghị marketing toàn quốc tháng Sáu rồi.",
      "Tôi cũng vậy. Tôi còn in chương trình có tất cả các buổi nói chuyện và hội thảo nữa.",
      "Ồ, cho tôi xem với? Tuyệt quá! Có vẻ lịch trình có nhiều khoảng nghỉ để kết nối với khách hàng tiềm năng.",
      "Đúng rồi. Thế nên đừng quên mang danh thiếp theo nhé.",
      "Em sẽ cần nhiều lắm đấy.",
      "Cảm ơn anh nhắc.",
      "Em phải đặt in thêm thôi."
    ],
    "exercises": [
      [
        0,
        "Pedro, tôi vừa đăng ký hội nghị marketing toàn quốc tháng Sáu rồi.",
        "đăng ký",
        [],
        "registered"
      ],
      [
        0,
        "Pedro, tôi vừa đăng ký hội nghị marketing toàn quốc tháng Sáu rồi.",
        "tháng Sáu",
        [],
        "June"
      ],
      [
        1,
        "Tôi cũng vậy. Tôi còn in chương trình có tất cả các buổi nói chuyện và hội thảo nữa.",
        "in",
        [],
        "printed"
      ],
      [
        1,
        "Tôi cũng vậy. Tôi còn in chương trình có tất cả các buổi nói chuyện và hội thảo nữa.",
        "nói chuyện",
        [],
        "talks"
      ],
      [
        1,
        "Tôi cũng vậy. Tôi còn in chương trình có tất cả các buổi nói chuyện và hội thảo nữa.",
        "hội thảo",
        [],
        "workshops"
      ],
      [
        2,
        "Ồ, cho tôi xem với? Tuyệt quá! Có vẻ lịch trình có nhiều khoảng nghỉ để kết nối với khách hàng tiềm năng.",
        "lịch trình",
        [],
        "schedule"
      ],
      [
        2,
        "Ồ, cho tôi xem với? Tuyệt quá! Có vẻ lịch trình có nhiều khoảng nghỉ để kết nối với khách hàng tiềm năng.",
        "khách hàng tiềm năng",
        [],
        "potential clients"
      ],
      [
        3,
        "Đúng rồi. Thế nên đừng quên mang danh thiếp theo nhé.",
        "đừng",
        [],
        "don't"
      ],
      [
        3,
        "Đúng rồi. Thế nên đừng quên mang danh thiếp theo nhé.",
        "mang",
        [],
        "bring"
      ],
      [
        3,
        "Đúng rồi. Thế nên đừng quên mang danh thiếp theo nhé.",
        "danh thiếp",
        [],
        "business cards"
      ],
      [
        4,
        "Em sẽ cần nhiều lắm đấy.",
        "cần",
        [],
        "need"
      ],
      [
        5,
        "Cảm ơn anh nhắc.",
        "nhắc",
        [],
        "reminder"
      ],
      [
        6,
        "Em phải đặt in thêm thôi.",
        "đặt in",
        [],
        "order"
      ]
    ]
  },
  "t7-50": {
    "sentences": [
      "Chúng ta cần nghĩ ra thiết kế menu mới cho nhà hàng ven biển của chúng ta.",
      "Cái gì đó đáng nhớ. Hai người có gợi ý gì không?",
      "Có lẽ chúng ta có thể dùng hình cá heo nhảy ra khỏi mặt nước.",
      "Junko, chị nghĩ sao?",
      "Ồ, em rất thích ý tưởng đó! Và nó phù hợp, vì nhà hàng của chúng ta ở bãi biển.",
      "Minoru, anh có thể làm một graphic để mọi người xem không?",
      "Tôi sẽ bắt đầu ngay lập tức.",
      "Tốt. Hy vọng chúng ta có thể hoàn tất trước hội chợ cộng đồng tháng tới"
    ],
    "exercises": [
      [
        0,
        "Chúng ta cần nghĩ ra thiết kế menu mới cho nhà hàng ven biển của chúng ta.",
        "cần",
        [],
        "need to"
      ],
      [
        0,
        "Chúng ta cần nghĩ ra thiết kế menu mới cho nhà hàng ven biển của chúng ta.",
        "thiết kế",
        [],
        "menu design"
      ],
      [
        0,
        "Chúng ta cần nghĩ ra thiết kế menu mới cho nhà hàng ven biển của chúng ta.",
        "nhà hàng",
        [],
        "seaside restaurant"
      ],
      [
        1,
        "Cái gì đó đáng nhớ. Hai người có gợi ý gì không?",
        "đáng nhớ",
        [],
        "memorable"
      ],
      [
        1,
        "Cái gì đó đáng nhớ. Hai người có gợi ý gì không?",
        "gợi ý",
        [],
        "suggestions"
      ],
      [
        2,
        "Có lẽ chúng ta có thể dùng hình cá heo nhảy ra khỏi mặt nước.",
        "dùng",
        [],
        "use"
      ],
      [
        2,
        "Có lẽ chúng ta có thể dùng hình cá heo nhảy ra khỏi mặt nước.",
        "cá heo",
        [],
        "dolphin"
      ],
      [
        3,
        "Junko, chị nghĩ sao?",
        "nghĩ",
        [],
        "think"
      ],
      [
        4,
        "Ồ, em rất thích ý tưởng đó! Và nó phù hợp, vì nhà hàng của chúng ta ở bãi biển.",
        "ý tưởng",
        [],
        "idea"
      ],
      [
        4,
        "Ồ, em rất thích ý tưởng đó! Và nó phù hợp, vì nhà hàng của chúng ta ở bãi biển.",
        "nhà hàng",
        [],
        "restaurant"
      ],
      [
        4,
        "Ồ, em rất thích ý tưởng đó! Và nó phù hợp, vì nhà hàng của chúng ta ở bãi biển.",
        "bãi biển",
        [],
        "beach"
      ],
      [
        5,
        "Minoru, anh có thể làm một graphic để mọi người xem không?",
        "xem",
        [],
        "look"
      ],
      [
        6,
        "Tôi sẽ bắt đầu ngay lập tức.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        7,
        "Tốt. Hy vọng chúng ta có thể hoàn tất trước hội chợ cộng đồng tháng tới",
        "hoàn tất",
        [],
        "finalize"
      ],
      [
        7,
        "Tốt. Hy vọng chúng ta có thể hoàn tất trước hội chợ cộng đồng tháng tới",
        "hội chợ cộng đồng",
        [],
        "community fair"
      ]
    ]
  },
  "t7-53": {
    "sentences": [
      "Xin chào. Chào mừng đến với Công viên Bang Henderson.",
      "Cuối tuần này đỗ xe miễn phí.",
      "Tốt quá! Tôi đến đây lần đầu.",
      "Anh có bản đồ đường mòn công viên không?",
      "Xin lỗi. Tôi vừa hết bản đồ.",
      "Cuối tuần này rất bận rộn.",
      "Ừm, tôi hơi lo vì không biết đường mòn.",
      "Tôi hiểu. Trung tâm du khách cách khoảng 400 mét lên đường.",
      "Ồ, tốt khi biết vậy.",
      "Cảm ơn."
    ],
    "exercises": [
      [
        0,
        "Xin chào. Chào mừng đến với Công viên Bang Henderson.",
        "Công viên Bang Henderson",
        [],
        "Henderson State Park"
      ],
      [
        1,
        "Cuối tuần này đỗ xe miễn phí.",
        "đỗ xe",
        [],
        "Parking"
      ],
      [
        1,
        "Cuối tuần này đỗ xe miễn phí.",
        "miễn phí",
        [],
        "free"
      ],
      [
        2,
        "Tốt quá! Tôi đến đây lần đầu.",
        "đến",
        [],
        "visiting"
      ],
      [
        3,
        "Anh có bản đồ đường mòn công viên không?",
        "bản đồ",
        [],
        "map"
      ],
      [
        4,
        "Xin lỗi. Tôi vừa hết bản đồ.",
        "hết",
        [],
        "ran out of"
      ],
      [
        4,
        "Xin lỗi. Tôi vừa hết bản đồ.",
        "bản đồ",
        [],
        "maps"
      ],
      [
        5,
        "Cuối tuần này rất bận rộn.",
        "Cuối tuần này rất bận rộn",
        [],
        "busy weekend"
      ],
      [
        6,
        "Ừm, tôi hơi lo vì không biết đường mòn.",
        "lo",
        [],
        "concerned"
      ],
      [
        6,
        "Ừm, tôi hơi lo vì không biết đường mòn.",
        "không",
        [],
        "don't"
      ],
      [
        6,
        "Ừm, tôi hơi lo vì không biết đường mòn.",
        "biết",
        [],
        "know"
      ],
      [
        7,
        "Tôi hiểu. Trung tâm du khách cách khoảng 400 mét lên đường.",
        "Trung tâm du khách",
        [],
        "visitor center"
      ],
      [
        7,
        "Tôi hiểu. Trung tâm du khách cách khoảng 400 mét lên đường.",
        "đường",
        [],
        "road"
      ],
      [
        8,
        "Ồ, tốt khi biết vậy.",
        "biết",
        [],
        "know"
      ]
    ]
  },
  "t7-56": {
    "sentences": [
      "Chào buổi sáng, Thị trưởng Ishikawa.",
      "Tôi vui vì ông có thể tham gia cùng bà Schneider và tôi trong buổi lễ khi chúng ta bắt đầu bước quan trọng đầu tiên—phá dỡ tòa nhà.",
      "Rất vui khi có mặt ở đây.",
      "Thành phố đánh giá cao sự tham gia của công ty ông vào dự án này.",
      "Rất hân hạnh. TJO Property hào hứng đầu tư vào cộng đồng này một cách đáng kể.",
      "Đúng vậy. Và phá dỡ trung tâm mua sắm cũ này sẽ cho chúng ta không gian để tạo dự án sử dụng hỗn hợp gồm căn hộ, cửa hàng và văn phòng.",
      "Cư dân cộng đồng đang mong chờ sự phát triển mới.",
      "Chắc chắn rồi. Vì báo chí ở đây, chúng ta có nên tạo dáng chụp ảnh trước quả bóng phá dỡ trước khi công việc bắt đầu không?"
    ],
    "exercises": [
      [
        0,
        "Chào buổi sáng, Thị trưởng Ishikawa.",
        "Thị trưởng",
        [],
        "Mayor Ishikawa"
      ],
      [
        1,
        "Tôi vui vì ông có thể tham gia cùng bà Schneider và tôi trong buổi lễ khi chúng ta bắt đầu bước quan trọng đầu tiên—phá dỡ tòa nhà.",
        "tham gia",
        [],
        "join"
      ],
      [
        1,
        "Tôi vui vì ông có thể tham gia cùng bà Schneider và tôi trong buổi lễ khi chúng ta bắt đầu bước quan trọng đầu tiên—phá dỡ tòa nhà.",
        "tòa nhà",
        [],
        "building"
      ],
      [
        3,
        "Thành phố đánh giá cao sự tham gia của công ty ông vào dự án này.",
        "đánh giá cao",
        [],
        "city appreciates"
      ],
      [
        3,
        "Thành phố đánh giá cao sự tham gia của công ty ông vào dự án này.",
        "dự án",
        [],
        "project"
      ],
      [
        5,
        "Đúng vậy. Và phá dỡ trung tâm mua sắm cũ này sẽ cho chúng ta không gian để tạo dự án sử dụng hỗn hợp gồm căn hộ, cửa hàng và văn phòng.",
        "trung tâm mua sắm",
        [],
        "shopping center"
      ],
      [
        5,
        "Đúng vậy. Và phá dỡ trung tâm mua sắm cũ này sẽ cho chúng ta không gian để tạo dự án sử dụng hỗn hợp gồm căn hộ, cửa hàng và văn phòng.",
        "cho",
        [],
        "give"
      ],
      [
        5,
        "Đúng vậy. Và phá dỡ trung tâm mua sắm cũ này sẽ cho chúng ta không gian để tạo dự án sử dụng hỗn hợp gồm căn hộ, cửa hàng và văn phòng.",
        "sử dụng",
        [],
        "use"
      ],
      [
        6,
        "Cư dân cộng đồng đang mong chờ sự phát triển mới.",
        "Cư dân",
        [],
        "Community residents"
      ],
      [
        6,
        "Cư dân cộng đồng đang mong chờ sự phát triển mới.",
        "mong chờ",
        [],
        "looking forward to"
      ],
      [
        7,
        "Chắc chắn rồi. Vì báo chí ở đây, chúng ta có nên tạo dáng chụp ảnh trước quả bóng phá dỡ trước khi công việc bắt đầu không?",
        "ảnh",
        [],
        "photograph"
      ],
      [
        7,
        "Chắc chắn rồi. Vì báo chí ở đây, chúng ta có nên tạo dáng chụp ảnh trước quả bóng phá dỡ trước khi công việc bắt đầu không?",
        "bắt đầu",
        [],
        "begins"
      ]
    ]
  },
  "t7-59": {
    "sentences": [
      "Chào mừng đến với Schmidt's. Chị quan tâm đến cây treo của chúng tôi không? Tôi vui lòng giúp chị chọn.",
      "Vâng! Tôi nhận phiếu giảm giá này qua thư cho 15% giảm bất kỳ cây ngoài trời nào.",
      "Nên tôi nghĩ xem chị có giỏ hoa nào tôi có thể treo ở khu vực patio sau nhà không.",
      "Những cây ở đây nở hoa đẹp và tốt nhất dưới ánh nắng trực tiếp.",
      "Ừm, đó là patio có mái che.",
      "OK. Chỉ cần theo tôi.",
      "Chúng tôi có nhiều cây tốt trong bóng râm hoặc nắng một phần."
    ],
    "exercises": [
      [
        0,
        "Chào mừng đến với Schmidt's. Chị quan tâm đến cây treo của chúng tôi không? Tôi vui lòng giúp chị chọn.",
        "cây treo",
        [],
        "hanging plants"
      ],
      [
        0,
        "Chào mừng đến với Schmidt's. Chị quan tâm đến cây treo của chúng tôi không? Tôi vui lòng giúp chị chọn.",
        "chọn",
        [],
        "choose"
      ],
      [
        1,
        "Vâng! Tôi nhận phiếu giảm giá này qua thư cho 15% giảm bất kỳ cây ngoài trời nào.",
        "phiếu giảm giá",
        [],
        "coupon"
      ],
      [
        1,
        "Vâng! Tôi nhận phiếu giảm giá này qua thư cho 15% giảm bất kỳ cây ngoài trời nào.",
        "thư",
        [],
        "mail"
      ],
      [
        1,
        "Vâng! Tôi nhận phiếu giảm giá này qua thư cho 15% giảm bất kỳ cây ngoài trời nào.",
        "cây",
        [],
        "plants"
      ],
      [
        2,
        "Nên tôi nghĩ xem chị có giỏ hoa nào tôi có thể treo ở khu vực patio sau nhà không.",
        "nghĩ",
        [],
        "thought"
      ],
      [
        2,
        "Nên tôi nghĩ xem chị có giỏ hoa nào tôi có thể treo ở khu vực patio sau nhà không.",
        "xem",
        [],
        "see"
      ],
      [
        2,
        "Nên tôi nghĩ xem chị có giỏ hoa nào tôi có thể treo ở khu vực patio sau nhà không.",
        "khu vực",
        [],
        "patio area"
      ],
      [
        3,
        "Những cây ở đây nở hoa đẹp và tốt nhất dưới ánh nắng trực tiếp.",
        "cây",
        [],
        "plants"
      ],
      [
        3,
        "Những cây ở đây nở hoa đẹp và tốt nhất dưới ánh nắng trực tiếp.",
        "nở hoa",
        [],
        "bloom"
      ],
      [
        5,
        "OK. Chỉ cần theo tôi.",
        "theo",
        [],
        "follow"
      ],
      [
        6,
        "Chúng tôi có nhiều cây tốt trong bóng râm hoặc nắng một phần.",
        "cây",
        [],
        "plants"
      ]
    ]
  },
  "t7-62": {
    "sentences": [
      "Này Pablo. Tôi bỏ lỡ cập nhật sáng đội thực tập.",
      "Có thông tin về làm sạch ống nghiệm acrylic không? Tôi tự hỏi có hướng dẫn cụ thể cho những cái này so với ống thủy tinh không.",
      "Cô nên kiểm tra sổ tay lab thực tập—Tôi nghĩ nó được cập nhật tuần này với hướng dẫn từng bước.",
      "Ý hay! Anh biết không, điều tôi thích nhất đến nay là học về khía cạnh thực tế của công việc.",
      "Nhưng tôi ước chúng ta có thể bắt đầu làm việc cùng các nhà nghiên cứu ở đây.",
      "Giáo sư Kwon sẽ chỉ chúng ta cách phân tích dữ liệu sau hôm nay.",
      "Bà ấy thường yêu cầu thực tập sinh tham gia."
    ],
    "exercises": [
      [
        0,
        "Này Pablo. Tôi bỏ lỡ cập nhật sáng đội thực tập.",
        "cập nhật",
        [],
        "update"
      ],
      [
        1,
        "Có thông tin về làm sạch ống nghiệm acrylic không? Tôi tự hỏi có hướng dẫn cụ thể cho những cái này so với ống thủy tinh không.",
        "làm sạch",
        [],
        "cleaning"
      ],
      [
        1,
        "Có thông tin về làm sạch ống nghiệm acrylic không? Tôi tự hỏi có hướng dẫn cụ thể cho những cái này so với ống thủy tinh không.",
        "ống nghiệm acrylic",
        [],
        "acrylic test tubes"
      ],
      [
        1,
        "Có thông tin về làm sạch ống nghiệm acrylic không? Tôi tự hỏi có hướng dẫn cụ thể cho những cái này so với ống thủy tinh không.",
        "hướng dẫn",
        [],
        "specific guidelines"
      ],
      [
        2,
        "Cô nên kiểm tra sổ tay lab thực tập—Tôi nghĩ nó được cập nhật tuần này với hướng dẫn từng bước.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        2,
        "Cô nên kiểm tra sổ tay lab thực tập—Tôi nghĩ nó được cập nhật tuần này với hướng dẫn từng bước.",
        "cập nhật",
        [],
        "updated"
      ],
      [
        3,
        "Ý hay! Anh biết không, điều tôi thích nhất đến nay là học về khía cạnh thực tế của công việc.",
        "thích",
        [],
        "enjoying"
      ],
      [
        3,
        "Ý hay! Anh biết không, điều tôi thích nhất đến nay là học về khía cạnh thực tế của công việc.",
        "học",
        [],
        "learning"
      ],
      [
        4,
        "Nhưng tôi ước chúng ta có thể bắt đầu làm việc cùng các nhà nghiên cứu ở đây.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        5,
        "Giáo sư Kwon sẽ chỉ chúng ta cách phân tích dữ liệu sau hôm nay.",
        "phân tích dữ liệu",
        [],
        "analyze data"
      ],
      [
        6,
        "Bà ấy thường yêu cầu thực tập sinh tham gia.",
        "yêu cầu",
        [],
        "asks"
      ]
    ]
  },
  "t7-65": {
    "sentences": [
      "Chào Farida. Tôi hào hứng xem các thiết kế cô tạo.",
      "Mọi người dành nhiều thời gian ngoài trời mùa hè, nên chúng ta muốn đưa kem chống nắng lên kệ trước cao điểm hè.",
      "Chúng ta cần chọn thiết kế logo nhanh.",
      "Xem các thiết kế logo này.",
      "Tất cả sẽ thu hút sự chú ý của người mua sắm.",
      "Tôi thích cái có cây cọ trong vòng tròn.",
      "Tôi đồng ý. Cây cọ đơn giản là logo sạch sẽ.",
      "Trước khi quyết định, tôi muốn cho nhóm tập trung đại diện khán giả mục tiêu xem.",
      "Chúng ta có nhóm lớn đến tuần tới."
    ],
    "exercises": [
      [
        0,
        "Chào Farida. Tôi hào hứng xem các thiết kế cô tạo.",
        "hào hứng",
        [],
        "excited"
      ],
      [
        0,
        "Chào Farida. Tôi hào hứng xem các thiết kế cô tạo.",
        "xem",
        [],
        "see"
      ],
      [
        0,
        "Chào Farida. Tôi hào hứng xem các thiết kế cô tạo.",
        "các thiết kế",
        [],
        "designs"
      ],
      [
        1,
        "Mọi người dành nhiều thời gian ngoài trời mùa hè, nên chúng ta muốn đưa kem chống nắng lên kệ trước cao điểm hè.",
        "dành",
        [],
        "spend"
      ],
      [
        1,
        "Mọi người dành nhiều thời gian ngoài trời mùa hè, nên chúng ta muốn đưa kem chống nắng lên kệ trước cao điểm hè.",
        "kem chống nắng",
        [],
        "sunscreen"
      ],
      [
        2,
        "Chúng ta cần chọn thiết kế logo nhanh.",
        "cần",
        [],
        "need to"
      ],
      [
        2,
        "Chúng ta cần chọn thiết kế logo nhanh.",
        "thiết kế",
        [],
        "design"
      ],
      [
        3,
        "Xem các thiết kế logo này.",
        "Xem",
        [],
        "look"
      ],
      [
        3,
        "Xem các thiết kế logo này.",
        "các thiết kế",
        [],
        "logo designs"
      ],
      [
        4,
        "Tất cả sẽ thu hút sự chú ý của người mua sắm.",
        "chú ý",
        [],
        "attention"
      ],
      [
        5,
        "Tôi thích cái có cây cọ trong vòng tròn.",
        "thích",
        [],
        "like"
      ],
      [
        5,
        "Tôi thích cái có cây cọ trong vòng tròn.",
        "cây cọ",
        [],
        "palm tree"
      ],
      [
        6,
        "Tôi đồng ý. Cây cọ đơn giản là logo sạch sẽ.",
        "Cây cọ",
        [],
        "palm tree"
      ],
      [
        7,
        "Trước khi quyết định, tôi muốn cho nhóm tập trung đại diện khán giả mục tiêu xem.",
        "xem",
        [],
        "show"
      ],
      [
        7,
        "Trước khi quyết định, tôi muốn cho nhóm tập trung đại diện khán giả mục tiêu xem.",
        "nhóm tập trung",
        [],
        "focus group"
      ],
      [
        8,
        "Chúng ta có nhóm lớn đến tuần tới.",
        "nhóm lớn",
        [],
        "large group"
      ]
    ]
  },
  "t7-68": {
    "sentences": [
      "Stefan, anh đã nghĩ thêm về mảnh đất có sẵn cho thuê chưa? Nếu thuê, chúng ta sẽ có không gian cho nhiều cây trồng hơn mùa xuân và hè này.",
      "Có, với không gian trồng thêm, chúng ta chắc chắn tăng năng suất.",
      "Anh nghĩ cây trồng nào tốt nhất?",
      "Ừm, chúng ta có thể trồng thêm cần tây, là cây trồng phổ biến nhất.",
      "Và thậm chí thêm bắp cải làm cây mới mùa xuân.",
      "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
      "Tôi có thể gọi Lynden Ag Supply để lấy ước tính.",
      "Chắc chắn, tốt lắm."
    ],
    "exercises": [
      [
        0,
        "Stefan, anh đã nghĩ thêm về mảnh đất có sẵn cho thuê chưa? Nếu thuê, chúng ta sẽ có không gian cho nhiều cây trồng hơn mùa xuân và hè này.",
        "nghĩ",
        [],
        "thought"
      ],
      [
        1,
        "Có, với không gian trồng thêm, chúng ta chắc chắn tăng năng suất.",
        "chắc chắn",
        [],
        "definitely"
      ],
      [
        1,
        "Có, với không gian trồng thêm, chúng ta chắc chắn tăng năng suất.",
        "tăng",
        [],
        "increase"
      ],
      [
        2,
        "Anh nghĩ cây trồng nào tốt nhất?",
        "nghĩ",
        [],
        "think"
      ],
      [
        3,
        "Ừm, chúng ta có thể trồng thêm cần tây, là cây trồng phổ biến nhất.",
        "cây",
        [],
        "plant"
      ],
      [
        3,
        "Ừm, chúng ta có thể trồng thêm cần tây, là cây trồng phổ biến nhất.",
        "cần tây",
        [],
        "celery"
      ],
      [
        4,
        "Và thậm chí thêm bắp cải làm cây mới mùa xuân.",
        "thêm",
        [],
        "add"
      ],
      [
        4,
        "Và thậm chí thêm bắp cải làm cây mới mùa xuân.",
        "bắp cải",
        [],
        "cabbage"
      ],
      [
        5,
        "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
        "Hợp lý",
        [],
        "sense"
      ],
      [
        5,
        "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
        "cần",
        [],
        "need to"
      ],
      [
        5,
        "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
        "mở rộng",
        [],
        "extend"
      ],
      [
        5,
        "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
        "hệ thống tưới",
        [],
        "irrigation system"
      ],
      [
        5,
        "Hợp lý. Nhưng chúng ta cần mở rộng hệ thống tưới đến mảnh mới, và có thể đắt.",
        "mảnh",
        [],
        "parcel"
      ],
      [
        6,
        "Tôi có thể gọi Lynden Ag Supply để lấy ước tính.",
        "gọi",
        [],
        "call"
      ]
    ]
  },
  "t8-32": {
    "sentences": [
      "Luca, sau khi chúng ta hoàn thành việc nối lại điện trong phòng này, khách hàng hỏi liệu chúng ta có thể sửa đèn trần trong bếp không.",
      "Nó thỉnh thoảng chớp tắt.",
      "Hmm. Tôi biết đèn nào bạn đang nói, và thiết bị đó thực sự cũ rồi.",
      "Tốt hơn nên thay thế nó.",
      "Tôi đồng ý- sửa chữa thì không đáng.",
      "Tôi có catalog thiết bị trong xe tải.",
      "Để tôi đi lấy để chúng ta có thể cho khách hàng xem."
    ],
    "exercises": [
      [
        0,
        "Luca, sau khi chúng ta hoàn thành việc nối lại điện trong phòng này, khách hàng hỏi liệu chúng ta có thể sửa đèn trần trong bếp không.",
        "hỏi",
        [],
        "asked"
      ],
      [
        0,
        "Luca, sau khi chúng ta hoàn thành việc nối lại điện trong phòng này, khách hàng hỏi liệu chúng ta có thể sửa đèn trần trong bếp không.",
        "sửa",
        [],
        "fix"
      ],
      [
        0,
        "Luca, sau khi chúng ta hoàn thành việc nối lại điện trong phòng này, khách hàng hỏi liệu chúng ta có thể sửa đèn trần trong bếp không.",
        "đèn trần",
        [],
        "ceiling light"
      ],
      [
        1,
        "Nó thỉnh thoảng chớp tắt.",
        "chớp tắt",
        [],
        "flickers"
      ],
      [
        2,
        "Hmm. Tôi biết đèn nào bạn đang nói, và thiết bị đó thực sự cũ rồi.",
        "nói",
        [],
        "talking"
      ],
      [
        3,
        "Tốt hơn nên thay thế nó.",
        "Tốt hơn",
        [],
        "better"
      ],
      [
        3,
        "Tốt hơn nên thay thế nó.",
        "thay thế",
        [],
        "replace"
      ],
      [
        4,
        "Tôi đồng ý- sửa chữa thì không đáng.",
        "không",
        [],
        "wouldn't"
      ],
      [
        4,
        "Tôi đồng ý- sửa chữa thì không đáng.",
        "sửa chữa",
        [],
        "repairing"
      ],
      [
        5,
        "Tôi có catalog thiết bị trong xe tải.",
        "xe tải",
        [],
        "truck"
      ],
      [
        6,
        "Để tôi đi lấy để chúng ta có thể cho khách hàng xem.",
        "xem",
        [],
        "show"
      ],
      [
        6,
        "Để tôi đi lấy để chúng ta có thể cho khách hàng xem.",
        "khách hàng",
        [],
        "client"
      ]
    ]
  },
  "t8-35": {
    "sentences": [
      "Này Silvia. Bạn có để cửa tủ lạnh trong phòng thí nghiệm mở sáng nay không?",
      "Không, tôi vừa đến lab.",
      "Tôi chưa mở tủ lạnh.",
      "Sao vậy?",
      "Ừm, nhiệt độ lệch vài độ.",
      "Chúng ta vừa mua tủ lạnh đó tháng trước, nên nó hẳn phải hoạt động bình thường.",
      "Ồ, tôi hiểu. Tôi sẽ làm việc muộn tối nay.",
      "Bạn có muốn tôi kiểm tra nhiệt độ mỗi vài giờ không?",
      "Không sao. Tôi có thể giám sát từ nhà bằng smartphone.",
      "Dù sao cũng cảm ơn cô."
    ],
    "exercises": [
      [
        0,
        "Này Silvia. Bạn có để cửa tủ lạnh trong phòng thí nghiệm mở sáng nay không?",
        "tủ lạnh",
        [],
        "refrigerator"
      ],
      [
        0,
        "Này Silvia. Bạn có để cửa tủ lạnh trong phòng thí nghiệm mở sáng nay không?",
        "mở",
        [],
        "open"
      ],
      [
        1,
        "Không, tôi vừa đến lab.",
        "đến",
        [],
        "arrived"
      ],
      [
        2,
        "Tôi chưa mở tủ lạnh.",
        "chưa",
        [],
        "haven't"
      ],
      [
        2,
        "Tôi chưa mở tủ lạnh.",
        "mở",
        [],
        "opened"
      ],
      [
        2,
        "Tôi chưa mở tủ lạnh.",
        "tủ lạnh",
        [],
        "refrigerator"
      ],
      [
        4,
        "Ừm, nhiệt độ lệch vài độ.",
        "nhiệt độ",
        [],
        "temperature"
      ],
      [
        5,
        "Chúng ta vừa mua tủ lạnh đó tháng trước, nên nó hẳn phải hoạt động bình thường.",
        "mua",
        [],
        "purchased"
      ],
      [
        5,
        "Chúng ta vừa mua tủ lạnh đó tháng trước, nên nó hẳn phải hoạt động bình thường.",
        "tủ lạnh",
        [],
        "refrigerator"
      ],
      [
        6,
        "Ồ, tôi hiểu. Tôi sẽ làm việc muộn tối nay.",
        "hiểu",
        [],
        "see"
      ],
      [
        6,
        "Ồ, tôi hiểu. Tôi sẽ làm việc muộn tối nay.",
        "muộn tối nay",
        [],
        "late tonight"
      ],
      [
        7,
        "Bạn có muốn tôi kiểm tra nhiệt độ mỗi vài giờ không?",
        "kiểm tra",
        [],
        "check"
      ],
      [
        7,
        "Bạn có muốn tôi kiểm tra nhiệt độ mỗi vài giờ không?",
        "nhiệt độ",
        [],
        "temperature"
      ],
      [
        7,
        "Bạn có muốn tôi kiểm tra nhiệt độ mỗi vài giờ không?",
        "giờ",
        [],
        "hours"
      ],
      [
        9,
        "Dù sao cũng cảm ơn cô.",
        "Dù sao",
        [],
        "anyway"
      ]
    ]
  },
  "t8-38": {
    "sentences": [
      "Hiroki, tin tốt! Chúng ta đã nhận được khoản trợ cấp chúng ta yêu cầu để số hóa bộ sưu tập sách hiếm.",
      "Tuyệt vời! Tôi vui vì cuối cùng chúng ta có thể mở rộng cách truy cập vào bộ sưu tập này.",
      "Hiện tại, chỉ cư dân địa phương mới xem được những sách đó.",
      "Đúng vậy. Bạn biết đấy, tôi không chắc quy trình số hóa hoạt động thế nào.",
      "Ừm, Thư viện Archester đang tổ chức hội thảo tháng tới về thực hành số hóa.",
      "Tôi nghĩ chúng ta nên tham dự.",
      "Ý tưởng hay. Hãy đăng ký ngay."
    ],
    "exercises": [
      [
        0,
        "Hiroki, tin tốt! Chúng ta đã nhận được khoản trợ cấp chúng ta yêu cầu để số hóa bộ sưu tập sách hiếm.",
        "nhận được",
        [],
        "received"
      ],
      [
        0,
        "Hiroki, tin tốt! Chúng ta đã nhận được khoản trợ cấp chúng ta yêu cầu để số hóa bộ sưu tập sách hiếm.",
        "yêu cầu",
        [],
        "requested"
      ],
      [
        1,
        "Tuyệt vời! Tôi vui vì cuối cùng chúng ta có thể mở rộng cách truy cập vào bộ sưu tập này.",
        "mở rộng",
        [],
        "expand"
      ],
      [
        2,
        "Hiện tại, chỉ cư dân địa phương mới xem được những sách đó.",
        "cư dân địa phương",
        [],
        "local residents"
      ],
      [
        2,
        "Hiện tại, chỉ cư dân địa phương mới xem được những sách đó.",
        "xem",
        [],
        "see"
      ],
      [
        2,
        "Hiện tại, chỉ cư dân địa phương mới xem được những sách đó.",
        "sách",
        [],
        "books"
      ],
      [
        3,
        "Đúng vậy. Bạn biết đấy, tôi không chắc quy trình số hóa hoạt động thế nào.",
        "không",
        [],
        "not"
      ],
      [
        3,
        "Đúng vậy. Bạn biết đấy, tôi không chắc quy trình số hóa hoạt động thế nào.",
        "số hóa",
        [],
        "digitization"
      ],
      [
        3,
        "Đúng vậy. Bạn biết đấy, tôi không chắc quy trình số hóa hoạt động thế nào.",
        "quy trình",
        [],
        "process"
      ],
      [
        3,
        "Đúng vậy. Bạn biết đấy, tôi không chắc quy trình số hóa hoạt động thế nào.",
        "hoạt động",
        [],
        "works"
      ],
      [
        4,
        "Ừm, Thư viện Archester đang tổ chức hội thảo tháng tới về thực hành số hóa.",
        "Thư viện",
        [],
        "Archester Library"
      ],
      [
        4,
        "Ừm, Thư viện Archester đang tổ chức hội thảo tháng tới về thực hành số hóa.",
        "hội thảo",
        [],
        "workshop"
      ],
      [
        4,
        "Ừm, Thư viện Archester đang tổ chức hội thảo tháng tới về thực hành số hóa.",
        "số hóa",
        [],
        "digitization"
      ],
      [
        5,
        "Tôi nghĩ chúng ta nên tham dự.",
        "tham dự",
        [],
        "attend"
      ],
      [
        6,
        "Ý tưởng hay. Hãy đăng ký ngay.",
        "Ý tưởng",
        [],
        "idea"
      ],
      [
        6,
        "Ý tưởng hay. Hãy đăng ký ngay.",
        "đăng ký",
        [],
        "register"
      ]
    ]
  },
  "t8-41": {
    "sentences": [
      "Jong-Gyu, tôi có tin tuyệt vời.",
      "Đề xuất của chúng ta đã được phê duyệt!",
      "Ý bạn là thiết kế của chúng ta cho cánh mới của tòa thị chính? Thật tuyệt vời.",
      "Vâng! Tôi vừa nói chuyện với đại diện từ văn phòng thị trưởng.",
      "Thị trưởng muốn gặp chúng ta tuần tới.",
      "Thật tốt khi chúng ta chụp những ảnh hàng không của địa điểm đó.",
      "Chúng ta nên dùng chúng để tạo mô hình 3D của tòa nhà.",
      "Bạn đúng. Sau đó chúng ta có thể mang đến cuộc họp."
    ],
    "exercises": [
      [
        0,
        "Jong-Gyu, tôi có tin tuyệt vời.",
        "tin",
        [],
        "amazing news"
      ],
      [
        1,
        "Đề xuất của chúng ta đã được phê duyệt!",
        "Đề xuất",
        [],
        "proposal"
      ],
      [
        1,
        "Đề xuất của chúng ta đã được phê duyệt!",
        "phê duyệt",
        [],
        "approved"
      ],
      [
        2,
        "Ý bạn là thiết kế của chúng ta cho cánh mới của tòa thị chính? Thật tuyệt vời.",
        "thiết kế",
        [],
        "design"
      ],
      [
        3,
        "Vâng! Tôi vừa nói chuyện với đại diện từ văn phòng thị trưởng.",
        "nói chuyện",
        [],
        "spoke"
      ],
      [
        3,
        "Vâng! Tôi vừa nói chuyện với đại diện từ văn phòng thị trưởng.",
        "đại diện",
        [],
        "representative"
      ],
      [
        4,
        "Thị trưởng muốn gặp chúng ta tuần tới.",
        "Thị trưởng",
        [],
        "mayor"
      ],
      [
        4,
        "Thị trưởng muốn gặp chúng ta tuần tới.",
        "gặp",
        [],
        "meet"
      ],
      [
        6,
        "Chúng ta nên dùng chúng để tạo mô hình 3D của tòa nhà.",
        "dùng",
        [],
        "use"
      ],
      [
        6,
        "Chúng ta nên dùng chúng để tạo mô hình 3D của tòa nhà.",
        "tòa nhà",
        [],
        "building"
      ],
      [
        7,
        "Bạn đúng. Sau đó chúng ta có thể mang đến cuộc họp.",
        "mang",
        [],
        "bring"
      ],
      [
        7,
        "Bạn đúng. Sau đó chúng ta có thể mang đến cuộc họp.",
        "cuộc họp",
        [],
        "meeting"
      ]
    ]
  },
  "t8-44": {
    "sentences": [
      "Chào. Tôi nghe nói quận đang tài trợ chương trình cho cư dân phân tích đất vườn tại tòa nhà nông nghiệp quận.",
      "Đúng vậy. Cư dân quan tâm sẽ được phân tích đất miễn phí.",
      "Tuyệt. Mất bao lâu để tôi có kết quả? Tôi muốn trồng vườn rau mùa xuân này, và tôi rất tò mò về chất lượng đất của mình.",
      "Chỉ mất hai đến ba ngày.",
      "Bạn có mẫu với bạn không?",
      "Vâng. Tôi có ngay đây.",
      "OK. Đây là nhãn.",
      "Vui lòng viết tên và số điện thoại của bạn lên đó.",
      "Sau đó tôi sẽ nộp mẫu của bạn."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi nghe nói quận đang tài trợ chương trình cho cư dân phân tích đất vườn tại tòa nhà nông nghiệp quận.",
        "đất",
        [],
        "soil"
      ],
      [
        0,
        "Chào. Tôi nghe nói quận đang tài trợ chương trình cho cư dân phân tích đất vườn tại tòa nhà nông nghiệp quận.",
        "tòa nhà",
        [],
        "building"
      ],
      [
        1,
        "Đúng vậy. Cư dân quan tâm sẽ được phân tích đất miễn phí.",
        "được",
        [],
        "get"
      ],
      [
        1,
        "Đúng vậy. Cư dân quan tâm sẽ được phân tích đất miễn phí.",
        "phân tích đất",
        [],
        "soil analysis"
      ],
      [
        2,
        "Tuyệt. Mất bao lâu để tôi có kết quả? Tôi muốn trồng vườn rau mùa xuân này, và tôi rất tò mò về chất lượng đất của mình.",
        "trồng",
        [],
        "plant"
      ],
      [
        2,
        "Tuyệt. Mất bao lâu để tôi có kết quả? Tôi muốn trồng vườn rau mùa xuân này, và tôi rất tò mò về chất lượng đất của mình.",
        "vườn rau",
        [],
        "vegetable garden"
      ],
      [
        2,
        "Tuyệt. Mất bao lâu để tôi có kết quả? Tôi muốn trồng vườn rau mùa xuân này, và tôi rất tò mò về chất lượng đất của mình.",
        "tò mò",
        [],
        "curious"
      ],
      [
        2,
        "Tuyệt. Mất bao lâu để tôi có kết quả? Tôi muốn trồng vườn rau mùa xuân này, và tôi rất tò mò về chất lượng đất của mình.",
        "đất",
        [],
        "soil"
      ],
      [
        3,
        "Chỉ mất hai đến ba ngày.",
        "mất",
        [],
        "takes"
      ],
      [
        4,
        "Bạn có mẫu với bạn không?",
        "mẫu",
        [],
        "sample"
      ],
      [
        6,
        "OK. Đây là nhãn.",
        "nhãn",
        [],
        "label"
      ],
      [
        7,
        "Vui lòng viết tên và số điện thoại của bạn lên đó.",
        "viết",
        [],
        "write"
      ],
      [
        7,
        "Vui lòng viết tên và số điện thoại của bạn lên đó.",
        "tên",
        [],
        "name"
      ],
      [
        7,
        "Vui lòng viết tên và số điện thoại của bạn lên đó.",
        "số điện thoại",
        [],
        "phone number"
      ],
      [
        8,
        "Sau đó tôi sẽ nộp mẫu của bạn.",
        "nộp",
        [],
        "submit"
      ],
      [
        8,
        "Sau đó tôi sẽ nộp mẫu của bạn.",
        "mẫu",
        [],
        "sample"
      ]
    ]
  },
  "t8-47": {
    "sentences": [
      "Chào Liliana. Đây là kịch bản hiện tại cho tập phim hoạt hình sẽ được phát sóng trong ba tháng.",
      "Bộ phận hoạt hình muốn chúng ta hoàn thành storyboard của tập trong năm tuần.",
      "Tôi sẽ đi lấy bữa trưa cho chúng ta trước khi bắt đầu.",
      "Bạn có thích Danny's Café ở góc phố không?",
      "Nghe hay đó. Cảm ơn.",
      "Sau khi bạn về, chúng ta có thể đọc qua kịch bản để kiểm tra thời gian của mỗi cảnh."
    ],
    "exercises": [
      [
        0,
        "Chào Liliana. Đây là kịch bản hiện tại cho tập phim hoạt hình sẽ được phát sóng trong ba tháng.",
        "kịch bản",
        [],
        "script"
      ],
      [
        1,
        "Bộ phận hoạt hình muốn chúng ta hoàn thành storyboard của tập trong năm tuần.",
        "hoàn thành",
        [],
        "complete"
      ],
      [
        2,
        "Tôi sẽ đi lấy bữa trưa cho chúng ta trước khi bắt đầu.",
        "bữa trưa",
        [],
        "lunch"
      ],
      [
        2,
        "Tôi sẽ đi lấy bữa trưa cho chúng ta trước khi bắt đầu.",
        "bắt đầu",
        [],
        "started"
      ],
      [
        3,
        "Bạn có thích Danny's Café ở góc phố không?",
        "thích",
        [],
        "like"
      ],
      [
        5,
        "Sau khi bạn về, chúng ta có thể đọc qua kịch bản để kiểm tra thời gian của mỗi cảnh.",
        "đọc",
        [],
        "read"
      ],
      [
        5,
        "Sau khi bạn về, chúng ta có thể đọc qua kịch bản để kiểm tra thời gian của mỗi cảnh.",
        "kịch bản",
        [],
        "script"
      ],
      [
        5,
        "Sau khi bạn về, chúng ta có thể đọc qua kịch bản để kiểm tra thời gian của mỗi cảnh.",
        "kiểm tra",
        [],
        "check"
      ]
    ]
  },
  "t8-50": {
    "sentences": [
      "Chào, tên tôi là Kelly Stewart.",
      "Tôi thực sự thích khu vực ăn ngoài trời của nhà hàng các bạn.",
      "Tôi muốn đặt chỗ patio cho nhóm 25 người vào tối thứ Năm tới.",
      "Chào cô Stewart. Tôi là Sakura.",
      "Rất tiếc, tôi nghĩ một nhóm lớn khác đã đặt patio cho thứ Năm.",
      "Để tôi kiểm tra nhanh với quản lý nhé.",
      "Quản lý Gomez? Chúng ta có đặt nhóm cho patio tối thứ Năm này không?",
      "Thực ra, nhóm đó đã đổi đặt chỗ sang thứ Tư.",
      "Tốt quá! Có menu đặc biệt cho nhóm lớn không?",
      "Chúng tôi có menu đặc biệt cho nhóm lớn và tính phí cố định mỗi người.",
      "Để tôi lấy cho cô xen.",
      "Sakura, cô có thể ghi chi tiết đặt chỗ của khách không?"
    ],
    "exercises": [
      [
        0,
        "Chào, tên tôi là Kelly Stewart.",
        "tên",
        [],
        "name"
      ],
      [
        1,
        "Tôi thực sự thích khu vực ăn ngoài trời của nhà hàng các bạn.",
        "thích",
        [],
        "love"
      ],
      [
        2,
        "Tôi muốn đặt chỗ patio cho nhóm 25 người vào tối thứ Năm tới.",
        "đặt chỗ",
        [],
        "reserve"
      ],
      [
        2,
        "Tôi muốn đặt chỗ patio cho nhóm 25 người vào tối thứ Năm tới.",
        "thứ Năm",
        [],
        "Thursday"
      ],
      [
        4,
        "Rất tiếc, tôi nghĩ một nhóm lớn khác đã đặt patio cho thứ Năm.",
        "nhóm lớn",
        [],
        "large group"
      ],
      [
        4,
        "Rất tiếc, tôi nghĩ một nhóm lớn khác đã đặt patio cho thứ Năm.",
        "đặt",
        [],
        "reserved"
      ],
      [
        4,
        "Rất tiếc, tôi nghĩ một nhóm lớn khác đã đặt patio cho thứ Năm.",
        "thứ Năm",
        [],
        "Thursday"
      ],
      [
        5,
        "Để tôi kiểm tra nhanh với quản lý nhé.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        5,
        "Để tôi kiểm tra nhanh với quản lý nhé.",
        "quản lý",
        [],
        "manager"
      ],
      [
        6,
        "Quản lý Gomez? Chúng ta có đặt nhóm cho patio tối thứ Năm này không?",
        "Quản lý",
        [],
        "Manager Gomez"
      ],
      [
        6,
        "Quản lý Gomez? Chúng ta có đặt nhóm cho patio tối thứ Năm này không?",
        "thứ Năm",
        [],
        "Thursday"
      ],
      [
        7,
        "Thực ra, nhóm đó đã đổi đặt chỗ sang thứ Tư.",
        "đổi",
        [],
        "changed"
      ],
      [
        7,
        "Thực ra, nhóm đó đã đổi đặt chỗ sang thứ Tư.",
        "đặt chỗ",
        [],
        "reservation"
      ],
      [
        7,
        "Thực ra, nhóm đó đã đổi đặt chỗ sang thứ Tư.",
        "thứ Tư",
        [],
        "Wednesday"
      ],
      [
        9,
        "Chúng tôi có menu đặc biệt cho nhóm lớn và tính phí cố định mỗi người.",
        "cho",
        [],
        "offer"
      ],
      [
        10,
        "Để tôi lấy cho cô xen.",
        "Để",
        [],
        "Let"
      ],
      [
        10,
        "Để tôi lấy cho cô xen.",
        "lấy",
        [],
        "get"
      ]
    ]
  },
  "t8-53": {
    "sentences": [
      "Chào! Anh xem triển lãm thương mại nông nghiệp như thế nào rồi?",
      "Tôi đã xem được một số buổi trình diễn tuyệt vời.",
      "Dù vậy, một trong những lý do tôi đến triển lãm này là để thăm gian hàng của các bạn.",
      "Tôi đã xem một số video quảng cáo trực tuyến về máy móc mà các bạn bán.",
      "Đây có phải là dòng công nghệ nông nghiệp tự động mới của chúng tôi không?",
      "Đúng vậy. Tôi đã xem video về một máy có thể cấy cây con từ chậu nhỏ sang chậu lớn.",
      "Nó xử lý 10.000 cây trong một giờ ư?",
      "Đúng vậy đấy! Và chúng tôi có nhiều lựa chọn thanh toán.",
      "Để tôi cho anh một số chi tiết về lựa chọn chi trả của chúng tôi."
    ],
    "exercises": [
      [
        0,
        "Chào! Anh xem triển lãm thương mại nông nghiệp như thế nào rồi?",
        "triển lãm thương mại",
        [],
        "trade show"
      ],
      [
        1,
        "Tôi đã xem được một số buổi trình diễn tuyệt vời.",
        "xem",
        [],
        "seen"
      ],
      [
        2,
        "Dù vậy, một trong những lý do tôi đến triển lãm này là để thăm gian hàng của các bạn.",
        "thăm",
        [],
        "visit"
      ],
      [
        2,
        "Dù vậy, một trong những lý do tôi đến triển lãm này là để thăm gian hàng của các bạn.",
        "gian hàng",
        [],
        "booth"
      ],
      [
        3,
        "Tôi đã xem một số video quảng cáo trực tuyến về máy móc mà các bạn bán.",
        "máy móc",
        [],
        "machinery"
      ],
      [
        3,
        "Tôi đã xem một số video quảng cáo trực tuyến về máy móc mà các bạn bán.",
        "bán",
        [],
        "sell"
      ],
      [
        4,
        "Đây có phải là dòng công nghệ nông nghiệp tự động mới của chúng tôi không?",
        "dòng",
        [],
        "line"
      ],
      [
        4,
        "Đây có phải là dòng công nghệ nông nghiệp tự động mới của chúng tôi không?",
        "công nghệ nông nghiệp tự động",
        [],
        "automated farming technology"
      ],
      [
        5,
        "Đúng vậy. Tôi đã xem video về một máy có thể cấy cây con từ chậu nhỏ sang chậu lớn.",
        "cây con",
        [],
        "seedlings"
      ],
      [
        6,
        "Nó xử lý 10.000 cây trong một giờ ư?",
        "cây",
        [],
        "plants"
      ],
      [
        6,
        "Nó xử lý 10.000 cây trong một giờ ư?",
        "giờ",
        [],
        "hour"
      ],
      [
        8,
        "Để tôi cho anh một số chi tiết về lựa chọn chi trả của chúng tôi.",
        "cho",
        [],
        "give"
      ]
    ]
  },
  "t8-56": {
    "sentences": [
      "OK. Các bạn đã sẵn sàng lên chuyến bay 1216 đến Toronto.",
      "Cảm ơn vì đã bay cùng chúng tôi.",
      "Rất tiếc, tôi vừa biết rằng chuyến bay bị trì hoãn vì thời tiết xấu ở Canada.",
      "Ồ không! Đồng nghiệp của tôi ở đây và tôi sẽ trình bày tại một hội nghị ở Toronto tối nay.",
      "Cô có biết trì hoãn bao lâu không?",
      "Chúng tôi sẽ nhận tin từ Toronto liên tục.",
      "Xin lỗi, nhưng đó là tất cả những gì chúng tôi biết lúc này.",
      "Không sao, Jinyu.",
      "Tôi không nghĩ chúng ta sẽ đến kịp giờ.",
      "Có lẽ ban tổ chức có thể sắp xếp lại cho chúng ta vào ngày mai.",
      "Tôi sẽ gọi họ.",
      "Trong lúc đó, tôi có thể cung cấp phiếu ăn cho các anh nếu muốn."
    ],
    "exercises": [
      [
        0,
        "OK. Các bạn đã sẵn sàng lên chuyến bay 1216 đến Toronto.",
        "chuyến bay",
        [],
        "flight"
      ],
      [
        1,
        "Cảm ơn vì đã bay cùng chúng tôi.",
        "bay",
        [],
        "flying"
      ],
      [
        2,
        "Rất tiếc, tôi vừa biết rằng chuyến bay bị trì hoãn vì thời tiết xấu ở Canada.",
        "chuyến bay",
        [],
        "flight"
      ],
      [
        2,
        "Rất tiếc, tôi vừa biết rằng chuyến bay bị trì hoãn vì thời tiết xấu ở Canada.",
        "thời tiết xấu",
        [],
        "inclement weather"
      ],
      [
        3,
        "Ồ không! Đồng nghiệp của tôi ở đây và tôi sẽ trình bày tại một hội nghị ở Toronto tối nay.",
        "Đồng nghiệp",
        [],
        "colleague"
      ],
      [
        3,
        "Ồ không! Đồng nghiệp của tôi ở đây và tôi sẽ trình bày tại một hội nghị ở Toronto tối nay.",
        "trình bày",
        [],
        "presenting"
      ],
      [
        3,
        "Ồ không! Đồng nghiệp của tôi ở đây và tôi sẽ trình bày tại một hội nghị ở Toronto tối nay.",
        "hội nghị",
        [],
        "conference"
      ],
      [
        4,
        "Cô có biết trì hoãn bao lâu không?",
        "bao lâu",
        [],
        "long"
      ],
      [
        6,
        "Xin lỗi, nhưng đó là tất cả những gì chúng tôi biết lúc này.",
        "biết",
        [],
        "know"
      ],
      [
        8,
        "Tôi không nghĩ chúng ta sẽ đến kịp giờ.",
        "đến",
        [],
        "get"
      ],
      [
        9,
        "Có lẽ ban tổ chức có thể sắp xếp lại cho chúng ta vào ngày mai.",
        "ban tổ chức",
        [],
        "organizers"
      ],
      [
        9,
        "Có lẽ ban tổ chức có thể sắp xếp lại cho chúng ta vào ngày mai.",
        "sắp xếp lại",
        [],
        "reschedule"
      ],
      [
        10,
        "Tôi sẽ gọi họ.",
        "gọi",
        [],
        "call"
      ],
      [
        11,
        "Trong lúc đó, tôi có thể cung cấp phiếu ăn cho các anh nếu muốn.",
        "cung cấp",
        [],
        "offer"
      ],
      [
        11,
        "Trong lúc đó, tôi có thể cung cấp phiếu ăn cho các anh nếu muốn.",
        "phiếu ăn",
        [],
        "meal vouchers"
      ]
    ]
  },
  "t8-59": {
    "sentences": [
      "Vậy, Raquel, tôi đã làm việc sửa chữa máy xúc này, nhưng không khả quan lắm.",
      "Tôi nghĩ là do hệ thống thủy lực.",
      "Tôi đã làm sạch bơm, nhưng nó cũng không chạy tốt hơn.",
      "Tôi đã làm điều này trước đây, và thường thì sửa được.",
      "Tôi hiểu. Có lẽ là vấn đề với piston trong xi lanh thủy lực.",
      "Nhưng một sửa chữa lớn như vậy nên được bảo hành.",
      "Handy Equipment đã bán cho chúng ta.",
      "Ý hay. Tôi sẽ gọi họ sau.",
      "Tôi đã dành quá nhiều thời gian cho máy xúc này.",
      "Tôi cần đi ra cánh đồng để kiểm tra ớt và dưa chuột- có thể đã đến lúc hái chúng."
    ],
    "exercises": [
      [
        0,
        "Vậy, Raquel, tôi đã làm việc sửa chữa máy xúc này, nhưng không khả quan lắm.",
        "sửa chữa",
        [],
        "repairing"
      ],
      [
        0,
        "Vậy, Raquel, tôi đã làm việc sửa chữa máy xúc này, nhưng không khả quan lắm.",
        "không",
        [],
        "not"
      ],
      [
        1,
        "Tôi nghĩ là do hệ thống thủy lực.",
        "nghĩ",
        [],
        "think"
      ],
      [
        1,
        "Tôi nghĩ là do hệ thống thủy lực.",
        "hệ thống thủy lực",
        [],
        "hydraulic system"
      ],
      [
        2,
        "Tôi đã làm sạch bơm, nhưng nó cũng không chạy tốt hơn.",
        "làm sạch",
        [],
        "cleaned"
      ],
      [
        2,
        "Tôi đã làm sạch bơm, nhưng nó cũng không chạy tốt hơn.",
        "không",
        [],
        "not"
      ],
      [
        2,
        "Tôi đã làm sạch bơm, nhưng nó cũng không chạy tốt hơn.",
        "chạy",
        [],
        "running"
      ],
      [
        3,
        "Tôi đã làm điều này trước đây, và thường thì sửa được.",
        "sửa",
        [],
        "fixes"
      ],
      [
        4,
        "Tôi hiểu. Có lẽ là vấn đề với piston trong xi lanh thủy lực.",
        "hiểu",
        [],
        "see"
      ],
      [
        4,
        "Tôi hiểu. Có lẽ là vấn đề với piston trong xi lanh thủy lực.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        4,
        "Tôi hiểu. Có lẽ là vấn đề với piston trong xi lanh thủy lực.",
        "xi lanh thủy lực",
        [],
        "hydraulic cylinder"
      ],
      [
        5,
        "Nhưng một sửa chữa lớn như vậy nên được bảo hành.",
        "sửa chữa",
        [],
        "repair"
      ],
      [
        6,
        "Handy Equipment đã bán cho chúng ta.",
        "bán",
        [],
        "sold"
      ],
      [
        7,
        "Ý hay. Tôi sẽ gọi họ sau.",
        "gọi",
        [],
        "call"
      ],
      [
        8,
        "Tôi đã dành quá nhiều thời gian cho máy xúc này.",
        "dành",
        [],
        "spent"
      ],
      [
        9,
        "Tôi cần đi ra cánh đồng để kiểm tra ớt và dưa chuột- có thể đã đến lúc hái chúng.",
        "cần",
        [],
        "need to"
      ],
      [
        9,
        "Tôi cần đi ra cánh đồng để kiểm tra ớt và dưa chuột- có thể đã đến lúc hái chúng.",
        "kiểm tra",
        [],
        "check"
      ],
      [
        9,
        "Tôi cần đi ra cánh đồng để kiểm tra ớt và dưa chuột- có thể đã đến lúc hái chúng.",
        "ớt",
        [],
        "peppers"
      ],
      [
        9,
        "Tôi cần đi ra cánh đồng để kiểm tra ớt và dưa chuột- có thể đã đến lúc hái chúng.",
        "dưa chuột",
        [],
        "cucumbers"
      ]
    ]
  },
  "t8-62": {
    "sentences": [
      "Chào. Tôi đến để lấy xe.",
      "Tên tôi là Olga Popova.",
      "Anh đã thay một lốp xe của tôi.",
      "Vâng, cô Popova. Xe của cô đã sẵn sàng.",
      "Hóa đơn là 133 đô la.",
      "Đó khá là nhiều hơn so với liệt kê trên website của anh.",
      "Tôi nghĩ chi phí sẽ là 98 đô la.",
      "Để tôi xem lệnh làm việc.",
      "Có vẻ tôi đã tính hóa đơn cho lốp sai.",
      "Xin lỗi- để tôi sửa.",
      "Ngoài ra, nếu cô muốn chia sẻ email, tôi có thể đăng ký cô vào chương trình tính thưởng của chúng tôi."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi đến để lấy xe.",
        "lấy",
        [],
        "pick up"
      ],
      [
        0,
        "Chào. Tôi đến để lấy xe.",
        "xe",
        [],
        "car"
      ],
      [
        1,
        "Tên tôi là Olga Popova.",
        "Tên",
        [],
        "name's Olga Popova"
      ],
      [
        2,
        "Anh đã thay một lốp xe của tôi.",
        "thay",
        [],
        "replaced"
      ],
      [
        2,
        "Anh đã thay một lốp xe của tôi.",
        "lốp xe",
        [],
        "tires"
      ],
      [
        3,
        "Vâng, cô Popova. Xe của cô đã sẵn sàng.",
        "Xe",
        [],
        "car"
      ],
      [
        4,
        "Hóa đơn là 133 đô la.",
        "Hóa đơn",
        [],
        "bill"
      ],
      [
        5,
        "Đó khá là nhiều hơn so với liệt kê trên website của anh.",
        "liệt kê",
        [],
        "listed"
      ],
      [
        5,
        "Đó khá là nhiều hơn so với liệt kê trên website của anh.",
        "website",
        [],
        "Web site"
      ],
      [
        6,
        "Tôi nghĩ chi phí sẽ là 98 đô la.",
        "nghĩ",
        [],
        "thought"
      ],
      [
        6,
        "Tôi nghĩ chi phí sẽ là 98 đô la.",
        "chi phí",
        [],
        "cost"
      ],
      [
        8,
        "Có vẻ tôi đã tính hóa đơn cho lốp sai.",
        "Có vẻ",
        [],
        "looks"
      ],
      [
        9,
        "Xin lỗi- để tôi sửa.",
        "sửa",
        [],
        "fix"
      ],
      [
        10,
        "Ngoài ra, nếu cô muốn chia sẻ email, tôi có thể đăng ký cô vào chương trình tính thưởng của chúng tôi.",
        "chia sẻ",
        [],
        "share"
      ],
      [
        10,
        "Ngoài ra, nếu cô muốn chia sẻ email, tôi có thể đăng ký cô vào chương trình tính thưởng của chúng tôi.",
        "email",
        [],
        "mail"
      ],
      [
        10,
        "Ngoài ra, nếu cô muốn chia sẻ email, tôi có thể đăng ký cô vào chương trình tính thưởng của chúng tôi.",
        "ký",
        [],
        "sign"
      ]
    ]
  },
  "t8-65": {
    "sentences": [
      "Chào. Tôi muốn mua gối mới.",
      "Gần đây tôi bắt đầu thức dậy với cổ cứng, vì vậy tôi muốn thứ gì đó giúp tôi ngủ ngon hơn.",
      "Tôi có thể giúp cô.",
      "Điều đầu tiên cô nên xem xét là tư thế ngủ.",
      "Cô ngủ ngửa, sấp hay nghiêng?",
      "Tôi nằm nghiêng.",
      "OK. Đối với người ngủ nghiêng, chúng tôi khuyến nghị Star Pillow.",
      "Đó là gối cứng sẽ hỗ trợ tốt cho cô.",
      "Nghe được đó. Tuy nhiên, tôi có một câu hỏi.",
      "Bên trong gối là gì? Tôi dị ứng với lông vũ.",
      "Mẫu này được làm chỉ với vật liệu không gây dị ứng."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi muốn mua gối mới.",
        "mua",
        [],
        "buy"
      ],
      [
        0,
        "Chào. Tôi muốn mua gối mới.",
        "gối",
        [],
        "pillow"
      ],
      [
        1,
        "Gần đây tôi bắt đầu thức dậy với cổ cứng, vì vậy tôi muốn thứ gì đó giúp tôi ngủ ngon hơn.",
        "bắt đầu",
        [],
        "started"
      ],
      [
        1,
        "Gần đây tôi bắt đầu thức dậy với cổ cứng, vì vậy tôi muốn thứ gì đó giúp tôi ngủ ngon hơn.",
        "thức dậy",
        [],
        "waking up"
      ],
      [
        2,
        "Tôi có thể giúp cô.",
        "giúp",
        [],
        "assist"
      ],
      [
        3,
        "Điều đầu tiên cô nên xem xét là tư thế ngủ.",
        "xem xét",
        [],
        "consider"
      ],
      [
        3,
        "Điều đầu tiên cô nên xem xét là tư thế ngủ.",
        "ngủ",
        [],
        "sleep"
      ],
      [
        4,
        "Cô ngủ ngửa, sấp hay nghiêng?",
        "ngủ",
        [],
        "sleep"
      ],
      [
        4,
        "Cô ngủ ngửa, sấp hay nghiêng?",
        "sấp",
        [],
        "stomach"
      ],
      [
        4,
        "Cô ngủ ngửa, sấp hay nghiêng?",
        "nghiêng",
        [],
        "side"
      ],
      [
        5,
        "Tôi nằm nghiêng.",
        "nghiêng",
        [],
        "side"
      ],
      [
        7,
        "Đó là gối cứng sẽ hỗ trợ tốt cho cô.",
        "gối",
        [],
        "pillow"
      ],
      [
        7,
        "Đó là gối cứng sẽ hỗ trợ tốt cho cô.",
        "cho",
        [],
        "give"
      ],
      [
        7,
        "Đó là gối cứng sẽ hỗ trợ tốt cho cô.",
        "hỗ trợ",
        [],
        "support"
      ],
      [
        8,
        "Nghe được đó. Tuy nhiên, tôi có một câu hỏi.",
        "câu hỏi",
        [],
        "question"
      ],
      [
        9,
        "Bên trong gối là gì? Tôi dị ứng với lông vũ.",
        "gối",
        [],
        "pillow"
      ],
      [
        10,
        "Mẫu này được làm chỉ với vật liệu không gây dị ứng.",
        "không gây dị ứng",
        [],
        "nonallergenic"
      ]
    ]
  },
  "t8-68": {
    "sentences": [
      "Chào mừng đến với đội.",
      "Tôi nghe anh có nhiều kinh nghiệm thiết kế phần mềm.",
      "Chúng tôi cần một số ý tưởng mới cho gói phần mềm kinh doanh mà chúng tôi đang phát triển.",
      "Cảm ơn. Tôi cũng giúp thiết lập cho các buổi trình bày bán hàng.",
      "Tôi vừa sửa vấn đề với thiết bị âm thanh trong phòng hội nghị.",
      "Nhân tiện, anh ở bộ phận bán hàng phải không? Tuần tới anh không trình bày cho khách hàng mới sao?",
      "Vâng, tôi yêu bán hàng.",
      "Nhưng tôi đặc biệt thích bước mà chúng tôi nhận được nhiều câu hỏi từ khách hàng.",
      "Tôi có thể giải quyết nghi ngờ hoặc phản đối và cho họ thấy phần mềm thực sự đáp ứng nhu cầu của họ như thế nào."
    ],
    "exercises": [
      [
        0,
        "Chào mừng đến với đội.",
        "đội",
        [],
        "team"
      ],
      [
        1,
        "Tôi nghe anh có nhiều kinh nghiệm thiết kế phần mềm.",
        "kinh nghiệm",
        [],
        "experience"
      ],
      [
        1,
        "Tôi nghe anh có nhiều kinh nghiệm thiết kế phần mềm.",
        "thiết kế",
        [],
        "designing"
      ],
      [
        1,
        "Tôi nghe anh có nhiều kinh nghiệm thiết kế phần mềm.",
        "phần mềm",
        [],
        "software"
      ],
      [
        2,
        "Chúng tôi cần một số ý tưởng mới cho gói phần mềm kinh doanh mà chúng tôi đang phát triển.",
        "cần",
        [],
        "need"
      ],
      [
        2,
        "Chúng tôi cần một số ý tưởng mới cho gói phần mềm kinh doanh mà chúng tôi đang phát triển.",
        "ý tưởng",
        [],
        "ideas"
      ],
      [
        2,
        "Chúng tôi cần một số ý tưởng mới cho gói phần mềm kinh doanh mà chúng tôi đang phát triển.",
        "phần mềm",
        [],
        "software"
      ],
      [
        3,
        "Cảm ơn. Tôi cũng giúp thiết lập cho các buổi trình bày bán hàng.",
        "thiết lập",
        [],
        "set up"
      ],
      [
        4,
        "Tôi vừa sửa vấn đề với thiết bị âm thanh trong phòng hội nghị.",
        "sửa",
        [],
        "fixed"
      ],
      [
        4,
        "Tôi vừa sửa vấn đề với thiết bị âm thanh trong phòng hội nghị.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        4,
        "Tôi vừa sửa vấn đề với thiết bị âm thanh trong phòng hội nghị.",
        "thiết bị âm thanh",
        [],
        "sound equipment"
      ],
      [
        5,
        "Nhân tiện, anh ở bộ phận bán hàng phải không? Tuần tới anh không trình bày cho khách hàng mới sao?",
        "bán hàng",
        [],
        "sales"
      ],
      [
        5,
        "Nhân tiện, anh ở bộ phận bán hàng phải không? Tuần tới anh không trình bày cho khách hàng mới sao?",
        "trình bày",
        [],
        "presenting"
      ],
      [
        5,
        "Nhân tiện, anh ở bộ phận bán hàng phải không? Tuần tới anh không trình bày cho khách hàng mới sao?",
        "khách hàng",
        [],
        "client"
      ],
      [
        7,
        "Nhưng tôi đặc biệt thích bước mà chúng tôi nhận được nhiều câu hỏi từ khách hàng.",
        "nhận",
        [],
        "getting"
      ],
      [
        7,
        "Nhưng tôi đặc biệt thích bước mà chúng tôi nhận được nhiều câu hỏi từ khách hàng.",
        "câu hỏi",
        [],
        "questions"
      ],
      [
        7,
        "Nhưng tôi đặc biệt thích bước mà chúng tôi nhận được nhiều câu hỏi từ khách hàng.",
        "khách hàng",
        [],
        "clients"
      ],
      [
        8,
        "Tôi có thể giải quyết nghi ngờ hoặc phản đối và cho họ thấy phần mềm thực sự đáp ứng nhu cầu của họ như thế nào.",
        "phần mềm",
        [],
        "software"
      ]
    ]
  },
  "t9-32": {
    "sentences": [
      "Xin chào. Tôi gọi đến vì tuần tới tôi sẽ ở lại thành phố để làm việc, và tôi muốn mua thẻ thành viên tạm thời tại phòng tập.",
      "Tất nhiên rồi ạ! Thẻ tập theo ngày tiêu chuẩn của chúng tôi là 20 đô la.",
      "Chúng tôi cũng có cho thuê các thiết bị thể thao như thảm tập thể dục và vợt tennis nếu ông có nhu cầu.",
      "Hiện tại tôi sẽ chỉ mua thẻ tập thôi, cảm ơn cô.",
      "Tuyệt vời. Trước tiên, tôi cần thiết lập thông tin của ông trên hệ thống.",
      "Ông vui lòng cho tôi biết tên và địa chỉ email nhé?"
    ],
    "exercises": [
      [
        0,
        "Xin chào. Tôi gọi đến vì tuần tới tôi sẽ ở lại thành phố để làm việc, và tôi muốn mua thẻ thành viên tạm thời tại phòng tập.",
        "gọi",
        [],
        "calling"
      ],
      [
        0,
        "Xin chào. Tôi gọi đến vì tuần tới tôi sẽ ở lại thành phố để làm việc, và tôi muốn mua thẻ thành viên tạm thời tại phòng tập.",
        "mua",
        [],
        "purchase"
      ],
      [
        1,
        "Tất nhiên rồi ạ! Thẻ tập theo ngày tiêu chuẩn của chúng tôi là 20 đô la.",
        "20",
        [],
        "twenty dollars"
      ],
      [
        2,
        "Chúng tôi cũng có cho thuê các thiết bị thể thao như thảm tập thể dục và vợt tennis nếu ông có nhu cầu.",
        "cho",
        [],
        "offer"
      ],
      [
        2,
        "Chúng tôi cũng có cho thuê các thiết bị thể thao như thảm tập thể dục và vợt tennis nếu ông có nhu cầu.",
        "thiết bị",
        [],
        "athletic equipment"
      ],
      [
        2,
        "Chúng tôi cũng có cho thuê các thiết bị thể thao như thảm tập thể dục và vợt tennis nếu ông có nhu cầu.",
        "thảm tập thể dục",
        [],
        "exercise mats"
      ],
      [
        2,
        "Chúng tôi cũng có cho thuê các thiết bị thể thao như thảm tập thể dục và vợt tennis nếu ông có nhu cầu.",
        "vợt tennis",
        [],
        "tennis rackets"
      ],
      [
        3,
        "Hiện tại tôi sẽ chỉ mua thẻ tập thôi, cảm ơn cô.",
        "mua",
        [],
        "purchase"
      ],
      [
        4,
        "Tuyệt vời. Trước tiên, tôi cần thiết lập thông tin của ông trên hệ thống.",
        "cần",
        [],
        "need to"
      ],
      [
        4,
        "Tuyệt vời. Trước tiên, tôi cần thiết lập thông tin của ông trên hệ thống.",
        "thiết lập",
        [],
        "set"
      ],
      [
        5,
        "Ông vui lòng cho tôi biết tên và địa chỉ email nhé?",
        "tên",
        [],
        "name"
      ],
      [
        5,
        "Ông vui lòng cho tôi biết tên và địa chỉ email nhé?",
        "địa chỉ",
        [],
        "mail address"
      ]
    ]
  },
  "t9-35": {
    "sentences": [
      "Chào mừng bạn đến với Nhà máy Kem Reynold.",
      "Tôi rất vui vì bạn sẽ gia nhập đội ngũ đảm bảo chất lượng của chúng tôi.",
      "Cảm ơn chị! Tôi rất hào hứng được làm việc với các thành viên còn lại trong nhóm.",
      "Rất tốt! Tôi thấy trên sơ yếu lý lịch rằng trước đây bạn đã từng làm kiểm soát chất lượng tại một nhà máy tương tự.",
      "Vâng. Tại đó tôi đã học được rất nhiều về các quy định trong sản xuất thực phẩm.",
      "Vậy thì bạn sẽ thấy quen thuộc với các quy trình kiểm tra mà chúng tôi thực hiện.",
      "Chúng tôi kiểm tra vào đầu mỗi ca làm việc để đảm bảo rằng tất cả thiết bị đã được làm sạch và khử trùng."
    ],
    "exercises": [
      [
        0,
        "Chào mừng bạn đến với Nhà máy Kem Reynold.",
        "Nhà máy",
        [],
        "Factory"
      ],
      [
        1,
        "Tôi rất vui vì bạn sẽ gia nhập đội ngũ đảm bảo chất lượng của chúng tôi.",
        "đảm bảo chất lượng",
        [],
        "quality assurance"
      ],
      [
        2,
        "Cảm ơn chị! Tôi rất hào hứng được làm việc với các thành viên còn lại trong nhóm.",
        "hào hứng",
        [],
        "excited"
      ],
      [
        2,
        "Cảm ơn chị! Tôi rất hào hứng được làm việc với các thành viên còn lại trong nhóm.",
        "làm việc",
        [],
        "work"
      ],
      [
        3,
        "Rất tốt! Tôi thấy trên sơ yếu lý lịch rằng trước đây bạn đã từng làm kiểm soát chất lượng tại một nhà máy tương tự.",
        "thấy",
        [],
        "saw"
      ],
      [
        3,
        "Rất tốt! Tôi thấy trên sơ yếu lý lịch rằng trước đây bạn đã từng làm kiểm soát chất lượng tại một nhà máy tương tự.",
        "nhà máy",
        [],
        "factory"
      ],
      [
        4,
        "Vâng. Tại đó tôi đã học được rất nhiều về các quy định trong sản xuất thực phẩm.",
        "học",
        [],
        "learned"
      ],
      [
        4,
        "Vâng. Tại đó tôi đã học được rất nhiều về các quy định trong sản xuất thực phẩm.",
        "sản xuất thực phẩm",
        [],
        "food manufacturing"
      ],
      [
        5,
        "Vậy thì bạn sẽ thấy quen thuộc với các quy trình kiểm tra mà chúng tôi thực hiện.",
        "quen thuộc",
        [],
        "familiar with"
      ],
      [
        6,
        "Chúng tôi kiểm tra vào đầu mỗi ca làm việc để đảm bảo rằng tất cả thiết bị đã được làm sạch và khử trùng.",
        "thiết bị",
        [],
        "equipment"
      ],
      [
        6,
        "Chúng tôi kiểm tra vào đầu mỗi ca làm việc để đảm bảo rằng tất cả thiết bị đã được làm sạch và khử trùng.",
        "làm sạch",
        [],
        "cleaned"
      ]
    ]
  },
  "t9-38": {
    "sentences": [
      "So-Jin, cô có rảnh một chút không? Tôi có một nhiệm vụ dành cho cô đây.",
      "Chắc chắn rồi ạ. Có việc gì vậy ông?",
      "Bộ phận nhân sự đang lo lắng rằng nhân viên không đọc bản tin nội bộ hàng tuần.",
      "Họ hỏi liệu một trong những nhà thiết kế đồ họa của chúng ta có thể thiết kế lại bản tin để làm cho nó trông hấp dẫn hơn không.",
      "Được ạ. Tôi sẽ bắt đầu thực hiện ngay sau khi hoàn thành việc cập nhật trang web.",
      "Tôi sẽ bảo Hiroki đảm nhận việc cập nhật trang web đó để cô có thể rảnh tay tập trung làm bản tin."
    ],
    "exercises": [
      [
        2,
        "Bộ phận nhân sự đang lo lắng rằng nhân viên không đọc bản tin nội bộ hàng tuần.",
        "không",
        [],
        "aren't"
      ],
      [
        2,
        "Bộ phận nhân sự đang lo lắng rằng nhân viên không đọc bản tin nội bộ hàng tuần.",
        "đọc",
        [],
        "reading"
      ],
      [
        2,
        "Bộ phận nhân sự đang lo lắng rằng nhân viên không đọc bản tin nội bộ hàng tuần.",
        "bản tin",
        [],
        "newsletter"
      ],
      [
        3,
        "Họ hỏi liệu một trong những nhà thiết kế đồ họa của chúng ta có thể thiết kế lại bản tin để làm cho nó trông hấp dẫn hơn không.",
        "hỏi",
        [],
        "asked"
      ],
      [
        3,
        "Họ hỏi liệu một trong những nhà thiết kế đồ họa của chúng ta có thể thiết kế lại bản tin để làm cho nó trông hấp dẫn hơn không.",
        "bản tin",
        [],
        "newsletter"
      ],
      [
        4,
        "Được ạ. Tôi sẽ bắt đầu thực hiện ngay sau khi hoàn thành việc cập nhật trang web.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        4,
        "Được ạ. Tôi sẽ bắt đầu thực hiện ngay sau khi hoàn thành việc cập nhật trang web.",
        "hoàn thành",
        [],
        "finished"
      ],
      [
        4,
        "Được ạ. Tôi sẽ bắt đầu thực hiện ngay sau khi hoàn thành việc cập nhật trang web.",
        "trang web",
        [],
        "Web site"
      ],
      [
        5,
        "Tôi sẽ bảo Hiroki đảm nhận việc cập nhật trang web đó để cô có thể rảnh tay tập trung làm bản tin.",
        "rảnh",
        [],
        "free"
      ],
      [
        5,
        "Tôi sẽ bảo Hiroki đảm nhận việc cập nhật trang web đó để cô có thể rảnh tay tập trung làm bản tin.",
        "bản tin",
        [],
        "newsletter"
      ]
    ]
  },
  "t9-41": {
    "sentences": [
      "Bạn có nghe tin cô Hamdy sẽ nghỉ hưu không? Sẽ có một vị trí trống cho quản lý phòng thanh toán phải trả.",
      "Tôi nghĩ bạn sẽ rất phù hợp với công việc này, Amanda.",
      "Tôi đồng ý. Khi ai đó trong bộ phận kế toán có câu hỏi, họ đều tìm đến bạn.",
      "Cảm ơn các bạn. Điều duy nhất tôi lo lắng là tôi chưa bao giờ quản lý một đội nhóm trước đây.",
      "Điều đó không thành vấn đề.",
      "Công ty có một chương trình đào tạo chuyên sâu cho các quản lý mới.",
      "Bạn sẽ học cách tạo động lực cho nhân viên, cách quản lý ngân sách—tất cả những thứ đó.",
      "Tôi cảm ơn sự động viên của bạn.",
      "Tôi sẽ nói chuyện với cô Hamdy để tìm hiểu thêm về công việc mà cô ấy đang làm."
    ],
    "exercises": [
      [
        1,
        "Tôi nghĩ bạn sẽ rất phù hợp với công việc này, Amanda.",
        "nghĩ",
        [],
        "think"
      ],
      [
        2,
        "Tôi đồng ý. Khi ai đó trong bộ phận kế toán có câu hỏi, họ đều tìm đến bạn.",
        "đồng ý",
        [],
        "agree"
      ],
      [
        2,
        "Tôi đồng ý. Khi ai đó trong bộ phận kế toán có câu hỏi, họ đều tìm đến bạn.",
        "câu hỏi",
        [],
        "question"
      ],
      [
        3,
        "Cảm ơn các bạn. Điều duy nhất tôi lo lắng là tôi chưa bao giờ quản lý một đội nhóm trước đây.",
        "chưa",
        [],
        "never"
      ],
      [
        3,
        "Cảm ơn các bạn. Điều duy nhất tôi lo lắng là tôi chưa bao giờ quản lý một đội nhóm trước đây.",
        "nhóm",
        [],
        "team"
      ],
      [
        4,
        "Điều đó không thành vấn đề.",
        "không",
        [],
        "not"
      ],
      [
        4,
        "Điều đó không thành vấn đề.",
        "vấn đề",
        [],
        "problem"
      ],
      [
        5,
        "Công ty có một chương trình đào tạo chuyên sâu cho các quản lý mới.",
        "đào tạo",
        [],
        "training"
      ],
      [
        5,
        "Công ty có một chương trình đào tạo chuyên sâu cho các quản lý mới.",
        "quản lý",
        [],
        "managers"
      ],
      [
        6,
        "Bạn sẽ học cách tạo động lực cho nhân viên, cách quản lý ngân sách—tất cả những thứ đó.",
        "học",
        [],
        "learn"
      ],
      [
        6,
        "Bạn sẽ học cách tạo động lực cho nhân viên, cách quản lý ngân sách—tất cả những thứ đó.",
        "tạo động lực cho nhân viên",
        [],
        "motivate employees"
      ],
      [
        6,
        "Bạn sẽ học cách tạo động lực cho nhân viên, cách quản lý ngân sách—tất cả những thứ đó.",
        "ngân sách",
        [],
        "budgets"
      ],
      [
        7,
        "Tôi cảm ơn sự động viên của bạn.",
        "cảm ơn",
        [],
        "appreciate"
      ],
      [
        8,
        "Tôi sẽ nói chuyện với cô Hamdy để tìm hiểu thêm về công việc mà cô ấy đang làm.",
        "nói chuyện",
        [],
        "talk"
      ],
      [
        8,
        "Tôi sẽ nói chuyện với cô Hamdy để tìm hiểu thêm về công việc mà cô ấy đang làm.",
        "tìm hiểu",
        [],
        "learn"
      ]
    ]
  },
  "t9-44": {
    "sentences": [
      "Chào Rodrigo. Bạn có muốn đi ăn trưa cùng tôi và cả nhóm không? Chúng tôi sẽ đến Café Milano.",
      "Chúng tôi đã làm việc rất chăm chỉ để hoàn thành chiến dịch quảng cáo cho khách hàng.",
      "Chắc chắn rồi! Nếu bạn muốn, tôi có thể lái xe.",
      "Quán cà phê này ngay dưới phố thôi.",
      "Ồ, chắc họ vừa mở thêm chi nhánh thứ hai.",
      "Tôi chỉ biết quán bên kia thành phố.",
      "Vâng, chi nhánh này vừa mở.",
      "Bạn có muốn xem thực đơn không? Tôi có một bản trong văn phòng của mình."
    ],
    "exercises": [
      [
        0,
        "Chào Rodrigo. Bạn có muốn đi ăn trưa cùng tôi và cả nhóm không? Chúng tôi sẽ đến Café Milano.",
        "nhóm",
        [],
        "team"
      ],
      [
        1,
        "Chúng tôi đã làm việc rất chăm chỉ để hoàn thành chiến dịch quảng cáo cho khách hàng.",
        "chăm chỉ",
        [],
        "hard"
      ],
      [
        1,
        "Chúng tôi đã làm việc rất chăm chỉ để hoàn thành chiến dịch quảng cáo cho khách hàng.",
        "hoàn thành",
        [],
        "finish"
      ],
      [
        1,
        "Chúng tôi đã làm việc rất chăm chỉ để hoàn thành chiến dịch quảng cáo cho khách hàng.",
        "chiến dịch quảng cáo",
        [],
        "advertising campaign"
      ],
      [
        1,
        "Chúng tôi đã làm việc rất chăm chỉ để hoàn thành chiến dịch quảng cáo cho khách hàng.",
        "khách hàng",
        [],
        "client"
      ],
      [
        2,
        "Chắc chắn rồi! Nếu bạn muốn, tôi có thể lái xe.",
        "lái xe",
        [],
        "drive"
      ],
      [
        3,
        "Quán cà phê này ngay dưới phố thôi.",
        "Quán cà phê",
        [],
        "caf"
      ],
      [
        3,
        "Quán cà phê này ngay dưới phố thôi.",
        "dưới",
        [],
        "down"
      ],
      [
        3,
        "Quán cà phê này ngay dưới phố thôi.",
        "phố",
        [],
        "street"
      ],
      [
        4,
        "Ồ, chắc họ vừa mở thêm chi nhánh thứ hai.",
        "mở",
        [],
        "opened"
      ],
      [
        5,
        "Tôi chỉ biết quán bên kia thành phố.",
        "biết",
        [],
        "know"
      ],
      [
        6,
        "Vâng, chi nhánh này vừa mở.",
        "mở",
        [],
        "opened"
      ],
      [
        7,
        "Bạn có muốn xem thực đơn không? Tôi có một bản trong văn phòng của mình.",
        "xem",
        [],
        "see"
      ],
      [
        7,
        "Bạn có muốn xem thực đơn không? Tôi có một bản trong văn phòng của mình.",
        "thực đơn",
        [],
        "menu"
      ],
      [
        7,
        "Bạn có muốn xem thực đơn không? Tôi có một bản trong văn phòng của mình.",
        "văn phòng",
        [],
        "office"
      ]
    ]
  },
  "t9-47": {
    "sentences": [
      "Cảm ơn bạn đã đồng ý tham gia phỏng vấn cho Textiles Quarterly về quy trình tái chế của công ty bạn.",
      "Độc giả của chúng tôi chắc chắn sẽ rất hứng thú.",
      "Nói một cách đơn giản, chúng tôi xé vụn vải bỏ đi, biến nó thành một hỗn hợp nước gọi là slurry, sau đó sấy khô và ép thành những tấm vải mới.",
      "Những tấm vải này sau đó có thể được sử dụng để tạo ra các sản phẩm mới.",
      "Mục tiêu của chúng tôi là giảm thiểu lãng phí không cần thiết.",
      "Nghe có vẻ là một cách tuyệt vời để tận dụng nguyên liệu thừa.",
      "Thật tiếc là cơ sở của chúng tôi hiện tại chỉ có thể xử lý rác thải cotton.",
      "Nhưng trong vài năm tới, chúng tôi hy vọng có thể tái chế nhiều loại vải hơn tại đây.",
      "Tôi hy vọng rằng điều này cuối cùng có thể trở nên phổ biến như việc tái chế nhôm hiện nay."
    ],
    "exercises": [
      [
        0,
        "Cảm ơn bạn đã đồng ý tham gia phỏng vấn cho Textiles Quarterly về quy trình tái chế của công ty bạn.",
        "phỏng vấn",
        [],
        "interviewed"
      ],
      [
        0,
        "Cảm ơn bạn đã đồng ý tham gia phỏng vấn cho Textiles Quarterly về quy trình tái chế của công ty bạn.",
        "quy trình tái chế",
        [],
        "recycling process"
      ],
      [
        1,
        "Độc giả của chúng tôi chắc chắn sẽ rất hứng thú.",
        "Độc giả",
        [],
        "readers"
      ],
      [
        1,
        "Độc giả của chúng tôi chắc chắn sẽ rất hứng thú.",
        "hứng thú",
        [],
        "intrigued"
      ],
      [
        2,
        "Nói một cách đơn giản, chúng tôi xé vụn vải bỏ đi, biến nó thành một hỗn hợp nước gọi là slurry, sau đó sấy khô và ép thành những tấm vải mới.",
        "gọi",
        [],
        "called"
      ],
      [
        3,
        "Những tấm vải này sau đó có thể được sử dụng để tạo ra các sản phẩm mới.",
        "vải",
        [],
        "fabric"
      ],
      [
        3,
        "Những tấm vải này sau đó có thể được sử dụng để tạo ra các sản phẩm mới.",
        "tạo",
        [],
        "create"
      ],
      [
        3,
        "Những tấm vải này sau đó có thể được sử dụng để tạo ra các sản phẩm mới.",
        "sản phẩm",
        [],
        "products"
      ],
      [
        4,
        "Mục tiêu của chúng tôi là giảm thiểu lãng phí không cần thiết.",
        "giảm",
        [],
        "Reducing"
      ],
      [
        5,
        "Nghe có vẻ là một cách tuyệt vời để tận dụng nguyên liệu thừa.",
        "Nghe",
        [],
        "sounds"
      ],
      [
        6,
        "Thật tiếc là cơ sở của chúng tôi hiện tại chỉ có thể xử lý rác thải cotton.",
        "xử lý",
        [],
        "process"
      ],
      [
        7,
        "Nhưng trong vài năm tới, chúng tôi hy vọng có thể tái chế nhiều loại vải hơn tại đây.",
        "tái chế",
        [],
        "recycle"
      ],
      [
        7,
        "Nhưng trong vài năm tới, chúng tôi hy vọng có thể tái chế nhiều loại vải hơn tại đây.",
        "loại",
        [],
        "types"
      ],
      [
        7,
        "Nhưng trong vài năm tới, chúng tôi hy vọng có thể tái chế nhiều loại vải hơn tại đây.",
        "vải",
        [],
        "textiles"
      ],
      [
        8,
        "Tôi hy vọng rằng điều này cuối cùng có thể trở nên phổ biến như việc tái chế nhôm hiện nay.",
        "tái chế",
        [],
        "recycling aluminum"
      ]
    ]
  },
  "t9-50": {
    "sentences": [
      "Tôi nghĩ chúng ta đã tìm được người phù hợp cho công việc.",
      "Sergey có phong thái tự tin khi nói chuyện với phóng viên, và anh ấy hiểu rõ ngành du lịch.",
      "Anh ấy sẽ là phát ngôn viên tuyệt vời cho hãng hàng không của chúng ta.",
      "Tôi thích các clip truyền thông mà anh ấy chia sẻ với chúng ta.",
      "Anh ấy nói chuyện rõ ràng và tự nhiên.",
      "Tuy nhiên, anh ấy cũng làm một số công việc tư vấn để có thêm thu nhập.",
      "Liệu anh ấy có sẵn sàng bất cứ khi nào chúng ta cần không?",
      "Bạn nêu ra một điểm hay.",
      "Chúng ta nên gọi cho anh ấy về vấn đề đó.",
      "Chúng ta có lịch phỏng vấn cuối cùng với anh ấy vào ngày mai.",
      "Hãy đợi đến lúc đó."
    ],
    "exercises": [
      [
        0,
        "Tôi nghĩ chúng ta đã tìm được người phù hợp cho công việc.",
        "tìm được",
        [],
        "found"
      ],
      [
        0,
        "Tôi nghĩ chúng ta đã tìm được người phù hợp cho công việc.",
        "người",
        [],
        "person"
      ],
      [
        1,
        "Sergey có phong thái tự tin khi nói chuyện với phóng viên, và anh ấy hiểu rõ ngành du lịch.",
        "nói chuyện",
        [],
        "speaking"
      ],
      [
        1,
        "Sergey có phong thái tự tin khi nói chuyện với phóng viên, và anh ấy hiểu rõ ngành du lịch.",
        "du lịch",
        [],
        "travel"
      ],
      [
        2,
        "Anh ấy sẽ là phát ngôn viên tuyệt vời cho hãng hàng không của chúng ta.",
        "phát ngôn viên",
        [],
        "spokesperson"
      ],
      [
        2,
        "Anh ấy sẽ là phát ngôn viên tuyệt vời cho hãng hàng không của chúng ta.",
        "hãng hàng không",
        [],
        "airline"
      ],
      [
        3,
        "Tôi thích các clip truyền thông mà anh ấy chia sẻ với chúng ta.",
        "thích",
        [],
        "liked"
      ],
      [
        5,
        "Tuy nhiên, anh ấy cũng làm một số công việc tư vấn để có thêm thu nhập.",
        "tư vấn",
        [],
        "consulting"
      ],
      [
        5,
        "Tuy nhiên, anh ấy cũng làm một số công việc tư vấn để có thêm thu nhập.",
        "thu nhập",
        [],
        "income"
      ],
      [
        6,
        "Liệu anh ấy có sẵn sàng bất cứ khi nào chúng ta cần không?",
        "cần",
        [],
        "need"
      ],
      [
        7,
        "Bạn nêu ra một điểm hay.",
        "nêu ra",
        [],
        "bring up"
      ],
      [
        7,
        "Bạn nêu ra một điểm hay.",
        "điểm",
        [],
        "point"
      ],
      [
        8,
        "Chúng ta nên gọi cho anh ấy về vấn đề đó.",
        "gọi",
        [],
        "call"
      ],
      [
        9,
        "Chúng ta có lịch phỏng vấn cuối cùng với anh ấy vào ngày mai.",
        "phỏng vấn",
        [],
        "interview"
      ],
      [
        9,
        "Chúng ta có lịch phỏng vấn cuối cùng với anh ấy vào ngày mai.",
        "lịch",
        [],
        "scheduled"
      ],
      [
        10,
        "Hãy đợi đến lúc đó.",
        "đợi",
        [],
        "wait"
      ]
    ]
  },
  "t9-53": {
    "sentences": [
      "Chào buổi sáng, ông Murray.",
      "Tôi đến để giúp ông bắt đầu lên kế hoạch cho buổi khai trương của phòng tranh nghệ thuật mới nhất của ông.",
      "Tuyệt! Như ông biết, đây sẽ là địa điểm thứ ba của chúng ta.",
      "Vì vậy tôi nghĩ lần này mình muốn thử một cách tiếp cận khác.",
      "Tôi hiểu rồi. Tôi có nhiều lựa chọn để ông cân nhắc.",
      "Nghe hay đấy.",
      "Để tôi lấy thực đơn phục vụ tiệc và cuốn sổ các lựa chọn hoa từ xe của tôi.",
      "Xe tôi đang đậu ngay bên ngoài."
    ],
    "exercises": [
      [
        1,
        "Tôi đến để giúp ông bắt đầu lên kế hoạch cho buổi khai trương của phòng tranh nghệ thuật mới nhất của ông.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        1,
        "Tôi đến để giúp ông bắt đầu lên kế hoạch cho buổi khai trương của phòng tranh nghệ thuật mới nhất của ông.",
        "lên kế hoạch",
        [],
        "planning"
      ],
      [
        1,
        "Tôi đến để giúp ông bắt đầu lên kế hoạch cho buổi khai trương của phòng tranh nghệ thuật mới nhất của ông.",
        "phòng tranh nghệ thuật",
        [],
        "art gallery"
      ],
      [
        2,
        "Tuyệt! Như ông biết, đây sẽ là địa điểm thứ ba của chúng ta.",
        "biết",
        [],
        "know"
      ],
      [
        3,
        "Vì vậy tôi nghĩ lần này mình muốn thử một cách tiếp cận khác.",
        "nghĩ",
        [],
        "think"
      ],
      [
        4,
        "Tôi hiểu rồi. Tôi có nhiều lựa chọn để ông cân nhắc.",
        "hiểu",
        [],
        "understand"
      ],
      [
        4,
        "Tôi hiểu rồi. Tôi có nhiều lựa chọn để ông cân nhắc.",
        "lựa chọn",
        [],
        "options"
      ],
      [
        4,
        "Tôi hiểu rồi. Tôi có nhiều lựa chọn để ông cân nhắc.",
        "cân nhắc",
        [],
        "consider"
      ],
      [
        6,
        "Để tôi lấy thực đơn phục vụ tiệc và cuốn sổ các lựa chọn hoa từ xe của tôi.",
        "thực đơn phục vụ tiệc",
        [],
        "catering menu"
      ],
      [
        6,
        "Để tôi lấy thực đơn phục vụ tiệc và cuốn sổ các lựa chọn hoa từ xe của tôi.",
        "các lựa chọn hoa",
        [],
        "flower selections"
      ],
      [
        7,
        "Xe tôi đang đậu ngay bên ngoài.",
        "đậu",
        [],
        "parked"
      ],
      [
        7,
        "Xe tôi đang đậu ngay bên ngoài.",
        "bên ngoài",
        [],
        "outside"
      ]
    ]
  },
  "t9-56": {
    "sentences": [
      "Cảm ơn bạn đã tham gia podcast của tôi, Bianca.",
      "Tôi đang rất thích cuốn sách nấu ăn độc đáo của bạn, nơi bạn biến tấu các món ăn truyền thống từ khắp nơi trên thế giới bằng những nguyên liệu khác lạ—điều này tạo nên phong cách hiện đại cho chúng.",
      "Cảm hứng của bạn đến từ đâu?",
      "Sau khi tốt nghiệp đại học, tôi muốn tìm một cách kết hợp kiến thức lịch sử mà tôi học được với việc nấu ăn.",
      "Vì vậy tôi đã quyết định theo học trường dạy nấu ăn.",
      "Tôi cũng nhận thấy bạn cung cấp công thức bằng nhiều ngôn ngữ khác nhau.",
      "Đây là một chi tiết hay mà nhiều độc giả sẽ đánh giá cao.",
      "Điều này có dựa trên nơi món ăn đó xuất xứ không?"
    ],
    "exercises": [
      [
        0,
        "Cảm ơn bạn đã tham gia podcast của tôi, Bianca.",
        "tham gia",
        [],
        "joining"
      ],
      [
        1,
        "Tôi đang rất thích cuốn sách nấu ăn độc đáo của bạn, nơi bạn biến tấu các món ăn truyền thống từ khắp nơi trên thế giới bằng những nguyên liệu khác lạ—điều này tạo nên phong cách hiện đại cho chúng.",
        "thích",
        [],
        "enjoying"
      ],
      [
        1,
        "Tôi đang rất thích cuốn sách nấu ăn độc đáo của bạn, nơi bạn biến tấu các món ăn truyền thống từ khắp nơi trên thế giới bằng những nguyên liệu khác lạ—điều này tạo nên phong cách hiện đại cho chúng.",
        "sách nấu ăn",
        [],
        "cookbook"
      ],
      [
        1,
        "Tôi đang rất thích cuốn sách nấu ăn độc đáo của bạn, nơi bạn biến tấu các món ăn truyền thống từ khắp nơi trên thế giới bằng những nguyên liệu khác lạ—điều này tạo nên phong cách hiện đại cho chúng.",
        "món ăn",
        [],
        "dishes"
      ],
      [
        2,
        "Cảm hứng của bạn đến từ đâu?",
        "Cảm hứng",
        [],
        "inspiration"
      ],
      [
        3,
        "Sau khi tốt nghiệp đại học, tôi muốn tìm một cách kết hợp kiến thức lịch sử mà tôi học được với việc nấu ăn.",
        "tìm",
        [],
        "looking for"
      ],
      [
        4,
        "Vì vậy tôi đã quyết định theo học trường dạy nấu ăn.",
        "quyết định",
        [],
        "decided"
      ],
      [
        4,
        "Vì vậy tôi đã quyết định theo học trường dạy nấu ăn.",
        "theo học",
        [],
        "attend"
      ],
      [
        4,
        "Vì vậy tôi đã quyết định theo học trường dạy nấu ăn.",
        "trường dạy nấu ăn",
        [],
        "culinary school"
      ],
      [
        5,
        "Tôi cũng nhận thấy bạn cung cấp công thức bằng nhiều ngôn ngữ khác nhau.",
        "cung cấp",
        [],
        "provide"
      ],
      [
        6,
        "Đây là một chi tiết hay mà nhiều độc giả sẽ đánh giá cao.",
        "độc giả",
        [],
        "readers"
      ],
      [
        6,
        "Đây là một chi tiết hay mà nhiều độc giả sẽ đánh giá cao.",
        "đánh giá cao",
        [],
        "appreciate"
      ],
      [
        7,
        "Điều này có dựa trên nơi món ăn đó xuất xứ không?",
        "món ăn",
        [],
        "dish"
      ]
    ]
  },
  "t9-59": {
    "sentences": [
      "Chào Ji-Soo và Alberto.",
      "Hai bạn có dự định tham dự hội nghị dược phẩm vào tháng tới không? Tôi nghĩ đó sẽ là một cơ hội tuyệt vời để chúng ta học hỏi và kết nối với các chuyên gia khác trong ngành.",
      "Có, chúng tôi sẽ tham dự. Thực tế là Alberto và tôi sẽ dẫn dắt một buổi thảo luận bàn tròn về chăm sóc sức khỏe bền vững.",
      "Tuyệt vời quá. Khi nào vậy?",
      "Tôi không nhớ chính xác thời gian.",
      "Alberto, bạn có lịch trình không?",
      "Có, tôi vừa tải ứng dụng của hội nghị.",
      "Thông tin chắc chắn được ghi ở đó.",
      "Để xem nào. Có vẻ là vào thứ Năm lúc bốn giờ.",
      "Tuyệt! Tôi sẽ tải ứng dụng ngay bây giờ và đăng ký."
    ],
    "exercises": [
      [
        1,
        "Hai bạn có dự định tham dự hội nghị dược phẩm vào tháng tới không? Tôi nghĩ đó sẽ là một cơ hội tuyệt vời để chúng ta học hỏi và kết nối với các chuyên gia khác trong ngành.",
        "dự định",
        [],
        "planning"
      ],
      [
        1,
        "Hai bạn có dự định tham dự hội nghị dược phẩm vào tháng tới không? Tôi nghĩ đó sẽ là một cơ hội tuyệt vời để chúng ta học hỏi và kết nối với các chuyên gia khác trong ngành.",
        "tham dự",
        [],
        "attending"
      ],
      [
        1,
        "Hai bạn có dự định tham dự hội nghị dược phẩm vào tháng tới không? Tôi nghĩ đó sẽ là một cơ hội tuyệt vời để chúng ta học hỏi và kết nối với các chuyên gia khác trong ngành.",
        "hội nghị",
        [],
        "pharmaceutical conference"
      ],
      [
        2,
        "Có, chúng tôi sẽ tham dự. Thực tế là Alberto và tôi sẽ dẫn dắt một buổi thảo luận bàn tròn về chăm sóc sức khỏe bền vững.",
        "chăm sóc sức khỏe",
        [],
        "health care"
      ],
      [
        3,
        "Tuyệt vời quá. Khi nào vậy?",
        "Tuyệt vời",
        [],
        "fantastic"
      ],
      [
        4,
        "Tôi không nhớ chính xác thời gian.",
        "không",
        [],
        "can't"
      ],
      [
        4,
        "Tôi không nhớ chính xác thời gian.",
        "nhớ",
        [],
        "remember"
      ],
      [
        5,
        "Alberto, bạn có lịch trình không?",
        "lịch trình",
        [],
        "schedule"
      ],
      [
        6,
        "Có, tôi vừa tải ứng dụng của hội nghị.",
        "ứng dụng",
        [],
        "app"
      ],
      [
        7,
        "Thông tin chắc chắn được ghi ở đó.",
        "ghi",
        [],
        "listed"
      ],
      [
        8,
        "Để xem nào. Có vẻ là vào thứ Năm lúc bốn giờ.",
        "xem",
        [],
        "see"
      ],
      [
        8,
        "Để xem nào. Có vẻ là vào thứ Năm lúc bốn giờ.",
        "Có vẻ",
        [],
        "looks"
      ],
      [
        8,
        "Để xem nào. Có vẻ là vào thứ Năm lúc bốn giờ.",
        "thứ Năm",
        [],
        "Thursday"
      ],
      [
        9,
        "Tuyệt! Tôi sẽ tải ứng dụng ngay bây giờ và đăng ký.",
        "ứng dụng",
        [],
        "app"
      ],
      [
        9,
        "Tuyệt! Tôi sẽ tải ứng dụng ngay bây giờ và đăng ký.",
        "đăng ký",
        [],
        "sign up"
      ]
    ]
  },
  "t9-62": {
    "sentences": [
      "Công viên nước của chúng ta sắp mở cửa trở lại cho mùa hè, và chúng ta đang tìm cách để tăng lượng khách đến công viên.",
      "Đây là một vấn đề đã kéo dài khá lâu rồi.",
      "Tôi đồng ý. Chủ yếu là các ngày trong tuần có lượng khách rất thấp.",
      "Vì vậy tôi đã nghĩ ra một kế hoạch với những ưu đãi đặc biệt vào những ngày đó.",
      "Bạn thấy thế nào?",
      "Kế hoạch đó tốt đấy. Tôi thích ý tưởng miễn phí đỗ xe.",
      "Thực ra, tôi nghĩ chúng ta nên áp dụng ưu đãi này vào thêm một ngày nữa.",
      "Hay là chúng ta thay vé trò chơi điện tử miễn phí bằng một ngày miễn phí đỗ xe nữa nhé?",
      "Được thôi. Nhưng trước tiên tôi sẽ trao đổi với đội bảo trì để đảm bảo việc sửa chữa khu bãi đỗ xe phụ được hoàn tất trước khi khách hàng bắt đầu đến."
    ],
    "exercises": [
      [
        0,
        "Công viên nước của chúng ta sắp mở cửa trở lại cho mùa hè, và chúng ta đang tìm cách để tăng lượng khách đến công viên.",
        "Công viên nước",
        [],
        "water park"
      ],
      [
        0,
        "Công viên nước của chúng ta sắp mở cửa trở lại cho mùa hè, và chúng ta đang tìm cách để tăng lượng khách đến công viên.",
        "tìm",
        [],
        "looking for"
      ],
      [
        0,
        "Công viên nước của chúng ta sắp mở cửa trở lại cho mùa hè, và chúng ta đang tìm cách để tăng lượng khách đến công viên.",
        "tăng",
        [],
        "increase"
      ],
      [
        1,
        "Đây là một vấn đề đã kéo dài khá lâu rồi.",
        "vấn đề",
        [],
        "ongoing problem"
      ],
      [
        2,
        "Tôi đồng ý. Chủ yếu là các ngày trong tuần có lượng khách rất thấp.",
        "đồng ý",
        [],
        "agree"
      ],
      [
        3,
        "Vì vậy tôi đã nghĩ ra một kế hoạch với những ưu đãi đặc biệt vào những ngày đó.",
        "kế hoạch",
        [],
        "plan"
      ],
      [
        3,
        "Vì vậy tôi đã nghĩ ra một kế hoạch với những ưu đãi đặc biệt vào những ngày đó.",
        "ưu đãi đặc biệt",
        [],
        "special offers"
      ],
      [
        4,
        "Bạn thấy thế nào?",
        "thấy",
        [],
        "think"
      ],
      [
        5,
        "Kế hoạch đó tốt đấy. Tôi thích ý tưởng miễn phí đỗ xe.",
        "thích",
        [],
        "like"
      ],
      [
        5,
        "Kế hoạch đó tốt đấy. Tôi thích ý tưởng miễn phí đỗ xe.",
        "miễn phí",
        [],
        "free parking"
      ],
      [
        6,
        "Thực ra, tôi nghĩ chúng ta nên áp dụng ưu đãi này vào thêm một ngày nữa.",
        "Thực ra",
        [],
        "fact"
      ],
      [
        6,
        "Thực ra, tôi nghĩ chúng ta nên áp dụng ưu đãi này vào thêm một ngày nữa.",
        "ưu đãi",
        [],
        "offer"
      ],
      [
        7,
        "Hay là chúng ta thay vé trò chơi điện tử miễn phí bằng một ngày miễn phí đỗ xe nữa nhé?",
        "thay",
        [],
        "replace"
      ],
      [
        7,
        "Hay là chúng ta thay vé trò chơi điện tử miễn phí bằng một ngày miễn phí đỗ xe nữa nhé?",
        "đỗ xe",
        [],
        "free parking"
      ],
      [
        8,
        "Được thôi. Nhưng trước tiên tôi sẽ trao đổi với đội bảo trì để đảm bảo việc sửa chữa khu bãi đỗ xe phụ được hoàn tất trước khi khách hàng bắt đầu đến.",
        "sửa chữa",
        [],
        "repairs"
      ]
    ]
  },
  "t9-65": {
    "sentences": [
      "Tôi không tìm thấy chiếc áo này đúng cỡ của mình.",
      "Anh/chị có còn chiếc nào cỡ nhỏ (size S) không?",
      "Triển lãm các bức vẽ của Narumi Azuma đang rất được yêu thích.",
      "Cửa hàng quà tặng đã bán hết khá nhiều mặt hàng rồi.",
      "Bạn có muốn tôi kiểm tra xem chiếc áo trưng bày có phải cỡ nhỏ không?",
      "Vâng. Hình in đó là một trong những mẫu tôi thích nhất.",
      "Bạn thật may mắn. Nó là cỡ nhỏ.",
      "Tôi sẽ tính tiền cho bạn nhé.",
      "Bạn có phải là hội viên của bảo tàng không?",
      "Không, tôi không phải.",
      "Bạn có thể cân nhắc việc trở thành hội viên.",
      "Hội viên sẽ được giảm giá mười phần trăm tại cửa hàng quà tặng."
    ],
    "exercises": [
      [
        0,
        "Tôi không tìm thấy chiếc áo này đúng cỡ của mình.",
        "không",
        [],
        "can't"
      ],
      [
        0,
        "Tôi không tìm thấy chiếc áo này đúng cỡ của mình.",
        "tìm thấy",
        [],
        "find"
      ],
      [
        0,
        "Tôi không tìm thấy chiếc áo này đúng cỡ của mình.",
        "áo",
        [],
        "shirt"
      ],
      [
        0,
        "Tôi không tìm thấy chiếc áo này đúng cỡ của mình.",
        "cỡ",
        [],
        "size"
      ],
      [
        2,
        "Triển lãm các bức vẽ của Narumi Azuma đang rất được yêu thích.",
        "Triển lãm",
        [],
        "exhibit"
      ],
      [
        2,
        "Triển lãm các bức vẽ của Narumi Azuma đang rất được yêu thích.",
        "yêu thích",
        [],
        "popular"
      ],
      [
        3,
        "Cửa hàng quà tặng đã bán hết khá nhiều mặt hàng rồi.",
        "Cửa hàng quà tặng",
        [],
        "gift shop"
      ],
      [
        3,
        "Cửa hàng quà tặng đã bán hết khá nhiều mặt hàng rồi.",
        "bán",
        [],
        "sold"
      ],
      [
        4,
        "Bạn có muốn tôi kiểm tra xem chiếc áo trưng bày có phải cỡ nhỏ không?",
        "xem",
        [],
        "see"
      ],
      [
        4,
        "Bạn có muốn tôi kiểm tra xem chiếc áo trưng bày có phải cỡ nhỏ không?",
        "áo trưng bày",
        [],
        "display shirt"
      ],
      [
        4,
        "Bạn có muốn tôi kiểm tra xem chiếc áo trưng bày có phải cỡ nhỏ không?",
        "nhỏ",
        [],
        "small"
      ],
      [
        5,
        "Vâng. Hình in đó là một trong những mẫu tôi thích nhất.",
        "in",
        [],
        "print"
      ],
      [
        6,
        "Bạn thật may mắn. Nó là cỡ nhỏ.",
        "nhỏ",
        [],
        "small"
      ],
      [
        7,
        "Tôi sẽ tính tiền cho bạn nhé.",
        "tính tiền",
        [],
        "ring"
      ],
      [
        8,
        "Bạn có phải là hội viên của bảo tàng không?",
        "hội viên của bảo tàng",
        [],
        "museum member"
      ],
      [
        10,
        "Bạn có thể cân nhắc việc trở thành hội viên.",
        "cân nhắc",
        [],
        "consider"
      ],
      [
        11,
        "Hội viên sẽ được giảm giá mười phần trăm tại cửa hàng quà tặng.",
        "giảm giá mười phần trăm",
        [],
        "ten percent discount"
      ],
      [
        11,
        "Hội viên sẽ được giảm giá mười phần trăm tại cửa hàng quà tặng.",
        "cửa hàng quà tặng",
        [],
        "gift shop"
      ]
    ]
  },
  "t9-68": {
    "sentences": [
      "Chào. Tôi muốn lắp một hàng rào mới quanh khu đất của mình.",
      "Bạn đã gọi đúng chỗ rồi.",
      "Bạn đang tìm loại hàng rào nào?",
      "Một loại chắc chắn để bao quanh vườn, tránh cho động vật ăn rau.",
      "Được rồi. Hàng rào lưới có lẽ sẽ phù hợp với bạn.",
      "Thực ra, hiện tại chúng tôi đang có chương trình khuyến mãi cho hàng rào.",
      "Nếu bạn trả trước một nửa chi phí, bạn sẽ được giảm giá hai mươi phần trăm.",
      "Nghe tuyệt đấy. Bạn có thể cho tôi ước tính chi phí không?",
      "Chưa thể, cho đến khi tôi đo đạc.",
      "Tôi có thể làm việc đó vào thứ Bảy, nếu bạn rảnh."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi muốn lắp một hàng rào mới quanh khu đất của mình.",
        "hàng rào",
        [],
        "fence"
      ],
      [
        1,
        "Bạn đã gọi đúng chỗ rồi.",
        "gọi",
        [],
        "called"
      ],
      [
        1,
        "Bạn đã gọi đúng chỗ rồi.",
        "chỗ",
        [],
        "place"
      ],
      [
        2,
        "Bạn đang tìm loại hàng rào nào?",
        "hàng rào",
        [],
        "fence"
      ],
      [
        2,
        "Bạn đang tìm loại hàng rào nào?",
        "tìm",
        [],
        "looking for"
      ],
      [
        3,
        "Một loại chắc chắn để bao quanh vườn, tránh cho động vật ăn rau.",
        "rau",
        [],
        "vegetables"
      ],
      [
        4,
        "Được rồi. Hàng rào lưới có lẽ sẽ phù hợp với bạn.",
        "Hàng rào",
        [],
        "fence"
      ],
      [
        5,
        "Thực ra, hiện tại chúng tôi đang có chương trình khuyến mãi cho hàng rào.",
        "Thực ra",
        [],
        "fact"
      ],
      [
        5,
        "Thực ra, hiện tại chúng tôi đang có chương trình khuyến mãi cho hàng rào.",
        "khuyến mãi",
        [],
        "promotion"
      ],
      [
        5,
        "Thực ra, hiện tại chúng tôi đang có chương trình khuyến mãi cho hàng rào.",
        "hàng rào",
        [],
        "fences"
      ],
      [
        6,
        "Nếu bạn trả trước một nửa chi phí, bạn sẽ được giảm giá hai mươi phần trăm.",
        "chi phí",
        [],
        "cost"
      ],
      [
        6,
        "Nếu bạn trả trước một nửa chi phí, bạn sẽ được giảm giá hai mươi phần trăm.",
        "trước",
        [],
        "in advance"
      ],
      [
        7,
        "Nghe tuyệt đấy. Bạn có thể cho tôi ước tính chi phí không?",
        "cho",
        [],
        "give"
      ],
      [
        7,
        "Nghe tuyệt đấy. Bạn có thể cho tôi ước tính chi phí không?",
        "chi phí",
        [],
        "cost"
      ],
      [
        8,
        "Chưa thể, cho đến khi tôi đo đạc.",
        "Chưa",
        [],
        "Not"
      ],
      [
        9,
        "Tôi có thể làm việc đó vào thứ Bảy, nếu bạn rảnh.",
        "thứ Bảy",
        [],
        "Saturday"
      ]
    ]
  },
  "t10-32": {
    "sentences": [
      "Bianca, không gian bán lẻ bên cạnh chúng ta sẽ có sẵn vào tháng Sáu.",
      "Điều đó có nghĩa là chúng ta có thể bắt đầu mở rộng cửa hàng mà chúng ta đã lên kế hoạch.",
      "Thật là tin tuyệt vời! Sau khi mở rộng không gian, cuối cùng chúng ta có thể làm nhiều thứ hơn là chỉ bán nhạc cụ.",
      "Anh biết em sẽ vui khi nghe tin này.",
      "Chúng ta sẽ có thể thêm các phòng luyện tập để cung cấp các lớp học nhạc riêng vào cuối năm."
    ],
    "exercises": [
      [
        0,
        "Bianca, không gian bán lẻ bên cạnh chúng ta sẽ có sẵn vào tháng Sáu.",
        "không gian bán lẻ",
        [],
        "retail space"
      ],
      [
        0,
        "Bianca, không gian bán lẻ bên cạnh chúng ta sẽ có sẵn vào tháng Sáu.",
        "có sẵn",
        [],
        "become available"
      ],
      [
        0,
        "Bianca, không gian bán lẻ bên cạnh chúng ta sẽ có sẵn vào tháng Sáu.",
        "tháng Sáu",
        [],
        "June"
      ],
      [
        1,
        "Điều đó có nghĩa là chúng ta có thể bắt đầu mở rộng cửa hàng mà chúng ta đã lên kế hoạch.",
        "bắt đầu",
        [],
        "begin"
      ],
      [
        1,
        "Điều đó có nghĩa là chúng ta có thể bắt đầu mở rộng cửa hàng mà chúng ta đã lên kế hoạch.",
        "mở rộng cửa hàng",
        [],
        "store expansion"
      ],
      [
        1,
        "Điều đó có nghĩa là chúng ta có thể bắt đầu mở rộng cửa hàng mà chúng ta đã lên kế hoạch.",
        "lên kế hoạch",
        [],
        "planning"
      ],
      [
        2,
        "Thật là tin tuyệt vời! Sau khi mở rộng không gian, cuối cùng chúng ta có thể làm nhiều thứ hơn là chỉ bán nhạc cụ.",
        "bán",
        [],
        "sell"
      ],
      [
        2,
        "Thật là tin tuyệt vời! Sau khi mở rộng không gian, cuối cùng chúng ta có thể làm nhiều thứ hơn là chỉ bán nhạc cụ.",
        "nhạc cụ",
        [],
        "musical instruments"
      ],
      [
        3,
        "Anh biết em sẽ vui khi nghe tin này.",
        "biết",
        [],
        "knew"
      ],
      [
        3,
        "Anh biết em sẽ vui khi nghe tin này.",
        "tin",
        [],
        "news"
      ],
      [
        4,
        "Chúng ta sẽ có thể thêm các phòng luyện tập để cung cấp các lớp học nhạc riêng vào cuối năm.",
        "thêm",
        [],
        "add"
      ],
      [
        4,
        "Chúng ta sẽ có thể thêm các phòng luyện tập để cung cấp các lớp học nhạc riêng vào cuối năm.",
        "phòng luyện tập",
        [],
        "practice rooms"
      ],
      [
        4,
        "Chúng ta sẽ có thể thêm các phòng luyện tập để cung cấp các lớp học nhạc riêng vào cuối năm.",
        "cung cấp",
        [],
        "offer"
      ],
      [
        4,
        "Chúng ta sẽ có thể thêm các phòng luyện tập để cung cấp các lớp học nhạc riêng vào cuối năm.",
        "lớp học nhạc",
        [],
        "private music lessons"
      ]
    ]
  },
  "t10-35": {
    "sentences": [
      "Chào. Tôi đang cải tạo sảnh văn phòng và muốn mua một ít sơn cho các bức tường.",
      "Vâng. Anh đang nghĩ đến màu gì?",
      "À, tôi muốn sơn các bức tường bằng một trong các màu từ logo mới của chúng tôi, hoặc màu xanh lá hoặc màu đỏ.",
      "Ừm… Tôi sẽ không chọn màu đỏ—nó sẽ phai quá nhanh.",
      "Ồ, được rồi. Vậy thì chúng ta chọn màu xanh lá.",
      "Anh có mang theo bản logo không? Nếu tôi có hình ảnh, tôi có thể pha sơn theo màu phù hợp.",
      "Thực ra là không.",
      "Vậy, nếu anh gửi cho tôi một bức ảnh của logo qua email, tôi có thể chuẩn bị sơn cho anh vào thứ Sáu."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi đang cải tạo sảnh văn phòng và muốn mua một ít sơn cho các bức tường.",
        "cải tạo",
        [],
        "renovating"
      ],
      [
        0,
        "Chào. Tôi đang cải tạo sảnh văn phòng và muốn mua một ít sơn cho các bức tường.",
        "sảnh",
        [],
        "lobby"
      ],
      [
        0,
        "Chào. Tôi đang cải tạo sảnh văn phòng và muốn mua một ít sơn cho các bức tường.",
        "sơn",
        [],
        "paint"
      ],
      [
        0,
        "Chào. Tôi đang cải tạo sảnh văn phòng và muốn mua một ít sơn cho các bức tường.",
        "bức tường",
        [],
        "walls"
      ],
      [
        1,
        "Vâng. Anh đang nghĩ đến màu gì?",
        "nghĩ đến",
        [],
        "have in mind"
      ],
      [
        2,
        "À, tôi muốn sơn các bức tường bằng một trong các màu từ logo mới của chúng tôi, hoặc màu xanh lá hoặc màu đỏ.",
        "sơn",
        [],
        "paint"
      ],
      [
        2,
        "À, tôi muốn sơn các bức tường bằng một trong các màu từ logo mới của chúng tôi, hoặc màu xanh lá hoặc màu đỏ.",
        "bức tường",
        [],
        "walls"
      ],
      [
        2,
        "À, tôi muốn sơn các bức tường bằng một trong các màu từ logo mới của chúng tôi, hoặc màu xanh lá hoặc màu đỏ.",
        "màu xanh lá",
        [],
        "green"
      ],
      [
        2,
        "À, tôi muốn sơn các bức tường bằng một trong các màu từ logo mới của chúng tôi, hoặc màu xanh lá hoặc màu đỏ.",
        "màu đỏ",
        [],
        "red"
      ],
      [
        3,
        "Ừm… Tôi sẽ không chọn màu đỏ—nó sẽ phai quá nhanh.",
        "không",
        [],
        "wouldn't"
      ],
      [
        3,
        "Ừm… Tôi sẽ không chọn màu đỏ—nó sẽ phai quá nhanh.",
        "chọn",
        [],
        "choose"
      ],
      [
        3,
        "Ừm… Tôi sẽ không chọn màu đỏ—nó sẽ phai quá nhanh.",
        "màu đỏ",
        [],
        "red"
      ],
      [
        4,
        "Ồ, được rồi. Vậy thì chúng ta chọn màu xanh lá.",
        "màu xanh lá",
        [],
        "green"
      ],
      [
        5,
        "Anh có mang theo bản logo không? Nếu tôi có hình ảnh, tôi có thể pha sơn theo màu phù hợp.",
        "sơn",
        [],
        "paint"
      ],
      [
        6,
        "Thực ra là không.",
        "không",
        [],
        "don't"
      ],
      [
        7,
        "Vậy, nếu anh gửi cho tôi một bức ảnh của logo qua email, tôi có thể chuẩn bị sơn cho anh vào thứ Sáu.",
        "sơn",
        [],
        "paint"
      ],
      [
        7,
        "Vậy, nếu anh gửi cho tôi một bức ảnh của logo qua email, tôi có thể chuẩn bị sơn cho anh vào thứ Sáu.",
        "thứ Sáu",
        [],
        "Friday"
      ]
    ]
  },
  "t10-38": {
    "sentences": [
      "Chào mừng đến với quầy dịch vụ khách hàng của Western Airlines.",
      "Tôi có thể giúp gì cho quý khách?",
      "Chào. Tôi đã bay đến từ Canada ngày hôm qua và được thông báo rằng hành lý của tôi bị vô tình gửi nhầm sang chuyến bay đến vào sáng nay.",
      "Vâng. Anh có mang theo thẻ lên máy bay không?",
      "Có—đây ạ. Tôi có thể đến khu vực hành lý thất lạc để lấy hành lý không?",
      "Khu vực đó nằm sau kiểm soát an ninh.",
      "Tôi có thể dùng thông tin trên thẻ lên máy bay để tìm hành lý cho anh."
    ],
    "exercises": [
      [
        0,
        "Chào mừng đến với quầy dịch vụ khách hàng của Western Airlines.",
        "dịch vụ khách hàng",
        [],
        "Western Airlines customer service desk"
      ],
      [
        1,
        "Tôi có thể giúp gì cho quý khách?",
        "giúp",
        [],
        "assist"
      ],
      [
        2,
        "Chào. Tôi đã bay đến từ Canada ngày hôm qua và được thông báo rằng hành lý của tôi bị vô tình gửi nhầm sang chuyến bay đến vào sáng nay.",
        "hành lý",
        [],
        "luggage"
      ],
      [
        3,
        "Vâng. Anh có mang theo thẻ lên máy bay không?",
        "thẻ lên máy bay",
        [],
        "boarding pass"
      ],
      [
        4,
        "Có—đây ạ. Tôi có thể đến khu vực hành lý thất lạc để lấy hành lý không?",
        "khu vực hành lý thất lạc",
        [],
        "unclaimed baggage area"
      ],
      [
        4,
        "Có—đây ạ. Tôi có thể đến khu vực hành lý thất lạc để lấy hành lý không?",
        "lấy",
        [],
        "pick up"
      ],
      [
        5,
        "Khu vực đó nằm sau kiểm soát an ninh.",
        "Khu vực",
        [],
        "area"
      ],
      [
        6,
        "Tôi có thể dùng thông tin trên thẻ lên máy bay để tìm hành lý cho anh.",
        "dùng",
        [],
        "use"
      ],
      [
        6,
        "Tôi có thể dùng thông tin trên thẻ lên máy bay để tìm hành lý cho anh.",
        "thẻ lên máy bay",
        [],
        "boarding pass"
      ],
      [
        6,
        "Tôi có thể dùng thông tin trên thẻ lên máy bay để tìm hành lý cho anh.",
        "hành lý",
        [],
        "luggage"
      ]
    ]
  },
  "t10-41": {
    "sentences": [
      "Chúng tôi rất vui khi bạn gia nhập văn phòng của chúng tôi với vai trò là nha sĩ vệ sinh răng miệng mới, Maria.",
      "Như bạn đã biết, bạn sẽ làm sạch răng cho bệnh nhân trước khi tôi vào để hoàn tất kiểm tra.",
      "Tôi cũng sẽ chịu trách nhiệm cập nhật hồ sơ bệnh nhân và lên lịch hẹn tiếp theo cho họ, đúng không?",
      "Đúng rồi. Chúng tôi sử dụng một phần mềm có tên DentalX cho tất cả hồ sơ bệnh nhân.",
      "Bạn đã từng sử dụng nó chưa?",
      "Có, tôi quen với phần mềm đó.",
      "Tuyệt. Ngoài ra, hãy nhớ rằng văn phòng của chúng ta đóng cửa mỗi ngày từ 12 giờ đến 1 giờ 30 để nghỉ trưa, nên hãy lưu ý khi lên lịch hẹn cho bệnh nhân."
    ],
    "exercises": [
      [
        0,
        "Chúng tôi rất vui khi bạn gia nhập văn phòng của chúng tôi với vai trò là nha sĩ vệ sinh răng miệng mới, Maria.",
        "văn phòng",
        [],
        "office"
      ],
      [
        1,
        "Như bạn đã biết, bạn sẽ làm sạch răng cho bệnh nhân trước khi tôi vào để hoàn tất kiểm tra.",
        "làm sạch",
        [],
        "cleaning"
      ],
      [
        2,
        "Tôi cũng sẽ chịu trách nhiệm cập nhật hồ sơ bệnh nhân và lên lịch hẹn tiếp theo cho họ, đúng không?",
        "chịu trách nhiệm",
        [],
        "responsible for"
      ],
      [
        2,
        "Tôi cũng sẽ chịu trách nhiệm cập nhật hồ sơ bệnh nhân và lên lịch hẹn tiếp theo cho họ, đúng không?",
        "cập nhật",
        [],
        "updating"
      ],
      [
        2,
        "Tôi cũng sẽ chịu trách nhiệm cập nhật hồ sơ bệnh nhân và lên lịch hẹn tiếp theo cho họ, đúng không?",
        "hồ sơ bệnh nhân",
        [],
        "patients' files"
      ],
      [
        2,
        "Tôi cũng sẽ chịu trách nhiệm cập nhật hồ sơ bệnh nhân và lên lịch hẹn tiếp theo cho họ, đúng không?",
        "lên lịch",
        [],
        "scheduling"
      ],
      [
        3,
        "Đúng rồi. Chúng tôi sử dụng một phần mềm có tên DentalX cho tất cả hồ sơ bệnh nhân.",
        "sử dụng",
        [],
        "use"
      ],
      [
        3,
        "Đúng rồi. Chúng tôi sử dụng một phần mềm có tên DentalX cho tất cả hồ sơ bệnh nhân.",
        "phần mềm",
        [],
        "software"
      ],
      [
        3,
        "Đúng rồi. Chúng tôi sử dụng một phần mềm có tên DentalX cho tất cả hồ sơ bệnh nhân.",
        "hồ sơ bệnh nhân",
        [],
        "patient records"
      ],
      [
        4,
        "Bạn đã từng sử dụng nó chưa?",
        "sử dụng",
        [],
        "used"
      ],
      [
        5,
        "Có, tôi quen với phần mềm đó.",
        "phần mềm",
        [],
        "software"
      ],
      [
        6,
        "Tuyệt. Ngoài ra, hãy nhớ rằng văn phòng của chúng ta đóng cửa mỗi ngày từ 12 giờ đến 1 giờ 30 để nghỉ trưa, nên hãy lưu ý khi lên lịch hẹn cho bệnh nhân.",
        "nhớ",
        [],
        "remember"
      ],
      [
        6,
        "Tuyệt. Ngoài ra, hãy nhớ rằng văn phòng của chúng ta đóng cửa mỗi ngày từ 12 giờ đến 1 giờ 30 để nghỉ trưa, nên hãy lưu ý khi lên lịch hẹn cho bệnh nhân.",
        "lên lịch",
        [],
        "scheduling"
      ]
    ]
  },
  "t10-44": {
    "sentences": [
      "Tiếp theo, tôi muốn trao đổi với nhóm thiết kế về các viên gạch thấm nước cho lối đi.",
      "Tôi nghĩ loại gạch này sẽ được ưa chuộng ở những khu vực có vấn đề về thoát nước.",
      "Nhưng tôi lo rằng thiết kế cuối cùng sẽ không kịp hoàn thành cho hội chợ thương mại.",
      "Đúng rồi, chúng ta vẫn cần hoàn tất việc kiểm tra độ bền.",
      "Camille, tiến độ thế nào rồi?",
      "Cho đến nay, chúng có vẻ bền như chúng ta dự đoán.",
      "Nhưng chúng ta vẫn còn một vài bài kiểm tra nữa.",
      "Tuyệt. Hãy cập nhật cho tôi về tiến độ nhé.",
      "Trong khi đó, chúng ta nên bắt đầu chuẩn bị một video quảng cáo để trình chiếu tại gian hàng ở hội chợ.",
      "Ai muốn giúp tôi thực hiện dự án này?"
    ],
    "exercises": [
      [
        0,
        "Tiếp theo, tôi muốn trao đổi với nhóm thiết kế về các viên gạch thấm nước cho lối đi.",
        "muốn",
        [],
        "wanted"
      ],
      [
        0,
        "Tiếp theo, tôi muốn trao đổi với nhóm thiết kế về các viên gạch thấm nước cho lối đi.",
        "gạch thấm nước",
        [],
        "water-permeable bricks"
      ],
      [
        1,
        "Tôi nghĩ loại gạch này sẽ được ưa chuộng ở những khu vực có vấn đề về thoát nước.",
        "ưa chuộng",
        [],
        "popular"
      ],
      [
        1,
        "Tôi nghĩ loại gạch này sẽ được ưa chuộng ở những khu vực có vấn đề về thoát nước.",
        "khu vực",
        [],
        "areas"
      ],
      [
        2,
        "Nhưng tôi lo rằng thiết kế cuối cùng sẽ không kịp hoàn thành cho hội chợ thương mại.",
        "thiết kế",
        [],
        "design"
      ],
      [
        2,
        "Nhưng tôi lo rằng thiết kế cuối cùng sẽ không kịp hoàn thành cho hội chợ thương mại.",
        "không",
        [],
        "won't"
      ],
      [
        3,
        "Đúng rồi, chúng ta vẫn cần hoàn tất việc kiểm tra độ bền.",
        "cần",
        [],
        "need to"
      ],
      [
        3,
        "Đúng rồi, chúng ta vẫn cần hoàn tất việc kiểm tra độ bền.",
        "kiểm tra độ bền",
        [],
        "durability testing"
      ],
      [
        4,
        "Camille, tiến độ thế nào rồi?",
        "tiến độ thế nào",
        [],
        "how's"
      ],
      [
        5,
        "Cho đến nay, chúng có vẻ bền như chúng ta dự đoán.",
        "bền",
        [],
        "durable"
      ],
      [
        6,
        "Nhưng chúng ta vẫn còn một vài bài kiểm tra nữa.",
        "bài kiểm tra",
        [],
        "tests"
      ],
      [
        7,
        "Tuyệt. Hãy cập nhật cho tôi về tiến độ nhé.",
        "cập nhật",
        [],
        "posted"
      ],
      [
        7,
        "Tuyệt. Hãy cập nhật cho tôi về tiến độ nhé.",
        "tiến độ",
        [],
        "progress"
      ],
      [
        8,
        "Trong khi đó, chúng ta nên bắt đầu chuẩn bị một video quảng cáo để trình chiếu tại gian hàng ở hội chợ.",
        "bắt đầu",
        [],
        "start"
      ],
      [
        9,
        "Ai muốn giúp tôi thực hiện dự án này?",
        "muốn",
        [],
        "like"
      ],
      [
        9,
        "Ai muốn giúp tôi thực hiện dự án này?",
        "giúp",
        [],
        "help"
      ],
      [
        9,
        "Ai muốn giúp tôi thực hiện dự án này?",
        "dự án",
        [],
        "project"
      ]
    ]
  },
  "t10-47": {
    "sentences": [
      "Xin lỗi—cảnh sát ạ? Ngài có biết các tài xế dịch vụ đi chung xe đậu ở đâu để chờ khách không? Đây là lần đầu tôi đến sân bay này.",
      "Có chứ. Lái xe đến khu vực đón khách bên nhà ga A.",
      "Hãy tìm biển màu cam có chữ “rideshare”. Tôi chắc bạn sẽ thấy các tài xế khác ở đó.",
      "Nhân tiện, tôi khuyên bạn nên đi đường vòng quanh nhà ga.",
      "Cây cầu đó sẽ đưa bạn đến nơi nhanh hơn.",
      "Tuyệt quá. Cảm ơn chị. À—có trạm xăng nào gần sân bay không? Bình xăng của tôi gần hết rồi.",
      "Bạn sẽ thấy một trạm gần bãi xe thuê xe khi ra khỏi sân bay."
    ],
    "exercises": [
      [
        0,
        "Xin lỗi—cảnh sát ạ? Ngài có biết các tài xế dịch vụ đi chung xe đậu ở đâu để chờ khách không? Đây là lần đầu tôi đến sân bay này.",
        "chờ",
        [],
        "wait"
      ],
      [
        1,
        "Có chứ. Lái xe đến khu vực đón khách bên nhà ga A.",
        "Lái xe",
        [],
        "Drive"
      ],
      [
        1,
        "Có chứ. Lái xe đến khu vực đón khách bên nhà ga A.",
        "khu vực đón khách",
        [],
        "pickup area"
      ],
      [
        1,
        "Có chứ. Lái xe đến khu vực đón khách bên nhà ga A.",
        "nhà ga",
        [],
        "terminal"
      ],
      [
        2,
        "Hãy tìm biển màu cam có chữ “rideshare”. Tôi chắc bạn sẽ thấy các tài xế khác ở đó.",
        "biển màu cam",
        [],
        "orange sign"
      ],
      [
        2,
        "Hãy tìm biển màu cam có chữ “rideshare”. Tôi chắc bạn sẽ thấy các tài xế khác ở đó.",
        "thấy",
        [],
        "see"
      ],
      [
        2,
        "Hãy tìm biển màu cam có chữ “rideshare”. Tôi chắc bạn sẽ thấy các tài xế khác ở đó.",
        "tài xế",
        [],
        "drivers"
      ],
      [
        3,
        "Nhân tiện, tôi khuyên bạn nên đi đường vòng quanh nhà ga.",
        "khuyên",
        [],
        "recommend"
      ],
      [
        4,
        "Cây cầu đó sẽ đưa bạn đến nơi nhanh hơn.",
        "Cây cầu",
        [],
        "bridge"
      ],
      [
        5,
        "Tuyệt quá. Cảm ơn chị. À—có trạm xăng nào gần sân bay không? Bình xăng của tôi gần hết rồi.",
        "sân bay",
        [],
        "airport"
      ],
      [
        6,
        "Bạn sẽ thấy một trạm gần bãi xe thuê xe khi ra khỏi sân bay.",
        "thấy",
        [],
        "see"
      ]
    ]
  },
  "t10-50": {
    "sentences": [
      "Giao thông hôm nay thật tệ.",
      "Tôi biết. Chúng ta đã kẹt trong chiếc xe buýt này mấy giờ rồi! Thật bực mình.",
      "Tôi tự hỏi chuyện gì đang xảy ra.",
      "Tôi nghe nói cầu Day Street đang được sửa chữa.",
      "Thật sao? Tôi không biết điều đó.",
      "Đúng rồi. Tôi nghĩ hiện chỉ còn một làn xe trong vài tuần tới.",
      "Biết vậy cũng tốt.",
      "Ngày mai tôi sẽ đi tàu vào thành phố thay vì đi xe, để không bị trễ các cuộc hẹn."
    ],
    "exercises": [
      [
        0,
        "Giao thông hôm nay thật tệ.",
        "Giao thông",
        [],
        "traffic"
      ],
      [
        1,
        "Tôi biết. Chúng ta đã kẹt trong chiếc xe buýt này mấy giờ rồi! Thật bực mình.",
        "xe buýt",
        [],
        "bus"
      ],
      [
        1,
        "Tôi biết. Chúng ta đã kẹt trong chiếc xe buýt này mấy giờ rồi! Thật bực mình.",
        "giờ",
        [],
        "hours"
      ],
      [
        2,
        "Tôi tự hỏi chuyện gì đang xảy ra.",
        "chuyện gì",
        [],
        "wonder what's"
      ],
      [
        3,
        "Tôi nghe nói cầu Day Street đang được sửa chữa.",
        "cầu",
        [],
        "Bridge"
      ],
      [
        3,
        "Tôi nghe nói cầu Day Street đang được sửa chữa.",
        "được",
        [],
        "worked"
      ],
      [
        4,
        "Thật sao? Tôi không biết điều đó.",
        "không",
        [],
        "didn't"
      ],
      [
        4,
        "Thật sao? Tôi không biết điều đó.",
        "biết",
        [],
        "know"
      ],
      [
        5,
        "Đúng rồi. Tôi nghĩ hiện chỉ còn một làn xe trong vài tuần tới.",
        "nghĩ",
        [],
        "think"
      ],
      [
        6,
        "Biết vậy cũng tốt.",
        "Biết",
        [],
        "know"
      ],
      [
        7,
        "Ngày mai tôi sẽ đi tàu vào thành phố thay vì đi xe, để không bị trễ các cuộc hẹn.",
        "đi tàu",
        [],
        "take the train"
      ],
      [
        7,
        "Ngày mai tôi sẽ đi tàu vào thành phố thay vì đi xe, để không bị trễ các cuộc hẹn.",
        "không",
        [],
        "won't"
      ],
      [
        7,
        "Ngày mai tôi sẽ đi tàu vào thành phố thay vì đi xe, để không bị trễ các cuộc hẹn.",
        "cuộc hẹn",
        [],
        "appointments"
      ]
    ]
  },
  "t10-53": {
    "sentences": [
      "Girard Electronics. Tôi có thể giúp gì cho quý khách?",
      "Chào. Tôi đã mua một chiếc máy ảnh từ cửa hàng của bạn tuần trước, nhưng bây giờ tôi gặp sự cố với nó.",
      "Vấn đề là gì vậy?",
      "Hôm nay tôi đã thay ống kính từ ống kính tiêu chuẩn sang ống kính tele, và bây giờ một thông báo lỗi xuất hiện trên màn hình LCD.",
      "Ừm… Tôi xin lỗi, nhưng tôi không thể chắc chắn nếu không xem trực tiếp, vì nguyên nhân có thể do một vài thứ.",
      "Tôi có thể ghé qua vào chiều nay.",
      "Được thôi. Tôi sẽ không có ở đây, nhưng một trong những nhân viên khác chắc chắn có thể giúp anh.",
      "Để tôi ghi chú lại.",
      "Cảm ơn."
    ],
    "exercises": [
      [
        0,
        "Girard Electronics. Tôi có thể giúp gì cho quý khách?",
        "giúp",
        [],
        "help"
      ],
      [
        1,
        "Chào. Tôi đã mua một chiếc máy ảnh từ cửa hàng của bạn tuần trước, nhưng bây giờ tôi gặp sự cố với nó.",
        "mua",
        [],
        "bought"
      ],
      [
        1,
        "Chào. Tôi đã mua một chiếc máy ảnh từ cửa hàng của bạn tuần trước, nhưng bây giờ tôi gặp sự cố với nó.",
        "máy ảnh",
        [],
        "camera"
      ],
      [
        1,
        "Chào. Tôi đã mua một chiếc máy ảnh từ cửa hàng của bạn tuần trước, nhưng bây giờ tôi gặp sự cố với nó.",
        "cửa hàng",
        [],
        "store"
      ],
      [
        2,
        "Vấn đề là gì vậy?",
        "Vấn đề",
        [],
        "problem"
      ],
      [
        3,
        "Hôm nay tôi đã thay ống kính từ ống kính tiêu chuẩn sang ống kính tele, và bây giờ một thông báo lỗi xuất hiện trên màn hình LCD.",
        "ống kính tele",
        [],
        "telephoto"
      ],
      [
        3,
        "Hôm nay tôi đã thay ống kính từ ống kính tiêu chuẩn sang ống kính tele, và bây giờ một thông báo lỗi xuất hiện trên màn hình LCD.",
        "màn hình LCD",
        [],
        "LCD screen"
      ],
      [
        4,
        "Ừm… Tôi xin lỗi, nhưng tôi không thể chắc chắn nếu không xem trực tiếp, vì nguyên nhân có thể do một vài thứ.",
        "xem",
        [],
        "looking"
      ],
      [
        6,
        "Được thôi. Tôi sẽ không có ở đây, nhưng một trong những nhân viên khác chắc chắn có thể giúp anh.",
        "không",
        [],
        "won't"
      ],
      [
        6,
        "Được thôi. Tôi sẽ không có ở đây, nhưng một trong những nhân viên khác chắc chắn có thể giúp anh.",
        "nhân viên",
        [],
        "employees"
      ],
      [
        6,
        "Được thôi. Tôi sẽ không có ở đây, nhưng một trong những nhân viên khác chắc chắn có thể giúp anh.",
        "chắc chắn",
        [],
        "definitely"
      ],
      [
        6,
        "Được thôi. Tôi sẽ không có ở đây, nhưng một trong những nhân viên khác chắc chắn có thể giúp anh.",
        "giúp",
        [],
        "help"
      ],
      [
        7,
        "Để tôi ghi chú lại.",
        "ghi chú",
        [],
        "note"
      ]
    ]
  },
  "t10-56": {
    "sentences": [
      "Chào. Tôi có một lô vật tư y tế gửi đến Eun-Mi Park.",
      "Người đang ngồi tại bàn kia là Eun-Mi đó.",
      "Tôi là Eun-Mi, tôi đang chờ các miếng gạc và băng vô trùng này.",
      "Tuyệt. Tôi chỉ cần bạn ký vào đây để xác nhận việc giao hàng.",
      "Được, chắc chắn rồi. À, Claudia, bạn có thời gian giúp tôi mang mấy thùng này vào tủ lưu trữ không?",
      "Dĩ nhiên. Tôi có một bệnh nhân lúc 1 giờ, nhưng giờ tôi có vài phút rảnh."
    ],
    "exercises": [
      [
        0,
        "Chào. Tôi có một lô vật tư y tế gửi đến Eun-Mi Park.",
        "vật tư y tế",
        [],
        "medical supplies"
      ],
      [
        1,
        "Người đang ngồi tại bàn kia là Eun-Mi đó.",
        "ngồi",
        [],
        "sitting"
      ],
      [
        1,
        "Người đang ngồi tại bàn kia là Eun-Mi đó.",
        "bàn",
        [],
        "desk"
      ],
      [
        2,
        "Tôi là Eun-Mi, tôi đang chờ các miếng gạc và băng vô trùng này.",
        "chờ",
        [],
        "waiting"
      ],
      [
        3,
        "Tuyệt. Tôi chỉ cần bạn ký vào đây để xác nhận việc giao hàng.",
        "ký",
        [],
        "sign"
      ],
      [
        3,
        "Tuyệt. Tôi chỉ cần bạn ký vào đây để xác nhận việc giao hàng.",
        "xác nhận",
        [],
        "confirm"
      ],
      [
        3,
        "Tuyệt. Tôi chỉ cần bạn ký vào đây để xác nhận việc giao hàng.",
        "giao hàng",
        [],
        "delivery"
      ],
      [
        5,
        "Dĩ nhiên. Tôi có một bệnh nhân lúc 1 giờ, nhưng giờ tôi có vài phút rảnh.",
        "bệnh nhân",
        [],
        "patient"
      ]
    ]
  },
  "t10-59": {
    "sentences": [
      "Dula Commercial Cleaners. Tôi có thể giúp gì cho quý khách?",
      "Chào, tôi đang vận hành một nhà nghỉ kiểu bed-and-breakfast mới trong thị trấn, và tôi đang tìm một công ty để giặt, sấy và gấp đồ vải.",
      "Tôi có vài câu hỏi.",
      "Vâng, được.",
      "Quý công ty làm việc thế nào về lịch trình?",
      "Chúng tôi làm việc 24/7 để đảm bảo hoàn thành trong vòng 24 giờ.",
      "Chúng tôi có ba ca làm việc riêng biệt.",
      "Nghe tốt quá.",
      "Tôi có thể hỏi quý vị ở đâu không?",
      "À, chúng tôi ở 647 Pond Street.",
      "Trong trường hợp đó, việc lấy và giao hàng sẽ không tính thêm phí dịch vụ, vì quý vị nằm trong bán kính 15km của công ty chúng tôi."
    ],
    "exercises": [
      [
        0,
        "Dula Commercial Cleaners. Tôi có thể giúp gì cho quý khách?",
        "giúp",
        [],
        "help"
      ],
      [
        1,
        "Chào, tôi đang vận hành một nhà nghỉ kiểu bed-and-breakfast mới trong thị trấn, và tôi đang tìm một công ty để giặt, sấy và gấp đồ vải.",
        "vận hành",
        [],
        "running"
      ],
      [
        1,
        "Chào, tôi đang vận hành một nhà nghỉ kiểu bed-and-breakfast mới trong thị trấn, và tôi đang tìm một công ty để giặt, sấy và gấp đồ vải.",
        "tìm",
        [],
        "looking for"
      ],
      [
        2,
        "Tôi có vài câu hỏi.",
        "câu hỏi",
        [],
        "questions"
      ],
      [
        4,
        "Quý công ty làm việc thế nào về lịch trình?",
        "lịch trình",
        [],
        "scheduling"
      ],
      [
        6,
        "Chúng tôi có ba ca làm việc riêng biệt.",
        "ca làm việc riêng biệt",
        [],
        "separate shifts"
      ],
      [
        8,
        "Tôi có thể hỏi quý vị ở đâu không?",
        "hỏi",
        [],
        "ask"
      ],
      [
        8,
        "Tôi có thể hỏi quý vị ở đâu không?",
        "ở",
        [],
        "located"
      ],
      [
        10,
        "Trong trường hợp đó, việc lấy và giao hàng sẽ không tính thêm phí dịch vụ, vì quý vị nằm trong bán kính 15km của công ty chúng tôi.",
        "lấy và giao hàng",
        [],
        "pickup and delivery"
      ],
      [
        10,
        "Trong trường hợp đó, việc lấy và giao hàng sẽ không tính thêm phí dịch vụ, vì quý vị nằm trong bán kính 15km của công ty chúng tôi.",
        "không",
        [],
        "not"
      ],
      [
        10,
        "Trong trường hợp đó, việc lấy và giao hàng sẽ không tính thêm phí dịch vụ, vì quý vị nằm trong bán kính 15km của công ty chúng tôi.",
        "phí",
        [],
        "charge"
      ]
    ]
  },
  "t10-62": {
    "sentences": [
      "Chào mừng đến với Trung tâm Thể hình Centerville.",
      "Chào. Tôi nghe nói trung tâm đang tổ chức một chiến dịch gây quỹ.",
      "Đúng rồi, hôm nay là ngày khởi động gây quỹ thường niên của chúng tôi.",
      "Toàn bộ số tiền thu được sẽ dùng để mua thiết bị thể thao mới cho trung tâm.",
      "Quý vị sẽ được tham gia rút thăm trúng thưởng dựa trên số tiền đóng góp.",
      "Nghe tuyệt quá. Tôi muốn đóng góp 50 đô la.",
      "Tuyệt vời! Chỉ cần điền vào mẫu đóng góp, và tôi sẽ đưa vé rút thăm cho bạn.",
      "Làm thế nào tôi biết mình có trúng thưởng không?",
      "Buổi rút thăm sẽ diễn ra vào thứ Sáu, và những người trúng thưởng sẽ nhận được cuộc gọi từ ban tổ chức."
    ],
    "exercises": [
      [
        0,
        "Chào mừng đến với Trung tâm Thể hình Centerville.",
        "Trung tâm Thể hình",
        [],
        "Centerville Fitness Center"
      ],
      [
        1,
        "Chào. Tôi nghe nói trung tâm đang tổ chức một chiến dịch gây quỹ.",
        "chiến dịch gây quỹ",
        [],
        "fund-raising campaign"
      ],
      [
        2,
        "Đúng rồi, hôm nay là ngày khởi động gây quỹ thường niên của chúng tôi.",
        "gây quỹ thường niên",
        [],
        "annual fund-raiser"
      ],
      [
        3,
        "Toàn bộ số tiền thu được sẽ dùng để mua thiết bị thể thao mới cho trung tâm.",
        "mua",
        [],
        "purchase"
      ],
      [
        3,
        "Toàn bộ số tiền thu được sẽ dùng để mua thiết bị thể thao mới cho trung tâm.",
        "thiết bị",
        [],
        "sports equipment"
      ],
      [
        4,
        "Quý vị sẽ được tham gia rút thăm trúng thưởng dựa trên số tiền đóng góp.",
        "rút thăm trúng thưởng",
        [],
        "raffle"
      ],
      [
        5,
        "Nghe tuyệt quá. Tôi muốn đóng góp 50 đô la.",
        "muốn",
        [],
        "like"
      ],
      [
        5,
        "Nghe tuyệt quá. Tôi muốn đóng góp 50 đô la.",
        "đóng góp",
        [],
        "donate"
      ],
      [
        6,
        "Tuyệt vời! Chỉ cần điền vào mẫu đóng góp, và tôi sẽ đưa vé rút thăm cho bạn.",
        "điền",
        [],
        "fill out"
      ],
      [
        6,
        "Tuyệt vời! Chỉ cần điền vào mẫu đóng góp, và tôi sẽ đưa vé rút thăm cho bạn.",
        "mẫu",
        [],
        "donation form"
      ],
      [
        6,
        "Tuyệt vời! Chỉ cần điền vào mẫu đóng góp, và tôi sẽ đưa vé rút thăm cho bạn.",
        "đưa",
        [],
        "get"
      ],
      [
        6,
        "Tuyệt vời! Chỉ cần điền vào mẫu đóng góp, và tôi sẽ đưa vé rút thăm cho bạn.",
        "rút thăm",
        [],
        "raffle"
      ],
      [
        7,
        "Làm thế nào tôi biết mình có trúng thưởng không?",
        "biết",
        [],
        "find out"
      ],
      [
        7,
        "Làm thế nào tôi biết mình có trúng thưởng không?",
        "trúng thưởng",
        [],
        "won"
      ],
      [
        8,
        "Buổi rút thăm sẽ diễn ra vào thứ Sáu, và những người trúng thưởng sẽ nhận được cuộc gọi từ ban tổ chức.",
        "nhận được",
        [],
        "receive"
      ],
      [
        8,
        "Buổi rút thăm sẽ diễn ra vào thứ Sáu, và những người trúng thưởng sẽ nhận được cuộc gọi từ ban tổ chức.",
        "cuộc gọi",
        [],
        "call"
      ],
      [
        8,
        "Buổi rút thăm sẽ diễn ra vào thứ Sáu, và những người trúng thưởng sẽ nhận được cuộc gọi từ ban tổ chức.",
        "ban tổ chức",
        [],
        "organizers"
      ]
    ]
  },
  "t10-65": {
    "sentences": [
      "Chào. Một vài người trong công ty chúng tôi quyết định cùng nhau mua hoa ở đây.",
      "Hoa dành cho một đồng nghiệp vừa được thăng chức.",
      "Chúng tôi có nhiều mẫu hoa đẹp phù hợp cho sự kiện như vậy.",
      "Đây là danh sách những mẫu phổ biến nhất, với nhiều mức giá khác nhau.",
      "À, tôi có đủ tiền cho mẫu Harmony.",
      "Bạn có thể làm ngay trong khi tôi chờ không?",
      "Chắc chắn rồi, tôi sẽ làm ngay cho bạn.",
      "Và bạn có muốn kèm theo một tấm thiệp không?",
      "Thực ra không cần thiệp.",
      "Chúng tôi đã có một tấm mà tất cả mọi người đã ký rồi."
    ],
    "exercises": [
      [
        0,
        "Chào. Một vài người trong công ty chúng tôi quyết định cùng nhau mua hoa ở đây.",
        "quyết định",
        [],
        "decided"
      ],
      [
        0,
        "Chào. Một vài người trong công ty chúng tôi quyết định cùng nhau mua hoa ở đây.",
        "mua",
        [],
        "buy"
      ],
      [
        0,
        "Chào. Một vài người trong công ty chúng tôi quyết định cùng nhau mua hoa ở đây.",
        "hoa",
        [],
        "flowers"
      ],
      [
        1,
        "Hoa dành cho một đồng nghiệp vừa được thăng chức.",
        "đồng nghiệp",
        [],
        "colleague"
      ],
      [
        1,
        "Hoa dành cho một đồng nghiệp vừa được thăng chức.",
        "thăng chức",
        [],
        "promotion"
      ],
      [
        2,
        "Chúng tôi có nhiều mẫu hoa đẹp phù hợp cho sự kiện như vậy.",
        "sự kiện",
        [],
        "event"
      ],
      [
        3,
        "Đây là danh sách những mẫu phổ biến nhất, với nhiều mức giá khác nhau.",
        "danh sách",
        [],
        "list"
      ],
      [
        3,
        "Đây là danh sách những mẫu phổ biến nhất, với nhiều mức giá khác nhau.",
        "phổ biến",
        [],
        "popular"
      ],
      [
        3,
        "Đây là danh sách những mẫu phổ biến nhất, với nhiều mức giá khác nhau.",
        "giá",
        [],
        "prices"
      ],
      [
        4,
        "À, tôi có đủ tiền cho mẫu Harmony.",
        "tiền",
        [],
        "money"
      ],
      [
        5,
        "Bạn có thể làm ngay trong khi tôi chờ không?",
        "chờ",
        [],
        "wait"
      ],
      [
        7,
        "Và bạn có muốn kèm theo một tấm thiệp không?",
        "muốn",
        [],
        "want"
      ],
      [
        8,
        "Thực ra không cần thiệp.",
        "cần",
        [],
        "needed"
      ],
      [
        9,
        "Chúng tôi đã có một tấm mà tất cả mọi người đã ký rồi.",
        "ký",
        [],
        "signed"
      ]
    ]
  },
  "t10-68": {
    "sentences": [
      "Chào Andrew. Bạn cảm thấy thế nào trong tuần đầu tiên ở Jebreen Farms?",
      "Rất tuyệt. Tôi chắc chắn học được nhiều điều về nông nghiệp thương mại.",
      "Thật vui khi nghe vậy.",
      "Chúng ta hãy đi đến nơi sẽ lưu trữ vụ thu hoạch ngô sắp tới.",
      "Như bạn biết, chúng tôi bán rất nhiều ngô làm thức ăn cho các trang trại chăn nuôi trong khu vực.",
      "Vâng. Tôi háo hức muốn có kinh nghiệm thực tế về việc sấy và lưu trữ ngô.",
      "Tốt. Nếu quá trình này được thực hiện đúng cách, ngô có thể được lưu trữ trong thời gian dài, nhưng điều kiện bên trong silo phải hoàn hảo.",
      "Quá trình sấy sau thu hoạch sẽ mất bao lâu?",
      "Khoảng bốn đến sáu tuần."
    ],
    "exercises": [
      [
        1,
        "Rất tuyệt. Tôi chắc chắn học được nhiều điều về nông nghiệp thương mại.",
        "chắc chắn",
        [],
        "definitely"
      ],
      [
        1,
        "Rất tuyệt. Tôi chắc chắn học được nhiều điều về nông nghiệp thương mại.",
        "học",
        [],
        "learning"
      ],
      [
        1,
        "Rất tuyệt. Tôi chắc chắn học được nhiều điều về nông nghiệp thương mại.",
        "nông nghiệp thương mại",
        [],
        "commercial agriculture"
      ],
      [
        3,
        "Chúng ta hãy đi đến nơi sẽ lưu trữ vụ thu hoạch ngô sắp tới.",
        "ngô",
        [],
        "corn"
      ],
      [
        4,
        "Như bạn biết, chúng tôi bán rất nhiều ngô làm thức ăn cho các trang trại chăn nuôi trong khu vực.",
        "bán",
        [],
        "sell"
      ],
      [
        4,
        "Như bạn biết, chúng tôi bán rất nhiều ngô làm thức ăn cho các trang trại chăn nuôi trong khu vực.",
        "ngô",
        [],
        "corn"
      ],
      [
        5,
        "Vâng. Tôi háo hức muốn có kinh nghiệm thực tế về việc sấy và lưu trữ ngô.",
        "sấy",
        [],
        "drying"
      ],
      [
        5,
        "Vâng. Tôi háo hức muốn có kinh nghiệm thực tế về việc sấy và lưu trữ ngô.",
        "ngô",
        [],
        "corn"
      ],
      [
        6,
        "Tốt. Nếu quá trình này được thực hiện đúng cách, ngô có thể được lưu trữ trong thời gian dài, nhưng điều kiện bên trong silo phải hoàn hảo.",
        "quá trình",
        [],
        "process"
      ],
      [
        6,
        "Tốt. Nếu quá trình này được thực hiện đúng cách, ngô có thể được lưu trữ trong thời gian dài, nhưng điều kiện bên trong silo phải hoàn hảo.",
        "thời gian dài",
        [],
        "long periods"
      ],
      [
        6,
        "Tốt. Nếu quá trình này được thực hiện đúng cách, ngô có thể được lưu trữ trong thời gian dài, nhưng điều kiện bên trong silo phải hoàn hảo.",
        "silo",
        [],
        "grain bin"
      ],
      [
        6,
        "Tốt. Nếu quá trình này được thực hiện đúng cách, ngô có thể được lưu trữ trong thời gian dài, nhưng điều kiện bên trong silo phải hoàn hảo.",
        "phải",
        [],
        "have to"
      ],
      [
        7,
        "Quá trình sấy sau thu hoạch sẽ mất bao lâu?",
        "bao lâu",
        [],
        "long"
      ],
      [
        7,
        "Quá trình sấy sau thu hoạch sẽ mất bao lâu?",
        "sấy",
        [],
        "drying"
      ],
      [
        7,
        "Quá trình sấy sau thu hoạch sẽ mất bao lâu?",
        "Quá trình",
        [],
        "process"
      ],
      [
        7,
        "Quá trình sấy sau thu hoạch sẽ mất bao lâu?",
        "thu hoạch",
        [],
        "harvest"
      ],
      [
        8,
        "Khoảng bốn đến sáu tuần.",
        "sáu",
        [],
        "six"
      ]
    ]
  }
};
const synchronizedOptionEmphasis = {
  "t2-32:32:A": {
    "en": [
      {
        "start": 8,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 32
      }
    ]
  },
  "t2-32:32:B": {
    "en": [
      {
        "start": 8,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 26
      }
    ]
  },
  "t2-32:32:C": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 27
      }
    ]
  },
  "t2-32:32:D": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 19
      }
    ]
  },
  "t2-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t2-32:33:C": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t2-32:33:D": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t2-32:34:A": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t2-32:34:B": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t2-32:34:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t2-32:34:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t2-35:35:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-35:35:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t2-35:35:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-35:35:D": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-35:36:A": {
    "en": [
      {
        "start": 0,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 44
      }
    ]
  },
  "t2-35:36:B": {
    "en": [
      {
        "start": 0,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t2-35:36:C": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 39
      }
    ]
  },
  "t2-35:36:D": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t2-35:37:A": {
    "en": [
      {
        "start": 23,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 24,
        "end": 42
      }
    ]
  },
  "t2-35:37:B": {
    "en": [
      {
        "start": 2,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 32
      }
    ]
  },
  "t2-35:37:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-35:37:D": {
    "en": [
      {
        "start": 14,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 36
      }
    ]
  },
  "t2-38:38:A": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t2-38:38:B": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t2-38:38:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-38:38:D": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-38:39:A": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 9
      }
    ]
  },
  "t2-38:39:B": {
    "en": [
      {
        "start": 20,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 27,
        "end": 45
      }
    ]
  },
  "t2-38:39:C": {
    "en": [
      {
        "start": 15,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 13,
        "end": 30
      }
    ]
  },
  "t2-38:39:D": {
    "en": [
      {
        "start": 6,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 46
      }
    ]
  },
  "t2-38:40:A": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 33
      }
    ]
  },
  "t2-38:40:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t2-38:40:C": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-38:40:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t2-41:41:A": {
    "en": [
      {
        "start": 2,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 44
      }
    ]
  },
  "t2-41:41:B": {
    "en": [
      {
        "start": 13,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 26,
        "end": 42
      }
    ]
  },
  "t2-41:41:C": {
    "en": [
      {
        "start": 2,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 43
      }
    ]
  },
  "t2-41:41:D": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 38
      }
    ]
  },
  "t2-41:42:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t2-41:42:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t2-41:42:C": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-41:42:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-41:43:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-41:43:B": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t2-41:43:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-41:43:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t2-44:44:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t2-44:44:B": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-44:44:C": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t2-44:44:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-44:45:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-44:45:B": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-44:45:C": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t2-44:45:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t2-44:46:A": {
    "en": [
      {
        "start": 8,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 29
      }
    ]
  },
  "t2-44:46:B": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 23
      }
    ]
  },
  "t2-44:46:C": {
    "en": [
      {
        "start": 11,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 19,
        "end": 46
      }
    ]
  },
  "t2-44:46:D": {
    "en": [
      {
        "start": 9,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 32
      }
    ]
  },
  "t2-47:47:A": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 20
      }
    ]
  },
  "t2-47:47:B": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 27
      }
    ]
  },
  "t2-47:47:C": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t2-47:47:D": {
    "en": [
      {
        "start": 5,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 28
      }
    ]
  },
  "t2-47:48:A": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-47:48:B": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-47:48:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t2-47:48:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-47:49:A": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 43
      }
    ]
  },
  "t2-47:49:B": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 27
      }
    ]
  },
  "t2-47:49:C": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t2-47:49:D": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t2-50:50:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-50:50:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t2-50:50:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t2-50:50:D": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t2-50:51:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t2-50:51:B": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-50:51:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-50:51:D": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-50:52:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-50:52:C": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-53:53:A": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t2-53:53:B": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-53:53:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-53:53:D": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t2-53:54:A": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 20
      }
    ]
  },
  "t2-53:54:B": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t2-53:54:C": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 26
      }
    ]
  },
  "t2-53:54:D": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 17
      }
    ]
  },
  "t2-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t2-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t2-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 34
      }
    ]
  },
  "t2-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t2-56:56:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t2-56:56:B": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-56:56:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t2-56:56:D": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t2-56:57:A": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 20
      }
    ]
  },
  "t2-56:57:B": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 14
      }
    ]
  },
  "t2-56:57:C": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 33
      }
    ]
  },
  "t2-56:57:D": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 30
      }
    ]
  },
  "t2-56:58:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-56:58:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t2-56:58:C": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t2-56:58:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t2-59:59:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t2-59:59:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t2-59:59:C": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t2-59:59:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-59:60:A": {
    "en": [
      {
        "start": 26,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 28,
        "end": 40
      }
    ]
  },
  "t2-59:60:B": {
    "en": [
      {
        "start": 11,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 23
      }
    ]
  },
  "t2-59:60:C": {
    "en": [
      {
        "start": 14,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 32
      }
    ]
  },
  "t2-59:60:D": {
    "en": [
      {
        "start": 24,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 26
      }
    ]
  },
  "t2-59:61:A": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t2-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t2-59:61:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-59:61:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t2-62:62:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 15
      }
    ]
  },
  "t2-62:62:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-62:62:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-62:62:D": {
    "en": [
      {
        "start": 2,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-62:63:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-62:63:C": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-62:63:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-62:64:A": {
    "en": [
      {
        "start": 6,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 19
      }
    ]
  },
  "t2-62:64:B": {
    "en": [
      {
        "start": 6,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 32
      }
    ]
  },
  "t2-62:64:C": {
    "en": [
      {
        "start": 6,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 19
      }
    ]
  },
  "t2-62:64:D": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 30
      }
    ]
  },
  "t2-65:65:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t2-65:65:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t2-65:65:C": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t2-65:65:D": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t2-65:66:A": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t2-65:66:B": {
    "en": [
      {
        "start": 3,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-65:66:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t2-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t2-65:67:A": {
    "en": [
      {
        "start": 4,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t2-65:67:B": {
    "en": [
      {
        "start": 4,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t2-65:67:C": {
    "en": [
      {
        "start": 4,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t2-65:67:D": {
    "en": [
      {
        "start": 4,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t2-68:68:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t2-68:68:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t2-68:68:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t2-68:68:D": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-68:69:A": {
    "en": [
      {
        "start": 24,
        "end": 46
      }
    ],
    "vi": [
      {
        "start": 20,
        "end": 43
      }
    ]
  },
  "t2-68:69:B": {
    "en": [
      {
        "start": 19,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 20,
        "end": 28
      }
    ]
  },
  "t2-68:69:C": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 34
      }
    ]
  },
  "t2-68:69:D": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 29
      }
    ]
  },
  "t2-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t2-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-32:32:A": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 26
      }
    ]
  },
  "t3-32:32:B": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 16
      }
    ]
  },
  "t3-32:32:C": {
    "en": [
      {
        "start": 5,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t3-32:32:D": {
    "en": [
      {
        "start": 5,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 18
      }
    ]
  },
  "t3-32:33:A": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t3-32:33:B": {
    "en": [
      {
        "start": 3,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t3-32:33:C": {
    "en": [
      {
        "start": 4,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t3-32:33:D": {
    "en": [
      {
        "start": 4,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t3-32:34:A": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-32:34:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t3-32:34:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t3-32:34:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t3-35:35:A": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 26
      }
    ]
  },
  "t3-35:35:B": {
    "en": [
      {
        "start": 5,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 17
      }
    ]
  },
  "t3-35:35:C": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 14
      }
    ]
  },
  "t3-35:35:D": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t3-35:36:A": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 25
      }
    ]
  },
  "t3-35:36:B": {
    "en": [
      {
        "start": 3,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t3-35:36:C": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t3-35:36:D": {
    "en": [
      {
        "start": 2,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t3-35:37:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t3-35:37:B": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t3-35:37:C": {
    "en": [
      {
        "start": 2,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 2
      }
    ]
  },
  "t3-35:37:D": {
    "en": [
      {
        "start": 3,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t3-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 34
      }
    ]
  },
  "t3-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t3-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 43
      }
    ]
  },
  "t3-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t3-38:39:A": {
    "en": [
      {
        "start": 2,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t3-38:39:B": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t3-38:39:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t3-38:39:D": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t3-38:40:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t3-38:40:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-38:40:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t3-38:40:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t3-41:41:A": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t3-41:41:B": {
    "en": [
      {
        "start": 2,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t3-41:41:C": {
    "en": [
      {
        "start": 5,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 26
      }
    ]
  },
  "t3-41:41:D": {
    "en": [
      {
        "start": 2,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t3-41:42:A": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 24
      }
    ]
  },
  "t3-41:42:B": {
    "en": [
      {
        "start": 5,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 27
      }
    ]
  },
  "t3-41:42:C": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 22
      }
    ]
  },
  "t3-41:42:D": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 27
      }
    ]
  },
  "t3-41:43:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t3-41:43:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-41:43:C": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t3-41:43:D": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t3-44:44:A": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t3-44:44:B": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 20
      }
    ]
  },
  "t3-44:44:C": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t3-44:44:D": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 19
      }
    ]
  },
  "t3-44:45:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t3-44:45:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t3-44:45:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t3-44:45:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t3-44:46:A": {
    "en": [
      {
        "start": 4,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 23
      }
    ]
  },
  "t3-44:46:B": {
    "en": [
      {
        "start": 8,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 16
      }
    ]
  },
  "t3-44:46:C": {
    "en": [
      {
        "start": 7,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 23
      }
    ]
  },
  "t3-44:46:D": {
    "en": [
      {
        "start": 20,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 30
      }
    ]
  },
  "t3-47:47:A": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t3-47:47:B": {
    "en": [
      {
        "start": 6,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t3-47:47:C": {
    "en": [
      {
        "start": 5,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t3-47:47:D": {
    "en": [
      {
        "start": 5,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t3-47:48:A": {
    "en": [
      {
        "start": 11,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 25,
        "end": 31
      }
    ]
  },
  "t3-47:48:B": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t3-47:48:C": {
    "en": [
      {
        "start": 21,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 19,
        "end": 22
      }
    ]
  },
  "t3-47:48:D": {
    "en": [
      {
        "start": 22,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 26,
        "end": 33
      }
    ]
  },
  "t3-47:49:A": {
    "en": [
      {
        "start": 23,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 33
      }
    ]
  },
  "t3-47:49:B": {
    "en": [
      {
        "start": 22,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 15,
        "end": 25
      }
    ]
  },
  "t3-47:49:C": {
    "en": [
      {
        "start": 18,
        "end": 41
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 34
      }
    ]
  },
  "t3-47:49:D": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 13,
        "end": 36
      }
    ]
  },
  "t3-50:50:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-50:50:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t3-50:50:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t3-50:50:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t3-50:51:A": {
    "en": [
      {
        "start": 4,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 23
      }
    ]
  },
  "t3-50:51:B": {
    "en": [
      {
        "start": 4,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 27
      }
    ]
  },
  "t3-50:51:C": {
    "en": [
      {
        "start": 4,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 36
      }
    ]
  },
  "t3-50:51:D": {
    "en": [
      {
        "start": 8,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 26
      }
    ]
  },
  "t3-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t3-50:52:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t3-50:52:C": {
    "en": [
      {
        "start": 4,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t3-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 35
      }
    ]
  },
  "t3-53:53:A": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t3-53:53:B": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t3-53:53:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t3-53:53:D": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-53:54:A": {
    "en": [
      {
        "start": 15,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t3-53:54:B": {
    "en": [
      {
        "start": 7,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t3-53:54:C": {
    "en": [
      {
        "start": 19,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 28
      }
    ]
  },
  "t3-53:54:D": {
    "en": [
      {
        "start": 14,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 23
      }
    ]
  },
  "t3-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t3-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t3-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t3-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-56:56:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t3-56:56:B": {
    "en": [
      {
        "start": 2,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 4
      }
    ]
  },
  "t3-56:56:C": {
    "en": [
      {
        "start": 2,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t3-56:56:D": {
    "en": [
      {
        "start": 3,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t3-56:57:A": {
    "en": [
      {
        "start": 2,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 32
      }
    ]
  },
  "t3-56:57:B": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t3-56:57:C": {
    "en": [
      {
        "start": 2,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 27
      }
    ]
  },
  "t3-56:57:D": {
    "en": [
      {
        "start": 2,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t3-56:58:A": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t3-56:58:B": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t3-56:58:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t3-56:58:D": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t3-59:59:A": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-59:59:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t3-59:59:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t3-59:59:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t3-59:60:A": {
    "en": [
      {
        "start": 4,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 23
      }
    ]
  },
  "t3-59:60:B": {
    "en": [
      {
        "start": 23,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 22,
        "end": 33
      }
    ]
  },
  "t3-59:60:C": {
    "en": [
      {
        "start": 8,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 20
      }
    ]
  },
  "t3-59:60:D": {
    "en": [
      {
        "start": 35,
        "end": 52
      }
    ],
    "vi": [
      {
        "start": 27,
        "end": 39
      }
    ]
  },
  "t3-59:61:A": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t3-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-59:61:C": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-59:61:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t3-62:62:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-62:62:B": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-62:62:C": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-62:62:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-62:63:A": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t3-62:63:B": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t3-62:63:C": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t3-62:63:D": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-62:64:A": {
    "en": [
      {
        "start": 3,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 11
      }
    ]
  },
  "t3-62:64:B": {
    "en": [
      {
        "start": 24,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 15,
        "end": 27
      }
    ]
  },
  "t3-62:64:C": {
    "en": [
      {
        "start": 5,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 26
      }
    ]
  },
  "t3-62:64:D": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t3-65:65:A": {
    "en": [
      {
        "start": 23,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 20,
        "end": 38
      }
    ]
  },
  "t3-65:65:B": {
    "en": [
      {
        "start": 12,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 14
      }
    ]
  },
  "t3-65:65:C": {
    "en": [
      {
        "start": 21,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 19
      }
    ]
  },
  "t3-65:65:D": {
    "en": [
      {
        "start": 12,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 18
      }
    ]
  },
  "t3-65:66:A": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t3-65:66:B": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 22
      }
    ]
  },
  "t3-65:66:C": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t3-65:66:D": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t3-65:67:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t3-65:67:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t3-65:67:C": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t3-65:67:D": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t3-68:68:A": {
    "en": [
      {
        "start": 2,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 26
      }
    ]
  },
  "t3-68:68:B": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t3-68:68:C": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t3-68:68:D": {
    "en": [
      {
        "start": 2,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 28
      }
    ]
  },
  "t3-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t3-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t3-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t3-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t3-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t3-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t4-32:32:A": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t4-32:32:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t4-32:32:C": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t4-32:32:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t4-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t4-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-32:33:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t4-32:33:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t4-32:34:A": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 21
      }
    ]
  },
  "t4-32:34:B": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 23
      }
    ]
  },
  "t4-32:34:C": {
    "en": [
      {
        "start": 2,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 10
      }
    ]
  },
  "t4-32:34:D": {
    "en": [
      {
        "start": 2,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t4-35:35:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t4-35:35:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-35:35:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-35:35:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-35:36:A": {
    "en": [
      {
        "start": 16,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 20,
        "end": 33
      }
    ]
  },
  "t4-35:36:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t4-35:36:C": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t4-35:36:D": {
    "en": [
      {
        "start": 18,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 30
      }
    ]
  },
  "t4-35:37:A": {
    "en": [
      {
        "start": 5,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 13
      }
    ]
  },
  "t4-35:37:B": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t4-35:37:C": {
    "en": [
      {
        "start": 3,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t4-35:37:D": {
    "en": [
      {
        "start": 5,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 13
      }
    ]
  },
  "t4-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t4-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t4-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t4-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t4-38:39:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t4-38:39:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t4-38:39:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t4-38:40:A": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 33
      }
    ]
  },
  "t4-38:40:B": {
    "en": [
      {
        "start": 17,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 16,
        "end": 35
      }
    ]
  },
  "t4-38:40:C": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 29
      }
    ]
  },
  "t4-38:40:D": {
    "en": [
      {
        "start": 13,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 34
      }
    ]
  },
  "t4-41:41:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t4-41:41:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-41:41:C": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t4-41:41:D": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-41:42:A": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t4-41:42:B": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t4-41:42:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-41:42:D": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t4-41:43:A": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 20
      }
    ]
  },
  "t4-41:43:B": {
    "en": [
      {
        "start": 5,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 29
      }
    ]
  },
  "t4-41:43:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t4-41:43:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 17
      }
    ]
  },
  "t4-44:44:A": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 32
      }
    ]
  },
  "t4-44:44:B": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 33
      }
    ]
  },
  "t4-44:44:C": {
    "en": [
      {
        "start": 3,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 12
      }
    ]
  },
  "t4-44:44:D": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t4-44:45:A": {
    "en": [
      {
        "start": 3,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-44:45:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-44:45:C": {
    "en": [
      {
        "start": 2,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t4-44:45:D": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-44:46:A": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-44:46:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-44:46:C": {
    "en": [
      {
        "start": 19,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 36
      }
    ]
  },
  "t4-44:46:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t4-47:47:A": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-47:47:B": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t4-47:47:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-47:47:D": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-47:48:A": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-47:48:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-47:48:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t4-47:48:D": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t4-47:49:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t4-47:49:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t4-47:49:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t4-47:49:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t4-50:50:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t4-50:50:B": {
    "en": [
      {
        "start": 2,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t4-50:50:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t4-50:50:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 27
      }
    ]
  },
  "t4-50:51:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t4-50:51:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-50:51:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-50:51:D": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 35
      }
    ]
  },
  "t4-50:52:A": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 34
      }
    ]
  },
  "t4-50:52:B": {
    "en": [
      {
        "start": 16,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 29
      }
    ]
  },
  "t4-50:52:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 18
      }
    ]
  },
  "t4-50:52:D": {
    "en": [
      {
        "start": 20,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 32,
        "end": 49
      }
    ]
  },
  "t4-53:53:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-53:53:B": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-53:53:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-53:53:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-53:54:A": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 39
      }
    ]
  },
  "t4-53:54:B": {
    "en": [
      {
        "start": 6,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 29
      }
    ]
  },
  "t4-53:54:C": {
    "en": [
      {
        "start": 5,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 33
      }
    ]
  },
  "t4-53:54:D": {
    "en": [
      {
        "start": 24,
        "end": 42
      }
    ],
    "vi": [
      {
        "start": 29,
        "end": 47
      }
    ]
  },
  "t4-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 36
      }
    ]
  },
  "t4-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t4-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 34
      }
    ]
  },
  "t4-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 37
      }
    ]
  },
  "t4-56:56:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-56:56:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t4-56:56:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-56:56:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t4-56:57:A": {
    "en": [
      {
        "start": 21,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 15,
        "end": 23
      }
    ]
  },
  "t4-56:57:B": {
    "en": [
      {
        "start": 11,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 32
      }
    ]
  },
  "t4-56:57:C": {
    "en": [
      {
        "start": 14,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 13,
        "end": 37
      }
    ]
  },
  "t4-56:57:D": {
    "en": [
      {
        "start": 6,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 13
      }
    ]
  },
  "t4-56:58:A": {
    "en": [
      {
        "start": 4,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 26
      }
    ]
  },
  "t4-56:58:B": {
    "en": [
      {
        "start": 4,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 18
      }
    ]
  },
  "t4-56:58:C": {
    "en": [
      {
        "start": 4,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 25
      }
    ]
  },
  "t4-56:58:D": {
    "en": [
      {
        "start": 7,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 15
      }
    ]
  },
  "t4-59:59:A": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-59:59:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-59:59:C": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-59:59:D": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-59:60:A": {
    "en": [
      {
        "start": 5,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t4-59:60:B": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 25
      }
    ]
  },
  "t4-59:60:C": {
    "en": [
      {
        "start": 2,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 33
      }
    ]
  },
  "t4-59:60:D": {
    "en": [
      {
        "start": 13,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 20,
        "end": 39
      }
    ]
  },
  "t4-59:61:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t4-59:61:C": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t4-59:61:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t4-62:62:A": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t4-62:62:B": {
    "en": [
      {
        "start": 5,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-62:62:C": {
    "en": [
      {
        "start": 5,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-62:62:D": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t4-62:63:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t4-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t4-62:63:C": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t4-62:63:D": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t4-62:64:A": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t4-62:64:B": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t4-62:64:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-62:64:D": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t4-65:65:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t4-65:65:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t4-65:65:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-65:65:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t4-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t4-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t4-65:66:C": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t4-65:66:D": {
    "en": [
      {
        "start": 4,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-65:67:A": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t4-65:67:B": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t4-65:67:C": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t4-65:67:D": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t4-68:68:A": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t4-68:68:B": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t4-68:68:C": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-68:68:D": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t4-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t4-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 34
      }
    ]
  },
  "t4-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t4-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t5-32:32:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t5-32:32:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 37
      }
    ]
  },
  "t5-32:32:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t5-32:32:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t5-32:33:A": {
    "en": [
      {
        "start": 6,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 26
      }
    ]
  },
  "t5-32:33:B": {
    "en": [
      {
        "start": 7,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t5-32:33:C": {
    "en": [
      {
        "start": 15,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 20
      }
    ]
  },
  "t5-32:33:D": {
    "en": [
      {
        "start": 7,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t5-32:34:A": {
    "en": [
      {
        "start": 7,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t5-32:34:B": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t5-32:34:C": {
    "en": [
      {
        "start": 5,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t5-32:34:D": {
    "en": [
      {
        "start": 5,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 25
      }
    ]
  },
  "t5-35:35:A": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t5-35:35:B": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 26
      }
    ]
  },
  "t5-35:35:C": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t5-35:35:D": {
    "en": [
      {
        "start": 6,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 36
      }
    ]
  },
  "t5-35:36:A": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 19
      }
    ]
  },
  "t5-35:36:B": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 14
      }
    ]
  },
  "t5-35:36:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 12
      }
    ]
  },
  "t5-35:36:D": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 19
      }
    ]
  },
  "t5-35:37:A": {
    "en": [
      {
        "start": 2,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t5-35:37:B": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 22
      }
    ]
  },
  "t5-35:37:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 17
      }
    ]
  },
  "t5-35:37:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 17
      }
    ]
  },
  "t5-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t5-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t5-38:39:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t5-38:39:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-38:39:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t5-38:40:A": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-38:40:B": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t5-38:40:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-38:40:D": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-41:41:A": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t5-41:41:B": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 31
      }
    ]
  },
  "t5-41:41:C": {
    "en": [
      {
        "start": 7,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 31
      }
    ]
  },
  "t5-41:41:D": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 29
      }
    ]
  },
  "t5-41:42:A": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t5-41:42:B": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t5-41:42:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t5-41:42:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t5-41:43:A": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t5-41:43:B": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 33
      }
    ]
  },
  "t5-41:43:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t5-41:43:D": {
    "en": [
      {
        "start": 2,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t5-44:44:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 4
      }
    ]
  },
  "t5-44:44:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-44:44:C": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-44:44:D": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-44:45:A": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t5-44:45:B": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t5-44:45:C": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 25
      }
    ]
  },
  "t5-44:45:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 25
      }
    ]
  },
  "t5-44:46:A": {
    "en": [
      {
        "start": 8,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 32
      }
    ]
  },
  "t5-44:46:B": {
    "en": [
      {
        "start": 7,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 27
      }
    ]
  },
  "t5-44:46:C": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t5-44:46:D": {
    "en": [
      {
        "start": 2,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t5-47:47:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 18
      }
    ]
  },
  "t5-47:47:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-47:47:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-47:47:D": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 22
      }
    ]
  },
  "t5-47:48:A": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 15
      }
    ]
  },
  "t5-47:48:B": {
    "en": [
      {
        "start": 21,
        "end": 41
      }
    ],
    "vi": [
      {
        "start": 21,
        "end": 41
      }
    ]
  },
  "t5-47:48:C": {
    "en": [
      {
        "start": 6,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 15
      }
    ]
  },
  "t5-47:48:D": {
    "en": [
      {
        "start": 10,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 32
      }
    ]
  },
  "t5-47:49:A": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t5-47:49:B": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t5-47:49:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t5-47:49:D": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-50:50:A": {
    "en": [
      {
        "start": 7,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 31
      }
    ]
  },
  "t5-50:50:B": {
    "en": [
      {
        "start": 9,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 23
      }
    ]
  },
  "t5-50:50:C": {
    "en": [
      {
        "start": 7,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 37
      }
    ]
  },
  "t5-50:50:D": {
    "en": [
      {
        "start": 7,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 19
      }
    ]
  },
  "t5-50:51:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-50:51:B": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-50:51:C": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t5-50:51:D": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t5-50:52:A": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 27
      }
    ]
  },
  "t5-50:52:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 26
      }
    ]
  },
  "t5-50:52:C": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t5-50:52:D": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t5-53:53:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t5-53:53:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t5-53:53:C": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-53:53:D": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-53:54:A": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 22
      }
    ]
  },
  "t5-53:54:B": {
    "en": [
      {
        "start": 2,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 33
      }
    ]
  },
  "t5-53:54:C": {
    "en": [
      {
        "start": 5,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 23
      }
    ]
  },
  "t5-53:54:D": {
    "en": [
      {
        "start": 36,
        "end": 42
      }
    ],
    "vi": [
      {
        "start": 43,
        "end": 52
      }
    ]
  },
  "t5-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t5-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t5-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t5-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t5-56:56:A": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t5-56:56:B": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t5-56:56:C": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t5-56:56:D": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t5-56:57:A": {
    "en": [
      {
        "start": 3,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 38
      }
    ]
  },
  "t5-56:57:B": {
    "en": [
      {
        "start": 3,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 30
      }
    ]
  },
  "t5-56:57:C": {
    "en": [
      {
        "start": 16,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 39
      }
    ]
  },
  "t5-56:57:D": {
    "en": [
      {
        "start": 16,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 15,
        "end": 38
      }
    ]
  },
  "t5-56:58:A": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t5-56:58:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t5-56:58:C": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t5-56:58:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-59:59:A": {
    "en": [
      {
        "start": 5,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t5-59:59:B": {
    "en": [
      {
        "start": 6,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t5-59:59:C": {
    "en": [
      {
        "start": 5,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t5-59:59:D": {
    "en": [
      {
        "start": 6,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t5-59:60:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t5-59:60:B": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t5-59:60:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t5-59:60:D": {
    "en": [
      {
        "start": 13,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t5-59:61:A": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t5-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-59:61:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t5-59:61:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t5-62:62:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-62:62:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-62:62:C": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-62:62:D": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-62:63:A": {
    "en": [
      {
        "start": 0,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t5-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 38
      }
    ]
  },
  "t5-62:63:C": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t5-62:63:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t5-62:64:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t5-62:64:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t5-62:64:C": {
    "en": [
      {
        "start": 13,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 5,
        "end": 23
      }
    ]
  },
  "t5-62:64:D": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t5-65:65:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t5-65:65:B": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t5-65:65:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t5-65:65:D": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t5-65:66:A": {
    "en": [
      {
        "start": 4,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t5-65:66:B": {
    "en": [
      {
        "start": 4,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t5-65:66:C": {
    "en": [
      {
        "start": 4,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t5-65:66:D": {
    "en": [
      {
        "start": 4,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t5-65:67:A": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t5-65:67:B": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 40
      }
    ]
  },
  "t5-65:67:C": {
    "en": [
      {
        "start": 18,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 28
      }
    ]
  },
  "t5-65:67:D": {
    "en": [
      {
        "start": 15,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 26
      }
    ]
  },
  "t5-68:68:A": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t5-68:68:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t5-68:68:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t5-68:68:D": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t5-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t5-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t5-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t5-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t5-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t5-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t5-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t5-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t6-32:32:A": {
    "en": [
      {
        "start": 2,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 28
      }
    ]
  },
  "t6-32:32:B": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t6-32:32:C": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t6-32:32:D": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t6-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t6-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t6-32:33:C": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-32:33:D": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-32:34:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t6-32:34:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 2
      }
    ]
  },
  "t6-32:34:C": {
    "en": [
      {
        "start": 5,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 13
      }
    ]
  },
  "t6-32:34:D": {
    "en": [
      {
        "start": 5,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 15
      }
    ]
  },
  "t6-35:35:A": {
    "en": [
      {
        "start": 5,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t6-35:35:B": {
    "en": [
      {
        "start": 5,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t6-35:35:C": {
    "en": [
      {
        "start": 5,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t6-35:35:D": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t6-35:36:A": {
    "en": [
      {
        "start": 3,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 32
      }
    ]
  },
  "t6-35:36:B": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 20
      }
    ]
  },
  "t6-35:36:C": {
    "en": [
      {
        "start": 3,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 31
      }
    ]
  },
  "t6-35:36:D": {
    "en": [
      {
        "start": 3,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 18
      }
    ]
  },
  "t6-35:37:A": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t6-35:37:B": {
    "en": [
      {
        "start": 3,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 6
      }
    ]
  },
  "t6-35:37:C": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 12
      }
    ]
  },
  "t6-35:37:D": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 9
      }
    ]
  },
  "t6-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t6-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 4
      }
    ]
  },
  "t6-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t6-38:39:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-38:39:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t6-38:39:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-38:40:A": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-38:40:B": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-38:40:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t6-38:40:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-41:41:A": {
    "en": [
      {
        "start": 5,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 15
      }
    ]
  },
  "t6-41:41:B": {
    "en": [
      {
        "start": 5,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t6-41:41:C": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 22
      }
    ]
  },
  "t6-41:41:D": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t6-41:42:A": {
    "en": [
      {
        "start": 7,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 17
      }
    ]
  },
  "t6-41:42:B": {
    "en": [
      {
        "start": 17,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 15,
        "end": 24
      }
    ]
  },
  "t6-41:42:C": {
    "en": [
      {
        "start": 13,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 26
      }
    ]
  },
  "t6-41:42:D": {
    "en": [
      {
        "start": 12,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 12
      }
    ]
  },
  "t6-41:43:A": {
    "en": [
      {
        "start": 6,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-41:43:B": {
    "en": [
      {
        "start": 7,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-41:43:C": {
    "en": [
      {
        "start": 2,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t6-41:43:D": {
    "en": [
      {
        "start": 13,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-44:44:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t6-44:44:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-44:44:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-44:44:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t6-44:45:A": {
    "en": [
      {
        "start": 2,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t6-44:45:B": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-44:45:C": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t6-44:45:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-44:46:A": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-44:46:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-44:46:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-44:46:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-47:47:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t6-47:47:B": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t6-47:47:C": {
    "en": [
      {
        "start": 9,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-47:47:D": {
    "en": [
      {
        "start": 7,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 5,
        "end": 14
      }
    ]
  },
  "t6-47:48:A": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-47:48:B": {
    "en": [
      {
        "start": 2,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-47:48:C": {
    "en": [
      {
        "start": 5,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t6-47:48:D": {
    "en": [
      {
        "start": 2,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-47:49:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-47:49:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-47:49:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t6-47:49:D": {
    "en": [
      {
        "start": 14,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 20
      }
    ]
  },
  "t6-50:50:A": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t6-50:50:B": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t6-50:50:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-50:50:D": {
    "en": [
      {
        "start": 2,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-50:51:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t6-50:51:B": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-50:51:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t6-50:51:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t6-50:52:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t6-50:52:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-53:53:A": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t6-53:53:B": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-53:53:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-53:53:D": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t6-53:54:A": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t6-53:54:B": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t6-53:54:C": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t6-53:54:D": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t6-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-56:56:A": {
    "en": [
      {
        "start": 13,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 27
      }
    ]
  },
  "t6-56:56:B": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-56:56:C": {
    "en": [
      {
        "start": 21,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 25
      }
    ]
  },
  "t6-56:56:D": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t6-56:57:A": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-56:57:B": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t6-56:57:C": {
    "en": [
      {
        "start": 8,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 21
      }
    ]
  },
  "t6-56:57:D": {
    "en": [
      {
        "start": 22,
        "end": 41
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 17
      }
    ]
  },
  "t6-56:58:A": {
    "en": [
      {
        "start": 3,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-56:58:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-56:58:C": {
    "en": [
      {
        "start": 3,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-56:58:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t6-59:59:A": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-59:59:B": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-59:59:C": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t6-59:59:D": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-59:60:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t6-59:60:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t6-59:60:C": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-59:60:D": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t6-59:61:A": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t6-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t6-59:61:C": {
    "en": [
      {
        "start": 29,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 28,
        "end": 33
      }
    ]
  },
  "t6-59:61:D": {
    "en": [
      {
        "start": 18,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 22
      }
    ]
  },
  "t6-62:62:A": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t6-62:62:B": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t6-62:62:C": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-62:62:D": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t6-62:63:A": {
    "en": [
      {
        "start": 15,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t6-62:63:B": {
    "en": [
      {
        "start": 25,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 23
      }
    ]
  },
  "t6-62:63:C": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 23
      }
    ]
  },
  "t6-62:63:D": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t6-62:64:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t6-62:64:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t6-62:64:C": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t6-62:64:D": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t6-65:65:A": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-65:65:B": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t6-65:65:C": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-65:65:D": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-65:66:C": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t6-65:67:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-65:67:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t6-65:67:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t6-65:67:D": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t6-68:68:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-68:68:B": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t6-68:68:C": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t6-68:68:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t6-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t6-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t6-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t6-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t6-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t6-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t6-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t7-32:32:A": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t7-32:32:B": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t7-32:32:C": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-32:32:D": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t7-32:33:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t7-32:33:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-32:34:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-32:34:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-32:34:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-32:34:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t7-35:35:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-35:35:B": {
    "en": [
      {
        "start": 0,
        "end": 4
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-35:35:C": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-35:35:D": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-35:36:A": {
    "en": [
      {
        "start": 4,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t7-35:36:B": {
    "en": [
      {
        "start": 4,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t7-35:36:C": {
    "en": [
      {
        "start": 4,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t7-35:36:D": {
    "en": [
      {
        "start": 4,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t7-35:37:A": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t7-35:37:B": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t7-35:37:C": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t7-35:37:D": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-38:38:A": {
    "en": [
      {
        "start": 5,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t7-38:38:B": {
    "en": [
      {
        "start": 5,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-38:38:C": {
    "en": [
      {
        "start": 6,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t7-38:38:D": {
    "en": [
      {
        "start": 5,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t7-38:39:A": {
    "en": [
      {
        "start": 2,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-38:39:B": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t7-38:39:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-38:39:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-38:40:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t7-38:40:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t7-38:40:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-38:40:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-41:41:A": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-41:41:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-41:41:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-41:41:D": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-41:42:A": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t7-41:42:B": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-41:42:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t7-41:42:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t7-41:43:A": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 24
      }
    ]
  },
  "t7-41:43:B": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-41:43:C": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 25
      }
    ]
  },
  "t7-41:43:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-44:44:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-44:44:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-44:44:C": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-44:44:D": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-44:45:A": {
    "en": [
      {
        "start": 2,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 39
      }
    ]
  },
  "t7-44:45:B": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t7-44:45:C": {
    "en": [
      {
        "start": 2,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t7-44:45:D": {
    "en": [
      {
        "start": 3,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 38
      }
    ]
  },
  "t7-44:46:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t7-44:46:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t7-44:46:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-44:46:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-47:47:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-47:47:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t7-47:47:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-47:47:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t7-47:48:A": {
    "en": [
      {
        "start": 13,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 21
      }
    ]
  },
  "t7-47:48:B": {
    "en": [
      {
        "start": 9,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 26
      }
    ]
  },
  "t7-47:48:C": {
    "en": [
      {
        "start": 3,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t7-47:48:D": {
    "en": [
      {
        "start": 32,
        "end": 40
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 19
      }
    ]
  },
  "t7-47:49:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-47:49:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t7-47:49:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-47:49:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-50:50:A": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t7-50:50:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-50:50:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-50:50:D": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-50:51:A": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-50:51:B": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-50:51:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t7-50:51:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t7-50:52:A": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t7-50:52:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-50:52:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-50:52:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-53:53:A": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-53:53:B": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-53:53:C": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t7-53:53:D": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t7-53:54:A": {
    "en": [
      {
        "start": 7,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 13
      }
    ]
  },
  "t7-53:54:B": {
    "en": [
      {
        "start": 4,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 14
      }
    ]
  },
  "t7-53:54:C": {
    "en": [
      {
        "start": 4,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 17
      }
    ]
  },
  "t7-53:54:D": {
    "en": [
      {
        "start": 7,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 16
      }
    ]
  },
  "t7-53:55:A": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t7-53:55:B": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 19
      }
    ]
  },
  "t7-53:55:C": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t7-53:55:D": {
    "en": [
      {
        "start": 15,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 17
      }
    ]
  },
  "t7-56:56:A": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-56:56:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t7-56:56:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-56:56:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-56:57:A": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t7-56:57:B": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t7-56:57:C": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t7-56:57:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-56:58:A": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t7-56:58:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-56:58:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t7-56:58:D": {
    "en": [
      {
        "start": 14,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 37
      }
    ]
  },
  "t7-59:59:A": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-59:59:B": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-59:59:C": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-59:59:D": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-59:60:A": {
    "en": [
      {
        "start": 25,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 10
      }
    ]
  },
  "t7-59:60:B": {
    "en": [
      {
        "start": 33,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 23,
        "end": 28
      }
    ]
  },
  "t7-59:60:C": {
    "en": [
      {
        "start": 15,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 13,
        "end": 27
      }
    ]
  },
  "t7-59:60:D": {
    "en": [
      {
        "start": 11,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t7-59:61:A": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 10
      }
    ]
  },
  "t7-59:61:B": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 11
      }
    ]
  },
  "t7-59:61:C": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t7-59:61:D": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 15
      }
    ]
  },
  "t7-62:62:A": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t7-62:62:B": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-62:62:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-62:62:D": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t7-62:63:A": {
    "en": [
      {
        "start": 3,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t7-62:63:B": {
    "en": [
      {
        "start": 16,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 25
      }
    ]
  },
  "t7-62:63:C": {
    "en": [
      {
        "start": 15,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 17
      }
    ]
  },
  "t7-62:63:D": {
    "en": [
      {
        "start": 19,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 14,
        "end": 23
      }
    ]
  },
  "t7-62:64:A": {
    "en": [
      {
        "start": 3,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-62:64:B": {
    "en": [
      {
        "start": 3,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t7-62:64:C": {
    "en": [
      {
        "start": 3,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t7-62:64:D": {
    "en": [
      {
        "start": 3,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-65:65:A": {
    "en": [
      {
        "start": 2,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t7-65:65:B": {
    "en": [
      {
        "start": 19,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 28
      }
    ]
  },
  "t7-65:65:C": {
    "en": [
      {
        "start": 13,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 28
      }
    ]
  },
  "t7-65:65:D": {
    "en": [
      {
        "start": 2,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t7-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t7-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t7-65:66:C": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t7-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t7-65:67:A": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t7-65:67:B": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-65:67:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-65:67:D": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-68:68:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-68:68:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t7-68:68:C": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t7-68:68:D": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t7-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t7-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t7-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 4
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t7-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t7-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t7-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t7-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t8-32:32:A": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t8-32:32:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-32:32:C": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t8-32:32:D": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t8-32:33:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t8-32:33:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t8-32:34:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-32:34:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-32:34:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-32:34:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-35:35:A": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-35:35:B": {
    "en": [
      {
        "start": 5,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-35:35:C": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 10
      }
    ]
  },
  "t8-35:35:D": {
    "en": [
      {
        "start": 5,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 11
      }
    ]
  },
  "t8-35:36:A": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 30
      }
    ]
  },
  "t8-35:36:B": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t8-35:36:C": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t8-35:36:D": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-35:37:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t8-35:37:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t8-35:37:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-35:37:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t8-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 33
      }
    ]
  },
  "t8-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t8-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t8-38:39:B": {
    "en": [
      {
        "start": 2,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-38:39:C": {
    "en": [
      {
        "start": 3,
        "end": 38
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t8-38:39:D": {
    "en": [
      {
        "start": 33,
        "end": 41
      }
    ],
    "vi": [
      {
        "start": 43,
        "end": 50
      }
    ]
  },
  "t8-38:40:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t8-38:40:B": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-38:40:C": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-38:40:D": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t8-41:41:A": {
    "en": [
      {
        "start": 0,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t8-41:41:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t8-41:41:C": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-41:41:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-41:42:A": {
    "en": [
      {
        "start": 17,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 36
      }
    ]
  },
  "t8-41:42:B": {
    "en": [
      {
        "start": 12,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 21,
        "end": 32
      }
    ]
  },
  "t8-41:42:C": {
    "en": [
      {
        "start": 2,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t8-41:42:D": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t8-41:43:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-41:43:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t8-41:43:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t8-41:43:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t8-44:44:A": {
    "en": [
      {
        "start": 5,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-44:44:B": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-44:44:C": {
    "en": [
      {
        "start": 5,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-44:44:D": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 39
      }
    ]
  },
  "t8-44:45:A": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t8-44:45:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-44:45:C": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t8-44:45:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t8-44:46:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t8-44:46:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-44:46:C": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-44:46:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-47:47:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t8-47:47:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t8-47:47:C": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t8-47:47:D": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t8-47:48:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-47:48:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-47:48:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t8-47:48:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-47:49:A": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-47:49:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-47:49:C": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 33
      }
    ]
  },
  "t8-47:49:D": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-50:50:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-50:50:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 6,
        "end": 27
      }
    ]
  },
  "t8-50:50:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-50:50:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-50:51:A": {
    "en": [
      {
        "start": 2,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t8-50:51:B": {
    "en": [
      {
        "start": 12,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 32
      }
    ]
  },
  "t8-50:51:C": {
    "en": [
      {
        "start": 19,
        "end": 36
      }
    ],
    "vi": [
      {
        "start": 23,
        "end": 36
      }
    ]
  },
  "t8-50:51:D": {
    "en": [
      {
        "start": 2,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 33
      }
    ]
  },
  "t8-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-50:52:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-50:52:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t8-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-53:53:A": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 28
      }
    ]
  },
  "t8-53:53:B": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t8-53:53:C": {
    "en": [
      {
        "start": 5,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t8-53:53:D": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 26
      }
    ]
  },
  "t8-53:54:A": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t8-53:54:B": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 30
      }
    ]
  },
  "t8-53:54:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 18
      }
    ]
  },
  "t8-53:54:D": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t8-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t8-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t8-53:55:D": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 33
      }
    ]
  },
  "t8-56:56:A": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t8-56:56:B": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-56:56:C": {
    "en": [
      {
        "start": 5,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-56:56:D": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t8-56:57:A": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-56:57:B": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 14
      }
    ]
  },
  "t8-56:57:C": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-56:57:D": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-56:58:A": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-56:58:B": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 31
      }
    ]
  },
  "t8-56:58:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-56:58:D": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t8-59:59:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t8-59:59:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-59:59:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t8-59:59:D": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t8-59:60:A": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-59:60:B": {
    "en": [
      {
        "start": 3,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-59:60:C": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-59:60:D": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t8-59:61:A": {
    "en": [
      {
        "start": 3,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t8-59:61:B": {
    "en": [
      {
        "start": 2,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-59:61:C": {
    "en": [
      {
        "start": 5,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 14
      }
    ]
  },
  "t8-59:61:D": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 13
      }
    ]
  },
  "t8-62:62:A": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t8-62:62:B": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t8-62:62:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-62:62:D": {
    "en": [
      {
        "start": 2,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t8-62:63:A": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t8-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t8-62:63:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t8-62:63:D": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t8-62:64:A": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 17
      }
    ]
  },
  "t8-62:64:B": {
    "en": [
      {
        "start": 5,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 15
      }
    ]
  },
  "t8-62:64:C": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 17
      }
    ]
  },
  "t8-62:64:D": {
    "en": [
      {
        "start": 2,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 18
      }
    ]
  },
  "t8-65:65:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-65:65:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t8-65:65:C": {
    "en": [
      {
        "start": 18,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 25
      }
    ]
  },
  "t8-65:65:D": {
    "en": [
      {
        "start": 16,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 15
      }
    ]
  },
  "t8-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t8-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t8-65:66:C": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t8-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t8-65:67:A": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-65:67:B": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-65:67:C": {
    "en": [
      {
        "start": 4,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-65:67:D": {
    "en": [
      {
        "start": 4,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t8-68:68:A": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t8-68:68:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-68:68:C": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t8-68:68:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t8-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t8-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t8-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t8-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t8-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t8-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t8-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t8-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t9-32:32:A": {
    "en": [
      {
        "start": 14,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 33
      }
    ]
  },
  "t9-32:32:B": {
    "en": [
      {
        "start": 19,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 11,
        "end": 28
      }
    ]
  },
  "t9-32:32:C": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t9-32:32:D": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-32:33:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-32:33:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 17
      }
    ]
  },
  "t9-32:33:C": {
    "en": [
      {
        "start": 0,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 31
      }
    ]
  },
  "t9-32:33:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-32:34:A": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 22
      }
    ]
  },
  "t9-32:34:B": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 24
      }
    ]
  },
  "t9-32:34:C": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t9-32:34:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 15
      }
    ]
  },
  "t9-35:35:A": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 27
      }
    ]
  },
  "t9-35:35:B": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 32
      }
    ]
  },
  "t9-35:35:C": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t9-35:35:D": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 17
      }
    ]
  },
  "t9-35:36:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t9-35:36:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-35:36:C": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t9-35:36:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 42
      }
    ]
  },
  "t9-35:37:A": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t9-35:37:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-35:37:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t9-35:37:D": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t9-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 39
      }
    ]
  },
  "t9-38:38:C": {
    "en": [
      {
        "start": 2,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t9-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 34
      }
    ]
  },
  "t9-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-38:39:B": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t9-38:39:C": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-38:39:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-38:40:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t9-38:40:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-38:40:C": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t9-38:40:D": {
    "en": [
      {
        "start": 9,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 17
      }
    ]
  },
  "t9-41:41:A": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 27
      }
    ]
  },
  "t9-41:41:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 29
      }
    ]
  },
  "t9-41:41:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t9-41:41:D": {
    "en": [
      {
        "start": 2,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t9-41:42:A": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t9-41:42:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t9-41:42:C": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-41:42:D": {
    "en": [
      {
        "start": 2,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 29
      }
    ]
  },
  "t9-41:43:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t9-41:43:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 30
      }
    ]
  },
  "t9-41:43:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-41:43:D": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-44:44:A": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t9-44:44:B": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 25
      }
    ]
  },
  "t9-44:44:C": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-44:44:D": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 16
      }
    ]
  },
  "t9-44:45:A": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 40
      }
    ]
  },
  "t9-44:45:B": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 12
      }
    ]
  },
  "t9-44:45:C": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t9-44:45:D": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 30
      }
    ]
  },
  "t9-44:46:A": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t9-44:46:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t9-44:46:C": {
    "en": [
      {
        "start": 2,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 10
      }
    ]
  },
  "t9-44:46:D": {
    "en": [
      {
        "start": 2,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t9-47:47:A": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t9-47:47:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-47:47:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t9-47:47:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t9-47:48:A": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t9-47:48:B": {
    "en": [
      {
        "start": 3,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-47:48:C": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 29
      }
    ]
  },
  "t9-47:48:D": {
    "en": [
      {
        "start": 3,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-47:49:A": {
    "en": [
      {
        "start": 5,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t9-47:49:B": {
    "en": [
      {
        "start": 23,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 27,
        "end": 35
      }
    ]
  },
  "t9-47:49:C": {
    "en": [
      {
        "start": 18,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 22,
        "end": 38
      }
    ]
  },
  "t9-47:49:D": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t9-50:50:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t9-50:50:B": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-50:50:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t9-50:50:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-50:51:A": {
    "en": [
      {
        "start": 9,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 18
      }
    ]
  },
  "t9-50:51:B": {
    "en": [
      {
        "start": 3,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 30
      }
    ]
  },
  "t9-50:51:C": {
    "en": [
      {
        "start": 3,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 43
      }
    ]
  },
  "t9-50:51:D": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 15
      }
    ]
  },
  "t9-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-50:52:B": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t9-50:52:C": {
    "en": [
      {
        "start": 0,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t9-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-53:53:A": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t9-53:53:B": {
    "en": [
      {
        "start": 2,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t9-53:53:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 38
      }
    ]
  },
  "t9-53:53:D": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t9-53:54:A": {
    "en": [
      {
        "start": 3,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 40
      }
    ]
  },
  "t9-53:54:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 10
      }
    ]
  },
  "t9-53:54:C": {
    "en": [
      {
        "start": 3,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 7
      }
    ]
  },
  "t9-53:54:D": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 26
      }
    ]
  },
  "t9-53:55:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t9-53:55:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t9-53:55:C": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t9-53:55:D": {
    "en": [
      {
        "start": 19,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 22,
        "end": 38
      }
    ]
  },
  "t9-56:56:A": {
    "en": [
      {
        "start": 33,
        "end": 51
      }
    ],
    "vi": [
      {
        "start": 16,
        "end": 27
      }
    ]
  },
  "t9-56:56:B": {
    "en": [
      {
        "start": 22,
        "end": 48
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 26
      }
    ]
  },
  "t9-56:56:C": {
    "en": [
      {
        "start": 9,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 5,
        "end": 12
      }
    ]
  },
  "t9-56:56:D": {
    "en": [
      {
        "start": 9,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 28
      }
    ]
  },
  "t9-56:57:A": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-56:57:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-56:57:C": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-56:57:D": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-56:58:A": {
    "en": [
      {
        "start": 5,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 45
      }
    ]
  },
  "t9-56:58:B": {
    "en": [
      {
        "start": 20,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 22,
        "end": 36
      }
    ]
  },
  "t9-56:58:C": {
    "en": [
      {
        "start": 5,
        "end": 37
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 42
      }
    ]
  },
  "t9-56:58:D": {
    "en": [
      {
        "start": 5,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-59:59:A": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t9-59:59:B": {
    "en": [
      {
        "start": 0,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t9-59:59:C": {
    "en": [
      {
        "start": 0,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-59:59:D": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t9-59:60:A": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t9-59:60:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t9-59:60:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-59:60:D": {
    "en": [
      {
        "start": 0,
        "end": 31
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t9-59:61:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t9-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 29
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-59:61:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t9-59:61:D": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t9-62:62:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-62:62:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t9-62:62:C": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t9-62:62:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t9-62:63:A": {
    "en": [
      {
        "start": 0,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 7
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t9-62:63:C": {
    "en": [
      {
        "start": 0,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t9-62:63:D": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-62:64:A": {
    "en": [
      {
        "start": 5,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t9-62:64:B": {
    "en": [
      {
        "start": 2,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t9-62:64:C": {
    "en": [
      {
        "start": 5,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 7,
        "end": 29
      }
    ]
  },
  "t9-62:64:D": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-65:65:A": {
    "en": [
      {
        "start": 6,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t9-65:65:B": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t9-65:65:C": {
    "en": [
      {
        "start": 5,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-65:65:D": {
    "en": [
      {
        "start": 5,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t9-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t9-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t9-65:66:C": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t9-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 5
      }
    ]
  },
  "t9-65:67:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t9-65:67:B": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t9-65:67:C": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t9-65:67:D": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t9-68:68:A": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-68:68:B": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-68:68:C": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-68:68:D": {
    "en": [
      {
        "start": 3,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t9-68:69:A": {
    "en": [
      {
        "start": 23,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 19,
        "end": 30
      }
    ]
  },
  "t9-68:69:B": {
    "en": [
      {
        "start": 24,
        "end": 34
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t9-68:69:C": {
    "en": [
      {
        "start": 18,
        "end": 33
      }
    ],
    "vi": [
      {
        "start": 9,
        "end": 43
      }
    ]
  },
  "t9-68:69:D": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t9-68:70:A": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 13
      }
    ]
  },
  "t9-68:70:B": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t9-68:70:C": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 11
      }
    ]
  },
  "t9-68:70:D": {
    "en": [
      {
        "start": 3,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 9
      }
    ]
  },
  "t10-32:32:A": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t10-32:32:B": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-32:32:C": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 42
      }
    ]
  },
  "t10-32:32:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t10-32:33:A": {
    "en": [
      {
        "start": 5,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 26
      }
    ]
  },
  "t10-32:33:B": {
    "en": [
      {
        "start": 5,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t10-32:33:C": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 24
      }
    ]
  },
  "t10-32:33:D": {
    "en": [
      {
        "start": 6,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 17,
        "end": 36
      }
    ]
  },
  "t10-32:34:A": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-32:34:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t10-32:34:C": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-32:34:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t10-35:35:A": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t10-35:35:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t10-35:35:C": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 22
      }
    ]
  },
  "t10-35:35:D": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 35
      }
    ]
  },
  "t10-35:36:A": {
    "en": [
      {
        "start": 6,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t10-35:36:B": {
    "en": [
      {
        "start": 3,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 17
      }
    ]
  },
  "t10-35:36:C": {
    "en": [
      {
        "start": 6,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 11
      }
    ]
  },
  "t10-35:36:D": {
    "en": [
      {
        "start": 6,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 15
      }
    ]
  },
  "t10-35:37:A": {
    "en": [
      {
        "start": 0,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-35:37:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-35:37:C": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t10-35:37:D": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-38:38:A": {
    "en": [
      {
        "start": 0,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t10-38:38:B": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-38:38:C": {
    "en": [
      {
        "start": 0,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t10-38:38:D": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-38:39:A": {
    "en": [
      {
        "start": 0,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t10-38:39:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t10-38:39:C": {
    "en": [
      {
        "start": 2,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-38:39:D": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-38:40:A": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t10-38:40:B": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t10-38:40:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t10-38:40:D": {
    "en": [
      {
        "start": 3,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t10-41:41:A": {
    "en": [
      {
        "start": 5,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 17
      }
    ]
  },
  "t10-41:41:B": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 8,
        "end": 25
      }
    ]
  },
  "t10-41:41:C": {
    "en": [
      {
        "start": 6,
        "end": 30
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 28
      }
    ]
  },
  "t10-41:41:D": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 23
      }
    ]
  },
  "t10-41:42:A": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 20
      }
    ]
  },
  "t10-41:42:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t10-41:42:C": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 24
      }
    ]
  },
  "t10-41:42:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t10-41:43:A": {
    "en": [
      {
        "start": 2,
        "end": 13
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-41:43:B": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t10-41:43:C": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-41:43:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-44:44:A": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-44:44:B": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t10-44:44:C": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-44:44:D": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-44:45:A": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-44:45:B": {
    "en": [
      {
        "start": 0,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t10-44:45:C": {
    "en": [
      {
        "start": 2,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t10-44:45:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 30
      }
    ]
  },
  "t10-44:46:A": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t10-44:46:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-44:46:C": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t10-44:46:D": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t10-47:47:A": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 27
      }
    ]
  },
  "t10-47:47:B": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t10-47:47:C": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 17
      }
    ]
  },
  "t10-47:47:D": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-47:48:A": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t10-47:48:B": {
    "en": [
      {
        "start": 3,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-47:48:C": {
    "en": [
      {
        "start": 3,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 28
      }
    ]
  },
  "t10-47:48:D": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 10,
        "end": 24
      }
    ]
  },
  "t10-47:49:A": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t10-47:49:B": {
    "en": [
      {
        "start": 2,
        "end": 6
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t10-47:49:C": {
    "en": [
      {
        "start": 2,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 12
      }
    ]
  },
  "t10-47:49:D": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 19
      }
    ]
  },
  "t10-50:50:A": {
    "en": [
      {
        "start": 5,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t10-50:50:B": {
    "en": [
      {
        "start": 5,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t10-50:50:C": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 15
      }
    ]
  },
  "t10-50:50:D": {
    "en": [
      {
        "start": 5,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 10
      }
    ]
  },
  "t10-50:51:A": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t10-50:51:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t10-50:51:C": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 29
      }
    ]
  },
  "t10-50:51:D": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 20
      }
    ]
  },
  "t10-50:52:A": {
    "en": [
      {
        "start": 0,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t10-50:52:B": {
    "en": [
      {
        "start": 0,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t10-50:52:C": {
    "en": [
      {
        "start": 0,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t10-50:52:D": {
    "en": [
      {
        "start": 0,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 28
      }
    ]
  },
  "t10-53:53:A": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-53:53:B": {
    "en": [
      {
        "start": 2,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t10-53:53:C": {
    "en": [
      {
        "start": 2,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-53:53:D": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-53:54:A": {
    "en": [
      {
        "start": 3,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 23
      }
    ]
  },
  "t10-53:54:B": {
    "en": [
      {
        "start": 3,
        "end": 20
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 24
      }
    ]
  },
  "t10-53:54:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 17
      }
    ]
  },
  "t10-53:54:D": {
    "en": [
      {
        "start": 3,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 22
      }
    ]
  },
  "t10-53:55:A": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t10-53:55:B": {
    "en": [
      {
        "start": 2,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-53:55:C": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t10-53:55:D": {
    "en": [
      {
        "start": 2,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t10-56:56:A": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t10-56:56:B": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 21
      }
    ]
  },
  "t10-56:56:C": {
    "en": [
      {
        "start": 5,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 13
      }
    ]
  },
  "t10-56:56:D": {
    "en": [
      {
        "start": 5,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 11
      }
    ]
  },
  "t10-56:57:A": {
    "en": [
      {
        "start": 2,
        "end": 10
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 14
      }
    ]
  },
  "t10-56:57:B": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t10-56:57:C": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 26
      }
    ]
  },
  "t10-56:57:D": {
    "en": [
      {
        "start": 2,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 4,
        "end": 10
      }
    ]
  },
  "t10-56:58:A": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 26
      }
    ]
  },
  "t10-56:58:B": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 20
      }
    ]
  },
  "t10-56:58:C": {
    "en": [
      {
        "start": 0,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 9
      }
    ]
  },
  "t10-56:58:D": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 24
      }
    ]
  },
  "t10-59:59:A": {
    "en": [
      {
        "start": 3,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 21
      }
    ]
  },
  "t10-59:59:B": {
    "en": [
      {
        "start": 3,
        "end": 23
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 29
      }
    ]
  },
  "t10-59:59:C": {
    "en": [
      {
        "start": 3,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 20
      }
    ]
  },
  "t10-59:59:D": {
    "en": [
      {
        "start": 3,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 10
      }
    ]
  },
  "t10-59:60:A": {
    "en": [
      {
        "start": 3,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 42
      }
    ]
  },
  "t10-59:60:B": {
    "en": [
      {
        "start": 28,
        "end": 39
      }
    ],
    "vi": [
      {
        "start": 26,
        "end": 32
      }
    ]
  },
  "t10-59:60:C": {
    "en": [
      {
        "start": 12,
        "end": 26
      }
    ],
    "vi": [
      {
        "start": 18,
        "end": 33
      }
    ]
  },
  "t10-59:60:D": {
    "en": [
      {
        "start": 6,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t10-59:61:A": {
    "en": [
      {
        "start": 0,
        "end": 24
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 19
      }
    ]
  },
  "t10-59:61:B": {
    "en": [
      {
        "start": 0,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 25
      }
    ]
  },
  "t10-59:61:C": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 23
      }
    ]
  },
  "t10-59:61:D": {
    "en": [
      {
        "start": 3,
        "end": 18
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-62:62:A": {
    "en": [
      {
        "start": 5,
        "end": 21
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 19
      }
    ]
  },
  "t10-62:62:B": {
    "en": [
      {
        "start": 5,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 20
      }
    ]
  },
  "t10-62:62:C": {
    "en": [
      {
        "start": 5,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 10
      }
    ]
  },
  "t10-62:62:D": {
    "en": [
      {
        "start": 5,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 2,
        "end": 10
      }
    ]
  },
  "t10-62:63:A": {
    "en": [
      {
        "start": 2,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 6
      }
    ]
  },
  "t10-62:63:B": {
    "en": [
      {
        "start": 0,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 11
      }
    ]
  },
  "t10-62:63:C": {
    "en": [
      {
        "start": 2,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-62:63:D": {
    "en": [
      {
        "start": 2,
        "end": 17
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  },
  "t10-62:64:A": {
    "en": [
      {
        "start": 3,
        "end": 12
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-62:64:B": {
    "en": [
      {
        "start": 3,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-62:64:C": {
    "en": [
      {
        "start": 3,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t10-62:64:D": {
    "en": [
      {
        "start": 3,
        "end": 9
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 8
      }
    ]
  },
  "t10-65:65:A": {
    "en": [
      {
        "start": 3,
        "end": 28
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 25
      }
    ]
  },
  "t10-65:65:B": {
    "en": [
      {
        "start": 3,
        "end": 32
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 33
      }
    ]
  },
  "t10-65:65:C": {
    "en": [
      {
        "start": 12,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 12,
        "end": 22
      }
    ]
  },
  "t10-65:65:D": {
    "en": [
      {
        "start": 3,
        "end": 35
      }
    ],
    "vi": [
      {
        "start": 3,
        "end": 35
      }
    ]
  },
  "t10-65:66:A": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t10-65:66:B": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t10-65:66:C": {
    "en": [
      {
        "start": 0,
        "end": 3
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 3
      }
    ]
  },
  "t10-65:66:D": {
    "en": [
      {
        "start": 0,
        "end": 4
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 4
      }
    ]
  },
  "t10-65:67:A": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t10-65:67:B": {
    "en": [
      {
        "start": 2,
        "end": 15
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-65:67:C": {
    "en": [
      {
        "start": 2,
        "end": 19
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-65:67:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 12
      }
    ]
  },
  "t10-68:68:A": {
    "en": [
      {
        "start": 2,
        "end": 14
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 13
      }
    ]
  },
  "t10-68:68:B": {
    "en": [
      {
        "start": 3,
        "end": 11
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 10
      }
    ]
  },
  "t10-68:68:C": {
    "en": [
      {
        "start": 2,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 15
      }
    ]
  },
  "t10-68:68:D": {
    "en": [
      {
        "start": 2,
        "end": 16
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 16
      }
    ]
  },
  "t10-68:69:A": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-68:69:B": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-68:69:C": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-68:69:D": {
    "en": [
      {
        "start": 0,
        "end": 5
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 7
      }
    ]
  },
  "t10-68:70:A": {
    "en": [
      {
        "start": 0,
        "end": 25
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 32
      }
    ]
  },
  "t10-68:70:B": {
    "en": [
      {
        "start": 0,
        "end": 8
      }
    ],
    "vi": [
      {
        "start": 21,
        "end": 28
      }
    ]
  },
  "t10-68:70:C": {
    "en": [
      {
        "start": 0,
        "end": 22
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 18
      }
    ]
  },
  "t10-68:70:D": {
    "en": [
      {
        "start": 0,
        "end": 27
      }
    ],
    "vi": [
      {
        "start": 0,
        "end": 21
      }
    ]
  }
};
const synchronizedQuestionActors = {
  "t2-32:32": [
    {
      "start": 23,
      "end": 30,
      "style": "actor"
    }
  ],
  "t2-32:33": [
    {
      "start": 29,
      "end": 41,
      "style": "actor"
    }
  ],
  "t2-32:34": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-35:35": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t2-35:36": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t2-35:37": [
    {
      "start": 7,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-38:38": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t2-38:39": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-38:40": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-41:41": [],
  "t2-41:42": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t2-41:43": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t2-44:44": [
    {
      "start": 24,
      "end": 36,
      "style": "actor"
    }
  ],
  "t2-44:45": [
    {
      "start": 17,
      "end": 38,
      "style": "actor"
    }
  ],
  "t2-44:46": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t2-47:47": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t2-47:48": [
    {
      "start": 23,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t2-47:49": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    },
    {
      "start": 37,
      "end": 49,
      "style": "actor"
    }
  ],
  "t2-50:50": [
    {
      "start": 17,
      "end": 24,
      "style": "actor"
    }
  ],
  "t2-50:51": [
    {
      "start": 28,
      "end": 37,
      "style": "actor"
    },
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t2-50:52": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-53:53": [
    {
      "start": 25,
      "end": 37,
      "style": "actor"
    }
  ],
  "t2-53:54": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t2-53:55": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-56:56": [
    {
      "start": 17,
      "end": 24,
      "style": "actor"
    }
  ],
  "t2-56:57": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t2-56:58": [
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t2-59:59": [
    {
      "start": 27,
      "end": 36,
      "style": "actor"
    }
  ],
  "t2-59:60": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t2-59:61": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t2-62:62": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t2-62:63": [
    {
      "start": 35,
      "end": 42,
      "style": "actor"
    }
  ],
  "t2-62:64": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 35,
      "style": "actor"
    }
  ],
  "t2-65:65": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t2-65:66": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t2-65:67": [
    {
      "start": 44,
      "end": 51,
      "style": "actor"
    }
  ],
  "t2-68:68": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t2-68:69": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t2-68:70": [
    {
      "start": 36,
      "end": 45,
      "style": "actor"
    }
  ],
  "t3-32:32": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t3-32:33": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-32:34": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t3-35:35": [],
  "t3-35:36": [
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t3-35:37": [
    {
      "start": 9,
      "end": 15,
      "style": "actor"
    }
  ],
  "t3-38:38": [
    {
      "start": 9,
      "end": 20,
      "style": "actor"
    }
  ],
  "t3-38:39": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t3-38:40": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t3-41:41": [
    {
      "start": 18,
      "end": 27,
      "style": "actor"
    }
  ],
  "t3-41:42": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t3-41:43": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-44:44": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t3-44:45": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-44:46": [
    {
      "start": 30,
      "end": 39,
      "style": "actor"
    },
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t3-47:47": [],
  "t3-47:48": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t3-47:49": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 54,
      "end": 61,
      "style": "actor"
    }
  ],
  "t3-50:50": [
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    }
  ],
  "t3-50:51": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 35,
      "style": "actor"
    }
  ],
  "t3-50:52": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t3-53:53": [
    {
      "start": 24,
      "end": 36,
      "style": "actor"
    }
  ],
  "t3-53:54": [
    {
      "start": 9,
      "end": 25,
      "style": "actor"
    }
  ],
  "t3-53:55": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-56:56": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t3-56:57": [
    {
      "start": 15,
      "end": 22,
      "style": "actor"
    }
  ],
  "t3-56:58": [],
  "t3-59:59": [
    {
      "start": 27,
      "end": 34,
      "style": "actor"
    }
  ],
  "t3-59:60": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t3-59:61": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t3-62:62": [
    {
      "start": 46,
      "end": 53,
      "style": "actor"
    }
  ],
  "t3-62:63": [],
  "t3-62:64": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t3-65:65": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-65:66": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t3-65:67": [
    {
      "start": 36,
      "end": 43,
      "style": "actor"
    }
  ],
  "t3-68:68": [
    {
      "start": 15,
      "end": 24,
      "style": "actor"
    }
  ],
  "t3-68:69": [
    {
      "start": 40,
      "end": 49,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t3-68:70": [
    {
      "start": 40,
      "end": 49,
      "style": "actor"
    }
  ],
  "t4-32:32": [
    {
      "start": 19,
      "end": 28,
      "style": "actor"
    }
  ],
  "t4-32:33": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t4-32:34": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-35:35": [
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    }
  ],
  "t4-35:36": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t4-35:37": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-38:38": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 39,
      "style": "actor"
    }
  ],
  "t4-38:39": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-38:40": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t4-41:41": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-41:42": [
    {
      "start": 23,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-41:43": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t4-44:44": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t4-44:45": [
    {
      "start": 19,
      "end": 34,
      "style": "actor"
    }
  ],
  "t4-44:46": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-47:47": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t4-47:48": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-47:49": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-50:50": [
    {
      "start": 19,
      "end": 28,
      "style": "actor"
    }
  ],
  "t4-50:51": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 42,
      "style": "actor"
    }
  ],
  "t4-50:52": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-53:53": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 32,
      "style": "actor"
    }
  ],
  "t4-53:54": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-53:55": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t4-56:56": [
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    }
  ],
  "t4-56:57": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-56:58": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 46,
      "style": "actor"
    }
  ],
  "t4-59:59": [
    {
      "start": 10,
      "end": 31,
      "style": "actor"
    }
  ],
  "t4-59:60": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-59:61": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t4-62:62": [
    {
      "start": 11,
      "end": 18,
      "style": "actor"
    }
  ],
  "t4-62:63": [
    {
      "start": 39,
      "end": 48,
      "style": "actor"
    }
  ],
  "t4-62:64": [
    {
      "start": 23,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-65:65": [
    {
      "start": 24,
      "end": 33,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-65:66": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t4-65:67": [],
  "t4-68:68": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t4-68:69": [
    {
      "start": 45,
      "end": 54,
      "style": "actor"
    }
  ],
  "t4-68:70": [
    {
      "start": 43,
      "end": 52,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 34,
      "style": "actor"
    }
  ],
  "t5-32:32": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t5-32:33": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-32:34": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-35:35": [
    {
      "start": 11,
      "end": 20,
      "style": "actor"
    }
  ],
  "t5-35:36": [
    {
      "start": 32,
      "end": 39,
      "style": "actor"
    }
  ],
  "t5-35:37": [
    {
      "start": 22,
      "end": 29,
      "style": "actor"
    }
  ],
  "t5-38:38": [
    {
      "start": 21,
      "end": 28,
      "style": "actor"
    }
  ],
  "t5-38:39": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    }
  ],
  "t5-38:40": [
    {
      "start": 23,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-41:41": [],
  "t5-41:42": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t5-41:43": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-44:44": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    }
  ],
  "t5-44:45": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-44:46": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-47:47": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t5-47:48": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-47:49": [
    {
      "start": 19,
      "end": 24,
      "style": "actor"
    }
  ],
  "t5-50:50": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t5-50:51": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t5-50:52": [],
  "t5-53:53": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t5-53:54": [],
  "t5-53:55": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t5-56:56": [],
  "t5-56:57": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-56:58": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-59:59": [
    {
      "start": 11,
      "end": 20,
      "style": "actor"
    }
  ],
  "t5-59:60": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-59:61": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t5-62:62": [],
  "t5-62:63": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t5-62:64": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t5-65:65": [
    {
      "start": 25,
      "end": 37,
      "style": "actor"
    }
  ],
  "t5-65:66": [],
  "t5-65:67": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t5-68:68": [
    {
      "start": 19,
      "end": 28,
      "style": "actor"
    }
  ],
  "t5-68:69": [
    {
      "start": 37,
      "end": 44,
      "style": "actor"
    }
  ],
  "t5-68:70": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-32:32": [
    {
      "start": 13,
      "end": 22,
      "style": "actor"
    }
  ],
  "t6-32:33": [
    {
      "start": 17,
      "end": 29,
      "style": "actor"
    }
  ],
  "t6-32:34": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-35:35": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t6-35:36": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t6-35:37": [],
  "t6-38:38": [
    {
      "start": 8,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-38:39": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-38:40": [],
  "t6-41:41": [
    {
      "start": 22,
      "end": 34,
      "style": "actor"
    }
  ],
  "t6-41:42": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t6-41:43": [],
  "t6-44:44": [
    {
      "start": 20,
      "end": 32,
      "style": "actor"
    }
  ],
  "t6-44:45": [],
  "t6-44:46": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t6-47:47": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t6-47:48": [
    {
      "start": 20,
      "end": 29,
      "style": "actor"
    }
  ],
  "t6-47:49": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-50:50": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t6-50:51": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t6-50:52": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-53:53": [
    {
      "start": 19,
      "end": 26,
      "style": "actor"
    }
  ],
  "t6-53:54": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t6-53:55": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-56:56": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t6-56:57": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 37,
      "style": "actor"
    }
  ],
  "t6-56:58": [
    {
      "start": 23,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-59:59": [
    {
      "start": 25,
      "end": 37,
      "style": "actor"
    }
  ],
  "t6-59:60": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t6-59:61": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t6-62:62": [],
  "t6-62:63": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-62:64": [
    {
      "start": 32,
      "end": 41,
      "style": "actor"
    }
  ],
  "t6-65:65": [
    {
      "start": 11,
      "end": 20,
      "style": "actor"
    }
  ],
  "t6-65:66": [
    {
      "start": 29,
      "end": 36,
      "style": "actor"
    }
  ],
  "t6-65:67": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t6-68:68": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t6-68:69": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t6-68:70": [
    {
      "start": 35,
      "end": 44,
      "style": "actor"
    }
  ],
  "t7-32:32": [
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    }
  ],
  "t7-32:33": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-32:34": [
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t7-35:35": [
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    }
  ],
  "t7-35:36": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-35:37": [
    {
      "start": 7,
      "end": 14,
      "style": "actor"
    }
  ],
  "t7-38:38": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t7-38:39": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-38:40": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 35,
      "style": "actor"
    }
  ],
  "t7-41:41": [
    {
      "start": 25,
      "end": 32,
      "style": "actor"
    }
  ],
  "t7-41:42": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t7-41:43": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-44:44": [
    {
      "start": 8,
      "end": 17,
      "style": "actor"
    }
  ],
  "t7-44:45": [
    {
      "start": 8,
      "end": 17,
      "style": "actor"
    }
  ],
  "t7-44:46": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-47:47": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t7-47:48": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t7-47:49": [
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t7-50:50": [
    {
      "start": 20,
      "end": 32,
      "style": "actor"
    }
  ],
  "t7-50:51": [
    {
      "start": 8,
      "end": 14,
      "style": "actor"
    }
  ],
  "t7-50:52": [],
  "t7-53:53": [],
  "t7-53:54": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t7-53:55": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t7-56:56": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t7-56:57": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-56:58": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-59:59": [
    {
      "start": 11,
      "end": 18,
      "style": "actor"
    }
  ],
  "t7-59:60": [
    {
      "start": 15,
      "end": 24,
      "style": "actor"
    }
  ],
  "t7-59:61": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t7-62:62": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    }
  ],
  "t7-62:63": [
    {
      "start": 11,
      "end": 20,
      "style": "actor"
    }
  ],
  "t7-62:64": [],
  "t7-65:65": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t7-65:66": [
    {
      "start": 44,
      "end": 51,
      "style": "actor"
    }
  ],
  "t7-65:67": [],
  "t7-68:68": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t7-68:69": [],
  "t7-68:70": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-32:32": [
    {
      "start": 20,
      "end": 32,
      "style": "actor"
    }
  ],
  "t8-32:33": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    }
  ],
  "t8-32:34": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t8-35:35": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t8-35:36": [
    {
      "start": 18,
      "end": 25,
      "style": "actor"
    }
  ],
  "t8-35:37": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-38:38": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t8-38:39": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-38:40": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-41:41": [
    {
      "start": 20,
      "end": 32,
      "style": "actor"
    }
  ],
  "t8-41:42": [],
  "t8-41:43": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-44:44": [
    {
      "start": 11,
      "end": 18,
      "style": "actor"
    }
  ],
  "t8-44:45": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t8-44:46": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-47:47": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t8-47:48": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t8-47:49": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-50:50": [
    {
      "start": 10,
      "end": 21,
      "style": "actor"
    }
  ],
  "t8-50:51": [
    {
      "start": 18,
      "end": 24,
      "style": "actor"
    }
  ],
  "t8-50:52": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-53:53": [
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t8-53:54": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t8-53:55": [
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t8-56:56": [],
  "t8-56:57": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t8-56:58": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t8-59:59": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t8-59:60": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t8-59:61": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-62:62": [
    {
      "start": 19,
      "end": 28,
      "style": "actor"
    }
  ],
  "t8-62:63": [],
  "t8-62:64": [
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t8-65:65": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t8-65:66": [
    {
      "start": 49,
      "end": 56,
      "style": "actor"
    }
  ],
  "t8-65:67": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t8-68:68": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t8-68:69": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t8-68:70": [
    {
      "start": 58,
      "end": 67,
      "style": "actor"
    }
  ],
  "t9-32:32": [
    {
      "start": 23,
      "end": 30,
      "style": "actor"
    }
  ],
  "t9-32:33": [
    {
      "start": 13,
      "end": 22,
      "style": "actor"
    }
  ],
  "t9-32:34": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t9-35:35": [
    {
      "start": 19,
      "end": 26,
      "style": "actor"
    }
  ],
  "t9-35:36": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-35:37": [],
  "t9-38:38": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t9-38:39": [
    {
      "start": 22,
      "end": 31,
      "style": "actor"
    }
  ],
  "t9-38:40": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-41:41": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t9-41:42": [
    {
      "start": 8,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-41:43": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-44:44": [
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t9-44:45": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t9-44:46": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 34,
      "end": 41,
      "style": "actor"
    }
  ],
  "t9-47:47": [
    {
      "start": 19,
      "end": 26,
      "style": "actor"
    }
  ],
  "t9-47:48": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-47:49": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-50:50": [
    {
      "start": 21,
      "end": 33,
      "style": "actor"
    }
  ],
  "t9-50:51": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t9-50:52": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-53:53": [],
  "t9-53:54": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t9-53:55": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-56:56": [
    {
      "start": 21,
      "end": 30,
      "style": "actor"
    }
  ],
  "t9-56:57": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t9-56:58": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t9-59:59": [
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    }
  ],
  "t9-59:60": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-59:61": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t9-62:62": [
    {
      "start": 18,
      "end": 27,
      "style": "actor"
    }
  ],
  "t9-62:63": [
    {
      "start": 36,
      "end": 45,
      "style": "actor"
    }
  ],
  "t9-62:64": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-65:65": [],
  "t9-65:66": [
    {
      "start": 35,
      "end": 44,
      "style": "actor"
    }
  ],
  "t9-65:67": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-68:68": [
    {
      "start": 32,
      "end": 41,
      "style": "actor"
    }
  ],
  "t9-68:69": [
    {
      "start": 8,
      "end": 17,
      "style": "actor"
    }
  ],
  "t9-68:70": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t10-32:32": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    }
  ],
  "t10-32:33": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t10-32:34": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t10-35:35": [
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t10-35:36": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-35:37": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "actor"
    }
  ],
  "t10-38:38": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t10-38:39": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t10-38:40": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-41:41": [
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t10-41:42": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t10-41:43": [
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t10-44:44": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t10-44:45": [
    {
      "start": 8,
      "end": 15,
      "style": "actor"
    }
  ],
  "t10-44:46": [
    {
      "start": 11,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-47:47": [
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    }
  ],
  "t10-47:48": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-47:49": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t10-50:50": [
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t10-50:51": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t10-50:52": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t10-53:53": [
    {
      "start": 16,
      "end": 23,
      "style": "actor"
    }
  ],
  "t10-53:54": [
    {
      "start": 9,
      "end": 16,
      "style": "actor"
    }
  ],
  "t10-53:55": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-56:56": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-56:57": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t10-56:58": [
    {
      "start": 10,
      "end": 19,
      "style": "actor"
    }
  ],
  "t10-59:59": [
    {
      "start": 7,
      "end": 16,
      "style": "actor"
    }
  ],
  "t10-59:60": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ],
  "t10-59:61": [
    {
      "start": 13,
      "end": 20,
      "style": "actor"
    }
  ],
  "t10-62:62": [],
  "t10-62:63": [
    {
      "start": 39,
      "end": 48,
      "style": "actor"
    }
  ],
  "t10-62:64": [],
  "t10-65:65": [
    {
      "start": 9,
      "end": 18,
      "style": "actor"
    }
  ],
  "t10-65:66": [
    {
      "start": 35,
      "end": 44,
      "style": "actor"
    }
  ],
  "t10-65:67": [
    {
      "start": 25,
      "end": 37,
      "style": "actor"
    }
  ],
  "t10-68:68": [
    {
      "start": 19,
      "end": 26,
      "style": "actor"
    }
  ],
  "t10-68:69": [],
  "t10-68:70": [
    {
      "start": 10,
      "end": 17,
      "style": "actor"
    }
  ]
};

const synchronizedQuestionVietnamese = {
  "t2-32:32": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 30,
      "style": "focus"
    }
  ],
  "t2-32:33": [
    {
      "start": 11,
      "end": 24,
      "style": "focus"
    },
    {
      "start": 54,
      "end": 66,
      "style": "actor"
    }
  ],
  "t2-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 24,
      "style": "focus"
    },
    {
      "start": 33,
      "end": 49,
      "style": "focus"
    }
  ],
  "t2-35:35": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t2-35:36": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 19,
      "style": "focus"
    }
  ],
  "t2-35:37": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-38:38": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 18,
      "style": "focus"
    }
  ],
  "t2-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 41,
      "style": "focus"
    }
  ],
  "t2-38:40": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 22,
      "style": "focus"
    }
  ],
  "t2-41:41": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-41:42": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t2-41:43": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 49,
      "style": "focus"
    }
  ],
  "t2-44:44": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 46,
      "style": "focus"
    },
    {
      "start": 18,
      "end": 27,
      "style": "focus"
    }
  ],
  "t2-44:45": [
    {
      "start": 12,
      "end": 24,
      "style": "actor"
    },
    {
      "start": 47,
      "end": 55,
      "style": "focus"
    }
  ],
  "t2-44:46": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-47:47": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 43,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t2-47:48": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 37,
      "style": "actor"
    }
  ],
  "t2-47:49": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 50,
      "end": 62,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-50:50": [
    {
      "start": 6,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 20,
      "end": 28,
      "style": "focus"
    }
  ],
  "t2-50:51": [
    {
      "start": 6,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 24,
      "style": "focus"
    },
    {
      "start": 28,
      "end": 40,
      "style": "actor"
    },
    {
      "start": 41,
      "end": 48,
      "style": "focus"
    }
  ],
  "t2-50:52": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t2-53:53": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 26,
      "end": 46,
      "style": "focus"
    },
    {
      "start": 13,
      "end": 21,
      "style": "focus"
    }
  ],
  "t2-53:54": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-53:55": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 18,
      "style": "focus"
    }
  ],
  "t2-56:56": [
    {
      "start": 6,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 51,
      "end": 56,
      "style": "focus"
    },
    {
      "start": 36,
      "end": 44,
      "style": "focus"
    }
  ],
  "t2-56:57": [
    {
      "start": 14,
      "end": 27,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-56:58": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 48,
      "style": "focus"
    }
  ],
  "t2-59:59": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 48,
      "style": "focus"
    },
    {
      "start": 13,
      "end": 21,
      "style": "focus"
    }
  ],
  "t2-59:60": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-59:61": [
    {
      "start": 12,
      "end": 25,
      "style": "actor"
    },
    {
      "start": 26,
      "end": 34,
      "style": "focus"
    }
  ],
  "t2-62:62": [
    {
      "start": 15,
      "end": 28,
      "style": "actor"
    },
    {
      "start": 29,
      "end": 36,
      "style": "focus"
    }
  ],
  "t2-62:63": [
    {
      "start": 29,
      "end": 42,
      "style": "actor"
    },
    {
      "start": 50,
      "end": 59,
      "style": "focus"
    },
    {
      "start": 46,
      "end": 49,
      "style": "focus"
    }
  ],
  "t2-62:64": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 22,
      "style": "focus"
    },
    {
      "start": 23,
      "end": 28,
      "style": "actor"
    }
  ],
  "t2-65:65": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 36,
      "style": "focus"
    }
  ],
  "t2-65:66": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 21,
      "style": "focus"
    }
  ],
  "t2-65:67": [
    {
      "start": 18,
      "end": 30,
      "style": "focus"
    },
    {
      "start": 31,
      "end": 44,
      "style": "actor"
    },
    {
      "start": 56,
      "end": 67,
      "style": "focus"
    }
  ],
  "t2-68:68": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t2-68:69": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 26,
      "end": 39,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t2-68:70": [
    {
      "start": 18,
      "end": 25,
      "style": "focus"
    },
    {
      "start": 26,
      "end": 38,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 49,
      "style": "focus"
    }
  ],
  "t3-32:32": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 35,
      "end": 43,
      "style": "focus"
    }
  ],
  "t3-32:33": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 29,
      "style": "focus"
    }
  ],
  "t3-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 37,
      "style": "focus"
    }
  ],
  "t3-35:35": [
    {
      "start": 36,
      "end": 41,
      "style": "focus"
    }
  ],
  "t3-35:36": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 15,
      "end": 28,
      "style": "actor"
    },
    {
      "start": 40,
      "end": 56,
      "style": "focus"
    }
  ],
  "t3-35:37": [
    {
      "start": 0,
      "end": 6,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 24,
      "style": "focus"
    }
  ],
  "t3-38:38": [
    {
      "start": 15,
      "end": 32,
      "style": "focus"
    }
  ],
  "t3-38:39": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 48,
      "end": 60,
      "style": "focus"
    },
    {
      "start": 35,
      "end": 43,
      "style": "focus"
    }
  ],
  "t3-38:40": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 43,
      "style": "focus"
    }
  ],
  "t3-41:41": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 30,
      "style": "focus"
    }
  ],
  "t3-41:42": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 35,
      "end": 43,
      "style": "focus"
    }
  ],
  "t3-41:43": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t3-44:44": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 29,
      "style": "focus"
    }
  ],
  "t3-44:45": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 25,
      "style": "focus"
    }
  ],
  "t3-44:46": [
    {
      "start": 32,
      "end": 44,
      "style": "actor"
    },
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t3-47:47": [
    {
      "start": 36,
      "end": 41,
      "style": "focus"
    }
  ],
  "t3-47:48": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 32,
      "end": 41,
      "style": "focus"
    }
  ],
  "t3-47:49": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 18,
      "style": "focus"
    }
  ],
  "t3-50:50": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 34,
      "style": "focus"
    }
  ],
  "t3-50:51": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 26,
      "style": "focus"
    },
    {
      "start": 27,
      "end": 40,
      "style": "actor"
    },
    {
      "start": 41,
      "end": 48,
      "style": "focus"
    }
  ],
  "t3-50:52": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 24,
      "style": "focus"
    }
  ],
  "t3-53:53": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 48,
      "style": "focus"
    }
  ],
  "t3-53:54": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 8,
      "end": 24,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 34,
      "style": "focus"
    }
  ],
  "t3-53:55": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 39,
      "style": "focus"
    }
  ],
  "t3-56:56": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 33,
      "style": "focus"
    }
  ],
  "t3-56:57": [
    {
      "start": 0,
      "end": 7,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 23,
      "style": "focus"
    }
  ],
  "t3-56:58": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t3-59:59": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 47,
      "style": "focus"
    }
  ],
  "t3-59:60": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 18,
      "style": "focus"
    }
  ],
  "t3-59:61": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 26,
      "style": "focus"
    }
  ],
  "t3-62:62": [
    {
      "start": 24,
      "end": 37,
      "style": "actor"
    },
    {
      "start": 41,
      "end": 49,
      "style": "focus"
    },
    {
      "start": 50,
      "end": 61,
      "style": "focus"
    }
  ],
  "t3-62:63": [
    {
      "start": 12,
      "end": 16,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 32,
      "style": "focus"
    }
  ],
  "t3-62:64": [
    {
      "start": 9,
      "end": 22,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 31,
      "style": "focus"
    }
  ],
  "t3-65:65": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 35,
      "style": "focus"
    }
  ],
  "t3-65:66": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 55,
      "style": "focus"
    }
  ],
  "t3-65:67": [
    {
      "start": 15,
      "end": 28,
      "style": "actor"
    },
    {
      "start": 53,
      "end": 61,
      "style": "focus"
    }
  ],
  "t3-68:68": [
    {
      "start": 11,
      "end": 23,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 42,
      "style": "focus"
    }
  ],
  "t3-68:69": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 41,
      "end": 53,
      "style": "actor"
    }
  ],
  "t3-68:70": [
    {
      "start": 19,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 46,
      "style": "focus"
    }
  ],
  "t4-32:32": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 30,
      "style": "focus"
    }
  ],
  "t4-32:33": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 26,
      "style": "focus"
    }
  ],
  "t4-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    }
  ],
  "t4-35:35": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 27,
      "style": "actor"
    }
  ],
  "t4-35:36": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 28,
      "style": "focus"
    }
  ],
  "t4-35:37": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 33,
      "end": 41,
      "style": "focus"
    }
  ],
  "t4-38:38": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 27,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 36,
      "style": "focus"
    }
  ],
  "t4-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 35,
      "style": "focus"
    }
  ],
  "t4-38:40": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t4-41:41": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 10,
      "end": 22,
      "style": "actor"
    }
  ],
  "t4-41:42": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 19,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 38,
      "style": "focus"
    }
  ],
  "t4-41:43": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 51,
      "style": "focus"
    }
  ],
  "t4-44:44": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 29,
      "style": "focus"
    }
  ],
  "t4-44:45": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 33,
      "style": "focus"
    }
  ],
  "t4-44:46": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 24,
      "end": 33,
      "style": "focus"
    }
  ],
  "t4-47:47": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 24,
      "style": "focus"
    }
  ],
  "t4-47:48": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 25,
      "style": "focus"
    }
  ],
  "t4-47:49": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 41,
      "style": "focus"
    }
  ],
  "t4-50:50": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 33,
      "style": "focus"
    }
  ],
  "t4-50:51": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 19,
      "style": "focus"
    },
    {
      "start": 20,
      "end": 33,
      "style": "actor"
    },
    {
      "start": 34,
      "end": 44,
      "style": "focus"
    }
  ],
  "t4-50:52": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 41,
      "style": "focus"
    }
  ],
  "t4-53:53": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 38,
      "style": "focus"
    }
  ],
  "t4-53:54": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 19,
      "style": "focus"
    }
  ],
  "t4-53:55": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 45,
      "style": "focus"
    }
  ],
  "t4-56:56": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 40,
      "style": "focus"
    }
  ],
  "t4-56:57": [
    {
      "start": 24,
      "end": 35,
      "style": "focus"
    },
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    }
  ],
  "t4-56:58": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 42,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 27,
      "style": "focus"
    }
  ],
  "t4-59:59": [
    {
      "start": 12,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 30,
      "style": "focus"
    }
  ],
  "t4-59:60": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 18,
      "style": "focus"
    }
  ],
  "t4-59:61": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t4-62:62": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 26,
      "end": 34,
      "style": "focus"
    }
  ],
  "t4-62:63": [
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 52,
      "style": "focus"
    }
  ],
  "t4-62:64": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 17,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 34,
      "style": "actor"
    }
  ],
  "t4-65:65": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 33,
      "style": "actor"
    },
    {
      "start": 34,
      "end": 44,
      "style": "focus"
    }
  ],
  "t4-65:66": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 37,
      "style": "focus"
    }
  ],
  "t4-65:67": [
    {
      "start": 18,
      "end": 21,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 33,
      "style": "focus"
    },
    {
      "start": 36,
      "end": 46,
      "style": "focus"
    }
  ],
  "t4-68:68": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t4-68:69": [
    {
      "start": 18,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 41,
      "end": 53,
      "style": "actor"
    },
    {
      "start": 66,
      "end": 69,
      "style": "focus"
    }
  ],
  "t4-68:70": [
    {
      "start": 32,
      "end": 44,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 45,
      "end": 58,
      "style": "focus"
    }
  ],
  "t5-32:32": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t5-32:33": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 39,
      "style": "focus"
    }
  ],
  "t5-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 23,
      "style": "focus"
    }
  ],
  "t5-35:35": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 37,
      "end": 42,
      "style": "focus"
    },
    {
      "start": 28,
      "end": 36,
      "style": "focus"
    }
  ],
  "t5-35:36": [
    {
      "start": 36,
      "end": 49,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 54,
      "end": 62,
      "style": "focus"
    }
  ],
  "t5-35:37": [
    {
      "start": 38,
      "end": 50,
      "style": "focus"
    },
    {
      "start": 51,
      "end": 60,
      "style": "focus"
    },
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    }
  ],
  "t5-38:38": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 34,
      "style": "focus"
    }
  ],
  "t5-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 47,
      "style": "focus"
    }
  ],
  "t5-38:40": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 10,
      "end": 23,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 50,
      "style": "actor"
    }
  ],
  "t5-41:41": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 16,
      "end": 25,
      "style": "focus"
    }
  ],
  "t5-41:42": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 48,
      "style": "focus"
    }
  ],
  "t5-41:43": [
    {
      "start": 0,
      "end": 7,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 39,
      "style": "focus"
    }
  ],
  "t5-44:44": [
    {
      "start": 10,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    }
  ],
  "t5-44:45": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 27,
      "style": "focus"
    }
  ],
  "t5-44:46": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t5-47:47": [
    {
      "start": 10,
      "end": 31,
      "style": "focus"
    },
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    }
  ],
  "t5-47:48": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    }
  ],
  "t5-47:49": [
    {
      "start": 0,
      "end": 5,
      "style": "actor"
    },
    {
      "start": 6,
      "end": 26,
      "style": "focus"
    }
  ],
  "t5-50:50": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t5-50:51": [
    {
      "start": 31,
      "end": 43,
      "style": "focus"
    },
    {
      "start": 12,
      "end": 21,
      "style": "actor"
    }
  ],
  "t5-50:52": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t5-53:53": [
    {
      "start": 37,
      "end": 42,
      "style": "focus"
    },
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    }
  ],
  "t5-53:54": [
    {
      "start": 0,
      "end": 5,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 38,
      "style": "focus"
    }
  ],
  "t5-53:55": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t5-56:56": [
    {
      "start": 0,
      "end": 11,
      "style": "focus"
    }
  ],
  "t5-56:57": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t5-56:58": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 37,
      "end": 46,
      "style": "focus"
    }
  ],
  "t5-59:59": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 27,
      "style": "focus"
    },
    {
      "start": 13,
      "end": 21,
      "style": "focus"
    }
  ],
  "t5-59:60": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t5-59:61": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 10,
      "end": 23,
      "style": "actor"
    }
  ],
  "t5-62:62": [
    {
      "start": 23,
      "end": 46,
      "style": "focus"
    },
    {
      "start": 47,
      "end": 66,
      "style": "focus"
    }
  ],
  "t5-62:63": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t5-62:64": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 37,
      "style": "focus"
    }
  ],
  "t5-65:65": [
    {
      "start": 0,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 34,
      "style": "actor"
    }
  ],
  "t5-65:66": [
    {
      "start": 18,
      "end": 29,
      "style": "focus"
    },
    {
      "start": 67,
      "end": 95,
      "style": "focus"
    }
  ],
  "t5-65:67": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 45,
      "style": "focus"
    }
  ],
  "t5-68:68": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 33,
      "style": "focus"
    }
  ],
  "t5-68:69": [
    {
      "start": 18,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 47,
      "style": "focus"
    }
  ],
  "t5-68:70": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 37,
      "style": "focus"
    }
  ],
  "t6-32:32": [
    {
      "start": 5,
      "end": 17,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 46,
      "style": "focus"
    }
  ],
  "t6-32:33": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 36,
      "style": "focus"
    }
  ],
  "t6-32:34": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 29,
      "style": "focus"
    }
  ],
  "t6-35:35": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 36,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 30,
      "style": "focus"
    }
  ],
  "t6-35:36": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 39,
      "style": "focus"
    }
  ],
  "t6-35:37": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 33,
      "end": 41,
      "style": "focus"
    }
  ],
  "t6-38:38": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 26,
      "style": "actor"
    }
  ],
  "t6-38:39": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 42,
      "style": "focus"
    }
  ],
  "t6-38:40": [
    {
      "start": 21,
      "end": 29,
      "style": "focus"
    }
  ],
  "t6-41:41": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 32,
      "style": "focus"
    }
  ],
  "t6-41:42": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t6-41:43": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t6-44:44": [
    {
      "start": 0,
      "end": 15,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 27,
      "style": "focus"
    }
  ],
  "t6-44:45": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 15,
      "end": 27,
      "style": "focus"
    }
  ],
  "t6-44:46": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 30,
      "style": "focus"
    }
  ],
  "t6-47:47": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t6-47:48": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 12,
      "end": 24,
      "style": "actor"
    }
  ],
  "t6-47:49": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 27,
      "style": "focus"
    }
  ],
  "t6-50:50": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 27,
      "style": "focus"
    }
  ],
  "t6-50:51": [
    {
      "start": 6,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 19,
      "end": 27,
      "style": "focus"
    }
  ],
  "t6-50:52": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 25,
      "style": "focus"
    }
  ],
  "t6-53:53": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 31,
      "style": "focus"
    }
  ],
  "t6-53:54": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t6-53:55": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 45,
      "style": "focus"
    }
  ],
  "t6-56:56": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 35,
      "style": "focus"
    }
  ],
  "t6-56:57": [
    {
      "start": 7,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 44,
      "style": "actor"
    },
    {
      "start": 49,
      "end": 58,
      "style": "focus"
    }
  ],
  "t6-56:58": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 29,
      "style": "focus"
    }
  ],
  "t6-59:59": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 35,
      "style": "focus"
    }
  ],
  "t6-59:60": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 25,
      "style": "focus"
    }
  ],
  "t6-59:61": [
    {
      "start": 0,
      "end": 1,
      "style": "focus"
    },
    {
      "start": 2,
      "end": 14,
      "style": "actor"
    }
  ],
  "t6-62:62": [
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t6-62:63": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 45,
      "style": "focus"
    }
  ],
  "t6-62:64": [
    {
      "start": 16,
      "end": 28,
      "style": "actor"
    },
    {
      "start": 37,
      "end": 42,
      "style": "focus"
    }
  ],
  "t6-65:65": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 34,
      "end": 39,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 33,
      "style": "focus"
    }
  ],
  "t6-65:66": [
    {
      "start": 15,
      "end": 32,
      "style": "focus"
    },
    {
      "start": 37,
      "end": 50,
      "style": "actor"
    }
  ],
  "t6-65:67": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 16,
      "style": "focus"
    },
    {
      "start": 17,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 38,
      "style": "focus"
    }
  ],
  "t6-68:68": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 24,
      "end": 31,
      "style": "focus"
    }
  ],
  "t6-68:69": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 37,
      "style": "focus"
    }
  ],
  "t6-68:70": [
    {
      "start": 37,
      "end": 46,
      "style": "focus"
    }
  ],
  "t7-32:32": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 22,
      "style": "focus"
    }
  ],
  "t7-32:33": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t7-32:34": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 19,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 42,
      "style": "focus"
    }
  ],
  "t7-35:35": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 27,
      "style": "actor"
    }
  ],
  "t7-35:36": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 28,
      "style": "focus"
    }
  ],
  "t7-35:37": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t7-38:38": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 36,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 30,
      "style": "focus"
    }
  ],
  "t7-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    }
  ],
  "t7-38:40": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 19,
      "end": 32,
      "style": "actor"
    },
    {
      "start": 33,
      "end": 39,
      "style": "focus"
    }
  ],
  "t7-41:41": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 53,
      "style": "focus"
    }
  ],
  "t7-41:42": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 31,
      "style": "focus"
    }
  ],
  "t7-41:43": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 16,
      "end": 32,
      "style": "focus"
    }
  ],
  "t7-44:44": [
    {
      "start": 24,
      "end": 36,
      "style": "actor"
    },
    {
      "start": 9,
      "end": 19,
      "style": "focus"
    }
  ],
  "t7-44:45": [
    {
      "start": 0,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 23,
      "end": 35,
      "style": "actor"
    }
  ],
  "t7-44:46": [
    {
      "start": 0,
      "end": 8,
      "style": "focus"
    },
    {
      "start": 9,
      "end": 21,
      "style": "actor"
    }
  ],
  "t7-47:47": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 43,
      "end": 52,
      "style": "focus"
    }
  ],
  "t7-47:48": [
    {
      "start": 0,
      "end": 6,
      "style": "focus"
    },
    {
      "start": 7,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 28,
      "style": "focus"
    }
  ],
  "t7-47:49": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 19,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 42,
      "style": "focus"
    }
  ],
  "t7-50:50": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 27,
      "style": "focus"
    }
  ],
  "t7-50:51": [
    {
      "start": 0,
      "end": 6,
      "style": "actor"
    },
    {
      "start": 7,
      "end": 26,
      "style": "focus"
    }
  ],
  "t7-50:52": [
    {
      "start": 27,
      "end": 36,
      "style": "focus"
    }
  ],
  "t7-53:53": [
    {
      "start": 24,
      "end": 29,
      "style": "focus"
    }
  ],
  "t7-53:54": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 31,
      "end": 38,
      "style": "focus"
    }
  ],
  "t7-53:55": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t7-56:56": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 22,
      "style": "focus"
    }
  ],
  "t7-56:57": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 37,
      "style": "focus"
    }
  ],
  "t7-56:58": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 22,
      "style": "focus"
    }
  ],
  "t7-59:59": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 26,
      "end": 34,
      "style": "focus"
    }
  ],
  "t7-59:60": [
    {
      "start": 8,
      "end": 13,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 26,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 39,
      "style": "focus"
    }
  ],
  "t7-59:61": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t7-62:62": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 15,
      "style": "focus"
    }
  ],
  "t7-62:63": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t7-62:64": [
    {
      "start": 48,
      "end": 56,
      "style": "focus"
    }
  ],
  "t7-65:65": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t7-65:66": [
    {
      "start": 16,
      "end": 29,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 44,
      "style": "focus"
    },
    {
      "start": 30,
      "end": 35,
      "style": "focus"
    }
  ],
  "t7-65:67": [
    {
      "start": 0,
      "end": 8,
      "style": "focus"
    },
    {
      "start": 9,
      "end": 16,
      "style": "focus"
    }
  ],
  "t7-68:68": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 27,
      "style": "focus"
    }
  ],
  "t7-68:69": [
    {
      "start": 15,
      "end": 43,
      "style": "focus"
    },
    {
      "start": 44,
      "end": 62,
      "style": "focus"
    }
  ],
  "t7-68:70": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 25,
      "style": "focus"
    }
  ],
  "t8-32:32": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 47,
      "style": "focus"
    }
  ],
  "t8-32:33": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 26,
      "style": "focus"
    }
  ],
  "t8-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t8-35:35": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 29,
      "style": "focus"
    },
    {
      "start": 15,
      "end": 23,
      "style": "focus"
    }
  ],
  "t8-35:36": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 31,
      "style": "focus"
    }
  ],
  "t8-35:37": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 25,
      "end": 34,
      "style": "focus"
    }
  ],
  "t8-38:38": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 32,
      "style": "focus"
    }
  ],
  "t8-38:39": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 40,
      "style": "focus"
    }
  ],
  "t8-38:40": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 23,
      "style": "focus"
    }
  ],
  "t8-41:41": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 32,
      "style": "focus"
    }
  ],
  "t8-41:42": [
    {
      "start": 23,
      "end": 31,
      "style": "focus"
    }
  ],
  "t8-41:43": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 25,
      "style": "focus"
    }
  ],
  "t8-44:44": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 41,
      "style": "focus"
    },
    {
      "start": 27,
      "end": 35,
      "style": "focus"
    }
  ],
  "t8-44:45": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t8-44:46": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t8-47:47": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 33,
      "style": "focus"
    }
  ],
  "t8-47:48": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t8-47:49": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    },
    {
      "start": 32,
      "end": 38,
      "style": "focus"
    }
  ],
  "t8-50:50": [
    {
      "start": 3,
      "end": 10,
      "style": "actor"
    },
    {
      "start": 11,
      "end": 35,
      "style": "focus"
    }
  ],
  "t8-50:51": [
    {
      "start": 0,
      "end": 6,
      "style": "actor"
    },
    {
      "start": 11,
      "end": 17,
      "style": "focus"
    }
  ],
  "t8-50:52": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 33,
      "style": "focus"
    }
  ],
  "t8-53:53": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 20,
      "style": "focus"
    }
  ],
  "t8-53:54": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t8-53:55": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 29,
      "style": "focus"
    }
  ],
  "t8-56:56": [
    {
      "start": 29,
      "end": 34,
      "style": "focus"
    }
  ],
  "t8-56:57": [
    {
      "start": 12,
      "end": 25,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t8-56:58": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 24,
      "style": "focus"
    }
  ],
  "t8-59:59": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 23,
      "style": "focus"
    }
  ],
  "t8-59:60": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t8-59:61": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 25,
      "style": "focus"
    }
  ],
  "t8-62:62": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 31,
      "style": "focus"
    }
  ],
  "t8-62:63": [
    {
      "start": 15,
      "end": 26,
      "style": "focus"
    },
    {
      "start": 52,
      "end": 59,
      "style": "focus"
    }
  ],
  "t8-62:64": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 41,
      "style": "focus"
    }
  ],
  "t8-65:65": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t8-65:66": [
    {
      "start": 23,
      "end": 36,
      "style": "actor"
    },
    {
      "start": 51,
      "end": 60,
      "style": "focus"
    }
  ],
  "t8-65:67": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 27,
      "style": "focus"
    }
  ],
  "t8-68:68": [
    {
      "start": 0,
      "end": 10,
      "style": "focus"
    },
    {
      "start": 15,
      "end": 28,
      "style": "actor"
    }
  ],
  "t8-68:69": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 27,
      "end": 44,
      "style": "focus"
    }
  ],
  "t8-68:70": [
    {
      "start": 16,
      "end": 28,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 52,
      "style": "focus"
    }
  ],
  "t9-32:32": [
    {
      "start": 22,
      "end": 35,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 8,
      "style": "focus"
    }
  ],
  "t9-32:33": [
    {
      "start": 5,
      "end": 17,
      "style": "actor"
    },
    {
      "start": 45,
      "end": 60,
      "style": "focus"
    },
    {
      "start": 36,
      "end": 44,
      "style": "focus"
    }
  ],
  "t9-32:34": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 46,
      "style": "focus"
    }
  ],
  "t9-35:35": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 31,
      "style": "focus"
    }
  ],
  "t9-35:36": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 33,
      "end": 60,
      "style": "focus"
    }
  ],
  "t9-35:37": [
    {
      "start": 27,
      "end": 46,
      "style": "focus"
    }
  ],
  "t9-38:38": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 33,
      "style": "focus"
    },
    {
      "start": 39,
      "end": 46,
      "style": "focus"
    }
  ],
  "t9-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 36,
      "end": 45,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 33,
      "style": "focus"
    }
  ],
  "t9-38:40": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 39,
      "style": "focus"
    }
  ],
  "t9-41:41": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 32,
      "style": "focus"
    }
  ],
  "t9-41:42": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    }
  ],
  "t9-41:43": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 37,
      "style": "focus"
    }
  ],
  "t9-44:44": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 10,
      "end": 32,
      "style": "focus"
    }
  ],
  "t9-44:45": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t9-44:46": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 38,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 45,
      "style": "focus"
    }
  ],
  "t9-47:47": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 31,
      "style": "focus"
    }
  ],
  "t9-47:48": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 17,
      "end": 37,
      "style": "focus"
    }
  ],
  "t9-47:49": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 38,
      "style": "focus"
    }
  ],
  "t9-50:50": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 42,
      "end": 49,
      "style": "focus"
    }
  ],
  "t9-50:51": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t9-50:52": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 27,
      "style": "focus"
    }
  ],
  "t9-53:53": [
    {
      "start": 16,
      "end": 30,
      "style": "focus"
    }
  ],
  "t9-53:54": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t9-53:55": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 32,
      "style": "focus"
    }
  ],
  "t9-56:56": [
    {
      "start": 8,
      "end": 16,
      "style": "focus"
    },
    {
      "start": 24,
      "end": 51,
      "style": "focus"
    },
    {
      "start": 56,
      "end": 68,
      "style": "actor"
    }
  ],
  "t9-56:57": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 50,
      "style": "focus"
    }
  ],
  "t9-56:58": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 74,
      "style": "focus"
    }
  ],
  "t9-59:59": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 25,
      "style": "focus"
    }
  ],
  "t9-59:60": [
    {
      "start": 6,
      "end": 19,
      "style": "actor"
    },
    {
      "start": 20,
      "end": 29,
      "style": "focus"
    }
  ],
  "t9-59:61": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 44,
      "style": "focus"
    }
  ],
  "t9-62:62": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 30,
      "style": "focus"
    }
  ],
  "t9-62:63": [
    {
      "start": 14,
      "end": 26,
      "style": "actor"
    },
    {
      "start": 61,
      "end": 69,
      "style": "focus"
    }
  ],
  "t9-62:64": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 30,
      "end": 43,
      "style": "focus"
    }
  ],
  "t9-65:65": [
    {
      "start": 34,
      "end": 39,
      "style": "focus"
    }
  ],
  "t9-65:66": [
    {
      "start": 14,
      "end": 26,
      "style": "actor"
    },
    {
      "start": 34,
      "end": 43,
      "style": "focus"
    }
  ],
  "t9-65:67": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 28,
      "style": "focus"
    }
  ],
  "t9-68:68": [
    {
      "start": 15,
      "end": 27,
      "style": "actor"
    },
    {
      "start": 33,
      "end": 45,
      "style": "focus"
    },
    {
      "start": 48,
      "end": 58,
      "style": "focus"
    }
  ],
  "t9-68:69": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 52,
      "style": "focus"
    }
  ],
  "t9-68:70": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-32:32": [
    {
      "start": 17,
      "end": 26,
      "style": "actor"
    },
    {
      "start": 55,
      "end": 64,
      "style": "focus"
    }
  ],
  "t10-32:33": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 40,
      "style": "focus"
    },
    {
      "start": 26,
      "end": 34,
      "style": "focus"
    }
  ],
  "t10-32:34": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 53,
      "end": 61,
      "style": "focus"
    }
  ],
  "t10-35:35": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 23,
      "end": 37,
      "style": "focus"
    }
  ],
  "t10-35:36": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-35:37": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 20,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 34,
      "style": "actor"
    },
    {
      "start": 35,
      "end": 41,
      "style": "focus"
    }
  ],
  "t10-38:38": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 33,
      "style": "focus"
    }
  ],
  "t10-38:39": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 13,
      "end": 27,
      "style": "focus"
    }
  ],
  "t10-38:40": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-41:41": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 31,
      "end": 36,
      "style": "focus"
    },
    {
      "start": 22,
      "end": 30,
      "style": "focus"
    }
  ],
  "t10-41:42": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 28,
      "end": 38,
      "style": "focus"
    }
  ],
  "t10-41:43": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 18,
      "style": "focus"
    },
    {
      "start": 19,
      "end": 31,
      "style": "actor"
    },
    {
      "start": 32,
      "end": 42,
      "style": "focus"
    }
  ],
  "t10-44:44": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    }
  ],
  "t10-44:45": [
    {
      "start": 0,
      "end": 7,
      "style": "actor"
    },
    {
      "start": 8,
      "end": 34,
      "style": "focus"
    }
  ],
  "t10-44:46": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 19,
      "end": 30,
      "style": "focus"
    }
  ],
  "t10-47:47": [
    {
      "start": 0,
      "end": 9,
      "style": "focus"
    },
    {
      "start": 14,
      "end": 27,
      "style": "actor"
    }
  ],
  "t10-47:48": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 37,
      "end": 50,
      "style": "focus"
    }
  ],
  "t10-47:49": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 22,
      "end": 42,
      "style": "focus"
    }
  ],
  "t10-50:50": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 15,
      "end": 20,
      "style": "focus"
    }
  ],
  "t10-50:51": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-50:52": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 42,
      "end": 50,
      "style": "focus"
    }
  ],
  "t10-53:53": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 26,
      "end": 34,
      "style": "focus"
    }
  ],
  "t10-53:54": [
    {
      "start": 8,
      "end": 21,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-53:55": [
    {
      "start": 0,
      "end": 12,
      "style": "actor"
    },
    {
      "start": 44,
      "end": 46,
      "style": "focus"
    }
  ],
  "t10-56:56": [
    {
      "start": 4,
      "end": 16,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 43,
      "style": "focus"
    },
    {
      "start": 29,
      "end": 37,
      "style": "focus"
    }
  ],
  "t10-56:57": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 21,
      "style": "focus"
    }
  ],
  "t10-56:58": [
    {
      "start": 4,
      "end": 16,
      "style": "actor"
    },
    {
      "start": 39,
      "end": 48,
      "style": "focus"
    }
  ],
  "t10-59:59": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    },
    {
      "start": 21,
      "end": 29,
      "style": "focus"
    }
  ],
  "t10-59:60": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 24,
      "end": 42,
      "style": "focus"
    }
  ],
  "t10-59:61": [
    {
      "start": 5,
      "end": 18,
      "style": "actor"
    },
    {
      "start": 42,
      "end": 50,
      "style": "focus"
    }
  ],
  "t10-62:62": [
    {
      "start": 23,
      "end": 28,
      "style": "focus"
    }
  ],
  "t10-62:63": [
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 52,
      "style": "focus"
    }
  ],
  "t10-62:64": [
    {
      "start": 35,
      "end": 48,
      "style": "focus"
    },
    {
      "start": 25,
      "end": 34,
      "style": "focus"
    }
  ],
  "t10-65:65": [
    {
      "start": 8,
      "end": 20,
      "style": "actor"
    },
    {
      "start": 0,
      "end": 7,
      "style": "focus"
    }
  ],
  "t10-65:66": [
    {
      "start": 18,
      "end": 30,
      "style": "actor"
    },
    {
      "start": 38,
      "end": 47,
      "style": "focus"
    }
  ],
  "t10-65:67": [
    {
      "start": 0,
      "end": 9,
      "style": "actor"
    },
    {
      "start": 29,
      "end": 35,
      "style": "focus"
    }
  ],
  "t10-68:68": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 31,
      "style": "focus"
    }
  ],
  "t10-68:69": [
    {
      "start": 55,
      "end": 60,
      "style": "focus"
    }
  ],
  "t10-68:70": [
    {
      "start": 0,
      "end": 13,
      "style": "actor"
    },
    {
      "start": 14,
      "end": 28,
      "style": "focus"
    }
  ]
};
const synchronizedLanguageNotes = {
  "t2-32": {
    "2": [
      {
        "text": "pick up",
        "start": 39,
        "end": 46,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "6": [
      {
        "text": "intercom system",
        "start": 71,
        "end": 86,
        "type": "collocation",
        "meaning": "hệ thống liên lạc nội bộ"
      }
    ],
    "7": [
      {
        "text": "going to",
        "start": 4,
        "end": 12,
        "type": "structure",
        "meaning": "sẽ"
      },
      {
        "text": "mobile app",
        "start": 44,
        "end": 54,
        "type": "collocation",
        "meaning": "ứng dụng di động"
      }
    ]
  },
  "t2-35": {
    "0": [
      {
        "text": "need to",
        "start": 48,
        "end": 55,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "2": [
      {
        "text": "set up",
        "start": 19,
        "end": 25,
        "type": "phrasal",
        "meaning": "sắp xếp"
      }
    ],
    "4": [
      {
        "text": "community residents",
        "start": 20,
        "end": 39,
        "type": "collocation",
        "meaning": "cư dân cộng đồng"
      },
      {
        "text": "setting up",
        "start": 95,
        "end": 105,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ],
    "q37": [
      {
        "text": "need to",
        "start": 20,
        "end": 27,
        "type": "structure",
        "meaning": "cần"
      }
    ]
  },
  "t2-38": {
    "0": [
      {
        "text": "business development",
        "start": 93,
        "end": 113,
        "type": "collocation",
        "meaning": "phát triển kinh doanh"
      }
    ],
    "5": [
      {
        "text": "such as",
        "start": 97,
        "end": 104,
        "type": "structure",
        "meaning": "chẳng hạn như"
      }
    ],
    "q39:A": [
      {
        "text": "in person",
        "start": 26,
        "end": 35,
        "type": "structure",
        "meaning": "trực tiếp"
      }
    ]
  },
  "t2-41": {
    "0": [
      {
        "text": "rebate program",
        "start": 70,
        "end": 84,
        "type": "collocation",
        "meaning": "chương trình hoàn tiền"
      }
    ],
    "4": [
      {
        "text": "high demand",
        "start": 43,
        "end": 54,
        "type": "collocation",
        "meaning": "nhu cầu cao"
      }
    ],
    "q41:A": [
      {
        "text": "rebate program",
        "start": 2,
        "end": 16,
        "type": "collocation",
        "meaning": "chương trình hoàn tiền"
      }
    ]
  },
  "t2-44": {
    "0": [
      {
        "text": "trade show",
        "start": 98,
        "end": 108,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "2": [
      {
        "text": "need to",
        "start": 6,
        "end": 13,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "trade show",
        "start": 73,
        "end": 83,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "4": [
      {
        "text": "technical concepts",
        "start": 50,
        "end": 68,
        "type": "collocation",
        "meaning": "khái niệm kỹ thuật"
      }
    ],
    "q44:A": [
      {
        "text": "trade show",
        "start": 2,
        "end": 12,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q44:D": [
      {
        "text": "press conference",
        "start": 2,
        "end": 18,
        "type": "collocation",
        "meaning": "họp báo"
      }
    ]
  },
  "t2-47": {
    "2": [
      {
        "text": "dental cleaning",
        "start": 21,
        "end": 36,
        "type": "collocation",
        "meaning": "làm sạch răng"
      }
    ],
    "3": [
      {
        "text": "looking for",
        "start": 14,
        "end": 25,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "5": [
      {
        "text": "have in mind",
        "start": 15,
        "end": 27,
        "type": "collocation",
        "meaning": "nghĩ đến"
      }
    ],
    "6": [
      {
        "text": "former colleague",
        "start": 8,
        "end": 24,
        "type": "collocation",
        "meaning": "đồng nghiệp cũ"
      }
    ]
  },
  "t2-50": {
    "4": [
      {
        "text": "training videos",
        "start": 18,
        "end": 33,
        "type": "collocation",
        "meaning": "video đào tạo"
      }
    ],
    "6": [
      {
        "text": "filming sites",
        "start": 38,
        "end": 51,
        "type": "collocation",
        "meaning": "địa điểm quay phim"
      }
    ]
  },
  "t2-53": {
    "0": [
      {
        "text": "travel budget",
        "start": 57,
        "end": 70,
        "type": "collocation",
        "meaning": "ngân sách đi lại"
      }
    ],
    "1": [
      {
        "text": "have to",
        "start": 28,
        "end": 35,
        "type": "structure",
        "meaning": "phải"
      }
    ],
    "3": [
      {
        "text": "nonstop flights",
        "start": 74,
        "end": 89,
        "type": "collocation",
        "meaning": "chuyến bay thẳng"
      }
    ],
    "4": [
      {
        "text": "connecting flights",
        "start": 33,
        "end": 51,
        "type": "collocation",
        "meaning": "chuyến bay nối chuyến"
      }
    ],
    "7": [
      {
        "text": "look into",
        "start": 6,
        "end": 15,
        "type": "phrasal",
        "meaning": "xem xét"
      }
    ]
  },
  "t2-56": {
    "1": [
      {
        "text": "project managers",
        "start": 41,
        "end": 57,
        "type": "collocation",
        "meaning": "quản lý dự án"
      }
    ],
    "9": [
      {
        "text": "preliminary sketches",
        "start": 12,
        "end": 32,
        "type": "collocation",
        "meaning": "bản phác thảo sơ bộ"
      }
    ]
  },
  "t2-59": {
    "3": [
      {
        "text": "looking for",
        "start": 8,
        "end": 19,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "5": [
      {
        "text": "foot traffic",
        "start": 87,
        "end": 99,
        "type": "collocation",
        "meaning": "lượng người đi bộ"
      }
    ],
    "6": [
      {
        "text": "protective mat",
        "start": 49,
        "end": 63,
        "type": "collocation",
        "meaning": "thảm bảo vệ"
      }
    ],
    "8": [
      {
        "text": "cleaning services",
        "start": 19,
        "end": 36,
        "type": "collocation",
        "meaning": "dịch vụ vệ sinh"
      }
    ],
    "q60:D": [
      {
        "text": "need to",
        "start": 16,
        "end": 23,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q61:C": [
      {
        "text": "cleaning services",
        "start": 5,
        "end": 22,
        "type": "collocation",
        "meaning": "dịch vụ vệ sinh"
      }
    ]
  },
  "t2-62": {
    "0": [
      {
        "text": "coffee break",
        "start": 19,
        "end": 31,
        "type": "collocation",
        "meaning": "giờ nghỉ uống cà phê"
      }
    ],
    "3": [
      {
        "text": "prototype design",
        "start": 51,
        "end": 67,
        "type": "collocation",
        "meaning": "thiết kế nguyên mẫu"
      }
    ],
    "10": [
      {
        "text": "going on",
        "start": 11,
        "end": 19,
        "type": "phrasal",
        "meaning": "diễn ra"
      }
    ]
  },
  "t2-65": {
    "3": [
      {
        "text": "stop by",
        "start": 45,
        "end": 52,
        "type": "phrasal",
        "meaning": "ghé qua"
      }
    ],
    "9": [
      {
        "text": "get back to",
        "start": 15,
        "end": 26,
        "type": "phrasal",
        "meaning": "liên lạc lại"
      }
    ],
    "q67:C": [
      {
        "text": "dental cleaning",
        "start": 4,
        "end": 19,
        "type": "collocation",
        "meaning": "làm sạch răng"
      }
    ]
  },
  "t2-68": {
    "0": [
      {
        "text": "robotics conference",
        "start": 51,
        "end": 70,
        "type": "collocation",
        "meaning": "hội nghị về robot"
      }
    ],
    "2": [
      {
        "text": "familiar with",
        "start": 29,
        "end": 42,
        "type": "structure",
        "meaning": "quen thuộc"
      }
    ],
    "4": [
      {
        "text": "potential clients",
        "start": 63,
        "end": 80,
        "type": "collocation",
        "meaning": "khách hàng tiềm năng"
      }
    ],
    "7": [
      {
        "text": "business cards",
        "start": 17,
        "end": 31,
        "type": "collocation",
        "meaning": "danh thiếp"
      }
    ]
  },
  "t3-32": {
    "0": [
      {
        "text": "beef stew",
        "start": 101,
        "end": 110,
        "type": "collocation",
        "meaning": "món bò hầm"
      }
    ],
    "2": [
      {
        "text": "regular menu",
        "start": 33,
        "end": 45,
        "type": "collocation",
        "meaning": "thực đơn thường lệ"
      }
    ],
    "3": [
      {
        "text": "need to",
        "start": 62,
        "end": 69,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "5": [
      {
        "text": "need to",
        "start": 3,
        "end": 10,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q32:C": [
      {
        "text": "gift shop",
        "start": 5,
        "end": 14,
        "type": "collocation",
        "meaning": "cửa hàng quà tặng"
      }
    ],
    "q34:A": [
      {
        "text": "Pay a deposit",
        "start": 0,
        "end": 13,
        "type": "collocation",
        "meaning": "trả tiền đặt cọc"
      }
    ]
  },
  "t3-35": {
    "5": [
      {
        "text": "looking forward to",
        "start": 11,
        "end": 29,
        "type": "collocation",
        "meaning": "mong chờ"
      },
      {
        "text": "gala event",
        "start": 42,
        "end": 52,
        "type": "collocation",
        "meaning": "buổi dạ tiệc"
      }
    ],
    "q35:C": [
      {
        "text": "train station",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ]
  },
  "t3-38": {
    "0": [
      {
        "text": "delivery service",
        "start": 74,
        "end": 90,
        "type": "collocation",
        "meaning": "dịch vụ giao hàng"
      },
      {
        "text": "picking up",
        "start": 135,
        "end": 145,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "2": [
      {
        "text": "in person",
        "start": 52,
        "end": 61,
        "type": "structure",
        "meaning": "trực tiếp"
      }
    ],
    "5": [
      {
        "text": "job posting",
        "start": 33,
        "end": 44,
        "type": "collocation",
        "meaning": "tin tuyển dụng"
      },
      {
        "text": "delivery drivers",
        "start": 49,
        "end": 65,
        "type": "collocation",
        "meaning": "tài xế giao hàng"
      }
    ],
    "q38:B": [
      {
        "text": "delivery service",
        "start": 8,
        "end": 24,
        "type": "collocation",
        "meaning": "dịch vụ giao hàng"
      }
    ],
    "q40:C": [
      {
        "text": "job posting",
        "start": 9,
        "end": 20,
        "type": "collocation",
        "meaning": "tin tuyển dụng"
      }
    ]
  },
  "t3-41": {
    "3": [
      {
        "text": "outdoor recreation",
        "start": 58,
        "end": 76,
        "type": "collocation",
        "meaning": "giải trí ngoài trời"
      }
    ],
    "8": [
      {
        "text": "have in mind",
        "start": 20,
        "end": 32,
        "type": "collocation",
        "meaning": "nghĩ đến"
      }
    ]
  },
  "t3-44": {
    "4": [
      {
        "text": "dental office",
        "start": 32,
        "end": 45,
        "type": "collocation",
        "meaning": "phòng khám nha khoa"
      }
    ]
  },
  "t3-47": {
    "0": [
      {
        "text": "power tools",
        "start": 55,
        "end": 66,
        "type": "collocation",
        "meaning": "dụng cụ điện"
      }
    ]
  },
  "t3-50": {
    "1": [
      {
        "text": "food container",
        "start": 40,
        "end": 54,
        "type": "collocation",
        "meaning": "hộp đựng thức ăn"
      }
    ],
    "4": [
      {
        "text": "delivery software",
        "start": 52,
        "end": 69,
        "type": "collocation",
        "meaning": "phần mềm giao hàng"
      }
    ]
  },
  "t3-53": {
    "2": [
      {
        "text": "organic snack",
        "start": 26,
        "end": 39,
        "type": "collocation",
        "meaning": "đồ ăn nhẹ hữu cơ"
      }
    ],
    "4": [
      {
        "text": "sports teams",
        "start": 34,
        "end": 46,
        "type": "collocation",
        "meaning": "các đội thể thao"
      }
    ],
    "6": [
      {
        "text": "need to",
        "start": 14,
        "end": 21,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q53:D": [
      {
        "text": "construction company",
        "start": 2,
        "end": 22,
        "type": "collocation",
        "meaning": "công ty xây dựng"
      }
    ]
  },
  "t3-56": {
    "0": [
      {
        "text": "small airplane",
        "start": 55,
        "end": 69,
        "type": "collocation",
        "meaning": "máy bay nhỏ"
      }
    ],
    "2": [
      {
        "text": "fuel injection pump",
        "start": 15,
        "end": 34,
        "type": "collocation",
        "meaning": "bơm phun nhiên liệu"
      }
    ],
    "8": [
      {
        "text": "need to",
        "start": 7,
        "end": 14,
        "type": "structure",
        "meaning": "cần"
      }
    ]
  },
  "t3-59": {
    "0": [
      {
        "text": "customer service",
        "start": 26,
        "end": 42,
        "type": "collocation",
        "meaning": "dịch vụ khách hàng"
      }
    ],
    "3": [
      {
        "text": "close my account",
        "start": 12,
        "end": 28,
        "type": "collocation",
        "meaning": "đóng tài khoản"
      }
    ],
    "6": [
      {
        "text": "take care of",
        "start": 22,
        "end": 34,
        "type": "collocation",
        "meaning": "xử lý"
      }
    ]
  },
  "t3-62": {
    "0": [
      {
        "text": "sale-price labels",
        "start": 127,
        "end": 144,
        "type": "collocation",
        "meaning": "nhãn giá khuyến mãi"
      }
    ],
    "3": [
      {
        "text": "international foods",
        "start": 30,
        "end": 49,
        "type": "collocation",
        "meaning": "thực phẩm quốc tế"
      }
    ],
    "4": [
      {
        "text": "delivery schedules",
        "start": 77,
        "end": 95,
        "type": "collocation",
        "meaning": "lịch giao hàng"
      }
    ],
    "q64:A": [
      {
        "text": "place an order",
        "start": 13,
        "end": 27,
        "type": "collocation",
        "meaning": "đặt hàng"
      }
    ]
  },
  "t3-65": {
    "1": [
      {
        "text": "need to",
        "start": 9,
        "end": 16,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "3": [
      {
        "text": "size requirements",
        "start": 58,
        "end": 75,
        "type": "collocation",
        "meaning": "yêu cầu về kích thước"
      }
    ]
  },
  "t3-68": {
    "4": [
      {
        "text": "fill out",
        "start": 16,
        "end": 24,
        "type": "phrasal",
        "meaning": "điền"
      },
      {
        "text": "travel expenses",
        "start": 29,
        "end": 44,
        "type": "collocation",
        "meaning": "chi phí đi lại"
      }
    ]
  },
  "t4-32": {
    "0": [
      {
        "text": "apartment building",
        "start": 45,
        "end": 63,
        "type": "collocation",
        "meaning": "tòa nhà chung cư"
      }
    ],
    "1": [
      {
        "text": "in person",
        "start": 23,
        "end": 32,
        "type": "structure",
        "meaning": "trực tiếp"
      }
    ],
    "q33": [
      {
        "text": "looking forward to",
        "start": 16,
        "end": 34,
        "type": "phrasal",
        "meaning": "mong chờ"
      }
    ],
    "q33:C": [
      {
        "text": "Going on",
        "start": 0,
        "end": 8,
        "type": "phrasal",
        "meaning": "diễn ra"
      }
    ]
  },
  "t4-35": {
    "1": [
      {
        "text": "seafood deliveries",
        "start": 30,
        "end": 48,
        "type": "collocation",
        "meaning": "giao hải sản"
      }
    ]
  },
  "t4-38": {
    "0": [
      {
        "text": "beauty products",
        "start": 63,
        "end": 78,
        "type": "collocation",
        "meaning": "sản phẩm làm đẹp"
      }
    ],
    "1": [
      {
        "text": "interested in",
        "start": 8,
        "end": 21,
        "type": "structure",
        "meaning": "quan tâm"
      }
    ]
  },
  "t4-41": {
    "1": [
      {
        "text": "going to",
        "start": 15,
        "end": 23,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "4": [
      {
        "text": "vendor contracts",
        "start": 53,
        "end": 69,
        "type": "collocation",
        "meaning": "hợp đồng nhà cung cấp"
      }
    ],
    "5": [
      {
        "text": "take care of",
        "start": 61,
        "end": 73,
        "type": "collocation",
        "meaning": "xử lý"
      }
    ],
    "q43:B": [
      {
        "text": "credit card",
        "start": 5,
        "end": 16,
        "type": "collocation",
        "meaning": "thẻ tín dụng"
      }
    ]
  },
  "t4-44": {
    "2": [
      {
        "text": "behind schedule",
        "start": 43,
        "end": 58,
        "type": "collocation",
        "meaning": "chậm tiến độ"
      },
      {
        "text": "on location",
        "start": 77,
        "end": 88,
        "type": "collocation",
        "meaning": "tại địa điểm quay"
      }
    ],
    "q44:C": [
      {
        "text": "book a venue",
        "start": 3,
        "end": 15,
        "type": "collocation",
        "meaning": "đặt địa điểm"
      }
    ],
    "q46:A": [
      {
        "text": "revised contract",
        "start": 2,
        "end": 18,
        "type": "collocation",
        "meaning": "hợp đồng đã chỉnh sửa"
      }
    ]
  },
  "t4-47": {
    "1": [
      {
        "text": "company policy",
        "start": 61,
        "end": 75,
        "type": "collocation",
        "meaning": "chính sách công ty"
      },
      {
        "text": "remote workers",
        "start": 80,
        "end": 94,
        "type": "collocation",
        "meaning": "nhân viên làm việc từ xa"
      }
    ],
    "2": [
      {
        "text": "have to",
        "start": 14,
        "end": 21,
        "type": "structure",
        "meaning": "phải"
      }
    ],
    "4": [
      {
        "text": "sign up",
        "start": 18,
        "end": 25,
        "type": "phrasal",
        "meaning": "đăng ký"
      },
      {
        "text": "in advance",
        "start": 55,
        "end": 65,
        "type": "structure",
        "meaning": "trước"
      }
    ],
    "q47:B": [
      {
        "text": "company policy",
        "start": 2,
        "end": 16,
        "type": "collocation",
        "meaning": "chính sách công ty"
      }
    ],
    "q47:C": [
      {
        "text": "catering menu",
        "start": 2,
        "end": 15,
        "type": "collocation",
        "meaning": "thực đơn tiệc"
      }
    ]
  },
  "t4-50": {
    "0": [
      {
        "text": "library card",
        "start": 33,
        "end": 45,
        "type": "collocation",
        "meaning": "thẻ thư viện"
      }
    ],
    "4": [
      {
        "text": "have to",
        "start": 8,
        "end": 15,
        "type": "structure",
        "meaning": "phải"
      },
      {
        "text": "set up",
        "start": 79,
        "end": 85,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ],
    "5": [
      {
        "text": "online content",
        "start": 76,
        "end": 90,
        "type": "collocation",
        "meaning": "nội dung trực tuyến"
      }
    ],
    "q51:B": [
      {
        "text": "Sign up",
        "start": 0,
        "end": 7,
        "type": "phrasal",
        "meaning": "đăng ký"
      }
    ],
    "q51:D": [
      {
        "text": "mobile app",
        "start": 17,
        "end": 27,
        "type": "collocation",
        "meaning": "ứng dụng di động"
      }
    ]
  },
  "t4-53": {
    "0": [
      {
        "text": "workplace survey",
        "start": 36,
        "end": 52,
        "type": "collocation",
        "meaning": "khảo sát nơi làm việc"
      }
    ],
    "4": [
      {
        "text": "management team",
        "start": 17,
        "end": 32,
        "type": "collocation",
        "meaning": "đội ngũ quản lý"
      },
      {
        "text": "going to",
        "start": 35,
        "end": 43,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "q54:B": [
      {
        "text": "responsible for",
        "start": 10,
        "end": 25,
        "type": "structure",
        "meaning": "chịu trách nhiệm"
      }
    ],
    "q55:B": [
      {
        "text": "business hours",
        "start": 10,
        "end": 24,
        "type": "collocation",
        "meaning": "giờ làm việc"
      }
    ]
  },
  "t4-56": {
    "1": [
      {
        "text": "social media",
        "start": 44,
        "end": 56,
        "type": "collocation",
        "meaning": "mạng xã hội"
      }
    ]
  },
  "t4-59": {
    "0": [
      {
        "text": "department store chain",
        "start": 64,
        "end": 86,
        "type": "collocation",
        "meaning": "chuỗi cửa hàng bách hóa"
      }
    ],
    "4": [
      {
        "text": "short timelines",
        "start": 10,
        "end": 25,
        "type": "collocation",
        "meaning": "thời hạn ngắn"
      }
    ],
    "q59:D": [
      {
        "text": "Power tools",
        "start": 0,
        "end": 11,
        "type": "collocation",
        "meaning": "dụng cụ điện"
      }
    ]
  },
  "t4-62": {
    "0": [
      {
        "text": "business account",
        "start": 99,
        "end": 115,
        "type": "collocation",
        "meaning": "tài khoản doanh nghiệp"
      }
    ],
    "5": [
      {
        "text": "international transaction fee",
        "start": 6,
        "end": 35,
        "type": "collocation",
        "meaning": "phí giao dịch quốc tế"
      }
    ],
    "7": [
      {
        "text": "bank fees",
        "start": 65,
        "end": 74,
        "type": "collocation",
        "meaning": "phí ngân hàng"
      }
    ]
  },
  "t4-65": {
    "9": [
      {
        "text": "set up",
        "start": 34,
        "end": 40,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ],
    "q65:B": [
      {
        "text": "Setting up",
        "start": 0,
        "end": 10,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ],
    "q67": [
      {
        "text": "set up",
        "start": 43,
        "end": 49,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ]
  },
  "t4-68": {
    "2": [
      {
        "text": "rose bushes",
        "start": 25,
        "end": 36,
        "type": "collocation",
        "meaning": "bụi hoa hồng"
      }
    ]
  },
  "t5-32": {
    "2": [
      {
        "text": "market analysis report",
        "start": 96,
        "end": 118,
        "type": "collocation",
        "meaning": "báo cáo phân tích thị trường"
      }
    ],
    "4": [
      {
        "text": "copy machine",
        "start": 56,
        "end": 68,
        "type": "collocation",
        "meaning": "máy photocopy"
      }
    ],
    "8": [
      {
        "text": "take care of",
        "start": 55,
        "end": 67,
        "type": "collocation",
        "meaning": "xử lý"
      }
    ],
    "q34:B": [
      {
        "text": "train station",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ]
  },
  "t5-35": {
    "1": [
      {
        "text": "office manager",
        "start": 15,
        "end": 29,
        "type": "collocation",
        "meaning": "quản lý văn phòng"
      }
    ],
    "2": [
      {
        "text": "would like to",
        "start": 46,
        "end": 59,
        "type": "structure",
        "meaning": "muốn"
      }
    ],
    "3": [
      {
        "text": "need to",
        "start": 60,
        "end": 67,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "4": [
      {
        "text": "staff meeting",
        "start": 10,
        "end": 23,
        "type": "collocation",
        "meaning": "cuộc họp nhân viên"
      }
    ],
    "7": [
      {
        "text": "need to",
        "start": 10,
        "end": 17,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q36:D": [
      {
        "text": "place an order",
        "start": 3,
        "end": 17,
        "type": "collocation",
        "meaning": "đặt hàng"
      }
    ]
  },
  "t5-38": {
    "1": [
      {
        "text": "in charge of",
        "start": 4,
        "end": 16,
        "type": "collocation",
        "meaning": "phụ trách"
      }
    ],
    "3": [
      {
        "text": "research team",
        "start": 50,
        "end": 63,
        "type": "collocation",
        "meaning": "nhóm nghiên cứu"
      }
    ],
    "4": [
      {
        "text": "research paper",
        "start": 51,
        "end": 65,
        "type": "collocation",
        "meaning": "bài nghiên cứu"
      }
    ]
  },
  "t5-41": {
    "0": [
      {
        "text": "online orders",
        "start": 28,
        "end": 41,
        "type": "collocation",
        "meaning": "đơn hàng trực tuyến"
      },
      {
        "text": "chocolate candies",
        "start": 50,
        "end": 67,
        "type": "collocation",
        "meaning": "kẹo sô cô la"
      }
    ],
    "4": [
      {
        "text": "packaging and shipping",
        "start": 21,
        "end": 43,
        "type": "collocation",
        "meaning": "đóng gói và vận chuyển"
      }
    ],
    "6": [
      {
        "text": "delivery service",
        "start": 48,
        "end": 64,
        "type": "collocation",
        "meaning": "dịch vụ giao hàng"
      },
      {
        "text": "pick up",
        "start": 69,
        "end": 76,
        "type": "phrasal",
        "meaning": "lấy"
      },
      {
        "text": "instead of",
        "start": 102,
        "end": 112,
        "type": "structure",
        "meaning": "thay vì"
      }
    ],
    "q43:C": [
      {
        "text": "delivery service",
        "start": 2,
        "end": 18,
        "type": "collocation",
        "meaning": "dịch vụ giao hàng"
      }
    ]
  },
  "t5-44": {
    "q44:D": [
      {
        "text": "Sports equipment",
        "start": 0,
        "end": 16,
        "type": "collocation",
        "meaning": "thiết bị thể thao"
      }
    ]
  },
  "t5-47": {
    "1": [
      {
        "text": "consulting firm",
        "start": 32,
        "end": 47,
        "type": "collocation",
        "meaning": "công ty tư vấn"
      }
    ],
    "2": [
      {
        "text": "increase sales",
        "start": 38,
        "end": 52,
        "type": "collocation",
        "meaning": "tăng doanh số"
      }
    ],
    "q49:A": [
      {
        "text": "focus group",
        "start": 2,
        "end": 13,
        "type": "collocation",
        "meaning": "nhóm tập trung"
      }
    ]
  },
  "t5-50": {
    "0": [
      {
        "text": "budget discussion",
        "start": 67,
        "end": 84,
        "type": "collocation",
        "meaning": "thảo luận ngân sách"
      }
    ],
    "6": [
      {
        "text": "get rid of",
        "start": 70,
        "end": 80,
        "type": "phrasal",
        "meaning": "loại bỏ"
      }
    ]
  },
  "t5-53": {
    "3": [
      {
        "text": "construction company",
        "start": 49,
        "end": 69,
        "type": "collocation",
        "meaning": "công ty xây dựng"
      }
    ],
    "5": [
      {
        "text": "Construction Company",
        "start": 42,
        "end": 62,
        "type": "collocation",
        "meaning": "công ty xây dựng"
      }
    ]
  },
  "t5-56": {
    "0": [
      {
        "text": "employee survey",
        "start": 45,
        "end": 60,
        "type": "collocation",
        "meaning": "khảo sát nhân viên"
      }
    ],
    "3": [
      {
        "text": "break room",
        "start": 16,
        "end": 26,
        "type": "collocation",
        "meaning": "phòng nghỉ"
      }
    ],
    "4": [
      {
        "text": "break room",
        "start": 29,
        "end": 39,
        "type": "collocation",
        "meaning": "phòng nghỉ"
      }
    ],
    "6": [
      {
        "text": "construction company",
        "start": 48,
        "end": 68,
        "type": "collocation",
        "meaning": "công ty xây dựng"
      }
    ],
    "7": [
      {
        "text": "need to",
        "start": 38,
        "end": 45,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q56:D": [
      {
        "text": "employee survey",
        "start": 16,
        "end": 31,
        "type": "collocation",
        "meaning": "khảo sát nhân viên"
      }
    ]
  },
  "t5-59": {
    "2": [
      {
        "text": "Construction Company",
        "start": 21,
        "end": 41,
        "type": "collocation",
        "meaning": "công ty xây dựng"
      }
    ],
    "5": [
      {
        "text": "recycling center",
        "start": 20,
        "end": 36,
        "type": "collocation",
        "meaning": "trung tâm tái chế"
      }
    ],
    "7": [
      {
        "text": "price-match guarantee",
        "start": 15,
        "end": 36,
        "type": "collocation",
        "meaning": "cam kết giá bằng đối thủ"
      }
    ]
  },
  "t5-62": {
    "1": [
      {
        "text": "train tunnel",
        "start": 43,
        "end": 55,
        "type": "collocation",
        "meaning": "đường hầm tàu hỏa"
      }
    ],
    "4": [
      {
        "text": "support columns",
        "start": 44,
        "end": 59,
        "type": "collocation",
        "meaning": "cột chống đỡ"
      }
    ],
    "5": [
      {
        "text": "going to",
        "start": 23,
        "end": 31,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "10": [
      {
        "text": "going to",
        "start": 21,
        "end": 29,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "q64:D": [
      {
        "text": "management team",
        "start": 12,
        "end": 27,
        "type": "collocation",
        "meaning": "đội ngũ quản lý"
      }
    ]
  },
  "t5-65": {
    "0": [
      {
        "text": "need to",
        "start": 51,
        "end": 58,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "food delivery service",
        "start": 106,
        "end": 127,
        "type": "collocation",
        "meaning": "dịch vụ giao đồ ăn"
      }
    ],
    "1": [
      {
        "text": "need to",
        "start": 43,
        "end": 50,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "5": [
      {
        "text": "bicycle delivery",
        "start": 21,
        "end": 37,
        "type": "collocation",
        "meaning": "giao hàng bằng xe đạp"
      }
    ],
    "q67:B": [
      {
        "text": "bicycle delivery",
        "start": 15,
        "end": 31,
        "type": "collocation",
        "meaning": "giao hàng bằng xe đạp"
      }
    ]
  },
  "t5-68": {
    "6": [
      {
        "text": "natural light",
        "start": 76,
        "end": 89,
        "type": "collocation",
        "meaning": "ánh sáng tự nhiên"
      }
    ],
    "8": [
      {
        "text": "cost breakdown",
        "start": 41,
        "end": 55,
        "type": "collocation",
        "meaning": "phân tích chi phí"
      }
    ]
  },
  "t6-32": {
    "1": [
      {
        "text": "advertising campaign",
        "start": 12,
        "end": 32,
        "type": "collocation",
        "meaning": "chiến dịch quảng cáo"
      }
    ],
    "3": [
      {
        "text": "busy season",
        "start": 9,
        "end": 20,
        "type": "collocation",
        "meaning": "mùa cao điểm"
      }
    ],
    "q32:C": [
      {
        "text": "advertising campaign",
        "start": 3,
        "end": 23,
        "type": "collocation",
        "meaning": "chiến dịch quảng cáo"
      }
    ]
  },
  "t6-35": {
    "0": [
      {
        "text": "check out",
        "start": 69,
        "end": 78,
        "type": "phrasal",
        "meaning": "xem"
      }
    ],
    "1": [
      {
        "text": "parking garage",
        "start": 22,
        "end": 36,
        "type": "collocation",
        "meaning": "nhà để xe"
      },
      {
        "text": "room reservation",
        "start": 60,
        "end": 76,
        "type": "collocation",
        "meaning": "đặt phòng"
      }
    ],
    "2": [
      {
        "text": "have to",
        "start": 21,
        "end": 28,
        "type": "structure",
        "meaning": "phải"
      }
    ],
    "5": [
      {
        "text": "landscaping crew",
        "start": 37,
        "end": 53,
        "type": "collocation",
        "meaning": "đội làm cảnh quan"
      }
    ]
  },
  "t6-38": {
    "5": [
      {
        "text": "training materials",
        "start": 47,
        "end": 65,
        "type": "collocation",
        "meaning": "tài liệu đào tạo"
      }
    ],
    "7": [
      {
        "text": "looking forward to",
        "start": 15,
        "end": 33,
        "type": "collocation",
        "meaning": "mong chờ"
      }
    ],
    "q39:A": [
      {
        "text": "training materials",
        "start": 9,
        "end": 27,
        "type": "collocation",
        "meaning": "tài liệu đào tạo"
      }
    ],
    "q40:A": [
      {
        "text": "press conference",
        "start": 2,
        "end": 18,
        "type": "collocation",
        "meaning": "họp báo"
      }
    ]
  },
  "t6-41": {
    "0": [
      {
        "text": "looking for",
        "start": 11,
        "end": 22,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "5": [
      {
        "text": "looking for",
        "start": 4,
        "end": 15,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ]
  },
  "t6-44": {
    "0": [
      {
        "text": "press conference",
        "start": 48,
        "end": 64,
        "type": "collocation",
        "meaning": "họp báo"
      }
    ],
    "1": [
      {
        "text": "train station",
        "start": 52,
        "end": 65,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ],
    "2": [
      {
        "text": "camera crew",
        "start": 15,
        "end": 26,
        "type": "collocation",
        "meaning": "đội quay phim"
      }
    ],
    "3": [
      {
        "text": "wind farm",
        "start": 78,
        "end": 87,
        "type": "collocation",
        "meaning": "trang trại điện gió"
      }
    ],
    "5": [
      {
        "text": "wind energy",
        "start": 29,
        "end": 40,
        "type": "collocation",
        "meaning": "năng lượng gió"
      }
    ],
    "6": [
      {
        "text": "going to",
        "start": 13,
        "end": 21,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "q45:A": [
      {
        "text": "wind farm",
        "start": 2,
        "end": 11,
        "type": "collocation",
        "meaning": "trang trại điện gió"
      }
    ]
  },
  "t6-47": {
    "q49:D": [
      {
        "text": "Sign up",
        "start": 0,
        "end": 7,
        "type": "phrasal",
        "meaning": "đăng ký"
      }
    ]
  },
  "t6-50": {
    "7": [
      {
        "text": "camping equipment",
        "start": 49,
        "end": 66,
        "type": "collocation",
        "meaning": "thiết bị cắm trại"
      }
    ],
    "9": [
      {
        "text": "look into",
        "start": 7,
        "end": 16,
        "type": "phrasal",
        "meaning": "xem xét"
      }
    ]
  },
  "t6-53": {
    "1": [
      {
        "text": "set up",
        "start": 53,
        "end": 59,
        "type": "phrasal",
        "meaning": "lắp đặt"
      }
    ],
    "2": [
      {
        "text": "on my way home",
        "start": 29,
        "end": 43,
        "type": "structure",
        "meaning": "trên đường về nhà"
      }
    ]
  },
  "t6-56": {
    "0": [
      {
        "text": "research team",
        "start": 23,
        "end": 36,
        "type": "collocation",
        "meaning": "nhóm nghiên cứu"
      }
    ],
    "3": [
      {
        "text": "project coordinator",
        "start": 34,
        "end": 53,
        "type": "collocation",
        "meaning": "điều phối viên dự án"
      }
    ],
    "4": [
      {
        "text": "freezing temperatures",
        "start": 27,
        "end": 48,
        "type": "collocation",
        "meaning": "nhiệt độ đóng băng"
      }
    ],
    "6": [
      {
        "text": "online store",
        "start": 28,
        "end": 40,
        "type": "collocation",
        "meaning": "cửa hàng trực tuyến"
      }
    ],
    "q56:A": [
      {
        "text": "trade show",
        "start": 13,
        "end": 23,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q58:C": [
      {
        "text": "online store",
        "start": 3,
        "end": 15,
        "type": "collocation",
        "meaning": "cửa hàng trực tuyến"
      }
    ]
  },
  "t6-59": {
    "4": [
      {
        "text": "going to",
        "start": 34,
        "end": 42,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "7": [
      {
        "text": "need to",
        "start": 50,
        "end": 57,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q60:A": [
      {
        "text": "gym membership",
        "start": 2,
        "end": 16,
        "type": "collocation",
        "meaning": "thẻ thành viên phòng tập"
      }
    ]
  },
  "t6-62": {
    "0": [
      {
        "text": "looking forward to",
        "start": 4,
        "end": 22,
        "type": "collocation",
        "meaning": "mong chờ"
      }
    ]
  },
  "t6-65": {
    "2": [
      {
        "text": "need to",
        "start": 92,
        "end": 99,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q65:B": [
      {
        "text": "train station",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ]
  },
  "t6-68": {
    "1": [
      {
        "text": "clothes dryer",
        "start": 41,
        "end": 54,
        "type": "collocation",
        "meaning": "máy sấy quần áo"
      }
    ],
    "4": [
      {
        "text": "electric panel",
        "start": 47,
        "end": 61,
        "type": "collocation",
        "meaning": "bảng điện"
      }
    ],
    "9": [
      {
        "text": "clothes dryer",
        "start": 15,
        "end": 28,
        "type": "collocation",
        "meaning": "máy sấy quần áo"
      }
    ],
    "10": [
      {
        "text": "need to",
        "start": 21,
        "end": 28,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "q68:D": [
      {
        "text": "clothes dryer",
        "start": 2,
        "end": 15,
        "type": "collocation",
        "meaning": "máy sấy quần áo"
      }
    ]
  },
  "t7-32": {
    "3": [
      {
        "text": "conference room",
        "start": 42,
        "end": 57,
        "type": "collocation",
        "meaning": "phòng họp"
      }
    ],
    "6": [
      {
        "text": "spring rolls",
        "start": 20,
        "end": 32,
        "type": "collocation",
        "meaning": "chả giò"
      }
    ]
  },
  "t7-35": {
    "5": [
      {
        "text": "summer menu",
        "start": 35,
        "end": 46,
        "type": "collocation",
        "meaning": "thực đơn mùa hè"
      }
    ],
    "7": [
      {
        "text": "get in touch",
        "start": 9,
        "end": 21,
        "type": "collocation",
        "meaning": "liên lạc"
      },
      {
        "text": "vegetable supplier",
        "start": 41,
        "end": 59,
        "type": "collocation",
        "meaning": "nhà cung cấp rau"
      }
    ],
    "q36:B": [
      {
        "text": "business hours",
        "start": 4,
        "end": 18,
        "type": "collocation",
        "meaning": "giờ làm việc"
      }
    ],
    "q37": [
      {
        "text": "make a phone call",
        "start": 24,
        "end": 41,
        "type": "collocation",
        "meaning": "gọi điện thoại"
      }
    ]
  },
  "t7-38": {
    "2": [
      {
        "text": "staff development",
        "start": 63,
        "end": 80,
        "type": "collocation",
        "meaning": "phát triển nhân viên"
      }
    ],
    "3": [
      {
        "text": "looking for",
        "start": 57,
        "end": 68,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "6": [
      {
        "text": "going to",
        "start": 17,
        "end": 25,
        "type": "structure",
        "meaning": "sẽ"
      }
    ]
  },
  "t7-41": {
    "0": [
      {
        "text": "online store",
        "start": 59,
        "end": 71,
        "type": "collocation",
        "meaning": "cửa hàng trực tuyến"
      }
    ],
    "3": [
      {
        "text": "have to",
        "start": 41,
        "end": 48,
        "type": "structure",
        "meaning": "phải"
      }
    ]
  },
  "t7-44": {
    "4": [
      {
        "text": "film industry",
        "start": 45,
        "end": 58,
        "type": "collocation",
        "meaning": "ngành công nghiệp phim"
      }
    ]
  },
  "t7-47": {
    "2": [
      {
        "text": "potential clients",
        "start": 115,
        "end": 132,
        "type": "collocation",
        "meaning": "khách hàng tiềm năng"
      }
    ],
    "3": [
      {
        "text": "business cards",
        "start": 37,
        "end": 51,
        "type": "collocation",
        "meaning": "danh thiếp"
      }
    ],
    "q48:C": [
      {
        "text": "advertising campaign",
        "start": 3,
        "end": 23,
        "type": "collocation",
        "meaning": "chiến dịch quảng cáo"
      }
    ],
    "q49:A": [
      {
        "text": "business cards",
        "start": 9,
        "end": 23,
        "type": "collocation",
        "meaning": "danh thiếp"
      }
    ]
  },
  "t7-50": {
    "0": [
      {
        "text": "need to",
        "start": 3,
        "end": 10,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "menu design",
        "start": 30,
        "end": 41,
        "type": "collocation",
        "meaning": "thiết kế thực đơn"
      },
      {
        "text": "seaside restaurant",
        "start": 50,
        "end": 68,
        "type": "collocation",
        "meaning": "nhà hàng ven biển"
      }
    ],
    "7": [
      {
        "text": "community fair",
        "start": 64,
        "end": 78,
        "type": "collocation",
        "meaning": "hội chợ cộng đồng"
      }
    ],
    "q52:B": [
      {
        "text": "trade show",
        "start": 2,
        "end": 12,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q52:C": [
      {
        "text": "community fair",
        "start": 2,
        "end": 16,
        "type": "collocation",
        "meaning": "hội chợ cộng đồng"
      }
    ]
  },
  "t7-53": {
    "4": [
      {
        "text": "ran out of",
        "start": 18,
        "end": 28,
        "type": "phrasal",
        "meaning": "hết"
      }
    ],
    "7": [
      {
        "text": "visitor center",
        "start": 18,
        "end": 32,
        "type": "collocation",
        "meaning": "trung tâm du khách"
      }
    ],
    "q54:B": [
      {
        "text": "credit card",
        "start": 20,
        "end": 31,
        "type": "collocation",
        "meaning": "thẻ tín dụng"
      }
    ],
    "q54:C": [
      {
        "text": "reserve tickets",
        "start": 12,
        "end": 27,
        "type": "collocation",
        "meaning": "đặt vé"
      }
    ],
    "q55": [
      {
        "text": "visitor center",
        "start": 27,
        "end": 41,
        "type": "collocation",
        "meaning": "trung tâm du khách"
      }
    ]
  },
  "t7-56": {
    "5": [
      {
        "text": "shopping center",
        "start": 33,
        "end": 48,
        "type": "collocation",
        "meaning": "trung tâm mua sắm"
      }
    ],
    "6": [
      {
        "text": "Community residents",
        "start": 0,
        "end": 19,
        "type": "collocation",
        "meaning": "cư dân cộng đồng"
      },
      {
        "text": "looking forward to",
        "start": 24,
        "end": 42,
        "type": "collocation",
        "meaning": "mong chờ"
      }
    ]
  },
  "t7-59": {
    "0": [
      {
        "text": "interested in",
        "start": 30,
        "end": 43,
        "type": "structure",
        "meaning": "quan tâm"
      },
      {
        "text": "hanging plants",
        "start": 48,
        "end": 62,
        "type": "collocation",
        "meaning": "cây treo"
      }
    ]
  },
  "t7-62": {
    "1": [
      {
        "text": "acrylic test tubes",
        "start": 37,
        "end": 55,
        "type": "collocation",
        "meaning": "ống nghiệm acrylic"
      },
      {
        "text": "specific guidelines",
        "start": 84,
        "end": 103,
        "type": "collocation",
        "meaning": "hướng dẫn cụ thể"
      }
    ],
    "5": [
      {
        "text": "analyze data",
        "start": 36,
        "end": 48,
        "type": "collocation",
        "meaning": "phân tích dữ liệu"
      }
    ]
  },
  "t7-65": {
    "1": [
      {
        "text": "store shelves",
        "start": 89,
        "end": 102,
        "type": "collocation",
        "meaning": "kệ hàng"
      }
    ],
    "2": [
      {
        "text": "need to",
        "start": 3,
        "end": 10,
        "type": "structure",
        "meaning": "cần"
      }
    ],
    "3": [
      {
        "text": "logo designs",
        "start": 21,
        "end": 33,
        "type": "collocation",
        "meaning": "thiết kế logo"
      }
    ],
    "5": [
      {
        "text": "palm tree",
        "start": 25,
        "end": 34,
        "type": "collocation",
        "meaning": "cây cọ"
      }
    ],
    "6": [
      {
        "text": "palm tree",
        "start": 20,
        "end": 29,
        "type": "collocation",
        "meaning": "cây cọ"
      }
    ],
    "7": [
      {
        "text": "focus group",
        "start": 54,
        "end": 65,
        "type": "collocation",
        "meaning": "nhóm tập trung"
      }
    ],
    "q65:A": [
      {
        "text": "busy season",
        "start": 2,
        "end": 13,
        "type": "collocation",
        "meaning": "mùa cao điểm"
      }
    ],
    "q67:A": [
      {
        "text": "trade show",
        "start": 2,
        "end": 12,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q67:B": [
      {
        "text": "focus group",
        "start": 2,
        "end": 13,
        "type": "collocation",
        "meaning": "nhóm tập trung"
      }
    ]
  },
  "t7-68": {
    "5": [
      {
        "text": "need to",
        "start": 24,
        "end": 31,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "irrigation system",
        "start": 43,
        "end": 60,
        "type": "collocation",
        "meaning": "hệ thống tưới"
      }
    ]
  },
  "t8-32": {
    "0": [
      {
        "text": "ceiling light",
        "start": 105,
        "end": 118,
        "type": "collocation",
        "meaning": "đèn trần"
      }
    ]
  },
  "t8-35": {
    "5": [
      {
        "text": "perfect working order",
        "start": 67,
        "end": 88,
        "type": "collocation",
        "meaning": "tình trạng hoạt động hoàn hảo"
      }
    ],
    "q37:B": [
      {
        "text": "Place an order",
        "start": 0,
        "end": 14,
        "type": "collocation",
        "meaning": "đặt hàng"
      }
    ],
    "q37:C": [
      {
        "text": "Make a phone call",
        "start": 0,
        "end": 17,
        "type": "collocation",
        "meaning": "gọi điện thoại"
      }
    ]
  },
  "t8-38": {
    "2": [
      {
        "text": "local residents",
        "start": 16,
        "end": 31,
        "type": "collocation",
        "meaning": "cư dân địa phương"
      }
    ]
  },
  "t8-41": {
    "5": [
      {
        "text": "aerial photographs",
        "start": 32,
        "end": 50,
        "type": "collocation",
        "meaning": "ảnh chụp từ trên cao"
      }
    ],
    "q42:D": [
      {
        "text": "trade show",
        "start": 2,
        "end": 12,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ]
  },
  "t8-44": {
    "1": [
      {
        "text": "soil analysis",
        "start": 46,
        "end": 59,
        "type": "collocation",
        "meaning": "phân tích đất"
      }
    ],
    "2": [
      {
        "text": "vegetable garden",
        "start": 67,
        "end": 83,
        "type": "collocation",
        "meaning": "vườn rau"
      }
    ],
    "7": [
      {
        "text": "phone number",
        "start": 27,
        "end": 39,
        "type": "collocation",
        "meaning": "số điện thoại"
      }
    ]
  },
  "t8-47": {
    "q48:A": [
      {
        "text": "Pick up",
        "start": 0,
        "end": 7,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "q48:B": [
      {
        "text": "Set up",
        "start": 0,
        "end": 6,
        "type": "phrasal",
        "meaning": "thiết lập"
      }
    ],
    "q48:D": [
      {
        "text": "Turn on",
        "start": 0,
        "end": 7,
        "type": "phrasal",
        "meaning": "bật"
      }
    ]
  },
  "t8-50": {
    "1": [
      {
        "text": "outdoor dining area",
        "start": 32,
        "end": 51,
        "type": "collocation",
        "meaning": "khu vực ăn uống ngoài trời"
      }
    ],
    "8": [
      {
        "text": "special menu",
        "start": 18,
        "end": 30,
        "type": "collocation",
        "meaning": "thực đơn đặc biệt"
      }
    ],
    "9": [
      {
        "text": "special menu",
        "start": 11,
        "end": 23,
        "type": "collocation",
        "meaning": "thực đơn đặc biệt"
      }
    ]
  },
  "t8-53": {
    "0": [
      {
        "text": "trade show",
        "start": 42,
        "end": 52,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "4": [
      {
        "text": "automated farming technology",
        "start": 24,
        "end": 52,
        "type": "collocation",
        "meaning": "công nghệ nông nghiệp tự động"
      }
    ],
    "7": [
      {
        "text": "payment options",
        "start": 34,
        "end": 49,
        "type": "collocation",
        "meaning": "phương thức thanh toán"
      }
    ],
    "q53:A": [
      {
        "text": "trade show",
        "start": 5,
        "end": 15,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q53:B": [
      {
        "text": "press conference",
        "start": 5,
        "end": 21,
        "type": "collocation",
        "meaning": "họp báo"
      }
    ],
    "q55:A": [
      {
        "text": "business cards",
        "start": 9,
        "end": 23,
        "type": "collocation",
        "meaning": "danh thiếp"
      }
    ]
  },
  "t8-56": {
    "2": [
      {
        "text": "inclement weather",
        "start": 71,
        "end": 88,
        "type": "collocation",
        "meaning": "thời tiết xấu"
      }
    ],
    "11": [
      {
        "text": "meal vouchers",
        "start": 33,
        "end": 46,
        "type": "collocation",
        "meaning": "phiếu ăn"
      }
    ],
    "q56:D": [
      {
        "text": "train station",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ]
  },
  "t8-59": {
    "1": [
      {
        "text": "hydraulic system",
        "start": 17,
        "end": 33,
        "type": "collocation",
        "meaning": "hệ thống thủy lực"
      }
    ],
    "4": [
      {
        "text": "hydraulic cylinder",
        "start": 49,
        "end": 67,
        "type": "collocation",
        "meaning": "xi lanh thủy lực"
      }
    ],
    "9": [
      {
        "text": "need to",
        "start": 2,
        "end": 9,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "go over",
        "start": 10,
        "end": 17,
        "type": "phrasal",
        "meaning": "xem lại"
      }
    ]
  },
  "t8-62": {
    "0": [
      {
        "text": "pick up",
        "start": 16,
        "end": 23,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "7": [
      {
        "text": "work order",
        "start": 19,
        "end": 29,
        "type": "collocation",
        "meaning": "phiếu công việc"
      }
    ],
    "q62:D": [
      {
        "text": "social media",
        "start": 2,
        "end": 14,
        "type": "collocation",
        "meaning": "mạng xã hội"
      }
    ]
  },
  "t8-65": {
    "1": [
      {
        "text": "waking up",
        "start": 19,
        "end": 28,
        "type": "phrasal",
        "meaning": "thức dậy"
      },
      {
        "text": "stiff neck",
        "start": 36,
        "end": 46,
        "type": "collocation",
        "meaning": "cứng cổ"
      }
    ],
    "q67:A": [
      {
        "text": "product warranty",
        "start": 2,
        "end": 18,
        "type": "collocation",
        "meaning": "bảo hành sản phẩm"
      }
    ],
    "q67:B": [
      {
        "text": "promotional discount",
        "start": 2,
        "end": 22,
        "type": "collocation",
        "meaning": "giảm giá khuyến mãi"
      }
    ],
    "q67:C": [
      {
        "text": "business hours",
        "start": 12,
        "end": 26,
        "type": "collocation",
        "meaning": "giờ làm việc"
      }
    ]
  },
  "t8-68": {
    "3": [
      {
        "text": "set up",
        "start": 20,
        "end": 26,
        "type": "phrasal",
        "meaning": "thiết lập"
      },
      {
        "text": "sales presentations",
        "start": 35,
        "end": 54,
        "type": "collocation",
        "meaning": "bài thuyết trình bán hàng"
      }
    ],
    "4": [
      {
        "text": "sound equipment",
        "start": 32,
        "end": 47,
        "type": "collocation",
        "meaning": "thiết bị âm thanh"
      },
      {
        "text": "conference room",
        "start": 55,
        "end": 70,
        "type": "collocation",
        "meaning": "phòng họp"
      }
    ],
    "q69:A": [
      {
        "text": "conference room",
        "start": 10,
        "end": 25,
        "type": "collocation",
        "meaning": "phòng họp"
      }
    ]
  },
  "t9-32": {
    "0": [
      {
        "text": "gym membership",
        "start": 112,
        "end": 126,
        "type": "collocation",
        "meaning": "thẻ thành viên phòng tập"
      }
    ],
    "2": [
      {
        "text": "athletic equipment",
        "start": 25,
        "end": 43,
        "type": "collocation",
        "meaning": "thiết bị thể thao"
      },
      {
        "text": "exercise mats",
        "start": 49,
        "end": 62,
        "type": "collocation",
        "meaning": "thảm tập thể dục"
      },
      {
        "text": "tennis rackets",
        "start": 67,
        "end": 81,
        "type": "collocation",
        "meaning": "vợt tennis"
      }
    ],
    "4": [
      {
        "text": "need to",
        "start": 19,
        "end": 26,
        "type": "structure",
        "meaning": "cần"
      }
    ]
  },
  "t9-35": {
    "1": [
      {
        "text": "quality assurance",
        "start": 39,
        "end": 56,
        "type": "collocation",
        "meaning": "đảm bảo chất lượng"
      }
    ],
    "4": [
      {
        "text": "food manufacturing",
        "start": 27,
        "end": 45,
        "type": "collocation",
        "meaning": "sản xuất thực phẩm"
      }
    ],
    "5": [
      {
        "text": "familiar with",
        "start": 23,
        "end": 36,
        "type": "structure",
        "meaning": "quen thuộc"
      }
    ]
  },
  "t9-38": {
    "5": [
      {
        "text": "take care of",
        "start": 19,
        "end": 31,
        "type": "collocation",
        "meaning": "đảm nhận"
      }
    ],
    "q38:D": [
      {
        "text": "training materials",
        "start": 11,
        "end": 29,
        "type": "collocation",
        "meaning": "tài liệu đào tạo"
      }
    ]
  },
  "t9-41": {
    "0": [
      {
        "text": "going to",
        "start": 49,
        "end": 57,
        "type": "structure",
        "meaning": "sẽ"
      },
      {
        "text": "accounts payable",
        "start": 79,
        "end": 95,
        "type": "collocation",
        "meaning": "các khoản phải trả"
      }
    ],
    "6": [
      {
        "text": "motivate employees",
        "start": 17,
        "end": 35,
        "type": "collocation",
        "meaning": "tạo động lực cho nhân viên"
      }
    ]
  },
  "t9-44": {
    "0": [
      {
        "text": "going to",
        "start": 69,
        "end": 77,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "1": [
      {
        "text": "advertising campaign",
        "start": 43,
        "end": 63,
        "type": "collocation",
        "meaning": "chiến dịch quảng cáo"
      }
    ],
    "q44:A": [
      {
        "text": "advertising campaign",
        "start": 3,
        "end": 23,
        "type": "collocation",
        "meaning": "chiến dịch quảng cáo"
      }
    ]
  },
  "t9-47": {
    "0": [
      {
        "text": "recycling process",
        "start": 82,
        "end": 99,
        "type": "collocation",
        "meaning": "quy trình tái chế"
      }
    ]
  },
  "t9-50": {
    "7": [
      {
        "text": "bring up",
        "start": 4,
        "end": 12,
        "type": "phrasal",
        "meaning": "nêu ra"
      }
    ],
    "q52:A": [
      {
        "text": "press conference",
        "start": 13,
        "end": 29,
        "type": "collocation",
        "meaning": "họp báo"
      }
    ]
  },
  "t9-53": {
    "1": [
      {
        "text": "art gallery",
        "start": 63,
        "end": 74,
        "type": "collocation",
        "meaning": "phòng tranh nghệ thuật"
      }
    ],
    "6": [
      {
        "text": "catering menu",
        "start": 16,
        "end": 29,
        "type": "collocation",
        "meaning": "thực đơn tiệc"
      }
    ],
    "q53:C": [
      {
        "text": "art gallery",
        "start": 3,
        "end": 14,
        "type": "collocation",
        "meaning": "phòng tranh nghệ thuật"
      }
    ]
  },
  "t9-56": {
    "3": [
      {
        "text": "looking for",
        "start": 40,
        "end": 51,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "4": [
      {
        "text": "culinary school",
        "start": 23,
        "end": 38,
        "type": "collocation",
        "meaning": "trường dạy nấu ăn"
      }
    ]
  },
  "t9-59": {
    "2": [
      {
        "text": "health care",
        "start": 96,
        "end": 107,
        "type": "collocation",
        "meaning": "chăm sóc sức khỏe"
      }
    ],
    "9": [
      {
        "text": "sign up",
        "start": 37,
        "end": 44,
        "type": "phrasal",
        "meaning": "đăng ký"
      }
    ]
  },
  "t9-62": {
    "0": [
      {
        "text": "looking for",
        "start": 71,
        "end": 82,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "3": [
      {
        "text": "special offers",
        "start": 33,
        "end": 47,
        "type": "collocation",
        "meaning": "ưu đãi đặc biệt"
      }
    ],
    "5": [
      {
        "text": "free parking",
        "start": 22,
        "end": 34,
        "type": "collocation",
        "meaning": "đỗ xe miễn phí"
      }
    ],
    "7": [
      {
        "text": "free parking",
        "start": 65,
        "end": 77,
        "type": "collocation",
        "meaning": "đỗ xe miễn phí"
      }
    ],
    "8": [
      {
        "text": "going to",
        "start": 20,
        "end": 28,
        "type": "structure",
        "meaning": "sẽ"
      }
    ],
    "q62:D": [
      {
        "text": "customer service",
        "start": 5,
        "end": 21,
        "type": "collocation",
        "meaning": "dịch vụ khách hàng"
      }
    ]
  },
  "t9-65": {
    "3": [
      {
        "text": "gift shop",
        "start": 4,
        "end": 13,
        "type": "collocation",
        "meaning": "cửa hàng quà tặng"
      }
    ],
    "4": [
      {
        "text": "display shirt",
        "start": 29,
        "end": 42,
        "type": "collocation",
        "meaning": "áo trưng bày"
      }
    ],
    "11": [
      {
        "text": "gift shop",
        "start": 42,
        "end": 51,
        "type": "collocation",
        "meaning": "cửa hàng quà tặng"
      }
    ],
    "q65": [
      {
        "text": "gift shop",
        "start": 25,
        "end": 34,
        "type": "collocation",
        "meaning": "cửa hàng quà tặng"
      }
    ]
  },
  "t9-68": {
    "2": [
      {
        "text": "looking for",
        "start": 27,
        "end": 38,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "6": [
      {
        "text": "in advance",
        "start": 25,
        "end": 35,
        "type": "structure",
        "meaning": "trước"
      }
    ],
    "q69:A": [
      {
        "text": "social media",
        "start": 23,
        "end": 35,
        "type": "collocation",
        "meaning": "mạng xã hội"
      }
    ],
    "q69:B": [
      {
        "text": "in advance",
        "start": 24,
        "end": 34,
        "type": "structure",
        "meaning": "trước"
      }
    ]
  },
  "t10-32": {
    "0": [
      {
        "text": "retail space",
        "start": 12,
        "end": 24,
        "type": "collocation",
        "meaning": "không gian bán lẻ"
      }
    ],
    "2": [
      {
        "text": "musical instruments",
        "start": 86,
        "end": 105,
        "type": "collocation",
        "meaning": "nhạc cụ"
      }
    ],
    "4": [
      {
        "text": "practice rooms",
        "start": 21,
        "end": 35,
        "type": "collocation",
        "meaning": "phòng luyện tập"
      },
      {
        "text": "music lessons",
        "start": 60,
        "end": 73,
        "type": "collocation",
        "meaning": "lớp học nhạc"
      }
    ],
    "q33:B": [
      {
        "text": "culinary school",
        "start": 5,
        "end": 20,
        "type": "collocation",
        "meaning": "trường dạy nấu ăn"
      }
    ]
  },
  "t10-35": {
    "1": [
      {
        "text": "have in mind",
        "start": 18,
        "end": 30,
        "type": "collocation",
        "meaning": "nghĩ đến"
      }
    ],
    "q37:A": [
      {
        "text": "Pay a deposit",
        "start": 0,
        "end": 13,
        "type": "collocation",
        "meaning": "trả tiền đặt cọc"
      }
    ],
    "q37:D": [
      {
        "text": "Schedule a consultation",
        "start": 0,
        "end": 23,
        "type": "collocation",
        "meaning": "lên lịch tư vấn"
      }
    ]
  },
  "t10-38": {
    "0": [
      {
        "text": "customer service",
        "start": 32,
        "end": 48,
        "type": "collocation",
        "meaning": "dịch vụ khách hàng"
      }
    ],
    "3": [
      {
        "text": "boarding pass",
        "start": 21,
        "end": 34,
        "type": "collocation",
        "meaning": "thẻ lên máy bay"
      }
    ],
    "4": [
      {
        "text": "pick up",
        "start": 59,
        "end": 66,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "6": [
      {
        "text": "boarding pass",
        "start": 29,
        "end": 42,
        "type": "collocation",
        "meaning": "thẻ lên máy bay"
      }
    ],
    "q38:B": [
      {
        "text": "Pick up",
        "start": 0,
        "end": 7,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ],
    "q39:D": [
      {
        "text": "boarding pass",
        "start": 2,
        "end": 15,
        "type": "collocation",
        "meaning": "thẻ lên máy bay"
      }
    ]
  },
  "t10-41": {
    "2": [
      {
        "text": "responsible for",
        "start": 13,
        "end": 28,
        "type": "structure",
        "meaning": "chịu trách nhiệm"
      },
      {
        "text": "patients' files",
        "start": 42,
        "end": 57,
        "type": "collocation",
        "meaning": "hồ sơ bệnh nhân"
      }
    ],
    "3": [
      {
        "text": "patient records",
        "start": 58,
        "end": 73,
        "type": "collocation",
        "meaning": "hồ sơ bệnh nhân"
      }
    ],
    "5": [
      {
        "text": "familiar with",
        "start": 9,
        "end": 22,
        "type": "structure",
        "meaning": "quen thuộc"
      }
    ],
    "q41:D": [
      {
        "text": "dental office",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "phòng khám nha khoa"
      }
    ],
    "q42": [
      {
        "text": "familiar with",
        "start": 31,
        "end": 44,
        "type": "structure",
        "meaning": "quen thuộc"
      }
    ]
  },
  "t10-44": {
    "0": [
      {
        "text": "water-permeable bricks",
        "start": 55,
        "end": 77,
        "type": "collocation",
        "meaning": "gạch thấm nước"
      }
    ],
    "2": [
      {
        "text": "trade show",
        "start": 71,
        "end": 81,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "3": [
      {
        "text": "need to",
        "start": 16,
        "end": 23,
        "type": "structure",
        "meaning": "cần"
      },
      {
        "text": "durability testing",
        "start": 35,
        "end": 53,
        "type": "collocation",
        "meaning": "kiểm tra độ bền"
      }
    ],
    "8": [
      {
        "text": "trade show",
        "start": 98,
        "end": 108,
        "type": "collocation",
        "meaning": "triển lãm thương mại"
      }
    ],
    "q45:A": [
      {
        "text": "Durability testing",
        "start": 0,
        "end": 18,
        "type": "collocation",
        "meaning": "kiểm tra độ bền"
      }
    ]
  },
  "t10-47": {
    "1": [
      {
        "text": "pickup area",
        "start": 18,
        "end": 29,
        "type": "collocation",
        "meaning": "khu vực đón khách"
      }
    ],
    "6": [
      {
        "text": "on your way",
        "start": 37,
        "end": 48,
        "type": "structure",
        "meaning": "trên đường"
      }
    ],
    "q47:A": [
      {
        "text": "Gift shop",
        "start": 0,
        "end": 9,
        "type": "collocation",
        "meaning": "cửa hàng quà tặng"
      }
    ]
  },
  "t10-50": {
    "2": [
      {
        "text": "going on",
        "start": 16,
        "end": 24,
        "type": "phrasal",
        "meaning": "diễn ra"
      }
    ],
    "7": [
      {
        "text": "take the train",
        "start": 5,
        "end": 19,
        "type": "collocation",
        "meaning": "đi tàu"
      }
    ],
    "q50:D": [
      {
        "text": "train station",
        "start": 5,
        "end": 18,
        "type": "collocation",
        "meaning": "ga tàu"
      }
    ],
    "q52:A": [
      {
        "text": "monthly pass",
        "start": 11,
        "end": 23,
        "type": "collocation",
        "meaning": "vé tháng"
      }
    ]
  },
  "t10-53": {
    "3": [
      {
        "text": "LCD screen",
        "start": 109,
        "end": 119,
        "type": "collocation",
        "meaning": "màn hình LCD"
      }
    ],
    "q54:D": [
      {
        "text": "pick up",
        "start": 3,
        "end": 10,
        "type": "phrasal",
        "meaning": "lấy"
      }
    ]
  },
  "t10-56": {
    "0": [
      {
        "text": "medical supplies",
        "start": 25,
        "end": 41,
        "type": "collocation",
        "meaning": "vật tư y tế"
      }
    ],
    "q58:A": [
      {
        "text": "staff meeting",
        "start": 9,
        "end": 22,
        "type": "collocation",
        "meaning": "cuộc họp nhân viên"
      }
    ]
  },
  "t10-59": {
    "1": [
      {
        "text": "looking for",
        "start": 57,
        "end": 68,
        "type": "phrasal",
        "meaning": "tìm"
      }
    ],
    "6": [
      {
        "text": "separate shifts",
        "start": 13,
        "end": 28,
        "type": "collocation",
        "meaning": "ca làm việc riêng biệt"
      }
    ]
  },
  "t10-62": {
    "1": [
      {
        "text": "fund-raising campaign",
        "start": 27,
        "end": 48,
        "type": "collocation",
        "meaning": "chiến dịch gây quỹ"
      }
    ],
    "3": [
      {
        "text": "sports equipment",
        "start": 43,
        "end": 59,
        "type": "collocation",
        "meaning": "thiết bị thể thao"
      }
    ],
    "6": [
      {
        "text": "fill out",
        "start": 16,
        "end": 24,
        "type": "phrasal",
        "meaning": "điền"
      },
      {
        "text": "donation form",
        "start": 29,
        "end": 42,
        "type": "collocation",
        "meaning": "mẫu quyên góp"
      }
    ],
    "7": [
      {
        "text": "find out",
        "start": 11,
        "end": 19,
        "type": "phrasal",
        "meaning": "tìm hiểu"
      }
    ]
  },
  "t10-65": {
    "q66": [
      {
        "text": "flower arrangement",
        "start": 57,
        "end": 75,
        "type": "collocation",
        "meaning": "lẵng hoa"
      }
    ]
  },
  "t10-68": {
    "1": [
      {
        "text": "commercial agriculture",
        "start": 53,
        "end": 75,
        "type": "collocation",
        "meaning": "nông nghiệp thương mại"
      }
    ],
    "3": [
      {
        "text": "go over",
        "start": 6,
        "end": 13,
        "type": "phrasal",
        "meaning": "xem lại"
      }
    ],
    "6": [
      {
        "text": "grain bin",
        "start": 97,
        "end": 106,
        "type": "collocation",
        "meaning": "thùng chứa ngũ cốc"
      },
      {
        "text": "have to",
        "start": 107,
        "end": 114,
        "type": "structure",
        "meaning": "phải"
      }
    ]
  }
};

synchronizedLanguageNotes['t9-32']['q32:D'] = [{text:'cancel a reservation',start:3,end:23,type:'collocation',meaning:'hủy đặt chỗ'}];
const synchronizedTranslationCorrections = {
  "t4-32:32:D": "Thanh tra xây dựng",
  "t4-32:33": "Người đàn ông mong đợi điều gì?",
  "t4-56:57": "Người đàn ông nói gì về truyền hình?",
  "t5-35:37": "Người đàn ông có khả năng sẽ cung cấp thông tin gì tiếp theo?",
  "t5-41:42": "Theo người đàn ông, điều gì sẽ giúp doanh nghiệp?",
  "t5-59:60:D": "Ký tên tại bàn an ninh",
  "t7-68:69": "Nhìn vào bảng. Loại cây trồng phổ biến nhất được trồng khi nào?"
};

// Bổ sung ánh xạ đã đối chiếu
Object.assign(quizApproved, {
  "t1-35:35:A": {
    "en": [
      [
        "sign up",
        "focus"
      ]
    ],
    "vi": [
      [
        "đăng ký",
        "focus"
      ]
    ]
  },
  "t1-35:35:B": {
    "en": [
      [
        "enter a competition",
        "focus"
      ]
    ],
    "vi": [
      [
        "tham gia một cuộc thi",
        "focus"
      ]
    ]
  },
  "t1-35:36:A": {
    "en": [
      [
        "regional tournament",
        "focus"
      ]
    ],
    "vi": [
      [
        "giải đấu khu vực",
        "focus"
      ]
    ]
  },
  "t1-35:36:C": {
    "en": [
      [
        "started an institute",
        "focus"
      ]
    ],
    "vi": [
      [
        "thành lập một học viện",
        "focus"
      ]
    ]
  },
  "t1-35:36:D": {
    "en": [
      [
        "hired a new coach",
        "focus"
      ]
    ],
    "vi": [
      [
        "thuê một huấn luyện viên mới",
        "focus"
      ]
    ]
  },
  "t1-38:39:A": {
    "en": [
      [
        "shuttle service",
        "focus"
      ]
    ],
    "vi": [
      [
        "dịch vụ xe đưa đón",
        "focus"
      ]
    ]
  },
  "t1-41:42:C": {
    "en": [
      [
        "preferred by book authors",
        "focus"
      ]
    ],
    "vi": [
      [
        "được các tác giả sách ưa chuộng",
        "focus"
      ]
    ]
  },
  "t1-41:43:C": {
    "en": [
      [
        "focus group",
        "focus"
      ]
    ],
    "vi": [
      [
        "nhóm khảo sát tập trung",
        "focus"
      ]
    ]
  },
  "t1-59:59:A": {
    "en": [
      [
        "training opportunities",
        "focus"
      ]
    ],
    "vi": [
      [
        "cơ hội đào tạo",
        "focus"
      ]
    ]
  },
  "t1-59:59:D": {
    "en": [
      [
        "factory layout",
        "focus"
      ]
    ],
    "vi": [
      [
        "bố cục nhà máy",
        "focus"
      ]
    ]
  },
  "t1-62:64:A": {
    "en": [
      [
        "received a promotion",
        "focus"
      ]
    ],
    "vi": [
      [
        "được thăng chức",
        "focus"
      ]
    ]
  },
  "t1-62:64:C": {
    "en": [
      [
        "has been upgraded",
        "focus"
      ]
    ],
    "vi": [
      [
        "đã được nâng hạng",
        "focus"
      ]
    ]
  },
  "t1-62:64:D": {
    "en": [
      [
        "won an award",
        "focus"
      ]
    ],
    "vi": [
      [
        "đã giành được giải thưởng",
        "focus"
      ]
    ]
  },
  "t1-68:69:B": {
    "en": [
      [
        "long-term parking",
        "focus"
      ]
    ],
    "vi": [
      [
        "đỗ xe dài hạn",
        "focus"
      ]
    ]
  },
  "t1-68:69:C": {
    "en": [
      [
        "short-term parking",
        "focus"
      ]
    ],
    "vi": [
      [
        "đỗ xe ngắn hạn",
        "focus"
      ]
    ]
  },
  "t1-68:70:B": {
    "en": [
      [
        "apply for a permit",
        "focus"
      ]
    ],
    "vi": [
      [
        "nộp đơn xin giấy phép",
        "focus"
      ]
    ]
  },
  "t1-68:70:C": {
    "en": [
      [
        "ask for estimates",
        "focus"
      ]
    ],
    "vi": [
      [
        "yêu cầu báo giá",
        "focus"
      ]
    ]
  },
  "t2-38:39:A": {
    "en": [
      [
        "in person",
        "focus"
      ]
    ],
    "vi": [
      [
        "trực tiếp",
        "focus"
      ]
    ]
  },
  "t2-41:41:A": {
    "en": [
      [
        "rebate program",
        "focus"
      ]
    ],
    "vi": [
      [
        "chương trình hoàn tiền",
        "focus"
      ]
    ]
  },
  "t3-32:32:C": {
    "en": [
      [
        "gift shop",
        "focus"
      ]
    ],
    "vi": [
      [
        "cửa hàng quà tặng",
        "focus"
      ]
    ]
  },
  "t3-35:35:C": {
    "en": [
      [
        "train station",
        "focus"
      ]
    ],
    "vi": [
      [
        "ga tàu",
        "focus"
      ]
    ]
  },
  "t3-38:38:B": {
    "en": [
      [
        "delivery service",
        "focus"
      ]
    ],
    "vi": [
      [
        "dịch vụ giao hàng",
        "focus"
      ]
    ]
  },
  "t3-62:64:A": {
    "en": [
      [
        "place an order",
        "focus"
      ]
    ],
    "vi": [
      [
        "đặt hàng",
        "focus"
      ]
    ]
  },
  "t4-41:43:B": {
    "en": [
      [
        "credit card",
        "focus"
      ]
    ],
    "vi": [
      [
        "thẻ tín dụng",
        "focus"
      ]
    ]
  },
  "t4-50:51:D": {
    "en": [
      [
        "mobile app",
        "focus"
      ]
    ],
    "vi": [
      [
        "ứng dụng di động",
        "focus"
      ]
    ]
  },
  "t4-53:54:B": {
    "en": [
      [
        "responsible for",
        "focus"
      ]
    ],
    "vi": [
      [
        "chịu trách nhiệm",
        "focus"
      ]
    ]
  },
  "t4-53:55:B": {
    "en": [
      [
        "business hours",
        "focus"
      ]
    ],
    "vi": [
      [
        "giờ làm việc",
        "focus"
      ]
    ]
  },
  "t5-41:43:C": {
    "en": [
      [
        "delivery service",
        "focus"
      ]
    ],
    "vi": [
      [
        "dịch vụ giao hàng",
        "focus"
      ]
    ]
  },
  "t5-56:56:D": {
    "en": [
      [
        "employee survey",
        "focus"
      ]
    ],
    "vi": [
      [
        "khảo sát nhân viên",
        "focus"
      ]
    ]
  },
  "t5-62:64:D": {
    "en": [
      [
        "management team",
        "focus"
      ]
    ],
    "vi": [
      [
        "đội ngũ quản lý",
        "focus"
      ]
    ]
  },
  "t5-65:67:B": {
    "en": [
      [
        "bicycle delivery",
        "focus"
      ]
    ],
    "vi": [
      [
        "giao hàng bằng xe đạp",
        "focus"
      ]
    ]
  },
  "t6-38:39:A": {
    "en": [
      [
        "training materials",
        "focus"
      ]
    ],
    "vi": [
      [
        "tài liệu đào tạo",
        "focus"
      ]
    ]
  },
  "t7-47:49:A": {
    "en": [
      [
        "business cards",
        "focus"
      ]
    ],
    "vi": [
      [
        "danh thiếp",
        "focus"
      ]
    ]
  },
  "t7-53:54:B": {
    "en": [
      [
        "credit card",
        "focus"
      ]
    ],
    "vi": [
      [
        "thẻ tín dụng",
        "focus"
      ]
    ]
  },
  "t7-53:54:C": {
    "en": [
      [
        "reserve tickets",
        "focus"
      ]
    ],
    "vi": [
      [
        "đặt vé",
        "focus"
      ]
    ]
  },
  "t8-41:42:D": {
    "en": [
      [
        "trade show",
        "focus"
      ]
    ],
    "vi": [
      [
        "triển lãm thương mại",
        "focus"
      ]
    ]
  },
  "t8-53:53:A": {
    "en": [
      [
        "trade show",
        "focus"
      ]
    ],
    "vi": [
      [
        "triển lãm thương mại",
        "focus"
      ]
    ]
  },
  "t8-53:53:B": {
    "en": [
      [
        "press conference",
        "focus"
      ]
    ],
    "vi": [
      [
        "họp báo",
        "focus"
      ]
    ]
  },
  "t8-53:55:A": {
    "en": [
      [
        "business cards",
        "focus"
      ]
    ],
    "vi": [
      [
        "danh thiếp",
        "focus"
      ]
    ]
  },
  "t8-62:62:D": {
    "en": [
      [
        "social media",
        "focus"
      ]
    ],
    "vi": [
      [
        "mạng xã hội",
        "focus"
      ]
    ]
  },
  "t8-68:69:A": {
    "en": [
      [
        "conference room",
        "focus"
      ]
    ],
    "vi": [
      [
        "phòng họp",
        "focus"
      ]
    ]
  },
  "t9-44:44:A": {
    "en": [
      [
        "advertising campaign",
        "focus"
      ]
    ],
    "vi": [
      [
        "chiến dịch quảng cáo",
        "focus"
      ]
    ]
  },
  "t9-50:52:A": {
    "en": [
      [
        "press conference",
        "focus"
      ]
    ],
    "vi": [
      [
        "họp báo",
        "focus"
      ]
    ]
  },
  "t9-68:69:A": {
    "en": [
      [
        "social media",
        "focus"
      ]
    ],
    "vi": [
      [
        "mạng xã hội",
        "focus"
      ]
    ]
  },
  "t9-68:69:B": {
    "en": [
      [
        "in advance",
        "focus"
      ]
    ],
    "vi": [
      [
        "trước",
        "focus"
      ]
    ]
  },
  "t10-32:33:B": {
    "en": [
      [
        "culinary school",
        "focus"
      ]
    ],
    "vi": [
      [
        "trường dạy nấu ăn",
        "focus"
      ]
    ]
  },
  "t10-41:41:D": {
    "en": [
      [
        "dental office",
        "focus"
      ]
    ],
    "vi": [
      [
        "phòng khám nha khoa",
        "focus"
      ]
    ]
  },
  "t10-47:47:A": {
    "en": [
      [
        "Gift shop",
        "focus"
      ]
    ],
    "vi": [
      [
        "cửa hàng quà tặng",
        "focus"
      ]
    ]
  },
  "t10-50:50:D": {
    "en": [
      [
        "train station",
        "focus"
      ]
    ],
    "vi": [
      [
        "ga tàu",
        "focus"
      ]
    ]
  },
  "t10-50:52:A": {
    "en": [
      [
        "monthly pass",
        "focus"
      ]
    ],
    "vi": [
      [
        "vé tháng",
        "focus"
      ]
    ]
  },
  "t10-53:54:D": {
    "en": [
      [
        "pick up",
        "focus"
      ]
    ],
    "vi": [
      [
        "lấy",
        "focus"
      ]
    ]
  },
  "t10-56:58:A": {
    "en": [
      [
        "staff meeting",
        "focus"
      ]
    ],
    "vi": [
      [
        "cuộc họp nhân viên",
        "focus"
      ]
    ]
  }
});

// Sentence indexes refer to the existing sentences array in part3/data.js.
const listeningDrillGroups = [{
  title: 'Hành động tương đương',
  lessons: [
    {
      dialogueId: 't1-32',
      sentenceIndex: 5,
      lead: 'Nghe xem người phụ nữ định làm gì với đề xuất vừa nhận được.',
      question: 'Người phụ nữ sẽ làm gì?',
      clue: 'get in touch with the production manager',
      choices: ['Meet with a customer', 'Contact the production manager', 'Send out a new recipe'],
      correct: 1,
      explanation: '“Get in touch with” nghĩa là liên lạc với ai đó, tương đương với “contact”.'
    },
    {
      dialogueId: 't2-35',
      sentenceIndex: 2,
      lead: 'Nghe xem người nói sẽ chuẩn bị việc gì trong tháng này.',
      question: 'Người nói định làm gì?',
      clue: 'set up a meeting',
      choices: ['Arrange a meeting', 'Cancel a meeting', 'Attend a rehearsal'],
      correct: 0,
      explanation: 'Trong ngữ cảnh này, “set up” nghĩa là thu xếp. “Arrange a meeting” cũng là thu xếp một cuộc họp.'
    },
    {
      dialogueId: 't2-32',
      sentenceIndex: 2,
      lead: 'Nghe xem khách cần đến để làm gì.',
      question: 'Người giao hàng gọi để khách làm gì?',
      clue: 'pick up their food',
      choices: ['Place another order', 'Pay for their order online', 'Collect their food'],
      correct: 2,
      explanation: '“Pick up” ở đây là đến lấy đồ. “Collect their food” diễn đạt cùng hành động nhận đồ ăn.'
    },
    {
      dialogueId: 't2-44',
      sentenceIndex: 1,
      lead: 'Nghe xem người nói muốn tận dụng cơ hội này để làm gì.',
      question: 'Họ muốn làm gì với sản phẩm mới?',
      clue: 'showcase the product',
      choices: ['Test the product', 'Show the product to others', 'Change the product design'],
      correct: 1,
      explanation: '“Showcase” nghĩa là giới thiệu hoặc trưng bày để người khác thấy sản phẩm, khớp với “show the product to others”.'
    }
  ]
}];
