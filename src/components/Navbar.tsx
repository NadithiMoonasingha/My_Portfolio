"use client";

import { useState, useEffect } from "react";

const navLinks = ["About", "Projects", "Skills", "Leadership", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.getElementById(l.toLowerCase()));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold text-xl tracking-tight" onClick={() => setMenuOpen(false)}>
            NM<span className="text-purple-400">.</span>
          </a>
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === link.toLowerCase()
                      ? "text-purple-400 font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full screen mobile menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-2xl font-medium transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? "text-purple-400"
                    : "text-white hover:text-purple-300"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
