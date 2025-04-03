
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

const newProducts: Product[] = [
  {
    id: 1,
    name: "Caftan Moderne Brodé",
    category: "Mode",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1563170423-717654358332?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Crème Visage à l'Argan",
    category: "Soins Beauté",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1595425970377-1370c3a8b8ab?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Robe Longue Brodée",
    category: "Mode",
    price: 179.50,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944d21b?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Huile d'Argan Pure Bio",
    category: "Soins Beauté",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1611082553366-b7f7f0870beb?q=80&w=1965&auto=format&fit=crop"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 bg-pink-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <Badge className="bg-pink-primary text-white mb-4">NOUVEAU</Badge>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              Derniers <span className="text-gradient">Arrivages</span>
            </h2>
          </div>
          <Link to="/nouveautes">
            <Button variant="link" className="text-pink-primary flex items-center group mt-4 md:mt-0">
              Voir toutes les nouveautés
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <div className="p-5">
                <span className="text-sm text-pink-primary font-medium">{product.category}</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
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
