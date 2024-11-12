import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Appbar } from "@/components/Appbar";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./provider";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelier",
  description: "Plan and book your next tour effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Appbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
