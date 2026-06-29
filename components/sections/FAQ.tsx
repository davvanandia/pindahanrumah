"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import faqs from "@/data/faqs.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { ref, isInView } = useScrollAnimation();

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-stack-lg bg-background"
      id="faq"
    >
      <div className="container mx-auto px-margin-desktop max-w-3xl">
        <h2 className="font-headline-lg text-headline-lg mb-2 text-center">Pertanyaan yang Sering Diajukan</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12" />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-surface-variant rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left font-headline-md hover:bg-surface-container-low transition-colors"
              >
                <span>{faq.question}</span>
                {openId === faq.id ? <ChevronUp className="h-5 w-5 text-secondary" /> : <ChevronDown className="h-5 w-5 text-secondary" />}
              </button>
              <div
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openId === faq.id ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-on-surface-variant">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}