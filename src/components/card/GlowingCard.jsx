import React from 'react'
import { motion } from 'framer-motion'

export const GlowingCard = ({ children, className, glowColor = "bg-white/20" }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${glowColor}`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}