import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Эта функция объединяет классы и корректно разрешает конфликты Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}