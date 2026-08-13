export type MenuItem = {
  src: string;
  name: string;
  desc: string;
  price?: string;
  tag?: string;
  group: string;
};

const cdn = "https://cdn.anggeraji.web.id/lp-benicecoffee/menu";

export const menuItems: MenuItem[] = [
  { src: `${cdn}/black-coffee-hot.webp`, name: "Black Coffee Hot", desc: "Kopi hitam panas dengan rasa bold dan hangat", tag: "Best seller", group: "Kopi" },
  { src: `${cdn}/black-coffee-ice.webp`, name: "Black Coffee Ice", desc: "Kopi hitam dingin dengan karakter kuat", group: "Kopi" },
  { src: `${cdn}/butterscotch--coffee-latte.webp`, name: "Butterscotch Coffee Latte", desc: "Kopi susu dengan butterscotch lembut", tag: "Signature", group: "Kopi" },
  { src: `${cdn}/choco-charamelo.webp`, name: "Choco Caramelo", desc: "Cokelat creamy dengan sentuhan karamel", group: "Non-kopi" },
  { src: `${cdn}/choco-crumb.webp`, name: "Choco Crumb", desc: "Cokelat manis dengan tekstur lebih kaya", group: "Non-kopi" },
  { src: `${cdn}/choco-matcha.webp`, name: "Choco Matcha", desc: "Campuran matcha dan cokelat yang lembut", group: "Non-kopi" },
  { src: `${cdn}/coffee-gula-aren.webp`, name: "Coffee Gula Aren", desc: "Kopi susu gula aren yang creamy dan hangat", group: "Kopi" },
  { src: `${cdn}/dark-choco-moca.webp`, name: "Dark Choco Moca", desc: "Moca cokelat gelap dengan rasa lebih pekat", group: "Kopi" },
  { src: `${cdn}/green-tea.webp`, name: "Green Tea", desc: "Teh hijau segar dengan rasa ringan", group: "Non-kopi" },
  { src: `${cdn}/kopi-gula-aren-hot.webp`, name: "Kopi Gula Aren Hot", desc: "Kopi panas dengan gula aren khas", group: "Kopi" },
  { src: `${cdn}/matcha-caramel.webp`, name: "Matcha Caramel", desc: "Matcha dengan karamel manis yang lembut", group: "Non-kopi" },
  { src: `${cdn}/matcha-expresso.webp`, name: "Matcha Expresso", desc: "Kombinasi matcha dan espresso yang unik", tag: "Baru", group: "Kopi" },
  { src: `${cdn}/original-matcha.webp`, name: "Original Matcha", desc: "Matcha asli, creamy, dan bersahaja", group: "Non-kopi" },
  { src: `${cdn}/salted-caramel-late.webp`, name: "Salted Caramel Latte", desc: "Latte dengan karamel asin dan creamy finish", group: "Kopi" },
  { src: `${cdn}/taro-late.webp`, name: "Taro Latte", desc: "Latte taro dengan rasa khas dan lembut", group: "Non-kopi" },
  { src: `${cdn}/vanilla-late.webp`, name: "Vanilla Latte", desc: "Latte vanilla yang lembut, manis, dan creamy", group: "Kopi" },
];