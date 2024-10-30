import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "One A Month",
  description: "Personal book review blog updated every month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-cream font-poppins">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
