export type Service = {
  name: string;
  unit: string;
  price: number | null;
  highlight?: boolean;
};

export type PlatformKey =
  | "facebook"
  | "tiktok"
  | "youtube"
  | "instagram"
  | "shopee"
  | "twitter"
  | "threads"
  | "telegram"
  | "google"
  | "lazada";

export type ServiceGroup = {
  platform: PlatformKey;
  label: string;
  tagline: string;
  brandColor: string;
  accent: string;
  services: Service[];
};

export const SERVICE_DATA: ServiceGroup[] = [
  {
    platform: "facebook",
    label: "Facebook",
    tagline: "Tăng trưởng fanpage & cá nhân",
    brandColor: "from-[#1877f2] to-[#4e8cff]",
    accent: "#1877f2",
    services: [
      { name: "Like Bài Viết", unit: "/1.000 like", price: 49000, highlight: true },
      { name: "Follow Cá Nhân", unit: "/1.000 follow", price: 149000 },
      { name: "Like Fanpage", unit: "/1.000 like", price: 149000 },
      { name: "Like Bình Luận", unit: "/1.000 like", price: 49000 },
      { name: "Bình Luận Bài Viết", unit: "/1.000 cmt", price: 300000 },
      { name: "Chia Sẻ Bài Viết", unit: "/1.000 share", price: 49000 },
      { name: "Member Group", unit: "/1.000 mem", price: 199000, highlight: true },
      { name: "Lọc Bạn Bè Không Tương Tác", unit: "/1.000 bạn", price: 99000 },
      { name: "Đổi Tên Fanpage", unit: "/1 lần", price: 500000 },
      { name: "Mở Khóa Facebook", unit: "/1 lần", price: null },
    ],
  },
  {
    platform: "tiktok",
    label: "TikTok",
    tagline: "Viral ngay từ video đầu tiên",
    brandColor: "from-[#ff0050] to-[#00f2ea]",
    accent: "#ff0050",
    services: [
      { name: "Like TikTok", unit: "/1.000 like", price: 99000, highlight: true },
      { name: "Like Bình Luận", unit: "/1.000 like", price: 99000 },
      { name: "Follow TikTok", unit: "/1.000 follow", price: 149000 },
      { name: "View TikTok", unit: "/1.000 view", price: 39000, highlight: true },
      { name: "Comment TikTok", unit: "/1.000 cmt", price: 299000 },
      { name: "Chia Sẻ TikTok", unit: "/1.000 share", price: 199000 },
      { name: "Yêu Thích (Favorite)", unit: "/1.000 fav", price: 39000 },
      { name: "Mắt Livestream", unit: "/1.000 mắt", price: 399000 },
    ],
  },
  {
    platform: "youtube",
    label: "YouTube",
    tagline: "Bật kiếm tiền siêu tốc",
    brandColor: "from-[#ff0000] to-[#ff6161]",
    accent: "#ff0000",
    services: [
      { name: "View YouTube", unit: "/1.000 view", price: 99000 },
      { name: "View 4.000H Kiếm Tiền", unit: "/1 kênh", price: 1190000, highlight: true },
      { name: "Mắt Livestream (30p)", unit: "/1.000 mắt", price: 199000 },
      { name: "Comment YouTube", unit: "/1.000 cmt", price: 399000 },
      { name: "Like Comment", unit: "/1.000 like", price: 69000 },
      { name: "Sub YouTube", unit: "/1.000 sub", price: 799000, highlight: true },
      { name: "Like YouTube", unit: "/1.000 like", price: 99000 },
    ],
  },
  {
    platform: "instagram",
    label: "Instagram",
    tagline: "Bùng nổ tương tác theo ảnh",
    brandColor: "from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    accent: "#dd2a7b",
    services: [
      { name: "Like Instagram", unit: "/1.000 like", price: 59000, highlight: true },
      { name: "Comment Instagram", unit: "/1.000 cmt", price: 399000 },
      { name: "Follow Instagram", unit: "/1.000 follow", price: 199000 },
      { name: "View Instagram", unit: "/1.000 view", price: 29000, highlight: true },
      { name: "Mắt Livestream IG", unit: "/1.000 mắt", price: 299000 },
    ],
  },
  {
    platform: "shopee",
    label: "Shopee",
    tagline: "Đẩy top sản phẩm & shop",
    brandColor: "from-[#ee4d2d] to-[#ff8a5b]",
    accent: "#ee4d2d",
    services: [
      { name: "Love Shopee", unit: "/1.000 lượt", price: 99000, highlight: true },
      { name: "Like Review", unit: "/1.000 like", price: 99000 },
      { name: "Mắt Livestream (30p)", unit: "/1.000 mắt", price: 599000 },
      { name: "Follow Shopee", unit: "/1.000 follow", price: 149000 },
    ],
  },
  {
    platform: "twitter",
    label: "X / Twitter",
    tagline: "Lan toả tức thì",
    brandColor: "from-[#0f141a] to-[#4a5568]",
    accent: "#1d9bf0",
    services: [
      { name: "Like Twitter", unit: "/1.000 like", price: 99000 },
      { name: "Follow Twitter", unit: "/1.000 follow", price: 599000, highlight: true },
      { name: "View Twitter", unit: "/1.000 view", price: 29000 },
      { name: "Vip View (1 tháng)", unit: "/1.000 view", price: 99000, highlight: true },
      { name: "ReTweet", unit: "/1.000 rt", price: 399000 },
    ],
  },
  {
    platform: "threads",
    label: "Threads",
    tagline: "Kênh mới, cơ hội mới",
    brandColor: "from-[#000000] to-[#2d3748]",
    accent: "#818cf8",
    services: [
      { name: "Follow Threads", unit: "/1.000 follow", price: 399000, highlight: true },
      { name: "Like Threads", unit: "/1.000 like", price: 399000 },
    ],
  },
  {
    platform: "telegram",
    label: "Telegram",
    tagline: "Build cộng đồng chất",
    brandColor: "from-[#0088cc] to-[#54c4f0]",
    accent: "#0088cc",
    services: [
      { name: "Cảm Xúc Bài Viết", unit: "/1.000 lượt", price: 29000, highlight: true },
      { name: "Member & Sub", unit: "/1.000 mem", price: 149000, highlight: true },
    ],
  },
  {
    platform: "google",
    label: "Google",
    tagline: "Local SEO & uy tín doanh nghiệp",
    brandColor: "from-[#4285f4] via-[#ea4335] to-[#fbbc05]",
    accent: "#4285f4",
    services: [
      { name: "RIP Google Map", unit: "/1 lượt", price: 999000, highlight: true },
      { name: "Review 5 Sao Google Map", unit: "/1 review", price: 29000, highlight: true },
      { name: "Follow Google Map", unit: "/1.000 follow", price: 299000 },
    ],
  },
  {
    platform: "lazada",
    label: "Lazada",
    tagline: "Tăng uy tín cho shop",
    brandColor: "from-[#0f156d] to-[#f3327f]",
    accent: "#f3327f",
    services: [
      { name: "Sub Lazada", unit: "/1.000 sub", price: 399000, highlight: true },
    ],
  },
];

export const CONTACT = {
  phone: "0878272222",
  phoneDisplay: "0878 272 222",
  brand: "Tấn Lực",
  brandFull: "Dịch Vụ Facebook Tấn Lực",
  zalo: "https://zalo.me/0878272222",
  facebook: "https://fb.com/tanluc.dev",
  email: "tanluc.dev@gmail.com",
};

export const TOTAL_SERVICES = SERVICE_DATA.reduce(
  (sum, g) => sum + g.services.length,
  0
);
