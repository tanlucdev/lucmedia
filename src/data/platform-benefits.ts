import type { PlatformKey } from "@/data/services";

export type PlatformBenefit = {
  platform: PlatformKey;
  headline: string;
  subheadline: string;
  benefits: { icon: string; title: string; desc: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const PLATFORM_BENEFITS: PlatformBenefit[] = [
  {
    platform: "facebook",
    headline: "Tại sao tăng Like & Follow Facebook lại quan trọng?",
    subheadline: "Fanpage nhiều tương tác = thuật toán đề xuất nhiều hơn = khách hàng tìm đến bạn.",
    benefits: [
      {
        icon: "📈",
        title: "Tăng độ tin cậy",
        desc: "Fanpage có nhiều like & follow được người dùng tin tưởng hơn. Khách hàng mới thường kiểm tra số lượng follow trước khi liên hệ.",
      },
      {
        icon: "🤖",
        title: "Thuật toán ưu tiên",
        desc: "Facebook đẩy bài viết từ fanpage có tỷ lệ tương tác cao lên newsfeed nhiều hơn, giúp bạn tiếp cận organic miễn phí.",
      },
      {
        icon: "💰",
        title: "Giảm chi phí quảng cáo",
        desc: "Fanpage có social proof tốt giúp quảng cáo Facebook Ads có CTR cao hơn, giảm CPC đáng kể.",
      },
      {
        icon: "🤝",
        title: "Thu hút đối tác & cộng tác",
        desc: "Brand, nhà cung cấp và đối tác thường lọc fanpage theo số lượng tương tác khi tìm kiếm hợp tác.",
      },
      {
        icon: "🔒",
        title: "Bảo vệ thương hiệu",
        desc: "Fanpage lớn khó bị báo cáo giả mạo và được Facebook hỗ trợ xử lý nhanh hơn khi có sự cố.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Like Follow Facebook",
    seoDescription:
      "Lợi ích tăng like follow facebook — tại sao cần tăng follow facebook, tác dụng của tăng tương tác fanpage. Dịch vụ tăng like Facebook uy tín Tấn Lực.",
  },
  {
    platform: "tiktok",
    headline: "Tại sao tăng Follow & View TikTok lại quan trọng?",
    subheadline: "TikTok ưu tiên content từ account có engagement cao — follow nhiều = FYP rộng hơn.",
    benefits: [
      {
        icon: "🔥",
        title: "Lên FYP dễ hơn",
        desc: "TikTok đánh giá tỷ lệ xem video / follow khi quyết định đẩy lên For You Page. Account có nhiều follow & view sẽ được ưu tiên.",
      },
      {
        icon: "⚡",
        title: "Thuật toán viral nhanh hơn",
        desc: "Video đầu tiên được đẩy tới một nhóm nhỏ. Tỷ lệ xem cao → đẩy rộng hơn. Follow lớn giúp video vượt qua bài test ban đầu.",
      },
      {
        icon: "💼",
        title: "Thu hút hợp đồng brand deal",
        desc: "Brand tìm KOL TikTok thường lọc theo follower tối thiểu. 10k follow mở ra cơ hội bình luận trên video và link bio.",
      },
      {
        icon: "💸",
        title: "Monetize sớm hơn",
        desc: "TikTok Creator Fund yêu cầu tối thiểu 10.000 follow và 100.000 view trong 30 ngày. Đạt ngưỡng sớm = thu nhập sớm hơn.",
      },
      {
        icon: "📊",
        title: "Tăng reach organic",
        desc: "Account có nhiều follow được TikTok coi là creator chất lượng, nhận được nhiều impression organic hơn mỗi lần đăng video.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Follow View TikTok",
    seoDescription:
      "Lợi ích tăng view tiktok, tăng follow tiktok có tốt không — giải thích chi tiết tại sao cần tăng tương tác TikTok. Dịch vụ tăng follow TikTok uy tín.",
  },
  {
    platform: "youtube",
    headline: "Tại sao tăng Sub & View YouTube lại quan trọng?",
    subheadline: "1.000 sub + 4.000 giờ xem = bật kiếm tiền. Mỗi view là dữ liệu tốt cho thuật toán.",
    benefits: [
      {
        icon: "💰",
        title: "Bật kiếm tiền YouTube",
        desc: "Điều kiện bật kiếm tiền: 1.000 subscriber và 4.000 giờ xem trong 12 tháng. Đây là bước đầu tiên để có thu nhập từ YouTube.",
      },
      {
        icon: "📡",
        title: "Thuật toán đề xuất",
        desc: "YouTube ưu tiên hiển thị video từ kênh có watch time cao và sub rate tốt trong phần Suggested và Home.",
      },
      {
        icon: "🎯",
        title: "Tăng uy tín kênh",
        desc: "Kênh nhiều sub được người xem tin tưởng hơn, dẫn đến tỷ lệ subscribe của khán giả mới cao hơn — hiệu ứng cộng dồn.",
      },
      {
        icon: "🤝",
        title: "Mở cơ hội brand deal",
        desc: "Brand thường tìm kiếm kênh từ 10k sub trở lên để hợp tác. Sub cao = doanh thu từ sponsorship tiềm năng cao hơn.",
      },
      {
        icon: "🔔",
        title: "Thông báo video mới",
        desc: "Subscriber nhận thông báo khi bạn đăng video mới, tạo lượng view ban đầu ổn định giúp video được xếp hạng cao hơn.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Sub View YouTube",
    seoDescription:
      "Lợi ích tăng sub youtube, tăng view youtube 4000h kiếm tiền — cách tăng subscriber YouTube hiệu quả. Dịch vụ tăng sub YouTube uy tín Tấn Lực.",
  },
  {
    platform: "instagram",
    headline: "Tại sao tăng Follow & Like Instagram lại quan trọng?",
    subheadline: "Instagram thưởng cho tài khoản có tương tác cao bằng cách đẩy lên Explore và Reels.",
    benefits: [
      {
        icon: "🔍",
        title: "Lên trang Explore",
        desc: "Instagram đẩy bài có engagement cao (like + comment + save / số follow) lên trang Explore, giúp bạn tiếp cận người dùng mới miễn phí.",
      },
      {
        icon: "✨",
        title: "Social proof mạnh",
        desc: "Ảnh / Reel nhiều like được người xem cho là chất lượng hơn và có xu hướng nhận được nhiều tương tác tiếp theo.",
      },
      {
        icon: "🛍️",
        title: "Tăng chuyển đổi mua hàng",
        desc: "Instagram Shopping hoạt động hiệu quả hơn khi tài khoản có tương tác tốt. Khách hàng tin tưởng mua hàng từ shop có nhiều follower.",
      },
      {
        icon: "💼",
        title: "Thu hút brand collaboration",
        desc: "Micro-influencer Instagram (10k–100k follow) thường kiếm được nhiều brand deal nhất tính theo tỷ lệ engagement.",
      },
      {
        icon: "📱",
        title: "Reels được đề xuất rộng hơn",
        desc: "Tài khoản có engagement rate cao được Instagram phân phối Reels tới nhiều người dùng hơn, tạo cơ hội viral.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Follow Like Instagram",
    seoDescription:
      "Lợi ích tăng follow instagram, tăng like instagram có tốt không — giải thích thuật toán Instagram và tác dụng tăng tương tác. Dịch vụ tăng follow IG uy tín.",
  },
  {
    platform: "shopee",
    headline: "Tại sao tăng Follow & Love Shopee lại quan trọng?",
    subheadline: "Shopee ưu tiên hiển thị sản phẩm từ shop có nhiều tương tác và đánh giá tốt.",
    benefits: [
      {
        icon: "🏆",
        title: "Lên top tìm kiếm",
        desc: "Thuật toán Shopee xếp hạng sản phẩm dựa trên số lượt love, đánh giá và tỷ lệ chuyển đổi. Shop nhiều tương tác được lên top tự nhiên.",
      },
      {
        icon: "❤️",
        title: "Tăng tỷ lệ thêm vào yêu thích",
        desc: "Sản phẩm có nhiều love được người mua coi là phổ biến và đáng tin cậy, dẫn đến tỷ lệ thêm vào giỏ hàng cao hơn.",
      },
      {
        icon: "📢",
        title: "Voucher & Flash Sale ưu tiên",
        desc: "Shop có nhiều follow được Shopee ưu tiên invite tham gia Flash Sale và nhận voucher từ chương trình khuyến mãi của nền tảng.",
      },
      {
        icon: "⭐",
        title: "Tăng uy tín shop",
        desc: "Follow cao giúp shop được gắn nhãn 'Yêu Thích' nhanh hơn, tăng sự tin tưởng của người mua lần đầu.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Follow Love Shopee",
    seoDescription:
      "Lợi ích tăng follow shopee, tăng love shopee có tốt không — cách lên top tìm kiếm Shopee hiệu quả. Dịch vụ tăng follow Shopee uy tín Tấn Lực.",
  },
  {
    platform: "telegram",
    headline: "Tại sao tăng Member Telegram lại quan trọng?",
    subheadline: "Channel / Group nhiều member = uy tín cao, dễ thu hút thêm thành viên mới.",
    benefits: [
      {
        icon: "👥",
        title: "Hiệu ứng mạng lưới",
        desc: "Channel nhiều member được người mới tin tưởng hơn khi quyết định tham gia. Member cao tạo social proof mạnh mẽ.",
      },
      {
        icon: "📣",
        title: "Lan truyền thông tin nhanh",
        desc: "Channel lớn truyền thông tin tới hàng nghìn người trong vài giây, hiệu quả hơn nhiều so với SMS hay email marketing.",
      },
      {
        icon: "💰",
        title: "Monetize cộng đồng",
        desc: "Channel 10k+ member có thể bán gói paid subscription, quảng cáo hoặc hợp tác với brand trong cùng niche.",
      },
      {
        icon: "🔐",
        title: "An toàn & riêng tư",
        desc: "Telegram không chia sẻ dữ liệu với bên thứ ba, phù hợp để xây dựng cộng đồng khách hàng thân thiết.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Member Telegram",
    seoDescription:
      "Lợi ích tăng member telegram — cách xây dựng channel telegram nhiều member hiệu quả. Dịch vụ tăng member Telegram uy tín Tấn Lực.",
  },
  {
    platform: "twitter",
    headline: "Tại sao tăng Follow Twitter / X lại quan trọng?",
    subheadline: "X / Twitter là nền tảng thảo luận realtime — follow nhiều = ý kiến lan rộng hơn.",
    benefits: [
      {
        icon: "📢",
        title: "Tăng tầm ảnh hưởng",
        desc: "Tweet từ account nhiều follow được retweet và quote nhiều hơn, lan truyền ý kiến và thương hiệu tới hàng triệu người.",
      },
      {
        icon: "🔑",
        title: "Xác minh uy tín",
        desc: "Account nhiều follow được coi là thought leader trong ngành, dễ nhận được lượt follow organic khi đăng nội dung chất lượng.",
      },
      {
        icon: "💼",
        title: "Networking B2B",
        desc: "Twitter là nơi nhiều CEO, investor và founder hoạt động. Account uy tín giúp tạo kết nối kinh doanh giá trị.",
      },
      {
        icon: "🚀",
        title: "Viral nhanh hơn",
        desc: "Tweet được nhiều tài khoản lớn follow → khi nhận retweet sẽ lan rộng theo cấp số nhân, dễ lên trending.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Follow Twitter X",
    seoDescription:
      "Lợi ích tăng follow twitter x — cách tăng ảnh hưởng trên X Twitter hiệu quả. Dịch vụ tăng follow Twitter uy tín Tấn Lực.",
  },
  {
    platform: "threads",
    headline: "Tại sao tăng Follow Threads lại quan trọng?",
    subheadline: "Threads còn mới — đây là thời điểm vàng để xây dựng audience trước khi cạnh tranh tăng cao.",
    benefits: [
      {
        icon: "⚡",
        title: "First mover advantage",
        desc: "Threads còn ở giai đoạn đầu. Xây dựng follow lớn ngay bây giờ giúp bạn dẫn đầu khi nền tảng bùng nổ người dùng.",
      },
      {
        icon: "🔗",
        title: "Liên kết Instagram",
        desc: "Threads kết nối trực tiếp với Instagram, follow trên Threads giúp tăng uy tín cross-platform cho toàn bộ thương hiệu cá nhân.",
      },
      {
        icon: "📈",
        title: "Thuật toán còn rộng mở",
        desc: "Thuật toán Threads hiện ưu tiên content đa dạng hơn Instagram, dễ lên explore hơn với engagement tốt.",
      },
      {
        icon: "🎯",
        title: "Tiếp cận khán giả mới",
        desc: "Người dùng Threads đến từ cộng đồng Instagram nhưng tìm kiếm nội dung kiểu Twitter — cơ hội tốt cho content creator.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Follow Threads",
    seoDescription:
      "Lợi ích tăng follow threads — tại sao nên xây dựng kênh Threads sớm. Dịch vụ tăng follow Threads uy tín Tấn Lực.",
  },
  {
    platform: "google",
    headline: "Tại sao tăng Review Google Map 5 Sao lại quan trọng?",
    subheadline: "Google Map là nơi khách hàng tìm kiếm trước khi quyết định mua — review quyết định tất cả.",
    benefits: [
      {
        icon: "🗺️",
        title: "Lên top Local SEO",
        desc: "Google ưu tiên hiển thị doanh nghiệp có nhiều review tốt trong phần 'Local Pack' — 3 kết quả đầu tiên trên bản đồ.",
      },
      {
        icon: "⭐",
        title: "Tỷ lệ chuyển đổi cao hơn",
        desc: "88% người dùng tin review online như lời khuyên từ bạn bè. Doanh nghiệp có 4.5+ sao có tỷ lệ click cao hơn 35%.",
      },
      {
        icon: "🛡️",
        title: "Bảo vệ thương hiệu",
        desc: "Nhiều review 5 sao giúp 'chôn vùi' review tiêu cực, duy trì điểm trung bình cao và bảo vệ uy tín doanh nghiệp.",
      },
      {
        icon: "📍",
        title: "Tăng lượng khách walk-in",
        desc: "Người dùng Google Maps thường lọc theo đánh giá. Doanh nghiệp 4+ sao nhận được gấp đôi lượt điện thoại từ khách địa phương.",
      },
      {
        icon: "🔍",
        title: "Cải thiện thứ hạng tìm kiếm",
        desc: "Google sử dụng review như một tín hiệu xếp hạng SEO. Nhiều review chất lượng giúp trang web của bạn lên thứ hạng cao hơn.",
      },
    ],
    seoTitle: "Lợi Ích Review Google Map 5 Sao",
    seoDescription:
      "Lợi ích review google map 5 sao — tại sao cần nhiều đánh giá Google và cách tăng review. Dịch vụ review Google Map uy tín Tấn Lực.",
  },
  {
    platform: "lazada",
    headline: "Tại sao tăng Sub Lazada lại quan trọng?",
    subheadline: "Sub Lazada = danh sách khách hàng thân thiết — nhận thông báo sale và tăng tỷ lệ mua lại.",
    benefits: [
      {
        icon: "🔔",
        title: "Thông báo sale & flash deal",
        desc: "Subscriber nhận thông báo khi shop có Flash Sale, Mega Sale hay voucher đặc biệt, tăng tỷ lệ quay lại mua hàng.",
      },
      {
        icon: "🏆",
        title: "Tăng thứ hạng shop",
        desc: "Lazada xếp hạng shop dựa trên số lượng follower và tỷ lệ tương tác. Shop nhiều sub được đề xuất trên trang chủ nhiều hơn.",
      },
      {
        icon: "💌",
        title: "Marketing trực tiếp miễn phí",
        desc: "Sub là kênh marketing miễn phí — gửi thông báo về sản phẩm mới, giảm giá mà không tốn chi phí quảng cáo.",
      },
      {
        icon: "⭐",
        title: "Tăng uy tín người bán",
        desc: "Shop có nhiều follower được người mua lần đầu tin tưởng hơn, giảm tỷ lệ bounce và tăng tỷ lệ thêm vào giỏ hàng.",
      },
    ],
    seoTitle: "Lợi Ích Tăng Sub Lazada",
    seoDescription:
      "Lợi ích tăng sub lazada — cách tăng follower Lazada và xây dựng kênh bán hàng hiệu quả. Dịch vụ tăng sub Lazada uy tín Tấn Lực.",
  },
];
