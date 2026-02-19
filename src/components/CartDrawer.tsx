import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_NUMBER = "6285816912868";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  const formatPrice = (n: number) =>
    "Rp " + n.toLocaleString("id-ID");

  const handleCheckout = () => {
    if (items.length === 0) return;

    const orderLines = items.map(
      (item, i) => `${i + 1}. ${item.title} x${item.quantity} = ${formatPrice(item.priceNumber * item.quantity)}`
    );

    const message = [
      "🔥 *ORDER BARU - SAMP FORGE* 🔥",
      "",
      "📦 *Detail Pesanan:*",
      ...orderLines,
      "",
      `💰 *Total: ${formatPrice(totalPrice)}*`,
      "",
      "Saya ingin order produk di atas. Mohon info selanjutnya 🙏",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-card border-l border-border transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-lg font-bold text-foreground">
            Keranjang <span className="neon-text">({totalItems})</span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground text-lg">Keranjang kosong</p>
              <p className="font-body text-muted-foreground text-sm mt-1">Pilih produk dari store</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="glass-card rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                  <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive p-1">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-body text-foreground font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-display text-sm font-bold neon-text">
                    {formatPrice(item.priceNumber * item.quantity)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-lg text-foreground">Total</span>
              <span className="font-display text-xl font-bold neon-text">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full neon-glow-btn font-display text-sm font-bold text-primary-foreground border-0 h-12"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Order via WhatsApp
            </Button>
            <button
              onClick={clearCart}
              className="w-full font-body text-sm text-muted-foreground hover:text-destructive transition-colors py-2"
            >
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
