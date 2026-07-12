// app/kontak/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants } from '@/hooks/useScrollAnimation'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

import QuoteForm from '@/components/sections/QuoteForm'
import MapEmbed from '@/components/shared/MapEmbed'

import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

// Ikon Tiktok
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.76-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

// Ikon WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

export default function ContactPage() {
  const { ref: linktreeRef, controls: linktreeControls } = useScrollAnimation()
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: company.social.instagram,
      bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: company.social.facebook,
      bg: 'bg-[#1877F2]',
    },
    {
      name: 'TikTok',
      icon: <TiktokIcon className="w-5 h-5" />,
      url: company.social.tiktok,
      bg: 'bg-black',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon className="w-5 h-5" />,
      url: buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya ingin mendapatkan informasi.'),
      bg: 'bg-[#25D366]',
    },
  ]

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
              <Link href="/" className="hover:text-secondary transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant/30" aria-hidden="true">/</li>
            <li
              className="text-secondary font-montserrat font-bold text-xs tracking-widest uppercase"
              aria-current="page"
            >
              Kontak
            </li>
          </ol>
        </nav>

        {/* HEADING HUBUNGI KAMI - di atas linktree */}
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="mb-8 text-center"
        >
          <h1 className="heading-lg text-primary mb-3">Hubungi Kami</h1>
          <div className="w-16 h-1 bg-secondary mx-auto" />
          <p className="font-franklin text-on-surface-variant max-w-2xl mx-auto mt-4">
            Kami siap membantu Anda. Silakan hubungi kami melalui
            kontak di bawah ini.
          </p>
        </motion.div>

        {/* LINKTREE - daftar vertikal sederhana */}
        <motion.div
          ref={linktreeRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={linktreeControls}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-3 border border-surface-variant">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg border border-surface-variant hover:shadow-md transition-all group"
              >
                <div className={`${item.bg} text-white p-2 rounded-full shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-montserrat font-bold text-sm text-primary flex-1">
                  {item.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-on-surface-variant/40 group-hover:text-secondary transition-colors"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* QUOTE FORM */}
        <div className="mb-12">
          <QuoteForm />
        </div>

        {/* MAP EMBED */}
        <div>
          <MapEmbed />
        </div>
      </div>
    </main>
  )
}