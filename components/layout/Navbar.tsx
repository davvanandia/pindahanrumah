'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/constants'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const waUrl = buildWhatsAppUrl(company.whatsapp, 'Halo PindahanRumah, saya ingin mendapatkan estimasi biaya pindahan.')

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white border-b border-surface-variant'
      }`}
      role="banner"
    >
      <nav
        className="flex justify-between items-center w-full px-4 md:px-margin-desktop max-w-container-max mx-auto h-20"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="PindahanRumah - Halaman Utama"
        >
          <span className="font-montserrat font-bold text-xl md:text-2xl text-primary tracking-tight group-hover:text-secondary transition-colors">
            Pindahan <span className="text-secondary">Rumah</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                role="listitem"
                className={`font-montserrat font-bold text-sm tracking-widest uppercase transition-colors relative group ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-montserrat font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-secondary transition-all duration-200 active:scale-95"
            aria-label="Dapatkan estimasi harga via WhatsApp"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-surface-variant"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Navigasi mobile">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-montserrat font-bold text-sm tracking-widest uppercase py-3 px-4 rounded transition-colors ${
                      isActive
                        ? 'bg-secondary/10 text-secondary'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-secondary text-white font-montserrat font-bold text-sm tracking-widest uppercase py-3 px-4 text-center transition-all hover:brightness-110"
                aria-label="Dapatkan estimasi harga via WhatsApp"
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}