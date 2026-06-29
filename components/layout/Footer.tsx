import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import company from "@/data/company.json";
import services from "@/data/services.json";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="container mx-auto px-margin-desktop py-stack-lg grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-charcoal-steel">
        <div className="space-y-6">
          <span className="font-display-lg text-white font-bold">{company.name}</span>
          <p className="text-surface-variant font-body-md leading-relaxed">
            {company.description}
          </p>
          <div className="flex gap-4">
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={`mailto:${company.email}`} className="text-secondary hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label-bold text-white mb-6">Layanan</h4>
          <ul className="space-y-4">
            {services.map((svc) => (
              <li key={svc.id}>
                <Link href={`/layanan#${svc.id}`} className="text-surface-variant hover:text-secondary transition-colors hover:underline">
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-bold text-white mb-6">Perusahaan</h4>
          <ul className="space-y-4">
            <li><Link href="/tentang" className="text-surface-variant hover:text-secondary transition-colors hover:underline">Tentang Kami</Link></li>
            <li><Link href="/faq" className="text-surface-variant hover:text-secondary transition-colors hover:underline">FAQ</Link></li>
            <li><Link href="/kontak" className="text-surface-variant hover:text-secondary transition-colors hover:underline">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-bold text-white mb-6">Kontak</h4>
          <ul className="space-y-4 text-surface-variant">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-secondary mt-0.5" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-margin-desktop py-6 border-t border-charcoal-steel flex flex-col md:flex-row justify-between items-center text-surface-variant text-label-sm">
        <p>© {new Date().getFullYear()} {company.name}. Professional Relocation Services. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Certified Logistics</span>
          <span>24/7 Security</span>
        </div>
      </div>
    </footer>
  );
}