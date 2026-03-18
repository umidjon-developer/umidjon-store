"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(108, 99, 255, 0.5)",
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered
            ? `0 0 40px ${glowColor}, 0 0 80px ${glowColor}`
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
