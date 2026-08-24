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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const title = "Minta Proposal Bisnis Benice Coffee";
const description =
  "Dapatkan proposal bisnis yang disesuaikan untuk Anda. Tim kami akan menyiapkan detail lengkap paket usaha, investasi, dan ROI proyeksi.";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    
    // Create proposal request message
    const proposalMessage = `📋 PERMINTAAN PROPOSAL BISNIS BENICE COFFEE

Nama: ${formData.name}
Nomor: ${formData.phone}
Email: ${formData.email}

Tipe Bisnis yang Diminati: ${formData.businessType || "-"}
Lokasi Rencana: ${formData.location}
Budget Awal: ${formData.budget}

Catatan Tambahan:
${formData.message}

---
Saya ingin menerima proposal bisnis yang disesuaikan dengan kebutuhan saya.`;

    // Create WhatsApp message
    const whatsappUrl = `https://wa.me/62${WHATSAPP.replace(/\D/g, "").replace(/^0/, "")}?text=${encodeURIComponent(proposalMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form and show success message
    setSubmitted(true);
    setFormData({ 
      name: "", 
      phone: "", 
      email: "", 
      businessType: "",
      location: "",
      budget: "",
      message: "" 
    });
    
    // Hide success message after 3 seconds
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

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Proposal Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Formulir Permintaan Proposal</CardTitle>
                <CardDescription>
                  Isi data di bawah untuk mendapatkan proposal yang disesuaikan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Info */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Data Pribadi</h3>
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
                          className="border-border/50"
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
                          className="border-border/50"
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
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="space-y-2 border-t border-border/30 pt-4">
                    <h3 className="font-medium text-sm">Informasi Bisnis</h3>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Tipe Paket yang Diminati</Label>
                      <Select value={formData.businessType} onValueChange={handleSelectChange}>
                        <SelectTrigger className="border-border/50">
                          <SelectValue placeholder="Pilih tipe paket..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Starter Cup</SelectItem>
                          <SelectItem value="daily">Daily Brew</SelectItem>
                          <SelectItem value="signature">Signature</SelectItem>
                          <SelectItem value="grand">Grand Kiosk</SelectItem>
                          <SelectItem value="master">Master Area</SelectItem>
                          <SelectItem value="custom">Custom / Belum Pasti</SelectItem>
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
                        className="border-border/50"
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
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-2 border-t border-border/30 pt-4">
                    <h3 className="font-medium text-sm">Informasi Tambahan</h3>
                    <Label htmlFor="message">Catatan atau Pertanyaan Khusus</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan kebutuhan spesifik Anda, pertanyaan, atau preferensi lainnya..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-border/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Kirim Permintaan Proposal
                  </Button>

                  {submitted && (
                    <div className="rounded-md bg-green-50 p-3 text-sm text-green-800">
                      ✓ Permintaan proposal siap! WhatsApp akan terbuka untuk melanjutkan.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Apa Isi Proposal?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-lg">💰</span>
                  <div>
                    <p className="font-medium text-sm">Rincian Investasi</p>
                    <p className="text-xs text-muted-foreground">
                      Total modal, breakdown biaya
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg">📈</span>
                  <div>
                    <p className="font-medium text-sm">Proyeksi ROI</p>
                    <p className="text-xs text-muted-foreground">
                      Estimasi return on investment
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg">📋</span>
                  <div>
                    <p className="font-medium text-sm">Paket Lengkap</p>
                    <p className="text-xs text-muted-foreground">
                      Apa saja yang termasuk dalam paket
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="font-medium text-sm">Training & Support</p>
                    <p className="text-xs text-muted-foreground">
                      Program pelatihan dan support timeline
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg">Timeline Proses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="font-bold text-amber-700">1.</span>
                  <p className="text-muted-foreground">
                    Anda kirim permintaan melalui form ini
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-amber-700">2.</span>
                  <p className="text-muted-foreground">
                    Tim kami kontak Anda dalam 1-2 jam
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-amber-700">3.</span>
                  <p className="text-muted-foreground">
                    Kami kumpulkan informasi detail Anda
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-amber-700">4.</span>
                  <p className="text-muted-foreground">
                    Proposal siap dalam 1-2 hari kerja
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">Hubungi Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Atau langsung chat dengan admin kami melalui WhatsApp untuk diskusi real-time.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 w-full justify-center"
                >
                  <span>💬</span> Chat Admin WhatsApp
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
