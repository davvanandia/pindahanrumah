'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainerVariants, cardVariants } from '@/hooks/useScrollAnimation'
import company from '@/data/company.json'

export default function Stats() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section
      className="bg-primary py-12 md:py-16"
      aria-label="Statistik dan pencapaian PindahanRumah"
    >
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={controls}
        className="container-main grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {company.stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="text-center"
          >
            <p className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-2">
              {stat.value}
            </p>
            <p className="font-franklin text-sm md:text-base text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}