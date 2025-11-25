import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";

interface SocialButtonProps {
  icon: ReactNode;
  label?: string;
  href: string;
  variant?: "outline" | "filled";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialButton({
  icon,
  label,
  href,
  variant = "filled",
  className,
  size = "md",
}: SocialButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-2",
  };

  const variantClasses = {
    outline: "border-2 border-white text-white hover:bg-white/10",
    filled: "bg-[var(--ossph-primary)] text-white hover:bg-[var(--ossph-primary)]/90",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {icon}
      {label && <span>{label}</span>}
    </Link>
  );
}
