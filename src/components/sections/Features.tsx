"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  BadgeDollarSign,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Xử lý trong 5 phút",
    desc: "Đơn hàng tự động chạy ngay sau khi thanh toán. Không cần chờ duyệt thủ công.",
    tint: "from-indigo-500/30 to-violet-500/10",
    ring: "ring-indigo-400/30",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành trọn đời",
    desc: "Tụt like/follow/view? Chúng tôi bù miễn phí cho đến khi đủ số lượng.",
    tint: "from-emerald-500/30 to-teal-400/10",
    ring: "ring-emerald-400/30",
  },
  {
    icon: BadgeDollarSign,
    title: "Giá rẻ nhất thị trường",
    desc: "Từ 29.000đ/1.000 tương tác. Mua nhiều có chiết khấu lên tới 15%.",
    tint: "from-amber-500/30 to-orange-400/10",
    ring: "ring-amber-400/30",
  },
  {
    icon: Clock,
    title: "Hỗ trợ 24/7",
    desc: "Zalo · Telegram · Messenger — đội ngũ luôn online, trả lời dưới 2 phút.",
    tint: "from-sky-500/30 to-cyan-400/10",
    ring: "ring-sky-400/30",
  },
  {
    icon: Layers,
    title: "10 nền tảng phủ đủ",
    desc: "Facebook, TikTok, YouTube, Instagram, Shopee, Telegram, X, Threads, Google, Lazada.",
    tint: "from-fuchsia-500/30 to-pink-400/10",
    ring: "ring-fuchsia-400/30",
  },
  {
    icon: Sparkles,
    title: "Chất lượng người thật",
    desc: "Tương tác tự nhiên, có tên, có ảnh, chống bay sạch 90%+ theo camp.",
    tint: "from-rose-500/30 to-red-400/10",
    ring: "ring-rose-400/30",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            Tính năng
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Tất cả bạn cần để{" "}
            <span className="text-gradient-brand">tăng trưởng</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/60 text-base sm:text-lg"
          >
            Hạ tầng mạnh, giá minh bạch, quy trình tự động — bạn chỉ việc tập
            trung sản xuất nội dung.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.06] transition"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${f.tint} ring-1 ${f.ring} text-white`}
              >
                <f.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {f.desc}
              </p>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
