"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Rocket,
  Users,
  Award,
  Coffee,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "2+ Years Experience",
      description:
        "Professional full-stack development with modern technologies",
    },
    {
      icon: Rocket,
      title: "20+ Projects Delivered",
      description:
        "Successfully launched applications serving thousands of users",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led development teams and mentored junior developers",
    },
    {
      icon: Award,
      title: "Performance Expert",
      description:
        "Specialized in optimizing applications for speed and scalability",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Focus on delivering measurable business value through technology",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Committed to staying current with industry trends",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a proven track record of
            building scalable, high-performance applications that drive business
            success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Started my development journey 2+ years ago with a passion for
                creating digital solutions that make a real impact. What began
                as curiosity about how websites work has evolved into expertise
                across the entire development stack.
              </p>
              <p>
                I specialize in building modern web applications using React,
                Next.js, and Node.js, with a strong focus on performance
                optimization, user experience, and scalable architecture. My
                experience spans from early-stage startups to enterprise-level
                applications.
              </p>
              <p>
                Beyond coding, I'm passionate about mentoring other developers,
                contributing to open-source projects, and staying at the
                forefront of web development trends. I believe in writing clean,
                maintainable code and following industry best practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Problem Solver",
                "Team Player",
                "Quick Learner",
                "Detail-Oriented",
              ].map((trait) => (
                <Badge
                  key={trait}
                  className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1"
                >
                  {trait}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
              />

              {/* Profile Image Placeholder */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Years Exp</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            What I Bring
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values & Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            My Values & Approach
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <value.icon className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
