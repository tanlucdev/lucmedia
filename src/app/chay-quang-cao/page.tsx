import type { Metadata } from "next";
import { ChayQuangCaoPage } from "@/components/sections/ChayQuangCao";

export const metadata: Metadata = {
  title: "Chạy Quảng Cáo Facebook",
  description:
    "Dịch vụ chạy quảng cáo Facebook Ads uy tín — Tấn Lực. Quản lý A–Z, báo cáo hàng tuần, không ép cam kết.",
};

export default function Page() {
  return <ChayQuangCaoPage />;
}
