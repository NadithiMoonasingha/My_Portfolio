"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}
        className="about-grid"
      >
        <div>
        <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">About</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#f0f0f0", lineHeight: 1.2 }}>
            Designing with<br /><em>intention.</em>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "1.05rem", color: "#aaa", lineHeight: 1.9, fontWeight: 300 }}>
          I am a Computer Science undergraduate at the University of Westminster, studying through the Informatics Institute of Technology (IIT) in Colombo. I am interested in building practical digital solutions that are reliable, efficient, and useful for real people.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#aaa", lineHeight: 1.9, fontWeight: 300 }}>
            Over the past year, I have worked on different software projects, including healthcare systems, energy tracking tools, climate action websites, and management applications. These projects have helped me improve my problem-solving skills, technical knowledge, and understanding of how software can support real-world needs.

          </p>
          <p style={{ fontSize: "1.05rem", color: "#aaa", lineHeight: 1.9, fontWeight: 300 }}>
          actively contribute to student communities by organising large-scale tech and career events and collaborating in team-driven environments. Before university, I competed in badminton at a national level, which helped me develop discipline, focus, and resilience. I am currently open to software development and technolog related internship opportunities for 2026.
          </p>
        </div>
      </motion.div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
