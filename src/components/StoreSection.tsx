import ProductCard from "./ProductCard";

const products = [
  {
    id: "starter-gm",
    title: "Starter Gamemode ( inferno )",
    description: "Gamemode dasar roleplay siap pakai untuk server pemula.",
    price: "Rp 32.000",
    priceNumber: 32000,
    originalPrice: "Rp 50.000",
    features: ["Roleplay System", "Basic Admin CMD", "Login Register", "Free Update 1 Bulan"],
  },
  {
    id: "pro-gm",
    title: "Pro Gamemode ( LRP )",
    description: "Gamemode lengkap dengan fitur advanced untuk server profesional.",
    price: "Rp 50.000",
    priceNumber: 50000,
    originalPrice: "Rp 120.000",
    features: ["Full RP System", "Housing & Bisnis", "Job System", "Anti-Cheat Built-in", "Support 3 Bulan"],
    popular: true,
  },
  {
    id: "ultimate-bundle",
    title: "Ultimate Bundle ( LRP full modifed )",
    description: "Paket lengkap gamemode + plugin + web panel administrasi.",
    price: "Rp 150.000",
    priceNumber: 150000,
    originalPrice: "Rp 800.000",
    features: ["Pro Gamemode", "Web Panel Admin", "Custom Plugin Pack", "Setup Server Gratis", "Lifetime Support"],
  },
];

const StoreSection = () => {
  return (
    <section id="store" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Store</span> Produk
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Pilih paket terbaik untuk server SA-MP kamu
          </p>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
