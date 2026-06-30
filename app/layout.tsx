import type { Metadata } from 'next'
import { Montserrat, Libre_Franklin } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/shared/WhatsAppFloat'
import company from '@/data/company.json'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-franklin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },

  icons: {
    icon: '/logoPR-transparan.png',
    shortcut: '/logoPR-transparan.png',
    apple: '/logoPR-transparan.png',
  },
  
  description: company.description,
  keywords: [
    'jasa pindahan',
    'pindahan rumah',
    'pindahan kantor',
    'jasa packing',
    'relokasi profesional',
    'PindahanRumah',
    'pindahan Jakarta',
    'jasa pindahan profesional',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.pindahanrumah.online',
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  description: company.description,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address,
    addressLocality: 'Jakarta Timur',
    addressRegion: 'DKI Jakarta',
    addressCountry: 'ID',
  },
  url: 'https://www.pindahanrumah.online',
  openingHours: 'Mo-Sa 07:00-20:00',
  priceRange: '$$',
  sameAs: [company.social.instagram, company.social.facebook],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${libreFranklin.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}