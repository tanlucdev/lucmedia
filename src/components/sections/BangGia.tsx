"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { SERVICE_DATA, CONTACT, type PlatformKey } from "@/data/services";
import { formatVND } from "@/lib/utils";

const PLATFORMS: { key: PlatformKey | "all"; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "facebook", label: "Facebook" },
  { key: "tiktok", label: "TikTok" },
  { key: "youtube", label: "YouTube" },
  { key: "instagram", label: "Instagram" },
  { key: "shopee", label: "Shopee" },
  { key: "telegram", label: "Telegram" },
  { key: "twitter", label: "Twitter / X" },
  { key: "threads", label: "Threads" },
  { key: "lazada", label: "Lazada" },
  { key: "google", label: "Google" },
];

const FAQ_ITEMS = [
  {
    q: "Thanh toán như thế nào?",
    a: "Chúng tôi nhận MoMo, chuyển khoản ngân hàng và ZaloPay. Sau khi xác nhận thanh toán, đơn hàng được xử lý trong vòng 5–30 phút.",
  },
  {
    q: "Bao lâu chạy xong?",
    a: "Đa số dịch vụ hoàn thành trong 5–60 phút kể từ lúc xác nhận đơn. Một số dịch vụ đặc biệt (view 4.000h, mở khóa) có thể mất 1–7 ngày.",
  },
  {
    q: "Có bảo hành không?",
    a: "Có. Tất cả dịch vụ có badge BH đều được bảo hành trọn đời — nếu tụt sẽ bù miễn phí, không giới hạn số lần.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="glass rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white hover:bg-white/5 transition"
          >
            {item.q}
            <ChevronDown
              className={`h-4 w-4 text-white/50 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-white/60 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function BangGiaPage() {
  const [activePlatform, setActivePlatform] = useState<PlatformKey | "all">("all");
  const [query, setQuery] = useState("");

  const flatServices = SERVICE_DATA.filter(
    (g) => activePlatform === "all" || g.platform === activePlatform
  ).flatMap((g) =>
    g.services.map((s) => ({
      ...s,
      platform: g.platform,
      label: g.label,
      brandColor: g.brandColor,
    }))
  ).filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Header />
      <main className="flex-1 pb-24 lg:pb-12">
        {/* Hero */}
        <section className="pt-14 pb-10 px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
              Cập nhật realtime · Không phụ phí
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Bảng giá{" "}
              <span className="text-gradient-brand">minh bạch</span>
            </h1>
            <p className="text-white/60 text-sm mb-6">
              Tìm dịch vụ trong 10 giây — đặt ngay không cần hỏi
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-white/50">
              {["MoMo", "Banking", "ZaloPay"].map((m) => (
                <span key={m} className="glass rounded-full px-3 py-1">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 space-y-6">
          {/* Filter bar */}
          <div className="overflow-x-auto no-scrollbar -mx-4 px-4">
            <div className="flex gap-2 min-w-max pb-1">
              {PLATFORMS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActivePlatform(p.key)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                    activePlatform === p.key
                      ? "btn-primary text-white"
                      : "glass text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {p.key !== "all" && (
                    <PlatformIcon platform={p.key as PlatformKey} className="h-3.5 w-3.5" />
                  )}
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm dịch vụ... (vd: like, follow, view)"
              className="w-full glass rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 bg-transparent outline-none focus:border-brand/60 transition"
            />
          </div>

          {/* Results count */}
          <div className="text-xs text-white/40">
            {flatServices.length} dịch vụ
            {activePlatform !== "all" && ` · ${PLATFORMS.find((p) => p.key === activePlatform)?.label}`}
            {query && ` · tìm kiếm "${query}"`}
          </div>

          {/* Service grid */}
          {flatServices.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {flatServices.map((s, i) => (
                <motion.div
                  key={`${s.platform}-${s.name}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  className="glass rounded-2xl p-4 flex flex-col gap-3 hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${s.brandColor} grid place-items-center shrink-0`}>
                        <PlatformIcon platform={s.platform as PlatformKey} className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs text-white/50">{s.label}</span>
                    </div>
                    {s.highlight && (
                      <span className="shrink-0 rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                        HOT
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white leading-snug">
                      {s.name}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">{s.unit}</div>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="text-lg font-bold text-gradient-brand">
                      {formatVND(s.price)}
                    </div>
                    <a
                      href={`https://zalo.me/${CONTACT.phone}?text=${encodeURIComponent(`Tôi muốn đặt: ${s.label} - ${s.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary shrink-0 rounded-xl px-3 py-2 text-xs font-semibold text-white transition"
                    >
                      Đặt ngay →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl p-10 text-center text-white/40 text-sm">
              Không tìm thấy dịch vụ phù hợp.{" "}
              <a href={CONTACT.zalo} className="text-brand-soft hover:underline">
                Nhắn Zalo để hỏi →
              </a>
            </div>
          )}

          {/* FAQ */}
          <div className="pt-8">
            <h2 className="text-lg font-bold text-white mb-4">Câu hỏi thường gặp</h2>
            <FaqAccordion />
          </div>
        </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-4">
        <a
          href={CONTACT.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center gap-2 w-full rounded-2xl py-4 text-sm font-semibold text-white shadow-xl"
        >
          <MessageCircle className="h-4 w-4" />
          Không tìm thấy? Nhắn Zalo →
        </a>
      </div>

      <Footer />
    </>
  );
}
