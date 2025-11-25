"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/gradient-text";

interface PageHeroProps {
  title: string;
  titleHighlight: string;
  emoji?: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

const fadeUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function PageHero({
  title,
  titleHighlight,
  emoji,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-96 transform-gpu opacity-30 blur-3xl",
            "bg-gradient-to-br from-[var(--ossph-primary)] via-[var(--ossph-secondary)] to-transparent"
          )}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title} <GradientText>{titleHighlight}</GradientText>
            {emoji && <span className="ml-2">{emoji}</span>}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-4"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
