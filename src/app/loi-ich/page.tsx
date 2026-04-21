import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { PLATFORM_BENEFITS } from "@/data/platform-benefits";

export const metadata: Metadata = {
  title: "Lợi Ích Tăng Tương Tác",
  description:
    "Lợi ích tăng tương tác mạng xã hội — Facebook, TikTok, YouTube, Instagram, Shopee và 6 nền tảng khác. Tìm hiểu tại sao cần tăng follow, like, view.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-12">
        <section className="pt-14 pb-10 px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Lợi ích tăng tương tác{" "}
              <span className="text-gradient-brand">mạng xã hội</span>
            </h1>
            <p className="text-white/60 text-sm">
              Tìm hiểu tại sao tăng like, follow, view lại quan trọng cho từng nền tảng — và cách chúng tôi giúp bạn tăng trưởng.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORM_BENEFITS.map((p) => (
              <Link
                key={p.platform}
                href={`/loi-ich/${p.platform}`}
                className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition group flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center shrink-0">
                    <PlatformIcon platform={p.platform} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white capitalize">
                      {p.platform === "twitter" ? "Twitter / X" : p.platform.charAt(0).toUpperCase() + p.platform.slice(1)}
                    </div>
                    <div className="text-xs text-white/40">{p.benefits.length} lợi ích</div>
                  </div>
                </div>
                <p className="text-xs text-white/55 leading-relaxed flex-1">{p.subheadline}</p>
                <div className="text-xs text-brand-soft group-hover:underline">
                  Xem chi tiết →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
