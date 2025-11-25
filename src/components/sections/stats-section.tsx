"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

const stats = [
  { value: 1600, label: "Discord Members", suffix: "+" },
  { value: 7000, label: "Facebook Followers", suffix: "+" },
  { value: 25, label: "Volunteers", suffix: "" },
  { value: 36, label: "OSS Projects", suffix: "" },
];

interface AnimatedCardProps {
  value: number;
  label: string;
  suffix: string;
  isInView: boolean;
}

function AnimatedCard({ value, label, suffix, isInView }: AnimatedCardProps) {
  const spring = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-4 text-center">
        <motion.div
          className="mb-2 text-5xl font-bold md:text-7xl text-(--ossph-primary)"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span>{displayValue}</motion.span>
          {suffix}
        </motion.div>
        <div className="text-muted-foreground text-base md:text-lg">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto space-y-4 py-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Our <GradientText>Numbers</GradientText> Speak 📊
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
