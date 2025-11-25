import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/layout/cta-section";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ossph.org"),
  title: {
    default: "Open Source Software PH (OSSPH) - The Leading OSS Community in the Philippines",
    template: "%s | OSSPH",
  },
  description:
    "Join the leading Open Source Software community in the Philippines. Connect with Filipino developers, contribute to open source projects, learn from experts, and grow your skills together.",
  keywords: [
    "open source",
    "philippines",
    "software",
    "community",
    "OSSPH",
    "Filipino developers",
    "open source projects",
    "tech community",
    "software development",
    "programming",
  ],
  authors: [{ name: "Open Source Software PH", url: "https://ossph.org" }],
  creator: "Open Source Software PH",
  publisher: "Open Source Software PH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ossph.org",
  },
  openGraph: {
    title: "Open Source Software PH (OSSPH)",
    description:
      "Join the leading Open Source Software community in the Philippines. Connect with Filipino developers, contribute to open source projects, and grow your skills.",
    url: "https://ossph.org",
    siteName: "OSSPH",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "OSSPH - Open Source Software Philippines Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Software PH (OSSPH)",
    description:
      "Join the leading Open Source Software community in the Philippines. Connect with Filipino developers and grow your skills.",
    images: ["/images/og-banner.png"],
    creator: "@OSSPhilippines",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Open Source Software PH",
  alternateName: "OSSPH",
  url: "https://ossph.org",
  logo: "https://ossph.org/images/ossph-logo.png",
  description:
    "The leading Open Source Software community in the Philippines, connecting Filipino developers and promoting open source culture.",
  foundingDate: "2020",
  sameAs: [
    "https://github.com/OSSPhilippines",
    "https://discord.gg/DvtqKrWb86",
    "https://www.facebook.com/OSSPhilippines",
    "https://twitter.com/OSSPhilippines",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "community support",
    url: "https://discord.gg/DvtqKrWb86",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${robotoCondensed.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CTASection />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
