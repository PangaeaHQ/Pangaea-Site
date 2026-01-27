import type { Metadata } from "next";
import { Work_Sans, Lora, Inconsolata } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: [ "latin" ],
  weight: [ "400", "500", "600", "700" ],
  variable: "--font-work-sans",
  display: "swap",
});

const lora = Lora({
  subsets: [ "latin" ],
  weight: [ "400", "500", "600", "700" ],
  variable: "--font-lora",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: [ "latin" ],
  weight: [ "400", "700" ],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pangaea.dev"),
  title: {
    default: "Pangaea — Where humans are.",
    template: "%s — Pangaea",
  },
  description:
    "Where humans are. Pangaea helps neighbors, families, and communities reconnect through trust, privacy, and mutual aid—online or offline.",
  keywords: [
    "where humans are",
    "community connection",
    "local communities",
    "mutual aid",
    "offline communication",
    "mesh networking",
    "private coordination",
    "community resilience",
    "people over platforms",
    "hyperlocal networks",
    "decentralized communication",
    "privacy-first technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pangaea.dev",
    siteName: "Pangaea",
    title: "Pangaea — Where humans are.",
    description:
      "Pangaea enables communication and coordination without relying on networks that can be shut down, monitored, or removed.",
    images: [
      {
        url: "/pangaea-xl.jpg",
        width: 1200,
        height: 630,
        alt: "Pangaea — Where humans are.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangaea — Where humans are.",
    description:
      "Pangaea enables communication and coordination without relying on networks that can be shut down, monitored, or removed.",
    images: [ "/pangaea-xl.jpg" ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pangaea.dev",
  },
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${lora.variable} ${inconsolata.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}