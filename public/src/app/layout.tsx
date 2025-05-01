import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppSneak - #1 Online Resources Tool For Apps & Games",
  description:
    "AppSneak is a worldwide, free, and open-source app generation website. App Sneak offers the latest and most updated app and game tweaks, absolutely online and free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
