import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GenericPanelProps {
  children: ReactNode;
  paddingTop?: string;
  paddingBottom?: string;
  hideHr?: boolean;
  fullHeight?: boolean;
  className?: string;
}

export function GenericPanel({
  children,
  paddingTop = "py-10 lg:py-[70px]",
  paddingBottom,
  hideHr = false,
  fullHeight = false,
  className,
}: GenericPanelProps) {
  return (
    <section
      className={cn(
        "flex justify-center w-full",
        paddingTop,
        paddingBottom,
        fullHeight && "min-h-screen",
        className
      )}
    >
      <div className="w-full max-w-6xl px-4">
        {children}
        {!hideHr && <hr className="panel-separator mt-12" />}
      </div>
    </section>
  );
}
