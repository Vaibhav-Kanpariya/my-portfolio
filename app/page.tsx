"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useInView } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundEffects from "@/components/ui/BackgroundEffects";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
