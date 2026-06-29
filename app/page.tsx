import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SpecialServices from "@/components/sections/SpecialServices";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/sections/QuoteForm";
import MapEmbed from "@/components/shared/MapEmbed";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <SpecialServices />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <MapEmbed />
    </main>
  );
}