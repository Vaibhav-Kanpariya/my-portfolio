"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Users, Code, Award } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      period: "Jan 2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Leading development of enterprise-scale web applications serving 100K+ users daily.",
      achievements: [
        "Architected and built 5+ production applications using React, Next.js, and Node.js",
        "Improved application performance by 65% through code optimization and caching strategies",
        "Led a team of 4 developers and mentored 2 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Designed and developed RESTful APIs handling 1M+ requests daily",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
      metrics: {
        projects: "12+",
        performance: "65%",
        team: "4 devs",
        users: "100K+",
      },
    },
    {
      company: "InnovateTech Startup",
      role: "Frontend Developer",
      period: "Jun 2022 - Dec 2022",
      location: "Remote",
      type: "Full-time",
      description: "Developed responsive web applications and improved user experience for B2B SaaS platform.",
      achievements: [
        "Built 8+ responsive web components used across multiple products",
        "Reduced page load times by 45% through performance optimization",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Maintained 95%+ code coverage with comprehensive testing",
      ],
      technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest", "Cypress"],
      metrics: {
        components: "25+",
        performance: "45%",
        coverage: "95%",
        apis: "10+",
      },
    },
  ]

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
            2+ years of hands-on experience building scalable applications and leading development teams
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
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.role}</h4>

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

                      <p className="text-gray-300 mt-4 text-sm leading-relaxed">{exp.description}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                          >
                            <div className="text-lg font-bold text-cyan-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
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
                              transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
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
                              transition={{ duration: 0.3, delay: index * 0.3 + i * 0.05 }}
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
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Years Experience", value: "2+", icon: Calendar },
              { label: "Projects Completed", value: "20+", icon: Code },
              { label: "Team Members Led", value: "6+", icon: Users },
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
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
