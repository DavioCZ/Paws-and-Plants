"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedInView({
  children, delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  const initial = { opacity: 0, y: reduce ? 0 : 14 };
  const animate = { opacity: 1, y: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
