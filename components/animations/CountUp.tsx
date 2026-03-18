"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
