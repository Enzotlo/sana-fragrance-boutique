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
          <a 
            href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-primary hover:text-pink-accent transition-colors group"
          >
            Contacter pour commander
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramProductCard; 