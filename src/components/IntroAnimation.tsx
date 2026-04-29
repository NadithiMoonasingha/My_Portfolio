"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"show" | "fadeout">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 2000);
    const t2 = setTimeout(() => onComplete(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "#080808",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.8s ease",
        opacity: phase === "fadeout" ? 0 : 1,
        pointerEvents: phase === "fadeout" ? "none" : "auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 700,
            color: "#e8e8e8",
            letterSpacing: "-0.02em",
            animation: "fadeUp 1s ease forwards",
          }}
        >
          NM<span style={{ color: "#954cb7" }}>.</span>
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#555",
            textTransform: "uppercase",
            marginTop: "1rem",
            animation: "fadeUp 1s ease 0.3s both",
          }}
        >
          Portfolio
        </div>
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
