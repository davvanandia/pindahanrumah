"use client";
import { motion } from "framer-motion";
import { statsData } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Stats() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-stack-lg bg-primary text-white"
    >
      <div className="container mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: idx * 0.1, type: "spring" }}
          >
            <div className="text-4xl font-bold text-secondary">{stat.value}</div>
            <div className="text-surface-variant font-label-bold mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}