"use client";

import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

export default function HorizontalProjects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const startX = e.pageX - track.offsetLeft;
    const scrollLeft = track.scrollLeft;
    const onMove = (e: MouseEvent) => {
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX);
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <section id="projects" style={{ padding: "8rem 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ padding: "0 2.5rem", maxWidth: "1100px", margin: "0 auto 3rem" }}
      >
        <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">Work</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#f0f0f0" }}>Selected Projects</h2>
          <p style={{ fontSize: "12px", color: "#444", letterSpacing: "0.05em" }}>← drag to explore →</p>
        </div>
      </motion.div>

      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        style={{
          display: "flex", gap: "1.5rem",
          overflowX: "auto", overflowY: "hidden",
          padding: "0 2.5rem 2rem",
          cursor: "grab",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            style={{
              flexShrink: 0,
              width: "340px",
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              transition: "border-color 0.4s",
            }}
            whileHover={{ borderColor: "rgba(149,76,183,0.4)" }}
          >
            <div style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.04)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "11px", color: "#333", letterSpacing: "0.1em" }}>MOCKUP / SCREENSHOT</span>
            </div>
            <div>
              <p style={{ fontSize: "10px", color: "#954cb7", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>{project.subtitle}</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 500, color: "#f0f0f0", marginBottom: "8px" }}>{project.title}</h3>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, fontWeight: 300 }}>{project.description}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ fontSize: "10px", padding: "3px 10px", border: "0.5px solid rgba(149,76,183,0.2)", color: "#954cb7", borderRadius: "100px" }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#555", display: "flex", alignItems: "center", gap: "5px", textDecoration: "none" }}>
                  <ExternalLink size={12} /> Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#555", display: "flex", alignItems: "center", gap: "5px", textDecoration: "none" }}>
                  <GitBranch size={12} /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
