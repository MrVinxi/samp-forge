import ProductCard from "./ProductCard";

const weeklyPackages = [
  {
    id: "dev-weekly-basic",
    title: "Dev Mingguan - Basic",
    description: "Hire developer untuk fitur sederhana selama 1 minggu.",
    price: "Rp 60.000",
    priceNumber: 60000,
    features: ["10 Fitur Custom", "Bug Fixing", "Chat Support"],
  },
  {
    id: "dev-weekly-pro",
    title: "Dev Mingguan - Pro",
    description: "Hire developer untuk fitur kompleks selama 1 minggu.",
    price: "Rp 100.000",
    priceNumber: 100000,
    features: ["25 Fitur Custom", "Optimisasi Server", "Priority Support"],
    popular: true,
  },
];

const monthlyPackages = [
  {
    id: "dev-monthly-starter",
    title: "Dev Bulanan - Starter",
    description: "Developer dedicated selama 1 bulan penuh.",
    price: "Rp 160.000",
    priceNumber: 160000,
    features: ["32 Fitur Custom", "Maintenance", "Daily Report"],
  },
  {
    id: "dev-monthly-enterprise",
    title: "Dev Bulanan - Enterprise",
    description: "Full-time developer untuk project besar.",
    price: "Rp 210.000",
    priceNumber: 210000,
    originalPrice: "Rp 250.000",
    features: ["Unlimited Fitur", "24/7 Support", "Server Setup", "Custom Plugin"],
    popular: true,
  },
];

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Paket <span className="neon-text">Developer</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Hire developer profesional SA-MP untuk server kamu
          </p>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        {/* Weekly */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">⚡ Paket Mingguan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {weeklyPackages.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        {/* Monthly */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">🔥 Paket Bulanan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {monthlyPackages.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
