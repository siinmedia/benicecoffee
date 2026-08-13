export const WHATSAPP =
  "https://utm.bukausaha.web.id/r.php?a=cv-maha-niaga-artha&s=website-utama";

export function waFor(paket: string) {
  return `https://utm.bukausaha.web.id/r.php?a=cv-maha-niaga-artha&s=website-utama&text=${encodeURIComponent(
    `Halo Benice Coffee, saya tertarik dengan paket ${paket}`,
  )}`;
}