'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation'
import faqs from '@/data/faqs.json'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'
import type { FAQ } from '@/types'

function AccordionItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-surface-variant bg-white">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface-container-low transition-colors group"
      >
        <span className="font-montserrat font-bold text-sm md:text-base text-primary pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-secondary"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-question-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-franklin text-on-surface-variant text-sm md:text-base leading-relaxed px-5 md:px-6 pb-5 md:pb-6 pt-1">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()
  const { ref: listRef, controls: listControls } = useScrollAnimation()

  const waUrl = buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya memiliki pertanyaan tentang layanan pindahan.')

  return (
    <section
      className="section-padding bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="container-main max-w-3xl">
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="heading-lg text-primary mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4" aria-hidden="true" />
          <p className="font-franklin text-on-surface-variant">
            Temukan jawaban atas pertanyaan umum seputar layanan pindahan kami.
          </p>
        </motion.div>

        <motion.div
          ref={listRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={listControls}
          className="space-y-2 mb-12"
        >
          {(faqs as FAQ[]).map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <div className="bg-primary text-white p-8 text-center">
          <h3 className="font-montserrat font-bold text-xl mb-3">Masih Ada Pertanyaan?</h3>
          <p className="font-franklin text-white/70 mb-6">
            Tim kami siap membantu Anda 7 hari seminggu via WhatsApp.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Hubungi PindahanRumah via WhatsApp untuk pertanyaan lebih lanjut"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}