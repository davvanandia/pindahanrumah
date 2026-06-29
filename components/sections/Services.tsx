"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import services from "@/data/services.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-stack-lg bg-background"
      id="services"
    >
      <div className="container mx-auto px-margin-desktop">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-2">Layanan Pindahan Utama</h2>
          <div className="w-20 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:border-secondary transition-all overflow-hidden h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.popular && (
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-secondary text-white">
                      POPULAR
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline-md">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-on-surface-variant mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-label-sm">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    SELENGKAPNYA
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}