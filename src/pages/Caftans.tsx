import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaftanShowcase from "@/components/CaftanShowcase";

const Caftans = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
      <Footer />
    </div>
  );
};

export default Caftans;
