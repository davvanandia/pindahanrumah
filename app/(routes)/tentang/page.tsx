import type { Metadata } from "next";
import company from "@/data/company.json";
import { MapPin, Phone, Mail, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali lebih dekat ${company.name}, perusahaan jasa pindahan profesional terpercaya.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline-lg text-headline-lg mb-6 text-primary">Tentang {company.name}</h1>
          <div className="w-20 h-1 bg-secondary mb-8" />

          <div className="prose prose-lg max-w-none">
            <p className="text-on-surface-variant font-body-lg leading-relaxed">
              {company.name} adalah perusahaan jasa pindahan profesional yang berdedikasi untuk memberikan pengalaman pindahan yang aman, nyaman, dan tepat waktu. Dengan pengalaman bertahun-tahun di industri ini, kami telah membantu ribuan keluarga dan bisnis dalam proses relokasi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-surface-variant text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-headline-md text-headline-md mb-2">Tim Profesional</h3>
                <p className="text-on-surface-variant text-sm">Lebih dari 25 tenaga ahli terlatih</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-surface-variant text-center">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-headline-md text-headline-md mb-2">Berpengalaman</h3>
                <p className="text-on-surface-variant text-sm">500+ proyek berhasil</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-surface-variant text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-headline-md text-headline-md mb-2">Tepat Waktu</h3>
                <p className="text-on-surface-variant text-sm">98% ketepatan waktu</p>
              </div>
            </div>

            <h2 className="font-headline-md text-headline-md mt-8 mb-4">Visi & Misi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="font-label-bold text-primary mb-2">Visi</h3>
                <p className="text-on-surface-variant text-sm">Menjadi perusahaan jasa pindahan terdepan di Indonesia yang dikenal karena keandalan, keamanan, dan pelayanan prima.</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="font-label-bold text-primary mb-2">Misi</h3>
                <ul className="list-disc list-inside text-on-surface-variant text-sm space-y-1">
                  <li>Memberikan layanan pindahan yang aman dan terpercaya</li>
                  <li>Mengutamakan kepuasan pelanggan</li>
                  <li>Terus berinovasi dalam teknologi dan proses</li>
                  <li>Menjaga integritas dan profesionalisme</li>
                </ul>
              </div>
            </div>

            <h2 className="font-headline-md text-headline-md mt-8 mb-4">Kontak Kami</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-surface-variant space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>{company.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span>{company.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}