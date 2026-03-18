"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO, TechStart Inc.",
    content:
      "Umidjon delivered our e-commerce platform ahead of schedule and exceeded all expectations. His attention to detail and technical expertise are exceptional. The site has increased our conversions by 40%.",
    rating: 5,
    project: "E-commerce Platform",
    avatar: "AC",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager, AppWorks",
    content:
      "The mobile app he built for us has been a game-changer. Our customer engagement increased by 40% within the first month. Professional, communicative, and incredibly skilled. Highly recommended!",
    rating: 5,
    project: "Restaurant Management App",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Founder, DataFlow",
    content:
      "Working with Umidjon was an absolute pleasure. He understood our complex requirements and delivered a robust CRM system that streamlined our entire sales process. His code quality is outstanding.",
    rating: 5,
    project: "CRM System",
    avatar: "MR",
  },
  {
    id: 4,
    name: "Lisa Wang",
    role: "Operations Director, FoodExpress",
    content:
      "The Telegram bot Umidjon developed has automated 80% of our customer service inquiries. It's fast, reliable, and our customers love using it. Exceptional work at a great value.",
    rating: 5,
    project: "Telegram Delivery Bot",
    avatar: "LW",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-purple-400 font-medium mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Feedback from businesses I&apos;ve had the pleasure of working with
          </p>
        </FadeIn>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Card */}
          <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-12 min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl sm:text-2xl text-white text-center mb-8 leading-relaxed">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                    {currentTestimonial.avatar}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {currentTestimonial.role}
                  </p>
                  <span className="mt-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">
                    {currentTestimonial.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-purple-500"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
