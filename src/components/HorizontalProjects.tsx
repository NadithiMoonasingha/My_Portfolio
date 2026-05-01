"use client";

import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "0 2.5rem",
          maxWidth: "1200px",
          margin: "0 auto 3.5rem",
        }}
      >
        <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">
          Case Studies
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "2rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.2rem",
              fontWeight: 700,
              color: "#f0f0f0",
            }}
          >
            Selected Projects
          </h2>

          <p
            style={{
              fontSize: "13px",
              color: "#777",
              letterSpacing: "0.05em",
            }}
          >
            ← drag to explore →
          </p>
        </div>
      </motion.div>

      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          overflowY: "hidden",
          padding: "0 2.5rem 2rem",
          cursor: "grab",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.01 }}
            whileHover={{borderColor: "#954cb7"}}
            style={{
              flexShrink: 0,
              width: "470px",
              minHeight: "720px",
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "22px",
              padding: "2.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              transition: "border-color 0.4s, transform 0.4s",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "0.9rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#a855f7",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: "0.55rem",
                      fontWeight: 700,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      lineHeight: 1.15,
                      fontWeight: 600,
                      color: "#f4f4f5",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.date}
                </p>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "#a855f7",
                  fontWeight: 600,
                  marginBottom: "1.1rem",
                }}
              >
                {project.role}
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "#a1a1aa",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {project.description}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "1rem",
              }}
            >
              <div>
                <p style={labelStyle}>Problem</p>
                <p style={caseTextStyle}>{project.details.problem}</p>
              </div>

              <div>
                <p style={labelStyle}>Approach</p>
                <p style={caseTextStyle}>{project.details.approach}</p>
              </div>

              <div>
                <p style={labelStyle}>Impact</p>
                <p style={caseTextStyle}>{project.details.impact}</p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px",
                    padding: "6px 13px",
                    border: "1px solid #954cb7)",
                    color: "#c084fc",
                    borderRadius: "100px",
                    background: "rgba(219, 196, 230, 0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={buttonStyle}
                  className="glow-btn"
                >
                  <ExternalLink size={15} /> Live
                </motion.a>
              )}

              {project.repo && (
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={buttonStyle}
                  className="glow-btn"
                >
                  <GitBranch size={15} /> Code
                </motion.a>
              )}
            </div>

            <div
              style={{
                marginTop: "auto",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                position: "relative",
              }}
            >
              {project.image ? (
                <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              ) : (
                <div
                  style={{
                    marginTop: "auto",
                    width: "10%",
                    aspectRatio: "16 / 9",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "linear-gradient(135deg, rgba(149,76,183,0.08), rgba(0,0,0,0.4))",
                    position: "relative",
                  }}
                >
                  Project Preview
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#a855f7",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontWeight: 700,
  marginBottom: "0.35rem",
};

const caseTextStyle: React.CSSProperties = {
  fontSize: "14.5px",
  color: "#8f8f98",
  lineHeight: 1.65,
  fontWeight: 300,
};

const buttonStyle: React.CSSProperties = {
  padding: "0.6rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  border: "1px solid #954cb7",
  color: "#ffffff",
  borderRadius: "100px",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.04em",
  textDecoration: "none",
  position: "relative",
  overflow: "hidden",
};