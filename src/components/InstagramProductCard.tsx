
import { Instagram } from "lucide-react";
import { Product } from "@/data/ProductData";

// Carte de produit réutilisable
const InstagramProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-pink-primary text-white font-semibold p-1 rounded-full">
          <Instagram className="h-4 w-4" />
        </div>
      </div>
      <div className="p-5">
        <span className="text-sm text-pink-primary font-medium">{product.category}</span>
        <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
          <div className="flex space-x-2">
            <a 
              href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-primary hover:text-pink-accent transition-colors group"
            >
              TikTok Shop
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="https://www.vinted.fr/member/15843015-abdelkadir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-primary hover:text-pink-accent transition-colors group"
            >
              Vinted
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramProductCard; 
