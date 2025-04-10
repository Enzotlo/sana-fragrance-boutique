import { Button } from "@/components/ui/button";
import InstagramProductCard from "@/components/InstagramProductCard";
import { 
  getAllProducts, 
  parfumProducts, 
  bijouterieProducts,
  caftansProducts
} from "@/data/ProductData";

const AllProductsShowcase = () => {
  // Obtenir tous les produits
  const allProducts = getAllProducts();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Tous nos <span className="text-pink-primary">Produits</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez notre gamme complète de parfums, bijoux et vêtements traditionnels.
          </p>
        </div>

        {/* Parfums */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-8 text-center">
            Nos <span className="text-pink-primary">Parfums</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {parfumProducts.map((product) => (
              <InstagramProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Bijoux */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-8 text-center">
            Nos <span className="text-pink-primary">Bijoux</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bijouterieProducts.map((product) => (
              <InstagramProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Caftans */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-8 text-center">
            Nos <span className="text-pink-primary">Caftans</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caftansProducts.map((product) => (
              <InstagramProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-pink-primary hover:bg-pink-accent text-white border border-pink-primary/30 px-8">
              Contacter pour commander
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllProductsShowcase; 