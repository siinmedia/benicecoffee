import { createFileRoute } from "@tanstack/react-router";
import { SeoArticle } from "@/components/site/SeoArticle";
import { canonicalLink, jsonLdScript, SITE_URL, socialMeta } from "@/lib/seo";

const title = "7 Kesalahan yang Harus Dihindari Saat Memulai Bisnis Kopi";
const description = "Hindari 7 kesalahan saat memulai bisnis kopi: tanpa riset pasar, salah hitung modal, salah pilih lokasi, terlalu banyak menu, dan terburu-buru memilih franchise.";
const path = "/blog/kesalahan-memulai-bisnis-kopi";

export const Route = createFileRoute("/blog/kesalahan-memulai-bisnis-kopi")({
  head: () => ({
    meta: socialMeta({ title, description, path, type: "article" }),
    links: [canonicalLink(path)],
    scripts: [jsonLdScript({ "@context": "https://schema.org", "@type": "Article", headline: title, description, keywords: "kesalahan bisnis kopi, memulai bisnis kopi, tips usaha kopi pemula", mainEntityOfPage: `${SITE_URL}${path}` })],
  }),
  component: () => <SeoArticle
    kicker="Strategi usaha · 9 menit baca"
    title={title}
    description="Peluang usaha kopi menarik, tetapi keputusan yang terburu-buru dapat membuat modal dan operasional sulit dikendalikan. Berikut hal-hal penting yang perlu diperhatikan sebelum memulai."
    sections={[
      {
        title: "Riset Pasar, Lokasi, dan Modal",
        content: <>
          <p>Jangan memulai tanpa memahami target konsumen, produk yang diminati, kisaran harga, dan kompetitor di sekitar lokasi. Riset sederhana membantu kamu menentukan konsep usaha yang lebih realistis.</p>
          <p>Lokasi yang ramai belum tentu tepat. Perhatikan kesesuaian dengan target pelanggan, akses, parkir, visibilitas, persaingan, biaya sewa, serta aktivitas lokasi pada jam berbeda.</p>
          <p>Hitung modal pembukaan, peralatan, bahan baku, biaya bulanan, dan dana cadangan. Pisahkan investasi awal dari biaya operasional agar arus kas lebih mudah dikendalikan.</p>
        </>,
      },
      {
        title: "Menu dan Konsistensi Produk",
        content: <>
          <p>Menu yang terlalu banyak dapat meningkatkan persediaan dan menyulitkan kontrol kualitas. Mulai dari menu utama yang sesuai dengan target pasar, lalu kembangkan berdasarkan data penjualan.</p>
          <p>Gunakan takaran, SOP, penyimpanan bahan, kebersihan peralatan, dan kemasan yang konsisten. Rasa yang stabil membantu membangun kepercayaan dan mendorong pelanggan untuk kembali.</p>
        </>,
      },
      {
        title: "Pemasaran dan Pemilihan Mitra",
        content: <>
          <p>Jangan mengabaikan media sosial. Gunakan Instagram, TikTok, dan WhatsApp untuk membagikan menu, promo, aktivitas outlet, testimoni, serta informasi lokasi dengan identitas visual yang konsisten.</p>
          <p>Jika memilih paket usaha atau franchise, jangan terburu-buru. Periksa fasilitas, peralatan, sistem operasional, pelatihan, ketentuan kerja sama, biaya tambahan, dan dukungan brand sebelum bergabung.</p>
          <ul><li>Pastikan produk sesuai dengan target lokasi.</li><li>Bandingkan fasilitas dan total kebutuhan modal.</li><li>Pahami hak serta kewajiban dalam perjanjian.</li></ul>
        </>,
      },
    ]}
  />,
});
