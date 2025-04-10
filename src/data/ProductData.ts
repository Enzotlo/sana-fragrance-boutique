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
  image: "/lovable-uploads/pomegrante-musk-collection.jpg",
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
const caftanRouge: Product = {
  id: 9,
  name: "Caftan Rouge Velours",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-rouge-1.jpg",
  instagramLink: "#",
  description: "Magnifique caftan en velours rouge avec broderies dorées traditionnelles, idéal pour les occasions spéciales."
};

const caftanBleu: Product = {
  id: 10,
  name: "Caftan Bleu Royal Velours",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-bleu-1.jpg",
  instagramLink: "#",
  description: "Élégant caftan en velours bleu royal avec des détails dorés finement travaillés."
};

const caftanBlanc: Product = {
  id: 11,
  name: "Caftan Blanc Crème",
  category: "Mode",
  price: 130.00,
  image: "/lovable-uploads/caftan-blanc-1.jpg",
  instagramLink: "#",
  description: "Caftan blanc crème avec broderies dorées et rouges, parfait pour les célébrations ou mariages."
};

const caftanVert: Product = {
  id: 12,
  name: "Caftan Vert Émeraude",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-vert-1.jpg",
  instagramLink: "#",
  description: "Superbe caftan en velours vert émeraude avec broderies dorées et détails traditionnels."
};

const caftanBeige: Product = {
  id: 13,
  name: "Caftan Beige Doré",
  category: "Mode",
  price: 110.00,
  image: "/lovable-uploads/caftan-beige-1.jpg",
  instagramLink: "#",
  description: "Caftan beige doré avec motifs floraux en soie et broderies or, une pièce élégante et confortable."
};

// Liste de tous les produits
const allProductsList = [
  hayaParfum, 
  pomegranateParfum, 
  collierBleu, 
  collierRouge, 
  collierChampagne, 
  collierNoir, 
  collierVert, 
  bouclesOreilles, 
  caftanRouge,
  caftanBleu,
  caftanBlanc,
  caftanVert,
  caftanBeige
];

// Exportation des groupes de produits
export const parfumProducts: Product[] = [hayaParfum, pomegranateParfum];
export const bijouterieProducts: Product[] = [collierBleu, collierRouge, collierChampagne, collierNoir, collierVert, bouclesOreilles];
export const caftansProducts: Product[] = [caftanRouge, caftanBleu, caftanBlanc, caftanVert, caftanBeige];
export const robesMarocainesProducts: Product[] = [caftanRouge, caftanBleu, caftanBlanc, caftanVert, caftanBeige];
export const soinsBeauteProducts: Product[] = [hayaParfum, pomegranateParfum];
export const modeHommeProducts: Product[] = [];
export const nouveautesProducts: Product[] = [...allProductsList];
export const instagramProducts: Product[] = [...allProductsList];

// Fonction pour obtenir tous les produits
export function getAllProducts(): Product[] {
  return [...allProductsList];
} 