import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { ReactLenis } from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGC Fruit Labs | Nature's Finest",
  description: "Grown in the Tropics. Crafted for the World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ReactLenis root />
      <body className="flex min-h-full flex-col">
        <div
          className="fixed top-0 left-0 z-99 h-screen w-screen"
          style={{
            backgroundImage: "url('/grainy-effect.webp')",
            mixBlendMode: "hard-light",
            opacity: 0.06,
            pointerEvents: "none",
          }}
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
