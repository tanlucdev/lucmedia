import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVND(value: number | null | undefined): string {
  if (value == null) return "Liên hệ";
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export function formatCompact(value: number | null | undefined): string {
  if (value == null) return "Liên hệ";
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return (Number.isInteger(m) ? m.toFixed(0) : m.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")) + "tr";
  }
  if (value >= 1_000) return (value / 1_000).toFixed(0) + "k";
  return String(value);
}
