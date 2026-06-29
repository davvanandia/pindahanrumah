import Link from 'next/link'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

const serviceLinks = [
  { href: '/layanan#pindahan-rumah', label: 'Jasa Pindahan Rumah' },
  { href: '/layanan#pindahan-kantor', label: 'Jasa Pindahan Kantor' },
  { href: '/layanan#jasa-packing', label: 'Jasa Packing' },
  { href: '/layanan#bongkar-pasang-furniture', label: 'Bongkar Pasang Furniture' },
  { href: '/layanan#pindahan-gudang', label: 'Pindahan Gudang' },
]

const companyLinks = [
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Footer() {
  const waUrl = buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya ingin mendapatkan estimasi biaya pindahan.')
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-label="Footer" className="bg-primary text-white">
      {/* CTA Banner */}
      <section className="bg-deep-onyx py-16 md:py-20" aria-label="Call to action">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-center">
          <h2 className="font-montserrat text-2xl md:text-4xl font-bold text-secondary mb-4 tracking-wider uppercase">
            Mau Mendapatkan Estimasi Harga?
          </h2>
          <p className="font-franklin text-lg text-white/90 mb-10">
            Hubungi Staff Marketing Kami dan Dapatkan Harga Promo Untuk Bulan Ini
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/30 rounded-full text-white font-montserrat font-bold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all"
            aria-label="Hubungi PindahanRummah via WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Hubungi Sekarang
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-5">
          <Link href="/" aria-label="PindahanRumah Home">
            <span className="font-montserrat font-bold text-2xl tracking-tight">
              Pindahan <span className="text-secondary">Rumah</span>
            </span>
          </Link>
          <p className="text-white/70 font-franklin text-sm leading-relaxed">
            {company.description}
          </p>
          <div className="flex gap-4" aria-label="Media sosial">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="Instagram PindahanRumah"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="Facebook PindahanRumah"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="WhatsApp PindahanRumah"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-montserrat font-bold text-sm tracking-widest uppercase text-white mb-6">
            Layanan
          </h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 font-franklin text-sm hover:text-secondary transition-colors hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-montserrat font-bold text-sm tracking-widest uppercase text-white mb-6">
            Perusahaan
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 font-franklin text-sm hover:text-secondary transition-colors hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-montserrat font-bold text-sm tracking-widest uppercase text-white mb-6">
            Kontak
          </h3>
          <address className="space-y-4 not-italic">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-montserrat font-bold text-xs text-white/50 uppercase tracking-wider mb-1">Hotline 24/7</p>
                <a href={`tel:${company.phone}`} className="text-white/80 font-franklin text-sm hover:text-secondary transition-colors">{company.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <div>
                <p className="font-montserrat font-bold text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${company.email}`} className="text-white/80 font-franklin text-sm hover:text-secondary transition-colors">{company.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.867a8 8 0 10-16 0c0 4.17 1.555 6.864 3.5 8.867a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-montserrat font-bold text-xs text-white/50 uppercase tracking-wider mb-1">Alamat</p>
                <p className="text-white/80 font-franklin text-sm">{company.address}</p>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/50 font-franklin text-xs">
        <p>© {currentYear} {company.name}. Professional Relocation Services. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Certified Logistics</span>
          <span>24/7 Security</span>
          <span>Asuransi Full</span>
        </div>
      </div>
    </footer>
  )
}