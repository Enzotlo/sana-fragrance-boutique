
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaftanShowcase from "@/components/CaftanShowcase";
import { Instagram } from "lucide-react";

const Caftans = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Caftans</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre collection de caftans traditionnels marocains, fabriqués avec des tissus de qualité et ornés de broderies artisanales. Chaque pièce est unique et confectionnée avec soin.
          </p>
        </div>

        <CaftanShowcase />
      </main>
      
      {/* Floating Instagram Button */}
      <a 
        href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-pink-primary hover:bg-pink-accent text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      
      <Footer />
    </div>
  );
};

export default Caftans;
