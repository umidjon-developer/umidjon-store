"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "./animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import { ExternalLink, Github } from "lucide-react";

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
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "Web", label: t("categories.web") },
    { key: "Mobile", label: t("categories.mobile") },
    { key: "Bots", label: t("categories.bots") },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 dark:bg-purple-500/5 bg-purple-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <span className="text-purple-500 dark:text-purple-400 font-medium mb-2 block">
            {t("subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.key
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === category.key && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-purple-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
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
                  className="group relative bg-white dark:bg-slate-800/50 border border-border dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-sm"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-slate-900 via-background/50 dark:via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

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
                        className="p-3 bg-white text-foreground rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-foreground rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary dark:bg-slate-700/50 text-secondary-foreground dark:text-slate-300 rounded"
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
            className="inline-flex items-center gap-2 px-8 py-4 border border-border dark:border-slate-700 text-foreground font-semibold rounded-full hover:bg-secondary dark:hover:bg-slate-800 transition-colors"
          >
            {t("viewAll")}
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
