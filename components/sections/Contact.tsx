"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-orange-400 to-red-400",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-400",
      followers: "500+",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
      followers: "1K+",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-cyan-400",
      followers: "300+",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "#",
      color: "hover:text-purple-400",
      followers: "Active",
    },
  ]

  const availability = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST", available: true },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM PST", available: true },
    { day: "Sunday", hours: "Emergency only", available: false },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? I'm available for freelance projects, full-time opportunities, and
            consulting work.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Response Rate", value: "100%" },
              { label: "Projects Completed", value: "20+" },
              { label: "Client Satisfaction", value: "4.8/5" },
              { label: "On-Time Delivery", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 resize-none"
                        placeholder="Tell me about your project, timeline, and requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 group"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color}`}>
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white group-hover:text-cyan-400 transition-colors">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Availability</h3>
                </div>
                <div className="space-y-3">
                  {availability.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30"
                    >
                      <div>
                        <div className="text-white font-medium">{schedule.day}</div>
                        <div className="text-sm text-gray-400">{schedule.hours}</div>
                      </div>
                      <Badge
                        className={
                          schedule.available
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                        }
                      >
                        {schedule.available ? "Available" : "Limited"}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 text-gray-400 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                      <div className="text-sm font-medium">{social.label}</div>
                      <div className="text-xs text-gray-500">{social.followers}</div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can help bring your vision to life with modern, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-8 py-3"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-white bg-transparent px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
