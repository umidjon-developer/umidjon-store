"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/StaggerContainer";
import {
  Send,
  Mail,
  MessageCircle,
  Instagram,
  Clock,
  Zap,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@umidjon_developer",
    href: "https://t.me/umidjon_developer",
    color: "#22c55e",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@umidjon_developer",
    href: "https://instagram.com/umidjon_developer",
    color: "#E4405F",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@umidjon.dev",
    href: "mailto:contact@umidjon.dev",
    color: "#6C63FF",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully! I'll get back to you soon.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-purple-400 font-medium mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and let&apos;s create something amazing.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <FadeIn className="lg:col-span-3">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Thank you for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", telegram: "", message: "" });
                    }}
                    className="px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Telegram Username{" "}
                      <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="@username"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Card */}
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Available for Freelance
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">
                  I&apos;m currently accepting new projects. Let&apos;s discuss how I can
                  help bring your ideas to life.
                </p>
              </div>
            </FadeIn>

            {/* Quick Response Card */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Quick Response
                  </h3>
                </div>
                <p className="text-slate-400 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent
                  matters, reach out on Telegram.
                </p>
              </div>
            </FadeIn>

            {/* Contact Links */}
            <StaggerContainer className="space-y-4">
              {contactInfo.map((info) => (
                <StaggerItem key={info.label}>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-colors group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon
                        className="w-6 h-6"
                        style={{ color: info.color }}
                      />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Location */}
            <FadeIn delay={0.4}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Based in Tashkent
                  </h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Working with clients worldwide. Flexible with time zones for
                  smooth collaboration.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
