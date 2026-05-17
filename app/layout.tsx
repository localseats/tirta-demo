import type { Metadata } from "next";
import { Cormorant_Garamond, Shippori_Mincho, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const shippori = Shippori_Mincho({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tirta — アロマ・リラクゼーションサロン",
  description: "バリ島古来の癒しの手技を、日本へ。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${shippori.variable} ${lato.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
