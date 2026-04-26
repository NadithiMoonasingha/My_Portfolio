"use client";

import { portfolioData } from "@/data/portfolio";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto"
    >
      <div className="pt-24">
        <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
          Hi, I am
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          {portfolioData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-400 mb-6">
          {portfolioData.title}
        </h2>
        <p className="text-gray-400 max-w-xl text-base leading-relaxed mb-10">
          {portfolioData.about}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-medium transition-colors duration-200">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 hover:border-white/50 text-white rounded-full text-sm font-medium transition-colors duration-200">
            Get In Touch
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 hover:border-white/50 text-white rounded-full text-sm font-medium transition-colors duration-200">
            GitHub
          </a>
          <a href="/CV.pdf" download="Nadithi_Moonasingha_CV.pdf" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-medium transition-colors duration-200">
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
