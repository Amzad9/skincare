import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skincare Brand",
  description: "Luxury skincare & beauty products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
