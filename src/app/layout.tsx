import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/Particles";

export const metadata: Metadata = {
  title: "Nadithi Moonasingha | Frontend Developer",
  description: "Portfolio of Nadithi Moonasingha",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="gradient-bg" />
        <ParticlesBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
