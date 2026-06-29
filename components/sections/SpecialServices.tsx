"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Package, Wrench, Truck, Warehouse } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SpecialServices() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-stack-lg bg-surface-container-low"
      id="packing"
    >
      <div className="container mx-auto px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">Layanan Spesialis &amp; Tambahan</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
            Kami tidak hanya memindahkan barang, kami memastikan setiap detail aset Anda terlindungi sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Packing */}
          <div className="md:col-span-8 bg-white p-8 border border-surface-variant relative overflow-hidden group">
            <div className="relative z-10">
              <div className="bg-secondary w-12 h-12 flex items-center justify-center mb-6 rounded">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Jasa Packing Profesional</h3>
              <p className="text-on-surface-variant font-body-md mb-6 max-w-md">
                Perlindungan berlapis menggunakan Bubble Wrap, Stretch Film, Kardus Double Wall, hingga Wooden Crate untuk barang sangat berharga.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container text-label-sm font-label-bold">Bubble Wrap</span>
                <span className="px-3 py-1 bg-surface-container text-label-sm font-label-bold">Kayu</span>
                <span className="px-3 py-1 bg-surface-container text-label-sm font-label-bold">Film</span>
              </div>
            </div>
          </div>

          {/* Warehouse */}
          <div className="md:col-span-4 bg-primary text-white p-8 border border-charcoal-steel flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md mb-4 text-secondary">Pindahan Gudang</h3>
              <p className="text-surface-variant font-body-md mb-6">Penanganan stok barang, bongkar rak industri, hingga relokasi mesin berat secara presisi.</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop"
              alt="Warehouse"
              width={400}
              height={200}
              className="w-full h-32 object-cover rounded-sm grayscale hover:grayscale-0 transition-all"
            />
          </div>

          {/* Furniture */}
          <div className="md:col-span-4 bg-white p-8 border border-surface-variant" id="furniture">
            <Wrench className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-headline-md text-headline-md mb-4">Bongkar Pasang Furniture</h3>
            <p className="text-on-surface-variant font-body-md">Tim ahli untuk Kitchen Set, tempat tidur king size, hingga lemari wardrobe custom.</p>
          </div>

          {/* Heavy Lifting */}
          <div className="md:col-span-8 bg-primary text-white p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-4">Angkut Barang Berat (Handling)</h3>
                <p className="text-surface-variant font-body-md mb-4">Brankas besar, Mesin Industri, Genset, hingga Piano Grand. Kami memiliki alat angkut hidrolik dan tim terlatih.</p>
                <Button className="bg-secondary text-white hover:bg-secondary/90">
                  KONSULTASI HANDLING
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop"
                  alt="Truck"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-2xl border-2 border-secondary/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}