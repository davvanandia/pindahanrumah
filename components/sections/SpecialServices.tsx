'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '@/hooks/useScrollAnimation'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

const specialItems = [
  {
    id: 'jasa-packing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.25 2.25 0 00.091-.086L12 5.432z" />
      </svg>
    ),
    title: 'Jasa Packing Profesional',
    description: 'Perlindungan berlapis menggunakan Bubble Wrap, Stretch Film, Kardus Double Wall, hingga Wooden Crate untuk barang sangat berharga.',
    tags: ['Bubble Wrap', 'Stretch Film', 'Kardus', 'Packing Kayu'],
    colSpan: 'md:col-span-8',
    bg: 'bg-white',
    textColor: 'text-primary',
    descColor: 'text-on-surface-variant',
    iconBg: 'bg-secondary',
    iconColor: 'text-white',
  },
  {
    id: 'bongkar-pasang-furniture',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path fillRule="evenodd" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" clipRule="evenodd" />
      </svg>
    ),
    title: 'Bongkar Pasang Furnitur',
    description: 'Tim ahli untuk Kitchen Set, tempat tidur king size, hingga lemari wardrobe custom.',
    tags: ['Lemari', 'Tempat Tidur', 'Meja Kantor', 'Kitchen Set'],
    colSpan: 'md:col-span-4',
    bg: 'bg-white',
    textColor: 'text-primary',
    descColor: 'text-on-surface-variant',
    iconBg: 'bg-secondary',
    iconColor: 'text-white',
  },
  {
    id: 'angkut-barang-berat',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v3.75h2.25v-3.75a.75.75 0 00-.75-.75h-.75z" />
        <path d="M17.625 12.75h-2.625V15h2.625a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-2.625v2.625h2.625a2.625 2.625 0 002.625-2.625v-2.25a2.625 2.625 0 00-2.625-2.625z" />
      </svg>
    ),
    title: 'Angkut Barang Berat (Handling)',
    description: 'Penanganan stok barang, bongkar rak industri, hingga relokasi mesin berat secara presisi.',
    tags: ['Brankas', 'Mesin Industri', 'Mesin Fotokopi', 'Genset'],
    colSpan: 'md:col-span-8',
    bg: 'bg-primary',
    textColor: 'text-white',
    descColor: 'text-white/70',
    iconBg: 'bg-white',
    iconColor: 'text-primary',
  },
  {
    id: 'servis-sofa',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M4.5 5.25a2.25 2.25 0 00-2.25 2.25v5.25c0 .414.336.75.75.75h.75v3.75a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-3.75h.75a.75.75 0 00.75-.75V7.5a2.25 2.25 0 00-2.25-2.25h-15zM3 7.5c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75v4.5H3v-4.5z" />
        <path d="M6.75 15.75a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" />
      </svg>
    ),
    title: 'Servis Sofa',
    description: 'Layanan home service untuk sofa kotor, bau, atau rusak. Kami datang ke lokasi, pengerjaan rapi dan bergaransi, teknisi berpengalaman, harga terjangkau, gratis survei (sesuai area).',
    tags: ['Cuci Sofa', 'Servis Sofa', 'Ganti Kain', 'Ganti Busa', 'Perbaikan Pegas'],
    colSpan: 'md:col-span-4',
    bg: 'bg-primary',
    textColor: 'text-white',
    descColor: 'text-white/70',
    iconBg: 'bg-white',
    iconColor: 'text-primary',
  },
]

export default function SpecialServices() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()
  const { ref: gridRef, controls: gridControls } = useScrollAnimation()

  return (
    <section
      className="section-padding bg-surface-container-low"
      aria-labelledby="special-services-heading"
    >
      <div className="container-main">
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="text-center mb-12"
        >
          <h2 id="special-services-heading" className="heading-lg text-primary mb-4">
            Layanan Spesialis & Tambahan
          </h2>
          <p className="font-franklin text-on-surface-variant max-w-2xl mx-auto">
            Kami tidak hanya memindahkan barang, kami memastikan setiap detail aset Anda terlindungi sempurna.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {specialItems.map((item) => {
            const waUrl = buildWhatsAppUrl(
              company.whatsapp,
              `Halo PindahanRumah, saya ingin bertanya tentang layanan ${item.title}`
            )

            return (
              <motion.div
                key={item.id}
                id={item.id}
                variants={cardVariants}
                className={`${item.colSpan} ${item.bg} p-8 border border-surface-variant relative overflow-hidden group transition-shadow duration-300 hover:shadow-lg`}
              >
                <div className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center mb-6`}>
                  <div className={item.iconColor}>{item.icon}</div>
                </div>

                <h3 className={`heading-md mb-4 ${item.textColor}`}>{item.title}</h3>
                <p className={`font-franklin text-sm leading-relaxed mb-6 ${item.descColor}`}>
                  {item.description}
                </p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6" aria-label={`Layanan yang tersedia: ${item.tags.join(', ')}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container font-montserrat font-bold text-xs tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Dua tombol sejajar */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-5 py-2.5 text-center hover:brightness-110 active:scale-95 transition-all"
                    aria-label={`Konsultasi layanan ${item.title} via WhatsApp`}
                  >
                    Konsultasi Sekarang
                  </a>
                  <Link
                    href={`/layanan-tambahan/${item.id}`}
                    className="flex-1 border border-primary text-primary bg-white font-montserrat font-bold text-xs tracking-widest uppercase px-5 py-2.5 text-center hover:bg-primary hover:text-white transition-all"
                    aria-label={`Detail layanan ${item.title}`}
                  >
                    Detail
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={gridControls}
          className="mt-10 text-center"
        >
          <Link href="/layanan-tambahan" className="btn-outline" aria-label="Lihat semua layanan spesialis dan tambahan">
            Lihat Semua Layanan
          </Link>
        </motion.div>
      </div>
    </section>
  )
}