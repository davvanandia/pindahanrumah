import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function MapEmbed() {
  const waUrl = buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya ingin mengetahui lokasi kantor Anda.')

  return (
    <section
      className="relative h-[420px] md:h-[480px] bg-surface-variant overflow-hidden"
      aria-label="Lokasi kantor PindahanRumah"
    >
      <iframe
        src={company.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(80%) contrast(1.1)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor PindahanRumah di Jakarta Timur"
        className="absolute inset-0"
      />
      {/* Info card overlay */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white p-5 md:p-6 shadow-2xl max-w-xs border border-surface-variant">
        <h3 className="font-montserrat font-bold text-lg text-primary mb-3">Kantor Pusat</h3>
        <address className="not-italic font-franklin text-sm text-on-surface-variant mb-4 leading-relaxed">
          {company.address}
        </address>
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary" aria-hidden="true">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          <a href={`tel:${company.phone}`} className="font-montserrat font-bold text-xs text-secondary hover:underline">
            {company.phone}
          </a>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-secondary font-montserrat font-bold text-xs tracking-widest uppercase hover:underline"
          aria-label="Dapatkan petunjuk arah ke PindahanRumah"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Dapatkan Arah
        </a>
      </div>
    </section>
  )
}