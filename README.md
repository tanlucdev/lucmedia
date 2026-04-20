# Dịch Vụ Tấn Lực — Landing Page

Website báo giá dịch vụ tăng trưởng mạng xã hội (Facebook, TikTok, YouTube, Instagram…) cho **Dịch Vụ Tấn Lực** — hotline `0878272222`.

Phong cách thiết kế: **digital-banking + glassmorphism**, tối màu navy/indigo, accent mint + violet, tạo cảm giác premium & trust.

---

## Tech stack

| Lớp | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Ngôn ngữ | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom glassmorphism utilities |
| Animation | Framer Motion 12 |
| Icon | Lucide |
| Font | Plus Jakarta Sans + Sora (Google Fonts) |
| Deploy | Vercel (mặc định) |

---

## Chạy local

```bash
yarn install
yarn dev       # http://localhost:3000
```

Các lệnh khác:

```bash
yarn build     # build production
yarn start     # serve production build
yarn lint      # chạy ESLint
```

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx         # Metadata SEO, fonts, theme
│   ├── page.tsx           # Ghép các section
│   ├── globals.css        # Theme colors + glassmorphism utilities
│   ├── robots.ts          # /robots.txt
│   └── sitemap.ts         # /sitemap.xml
├── components/sections/
│   ├── Header.tsx         # Nav bar glassmorphic
│   ├── Hero.tsx           # Hero + account card
│   ├── Features.tsx       # 6 feature cards
│   ├── Packages.tsx       # 3 gói: Starter / Pro / Business
│   ├── Pricing.tsx        # Tabs nền tảng + bảng giá chi tiết
│   ├── Security.tsx       # Trust signals + metrics
│   ├── MobileCTA.tsx      # CTA với phone mockup
│   └── Footer.tsx
├── data/services.ts       # Toàn bộ 50+ dịch vụ + giá (đã điền)
└── lib/utils.ts           # cn(), formatVND(), ...
```

---

## Cập nhật giá / dịch vụ

Mọi dịch vụ và giá nằm ở [`src/data/services.ts`](./src/data/services.ts). Chỉ cần sửa file này — toàn bộ UI (tabs, cards, hero stats) tự cập nhật theo.

```ts
{
  platform: "facebook",
  services: [
    { name: "Like Bài Viết", unit: "/1.000 like", price: 49000 },
    // ...
  ],
}
```

- `price: null` → hiển thị "Liên hệ"
- `highlight: true` → card có nhãn `HOT`

Cập nhật hotline / Zalo / Facebook tại object `CONTACT` cùng file.

---

## Deploy lên Vercel

1. Push repo lên GitHub.
2. Vào [vercel.com/new](https://vercel.com/new), chọn repo.
3. Vercel tự detect framework **Next.js** → click **Deploy**.
4. Sau khi có domain, update biến `SITE_URL` trong [`src/app/layout.tsx`](./src/app/layout.tsx), [`src/app/sitemap.ts`](./src/app/sitemap.ts), [`src/app/robots.ts`](./src/app/robots.ts) cho SEO chuẩn.

File [`vercel.json`](./vercel.json) đã cấu hình sẵn:
- Region `sin1` (Singapore — tốt nhất cho user VN)
- Security headers (`X-Frame-Options`, `Referrer-Policy`…)

Mỗi `git push` sẽ tự deploy lại.

---

## SEO checklist (đã làm sẵn)

- [x] `metadata` đầy đủ (title template, description, keywords tiếng Việt)
- [x] Open Graph + Twitter card
- [x] `robots.txt` + `sitemap.xml` tự sinh
- [x] Viewport + theme color
- [x] Heading hierarchy: `h1` → `h2` → `h3`
- [x] `lang="vi"` cho Google Việt hoá
- [x] Font Vietnamese (latin-ext subset)

Việc cần làm sau khi có domain:
- [ ] Update `SITE_URL` ở 3 file trên
- [ ] Submit sitemap lên Google Search Console
- [ ] Gắn Google Analytics / Vercel Analytics (optional)

---

*Tổng: 50+ dịch vụ · 10 nền tảng · Hotline 0878272222*
