"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Star, Users, TrendingUp, Code, Eye } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "Complete e-commerce solution with advanced features including real-time inventory, payment processing, admin dashboard, and analytics.",
      longDescription:
        "Built a comprehensive e-commerce platform from scratch using modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, inventory tracking, and detailed analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Advanced search & filtering",
        "Admin dashboard with analytics",
        "Mobile-responsive design",
        "SEO optimized",
      ],
      metrics: {
        users: "5K+",
        performance: "98%",
        uptime: "99.9%",
        rating: "4.8/5",
      },
      github: "#",
      live: "#",
      featured: true,
      status: "Production",
    },
    {
      id: 2,
      title: "Task Management SaaS",
      category: "fullstack",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, file sharing, and advanced reporting features.",
      longDescription:
        "Developed a comprehensive task management platform for teams. Includes real-time collaboration, drag-and-drop task boards, time tracking, file attachments, team chat, and detailed project analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
      features: [
        "Real-time collaboration",
        "Drag & drop task boards",
        "Time tracking & reporting",
        "File sharing & comments",
        "Team chat integration",
        "Advanced analytics",
      ],
      metrics: {
        users: "2K+",
        performance: "95%",
        uptime: "99.5%",
        rating: "4.6/5",
      },
      github: "#",
      live: "#",
      featured: true,
      status: "Production",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "frontend",
      description:
        "Interactive data visualization platform with real-time metrics, customizable charts, and comprehensive reporting system.",
      longDescription:
        "Created a powerful analytics dashboard for business intelligence. Features interactive charts, real-time data updates, customizable widgets, export functionality, and role-based access control.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "Chart.js", "TypeScript", "Styled Components"],
      features: [
        "Interactive data visualization",
        "Real-time metrics updates",
        "Customizable dashboards",
        "Export to PDF/Excel",
        "Role-based permissions",
        "Mobile responsive",
      ],
      metrics: {
        users: "1K+",
        performance: "97%",
        uptime: "99.8%",
        rating: "4.7/5",
      },
      github: "#",
      live: "#",
      featured: false,
      status: "Production",
    },
    {
      id: 4,
      title: "Social Media App",
      category: "mobile",
      description:
        "Modern social networking application with real-time messaging, media sharing, and advanced social features.",
      longDescription:
        "Built a full-featured social media application with user profiles, post creation, real-time messaging, story features, and advanced privacy controls.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "Socket.io"],
      features: [
        "Real-time messaging",
        "Photo & video sharing",
        "Story features",
        "Push notifications",
        "Advanced privacy controls",
        "Cross-platform support",
      ],
      metrics: {
        users: "3K+",
        performance: "94%",
        uptime: "99.2%",
        rating: "4.5/5",
      },
      github: "#",
      live: "#",
      featured: false,
      status: "Beta",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter((p) => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter((p) => p.category === "frontend").length },
    { id: "mobile", label: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcase of production-ready applications demonstrating full-stack expertise and modern development
            practices
          </p>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Projects Completed", value: "20+", icon: Code },
              { label: "Total Users", value: "15K+", icon: Users },
              { label: "Avg Performance", value: "96%", icon: TrendingUp },
              { label: "Client Rating", value: "4.8/5", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                  : "border-gray-600 text-gray-300 hover:border-blue-500 bg-transparent"
              }`}
            >
              {category.label}
              <Badge className="ml-2 bg-gray-700 text-gray-300">{category.count}</Badge>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              layout
            >
              <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Status */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Production"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-black/50 backdrop-blur-sm border border-gray-600 hover:border-blue-500"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-black/50 backdrop-blur-sm border border-gray-600 hover:border-blue-500"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-black/50 backdrop-blur-sm border border-gray-600 hover:border-blue-500"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{project.metrics.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 rounded bg-gray-800/50">
                        <div className="text-sm font-bold text-blue-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-400 bg-gray-800/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-blue-500 bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
