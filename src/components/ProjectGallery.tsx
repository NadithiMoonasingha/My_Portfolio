"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProjectGalleryProps = {
  title: string;
  images: string[];
  frameWidth?: string;
  frameMaxWidth?: string;
  frameAspectRatio?: string;
  imageFit?: "cover" | "contain";
  gridColumns?: string;
};

export default function ProjectGallery({
  title,
  images,
  frameWidth = "70%",
  frameMaxWidth = "100%",
  frameAspectRatio,
  imageFit = "cover",
  gridColumns = "repeat(auto-fit, minmax(280px, 1fr))",
}: ProjectGalleryProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "9rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          color: "#f0f0f0",
          marginBottom: "2rem",
        }}
      >
        {title} Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {images.map((src: string, i: number) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            style={{
              position: "relative",
              width: frameWidth,
              maxWidth: frameMaxWidth,
              aspectRatio: frameAspectRatio,
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0c0c0f",
            }}
          >
            <Image
              src={src}
              alt="preview"
              fill
              sizes="100vw"
              style={{
                objectFit: imageFit,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}