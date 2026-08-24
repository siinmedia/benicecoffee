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

const title = "Chat dengan Konsultan Benice Coffee";
const description =
  "Tanya langsung ke konsultan kami tentang peluang bisnis Benice Coffee, paket usaha, dan support yang Anda butuhkan.";

export const Route = createFileRoute("/consultant")({
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
  component: ConsultantPage,
});

function ConsultantPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Halo, saya ${formData.name}\n\nNomor: ${formData.phone}\nEmail: ${formData.email}\n\nPesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/62${WHATSAPP.replace(/\D/g, "").replace(/^0/, "")}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form and show success message
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      
      <section className="py-12 sm:py-20">
        <Reveal>
          <h1 className="display text-center text-[clamp(2.25rem,6vw,4rem)]">
            Chat dengan <em className="italic">Konsultan</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[12px] leading-relaxed text-muted-foreground">
            Hubungi konsultan kami untuk mendapatkan informasi lengkap tentang peluang bisnis Benice Coffee, 
            paket usaha yang sesuai dengan kebutuhan Anda, dan strategi sukses untuk memulai.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Hubungi Kami</CardTitle>
              <CardDescription>
                Isi form di bawah dan konsultan kami akan merespon Anda segera
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan pertanyaan atau kebutuhan Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Kirim ke WhatsApp
                </Button>

                {submitted && (
                  <div className="rounded-md bg-green-50 p-3 text-sm text-green-800">
                    ✓ Pesan disiapkan! Aplikasi WhatsApp akan terbuka untuk mengirim.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Apa yang Kami Bantu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-xl">💼</span>
                  <div>
                    <p className="font-medium">Konsultasi Bisnis</p>
                    <p className="text-sm text-muted-foreground">
                      Cari tahu paket mana yang cocok untuk Anda
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl">📊</span>
                  <div>
                    <p className="font-medium">Analisis Lokasi</p>
                    <p className="text-sm text-muted-foreground">
                      Dapatkan insight tentang lokasi terbaik untuk booth Anda
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <p className="font-medium">Program Pelatihan</p>
                    <p className="text-sm text-muted-foreground">
                      Pelajari operasional dan manajemen bisnis kopi
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl">🤝</span>
                  <div>
                    <p className="font-medium">Support Berkelanjutan</p>
                    <p className="text-sm text-muted-foreground">
                      Dukungan penuh dari awal hingga bisnis berkembang
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">Respons Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Konsultan kami siap membantu melalui WhatsApp. Biasanya kami merespon dalam 1-2 jam pada jam kerja.
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    <span>💬</span> Chat WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
