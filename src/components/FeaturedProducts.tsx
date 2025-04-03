
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isPromo?: boolean;
  discount?: number;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Caftan Marocain Traditionnel",
    category: "Mode",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1780&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Huile d'Argan Bio",
    category: "Soins Beauté",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Black Opium",
    category: "Parfums",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1965&auto=format&fit=crop",
    isPromo: true,
    discount: 20
  },
  {
    id: 4,
    name: "Robe de Soirée Orientale",
    category: "Mode",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bcc30e71c?q=80&w=1964&auto=format&fit=crop"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Nos Produits <span className="text-gradient">Emblématiques</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Découvrez notre sélection de mode, parfums et soins beauté, choisis avec soin pour leur caractère unique et leur qualité exceptionnelle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group relative overflow-hidden luxury-card rounded-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl animate-scale-in">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {(product.isNew || product.isPromo) && (
                <div className="absolute top-3 right-3">
                  {product.isNew && (
                    <Badge className="bg-pink-primary text-white font-semibold">Nouveau</Badge>
                  )}
                  {product.isPromo && (
                    <Badge className="bg-pink-accent text-white font-semibold">-{product.discount}%</Badge>
                  )}
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-sm text-pink-primary font-medium">{product.category}</span>
              <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
              
              <div className="mt-auto pt-4 flex justify-between items-center">
                <div>
                  {product.isPromo ? (
                    <div>
                      <span className="line-through text-muted-foreground mr-2">
                        {product.price.toFixed(2)} €
                      </span>
                      <span className="font-bold text-pink-primary">
                        {(product.price * (1 - (product.discount! / 100))).toFixed(2)} €
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold">{product.price.toFixed(2)} €</span>
                  )}
                </div>
                <Button variant="ghost" className="text-pink-primary hover:text-white hover:bg-pink-primary/90">
                  Découvrir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button className="bg-pink-primary hover:bg-pink-accent text-white border border-pink-primary/30 px-8">
          Voir tous nos produits
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
