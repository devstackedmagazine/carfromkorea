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
  title: "CarFromKorea | Sallon Premium i Automjeteve",
  description:
    "Zbuloni automjete luksoze me çmime transparente, financim fleksibël dhe shërbim të jashtëzakonshëm ndaj klientit. Gjeni makinën tuaj të përsosur në CarFromKorea.",
  keywords: [
    "tregtia e makinave",
    "automjete luksoze",
    "financim makinash",
    "makina premium",
  ],
  authors: [{ name: "CarFromKorea" }],
  openGraph: {
    title: "CarFromKorea | Sallon Premium i Automjeteve",
    description: "Gjeni automjetin tuaj të përsosur me CarFromKorea",
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
