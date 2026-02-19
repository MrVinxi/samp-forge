import { Code, Server, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Scripting",
    description: "Script PAWN custom sesuai kebutuhan server kamu.",
  },
  {
    icon: Server,
    title: "Setup Server",
    description: "Setup VPS, konfigurasi server SA-MP dari nol sampai online.",
  },
  {
    icon: Wrench,
    title: "Bug Fixing",
    description: "Perbaiki bug dan error di gamemode atau filterscript kamu.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Pasang sistem anti-cheat canggih untuk keamanan server.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Jasa <span className="neon-text">Lainnya</span>
          </h2>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-xl p-6 text-center group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
