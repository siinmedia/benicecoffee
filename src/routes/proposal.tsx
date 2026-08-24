import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Arrow, Pill, Reveal } from "@/components/site/ui";
import { WHATSAPP } from "@/lib/links";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  GraduationCap,
  MessageCircle,
  Package,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const title = "Minta Proposal Bisnis Benice Coffee";
const description =
  "Dapatkan proposal bisnis yang disesuaikan untuk Anda. Tim kami akan menyiapkan detail lengkap paket usaha, investasi, dan ROI proyeksi.";
const proposalWhatsappNumber = "6282124952606";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProposalPage,
});

function ProposalPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    location: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      businessType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const proposalMessage = `Halo Admin Benice Coffee,

  Saya ingin mengajukan permintaan proposal bisnis.

  Data saya:
  Nama: ${formData.name}
  Nomor WhatsApp: ${formData.phone}
  Email: ${formData.email || "Tidak diisi"}
  Paket yang diminati: ${formData.businessType || "Belum menentukan"}
  Lokasi usaha: ${formData.location}
  Budget awal: ${formData.budget}
  Catatan: ${formData.message || "Tidak ada catatan tambahan"}

  Mohon dibantu dengan informasi proposal dan simulasi usaha yang sesuai. Terima kasih.`;
    const whatsappUrl = `https://wa.me/${proposalWhatsappNumber}?text=${encodeURIComponent(proposalMessage)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      businessType: "",
      location: "",
      budget: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />

      <section className="py-12 sm:py-20">
        <Reveal>
          <h1 className="display text-center text-[clamp(2.25rem,6vw,4rem)]">
            Minta <em className="italic">Proposal</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[12px] leading-relaxed text-muted-foreground">
            Dapatkan proposal bisnis yang sudah disesuaikan dengan kebutuhan dan budget Anda.
            Proposal akan berisi detail investasi, ROI proyeksi, dan timeline lengkap.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Proposal Form */}
          <div className="lg:col-span-2">
            <Card className="hairline rounded-[18px] bg-card">
              <CardHeader className="p-5 sm:p-6">
                <CardTitle className="display text-2xl font-normal">
                  Formulir Permintaan Proposal
                </CardTitle>
                <CardDescription className="text-[11px] leading-relaxed">
                  Isi data di bawah untuk mendapatkan proposal yang disesuaikan
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Info */}
                  <div className="space-y-3">
                    <h3 className="text-[12px] font-medium">Data Pribadi</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Nama Anda"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="rounded-[12px] border-border/50 bg-surface"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor WhatsApp *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="08xx xxxx xxxx"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="rounded-[12px] border-border/50 bg-surface"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-[12px] border-border/50 bg-surface"
                      />
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="space-y-3 border-t border-border/30 pt-4">
                    <h3 className="text-[12px] font-medium">Informasi Bisnis</h3>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Tipe Paket yang Diminati</Label>
                      <Select value={formData.businessType} onValueChange={handleSelectChange}>
                        <SelectTrigger className="rounded-[12px] border-border/50 bg-surface">
                          <SelectValue placeholder="Pilih tipe paket..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Paket Hemat">Paket Hemat</SelectItem>
                          <SelectItem value="Paket Portable">Paket Portable</SelectItem>
                          <SelectItem value="Paket Platinum">Paket Platinum</SelectItem>
                          <SelectItem value="Neon Box Premium">Neon Box Premium</SelectItem>
                          <SelectItem value="Neon Box Luxury">Neon Box Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Lokasi Rencana Usaha *</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="Kota, Daerah, atau Area Spesifik"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="rounded-[12px] border-border/50 bg-surface"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Awal yang Anda Miliki *</Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="Contoh: 10 juta, 50 juta, dll"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="rounded-[12px] border-border/50 bg-surface"
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-3 border-t border-border/30 pt-4">
                    <h3 className="text-[12px] font-medium">Informasi Tambahan</h3>
                    <Label htmlFor="message">Catatan atau Pertanyaan Khusus</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan kebutuhan spesifik Anda, pertanyaan, atau preferensi lainnya..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none rounded-[12px] border-border/50 bg-surface"
                    />
                  </div>

                  <Button type="submit" className="h-10 w-full rounded-full text-[11px]" size="lg">
                    Kirim Permintaan Proposal
                  </Button>

                  {submitted && (
                    <div className="flex items-center gap-2 rounded-[12px] bg-accent/50 p-3 text-[11px] text-accent-foreground">
                      <Check className="size-3.5 shrink-0" />
                      Permintaan proposal siap! WhatsApp akan terbuka untuk melanjutkan.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-5">
            <Card className="hairline rounded-[18px] bg-card">
              <CardHeader className="p-5 pb-3">
                <CardTitle className="display text-2xl font-normal">Apa Isi Proposal?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 p-5 pt-0">
                <div className="flex gap-3">
                  <CircleDollarSign className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-[12px] font-medium">Rincian Investasi</p>
                    <p className="text-[10px] leading-relaxed text-muted-foreground">
                      Total modal, breakdown biaya
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ChartNoAxesCombined className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-[12px] font-medium">Proyeksi ROI</p>
                    <p className="text-[10px] leading-relaxed text-muted-foreground">
                      Estimasi return on investment
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Package className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-[12px] font-medium">Paket Lengkap</p>
                    <p className="text-[10px] leading-relaxed text-muted-foreground">
                      Apa saja yang termasuk dalam paket
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-[12px] font-medium">Training & Support</p>
                    <p className="text-[10px] leading-relaxed text-muted-foreground">
                      Program pelatihan dan support timeline
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hairline rounded-[18px] bg-surface">
              <CardHeader className="p-5 pb-3">
                <CardTitle className="display text-2xl font-normal">Timeline Proses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-5 pt-0 text-[11px]">
                <div className="flex gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-card text-[9px]">
                    1
                  </span>
                  <p className="text-muted-foreground">Anda kirim permintaan melalui form ini</p>
                </div>
                <div className="flex gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-card text-[9px]">
                    2
                  </span>
                  <p className="text-muted-foreground">Tim kami kontak Anda dalam 1-2 jam</p>
                </div>
                <div className="flex gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-card text-[9px]">
                    3
                  </span>
                  <p className="text-muted-foreground">Kami kumpulkan informasi detail Anda</p>
                </div>
                <div className="flex gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-card text-[9px]">
                    4
                  </span>
                  <p className="text-muted-foreground">Proposal siap dalam 1-2 hari kerja</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hairline rounded-[18px] border-primary/30 bg-primary/5">
              <CardHeader className="p-5 pb-3">
                <CardTitle className="display text-2xl font-normal">Hubungi Admin</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground">
                  Atau langsung chat dengan admin kami melalui WhatsApp untuk diskusi real-time.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 text-[11px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="size-3.5" /> Chat Admin WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
