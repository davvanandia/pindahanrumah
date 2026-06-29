"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-stack-lg bg-surface-container-low"
    >
      <div className="container mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-2 text-center">Apa Kata Klien Kami</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-surface-variant"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-on-surface-variant font-body-md mb-4">"{t.content}"</p>
              <div>
                <p className="font-label-bold">{t.name}</p>
                <p className="text-label-sm text-on-surface-variant">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}