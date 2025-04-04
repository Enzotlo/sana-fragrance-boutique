
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Product } from "./InstagramProducts";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
          Instagram
        </Badge>
      </div>
      <CardContent className="p-5">
        <span className="text-sm text-pink-primary font-medium">{product.category}</span>
        <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
          <a 
            href={product.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 px-3 py-2 rounded transition-colors"
          >
            Voir sur Instagram
            <Instagram className="ml-2 h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
