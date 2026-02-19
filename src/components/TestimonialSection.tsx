import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Reza nur",
    role: "Buyer",
    text: "Gamemode dari SAMP-FORGE kualitasnya mantap, server langsung rame! Support-nya juga fast response banget.",
    rating: 5,
  },
  {
    name: "nando samp",
    role: "Buyer",
    text: "Paket developer bulanannya worth it banget. Fitur custom sesuai request dan hasilnya professional.",
    rating: 5,
  },
  {
    name: "Rifky",
    role: "Buyer",
    text: "Setup servernya cepat, anti-cheatnya ampuh. Recommended banget buat yang mau bikin server SA-MP!",
    rating: 5,
  },
  {
    name: "rehan",
    role: "Buyer",
    text: "mantap pengerjaan cepat dan amanah",
    product: "jasa developer",
    rating: 5,
  },
  {
    name: "rey",
    role: "Buyer",
    text: "mantap amanah bos ku lanjutkan",
    product: "jasa developer",
    rating: 5,
  },
  {
    name: "Bima",
    role: "Buyer",
    text: "dijamin amanah dan fast respon",
    product: "jasa developer",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Testimoni</span> Client
          </h2>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-secondary-foreground mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
