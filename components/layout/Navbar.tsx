"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants";
import company from "@/data/company.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-surface-variant h-20">
      <div className="container mx-auto px-margin-desktop flex justify-between items-center h-full">
        <Link href="/" className="font-display-lg text-primary font-bold tracking-tighter">
          {company.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-gutter">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-primary text-on-primary hover:bg-primary/90">
            <Link href="/#quote">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 lg:hidden flex flex-col gap-4 border-t border-surface-variant">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary w-full">
              <Link href="/#quote" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}