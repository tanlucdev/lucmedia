import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://dichvu-tanluc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tấn Lực — Dịch vụ Facebook, TikTok, YouTube uy tín #1 Việt Nam",
    template: "%s · Dịch Vụ Tấn Lực",
  },
  description:
    "Bảng giá dịch vụ tăng like, follow, view, comment Facebook, TikTok, YouTube, Instagram, Shopee... Tốc độ cao, giá rẻ, bảo hành trọn đời. Hotline 0878272222.",
  keywords: [
    "dịch vụ facebook",
    "tăng like facebook",
    "tăng follow tiktok",
    "tăng view youtube",
    "tăng sub youtube",
    "tăng like instagram",
    "dịch vụ tấn lực",
    "bảng giá mxh",
    "tăng tương tác mạng xã hội",
  ],
  authors: [{ name: "Tấn Lực" }],
  creator: "Tấn Lực",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Dịch Vụ Tấn Lực",
    title: "Tấn Lực — Dịch vụ MXH uy tín, giá tốt nhất thị trường",
    description:
      "Hơn 50 dịch vụ tăng like, follow, view cho 10 nền tảng. Xử lý trong 5 phút, bảo hành trọn đời.",
    images: [{ url: "/android-chrome-512x512.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dịch Vụ Tấn Lực",
    description: "Tăng trưởng mạng xã hội thần tốc, giá rẻ, uy tín.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#05061a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
