
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
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 to-deep-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full px-4 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-4 leading-tight">
            Découvrez <span className="text-gradient">l'essence du luxe</span> avec Sana Addict
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Des parfums d'exception sélectionnés avec passion pour sublimer votre élégance au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-gold hover:bg-gold-light text-deep-black font-medium px-8 py-6 text-lg">
              Découvrir nos parfums
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:text-gold-light hover:border-gold-light px-8 py-6 text-lg">
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
