"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navItems = [
  { label: "About Us", href: "https://blog.ossph.org/ossph/", external: true },
  { label: "The Team", href: "/team", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Awesome", href: "/awesome", external: false },
  { label: "Blog", href: "https://blog.ossph.org", external: true },
];

export function MobileDrawer({ open, onOpenChange }: MobileDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] bg-[var(--ossph-primary)] border-none p-0">
        <SheetHeader className="p-6 border-b border-white/10">
          <SheetTitle>
            <Image
              src="/images/ossph-logo.png"
              alt="OSSPH Logo"
              width={120}
              height={45}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors flex items-center justify-between"
              onClick={() => onOpenChange(false)}
            >
              {item.label}
              {item.external && <ExternalLink className="h-4 w-4" />}
            </Link>
          ))}
          <Link
            href="https://github.com/OSSPhilippines"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors flex items-center gap-2"
            onClick={() => onOpenChange(false)}
          >
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
