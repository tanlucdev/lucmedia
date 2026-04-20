"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import type { PlatformKey } from "@/data/services";

type Activity = {
  id: number;
  platform: PlatformKey;
  service: string;
  qty: string;
  name: string;
  ago: string;
};

const POOL: Omit<Activity, "id">[] = [
  { platform: "tiktok", service: "View TikTok", qty: "10.000 view", name: "Anh Minh", ago: "vừa xong" },
  { platform: "facebook", service: "Like Fanpage", qty: "1.000 like", name: "Chị Lan", ago: "1 phút trước" },
  { platform: "youtube", service: "Sub YouTube", qty: "500 sub", name: "Anh Hùng", ago: "2 phút trước" },
  { platform: "instagram", service: "Follow IG", qty: "2.000 follow", name: "Chị Thảo", ago: "vừa xong" },
  { platform: "shopee", service: "Love Shopee", qty: "5.000 love", name: "Shop An An", ago: "3 phút trước" },
  { platform: "tiktok", service: "Mắt Live", qty: "500 mắt", name: "TikToker Bi", ago: "vừa xong" },
  { platform: "facebook", service: "Bình Luận", qty: "300 cmt", name: "Fanpage BTS", ago: "4 phút trước" },
  { platform: "youtube", service: "View 4000H", qty: "1 kênh", name: "Anh Tuấn", ago: "vừa xong" },
  { platform: "instagram", service: "Like IG", qty: "3.000 like", name: "Chị Ngọc", ago: "2 phút trước" },
  { platform: "twitter", service: "Follow X", qty: "1.000 follow", name: "Anh Khoa", ago: "5 phút trước" },
  { platform: "telegram", service: "Member TG", qty: "2.000 mem", name: "Group Kinh Doanh", ago: "vừa xong" },
  { platform: "google", service: "Review 5★", qty: "50 review", name: "Shop Thắng", ago: "3 phút trước" },
];

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
  facebook: "bg-[#1877f2]/15",
  tiktok: "bg-white/10",
  youtube: "bg-[#ff0000]/15",
  instagram: "bg-[#dd2a7b]/15",
  shopee: "bg-[#ee4d2d]/15",
  twitter: "bg-white/10",
  threads: "bg-white/10",
  telegram: "bg-[#2aabee]/15",
  google: "bg-[#4285f4]/15",
  lazada: "bg-[#f3327f]/15",
};

let idCounter = 0;

export function LiveActivity() {
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    let idx = Math.floor(Math.random() * POOL.length);

    function push() {
      const entry = POOL[idx % POOL.length];
      idx++;
      setItems((prev) => {
        const next = [{ ...entry, id: ++idCounter }, ...prev].slice(0, 3);
        return next;
      });
    }

    push();
    const t = setInterval(push, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-4 z-40 flex flex-col-reverse gap-2 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {items.map((a) => (
          <motion.div
            key={a.id}
            layout
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.92 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            className="pointer-events-auto glass rounded-2xl px-3 py-2.5 flex items-center gap-2.5 shadow-2xl max-w-[260px] sm:max-w-[290px]"
          >
            <div className={`h-9 w-9 shrink-0 rounded-xl ${PLATFORM_BG[a.platform]} grid place-items-center`}>
              <PlatformIcon
                platform={a.platform}
                className={`h-5 w-5 ${PLATFORM_COLORS[a.platform]}`}
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white leading-snug truncate">
                {a.name}
              </div>
              <div className="text-[11px] text-white/60 truncate">
                {a.service} · {a.qty}
              </div>
              <div className="text-[10px] text-emerald-400 mt-0.5">{a.ago}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
