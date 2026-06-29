import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

// Data dummy untuk artikel (nanti bisa diganti dengan data dari JSON atau CMS)
const articles = [
  {
    slug: "tips-pindahan-aman",
    title: "Tips Pindahan Aman dan Nyaman",
    excerpt: "Panduan lengkap agar proses pindahan berjalan lancar dan barang Anda tetap aman.",
    date: "2024-06-20",
    author: "Tim Pindahan Rumah",
  },
  {
    slug: "cara-packing-efektif",
    title: "Cara Packing Efektif untuk Barang Pecah Belah",
    excerpt: "Pelajari teknik packing yang benar agar barang pecah belah Anda tidak rusak.",
    date: "2024-06-15",
    author: "Tim Pindahan Rumah",
  },
  {
    slug: "pindahan-kantor-tanpa-downtime",
    title: "Strategi Pindahan Kantor Tanpa Downtime",
    excerpt: "Tips memindahkan kantor tanpa mengganggu operasional bisnis Anda.",
    date: "2024-06-10",
    author: "Tim Pindahan Rumah",
  },
];

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description: "Artikel dan tips seputar pindahan, packing, dan relokasi dari tim profesional kami.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop">
        <div className="text-center mb-12">
          <h1 className="font-headline-lg text-headline-lg mb-4">Blog & Artikel</h1>
          <div className="w-20 h-1 bg-secondary mx-auto" />
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-4">
            Temukan tips dan informasi berguna seputar pindahan dari tim profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-6xl mx-auto">
          {articles.map((article) => (
            <Card key={article.slug} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline-md">
                  <Link href={`/blog/${article.slug}`} className="hover:text-secondary transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-on-surface-variant text-sm mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4 pt-4 border-t border-surface-variant">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}