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
            I am a Computer Science undergraduate at the University of Westminster, studying through the Informatics Institute of Technology (IIT) in Colombo. My work sits at the intersection of engineering and design, I care as much about how something feels as how it works.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#aaa", lineHeight: 1.9, fontWeight: 300 }}>
            I have spent the past year building real systems, a healthcare platform for multi-role clinical workflows, energy tracking tools, climate action websites, each one teaching me something new about what it means to design for real people with real constraints.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#aaa", lineHeight: 1.9, fontWeight: 300 }}>
          I actively contribute to student communities by organising large scale tech and career events, collaborating in team driven environments to create meaningful impact. Before university, I competed in badminton at a national level, which helped develop my discipline and focus. I am currently open to frontend and design engineer internships for 2026.
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
