"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import faqs from "@/data/faqs.json";

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop max-w-3xl">
        <h1 className="font-headline-lg text-headline-lg mb-4 text-center">Pertanyaan yang Sering Diajukan</h1>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12" />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-surface-variant rounded-lg overflow-hidden bg-white"
            >
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-on-surface-variant">Masih ada pertanyaan? Hubungi kami langsung!</p>
          <a href="/#quote" className="inline-block mt-4 px-6 py-3 bg-secondary text-white font-label-bold rounded-lg hover:bg-secondary/90 transition-colors">
            Hubungi Kami
          </a>
        </div>
      </div>
    </main>
  );
}