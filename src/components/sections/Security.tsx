"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, KeyRound } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Không cần mật khẩu",
    desc: "Chỉ cần link bài viết / link profile — chúng tôi không bao giờ yêu cầu mật khẩu của bạn.",
  },
  {
    icon: Lock,
    title: "Mã hoá đơn hàng",
    desc: "Mọi thông tin đơn được mã hoá SSL, không lưu thông tin thẻ hay OTP.",
  },
  {
    icon: Eye,
    title: "Ẩn danh hoàn toàn",
    desc: "Người nhận không biết bạn đã thuê dịch vụ — tương tác trông tự nhiên như thật.",
  },
  {
    icon: KeyRound,
    title: "Bảo hành & hoàn tiền",
    desc: "Bù bay trọn đời, không đạt yêu cầu — hoàn 100% trong 7 ngày.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs text-emerald-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Bảo mật & uy tín
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Tài khoản của bạn{" "}
            <span className="text-gradient-brand">được bảo vệ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/60 text-base sm:text-lg"
          >
            7 năm vận hành — chưa có báo cáo nào về tài khoản khách bị khoá vì
            dùng dịch vụ của chúng tôi.
          </motion.p>
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-6 sm:p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-3"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 grid place-items-center text-emerald-300">
                  <it.icon className="h-5 w-5" strokeWidth={2.3} />
                </div>
                <div className="font-display text-lg font-bold text-white">
                  {it.title}
                </div>
                <div className="text-sm text-white/60 leading-relaxed">
                  {it.desc}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { k: "7 năm", v: "Kinh nghiệm" },
              { k: "50.000+", v: "Đơn / tháng" },
              { k: "99.9%", v: "Uptime hệ thống" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-white/50 uppercase tracking-widest">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
