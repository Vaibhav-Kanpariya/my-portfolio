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
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <Navigation />
      <ScrollProgress />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
    </div>
  );
}
