import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarFromKorea | Premium Car Showroom",
  description:
    "Discover luxury vehicles with transparent pricing, flexible financing, and exceptional customer service. Find your perfect drive at CarFromKorea.",
  keywords: [
    "car dealership",
    "luxury vehicles",
    "car financing",
    "premium cars",
  ],
  authors: [{ name: "CarFromKorea" }],
  openGraph: {
    title: "CarFromKorea | Premium Car Showroom",
    description: "Find your perfect vehicle with CarFromKorea",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={"scroll-smooth", "font-sans", geistMono.variable}
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <main className="overflow-clip">{children}</main>
      </body>
    </html>
  );
}
