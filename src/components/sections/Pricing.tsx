"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Flame, TrendingUp } from "lucide-react";
import { CONTACT, SERVICE_DATA, type PlatformKey } from "@/data/services";
import { formatVND } from "@/lib/utils";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

const PLATFORM_COLORS: Record<PlatformKey, string> = {
  facebook: "text-[#1877f2]",
  tiktok: "text-white",
  youtube: "text-[#ff0000]",
  instagram: "text-[#dd2a7b]",
  shopee: "text-[#ee4d2d]",
  twitter: "text-white",
  threads: "text-white",
  telegram: "text-[#2aabee]",
  google: "text-[#4285f4]",
  lazada: "text-[#f3327f]",
};

const PLATFORM_BG: Record<PlatformKey, string> = {
  facebook: "bg-[#1877f2]/20",
  tiktok: "bg-white/15",
  youtube: "bg-[#ff0000]/20",
  instagram: "bg-[#dd2a7b]/20",
  shopee: "bg-[#ee4d2d]/20",
  twitter: "bg-white/15",
  threads: "bg-white/15",
  telegram: "bg-[#2aabee]/20",
  google: "bg-[#4285f4]/20",
  lazada: "bg-[#f3327f]/20",
};

export function Pricing() {
  const [active, setActive] = useState<PlatformKey>("facebook");
  const group = SERVICE_DATA.find((g) => g.platform === active)!;

  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70"
          >
            <Flame className="h-3.5 w-3.5 text-orange-300" />
            Bảng giá chi tiết
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Giá niêm yết,{" "}
            <span className="text-gradient-brand">không phụ phí</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/60 text-base sm:text-lg"
          >
            Chọn nền tảng — xem giá — đặt ngay. Thanh toán Momo / Banking / Zalo Pay.
          </motion.p>
        </div>

        {/* Platform tabs */}
        <div className="mt-10 flex overflow-x-auto no-scrollbar">
          <div className="mx-auto glass rounded-2xl p-1.5 flex gap-1 min-w-max">
            {SERVICE_DATA.map((g) => {
              const isActive = g.platform === active;
              return (
                <button
                  key={g.platform}
                  onClick={() => setActive(g.platform)}
                  className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium whitespace-nowrap transition ${
                    isActive ? "text-white" : "text-white/55 hover:text-white/90"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                      className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                    />
                  )}
                  <span className={`relative h-5 w-5 shrink-0 ${isActive ? PLATFORM_COLORS[g.platform] : "text-white/40"}`}>
                    <PlatformIcon platform={g.platform} className="h-5 w-5" />
                  </span>
                  <span className="relative">{g.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={group.platform}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="glass-strong rounded-3xl p-6 sm:p-7 overflow-hidden relative">
              <div
                className={`absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${group.brandColor}`}
              />
              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-[0.18em]">Nền tảng</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-2xl ${PLATFORM_BG[group.platform]} grid place-items-center shrink-0`}>
                      <PlatformIcon
                        platform={group.platform}
                        className={`h-6 w-6 ${PLATFORM_COLORS[group.platform]}`}
                      />
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                      {group.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-white/60">{group.tagline}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="glass rounded-2xl px-4 py-3 text-center">
                    <div className="font-display text-xl font-bold text-white">
                      {group.services.length}
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                      Dịch vụ
                    </div>
                  </div>
                  <div className="glass rounded-2xl px-4 py-3 text-center hidden sm:block">
                    <div className="font-display text-xl font-bold text-emerald-400">
                      5 phút
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                      Xử lý
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.07] hover:border-white/20 transition"
                  >
                    {s.highlight && (
                      <div className="absolute -top-2 right-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        <TrendingUp className="h-2.5 w-2.5" strokeWidth={3} />
                        HOT
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-8 w-8 shrink-0 rounded-xl ${PLATFORM_BG[group.platform]} grid place-items-center`}>
                        <PlatformIcon
                          platform={group.platform}
                          className={`h-4 w-4 ${PLATFORM_COLORS[group.platform]}`}
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm leading-snug">
                          {s.name}
                        </div>
                        <div className="text-xs text-white/50 mt-0.5">{s.unit}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="font-display text-xl font-bold text-white tabular-nums">
                        {formatVND(s.price)}
                      </div>
                      <a
                        href={`https://zalo.me/${CONTACT.phone}?text=${encodeURIComponent(`Tôi muốn đặt: ${group.label} - ${s.name}`)}`}
                        className="inline-flex items-center gap-1 rounded-lg bg-white/10 hover:bg-indigo-500 border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-white transition"
                      >
                        Đặt
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
