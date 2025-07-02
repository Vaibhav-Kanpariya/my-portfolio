"use client";

import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  GitBranch,
  Zap,
  Shield,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof skillCategories>("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", experience: "2+ years", icon: "⚛️" },
        { name: "Next.js", experience: "1.5+ years", icon: "▲" },
        { name: "TypeScript", experience: "2+ years", icon: "🔷" },
        { name: "JavaScript (ES6+)", experience: "2+ years", icon: "🟨" },
        { name: "HTML5 & CSS3", experience: "2+ years", icon: "🌐" },
        { name: "Tailwind CSS", experience: "1+ year", icon: "💨" },
        { name: "SCSS/Sass", experience: "1.5+ years", icon: "💅" },
        { name: "Redux/Zustand", experience: "1+ year", icon: "🔄" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", experience: "2+ years", icon: "🟢" },
        { name: "Express.js", experience: "1.5+ years", icon: "🚀" },
        { name: "Python", experience: "1+ year", icon: "🐍" },
        { name: "FastAPI", experience: "8+ months", icon: "⚡" },
        { name: "RESTful APIs", experience: "2+ years", icon: "🔗" },
        { name: "GraphQL", experience: "6+ months", icon: "📊" },
        { name: "JWT Authentication", experience: "1+ year", icon: "🔐" },
        { name: "Microservices", experience: "8+ months", icon: "🏗️" },
      ],
    },
    database: {
      title: "Database & Cloud",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "PostgreSQL", experience: "1.5+ years", icon: "🐘" },
        { name: "MongoDB", experience: "1+ year", icon: "🍃" },
        { name: "Redis", experience: "8+ months", icon: "🔴" },
        { name: "AWS Services", experience: "1+ year", icon: "☁️" },
        { name: "Docker", experience: "1+ year", icon: "🐳" },
        { name: "Kubernetes", experience: "6+ months", icon: "⚙️" },
        { name: "Firebase", experience: "1+ year", icon: "🔥" },
        { name: "Supabase", experience: "8+ months", icon: "⚡" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: GitBranch,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git & GitHub", experience: "2+ years", icon: "🐙" },
        { name: "VS Code", experience: "2+ years", icon: "💻" },
        { name: "Webpack/Vite", experience: "1+ year", icon: "📦" },
        { name: "Jest/Testing", experience: "1+ year", icon: "🧪" },
        { name: "CI/CD Pipelines", experience: "8+ months", icon: "🔄" },
        { name: "Linux/Unix", experience: "1+ year", icon: "🐧" },
        { name: "Nginx", experience: "6+ months", icon: "🌐" },
        { name: "Monitoring Tools", experience: "6+ months", icon: "📈" },
      ],
    },
  };

  const achievements = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improved app performance by 65% through code splitting and caching",
      metric: "65% faster",
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description:
        "Implemented secure authentication and authorization systems",
      metric: "100% secure",
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built applications serving 100K+ users with 99.9% uptime",
      metric: "99.9% uptime",
    },
    {
      icon: Palette,
      title: "UI/UX Excellence",
      description:
        "Created pixel-perfect, responsive designs across all devices",
      metric: "100% responsive",
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set across the full development stack with
            proven experience
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <achievement.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {achievement.description}
              </p>
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                {achievement.metric}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Skill Categories
            </h3>
            <div className="space-y-3">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={key}
                    onClick={() =>
                      setActiveCategory(key as keyof typeof skillCategories)
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      activeCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  {React.createElement(skillCategories[activeCategory].icon, {
                    className: "h-8 w-8 text-white",
                  })}
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {skillCategories[activeCategory].skills.map(
                    (skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/30"
                      >
                        <div className="text-2xl">{skill.icon}</div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-lg">
                            {skill.name}
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-400 mt-1"
                          >
                            {skill.experience}
                          </Badge>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
