// components/ImageGallery.tsx
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  })

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  // Jika tidak ada gambar, fallback ke placeholder
  const galleryImages = images.length > 0 ? images : ['/placeholder.jpg']

  return (
    <div className="relative">
      {/* Carousel wrapper */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] aspect-video">
              <Image
                src={src}
                alt={`${alt} - gambar ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tombol navigasi (hanya muncul jika lebih dari 1 gambar) */}
      {galleryImages.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors z-10"
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors z-10"
            aria-label="Gambar berikutnya"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Indikator (dot) */}
      {galleryImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-colors"
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Ke gambar ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}