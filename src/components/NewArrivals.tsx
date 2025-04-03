
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

const newProducts: Product[] = [
  {
    id: 1,
    name: "Libre",
    brand: "Yves Saint Laurent",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1563170423-717654358332?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1595425970377-1370c3a8b8ab?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Eros",
    brand: "Versace",
    price: 89.50,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944d21b?q=80&w=1887&auto=format&fit=crop"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <Badge className="bg-gold text-deep-black mb-4">NOUVEAU</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-pure-white">
              Derniers <span className="text-gradient">Arrivages</span>
            </h2>
          </div>
          <Button variant="link" className="text-gold flex items-center group mt-4 md:mt-0">
            Voir tous les nouveaux produits
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-gold/30 animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-gold text-deep-black font-semibold">
                  Nouveau
                </Badge>
              </div>
              <div className="p-5">
                <span className="text-sm text-gold">{product.brand}</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-pure-white">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-pure-white">{product.price.toFixed(2)} €</span>
                  <Button variant="ghost" className="text-gold hover:text-gold-light hover:bg-gold/10">
                    Découvrir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
