"use client";

import Image from "next/image";
import Link from "next/link";
import { GradientText } from "@/components/ui/gradient-text";
import { Marquee } from "@/components/ui/marquee";

interface Partner {
  name: string;
  logo?: string;
  link: string;
  width: number;
  textColor?: string;
}

const partners: Partner[] = [
  { name: "Stripe", logo: "stripe-logo.png", link: "https://stripe.com?ref=https://ossph.org", width: 170 },
  { name: "BetterGov", logo: "better-gov-logo.jpg", link: "https://bettergov.ph?ref=https://ossph.org", width: 170 },
  { name: "Microsoft", logo: "microsoft-logo.png", link: "https://www.microsoft.com/en-us?ref=https://ossph.org", width: 170 },
  { name: "Edukasyon.ph", logo: "edukasyon.jpg", link: "https://www.edukasyon.ph?ref=https://ossph.org", width: 170 },
  { name: "AWS Siklab", logo: "aws-siklab-logo.png", link: "https://www.facebook.com/AWS.SiklabPH/?ref=https://ossph.org", width: 200 },
  { name: "Web3 Philippines", logo: "web3phl-logo.png", link: "https://web3philippines.org/?ref=https://ossph.org", width: 200 },
  { name: "Python Philippines", logo: "python-ph-logo-black.png", link: "https://pycon-2024.python.ph/?ref=https://ossph.org", width: 300 },
  { name: "Merj.io", link: "https://merj.io?ref=https://ossph.org", width: 170, textColor: "#7fad33" },
  { name: "Where In Maginhawa?", link: "https://whereinmaginhawa.com/?ref=https://ossph.org", width: 170, textColor: "#ee7927" },
  { name: "Pwedepa", logo: "pwedepa-logo.png", link: "https://pwedepa.co", width: 100 },
];

// New grid-based partners section
export function PartnersSection() {
  return (
    <section id="partners" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mx-auto space-y-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Our <GradientText>Community Partners</GradientText> 💪
          </h2>
        </div>
        <div className="relative mt-8">
          <div className="grid grid-cols-2 place-items-center gap-4 md:gap-6 lg:grid-cols-5">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity flex items-center justify-center h-16 px-4"
              >
                {partner.logo ? (
                  <Image
                    src={`/images/${partner.logo}`}
                    alt={partner.name}
                    width={partner.width}
                    height={64}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: partner.textColor || "#000" }}
                  >
                    {partner.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Backup: Marquee-based partners section
export function PartnersSectionMarquee() {
  return (
    <section id="partners" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl text-center lg:text-5xl font-bold mb-12">
          Our <GradientText>Community Partners</GradientText>
        </h2>
        <div className="relative">
          <Marquee className="max-w-full [--duration:40s]" pauseOnHover>
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity mx-8 flex items-center h-20"
              >
                {partner.logo ? (
                  <Image
                    src={`/images/${partner.logo}`}
                    alt={partner.name}
                    width={partner.width}
                    height={100}
                    className="h-20 w-auto object-contain"
                  />
                ) : (
                  <span
                    className="text-5xl font-bold"
                    style={{ color: partner.textColor || "#000" }}
                  >
                    {partner.name}
                  </span>
                )}
              </Link>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-linear-to-r from-[#f5fdfe]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-linear-to-l from-[#f5fdfe]"></div>
        </div>
      </div>
    </section>
  );
}
