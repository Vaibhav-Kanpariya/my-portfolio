"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
      />
    </>
  )
}
