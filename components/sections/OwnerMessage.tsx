// components/sections/OwnerMessage.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation, fadeUpVariants } from '@/hooks/useScrollAnimation'
import company from '@/data/company.json'

export default function OwnerMessage() {
  const { ref, controls } = useScrollAnimation()
  const owner = company.owner

  if (!owner) return null

  return (
    <section
      className="section-padding bg-surface-container-low"
      aria-labelledby="owner-heading"
    >
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Foto Owner - dengan dimensi yang jelas di mobile */}
          <div className="relative w-full max-w-xs mx-auto lg:max-w-sm aspect-[3/4] overflow-hidden shadow-xl">
            <Image
              src={owner.photo}
              alt={owner.name}
              fill
              sizes="(max-width: 768px) 80vw, 30vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Pesan */}
          <div className="space-y-6">
            <h2 id="owner-heading" className="heading-lg text-primary text-center lg:text-left">
              Kata Owner
            </h2>
            <blockquote className="font-franklin text-on-surface-variant text-base md:text-lg leading-relaxed italic border-l-4 border-secondary pl-6">
              "{owner.message}"
            </blockquote>
            <div className="text-center lg:text-left">
              <p className="font-montserrat font-bold text-primary text-sm tracking-widest uppercase">
                {owner.name}
              </p>
              <p className="font-franklin text-on-surface-variant/70 text-sm">
                {owner.position}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}