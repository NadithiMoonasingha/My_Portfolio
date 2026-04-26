import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <Hero />
      </div>
      <FadeIn><div className="pointer-events-auto"><Projects /></div></FadeIn>
      <FadeIn delay={0.1}><div className="pointer-events-auto"><Skills /></div></FadeIn>
      <FadeIn delay={0.1}><div className="pointer-events-auto"><Leadership /></div></FadeIn>
      <FadeIn delay={0.1}><div className="pointer-events-auto"><Contact /></div></FadeIn>
      <BackToTop />
    </main>
  );
}
