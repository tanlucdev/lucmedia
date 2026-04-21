"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  TrendingUp,
  UserPlus,
  Users,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { TOTAL_SERVICES } from "@/data/services";
import Image from "next/image";

const LIVE_FEEDS = [
  { icon: Heart, label: "Like đang chạy", value: "12.470", platform: "Facebook", color: "text-blue-400", bg: "bg-blue-400/15" },
  { icon: UserPlus, label: "Follow hoàn thành", value: "8.900", platform: "TikTok", color: "text-white", bg: "bg-white/10" },
  { icon: Eye, label: "View đang xử lý", value: "55.200", platform: "YouTube", color: "text-red-400", bg: "bg-red-400/15" },
  { icon: Users, label: "Sub mới hôm nay", value: "3.100", platform: "YouTube", color: "text-red-400", bg: "bg-red-400/15" },
  { icon: Heart, label: "Like IG", value: "6.400", platform: "Instagram", color: "text-pink-400", bg: "bg-pink-400/15" },
];

const RECENT_ORDERS = [
  { emoji: "🎵", name: "TikTok · 10.000 View", meta: "Vừa hoàn thành", ok: true },
  { emoji: "📘", name: "FB Fanpage · 2.000 Like", meta: "Đang chạy...", ok: false },
  { emoji: "▶️", name: "YouTube · 500 Sub", meta: "Vừa hoàn thành", ok: true },
];

export function Hero() {
  const [feedIdx, setFeedIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFeedIdx((p) => (p + 1) % LIVE_FEEDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const feed = LIVE_FEEDS[feedIdx];

  return (
    <section className="relative pt-10 lg:pt-20 pb-16 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[560px] grid-bg opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/80 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 pulse-dot" />
                <span className="relative rounded-full bg-emerald-400 h-2 w-2" />
              </span>
              <span className="font-medium">Hơn 50.000 đơn xử lý tháng trước</span>
              <span className="text-white/40">·</span>
              <span className="text-white/60">Uptime 99.9%</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-[-0.02em]"
            >
              <span className="text-white">Tăng trưởng</span>
              <br />
              <span className="text-gradient-brand">mạng xã hội</span>
              <br />
              <span className="text-white/90">cực nhanh, cực an toàn.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
            >
              {TOTAL_SERVICES}+ dịch vụ trên 10 nền tảng. Giá niêm yết minh bạch,
              bảo hành trọn đời, xử lý trong 5 phút.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <a
                href="#pricing"
                className="btn-primary group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition"
              >
                Xem bảng giá
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#packages"
                className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] transition"
              >
                Chọn gói đề xuất
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-3 max-w-md"
            >
              {[
                { k: "50+", v: "Dịch vụ" },
                { k: "10", v: "Nền tảng" },
                { k: "24/7", v: "Hỗ trợ" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-3 text-center">
                  <div className="font-display text-xl font-bold text-white">{s.k}</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Live dashboard card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative lg:pl-8"
          >
            <DashboardCard feed={feed} feedIdx={feedIdx} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  feed,
  feedIdx,
}: {
  feed: (typeof LIVE_FEEDS)[number];
  feedIdx: number;
}) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Floating badge — live viewers */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 sm:-left-10 top-10 z-20 glass rounded-2xl p-4 shadow-2xl hidden sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Users className="h-4.5 w-4.5" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[10px] text-white/50 uppercase tracking-wider">Khách hôm nay</div>
            <div className="font-display text-base font-bold text-white">1.284 đơn</div>
          </div>
        </div>
      </motion.div>

      {/* Floating live metric — cycles */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 sm:-right-8 top-40 z-20 glass rounded-2xl p-3 shadow-2xl min-w-[140px] hidden sm:block"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={feedIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5"
          >
            <div className={`grid h-9 w-9 place-items-center rounded-xl shrink-0 ${feed.bg} ${feed.color}`}>
              <feed.icon className="h-4.5 w-4.5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[10px] text-white/50 leading-tight">{feed.label}</div>
              <div className={`font-display text-base font-bold tabular-nums ${feed.color}`}>
                +{feed.value}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main card */}
      <div className="relative glass-strong rounded-[32px] p-6 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-xl overflow-hidden">
                <Image src="/android-chrome-512x512.png" alt="TL" fill className="object-cover" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider">Dashboard</div>
                <div className="text-xs text-white font-semibold">Tấn Lực</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 glass rounded-full px-2.5 py-1 text-[10px] font-medium text-emerald-300 border border-emerald-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
              Đang chạy
            </div>
          </div>

          {/* Live stats row */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Like đang xử lý</div>
              <div className="mt-1 font-display text-2xl font-bold text-white tabular-nums">24.710</div>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                <span>+1.280 / giờ</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Follow đang chạy</div>
              <div className="mt-1 font-display text-2xl font-bold text-white tabular-nums">9.450</div>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-indigo-400">
                <TrendingUp className="h-3 w-3" />
                <span>+640 / giờ</span>
              </div>
            </div>
          </div>

          {/* Live progress bar */}
          <div className="mt-4 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70 font-medium">Đơn hàng đang chạy</span>
              <span className="text-emerald-400 font-semibold tabular-nums">247 / 300</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "60%" }}
                animate={{ width: "82%" }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400"
              />
            </div>
          </div>

          {/* Recent orders */}
          <div className="mt-4 space-y-2">
            {RECENT_ORDERS.map((o) => (
              <div
                key={o.name}
                className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center shrink-0 text-base">
                    {o.emoji}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white font-medium truncate">{o.name}</div>
                    <div className={`text-[10px] ${o.ok ? "text-emerald-400" : "text-amber-400"}`}>
                      {o.meta}
                    </div>
                  </div>
                </div>
                <CheckCircle2
                  className={`h-4 w-4 shrink-0 ${o.ok ? "text-emerald-400" : "text-white/20"}`}
                  strokeWidth={2.5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
