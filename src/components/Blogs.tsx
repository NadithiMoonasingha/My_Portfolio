"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const blogs = [
  {
    title: "Getting Started with WSO2 API Manager",
    subtitle: "Technical Blog",
    date: "May 2026",
    description:
      "A beginner-friendly technical guide explaining how to create, publish, subscribe to, and test an API using WSO2 API Manager.",
    tags: ["WSO2", "API Management", "Technical Writing", "Backend"],
    link: "https://medium.com/@moonasinghanadithi/getting-started-with-wso2-api-manager-a-beginner-friendly-guide-96ee63df8ed0",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" style={{ padding: "8rem 2.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">
          Technical Writing
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.2rem",
            fontWeight: 700,
            color: "#f0f0f0",
            marginBottom: "3rem",
          }}
        >
          Blogs & Articles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogs.map((blog) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, borderColor: "#954cb7" }}
              transition={{ duration: 0.3 }}
              style={{
                textDecoration: "none",
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "22px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#a855f7",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontWeight: 700,
                  }}
                >
                  {blog.subtitle}
                </p>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    lineHeight: 1.2,
                    color: "#f4f4f5",
                    marginBottom: "0.7rem",
                  }}
                >
                  {blog.title}
                </h3>

                <p style={{ fontSize: "12px", color: "#777" }}>{blog.date}</p>
              </div>

              <p
                style={{
                  fontSize: "15px",
                  color: "#a1a1aa",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {blog.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "6px 13px",
                      border: "1px solid rgba(149,76,183,0.45)",
                      color: "#c084fc",
                      borderRadius: "100px",
                      background: "rgba(219,196,230,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Read Article <ExternalLink size={15} />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}