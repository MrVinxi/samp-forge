import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display text-lg font-bold tracking-wider">
            <Zap className="h-5 w-5 text-primary" />
            <span className="neon-text">SAMP</span>
            <span className="text-foreground">FORGE</span>
          </div>
          <p className="font-body text-sm text-muted-foreground text-center">
            © 2026 SAMP-FORGE. All rights reserved. SA-MP Game Server Store.
          </p>
          <div className="flex gap-6">
            {["Discord", "WhatsApp", "Instagram"].map((s) => (
              <a key={s} href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
