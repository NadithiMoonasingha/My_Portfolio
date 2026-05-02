"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", type: "section" },
  { name: "Projects", type: "section" },
  { name: "Skills", type: "section" },
  { name: "Leadership", type: "section" },
  { name: "Contact", type: "section" },
  { name: "Gallery", type: "page" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter((l) => l.type === "section")
        .map((l) => document.getElementById(l.name.toLowerCase()));

      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current.id);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          transition: "all 0.3s",
          background:
            scrolled || menuOpen ? "rgba(8,8,8,0.9)" : "transparent",
          backdropFilter:
            scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "0.5px solid rgba(255,255,255,0.06)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1.25rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#f0f0f0",
              textDecoration: "none",
            }}
          >
            NM<span style={{ color: "#954cb7" }}>.</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "2.5rem",
              listStyle: "none",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              const isSectionActive =
                activeSection === link.name.toLowerCase();

              const isGalleryActive =
                pathname === "/gallery" && link.name === "Gallery";

              const isActive =
                pathname === "/gallery"
                  ? link.name === "Gallery"
                  : isSectionActive;

              return (
                <li key={link.name}>
                  {link.type === "section" ? (
                    <a
                      href={
                        pathname === "/"
                          ? `#${link.name.toLowerCase()}`
                          : `/#${link.name.toLowerCase()}`
                      }
                      style={{
                        position: "relative",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        color: isActive ? "#954cb7" : "#aaa",
                      }}
                    >
                      {link.name}

                      {/* UNDERLINE */}
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: "-6px",
                          height: "2px",
                          width: isActive ? "100%" : "0%",
                          background:
                            "linear-gradient(90deg, #954cb7, #c084fc)",
                          transition: "width 0.3s ease",
                          borderRadius: "2px",
                          boxShadow: isActive
                            ? "0 0 8px rgba(140,33,241,0.6)"
                            : "none",
                        }}
                      />
                    </a>
                  ) : (
                    <Link
                      href="/gallery"
                      style={{
                        position: "relative",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        color: isActive ? "#954cb7" : "#aaa",
                      }}
                    >
                      {link.name}

                      {/* UNDERLINE */}
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: "-6px",
                          height: "2px",
                          width: isActive ? "100%" : "0%",
                          background:
                            "linear-gradient(90deg, #954cb7, #c084fc)",
                          transition: "width 0.3s ease",
                          borderRadius: "2px",
                          boxShadow: isActive
                            ? "0 0 8px rgba(140,33,241,0.6)"
                            : "none",
                        }}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "all 0.3s",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.type === "section" ? (
                <a
                  href={`/#${link.name.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "2rem",
                    color: "#f0f0f0",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href="/gallery"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "2rem",
                    color: "#f0f0f0",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              )}
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