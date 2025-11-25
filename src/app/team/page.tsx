import { Metadata } from "next";
import TeamPageClient from "./team-page-client";

export const metadata: Metadata = {
  title: "Meet The Team",
  description:
    "Meet the amazing volunteers behind OSSPH. Our team of passionate Filipino developers and community leaders driving open source initiatives in the Philippines.",
  alternates: {
    canonical: "https://ossph.org/team",
  },
  openGraph: {
    title: "Meet The OSSPH Team",
    description:
      "Meet the amazing volunteers behind OSSPH. Our team of passionate Filipino developers and community leaders.",
    url: "https://ossph.org/team",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "OSSPH Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet The OSSPH Team",
    description:
      "Meet the amazing volunteers behind OSSPH. Our team of passionate Filipino developers and community leaders.",
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
