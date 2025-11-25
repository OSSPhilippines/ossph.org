"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { DiscordIcon } from "@/components/icons";
import { team } from "@/data/team";

// Get volunteers with photos (excluding no-photo.png)
const volunteersWithPhotos = team.filter(m => m.photo !== "no-photo.png");

// Split into rows for the marquee
const firstRow = volunteersWithPhotos.slice(0, Math.ceil(volunteersWithPhotos.length / 3));
const secondRow = volunteersWithPhotos.slice(Math.ceil(volunteersWithPhotos.length / 3), Math.ceil(2 * volunteersWithPhotos.length / 3));
const thirdRow = volunteersWithPhotos.slice(Math.ceil(2 * volunteersWithPhotos.length / 3));

const VolunteerCard = ({
  photo,
  name,
  role,
}: {
  photo: string;
  name: string;
  role: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          src={`/images/${photo}`}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {role}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function CTASection() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center px-4">
          <div className="relative flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {thirdRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {firstRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name + "-2"}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {secondRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name + "-2"}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {thirdRow.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.name + "-2"}
                    photo={volunteer.photo}
                    name={volunteer.name}
                    role={volunteer.role}
                  />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-32 dark:bg-black/10">
              <DiscordIcon className="mx-auto size-16 text-[var(--ossph-primary)] lg:size-24" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">
                Join the Open Source Movement!
              </h1>
              <p className="mt-2 text-gray-600">
                Connect with Filipino developers, contribute to projects, and grow together.
              </p>
              <Link
                href="https://discord.gg/DvtqKrWb86"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-6 border-[var(--ossph-primary)] text-[var(--ossph-primary)] hover:bg-[var(--ossph-primary)]/10"
                )}
              >
                <DiscordIcon className="mr-2 size-5" />
                Join Discord
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-[#f5fdfe] to-70% dark:to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
