import { Button } from "@/components/ui/button";
import InstagramProductCard from "@/components/InstagramProductCard";
import { getAllProducts, bijouterieProducts } from "@/data/ProductData";

const FeaturedProducts = () => {
  // Utiliser la fonction getAllProducts() pour obtenir tous les produits
  const allProducts = getAllProducts();
  
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Nos Produits <span className="text-gradient">Emblématiques</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Découvrez notre sélection de caftans, robes marocaines, parfums exclusifs et bijoux disponibles sur notre compte Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.slice(0, 4).map((product) => (
          <InstagramProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">
          Nos <span className="text-gradient">Bijoux</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bijouterieProducts.slice(0, 4).map((product) => (
            <InstagramProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-pink-primary hover:bg-pink-accent text-white border border-pink-primary/30 px-8">
            Voir tous nos produits sur Instagram
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
