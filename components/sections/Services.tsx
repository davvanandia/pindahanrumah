'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  useScrollAnimation,
  fadeUpVariants,
  staggerContainerVariants,
  cardVariants,
} from '@/hooks/useScrollAnimation'
import services from '@/data/services.json'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'
import type { Service } from '@/types'

const mainServices = (services as Service[]).filter(
  (s) => s.category === 'utama'
)

const serviceImages: Record<string, string> = {
  'pindahan-rumah': '/rumah.png',
  'pindahan-kantor': '/kantor.png',
  'pindahan-apartemen': '/apartemen.png',
  'pindahan-gudang': '/gudang.png',
  'pindahan-kos-kontrakan': '/kontrakan.png',
}

export default function Services() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()
  const { ref: gridRef, controls: gridControls } = useScrollAnimation()

  return (
    <section
      className="section-padding bg-background"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="mb-12"
        >
          <h2 id="services-heading" className="heading-lg text-primary mb-3">
            Layanan Pindahan Utama
          </h2>
          <div className="w-16 h-1 bg-secondary" aria-hidden="true" />
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mainServices.map((service) => {
            const waUrl = buildWhatsAppUrl(
              company.whatsapp,
              service.whatsappMessage
            )

            return (
              <motion.article
                key={service.slug}
                id={service.slug}
                variants={cardVariants}
                className="group card-base overflow-hidden flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={serviceImages[service.slug] ?? '/images/rumah.png'}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={service.slug === 'pindahan-rumah'}
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  {service.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-3 py-1 rounded">
                      {service.badge}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="heading-md text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-franklin text-on-surface-variant text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-montserrat font-bold text-xs text-on-surface-variant"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-secondary shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                      aria-label={`Pesan ${service.title} via WhatsApp`}
                    >
                      Pesan Sekarang
                    </a>
                    <Link
                      href={`/layanan/${service.slug}`}
                      className="px-4 border border-primary text-primary font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all flex items-center"
                      aria-label={`Detail layanan ${service.title}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={gridControls}
          className="mt-10 text-center"
        >
          <Link href="/layanan" className="btn-outline" aria-label="Lihat semua layanan PindahanRumah">
            Lihat Semua Layanan Pindahan
          </Link>
        </motion.div>
      </div>
    </section>
  )
}