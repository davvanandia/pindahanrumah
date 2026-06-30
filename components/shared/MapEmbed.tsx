import company from '@/data/company.json'

export default function MapEmbed() {
  return (
    <section
      className="relative h-[420px] md:h-[480px] bg-surface-variant overflow-hidden"
      aria-label="Lokasi kantor PindahanRumah"
    >
      <iframe
        src={company.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor PindahanRumah di Jakarta Timur"
        className="absolute inset-0"
      />
      {/* Card overlay dihapus */}
    </section>
  )
}