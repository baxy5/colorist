import type { Metadata } from "next";
import "../assets/css/globals.css";
import { Playpen_Sans } from "next/font/google";

const playpen = Playpen_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Színező Készítő - Készíts Színezőket és Nyomtasd ki, Gyerekeknek és Felnőtteknek",
  description:
    "Szabadítsd fel a kreativitásod! Készíts egyedi színezőket most!",
  keywords: [
    "színező",
    "színező készítő",
    "színező generáló",
    "színező generátor",
    "színező nyomtatás",
    "nyomtatható színező",
  ],
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL("https://szinezokeszito.hu"),
  openGraph: {
    title:
      "Színező Készítő - Készíts Színezőket és Nyomtasd ki, Gyerekeknek és Felnőtteknek",
    description:
      "Szabadítsd fel a kreativitásod! Készíts egyedi színezőket most!",
    url: "https://szinezokeszito.hu",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Színező Készítő",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${playpen.className}`}>{children}</body>
    </html>
  );
}
