import { MapPin, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const regions = [
  { name: "Jawa Tengah & DIY", outlets: [
    ["Be Nice Coffee", "Jepara", "https://www.google.com/maps/place/?q=place_id:ChIJt5wQXgAfcS4RHorvjPpsZvg"],
    ["Be Nice Coffee Kancilan", "Jepara", "https://www.google.com/maps/place/?q=place_id:ChIJS6u9LwAjcS4R5pZEJDNteHI"],
    ["Be Nice Coffee Singocandi", "Kudus", "https://www.google.com/maps/place/?q=place_id:ChIJs1zrCwDbcC4R8MhAWT3QYBE"],
    ["Be Nice Coffee Dukuhseti", "Pati", "https://www.google.com/maps/place/?q=place_id:ChIJY2W3BQAzcS4R80Vj1kcIc1A"],
    ["Be Nice Coffee Blancir", "Semarang", "https://www.google.com/maps/place/?q=place_id:ChIJ1T5gdgCNcC4RRk8adkWLTxc"],
    ["Be Nice Coffee Sticky Milk", "Tembalang, Semarang", "https://www.google.com/maps/place/?q=place_id:ChIJT1GRYACNcC4Rf7H1wNVH2kI"],
    ["Be Nice Coffee Kedai Kopi Tembalang", "Semarang", "https://www.google.com/maps/place/?q=place_id:ChIJrQ6WMwCPcC4RoL5h2NVPqs4"],
    ["Be Nice Coffee JN24", "Mertoyudan, Magelang", "https://www.google.com/maps/place/?q=place_id:ChIJZ16XT6qPei4RwmsPSHOeTUY"],
    ["Be Nice Coffee Magelang", "Mertoyudan, Magelang", "https://www.google.com/maps/place/?q=place_id:ChIJl3x8EACPei4RFjvs2td8HLE"],
    ["Be Nice Coffee Timoho", "Yogyakarta", "https://www.google.com/maps/place/?q=place_id:ChIJW6hWKABXei4RNbvWxK5GOpw"],
  ]},
  { name: "Jawa Timur & Bali", outlets: [
    ["Be Nice Coffee Ngasem", "Bojonegoro", "https://www.google.com/maps/place/?q=place_id:ChIJucoebQDVeS4RCzXfohCXJ5g"],
    ["Be Nice Coffee Ponorogo", "Ponorogo", "https://www.google.com/maps/place/?q=place_id:ChIJWfG1fwALeS4RY9rrPIUJ_g8"],
    ["Be Nice Coffee Tanjunganom", "Nganjuk", "https://www.google.com/maps/place/?q=place_id:ChIJJ6GfKlJPeC4Ruf0ik5IbkRw"],
    ["Be Nice Coffee", "Blimbing, Malang", "https://www.google.com/maps/place/?q=place_id:ChIJfZzREAAp1i0RpB1AcduPV_c"],
    ["Be Nice Coffee Demak Dampit", "Malang", "https://www.google.com/maps/place/?q=place_id:ChIJO-quaQAZ1i0RCH4yo0fptlk"],
    ["Be Nice Coffee Batubulan", "Gianyar, Bali", "https://www.google.com/maps/place/?q=place_id:ChIJC8a4CAA_0i0RtIuqhN0v-2U"],
  ]},
  { name: "DKI Jakarta & Jawa Barat", outlets: [
    ["Be Nice Coffee.Tema", "Setiabudi, Jakarta Selatan", "https://www.google.com/maps/place/?q=place_id:ChIJ21VuNwD1aS4RsRqFQMj6M7E"],
    ["Be Nice Coffee Jagakarsa", "Jakarta Selatan · Tutup permanen", "https://www.google.com/maps/place/?q=place_id:ChIJ5WnI9IfvaS4RDRqbafYBSbE"],
    ["Coffee Shop (BeNice Coffee)", "Kemang, Bogor", "https://www.google.com/maps/place/?q=place_id:ChIJ5-ZIYwDdaS4RTDl_cT9krhQ"],
    ["Be Nice Coffee Cicurug", "Sukabumi", "https://www.google.com/maps/place/?q=place_id:ChIJzU9YDQVJaC4R4h5v5xABOz0"],
    ["Be Nice Coffee Cinunuk", "Cileunyi, Bandung", "https://www.google.com/maps/place/?q=place_id:ChIJpcBfuEnDaC4R2gxanzFLPVw"],
    ["Be Nice Coffee Sarijadi", "Sukasari, Bandung", "https://www.google.com/maps/place/?q=place_id:ChIJl7Woe3vnaC4RoV1U6VRPp_w"],
  ]},
  { name: "Sumatra, Kalimantan & Sulawesi", outlets: [
    ["Be Nice Coffee", "Payakumbuh, Sumatera Barat", "https://www.google.com/maps/place/?q=place_id:ChIJIePEtSS1Ki4RmNMNxhj11E0"],
    ["Be Nice Coffee Sukamara", "Kalimantan Tengah", "https://www.google.com/maps/place/?q=place_id:ChIJuc_7UgDNCC4Rbyz46fIwxZo"],
    ["Be Nice Coffee KM 3", "Balikpapan", "https://www.google.com/maps/place/?q=place_id:ChIJ8ZD8ZgBH8S0RQKtDtR0zeFQ"],
    ["Be Nice Coffee Siaga", "Balikpapan", "https://www.google.com/maps/place/?q=place_id:ChIJ3aCvwXZH8S0RCPgmFdIlbaw"],
    ["Be Nice Coffee x Be Nice Food", "Samarinda", "https://www.google.com/maps/place/?q=place_id:ChIJoygmMwB_9i0RP0AyORq7wF8"],
    ["Be Nice Coffee", "Tanjung Selor", "https://www.google.com/maps/place/?q=place_id:ChIJx0ZcGQDPEzIRFWwr3U6UXxk"],
    ["Be Nice Coffee Jl Amd Perumnas Raya", "Makassar", "https://www.google.com/maps/place/?q=place_id:ChIJDbNFsTPjvi0RmKKjWg1wehU"],
  ]},
];

export function Outlets({ preview = false }: { preview?: boolean }) {
  const visibleRegions = preview ? regions.slice(0, 1) : regions;
  const total = visibleRegions.reduce((sum, region) => sum + region.outlets.length, 0);

  return <section id="outlet" className="section-outlets py-12 sm:py-20">
    <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 sm:px-10">
      <div>
        <p className="section-kicker">Jaringan Benice</p>
        <SectionHeading className="mt-3" lines={[<>Temukan <em className="italic">Outlet</em> Kami</>]} />
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Benice Coffee hadir di berbagai kota. Pilih outlet terdekat dan buka petanya di Google Maps.</p>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium"><MapPin className="size-4 text-primary" />{total} outlet {preview ? "di Jawa Tengah & DIY" : "terdaftar"}</div>
        {preview ? <a href="/outlet" className="mt-6 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline">Lihat semua outlet <span className="ml-2">→</span></a> : null}
      </div>
      <div className="space-y-12">{visibleRegions.map((region, ri) => <Reveal key={region.name} delay={ri * 0.05}><div className="flex items-center gap-4"><span className="font-mono text-xs text-primary">0{ri + 1}</span><h3 className="flex-1 border-b border-foreground/15 pb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">{region.name}</h3></div><div className="mt-2 grid gap-x-8 sm:grid-cols-2">{region.outlets.map(([name, city, url]) => <a key={name + city} href={url} target="_blank" rel="noreferrer" className="group flex min-h-20 items-start justify-between gap-3 border-b border-foreground/10 py-4"><span className="min-w-0"><span className="block truncate text-sm font-medium group-hover:text-primary">{name}</span><span className="mt-1 block truncate text-xs text-muted-foreground">{city}</span></span><ExternalLink className="mt-1 size-3 shrink-0 text-muted-foreground group-hover:text-primary" /></a>)}</div></Reveal>)}</div>
    </div>
  </section>;
}
