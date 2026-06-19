import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "O'Resto Pizza | Where Flavor Meets Fantasy",
  description:
    "Premium pizzas, juicy burgers, crispy broast & unforgettable taste. 6 branches across Gujranwala. Order online for delivery, takeaway, or dine-in.",
  keywords: [
    "O'Resto Pizza",
    "pizza Gujranwala",
    "best pizza Pakistan",
    "broast",
    "burger delivery",
    "midnight deals",
  ],
  openGraph: {
    title: "O'Resto Pizza | Where Flavor Meets Fantasy",
    description:
      "Freshly baked pizzas, juicy burgers, crispy broast. 50,000+ happy customers across 6 branches.",
    type: "website",
    locale: "en_PK",
    siteName: "O'Resto Pizza",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
