"use client";

import { portfolioData } from "@/data/portfolio";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
      <p className="text-purple-500 text-base font-medium tracking-widest uppercase mb-2">
          Frontend Developer
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "2.5rem" }}>
          {portfolioData.name}
        </h1>
        <p style={{ fontSize: "1rem", color: "#555", maxWidth: "420px", lineHeight: 1.9, marginBottom: "3rem", fontWeight: 300, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
          Designing with intention. Building with care.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <motion.a
            href="#about"
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "0.75rem 2rem",
              border: "1px solid #954cb7",
              color: "#FFFFFF",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",

            }}
            className="glow-btn"
          >
            View Work
          </motion.a>
          

          <motion.a
            href="#about"
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "0.75rem 2rem",
              border: "1px solid #954cb7",
              color: "#FFFFFF",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
            }}
            className="glow-btn"
          >
            About Me
          </motion.a>

          <motion.a
            href="/CV.pdf"
            download="Nadithi_Moonasingha_CV.pdf"
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "0.75rem 2rem",
              border: "1px solid #954cb7",
              color: "#FFFFFF",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              position: "relative",
              overflow: "hidden",
            }}
            className="glow-btn"
          >
            <Download size={13} /> CV
          </motion.a>
      
        </div>
      </motion.div>
    </section>
  );
}
