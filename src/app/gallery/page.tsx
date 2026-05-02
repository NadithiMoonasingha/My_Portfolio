"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/projects/Clinexis_SplashScreen.jpeg",
  "/projects/Clinexis_HomePage.jpeg",
  "/projects/Clinexis_ChooseProfile.jpeg",
  "/projects/Clinexis_SignIn.jpeg",
  "/projects/Clinexis_SignUp.jpeg",
  "/projects/Clinexis_ForgotPassword.jpeg",
  "/projects/Clinexis_CreateNewPassword.jpeg",
];

export default function GalleryPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "7rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "3rem" }}
      >
        <p
          style={{
            color: "#a855f7",
            letterSpacing: "0.15em",
            fontSize: "12px",
            marginBottom: "0.6rem",
          }}
        >
          VISUAL WORK
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            color: "#f0f0f0",
          }}
        >
          Project Gallery
        </h1>

        <p style={{ color: "#888", marginTop: "0.8rem", fontSize: "15px" }}>
          A visual collection of my project interfaces and UI explorations.
        </p>
      </motion.div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              width: "70%",
              height: "500px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0c0c0f",
            }}
          >
            <Image
              src={src}
              alt="Project Preview"
              fill
              style={{
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}