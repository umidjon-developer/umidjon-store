"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "./animations/TextReveal";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Umidjon Gafforov</span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6 h-10"
            >
              <Typewriter
                text="Full Stack & Mobile Developer"
                delay={0.5}
                speed={0.05}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I craft exceptional digital experiences with React, Next.js, and
              React Native. Based in Tashkent, helping businesses worldwide
              transform their ideas into reality.
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {["React", "Next.js", "Node.js", "React Native", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-slate-800/50 border border-slate-700 rounded-full text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
              >
                Hire Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl scale-110" />

              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-slate-700/50 bg-slate-800">
                  <Image
                    src="/image.png"
                    alt="Umidjon Gafforov"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-4 top-1/4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 text-lg">⚡</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">3+ Years</p>
                      <p className="text-slate-400 text-xs">Experience</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 bottom-1/4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 text-lg">🚀</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">50+</p>
                      <p className="text-slate-400 text-xs">Projects</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("#about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
