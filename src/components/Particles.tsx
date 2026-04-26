"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        fullScreen: { enable: true, zIndex: 1 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: ["#a855f7", "#7c3aed", "#ffffff"] },
          opacity: {
            value: { min: 0.05, max: 0.4 },
            animation: { enable: true, speed: 0.8, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: { enable: true, speed: 2, sync: false },
          },
          links: {
            enable: true,
            color: "#7c3aed",
            opacity: 0.08,
            distance: 140,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
