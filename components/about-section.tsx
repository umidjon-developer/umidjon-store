"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "./animations/FadeIn";
import { CountUp } from "./animations/CountUp";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "React Native", category: "Mobile" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
];

export function AboutSection() {
  const t = useTranslations("about");
  
  const stats = [
    { value: 5, suffix: "+", label: t("stats.years") },
    { value: 50, suffix: "+", label: t("stats.projects") },
    { value: 30, suffix: "+", label: t("stats.clients") },
    { value: 100, suffix: "%", label: t("stats.satisfaction") },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: t("process.discovery.title"),
      description: t("process.discovery.description"),
    },
    {
      icon: Code2,
      title: t("process.development.title"),
      description: t("process.development.description"),
    },
    {
      icon: Rocket,
      title: t("process.launch.title"),
      description: t("process.launch.description"),
    },
    {
      icon: Users,
      title: t("process.support.title"),
      description: t("process.support.description"),
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 dark:bg-purple-500/5 bg-purple-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border dark:border-slate-700/50 shadow-lg">
                <Image
                  src="/image.png"
                  alt="Umidjon at work"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-3 bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold text-gradient">3+</p>
                  <p className="text-muted-foreground text-sm">{t("yearsExperience")}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn direction="right">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {t("heading")}{" "}
                <span className="text-gradient">{t("headingHighlight")}</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                {t("bio1")}
              </p>
              <p className="text-muted-foreground text-lg mb-8">	
                {t("bio2")}
              </p>
            </FadeIn>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-4 bg-white dark:bg-slate-800/50 border border-border dark:border-slate-700/50 rounded-xl shadow-sm">
                    <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Process Steps */}
        <FadeIn className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            {t("processTitle")}
          </h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-6 bg-white dark:bg-slate-800/50 border border-border dark:border-slate-700/50 rounded-2xl group hover:border-purple-500/50 transition-colors shadow-sm"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* Tech Stack Marquee */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            {t("techTitle")}
          </h3>
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Scrolling Container */}
            <div className="flex animate-marquee">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-3"
                >
                  <div className="px-6 py-3 bg-white dark:bg-slate-800/50 border border-border dark:border-slate-700/50 rounded-full flex items-center gap-3 hover:border-purple-500/50 transition-colors shadow-sm">
                    <span className="text-purple-500 dark:text-purple-400 text-sm font-medium">
                      {tech.category}
                    </span>
                    <span className="text-foreground font-semibold">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
