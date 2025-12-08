import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategory(
  cat: string | undefined,
  acronyms: string[] = [],
): string {
  if (!cat) return "";

  const upperCat = cat.toUpperCase();

  if (acronyms.map((a) => a.toUpperCase()).includes(upperCat)) {
    return upperCat;
  }

  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
}
