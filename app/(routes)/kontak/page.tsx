'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants } from '@/hooks/useScrollAnimation'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Import sections
import QuoteForm from '@/components/sections/QuoteForm'
import MapEmbed from '@/components/shared/MapEmbed'

import company from '@/data/company.json'
import { cn } from '@/lib/utils'

// Textarea component (fallback jika tidak ada di @/components/ui/textarea)
const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
)

export default function ContactPage() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Pesan dari ${form.name} - ${company.name}`
    )
    const body = encodeURIComponent(
      `${form.message}\n\n---\nEmail: ${form.email}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container-main">
        {/* Heading - konsisten dengan layanan/page.tsx */}
        <motion.div
          ref={headingRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={headingControls}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg text-primary mb-3">Hubungi Kami</h1>
          <div className="w-16 h-1 bg-secondary mx-auto" />
          <p className="font-franklin text-on-surface-variant max-w-2xl mx-auto mt-4">
            Kami siap membantu Anda. Silakan hubungi kami melalui formulir atau
            kontak di bawah ini.
          </p>
        </motion.div>

        {/* Quote Form Section */}
        <div>
          <QuoteForm />
        </div>

        {/* Map Embed Section */}
        <div>
          <MapEmbed />
        </div>
      </div>
    </main>
  )
}