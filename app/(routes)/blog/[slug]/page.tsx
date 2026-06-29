import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Data dummy (bisa diambil dari JSON atau CMS)
const articles = {
  "tips-pindahan-aman": {
    title: "Tips Pindahan Aman dan Nyaman",
    date: "2024-06-20",
    author: "Tim Pindahan Rumah",
    content: `
      <p>Proses pindahan seringkali menjadi momen yang melelahkan dan penuh stres. Namun dengan persiapan yang matang, Anda bisa menjalani proses pindahan dengan aman dan nyaman. Berikut adalah beberapa tips dari tim profesional kami:</p>
      
      <h2>1. Rencanakan dengan Matang</h2>
      <p>Buat timeline pindahan minimal 2-3 minggu sebelum hari-H. Tentukan tanggal pindahan, pesan jasa pindahan, dan siapkan peralatan packing.</p>
      
      <h2>2. Bersihkan dan Sortir Barang</h2>
      <p>Manfaatkan momen pindahan untuk membersihkan barang-barang yang tidak terpakai. Anda bisa menyumbang atau menjual barang yang masih layak.</p>
      
      <h2>3. Packing dengan Benar</h2>
      <p>Gunakan kardus berkualitas, bubble wrap untuk barang pecah belah, dan beri label pada setiap kardus untuk memudahkan penataan di tempat baru.</p>
      
      <h2>4. Persiapkan Dokumen Penting</h2>
      <p>Simpan dokumen penting seperti KTP, sertifikat rumah, dan dokumen berharga lainnya di tempat yang aman dan mudah dijangkau.</p>
      
      <h2>5. Gunakan Jasa Pindahan Profesional</h2>
      <p>Dengan menggunakan jasa pindahan profesional, Anda bisa lebih tenang karena barang-barang Anda ditangani oleh tenaga ahli yang berpengalaman.</p>
      
      <p>Semoga tips ini bermanfaat untuk pindahan Anda. Jika Anda membutuhkan bantuan, jangan ragu untuk menghubungi tim kami.</p>
    `,
  },
  "cara-packing-efektif": {
    title: "Cara Packing Efektif untuk Barang Pecah Belah",
    date: "2024-06-15",
    author: "Tim Pindahan Rumah",
    content: `
      <p>Barang pecah belah seperti piring, gelas, cermin, dan elektronik membutuhkan perhatian khusus saat packing. Berikut adalah teknik packing yang efektif untuk melindungi barang-barang berharga Anda.</p>
      
      <h2>1. Siapkan Bahan Packing</h2>
      <p>Anda membutuhkan bubble wrap, kertas koran, kardus double wall, dan lakban. Pastikan kardus dalam kondisi baik dan kuat.</p>
      
      <h2>2. Bungkus Satu per Satu</h2>
      <p>Bungkus setiap barang dengan bubble wrap atau kertas koran. Untuk piring, tempatkan secara vertikal untuk mengurangi risiko pecah.</p>
      
      <h2>3. Isi Ruang Kosong</h2>
      <p>Gunakan kertas atau busa untuk mengisi ruang kosong di dalam kardus agar barang tidak bergerak saat diangkut.</p>
      
      <h2>4. Beri Label "Pecah Belah"</h2>
      <p>Beri label yang jelas pada kardus yang berisi barang pecah belah agar tim pindahan bisa menanganinya dengan ekstra hati-hati.</p>
      
      <p>Dengan teknik packing yang tepat, barang pecah belah Anda akan tetap aman selama proses pindahan.</p>
    `,
  },
  "pindahan-kantor-tanpa-downtime": {
    title: "Strategi Pindahan Kantor Tanpa Downtime",
    date: "2024-06-10",
    author: "Tim Pindahan Rumah",
    content: `
      <p>Pindahan kantor adalah tantangan besar bagi perusahaan. Downtime yang terlalu lama bisa mengganggu produktivitas dan merugikan bisnis. Berikut adalah strategi untuk memindahkan kantor tanpa downtime yang berarti.</p>
      
      <h2>1. Buat Timeline Terperinci</h2>
      <p>Rencanakan pindahan di akhir pekan atau hari libur untuk meminimalkan gangguan operasional.</p>
      
      <h2>2. Identifikasi Aset Penting</h2>
      <p>Pisahkan peralatan yang paling kritis seperti server, komputer, dan dokumen penting untuk diprioritaskan.</p>
      
      <h2>3. Koordinasi dengan Tim IT</h2>
      <p>Pastikan tim IT sudah siap untuk setup ulang jaringan dan sistem di kantor baru sebelum hari H.</p>
      
      <h2>4. Gunakan Jasa Pindahan Spesialis Kantor</h2>
      <p>Kami memiliki tim yang terlatih untuk menangani pindahan kantor dengan cepat dan efisien, termasuk penanganan server dan peralatan elektronik.</p>
      
      <p>Dengan perencanaan yang baik dan tim yang profesional, pindahan kantor bisa dilakukan tanpa mengganggu operasional bisnis Anda.</p>
    `,
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles];
  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }
  return {
    title: article.title,
    description: article.content.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen py-stack-lg bg-background">
      <div className="container mx-auto px-margin-desktop max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
        </Link>

        <article>
          <h1 className="font-headline-lg text-headline-lg mb-4 text-primary">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {article.author}
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-6 border-t border-surface-variant">
            <p className="text-center text-on-surface-variant">
              Butuh bantuan pindahan? <Link href="/#quote" className="text-secondary hover:underline">Hubungi kami sekarang</Link>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}