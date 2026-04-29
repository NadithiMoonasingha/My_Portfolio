"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HorizontalProjects from "@/components/HorizontalProjects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      <main style={{ opacity: introComplete ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Hero />
        <About />
        <HorizontalProjects />
        <Skills />
        <Leadership />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}
