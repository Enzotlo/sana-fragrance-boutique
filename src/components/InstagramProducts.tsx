import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  instagramLink: string;
  description?: string;
};

// Parfums
const hayaParfum: Product = {
  id: 1,
  name: "Eau de parfum haya 100ml",
  category: "Parfum",
  price: 25.00,
  image: "/lovable-uploads/b1451f21-d435-4b2f-a5b0-020abd878003.png",
  instagramLink: "#",
  description: "Notes de tête: héliotrope, orchidée, tangerine\nNotes de cœur: fruits tropicaux\nNotes de fond: vanille, musc, bois de santal\nType de parfum: floral, gourmand\n\nOffrez des sensations gourmandes à vos sens. L'eau de parfum pour femmes Le Chameau Arabia Haya regorge de délicieuses notes auxquelles il est difficile de résister, surtout si vous adorez les friandises sucrées.\n\nParfum oriental - Parfum sucré - Parfum floral"
};

const pomegranateParfum: Product = {
  id: 2,
  name: "Eau de parfum Pomegrante 60ml",
  category: "Parfum",
  price: 20.00,
  image: "/lovable-uploads/b1451f21-d435-4b2f-a5b0-020abd878003.png", // À remplacer avec l'image correcte
  instagramLink: "#",
  description: "Notes de tête: Bergamote, Caramel, Framboise\nNotes de cœur: Freesia, Jasmin, Rose\nNotes de fond: Musc, Ambre\n\nUn parfum élégant et fruité qui vous enveloppera d'une aura sensuelle et raffinée."
};

// Colliers
const collierBleu: Product = {
  id: 3,
  name: "Collier Perles Bleues",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png",
  instagramLink: "#",
  description: "Magnifique collier en perles bleues avec ornement doré central."
};

const collierRouge: Product = {
  id: 4,
  name: "Collier Perles Rouges",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png",
  instagramLink: "#",
  description: "Élégant collier en perles rouges avec ornement doré et pierre rouge centrale."
};

const collierChampagne: Product = {
  id: 5,
  name: "Collier Perles Champagne",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png",
  instagramLink: "#",
  description: "Collier raffiné en perles champagne avec ornement doré élégant."
};

const collierNoir: Product = {
  id: 6,
  name: "Collier Perles Noires",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png",
  instagramLink: "#",
  description: "Collier chic en perles noires avec ornement doré et cristal central."
};

const collierVert: Product = {
  id: 7,
  name: "Collier Perles Vertes",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png",
  instagramLink: "#",
  description: "Collier tendance en perles vertes avec ornement doré et pierre verte."
};

// Boucles d'oreilles
const bouclesOreilles: Product = {
  id: 8,
  name: "Boucles d'oreille",
  category: "Bijouterie",
  price: 10.00,
  image: "/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png", // À remplacer avec l'image correcte
  instagramLink: "#",
  description: "Élégantes boucles d'oreille artisanales, légères et raffinées. Un accessoire parfait pour compléter votre tenue."
};

// Caftans
const caftanPerle: Product = {
  id: 9,
  name: "Caftan Perle avec ceinture",
  category: "Mode",
  price: 70.00,
  image: "https://images.unsplash.com/photo-1562124810-dca3e2f9ef77?q=80&w=1964&auto=format&fit=crop", // À remplacer avec l'image correcte
  instagramLink: "#",
  description: "Caftan élégant avec perles et ceinture assorti. Nouvelle collection, disponible en tailles 38 et 40. Une pièce raffinée pour sublimer votre silhouette."
};

// Liste de tous les produits
const _allProducts = [
  hayaParfum, 
  pomegranateParfum, 
  collierBleu, 
  collierRouge, 
  collierChampagne, 
  collierNoir, 
  collierVert, 
  bouclesOreilles, 
  caftanPerle
];

// Groupement des produits par catégorie
export const parfumProducts: Product[] = [hayaParfum, pomegranateParfum];
export const bijouterieProducts: Product[] = [collierBleu, collierRouge, collierChampagne, collierNoir, collierVert, bouclesOreilles];
export const caftansProducts: Product[] = [caftanPerle];
export const robesMarocainesProducts: Product[] = [caftanPerle];
export const soinsBeauteProducts: Product[] = [hayaParfum, pomegranateParfum];
export const modeHommeProducts: Product[] = [];

// Produits pour la page nouveautés
export const nouveautesProducts: Product[] = [..._allProducts];

// Tous les produits combinés - gardons les deux formats pour la compatibilité
export const instagramProducts: Product[] = [..._allProducts];
export const allProducts: Product[] = [..._allProducts]; // Garder pour la compatibilité
export function getAllProducts(): Product[] {
  return [..._allProducts];
}

// Carte de produit réutilisable
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
            href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="ghost" 
              className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10"
            >
              Contacter pour commander
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramProductCard;
