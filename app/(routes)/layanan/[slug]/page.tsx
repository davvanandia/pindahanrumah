// app/layanan/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react'

import services from '@/data/services.json'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'
import type { Service } from '@/types'
import ImageGallery from '@/components/ImageGallery'

// Mapping gambar untuk semua layanan (tetap digunakan untuk card related)
const serviceImages: Record<string, string> = {
  'pindahan-rumah': '/rumah.png',
  'pindahan-kantor': '/kantor.png',
  'pindahan-apartemen': '/apartemen.png',
  'pindahan-gudang': '/gudang.png',
  'pindahan-kos-kontrakan': '/kontrakan.png',
}

// Generate static params untuk semua layanan utama
export async function generateStaticParams() {
  const mainServices = services.filter((s) => s.category === 'utama')
  return mainServices.map((service) => ({
    slug: service.slug,
  }))
}

// Cari service berdasarkan slug
function getService(slug: string): Service | undefined {
  return services.find(
    (s) => s.slug === slug && s.category === 'utama'
  ) as Service | undefined
}

// Metadata dinamis untuk SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return { title: 'Layanan Tidak Ditemukan' }

  return {
    title: `${service.title} - PindahanRumah`,
    description: service.description,
    openGraph: {
      title: `${service.title} - PindahanRumah`,
      description: service.description,
      images: serviceImages[service.slug] ? [serviceImages[service.slug]] : [],
    },
    alternates: {
      canonical: `https://pindahanrumah.com/layanan/${service.slug}`,
    },
  }
}

export default function LayananDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  const waUrl = buildWhatsAppUrl(company.whatsapp, service.whatsappMessage)

  // Ambil 3 layanan lainnya (tidak termasuk yang sedang dilihat)
  const otherServices = services
    .filter((s) => s.category === 'utama' && s.slug !== service.slug)
    .slice(0, 3)

  // Kumpulkan gambar untuk galeri
  const galleryImages = service.gallery && service.gallery.length > 0
    ? service.gallery
    : [service.image]

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container-main">
        {/* Breadcrumb */}
        <nav
          className="text-sm font-franklin text-on-surface-variant/60 mb-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant/30" aria-hidden="true">
              /
            </li>
            <li>
              <Link href="/layanan" className="hover:text-secondary transition-colors">
                Layanan Pindahan
              </Link>
            </li>
            <li className="text-on-surface-variant/30" aria-hidden="true">
              /
            </li>
            <li
              className="text-secondary font-montserrat font-bold text-xs tracking-widest uppercase"
              aria-current="page"
            >
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero / Detail Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 animate-fadeInUp">
          {/* Kolom kiri: Gambar & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galeri Carousel */}
            <ImageGallery images={galleryImages} alt={service.imageAlt || service.title} />

            <h1 className="heading-lg text-primary">{service.title}</h1>
            <p className="font-franklin text-on-surface-variant text-base leading-relaxed">
              {service.description}
            </p>

            {/* Fitur lengkap */}
            {service.features && service.features.length > 0 && (
              <div>
                <h2 className="heading-md text-primary mb-4">Layanan yang Kami Tawarkan</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 font-franklin text-sm text-on-surface-variant"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar - CTA & Kontak */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-surface-variant shadow-sm sticky top-24">
              <h3 className="font-montserrat font-bold text-sm tracking-widest uppercase text-primary mb-4">
                Butuh Bantuan?
              </h3>
              <p className="font-franklin text-on-surface-variant text-sm mb-6">
                Konsultasikan kebutuhan pindahan Anda langsung dengan tim kami.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-white font-montserrat font-bold text-sm tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
              >
                Konsultasi via WhatsApp
              </a>

              <hr className="my-6 border-surface-variant" />

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-secondary shrink-0" />
                  <span className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface-variant/70">
                    Hotline:
                  </span>
                  <a
                    href={`tel:${company.phone}`}
                    className="font-franklin text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-secondary shrink-0" />
                  <span className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface-variant/70">
                    Email:
                  </span>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-franklin text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Tombol Kembali */}
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-montserrat font-bold text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Layanan
            </Link>
          </div>
        </div>

        {/* Layanan Lainnya */}
        {otherServices.length > 0 && (
          <div className="pt-12 border-t border-surface-variant animate-fadeInUp">
            <h2 className="heading-md text-primary text-center mb-8">
              Layanan Lainnya
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((related) => (
                <article
                  key={related.slug}
                  className="group card-base overflow-hidden flex flex-col h-full"
                >
                  {/* Gambar */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={serviceImages[related.slug] ?? '/images/rumah.png'}
                      alt={related.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    {related.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-3 py-1 rounded">
                        {related.badge}
                      </div>
                    )}
                  </div>

                  {/* Konten */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="heading-md text-primary mb-3">
                      {related.title}
                    </h3>
                    <p className="font-franklin text-on-surface-variant text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {related.description}
                    </p>

                    {/* Fitur ringkas */}
                    <ul className="space-y-2 mb-6">
                      {related.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 font-montserrat font-bold text-xs text-on-surface-variant"
                        >
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {related.features.length > 3 && (
                        <li className="text-xs text-on-surface-variant/60 font-montserrat font-bold">
                          +{related.features.length - 3} layanan lainnya
                        </li>
                      )}
                    </ul>

                    {/* Tombol */}
                    <div className="flex gap-3">
                      <a
                        href={buildWhatsAppUrl(company.whatsapp, related.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                        aria-label={`Pesan ${related.title} via WhatsApp`}
                      >
                        Pesan Sekarang
                      </a>
                      <Link
                        href={`/layanan/${related.slug}`}
                        className="px-4 border border-primary text-primary font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all flex items-center"
                        aria-label={`Detail ${related.title}`}
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Tombol Lihat Semua */}
            <div className="mt-10 text-center">
              <Link href="/layanan" className="btn-outline" aria-label="Lihat semua layanan">
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}