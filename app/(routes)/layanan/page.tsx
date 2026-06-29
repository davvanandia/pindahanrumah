import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description: "Jasa pindahan profesional untuk rumah, kantor, apartemen, dan gudang. Layanan packing, bongkar pasang furniture, dan handling barang berat.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop">
        <div className="text-center mb-12">
          <h1 className="font-headline-lg text-headline-lg mb-4">Layanan Pindahan Kami</h1>
          <div className="w-20 h-1 bg-secondary mx-auto" />
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-4">
            Kami menyediakan berbagai layanan pindahan profesional untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all overflow-hidden flex flex-col">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.popular && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-white">POPULAR</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline-md">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-on-surface-variant mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-label-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/#quote">Pesan Sekarang</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}