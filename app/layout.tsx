import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://thefitsteph.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TheFitSteph | Accountability is the plan.",
    template: "%s | TheFitSteph",
  },
  description:
    "TheFitSteph is a personal accountability coaching brand and home of the D30 fitness community. Accountability is the plan. Fitness is how it shows up.",
  keywords: [
    "TheFitSteph",
    "D30",
    "accountability coaching",
    "fitness accountability",
    "D30 Remote Gym",
    "D30 Group",
    "one-on-one coaching",
  ],
  openGraph: {
    title: "TheFitSteph | Accountability is the plan.",
    description:
      "Accountability is the plan. Fitness is how it shows up. Discover the D30 programs built to keep you consistent.",
    url: siteUrl,
    siteName: "TheFitSteph",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheFitSteph | Accountability is the plan.",
    description:
      "Accountability is the plan. Fitness is how it shows up. Discover the D30 programs built to keep you consistent.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
