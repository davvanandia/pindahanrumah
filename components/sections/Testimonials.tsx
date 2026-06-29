'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '@/hooks/useScrollAnimation'
import testimonials from '@/data/testimonials.json'
import type { Testimonial } from '@/types'

export default function Testimonials() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()
  const { ref: gridRef, controls: gridControls } = useScrollAnimation()

  return (
    <section
      className="section-padding bg-surface-container-low"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-main">
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="text-center mb-12"
        >
          <h2 id="testimonials-heading" className="heading-lg text-primary mb-3">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4" aria-hidden="true" />
          <p className="font-franklin text-on-surface-variant max-w-xl mx-auto">
            Ribuan pelanggan telah mempercayakan pindahan mereka kepada PindahanRumah.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {(testimonials as Testimonial[]).map((t) => (
            <motion.article
              key={t.id}
              variants={cardVariants}
              className="bg-white border border-surface-variant p-6 md:p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`Rating: ${t.rating} dari 5 bintang`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-franklin text-on-surface-variant leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-surface-variant">
                <div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-montserrat font-bold text-lg"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-montserrat font-bold text-sm text-primary">{t.name}</p>
                  <p className="font-franklin text-xs text-on-surface-variant">{t.role}</p>
                </div>
                <span className="ml-auto bg-secondary/10 text-secondary font-montserrat font-bold text-xs px-3 py-1">
                  {t.service}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}