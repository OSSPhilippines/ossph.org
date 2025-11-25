import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DiscordIcon } from "@/components/icons";

type FooterLink = { id: number; title: string; url: string; external?: boolean };

const footerLinks: FooterLink[][] = [
  [
    { id: 1, title: "About Us", url: "https://blog.ossph.org/ossph/", external: true },
    { id: 2, title: "The Team", url: "/team" },
    { id: 3, title: "Projects", url: "/projects" },
    { id: 4, title: "Awesome", url: "/awesome" },
  ],
  [
    { id: 5, title: "Blog", url: "https://blog.ossph.org", external: true },
    { id: 6, title: "GitHub", url: "https://github.com/OSSPhilippines", external: true },
    { id: 7, title: "Discord", url: "https://discord.gg/DvtqKrWb86", external: true },
    { id: 8, title: "Facebook", url: "https://www.facebook.com/ossph.org", external: true },
  ],
  [
    { id: 9, title: "Twitter/X", url: "https://twitter.com/OSSPhilippines", external: true },
    { id: 10, title: "Press Kit", url: "https://bit.ly/3xjDvN2", external: true },
    { id: 11, title: "Sponsor Us", url: "https://github.com/sponsors/OSSPhilippines", external: true },
  ],
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-7 md:px-10 max-w-7xl mx-auto h-[600px]">
      <div className="flex flex-col items-center justify-center gap-y-3 border-b border-dashed border-slate-400/20 py-10 lg:flex-row lg:items-center lg:justify-between">
        <h3 className="max-w-sm text-center text-2xl font-bold text-balance text-neutral-900 md:text-start md:text-4xl">
          Join the Open Source Movement!
        </h3>
        <div className="flex flex-col items-center justify-center gap-x-5 gap-y-2 py-4 sm:flex-row">
          <Link
            href="https://discord.gg/DvtqKrWb86"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-48 items-center justify-center rounded-full bg-[var(--ossph-primary)] text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-[var(--ossph-primary)] hover:ring-offset-2 lg:h-12 lg:text-base"
          >
            <DiscordIcon className="mr-2 h-5 w-5" />
            <span className="tracking-tight">Join Discord</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/sponsors/OSSPhilippines"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-48 items-center justify-center rounded-full border border-[var(--ossph-negative)] text-sm font-semibold text-[var(--ossph-negative)] transition ease-out hover:bg-[var(--ossph-negative)]/10 lg:h-12 lg:text-base"
          >
            <span className="tracking-tight">Sponsor Us</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start justify-start gap-y-5">
          <Link href="/" className="flex items-center gap-x-2.5">
            <Image
              src="/images/ossph-logo.png"
              alt="OSSPH Logo"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="tracking-tight text-neutral-900">
            The leading Open Source Software Community in the Philippines
          </p>
          <p className="text-sm tracking-tight text-neutral-500">
            Copyright &copy; {currentYear} Open Source Software PH. All rights reserved.
          </p>
        </div>
        <div className="pt-5 md:w-1/2">
          <div className="flex items-start justify-between gap-x-3 px-0 lg:px-10">
            {footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                {column.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700"
                  >
                    <Link
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.title}
                    </Link>
                    <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
