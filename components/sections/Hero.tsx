"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";
import company from "@/data/company.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep-onyx min-h-[819px] flex items-center">
      {/* Background dengan clip-path dan gambar */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        <div className="w-full md:w-[55%] bg-primary hero-diagonal hidden md:block" />
        <div className="w-full md:w-[45%] relative h-full min-h-[300px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            alt="Office moving"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="container relative z-20 text-white px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-secondary text-white font-label-bold px-4 py-1 mb-6 rounded-sm">
            #1 RELOCATION SPECIALIST
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 leading-tight">
            JASA PINDAHAN <br />
            <span className="text-secondary">PROFESIONAL</span>
          </h1>
          <p className="font-body-lg text-body-lg mb-8 text-surface-variant max-w-lg">
            {company.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-label-bold">
              <Link href="/#quote">
                <Calculator className="mr-2 h-5 w-5" />
                CEK ESTIMASI BIAYA
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={company.social.whatsapp} target="_blank">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}