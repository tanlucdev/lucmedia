"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles, TrendingUp } from "lucide-react";
import { CONTACT } from "@/data/services";

export function MobileCTA() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-[40px] overflow-hidden relative">
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Đặt hàng mọi lúc
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
              >
                Tăng trưởng{" "}
                <span className="text-gradient-brand">mọi nơi, mọi lúc.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 text-white/60 text-base sm:text-lg max-w-lg"
              >
                Nhắn Zalo / gọi hotline — đặt dịch vụ trong 30 giây. Hệ thống tự
                chạy, bạn chỉ cần thư giãn.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href={CONTACT.zalo}
                  className="btn-primary inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Nhắn Zalo ngay
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="glass inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] transition"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phoneDisplay}
                </a>
              </motion.div>

              <div className="mt-8 flex items-center gap-6 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
                  Đang online
                </div>
                <div>Phản hồi trong 2 phút</div>
              </div>
            </div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="relative rounded-[48px] bg-gradient-to-b from-white/15 to-white/5 p-2.5 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="rounded-[40px] bg-gradient-to-b from-[#0b0d2a] to-[#05061a] aspect-[9/18] overflow-hidden border border-white/10 relative">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black/80 z-10" />

          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />

          <div className="relative pt-14 px-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] text-white/70">9:41</div>
              <div className="flex gap-1.5">
                <div className="h-1 w-1 rounded-full bg-white/70" />
                <div className="h-1 w-1 rounded-full bg-white/70" />
                <div className="h-1 w-1 rounded-full bg-white/70" />
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[10px] text-white/50 uppercase tracking-widest">
                Chào buổi sáng
              </div>
              <div className="font-display text-lg font-bold text-white mt-0.5">
                Anh Tấn Lực 👋
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-4 shadow-lg">
              <div className="text-[10px] text-white/80 uppercase tracking-wider">
                Số dư
              </div>
              <div className="font-display text-2xl font-bold text-white mt-0.5 tabular-nums">
                2.499.000đ
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-200 mt-1">
                <TrendingUp className="h-3 w-3" />
                +18% tháng này
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {["📘", "🎵", "▶️", "📸"].map((i, k) => (
                <div
                  key={k}
                  className="aspect-square rounded-xl bg-white/10 border border-white/10 grid place-items-center text-xl"
                >
                  {i}
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              {[
                { n: "TikTok Viral", v: "+39.000đ", g: "🎵" },
                { n: "FB Boost", v: "+149.000đ", g: "📘" },
              ].map((t) => (
                <div
                  key={t.n}
                  className="flex items-center justify-between rounded-xl bg-white/[0.05] border border-white/5 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-base">{t.g}</div>
                    <div className="text-[11px] text-white/80 font-medium">
                      {t.n}
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-400 tabular-nums font-semibold">
                    {t.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-24 glass rounded-2xl px-3 py-2 text-[11px] font-semibold text-emerald-300 border border-emerald-400/20"
      >
        ● Đơn đã chạy
      </motion.div>
    </div>
  );
}
