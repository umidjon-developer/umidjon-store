"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Bots"];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    description:
      "Full-featured online store with payment integration, inventory management, and admin dashboard.",
    image: "/project/Ecommerce.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Restaurant Management",
    category: "Mobile",
    description:
      "Mobile app for restaurant staff to manage orders, tables, and kitchen workflow in real-time.",
    image: "/project/image.png",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "CRM System",
    category: "Web",
    description:
      "Customer relationship management system with analytics, reporting, and automation features.",
    image: "/project/crm.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Telegram Delivery Bot",
    category: "Bots",
    description:
      "Automated food delivery bot with menu browsing, order placement, and payment processing.",
    image: "/project/telegram-bot.png",
    technologies: ["Node.js", "Telegram API", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Learning Platform",
    category: "Web",
    description:
      "Online education platform with video courses, quizzes, and progress tracking.",
    image: "/project/talim.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Inventory Management",
    category: "Mobile",
    description:
      "Mobile app for tracking inventory, generating reports, and managing suppliers.",
    image: "/project/go.png",
    technologies: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <span className="text-purple-400 font-medium mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across web, mobile, and automation
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-purple-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-slate-900 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-slate-900 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <motion.a
            href="https://github.com/umidjon-developer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
