import type { Metadata } from "next";
import "./globals.css";
import { Inter, Syncopate } from 'next/font/google';  

export const metadata: Metadata = {
  title: "Saurozen",
  description: "Responsive, AI-Designed Y2K-Inspired Sustainable Sunglasses Store",
};

const inter = Inter({
   subsets: ['latin'],
   style: 'normal', 
  });

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={syncopate.className}>
        <div className="work-in-progress">WORK IN PROGRESS</div>
        {children}
      </body>
    </html>
  );
}
