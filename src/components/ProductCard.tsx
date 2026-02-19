import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  priceNumber: number;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
}

const ProductCard = ({ id, title, description, price, priceNumber, originalPrice, features, popular }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className={`glass-card rounded-xl p-6 flex flex-col ${popular ? "ring-2 ring-primary animate-glow-pulse" : ""}`}>
      {popular && (
        <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary font-display text-xs font-bold mb-4">
          <Star className="h-3 w-3" />
          POPULER
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="font-body text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="font-body text-sm text-secondary-foreground flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mb-4">
        {originalPrice && (
          <span className="font-body text-sm text-muted-foreground line-through mr-2">{originalPrice}</span>
        )}
        <span className="font-display text-2xl font-bold neon-text">{price}</span>
      </div>
      <Button
        onClick={() => addItem({ id, title, price, priceNumber })}
        className="w-full neon-glow-btn font-display text-sm font-bold text-primary-foreground border-0 h-12"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Tambah ke Keranjang
      </Button>
    </div>
  );
};

export default ProductCard;
