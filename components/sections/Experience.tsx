"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Code, Award } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      logo: "./culturex.jpg",
      company: "CultureX Entertainment Private Limited",
      role: "SDE | Full Stack Developer",
      period: "Aug 2023 - Present",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      description:
        "Leading development of enterprise-scale Influencer marketing web applications serving 100+ users daily.",
      achievements: [
        "Architected and built 5+ production applications using React,Node.js,Express, and MySQL, enhancing user engagement and operational efficiency.",
        "Improved application performance by 65% through code optimization and caching strategies",
        "Engineered advanced AI solutions using Large Language Models (LLMs) to drive key features and deliver impactful insights, significantly boosting the platform’s intelligence and value.",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Designed and developed RESTful APIs handling 1M+ requests daily",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
        "AWS",
        "Express",
      ],
      metrics: {
        projects: "5+",
        performance: "90%",
        team: "4 devs",
        users: "100+",
      },
    },
    {
      logo: "./cds.jpg",
      company: "Crest Data Systems",
      role: "Software Engineer Intern",
      period: "Dec 2022 - Jun 2022",
      location: "Ahmedabad, Gujarat, India",
      type: "Internship",
      description:
        "Development of the Universal Rest Client (URC) , an innovative internal tool that revolutionized the integration process with multiple SIEM platforms.",
      achievements: [
        "Successfully acquired knowledge in these cutting-edge technologies, enabling me to optimize project workflows and drive seamless collaboration within teams.",
        "I collaborated on the development of the Universal Rest Client (URC) , an innovative internal tool that revolutionized the integration process with multiple SIEM platforms. By automating the generation of repetitive code, the URC significantly reduced developer workload by an impressive 70%.",
      ],
      technologies: ["Python", "Docker", "FastAPI", "Git"],
      metrics: {
        performance: "70%",
      },
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            2+ years of hands-on experience building scalable applications and
            leading development teams
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.company}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                        {exp.role}
                      </h4>

                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                          >
                            <div className="text-lg font-bold text-cyan-400">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements & Technologies */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5 text-yellow-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.3 + i * 0.1,
                              }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.3 + i * 0.05,
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 text-gray-300 hover:border-purple-500 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Years Experience", value: "2+", icon: Calendar },
              { label: "Completed Features", value: "8+", icon: Code },
              // { label: "", value: "6+", icon: Users },
              { label: "Performance Improved", value: "65%", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
