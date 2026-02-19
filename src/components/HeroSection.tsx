import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-body text-sm font-medium text-primary">SA-MP Server Store #1</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <span className="neon-text">SAMP</span>
          <span className="text-foreground"> - FORGE</span>
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Gamemode, Script, Plugin & Jasa Developer SA-MP terbaik. Bangun server impianmu dengan forge terkuat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Button
            className="neon-glow-btn font-display text-sm font-bold text-primary-foreground border-0 h-12 px-8"
            onClick={() => document.querySelector("#store")?.scrollIntoView({ behavior: "smooth" })}
          >
            Lihat Produk
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="font-display text-sm font-bold h-12 px-8 border-primary/40 text-primary hover:bg-primary/10"
            onClick={() => document.querySelector("#developer")?.scrollIntoView({ behavior: "smooth" })}
          >
            Paket Developer
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          {[
            { value: "500+", label: "Server Aktif" },
            { value: "1.2K", label: "Client Puas" },
            { value: "99%", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold neon-text">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
