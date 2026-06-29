"use client";
import company from "@/data/company.json";

export default function MapEmbed() {
  return (
    <section className="h-[450px] relative bg-surface-variant" id="contact">
      <div className="absolute inset-0 grayscale contrast-125">
        <iframe
          src={company.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Kantor"
        />
      </div>
      <div className="absolute top-10 left-10 bg-white p-6 shadow-2xl max-w-sm border border-surface-variant hidden md:block">
        <h4 className="font-headline-md text-headline-md mb-4 text-primary">Kantor Pusat</h4>
        <p className="font-body-md mb-4">{company.address}</p>
        <a
          href={company.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-secondary font-label-bold cursor-pointer"
        >
          <span>DAPATKAN ARAH</span>
        </a>
      </div>
    </section>
  );
}