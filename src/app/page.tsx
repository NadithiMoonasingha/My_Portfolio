"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Gallery from "@/app/gallery/page";
import BackToTop from "@/components/BackToTop";


export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      <main style={{ opacity: introComplete ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
        <Gallery />
        <BackToTop />
      </main>
    </>
  );
}
