import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import SpecialServices from '@/components/sections/SpecialServices'
import Testimonials from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQ'
import QuoteForm from '@/components/sections/QuoteForm'
import MapEmbed from '@/components/shared/MapEmbed'
import company from '@/data/company.json'

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: `${company.description} Layanan pindahan rumah, kantor, apartemen, dan gudang dengan jaminan keamanan 100%.`,
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <SpecialServices />
      <Testimonials />
      <FAQSection />
      <QuoteForm />
      <MapEmbed />
    </>
  )
}