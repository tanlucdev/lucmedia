import type { Metadata } from "next";
import { BangGiaPage } from "@/components/sections/BangGia";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ",
  description:
    "Bảng giá dịch vụ tăng like, follow, view — Tấn Lực 2026. Minh bạch, không phụ phí, cập nhật realtime.",
};

export default function Page() {
  return <BangGiaPage />;
}
