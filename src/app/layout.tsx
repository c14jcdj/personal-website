import type { Metadata } from "next";
import { EB_Garamond, Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = EB_Garamond({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const script = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const productionUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: productionUrl
    ? new URL(`https://${productionUrl}`)
    : new URL("http://localhost:3000"),
  title: "Chermaine Zimmerman — Senior Software Engineer",
  description:
    "Senior software engineer and tech lead with 11 years of experience building thoughtful, scalable web experiences with Angular and React.",
  openGraph: {
    title: "Chermaine Zimmerman — Senior Software Engineer",
    description: "Building thoughtful, scalable web experiences.",
    images: ["/headshot.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
