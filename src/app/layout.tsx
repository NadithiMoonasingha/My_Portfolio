import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Nadithi Moonasingha | Frontend Developer",
  description: "Portfolio of Nadithi Moonasingha – Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="gradient-bg" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}