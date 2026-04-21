"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/data/services";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Tấn Lực"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">
                  Tấn Lực
                </div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.18em]">
                  Social Booster
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              Nền tảng dịch vụ tăng trưởng mạng xã hội uy tín #1 Việt Nam. Hơn
              50 dịch vụ trên 10 nền tảng, bảo hành trọn đời.
            </p>
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <a
                href={CONTACT.zalo}
                className="h-10 w-10 rounded-xl glass grid place-items-center text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Zalo"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href={CONTACT.facebook}
                className="h-10 w-10 rounded-xl glass grid place-items-center text-[#1877f2] hover:bg-white/10 transition"
                aria-label="Facebook"
              >
                <PlatformIcon platform="facebook" className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="h-10 w-10 rounded-xl glass grid place-items-center text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="h-10 px-4 rounded-xl glass flex items-center gap-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs text-white/50 uppercase tracking-widest">
              Dịch vụ
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white transition" href="/bang-gia">Bảng giá</Link></li>
              <li><Link className="hover:text-white transition" href="/chay-quang-cao">Chạy Quảng Cáo</Link></li>
              <li><Link className="hover:text-white transition" href="/loi-ich">Lợi ích MXH</Link></li>
              <li><Link className="hover:text-white transition" href="/#pricing">Facebook / TikTok</Link></li>
              <li><Link className="hover:text-white transition" href="/#pricing">YouTube / Instagram</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs text-white/50 uppercase tracking-widest">
              Hỗ trợ
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white transition" href="/#security">Bảo mật</Link></li>
              <li><Link className="hover:text-white transition" href="/#packages">Gói combo</Link></li>
              <li><a className="hover:text-white transition" href={CONTACT.zalo}>Zalo Support</a></li>
              <li><a className="hover:text-white transition" href={`tel:${CONTACT.phone}`}>Hotline 24/7</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Dịch Vụ {CONTACT.brand}. Mọi quyền được bảo lưu.
          </div>
          <div>Thiết kế bởi đội Tấn Lực</div>
        </div>
      </div>
    </footer>
  );
}
