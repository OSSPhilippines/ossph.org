import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#0060A0] via-[#7524B3] to-[#CF557D] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
