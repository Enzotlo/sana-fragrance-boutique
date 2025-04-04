
import { Instagram } from "lucide-react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  instagramLink: string;
};

// These are the only products available for sale, taken directly from Instagram posts
export const instagramProducts: Product[] = [
  {
    id: 1,
    name: "Caftan Doré",
    category: "Mode",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1562124810-dca3e2f9ef77?q=80&w=1964&auto=format&fit=crop",
    instagramLink: "https://www.instagram.com/p/DFHxqCUo1xb/"
  },
  {
    id: 2,
    name: "Robe Marocaine Brodée",
    category: "Mode",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1595425970377-1370c3a8b8ab?q=80&w=1780&auto=format&fit=crop",
    instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/"
  },
  {
    id: 3,
    name: "Caftan Moderne",
    category: "Mode",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1780&auto=format&fit=crop",
    instagramLink: "https://www.instagram.com/p/C_1BHBEtxWu/"
  },
  {
    id: 4,
    name: "Caftan Blanc",
    category: "Mode",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1562124810-dca3e2f9ef77?q=80&w=1964&auto=format&fit=crop",
    instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/"
  }
];

// Reusable Product Card that links to Instagram
export const InstagramProductCard = ({ product }: { product: Product }) => {
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
            href={product.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-primary hover:text-pink-accent transition-colors group"
          >
            Voir sur Instagram
            <Instagram className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramProductCard;
