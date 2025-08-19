"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-gray-800/20 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 origin-left"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
