"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import { GlowCard } from "./animations/GlowCard";
import {
  Globe,
  Smartphone,
  Layers,
  Bot,
  Plug,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex SaaS platforms.",
    price: "$500 - $5,000",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind"],
    color: "#6C63FF",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality mobile applications for iOS and Android using React Native. Cross-platform solutions that feel native.",
    price: "$1,000 - $10,000",
    technologies: ["React Native", "Expo", "iOS", "Android"],
    color: "#00D4FF",
  },
  {
    icon: Layers,
    title: "Full Stack Projects",
    description:
      "End-to-end development from database design to frontend. Complete solutions tailored to your business needs.",
    price: "$2,000 - $15,000",
    technologies: ["Node.js", "PostgreSQL", "React", "AWS"],
    color: "#8B5CF6",
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description:
      "Automated bots for customer service, e-commerce, notifications, and business process automation on Telegram.",
    price: "$300 - $2,000",
    technologies: ["Node.js", "Telegram API", "Webhooks"],
    color: "#22c55e",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamless integration with third-party services, payment gateways, CRMs, and custom API development.",
    price: "$400 - $3,000",
    technologies: ["REST", "GraphQL", "Webhooks", "SDK"],
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Scalable database architecture, optimization, and migration services. PostgreSQL, MongoDB, and Redis expertise.",
    price: "$500 - $4,000",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    color: "#ef4444",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-purple-400 font-medium mb-2 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I Can Do For You
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services tailored to your unique business
            requirements
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <GlowCard
                className="h-full"
                glowColor={`${service.color}40`}
              >
                <div className="h-full p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl backdrop-blur-sm group hover:bg-slate-800/70 transition-colors">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span
                      className="text-lg font-bold"
                      style={{ color: service.color }}
                    >
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-1 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Need a custom solution? Let&apos;s discuss your project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
          >
            Get a Free Quote
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
