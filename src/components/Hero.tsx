
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1530630458144-014709e10016?q=80&w=2076&auto=format&fit=crop')", 
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-primary/70 to-pink-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full px-4 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Mode et Beauté <span className="text-gradient">à la marocaine</span> avec Sana Addict
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
            Découvrez notre collection unique de parfums, soins beauté, robes et caftans marocains pour sublimer votre élégance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-pink-primary hover:bg-pink-accent text-white font-medium px-8 py-6 text-lg">
              Découvrir nos produits
            </Button>
            <Button variant="outline" className="border-white text-white hover:text-pink-primary hover:bg-white px-8 py-6 text-lg">
              Nos promotions
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
