"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#954cb7", marginBottom: "1rem" }}>Capabilities</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#f0f0f0", marginBottom: "4rem" }}>Skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category}>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: "1.25rem" }}>{category}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {items.map(skill => (
                  <p key={skill} style={{ fontSize: "0.95rem", color: "#888", fontWeight: 300, lineHeight: 1.5 }}>{skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
