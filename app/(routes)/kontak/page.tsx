"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import company from "@/data/company.json";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name} - ${company.name}`);
    const body = encodeURIComponent(`${form.message}\n\n---\nEmail: ${form.email}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop">
        <div className="text-center mb-12">
          <h1 className="font-headline-lg text-headline-lg mb-4">Hubungi Kami</h1>
          <div className="w-20 h-1 bg-secondary mx-auto" />
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-4">
            Kami siap membantu Anda. Silakan hubungi kami melalui formulir atau kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-surface-variant">
            <h2 className="font-headline-md text-headline-md mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="email@anda.com"
                />
              </div>
              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-surface-variant">
              <h3 className="font-headline-md text-headline-md mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Telepon</p>
                    <a href={`tel:${company.phone}`} className="text-on-surface-variant hover:text-secondary transition-colors">{company.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Email</p>
                    <a href={`mailto:${company.email}`} className="text-on-surface-variant hover:text-secondary transition-colors">{company.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Alamat</p>
                    <p className="text-on-surface-variant">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-label-bold">Jam Operasional</p>
                    <p className="text-on-surface-variant">Senin - Sabtu: 08.00 - 20.00</p>
                    <p className="text-on-surface-variant">Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-surface-variant">
              <h3 className="font-headline-md text-headline-md mb-4">Hubungi Langsung</h3>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Textarea };