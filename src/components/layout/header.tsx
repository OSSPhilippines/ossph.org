"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { MobileDrawer } from "./mobile-drawer";

const navItems = [
  { id: 2, label: "The Team", href: "/team", external: false },
  { id: 3, label: "Projects", href: "/projects", external: false },
  { id: 4, label: "Awesome", href: "/awesome", external: false },
  { id: 1, label: "About Us", href: "https://blog.ossph.org/ossph/", external: true },
  { id: 5, label: "Blog", href: "https://blog.ossph.org", external: true },
];

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

export function Header() {
  const scrollY = useScrollY();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-10 py-4 lg:py-5">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo on the left - fades out on scroll */}
        <motion.div
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ossph-logo.png"
              alt="OSSPH Logo"
              width={140}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation - centered pill */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <motion.div
            animate={{
              boxShadow:
                scrollY >= 120
                  ? "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
              backgroundColor: scrollY >= 120 ? "rgba(255,255,255,0.95)" : "transparent",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="flex h-16 items-center justify-center overflow-hidden rounded-full px-3 py-2 transition-all backdrop-blur-sm"
          >
            <ul className="flex h-full items-center gap-1 lg:gap-2 shrink-0 whitespace-nowrap">
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  className="flex items-center justify-center"
                >
                  <Link
                    href={navItem.href}
                    target={navItem.external ? "_blank" : undefined}
                    rel={navItem.external ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 text-base font-medium text-gray-700 hover:text-[var(--ossph-primary)] transition-colors flex items-center gap-1.5 rounded-full hover:bg-gray-100 whitespace-nowrap"
                  >
                    {navItem.label}
                    {navItem.external && <ExternalLink className="h-4 w-4" />}
                  </Link>
                </li>
              ))}
            </ul>
            {/* GitHub button slides in on scroll */}
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="overflow-hidden rounded-full"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.div
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 0.1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap pl-2"
                  >
                    <Link
                      href="https://github.com/OSSPhilippines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--ossph-primary)] text-white relative inline-flex w-fit items-center justify-center gap-x-2 overflow-hidden rounded-full px-5 py-2.5 text-base font-medium hover:bg-[var(--ossph-primary)]/90 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* GitHub button on the right - fades out on scroll */}
        <motion.div
          className="hidden md:flex items-center"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <Link
            href="https://github.com/OSSPhilippines"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--ossph-primary)] text-white inline-flex items-center justify-center gap-x-2 rounded-full px-5 py-2.5 text-base font-medium hover:bg-[var(--ossph-primary)]/90 transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            animate={mobileMenuOpen ? "open" : "close"}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-6 bg-[var(--ossph-primary)]"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-6 bg-[var(--ossph-primary)]"
              variants={{
                open: { opacity: 0 },
                close: { opacity: 1 },
              }}
            />
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-6 bg-[var(--ossph-primary)]"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </MotionConfig>
      </nav>

      <MobileDrawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </header>
  );
}
