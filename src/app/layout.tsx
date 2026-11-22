import { siteOrigin } from "@/lib/site-origin";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./hero.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});
const baseUrl = siteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Allocira | LLP Partner Finance & Payout Management",
  description:
    "Explore Allocira, a proposed financial management platform for law firm LLPs. Simplify billable hours, expense allocation, partner profit-sharing and payout reporting. Join the early-access waitlist.",
  openGraph: {
    title: "Allocira | LLP Partner Finance & Payout Management",
    description:
      "A proposed partner finance platform for law firm LLPs. Explore the concept and join early access.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allocira | LLP Partner Finance & Payout Management",
    description:
      "Explore the proposed platform for clearer law firm partner finances.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
