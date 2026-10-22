// Kontak konsultan resmi — semua CTA WhatsApp lari ke sini.
export const CONTACTS: { name: string; number: string }[] = [
  { name: "Livya Ayu", number: "6282124952606" },
  { name: "Berliiana", number: "6285117276822" },
  { name: "Kristianti", number: "6281234086100" },
];

function requireContact(i: number) {
  const c = CONTACTS[i];
  if (!c) throw new Error(`CONTACTS[${i}] missing`);
  return c;
}

export const DEFAULT_CONTACT = requireContact(0);

export function getContact(i: number) {
  return CONTACTS[i] ?? DEFAULT_CONTACT;
}

export function contactHref(contact: { name: string; number: string }, text?: string) {
  const msg =
    text ??
    `Halo Benice Coffee, saya tertarik untuk memulai usaha Benice Coffee. Saya mendapatkan informasi ini dari website resmi https://benicecoffee.id. Bisa dibantu?`;
  return `https://wa.me/${contact.number}?text=${encodeURIComponent(msg)}`;
}

// Kompat: CTA tunggal fallback = kontak pertama.
export const WHATSAPP = contactHref(DEFAULT_CONTACT);

export function waFor(
  paket: string,
  contact: { name: string; number: string } = DEFAULT_CONTACT,
) {
  return contactHref(
    contact,
    `Halo Benice Coffee, saya tertarik dengan paket ${paket}. Saya mendapatkan informasi ini dari website resmi https://benicecoffee.id. Bisa dibantu?`,
  );
}

const ROTATE_KEY = "bc-cs-idx";

// Rolling round-robin: tiap panggil gantian ke nomor berikut.
// Disimpan di localStorage biar adil antar kunjungan; SSR-safe.
export function getRotatingContact() {
  try {
    const raw =
      typeof localStorage !== "undefined" ? localStorage.getItem(ROTATE_KEY) : null;
    let i =
      raw === null
        ? Math.floor(Math.random() * CONTACTS.length)
        : (parseInt(raw, 10) + 1) % CONTACTS.length;
    if (!Number.isFinite(i) || i < 0 || i >= CONTACTS.length) i = 0;
    try {
      localStorage.setItem(ROTATE_KEY, String(i));
    } catch {
      /* abaikan */
    }
    return CONTACTS[i] ?? DEFAULT_CONTACT;
  } catch {
    return DEFAULT_CONTACT;
  }
}

export function openRotatingWa(paket?: string) {
  const c = getRotatingContact();
  const text = paket
    ? `Halo Benice Coffee, saya tertarik dengan paket ${paket}. Saya mendapatkan informasi ini dari website resmi https://benicecoffee.id. Bisa dibantu?`
    : undefined;
  window.open(contactHref(c, text), "_blank", "noopener");
}
