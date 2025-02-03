import type { Metadata } from "next";
import "./globals.css";
import { Inter, Audiowide, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Saurozen",
  description: "Responsive, AI-Designed Y2K-Inspired Sustainable Sunglasses Store",
};

// Assign font variables instead of class names
const inter = Inter({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-inter",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-audiowide",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable} ${montserrat.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
