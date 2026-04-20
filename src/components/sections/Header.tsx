"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT } from "@/data/services";

const nav = [
  { href: "#features", label: "Tính năng" },
  { href: "#packages", label: "Gói dịch vụ" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#security", label: "Bảo mật" },
];

function scrollTo(id: string, closeMenu?: () => void) {
  closeMenu?.();
  const el = document.querySelector(id);
  if (!el) return;
  const offset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-4 pt-4 lg:pt-5">
          <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 lg:px-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Tấn Lực"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white tracking-tight">
                  Tấn Lực
                </div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.18em]">
                  Social Booster
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/5 px-1.5 py-1.5">
              {nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT.phone}`}
                className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium tabular-nums">{CONTACT.phoneDisplay}</span>
              </a>
              <button
                onClick={() => scrollTo("#pricing")}
                className="btn-primary hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
              >
                Đặt ngay
                <span aria-hidden>→</span>
              </button>
              {/* Hamburger */}
              <button
                onClick={() => setOpen((p) => !p)}
                className="lg:hidden glass h-9 w-9 rounded-xl grid place-items-center text-white hover:bg-white/10 transition"
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#05061a]/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-72 glass-strong border-l border-white/10 flex flex-col pt-24 px-6 pb-8"
            >
              <nav className="space-y-1">
                {nav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href, () => setOpen(false))}
                    className="w-full text-left px-4 py-3.5 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <button
                  onClick={() => scrollTo("#pricing", () => setOpen(false))}
                  className="btn-primary w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition"
                >
                  Xem bảng giá →
                </button>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="glass w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] transition"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.zalo}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white/70 hover:text-white transition"
                >
                  Nhắn Zalo →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
