'use client'

import { motion } from 'framer-motion'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const waUrl = buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya ingin mendapatkan estimasi biaya pindahan.')

  return (
    <section
      className="relative overflow-hidden bg-deep-onyx min-h-[600px] md:min-h-[720px] flex items-center"
      aria-label="Hero - Jasa Pindahan Profesional"
    >
      {/* Background layout */}
      <div className="absolute inset-0 z-0 flex">
        {/* Navy blue panel with diagonal clip */}
        <div
          className="hidden md:block w-[60%] bg-primary"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          aria-hidden="true"
        />
        {/* Right image panel */}
        <div className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[50%]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1F7fg0gC5reaaHzLOc6D70DpXocMnDyQjdAVBC-Uk2kvi-0l3nveGMON9kmfSYqDQI_N1ph9nCMx1eTcxDJ19VpzEVVuewSqOVFXECIk-KclXxX0DCHhXWeHgU1UTPFVbJG1RYogRBwq3HZUAeWiecwlk9SdCUBXcJmjm_jL5WSErsA8iHwkvtBQJG-IiE1ewCK78rJh6y6mBu4QouDIwqwJJLzLkYGoPQHqfewouQHcOrQJYY3XW_A')`,
            }}
            role="img"
            aria-label="Interior kantor modern yang siap dipindahkan oleh PindahanRumah"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="container-main relative z-20 w-full">
        <div className="max-w-xl text-white py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-secondary text-white font-montserrat font-bold text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
              #1 Relocation Specialist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat font-bold text-4xl md:text-6xl leading-tight tracking-tight mb-5"
          >
            Jasa Pindahan <br />
            <span className="text-secondary">Profesional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-franklin text-lg md:text-xl text-white/80 mb-10 max-w-md"
          >
            Solusi pindahan terlengkap untuk Kantor, Rumah, Apartemen, hingga Gudang dengan jaminan keamanan 100%.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              className="btn-primary shadow-lg shadow-secondary/20"
              aria-label="Cek estimasi biaya pindahan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75-6.75a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              Cek Estimasi Biaya
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
              aria-label="Hubungi PindahanRumah via WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Chat WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-20 py-3">
        <div className="container-main flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="font-montserrat font-bold text-xs text-white tracking-widest uppercase">
              Status Operasional: Normal
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-white/70 font-franklin text-sm">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary" aria-hidden="true"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
              Asuransi Full
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary" aria-hidden="true"><path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H5.25a3.75 3.75 0 117.5 0h3.75a1.875 1.875 0 001.875-1.875V15h-4.875z" /><path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3.75 3.75 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" /><path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" /></svg>
              Armada Terawat
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary" aria-hidden="true"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" /></svg>
              On-Time Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}