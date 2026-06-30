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

const spesialisServices = (services as Service[]).filter(
  (s) => s.category === 'spesialis'
)

export default function LayananTambahanPage() {
  const { ref: headingRef, controls: headingControls } =
    useScrollAnimation()

  const { ref: gridRef, controls: gridControls } =
    useScrollAnimation()

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container-main">
        {/* Breadcrumb */}
        <nav
          className="text-sm font-franklin text-on-surface-variant/60 mb-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-secondary transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant/30" aria-hidden="true">
              /
            </li>
            <li
              className="text-secondary font-montserrat font-bold text-xs tracking-widest uppercase"
              aria-current="page"
            >
              Layanan Tambahan
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="mb-12"
        >
          <h1 className="heading-lg text-primary mb-3">
            Layanan Spesialis & Tambahan
          </h1>
          <div className="w-16 h-1 bg-secondary" aria-hidden="true" />
          <p className="font-franklin text-on-surface-variant max-w-2xl mt-4">
            Layanan pendukung profesional: packing, bongkar pasang, handling barang berat, dan perawatan sofa.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {spesialisServices.map((service) => {
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
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  {service.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-3 py-1 rounded">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="heading-md text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-franklin text-on-surface-variant text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
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

                  {/* Actions */}
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
                      href={`/layanan-tambahan/${service.slug}`}
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

        {/* Kembali ke Layanan Utama */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={gridControls}
          className="mt-10 text-center"
        >
          <Link
            href="/layanan"
            className="btn-outline"
            aria-label="Kembali ke layanan utama PindahanRumah"
          >
            Kembali ke Layanan Utama
          </Link>
        </motion.div>
      </div>
    </main>
  )
}