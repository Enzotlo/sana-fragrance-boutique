
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { allProducts, bijouterieProducts, InstagramProductCard } from "./InstagramProducts";

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
          {allProducts.slice(0, 4).map((product) => (
            <InstagramProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="font-playfair text-2xl font-bold mb-8">
            Bijoux <span className="text-gradient">Nouveautés</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bijouterieProducts.slice(0, 4).map((product) => (
              <InstagramProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
