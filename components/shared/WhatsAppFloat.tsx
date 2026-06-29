"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import company from "@/data/company.json";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={company.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Hubungi via WhatsApp"
    >
      <Phone className="h-8 w-8" />
    </motion.a>
  );
}