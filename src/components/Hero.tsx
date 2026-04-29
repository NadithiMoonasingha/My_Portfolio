"use client";

import { portfolioData } from "@/data/portfolio";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#954cb7", marginBottom: "2rem" }}>
          Frontend Developer
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "2.5rem" }}>
          {portfolioData.name}
        </h1>
        <p style={{ fontSize: "1rem", color: "#555", maxWidth: "420px", lineHeight: 1.9, marginBottom: "3rem", fontWeight: 300, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
          Designing with intention. Building with care.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#projects" style={{ padding: "0.75rem 2rem", background: "#954cb7", color: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 400, letterSpacing: "0.05em", textDecoration: "none" }}>
            View Work
          </a>
          <a href="#about" style={{ padding: "0.75rem 2rem", border: "0.5px solid #333", color: "#aaa", borderRadius: "100px", fontSize: "13px", fontWeight: 400, letterSpacing: "0.05em", textDecoration: "none" }}>
            About Me
          </a>
          <a href="/CV.pdf" download="Nadithi_Moonasingha_CV.pdf" style={{ padding: "0.75rem 2rem", border: "0.5px solid #333", color: "#aaa", borderRadius: "100px", fontSize: "13px", fontWeight: 400, letterSpacing: "0.05em", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <Download size={13} /> CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
