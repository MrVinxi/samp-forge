import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StoreSection from "@/components/StoreSection";
import DeveloperSection from "@/components/DeveloperSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        <CartDrawer />
        <HeroSection />
        <StoreSection />
        <DeveloperSection />
        <ServicesSection />
        <TestimonialSection />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
