"use client";

import React from "react";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  Star,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  type SkillCategoryKey = "frontend" | "backend" | "database" | "tools" | "ai";
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryKey>("frontend");

  const skillCategories: Record<
    SkillCategoryKey,
    {
      title: string;
      icon: React.ElementType;
      color: string;
      bgGradient: string;
      borderColor: string;
      skills: {
        name: string;
        icon: string;
        color: string;
      }[];
    }
  > = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30",
      skills: [
        {
          name: "React.js",
          icon: "./TechImages/react.svg",
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          icon: "./TechImages/nextjs.svg",
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "TypeScript",
          icon: "./TechImages/typescript.svg",
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "JavaScript (ES6+)",
          icon: "./TechImages/javascript.svg",
          color: "from-yellow-400 to-orange-400",
        },
        {
          name: "HTML5 & CSS3",
          icon: "./TechImages/html5.svg",
          color: "from-orange-400 to-red-400",
        },
        {
          name: "Tailwind CSS",
          icon: "./TechImages/tailwindcss.svg",
          color: "from-teal-400 to-cyan-400",
        },
        {
          name: "Zustand",
          icon: "./TechImages/zustand.svg",
          color: "from-purple-400 to-indigo-400",
        },
        {
          name: "React Query",
          icon: "./TechImages/reactquery.svg",
          color: "from-purple-400 to-indigo-400",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        {
          name: "Node.js",
          icon: "./TechImages/nodejs.svg",
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Express.js",
          icon: "./TechImages/express.svg",
          color: "from-gray-400 to-slate-400",
        },
        {
          name: "Python",
          icon: "./TechImages/python.svg",
          color: "from-blue-400 to-yellow-400",
        },
        {
          name: "FastAPI",
          icon: "./TechImages/fastapi.svg",
          color: "from-green-400 to-teal-400",
        },
        {
          name: "RESTful APIs",
          icon: "./TechImages/restapi.svg",
          color: "from-indigo-400 to-purple-400",
        },
      ],
    },
    database: {
      title: "Database & Cloud",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      skills: [
        {
          name: "PostgreSQL",
          icon: "./TechImages/postgresql.svg",
          color: "from-blue-400 to-indigo-400",
        },
        {
          name: "MongoDB",
          icon: "./TechImages/mongodb.svg",
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "AWS Services",
          icon: "./TechImages/aws.svg",
          color: "from-orange-400 to-yellow-400",
        },
        {
          name: "Docker",
          icon: "./TechImages/docker.svg",
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Firebase",
          icon: "./TechImages/firebase.svg",
          color: "from-orange-400 to-red-400",
        },
        {
          name: "MySQL",
          icon: "./TechImages/mysql.svg",
          color: "from-orange-400 to-red-400",
        },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: GitBranch,
      color: "from-orange-400 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      skills: [
        {
          name: "Git & GitHub",
          icon: "./TechImages/git.svg",
          color: "from-gray-400 to-slate-400",
        },
        {
          name: "VS Code",
          icon: "./TechImages/vscode.svg",
          color: "from-blue-400 to-indigo-400",
        },
        {
          name: "JIRA",
          icon: "./TechImages/jira.svg",
          color: "from-blue-400 to-indigo-400",
        },
        {
          name: "Figma",
          icon: "./TechImages/figma.svg",
          color: "from-blue-400 to-indigo-400",
        },
      ],
    },
    ai: {
      title: "AI & Tools",
      icon: BrainCircuit,
      color: "from-purple-400 to-purple-500 bg-pu",
      bgGradient: "from-purple-500/10 to-cyan-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        {
          name: "OpenAI",
          icon: "./TechImages/openai.svg",
          color: "from-gray-400 to-slate-400",
        },
        {
          name: "LangChain",
          icon: "./TechImages/langchain.svg",
          color: "from-blue-400 to-indigo-400",
        },
        {
          name: "Gemini",
          icon: "./TechImages/gemini.svg",
          color: "from-blue-400 to-indigo-400",
        },
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
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description:
        "Implemented secure authentication and authorization systems",
      metric: "100% secure",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built applications serving 100K+ users with 99.9% uptime",
      metric: "99.9% uptime",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Palette,
      title: "UI/UX Excellence",
      description:
        "Created pixel-perfect, responsive designs across all devices",
      metric: "100% responsive",
      color: "from-purple-400 to-pink-400",
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
          >
            <Star className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack with
            modern technologies
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
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-purple-400" />
          Skill Categories
        </h3>
        <div className="grid lg:grid-cols-4 gap-8 lg:h-auto">
          {/* Enhanced Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 flex flex-col h-full"
          >
            <div className="sticky top-24 flex-1">
              <div className="space-y-3">
                {Object.entries(skillCategories).map(([key, category]) => {
                  const IconComponent = category.icon;
                  const isActive = activeCategory === key;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setActiveCategory(key as SkillCategoryKey)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 text-left relative overflow-hidden group ${
                        isActive
                          ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-purple-500/25`
                          : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-700/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <div className="relative flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive ? "bg-white/20" : "bg-gray-700/50"
                          } transition-colors duration-300`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium block">
                            {category.title}
                          </span>
                          <span className="text-xs opacity-70">
                            {
                              skillCategories[key as SkillCategoryKey].skills
                                .length
                            }{" "}
                            technologies
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-3 flex flex-col h-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-1 flex-col"
              >
                <Card
                  className={`bg-gradient-to-br ${skillCategories[activeCategory].bgGradient} border ${skillCategories[activeCategory].borderColor} backdrop-blur-sm rounded-xl flex-1`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                      >
                        {React.createElement(
                          skillCategories[activeCategory].icon,
                          {
                            className: "h-8 w-8 text-white",
                          }
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {skillCategories[activeCategory].title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {skillCategories[activeCategory].skills.length}{" "}
                          technologies I work with
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {skillCategories[activeCategory].skills.map(
                        (skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-lg bg-cyan-500" />
                            <div className="relative flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-800/40 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/30 hover:border-cyan-500/50 backdrop-blur-sm text-center">
                              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="h-10 w-10 object-fit"
                                />
                              </div>
                              <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                                {skill.name}
                              </h4>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
