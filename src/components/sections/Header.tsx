"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { CONTACT } from "@/data/services";

const SERVICE_DROPDOWN = [
  { href: "/#packages", label: "Buff Like / Follow / View" },
  { href: "/chay-quang-cao", label: "Chạy Quảng Cáo Facebook" },
  { href: "/loi-ich", label: "Lợi ích theo nền tảng" },
];

function scrollTo(id: string, closeMenu?: () => void) {
  closeMenu?.();
  // If we're not on the home page, navigate there first
  if (typeof window !== "undefined" && window.location.pathname !== "/") {
    window.location.href = id;
    return;
  }
  const el = document.querySelector(id);
  if (!el) return;
  const offset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function ServiceDropdown({ onClose }: { onClose?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-strong rounded-2xl overflow-hidden shadow-xl z-50"
    >
      {SERVICE_DROPDOWN.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="flex items-center px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/[0.07] transition"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-4 pt-4 lg:pt-5">
          <div
            className="glass flex items-center justify-between rounded-2xl px-4 py-3 lg:px-6 transition-all duration-300"
            style={scrolled ? { background: "rgba(8,10,36,0.88)", backdropFilter: "blur(24px)" } : undefined}
          >
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
              <button
                onClick={() => scrollTo("#features")}
                className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
              >
                Tính năng
              </button>

              {/* Dịch vụ dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((p) => !p)}
                  className="flex items-center gap-1 px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
                >
                  Dịch vụ
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <ServiceDropdown onClose={() => setDropdownOpen(false)} />
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/bang-gia"
                className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
              >
                Bảng giá
              </Link>
              <Link
                href="/chay-quang-cao"
                className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
              >
                Chạy Quảng Cáo
              </Link>
              <a
                href={CONTACT.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition"
              >
                Liên hệ
              </a>
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
              <Link
                href="/bang-gia"
                className="btn-primary hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
              >
                Đặt ngay
                <span aria-hidden>→</span>
              </Link>
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
            <div
              className="absolute inset-0 bg-[#05061a]/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-72 glass-strong border-l border-white/10 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
            >
              <nav className="space-y-1">
                <button
                  onClick={() => scrollTo("#features", () => setOpen(false))}
                  className="w-full text-left px-4 py-3.5 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Tính năng
                </button>
                <div className="px-4 pt-2 pb-1 text-xs text-white/30 uppercase tracking-widest">
                  Dịch vụ
                </div>
                {SERVICE_DROPDOWN.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/bang-gia"
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3.5 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Bảng giá
                </Link>
                <Link
                  href="/chay-quang-cao"
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3.5 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Chạy Quảng Cáo
                </Link>
              </nav>

              <div className="mt-auto space-y-3">
                <Link
                  href="/bang-gia"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition"
                >
                  Xem bảng giá →
                </Link>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="glass w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] transition"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
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
