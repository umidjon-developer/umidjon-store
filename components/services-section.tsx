"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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
  X,
  Check,
  Clock,
  Users,
  Zap,
  Shield,
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
    details: {
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Fast loading speeds",
        "Modern UI/UX design",
        "CMS integration",
        "Analytics setup",
      ],
      timeline: "1-4 weeks",
      includes: [
        "Source code delivery",
        "Deployment assistance",
        "1 month free support",
        "Documentation",
      ],
    },
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality mobile applications for iOS and Android using React Native. Cross-platform solutions that feel native.",
    price: "$1,000 - $10,000",
    technologies: ["React Native", "Expo", "iOS", "Android"],
    color: "#00D4FF",
    details: {
      features: [
        "Cross-platform (iOS & Android)",
        "Push notifications",
        "Offline functionality",
        "User authentication",
        "In-app purchases",
        "App store publishing",
      ],
      timeline: "2-8 weeks",
      includes: [
        "Source code delivery",
        "App store submission",
        "2 months free support",
        "User guide",
      ],
    },
  },
  {
    icon: Layers,
    title: "Full Stack Projects",
    description:
      "End-to-end development from database design to frontend. Complete solutions tailored to your business needs.",
    price: "$2,000 - $15,000",
    technologies: ["Node.js", "PostgreSQL", "React", "AWS"],
    color: "#8B5CF6",
    details: {
      features: [
        "Custom backend API",
        "Database design",
        "Admin dashboard",
        "User management",
        "Payment integration",
        "Cloud deployment",
      ],
      timeline: "4-12 weeks",
      includes: [
        "Full source code",
        "API documentation",
        "3 months free support",
        "Training session",
      ],
    },
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description:
      "Automated bots for customer service, e-commerce, notifications, and business process automation on Telegram.",
    price: "$300 - $2,000",
    technologies: ["Node.js", "Telegram API", "Webhooks"],
    color: "#22c55e",
    details: {
      features: [
        "Custom commands",
        "Payment integration",
        "Database storage",
        "Admin panel",
        "Analytics dashboard",
        "Multi-language support",
      ],
      timeline: "1-3 weeks",
      includes: [
        "Source code",
        "Bot hosting setup",
        "1 month free support",
        "Usage guide",
      ],
    },
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamless integration with third-party services, payment gateways, CRMs, and custom API development.",
    price: "$400 - $3,000",
    technologies: ["REST", "GraphQL", "Webhooks", "SDK"],
    color: "#f59e0b",
    details: {
      features: [
        "Payment gateways",
        "SMS/Email services",
        "Social media APIs",
        "CRM integrations",
        "Custom API development",
        "Webhook handling",
      ],
      timeline: "1-4 weeks",
      includes: [
        "Integration code",
        "API documentation",
        "Testing & debugging",
        "1 month support",
      ],
    },
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Scalable database architecture, optimization, and migration services. PostgreSQL, MongoDB, and Redis expertise.",
    price: "$500 - $4,000",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    color: "#ef4444",
    details: {
      features: [
        "Schema design",
        "Performance optimization",
        "Data migration",
        "Backup solutions",
        "Security setup",
        "Scaling strategy",
      ],
      timeline: "1-3 weeks",
      includes: [
        "Database schema",
        "Migration scripts",
        "Documentation",
        "1 month support",
      ],
    },
  },
];

interface ServiceModalProps {
  service: (typeof services)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const t = useTranslations("services");
  
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="p-6 border-b border-slate-800">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon
                        className="w-7 h-7"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: service.color }}
                      >
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-slate-300 text-lg">{service.description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    {t("keyFeatures")}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.details.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <Check
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Includes */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/50 rounded-xl">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      {t("timeline")}
                    </h4>
                    <p className="text-slate-300">{service.details.timeline}</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      {t("whatsIncluded")}
                    </h4>
                    <ul className="space-y-1">
                      {service.details.includes.map((item, index) => (
                        <li key={index} className="text-slate-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    {t("technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 text-slate-200 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-800 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 py-3 rounded-xl font-semibold text-white transition-all"
                  style={{ backgroundColor: service.color }}
                >
                  {t("getStarted")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors"
                >
                  {t("close")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ServicesSection() {
  const t = useTranslations("services");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 dark:bg-purple-500/5 bg-purple-500/[0.03]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 dark:bg-cyan-500/5 bg-cyan-500/[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-purple-500 dark:text-purple-400 font-medium mb-2 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                <div className="h-full p-6 bg-white dark:bg-slate-800/50 border border-border dark:border-slate-700/50 rounded-2xl backdrop-blur-sm group hover:bg-gray-50 dark:hover:bg-slate-800/70 transition-colors shadow-sm dark:shadow-none">
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
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary dark:bg-slate-700/50 text-secondary-foreground dark:text-slate-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-border dark:border-slate-700/50">
                    <span
                      className="text-lg font-bold"
                      style={{ color: service.color }}
                    >
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => handleLearnMore(service)}
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                    >
                      {t("learnMore")}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Service Detail Modal */}
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
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
