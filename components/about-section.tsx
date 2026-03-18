"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { CountUp } from "./animations/CountUp";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "Understanding your vision and requirements",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building with modern technologies",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying and optimizing performance",
  },
  {
    icon: Users,
    title: "Support",
    description: "Ongoing maintenance and updates",
  },
];

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
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-purple-400 font-medium mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafting Digital Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a focus on creating impactful digital
            solutions
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/50">
                <Image
                  src="/image.png"
                  alt="Umidjon at work"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl">
                  <p className="text-3xl font-bold text-gradient">3+</p>
                  <p className="text-slate-400 text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn direction="right">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Turning Ideas Into{" "}
                <span className="text-gradient">Powerful Solutions</span>
              </h3>
              <p className="text-slate-400 text-lg mb-6">
                I&apos;m Umidjon Gafforov, a Full Stack & Mobile Developer based in
                Tashkent, Uzbekistan. With over 5 years of experience, I
                specialize in building scalable web applications, mobile apps,
                and automation solutions.
              </p>
              <p className="text-slate-400 text-lg mb-8">
                My expertise spans across React, Next.js, Vue.js, Node.js, and
                React Native. I&apos;ve helped businesses from startups to
                enterprises transform their digital presence and streamline
                their operations.
              </p>
            </FadeIn>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Process Steps */}
        <FadeIn className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            My Work Process
          </h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl group hover:border-purple-500/50 transition-colors"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* Tech Stack Marquee */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies I Use
          </h3>
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />

            {/* Scrolling Container */}
            <div className="flex animate-marquee">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-3"
                >
                  <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center gap-3 hover:border-purple-500/50 transition-colors">
                    <span className="text-purple-400 text-sm font-medium">
                      {tech.category}
                    </span>
                    <span className="text-white font-semibold">
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
