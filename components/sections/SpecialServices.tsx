'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '@/hooks/useScrollAnimation'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

const specialItems = [
  {
    id: 'jasa-packing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l4.5 2.5 5.25-3.5 5.25 3.5 4.5-2.5L12.378 1.602zM3 17.132V8.368l4.5 2.5v6.264L3 17.132zM16.5 17.132V10.868l4.5-2.5v8.764l-4.5.5-4.5 4.5-4.5-4.5V10.868L16.5 17.132z" />
      </svg>
    ),
    title: 'Jasa Packing Profesional',
    description: 'Perlindungan berlapis menggunakan Bubble Wrap, Stretch Film, Kardus Double Wall, hingga Wooden Crate untuk barang sangat berharga.',
    tags: ['Bubble Wrap', 'Kardus Double Wall', 'Stretch Film', 'Wooden Crate'],
    colSpan: 'md:col-span-8',
    bg: 'bg-white',
    textColor: 'text-primary',
    descColor: 'text-on-surface-variant',
  },
  {
    id: 'pindahan-gudang',
    icon: null,
    title: 'Pindahan Gudang',
    description: 'Penanganan stok barang, bongkar rak industri, hingga relokasi mesin berat secara presisi.',
    tags: [],
    colSpan: 'md:col-span-4',
    bg: 'bg-primary',
    textColor: 'text-secondary',
    descColor: 'text-white/70',
  },
  {
    id: 'bongkar-pasang-furniture',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-secondary" aria-hidden="true">
        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.306A5.25 5.25 0 0112 6.75z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Bongkar Pasang Furniture',
    description: 'Tim ahli untuk Kitchen Set, tempat tidur king size, hingga lemari wardrobe custom.',
    tags: [],
    colSpan: 'md:col-span-4',
    bg: 'bg-white',
    textColor: 'text-primary',
    descColor: 'text-on-surface-variant',
  },
  {
    id: 'angkut-barang-berat',
    icon: null,
    title: 'Angkut Barang Berat (Handling)',
    description: 'Brankas besar, Mesin Industri, Genset, hingga Piano Grand. Kami memiliki alat angkut hidrolik dan tim terlatih.',
    tags: [],
    colSpan: 'md:col-span-8',
    bg: 'bg-primary',
    textColor: 'text-white',
    descColor: 'text-white/70',
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
        {/* Heading */}
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

        {/* Bento Grid */}
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
                {item.icon && (
                  <div className="bg-secondary w-12 h-12 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                )}
                <h3 className={`heading-md mb-4 ${item.textColor}`}>{item.title}</h3>
                <p className={`font-franklin text-sm leading-relaxed mb-6 ${item.descColor}`}>
                  {item.description}
                </p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6" aria-label={`Material yang digunakan: ${item.tags.join(', ')}`}>
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
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-5 py-2.5 hover:brightness-110 active:scale-95 transition-all"
                  aria-label={`Konsultasi layanan ${item.title} via WhatsApp`}
                >
                  Konsultasi Sekarang
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}