
import { Button } from "@/components/ui/button";
import InstagramProductCard from "@/components/InstagramProductCard";
import { 
  featuredParfumProducts,
  featuredBijouterieProducts, 
  featuredCaftansProducts 
} from "@/data/ProductData";

const FeaturedProducts = () => {
  // Filter out duplicate products by ensuring we only have one product of each color
  const uniqueBijouterieProducts = featuredBijouterieProducts.filter((product, index, self) => 
    index === self.findIndex((p) => p.name.includes(product.name.split(" ")[1]))
  );
  
  // Combine the featured products from different categories, making sure to avoid duplication
  const featuredProducts = [
    ...featuredParfumProducts,
    ...featuredCaftansProducts.slice(0, 1),
    ...uniqueBijouterieProducts.slice(0, 2)
  ];
  
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
        {featuredProducts.slice(0, 4).map((product) => (
          <InstagramProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">
          Nos <span className="text-gradient">Bijoux</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Only show unique bijouterie products, avoiding duplicates by color */}
          {uniqueBijouterieProducts.map((product) => (
            <InstagramProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12 flex justify-center gap-4">
        <a 
          href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-pink-primary hover:bg-pink-accent text-white border border-pink-primary/30 px-8">
            TikTok Shop
          </Button>
        </a>
        <a 
          href="https://www.vinted.fr/member/15843015-abdelkadir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="outline" className="border-pink-primary text-pink-primary hover:bg-pink-primary/10 px-8">
            Vinted
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
