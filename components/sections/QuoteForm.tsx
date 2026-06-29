'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants } from '@/hooks/useScrollAnimation'
import company from '@/data/company.json'
import { buildWhatsAppUrl } from '@/lib/utils'

const jenisOptions = [
  'Pindahan Rumah',
  'Pindahan Kantor',
  'Pindahan Apartemen',
  'Pindahan Gudang',
  'Jasa Packing',
  'Bongkar Pasang Furniture',
  'Angkut Barang Berat',
]

export default function QuoteForm() {
  const { ref, controls } = useScrollAnimation()
  const [form, setForm] = useState({
    nama: '',
    whatsapp: '',
    asal: '',
    tujuan: '',
    jenis: jenisOptions[0],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const message = `Halo PindahanRumah! Saya ingin mendapatkan estimasi biaya pindahan.

Nama: ${form.nama}
No. WhatsApp: ${form.whatsapp}
Alamat Asal: ${form.asal}
Alamat Tujuan: ${form.tujuan}
Jenis Pindahan: ${form.jenis}

Mohon bantuannya, terima kasih!`

    const url = buildWhatsAppUrl(company.whatsapp, message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      className="section-padding bg-background"
      id="quote"
      aria-labelledby="quote-heading"
    >
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="bg-white border border-surface-variant shadow-sm overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left panel */}
          <aside className="lg:w-1/3 bg-primary p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h2 id="quote-heading" className="font-montserrat font-bold text-2xl md:text-3xl mb-5">
                Dapatkan Estimasi Biaya
              </h2>
              <p className="font-franklin text-white/70 mb-8 leading-relaxed">
                Lengkapi detail pindahan Anda untuk mendapatkan penawaran harga terbaik dalam waktu kurang dari 30 menit.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="text-secondary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm uppercase tracking-wider">Hotline 24/7</p>
                    <a href={`tel:${company.phone}`} className="font-franklin text-white/70 text-sm hover:text-secondary transition-colors">{company.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-secondary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm uppercase tracking-wider">Email Bisnis</p>
                    <a href={`mailto:${company.email}`} className="font-franklin text-white/70 text-sm hover:text-secondary transition-colors">{company.email}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-montserrat font-bold text-xs text-white/40 uppercase tracking-widest mb-3">
                Jam Operasional
              </p>
              <p className="font-franklin text-white/60 text-sm">{company.operationalHours}</p>
            </div>
          </aside>

          {/* Right panel - Form */}
          <div className="lg:w-2/3 p-8 md:p-10">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulir permintaan estimasi biaya pindahan"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Nama */}
              <div className="space-y-2">
                <label
                  htmlFor="nama"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface"
                >
                  Nama Lengkap <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-surface-container-low border border-surface-variant px-4 py-3 font-franklin text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  aria-required="true"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label
                  htmlFor="whatsapp"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface"
                >
                  Nomor WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="0812..."
                  className="w-full bg-surface-container-low border border-surface-variant px-4 py-3 font-franklin text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  aria-required="true"
                />
              </div>

              {/* Asal */}
              <div className="space-y-2">
                <label
                  htmlFor="asal"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface"
                >
                  Alamat Asal <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="asal"
                  name="asal"
                  type="text"
                  required
                  value={form.asal}
                  onChange={handleChange}
                  placeholder="Kota/Kecamatan asal"
                  className="w-full bg-surface-container-low border border-surface-variant px-4 py-3 font-franklin text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  aria-required="true"
                />
              </div>

              {/* Tujuan */}
              <div className="space-y-2">
                <label
                  htmlFor="tujuan"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface"
                >
                  Alamat Tujuan <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="tujuan"
                  name="tujuan"
                  type="text"
                  required
                  value={form.tujuan}
                  onChange={handleChange}
                  placeholder="Kota/Kecamatan tujuan"
                  className="w-full bg-surface-container-low border border-surface-variant px-4 py-3 font-franklin text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  aria-required="true"
                />
              </div>

              {/* Jenis */}
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="jenis"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase text-on-surface"
                >
                  Jenis Pindahan
                </label>
                <select
                  id="jenis"
                  name="jenis"
                  value={form.jenis}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border border-surface-variant px-4 py-3 font-franklin text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                >
                  {jenisOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-montserrat font-bold text-sm tracking-widest uppercase py-4 hover:bg-secondary active:scale-95 transition-all duration-200 shadow-md"
                >
                  Kirim Permintaan Penawaran via WhatsApp
                </button>
                <p className="text-center font-franklin text-xs text-on-surface-variant mt-3">
                  * Anda akan diarahkan ke WhatsApp. Data tidak disimpan di server.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}