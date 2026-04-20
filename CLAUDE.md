@AGENTS.md

# Dịch Vụ Tấn Lực — Dev Guide cho Claude

Landing page báo giá dịch vụ mạng xã hội (Facebook, TikTok, YouTube…). Chủ dự án: **Tấn Lực** · hotline `0878272222`.

---

## Thiết kế

- Phong cách: **digital banking + glassmorphism**, tối màu (navy deep `#05061a`), accent `indigo/violet/emerald`.
- Target visual: [ảnh tham chiếu `ui-ux-pro-max-skill.nextlevelbuilder.io_demo_digital-banking.png`](../ui-ux-pro-max-skill.nextlevelbuilder.io_demo_digital-banking.png) ở thư mục gốc.
- Typography: `Plus Jakarta Sans` (body) + `Sora` (display, headings). Tracking chặt, leading 1.05–1.1 cho heading lớn.
- Glass utilities: `.glass`, `.glass-strong`, `.text-gradient-brand`, `.grid-bg`, `.glow`, `.shine` (định nghĩa ở `src/app/globals.css`).

Khi thêm component mới, **luôn** dùng các utility class này thay vì định nghĩa lại `backdrop-filter` / `background`.

---

## Stack (lưu ý Next.js 16)

- **Next.js 16.x App Router + Turbopack** — phiên bản mới, một số API khác với training data.
  - Trước khi viết bất kỳ component Next đặc thù (`layout`, `page`, `metadata`, `sitemap`, `robots`, route handlers), đọc doc ở `web/node_modules/next/dist/docs/01-app/` — đây là source of truth.
  - Font subset Vietnamese KHÔNG được hỗ trợ trên Next 16 fonts API — đã fallback về `latin + latin-ext`. Không đổi lại.
- Tailwind CSS 4 (config inline qua `@theme` trong globals.css — không dùng `tailwind.config.js`).
- Framer Motion 12 cho animation. Dùng `"use client"` khi cần.

---

## Dữ liệu dịch vụ

Toàn bộ dịch vụ + giá tập trung ở [`src/data/services.ts`](./src/data/services.ts). Đừng hardcode giá / tên dịch vụ ở bất kỳ component nào — luôn import từ file này.

Giá trong file là **số nguyên VND** (không phải `k`):
- `49000` → hiển thị "49.000đ"
- `null` → hiển thị "Liên hệ"
- `highlight: true` → card có badge "HOT" cam

Helper format ở [`src/lib/utils.ts`](./src/lib/utils.ts): `formatVND(n)` → `"49.000đ"`.

Nếu chủ yêu cầu đổi giá / thêm dịch vụ — chỉ sửa file `services.ts`, không sửa UI.

---

## Cấu trúc section

Mỗi section là 1 file trong `src/components/sections/`, dùng dạng named export:

```tsx
"use client";
export function Hero() { ... }
```

Tại `page.tsx` compose theo thứ tự: `Header → Hero → Features → Packages → Pricing → Security → MobileCTA → Footer`.

Khi thêm section mới: (a) tạo file trong `sections/`, (b) import vào `page.tsx`, (c) giữ pattern `glass`/`glass-strong` cho container ngoài cùng.

---

## Liên hệ & branding — KHÔNG hardcode

Tất cả hotline / Zalo / Facebook / email lấy từ `CONTACT` ở `services.ts`. Khi đổi SĐT hoặc social — chỉ sửa ở 1 chỗ.

---

## Quy tắc khi code

- **Mobile-first**: heading hero ở mobile dùng `text-[2rem]` để không bị cắt chữ "toàn". Đã test ở 390px — không hạ thêm.
- Không thêm `dark:` variant — site **luôn** dark (không có light mode).
- Không thêm i18n / multi-language — chỉ tiếng Việt.
- Không dùng `next/image` cho icon — đã có lucide-react. Dùng `next/image` nếu có ảnh thật sau này.
- Số tiền: **luôn** dùng `formatVND` từ `@/lib/utils`, không tự `toLocaleString`.
- Button đặt hàng: luôn link sang `https://zalo.me/${CONTACT.phone}?text=...` kèm `encodeURIComponent`.

---

## Test trước khi commit

```bash
yarn build    # bắt buộc pass (TypeScript strict)
yarn dev      # self-verify ở http://localhost:3000
```

Nếu sửa visual → screenshot (desktop 1440, mobile 390) để chủ review trước khi merge.

---

## Deploy

Vercel auto-deploy từ `main`. Region đã set `sin1` trong `vercel.json`. Không đổi region.

Sau khi có domain production, update `SITE_URL` ở 3 chỗ (liệt kê trong [README.md](./README.md) section "Deploy lên Vercel").
