import type { Metadata } from "next";
import "./globals.css";
import { Inter, Audiowide, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400", variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Saurozen",
  description: "Responsive, AI-Designed Y2K-Inspired Sustainable Sunglasses Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable} ${montserrat.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
