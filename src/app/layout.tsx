import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Nadithi Moonasingha | Frontend Developer",
  description: "Portfolio of Nadithi Moonasingha",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="gradient-bg" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
