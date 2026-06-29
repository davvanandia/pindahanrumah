"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail } from "lucide-react";
import company from "@/data/company.json";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    origin: "",
    destination: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo ${company.name}, saya ${form.name} ingin estimasi pindahan ${form.type || "..."} dari ${form.origin} ke ${form.destination}. No WA: ${form.phone}`;
    const waUrl = `https://wa.me/${company.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section className="py-stack-lg bg-background" id="quote">
      <div className="container mx-auto px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-surface-variant flex flex-col lg:flex-row overflow-hidden shadow-sm"
        >
          {/* Left panel */}
          <div className="lg:w-1/3 bg-primary p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-6">Dapatkan Estimasi Biaya</h2>
              <p className="text-surface-variant mb-8">Lengkapi detail pindahan Anda untuk mendapatkan penawaran harga terbaik dalam waktu kurang dari 30 menit.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Hotline 24/7</p>
                    <p className="text-body-md text-surface-variant">{company.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Email Bisnis</p>
                    <p className="text-body-md text-surface-variant">{company.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">NAMA LENGKAP</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">NOMOR WHATSAPP</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  placeholder="0812..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="origin">ALAMAT ASAL</Label>
                <Input
                  id="origin"
                  value={form.origin}
                  onChange={(e) => setForm({ ...form, origin: e.target.value })}
                  required
                  placeholder="Kota/Kecamatan asal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">ALAMAT TUJUAN</Label>
                <Input
                  id="destination"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  required
                  placeholder="Kota/Kecamatan tujuan"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="type">JENIS PINDAHAN</Label>
                <Select onValueChange={(val) => setForm({ ...form, type: val })} required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Pilih jenis pindahan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rumah">Pindahan Rumah</SelectItem>
                    <SelectItem value="kantor">Pindahan Kantor</SelectItem>
                    <SelectItem value="apartemen">Pindahan Apartemen</SelectItem>
                    <SelectItem value="gudang">Pindahan Gudang</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2 pt-4">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-label-bold">
                  KIRIM PERMINTAAN PENAWARAN
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}