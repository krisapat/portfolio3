import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/compronents/Navber";
import Footer from "@/compronents/Footer";

export const metadata: Metadata = {
  title: "Japanese restaurant",
  description: "Japanese restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
