"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Phone,
  ChevronDown,
  Search,
  TrendingUp,
  Settings,
  BarChart3,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CONTACT } from "@/data/services";

const AUDIENCE_CARDS = [
  {
    icon: "🛍️",
    title: "Shop Online",
    desc: "Muốn tăng đơn hàng, giảm chi phí mỗi đơn (CPA)",
  },
  {
    icon: "🏪",
    title: "Doanh nghiệp nhỏ",
    desc: "Cần khách hàng mới, không có thời gian tự học ads",
  },
  {
    icon: "👤",
    title: "Personal Brand / KOL",
    desc: "Muốn mở rộng tệp, tăng nhận diện thương hiệu",
  },
  {
    icon: "🏠",
    title: "Bất động sản / Dịch vụ",
    desc: "Cần lead chất lượng, khách hàng tiềm năng thật",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Nghiên cứu",
    desc: "Phân tích đối thủ, tệp khách hàng, thị trường ngách",
    icon: Search,
  },
  {
    num: "02",
    title: "Lên chiến lược",
    desc: "Chọn mục tiêu campaign: traffic / lead / conversion / awareness",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Setup tài khoản",
    desc: "Cấu hình Ads Manager, Pixel, Custom Audience",
    icon: Settings,
  },
  {
    num: "04",
    title: "Sản xuất creative",
    desc: "Viết copy quảng cáo, tư vấn hình ảnh / video hiệu quả",
    icon: CheckCircle2,
  },
  {
    num: "05",
    title: "Chạy & tối ưu",
    desc: "Monitor hàng ngày, A/B test, điều chỉnh bid / budget",
    icon: TrendingUp,
  },
  {
    num: "06",
    title: "Báo cáo",
    desc: "Báo cáo kết quả hàng tuần: chi phí, reach, đơn hàng, ROAS",
    icon: BarChart3,
  },
];

const COMPARE_ROWS = [
  ["Mất 6–12 tháng tự học", "Chạy ngay trong 24h"],
  ["Dễ đốt tiền test mù", "Kinh nghiệm 100+ chiến dịch"],
  ["Không biết tối ưu đúng chỗ", "Tối ưu hàng ngày"],
  ["Không có báo cáo rõ ràng", "Báo cáo minh bạch hàng tuần"],
  ["Mất thời gian theo dõi", "Bạn tập trung vào sản phẩm"],
];

const COMMITMENTS = [
  {
    icon: Search,
    title: "Minh bạch 100%",
    desc: "Bạn giữ quyền truy cập Ads Manager, xem được mọi số liệu realtime.",
  },
  {
    icon: BarChart3,
    title: "Báo cáo hàng tuần",
    desc: "Chi phí, lượt tiếp cận, đơn hàng, ROAS — gửi qua Zalo mỗi thứ Hai.",
  },
  {
    icon: Shield,
    title: "Không ép cam kết",
    desc: "Làm tháng nào tính tháng đó. Không hài lòng — dừng bất cứ lúc nào.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Ngân sách quảng cáo tối thiểu là bao nhiêu?",
    a: "Khuyến nghị tối thiểu 3–5 triệu/tháng để có đủ data tối ưu. Ngân sách này trả thẳng cho Facebook, không qua chúng tôi.",
  },
  {
    q: "Phí dịch vụ tính như thế nào?",
    a: "Liên hệ Zalo để được báo giá — tuỳ theo ngành hàng, quy mô và mục tiêu chiến dịch.",
  },
  {
    q: "Tôi cần chuẩn bị gì?",
    a: "Fanpage, sản phẩm / dịch vụ muốn quảng cáo, và ngân sách dự kiến. Phần còn lại mình lo.",
  },
  {
    q: "Có đảm bảo ra đơn không?",
    a: "Không có dịch vụ nào đảm bảo 100% ra đơn — nhưng chúng tôi cam kết tối ưu để đạt CPA tốt nhất có thể.",
  },
  {
    q: "Tôi có kiểm soát được ngân sách không?",
    a: "Có. Bạn tự nạp tiền vào tài khoản Facebook của bạn, chúng tôi không giữ ngân sách.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

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

const zaloLink = `${CONTACT.zalo}?text=${encodeURIComponent("Tôi muốn tư vấn dịch vụ chạy quảng cáo Facebook")}`;

export function ChayQuangCaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* SECTION 1 — HERO */}
        <section className="pt-16 pb-14 px-4 text-center relative overflow-hidden">
          <div className="mx-auto max-w-3xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
              Miễn phí tư vấn · Không ép cam kết · Báo cáo hàng tuần
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-[2rem] sm:text-5xl font-bold text-white leading-tight mb-5"
            >
              Chạy Facebook Ads{" "}
              <span className="text-gradient-brand">ra đơn thật</span>
              <br />
              không đốt tiền
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-white/60 text-base mb-8"
            >
              Quản lý toàn bộ chiến dịch từ A–Z.{" "}
              <br className="hidden sm:block" />
              Bạn chỉ cần cung cấp sản phẩm và ngân sách.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Nhận tư vấn miễn phí →
              </a>
              <a
                href="#quy-trinh"
                className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                Xem quy trình ↓
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/50"
            >
              {["✓ Miễn phí tư vấn", "✓ Không ép cam kết", "✓ Báo cáo hàng tuần"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — PHÙ HỢP VỚI AI */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-3">
              Dịch vụ này phù hợp với bạn?
            </h2>
            <p className="text-center text-white/50 text-sm mb-10">
              Nếu bạn là một trong 4 nhóm dưới đây — câu trả lời là có.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AUDIENCE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="glass rounded-2xl p-5 text-center hover:bg-white/[0.06] transition"
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <div className="text-sm font-bold text-white mb-2">{card.title}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{card.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — QUY TRÌNH */}
        <section id="quy-trinh" className="py-14 px-4 relative">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-3">
              Mình làm gì cho bạn?
            </h2>
            <p className="text-center text-white/50 text-sm mb-12">6 bước từ A–Z</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="glass rounded-2xl p-5 flex gap-4"
                  >
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl btn-primary grid place-items-center">
                        <Icon className="h-4.5 w-4.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 font-mono mb-1">{step.num}</div>
                      <div className="text-sm font-bold text-white mb-1">{step.title}</div>
                      <div className="text-xs text-white/50 leading-relaxed">{step.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 — SO SÁNH */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-10">
              Tự chạy vs Dùng dịch vụ Tấn Lực
            </h2>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-white/5">
                <div className="px-5 py-3 text-xs font-bold text-white/40 uppercase tracking-wider">
                  Tự chạy
                </div>
                <div className="px-5 py-3 text-xs font-bold text-brand-soft uppercase tracking-wider border-l border-white/5">
                  Dùng Tấn Lực
                </div>
              </div>
              {COMPARE_ROWS.map(([left, right], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i < COMPARE_ROWS.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <div className="px-5 py-3.5 text-sm text-white/40 flex items-center gap-2">
                    <span className="text-red-400 shrink-0">✗</span>
                    {left}
                  </div>
                  <div className="px-5 py-3.5 text-sm text-white/80 flex items-center gap-2 border-l border-white/5">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    {right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — CAM KẾT */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-10">
              Cam kết của chúng tôi
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {COMMITMENTS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className="mx-auto mb-4 h-12 w-12 rounded-2xl btn-primary grid place-items-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white mb-2">{c.title}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{c.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-8">
              Câu hỏi thường gặp
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* SECTION 7 — CTA CUỐI */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="glass-strong rounded-3xl p-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Sẵn sàng để quảng cáo của bạn{" "}
                <span className="text-gradient-brand">thật sự ra đơn?</span>
              </h2>
              <p className="text-white/50 text-sm mb-8">
                Phản hồi trong 15 phút · Không ép cam kết
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Nhắn Zalo tư vấn miễn phí →
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="glass w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <Phone className="h-4 w-4" />
                  Gọi {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
