"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { BookOpen, Github } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DiscordIcon } from "@/components/icons";
import { GradientText } from "@/components/ui/gradient-text";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-[15px] font-medium",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-2">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type CardDataProps = {
  id: number;
  title: string;
  titleHighlight: string;
  emoji: string;
  content: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: React.ReactNode;
};

const cardData: CardDataProps[] = [
  {
    id: 1,
    title: "Active",
    titleHighlight: "Community",
    emoji: "🎉",
    content:
      "OSSPH's active Discord community is a vibrant hub of open source enthusiasts and contributors from around the world, sharing knowledge, collaborating on projects, and supporting each other in their journeys.",
    image: "/images/ossph-collage.png",
    buttonText: "Join The Movement!",
    buttonLink: "https://discord.gg/DvtqKrWb86",
    buttonIcon: <DiscordIcon className="h-5 w-5 mr-2" />,
  },
  {
    id: 2,
    title: "Learn",
    titleHighlight: "Regularly",
    emoji: "💡",
    content:
      "OSSPH's active blog provides regular updates on open source software development, cybersecurity, and other technology-related topics. Stay informed and learn about the latest trends and developments in the field.",
    image: "/images/ossph-learn.png",
    buttonText: "Start Learning!",
    buttonLink: "https://blog.ossph.org/",
    buttonIcon: <BookOpen className="h-5 w-5 mr-2" />,
  },
  {
    id: 3,
    title: "Contribution",
    titleHighlight: "& Collaboration",
    emoji: "🍺",
    content:
      "OSSPH has a wide range of open source projects for contributors to learn and contribute to, including software for education, healthcare, and community development. Join and contribute now to make a positive impact!",
    image: "/images/ossph-contribute.png",
    buttonText: "Start Contributing Now!",
    buttonLink: "https://github.com/OSSPhilippines",
    buttonIcon: <Github className="h-5 w-5 mr-2" />,
  },
];

type FeatureProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right";
};

const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
}: FeatureProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  // interval for changing images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % cardData.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % cardData.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          cardData.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <section ref={ref} id="features">
      <div className="py-12 md:py-16">
        <div className="flex w-full flex-col items-center justify-center px-4">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
              Why Join <GradientText>OSSPH</GradientText>? 🚀
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Be part of the leading Open Source community in the Philippines
            </p>
          </div>
          <div className="mx-auto my-12 grid h-full w-full max-w-6xl grid-cols-5 gap-x-10">
            <div
              className={`col-span-2 hidden md:flex ${
                ltr ? "md:order-2 md:justify-end" : "justify-start"
              }`}
            >
              <Accordion.Root
                className="w-[350px]"
                type="single"
                defaultValue={`item-${currentIndex}`}
                value={`item-${currentIndex}`}
                onValueChange={(value) =>
                  setCurrentIndex(Number(value.split("-")[1]))
                }
              >
                {cardData.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    className="relative mb-8 last:mb-0"
                    value={`item-${index}`}
                  >
                    <div
                      className={`absolute top-0 bottom-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                        linePosition === "right"
                          ? "right-0 left-auto"
                          : "right-auto left-0"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 w-full ${
                          currentIndex === index ? "h-full" : "h-0"
                        } origin-top bg-[var(--ossph-primary)] transition-all ease-linear dark:bg-white`}
                        style={{
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                    <AccordionTrigger className="text-xl font-bold">
                      <span>
                        <GradientText>{item.title}</GradientText> {item.titleHighlight} {item.emoji}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion.Root>
            </div>
            <div
              className={`col-span-5 min-h-[350px] w-auto md:col-span-3 ${
                ltr && "md:order-1"
              }`}
            >
              {currentCard?.image && (
                <div className="flex flex-col h-full">
                  <motion.img
                    key={currentIndex}
                    src={currentCard.image}
                    alt={currentCard.title}
                    className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover p-1"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                  <motion.div
                    key={`button-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                    className="mt-4 flex justify-center md:justify-start"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-[var(--ossph-primary)] hover:bg-[var(--ossph-primary)]/90"
                    >
                      <Link
                        href={currentCard.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {currentCard.buttonIcon}
                        {currentCard.buttonText}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>

            <ul
              ref={carouselRef}
              className="col-span-5 flex h-full snap-x snap-mandatory flex-nowrap overflow-x-auto [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
              style={{
                padding: "50px calc(50%)",
              }}
            >
              {cardData.map((item, index) => (
                <button
                  key={item.id}
                  className="card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0 text-left"
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    scrollSnapAlign: "center",
                  }}
                >
                  <div className="absolute top-0 right-auto bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30">
                    <div
                      className={`absolute top-0 left-0 h-full ${
                        currentIndex === index ? "w-full" : "w-0"
                      } origin-top bg-[var(--ossph-primary)] transition-all ease-linear dark:bg-white`}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    ></div>
                  </div>
                  <h2 className="text-xl font-bold">
                    <GradientText>{item.title}</GradientText> {item.titleHighlight} {item.emoji}
                  </h2>
                  <p className="mx-0 max-w-sm text-sm text-balance text-gray-600">
                    {item.content}
                  </p>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export function FeatureSlideshow() {
  return <Feature collapseDelay={5000} linePosition="left" />;
}
