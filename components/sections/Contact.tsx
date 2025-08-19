"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "kanpariyavaibhav966@gmail.com",
      href: "mailto:kanpariyavaibhav966@gmail.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Vaibhav-Kanpariya",
      href: "https://github.com/Vaibhav-Kanpariya",
      color: "from-gray-600 to-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vaibhav-kanpariya",
      href: "https://www.linkedin.com/in/vaibhav-kanpariya/",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Info
          </h2>
          <p className="text-gray-400 text-lg">
            Reach out via email or connect with me on my professional networks.
          </p>
        </motion.div>

        {/* Individual Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center shadow-lg"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-base font-medium text-white">
                {item.label}
              </div>
              <div className="text-xs text-gray-400 break-words">
                {item.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
