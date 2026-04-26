import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeIn><Projects /></FadeIn>
      <FadeIn delay={0.1}><Skills /></FadeIn>
      <FadeIn delay={0.1}><Leadership /></FadeIn>
      <FadeIn delay={0.1}><Contact /></FadeIn>
      <BackToTop />
    </main>
  );
}
