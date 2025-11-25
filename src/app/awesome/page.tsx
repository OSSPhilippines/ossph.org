import { Metadata } from "next";
import AwesomePageClient from "./awesome-page-client";

export const metadata: Metadata = {
  title: "Awesome Pinoy-Made Projects",
  description:
    "Discover amazing open source projects made by Filipino developers. Browse our curated collection of tools, libraries, and applications built by the Philippine tech community.",
  alternates: {
    canonical: "https://ossph.org/awesome",
  },
  openGraph: {
    title: "Awesome Pinoy-Made Open Source Projects",
    description:
      "Discover amazing open source projects made by Filipino developers. Tools, libraries, and applications from the Philippine tech community.",
    url: "https://ossph.org/awesome",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Awesome Pinoy-Made Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome Pinoy-Made Open Source Projects",
    description:
      "Discover amazing open source projects made by Filipino developers. Tools, libraries, and applications from the Philippine tech community.",
  },
};

export default function AwesomePage() {
  return <AwesomePageClient />;
}
