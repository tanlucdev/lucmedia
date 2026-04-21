import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { PLATFORM_BENEFITS } from "@/data/platform-benefits";
import { SERVICE_DATA, CONTACT, type PlatformKey } from "@/data/services";
import { formatVND } from "@/lib/utils";

type Props = {
  params: Promise<{ platform: string }>;
};

export async function generateStaticParams() {
  return PLATFORM_BENEFITS.map((p) => ({ platform: p.platform }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { platform } = await params;
  const data = PLATFORM_BENEFITS.find((p) => p.platform === platform);
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  };
}

export default async function Page({ params }: Props) {
  const { platform } = await params;
  const data = PLATFORM_BENEFITS.find((p) => p.platform === platform);
  if (!data) notFound();

  const serviceGroup = SERVICE_DATA.find((g) => g.platform === (platform as PlatformKey));
  const otherPlatforms = PLATFORM_BENEFITS.filter((p) => p.platform !== platform);

  const platformLabel =
    platform === "twitter"
      ? "Twitter / X"
      : platform.charAt(0).toUpperCase() + platform.slice(1);

  return (
    <>
      <Header />
      <main className="flex-1 pb-12">
        {/* Hero */}
        <section className="pt-14 pb-12 px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-5 h-16 w-16 rounded-2xl glass-strong grid place-items-center">
              <PlatformIcon platform={platform as PlatformKey} className="h-8 w-8 text-white" />
            </div>
            <div className="inline-block glass rounded-full px-3 py-1 text-xs text-white/50 mb-4">
              {platformLabel}
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {data.headline}
            </h1>
            <p className="text-white/60 text-sm">{data.subheadline}</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 space-y-12">
          {/* Benefits */}
          <section>
            <h2 className="text-lg font-bold text-white mb-5">
              {data.benefits.length} lợi ích quan trọng
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.benefits.map((b, i) => (
                <div key={i} className="glass rounded-2xl p-5 flex gap-4">
                  <div className="text-2xl shrink-0 mt-0.5">{b.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{b.title}</div>
                    <div className="text-xs text-white/55 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related services */}
          {serviceGroup && (
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${serviceGroup.brandColor} grid place-items-center shrink-0`}>
                  <PlatformIcon platform={platform as PlatformKey} className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">
                  Dịch vụ {platformLabel} của Tấn Lực
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceGroup.services.map((s) => (
                  <div
                    key={s.name}
                    className="glass rounded-2xl p-4 flex flex-col gap-3 hover:bg-white/[0.06] transition"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-sm font-semibold text-white leading-snug">{s.name}</div>
                      {s.highlight && (
                        <span className="shrink-0 rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                          HOT
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-white/40">{s.unit}</div>
                    <div className="mt-auto flex items-center justify-between gap-2">
                      <div className="text-base font-bold text-gradient-brand">
                        {formatVND(s.price)}
                      </div>
                      <a
                        href={`https://zalo.me/${CONTACT.phone}?text=${encodeURIComponent(`Tôi muốn đặt: ${platformLabel} - ${s.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary shrink-0 rounded-xl px-3 py-2 text-xs font-semibold text-white transition"
                      >
                        Đặt ngay →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="glass-strong rounded-3xl p-8 text-center">
            <h2 className="font-display text-xl font-bold text-white mb-3">
              Sẵn sàng tăng trưởng {platformLabel} ngay hôm nay?
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Phản hồi trong 15 phút · Thanh toán sau khi xử lý
            </p>
            <a
              href={`${CONTACT.zalo}?text=${encodeURIComponent(`Tôi muốn tăng tương tác ${platformLabel}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Nhắn Zalo tư vấn →
            </a>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">
              Xem thêm lợi ích các nền tảng khác
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherPlatforms.map((p) => (
                <Link
                  key={p.platform}
                  href={`/loi-ich/${p.platform}`}
                  className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  <PlatformIcon platform={p.platform} className="h-3.5 w-3.5" />
                  {p.platform === "twitter" ? "Twitter / X" : p.platform.charAt(0).toUpperCase() + p.platform.slice(1)}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
