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
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, transition: "all 0.3s", background: scrolled || menuOpen ? "rgba(8,8,8,0.9)" : "transparent", backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none", borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.25rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#f0f0f0", textDecoration: "none" }}>
            NM<span style={{ color: "#8c21f1" }}>.</span>
          </a>
          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  
                  style={{ fontSize: "13px", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.2s", color: activeSection === link.toLowerCase() ? "#8c21f1" : "#555" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }} className="mobile-menu-btn" aria-label="Toggle menu">
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", height: "0.5px", background: "#aaa", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ display: "block", height: "0.5px", background: "#aaa", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: "0.5px", background: "#aaa", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </div>
          </button>
        </div>
      </nav>

      <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", transition: "all 0.3s", opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }} className="mobile-menu">
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 500, color: activeSection === link.toLowerCase() ? "#954cb7" : "#f0f0f0", textDecoration: "none" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
