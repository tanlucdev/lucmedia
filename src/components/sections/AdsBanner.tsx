"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AdsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-7xl px-4 mb-4"
    >
      <Link
        href="/chay-quang-cao"
        className="glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl px-5 py-4 hover:bg-white/[0.07] transition group"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl">📢</div>
          <div>
            <div className="text-sm font-semibold text-white">
              Muốn chạy Facebook Ads thật sự hiệu quả?
            </div>
            <div className="text-xs text-white/50 mt-0.5">
              Quản lý A–Z · Báo cáo hàng tuần · Không ép cam kết dài hạn
            </div>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-brand-soft group-hover:underline">
          Tìm hiểu thêm
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
