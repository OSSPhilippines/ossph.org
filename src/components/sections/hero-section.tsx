"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DiscordIcon } from "@/components/icons";

const fadeUpVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export function HeroSection() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-14">
        <div className="z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="mt-20 grid grid-cols-1">
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
              <motion.h1
                ref={fadeInRef}
                className="py-6 text-5xl leading-none font-medium tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <span className="bg-linear-to-br from-black from-30% to-black/60 bg-clip-text text-transparent dark:from-white dark:to-white/40 font-molot">
                  <GradientText>Open Source</GradientText>
                </span>
                <br />
                <span className="font-molot text-(--ossph-primary)">
                  Software PH
                </span>
              </motion.h1>

              <motion.p
                className="text-lg tracking-tight text-balance text-gray-600 md:text-xl lg:text-2xl"
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                The leading Open Source Software Community in the Philippines
              </motion.p>

              <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 sm:flex-row"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <Link
                  href="https://discord.gg/DvtqKrWb86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    // colors
                    "bg-(--ossph-primary) text-white shadow hover:bg-(--ossph-primary)/90",

                    // layout
                    "group focus-visible:ring-ring relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-2 text-base font-semibold tracking-tighter whitespace-pre focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",

                    // animation
                    "hover:ring-(--ossph-primary) transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2"
                  )}
                >
                  <DiscordIcon className="size-5" />
                  Join The Movement!
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://github.com/sponsors/OSSPhilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    // colors
                    "bg-white text-(--ossph-negative) border-2 border-(--ossph-negative) shadow hover:bg-(--ossph-negative)/10",

                    // layout
                    "group focus-visible:ring-ring relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-2 text-base font-semibold tracking-tighter whitespace-pre focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",

                    // animation
                    "hover:ring-(--ossph-negative) transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2"
                  )}
                >
                  <Heart className="size-5" />
                  Help Us Grow
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={fadeInInView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
            className="relative mx-auto mt-16 h-full w-full max-w-5xl rounded-xl"
          >
            <div
              className={cn(
                "absolute -inset-x-20 -top-20 h-72 transform-gpu opacity-50 blur-3xl",
                "bg-linear-to-br from-(--ossph-primary) to-(--ossph-secondary)"
              )}
            />

            <BorderBeam size={250} duration={12} colorFrom="var(--ossph-primary)" colorTo="var(--ossph-secondary)" />
            <BorderBeam size={250} duration={12} delay={6} colorFrom="var(--ossph-primary)" colorTo="var(--ossph-secondary)" />

            <Image
              src="/images/ossph-hero.png"
              alt="OSSPH GitHub Organization"
              width={1200}
              height={700}
              className="relative block h-full w-full rounded-xl border shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
