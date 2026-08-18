import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const productionUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: productionUrl
    ? new URL(`https://${productionUrl}`)
    : new URL("http://localhost:3000"),
  title: "Chermaine Zimmerman — Senior Frontend Engineer",
  description:
    "Senior frontend engineer and tech lead with 11 years of experience building thoughtful, scalable web experiences with Angular and React.",
  openGraph: {
    title: "Chermaine Zimmerman — Senior Frontend Engineer",
    description: "Building thoughtful, scalable web experiences.",
    images: ["/headshot.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
