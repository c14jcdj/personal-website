import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
