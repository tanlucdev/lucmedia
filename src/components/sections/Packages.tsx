"use client";

import { motion } from "framer-motion";
import { Check, Crown, Rocket, Star } from "lucide-react";
import { CONTACT } from "@/data/services";

const PACKAGES = [
  {
    key: "starter",
    name: "Khởi Đầu",
    price: 299000,
    tag: "Cho người mới",
    icon: Star,
    features: [
      "1.000 Like Facebook Bài Viết",
      "1.000 View TikTok",
      "500 Like Instagram",
      "Bảo hành 15 ngày",
      "Hỗ trợ qua Zalo",
    ],
    accent: "from-sky-400/20 to-sky-400/5",
    ring: "border-white/10",
    button: "bg-white/10 hover:bg-white/20 text-white",
  },
  {
    key: "pro",
    name: "Chuyên Nghiệp",
    price: 1499000,
    tag: "Phổ biến nhất",
    icon: Rocket,
    popular: true,
    features: [
      "5.000 Like Facebook + 2.000 Follow",
      "10.000 View + 1.000 Follow TikTok",
      "1.000 Sub YouTube",
      "Bảo hành trọn đời",
      "Hỗ trợ 24/7 ưu tiên",
      "Tư vấn chiến lược miễn phí",
    ],
    accent: "from-indigo-500/30 to-violet-500/10",
    ring: "border-indigo-400/40",
    button: "btn-primary text-white",
  },
  {
    key: "business",
    name: "Doanh Nghiệp",
    price: 4999000,
    tag: "Cho brand & shop",
    icon: Crown,
    features: [
      "Toàn bộ dịch vụ 10 nền tảng",
      "Mắt livestream + Viral boost",
      "Manager riêng chăm sóc",
      "Bảo hành trọn đời · SLA 99.9%",
      "Báo cáo hiệu quả hàng tuần",
      "Ưu tiên đơn hàng tức thì",
    ],
    accent: "from-emerald-400/20 to-teal-400/5",
    ring: "border-emerald-400/30",
    button: "bg-white text-indigo-950 hover:bg-white/90",
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70"
          >
            <Crown className="h-3.5 w-3.5 text-amber-300" />
            Gói đề xuất
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Chọn gói phù hợp{" "}
            <span className="text-gradient-brand">với bạn</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/60 text-base sm:text-lg"
          >
            Mua lẻ hoặc combo, đều có giá tốt. Không hài lòng — hoàn tiền trong
            7 ngày.
          </motion.p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative flex flex-col glass-strong rounded-3xl p-7 border-2 ${p.ring} ${
                p.popular ? "lg:scale-[1.03] lg:z-10 glow" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                    Phổ biến nhất
                  </div>
                </div>
              )}

              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.accent} grid place-items-center border border-white/10`}>
                <p.icon className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>

              <div className="mt-5">
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  {p.tag}
                </div>
                <h3 className="font-display mt-1 text-2xl font-bold text-white">
                  {p.name}
                </h3>
              </div>

              <div className="mt-5 flex items-end gap-1.5">
                <span className="font-display text-4xl font-bold text-white tabular-nums">
                  {new Intl.NumberFormat("vi-VN").format(p.price)}
                </span>
                <span className="text-white/50 pb-1.5">đ / gói</span>
              </div>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://zalo.me/${CONTACT.phone}?text=${encodeURIComponent("Tôi muốn đặt gói " + p.name)}`}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition ${p.button}`}
              >
                Chọn gói {p.name}
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
