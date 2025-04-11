
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
  instagramLink: "https://www.instagram.com/p/DFHxqCUo1xb/",
  description: "Notes de tête: héliotrope, orchidée, tangerine\nNotes de cœur: fruits tropicaux\nNotes de fond: vanille, musc, bois de santal\nType de parfum: floral, gourmand\n\nOffrez des sensations gourmandes à vos sens. L'eau de parfum pour femmes Le Chameau Arabia Haya regorge de délicieuses notes auxquelles il est difficile de résister, surtout si vous adorez les friandises sucrées.\n\nParfum oriental - Parfum sucré - Parfum floral"
};

const pomegranateParfum: Product = {
  id: 2,
  name: "Eau de parfum Pomegrante 60ml",
  category: "Parfum",
  price: 20.00,
  image: "/lovable-uploads/pomegrante-musk-collection.jpg",
  instagramLink: "https://www.instagram.com/p/C_1BHBEtxWu/",
  description: "Notes de tête: Bergamote, Caramel, Framboise\nNotes de cœur: Freesia, Jasmin, Rose\nNotes de fond: Musc, Ambre\n\nUn parfum élégant et fruité qui vous enveloppera d'une aura sensuelle et raffinée."
};

// Colliers
const collierBleu: Product = {
  id: 3,
  name: "Collier Bleu",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/collier-bleu.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Magnifique collier bleu avec finitions artisanales. Ajoutez une touche d'élégance à vos tenues avec ce bijou unique."
};

const collierRouge: Product = {
  id: 4,
  name: "Collier Rouge",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/collierrougz+bouclesrouges.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Élégant collier rouge avec possibilité d'assortir avec des boucles d'oreilles (vendues séparément)."
};

const collierBlanc: Product = {
  id: 5,
  name: "Collier Blanc",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/collierblanc.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Collier raffiné blanc avec finitions élégantes. Un accessoire idéal pour sublimer toutes vos tenues."
};

const collierNoir: Product = {
  id: 6,
  name: "Collier Noir",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/collier-noir.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Collier chic noir avec ornement central. Un accessoire intemporel qui s'adapte à toutes les occasions."
};

const collierVert: Product = {
  id: 7,
  name: "Collier Vert",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/colliervert+bouclesoreillesvert+couronnevert.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Collier tendance vert, pouvant être assorti avec boucles d'oreilles et couronne de la même teinte (vendus séparément)."
};

const collierDore: Product = {
  id: 8,
  name: "Collier Doré",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/collier-dore.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Élégant collier doré au design raffiné. Une pièce incontournable pour sublimer vos tenues de soirée."
};

// Boucles d'oreilles
const bouclesOreillesRouges: Product = {
  id: 9,
  name: "Boucles d'oreilles Rouges",
  category: "Bijouterie",
  price: 12.00,
  image: "/lovable-uploads/collierrougz+bouclesrouges.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Élégantes boucles d'oreilles rouges, parfaites pour compléter votre parure avec le collier assorti (vendu séparément)."
};

const bouclesOreillesVertes: Product = {
  id: 10,
  name: "Boucles d'oreilles Vertes",
  category: "Bijouterie",
  price: 12.00,
  image: "/lovable-uploads/colliervert+bouclesoreillesvert+couronnevert.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Boucles d'oreilles vertes artisanales, parfaites pour compléter votre parure avec le collier et la couronne assortis (vendus séparément)."
};

// Couronnes
const couronneVerte: Product = {
  id: 11,
  name: "Couronne Verte",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/colliervert+bouclesoreillesvert+couronnevert.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Magnifique couronne verte artisanale pour sublimer vos coiffures. Parfaite avec les boucles d'oreilles et le collier assortis (vendus séparément)."
};

const couronneVerte2: Product = {
  id: 12,
  name: "Couronne Verte Élégante",
  category: "Bijouterie",
  price: 15.00,
  image: "/lovable-uploads/couronneverte.jpg",
  instagramLink: "https://www.instagram.com/p/C4Iu3dKtvVO/",
  description: "Somptueuse couronne verte avec finitions dorées. Un accessoire royal pour vos occasions spéciales."
};

// Caftans
const caftanRouge: Product = {
  id: 13,
  name: "Caftan Rouge Velours",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-rouge-1.jpg",
  instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/",
  description: "Magnifique caftan en velours rouge avec broderies dorées traditionnelles, idéal pour les occasions spéciales."
};

const caftanBleu: Product = {
  id: 14,
  name: "Caftan Bleu Royal Velours",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-bleu-1.jpg",
  instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/",
  description: "Élégant caftan en velours bleu royal avec des détails dorés finement travaillés."
};

const caftanBlanc: Product = {
  id: 15,
  name: "Caftan Blanc Crème",
  category: "Mode",
  price: 130.00,
  image: "/lovable-uploads/caftan-blanc-1.jpg",
  instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/",
  description: "Caftan blanc crème avec broderies dorées et rouges, parfait pour les célébrations ou mariages."
};

const caftanVert: Product = {
  id: 16,
  name: "Caftan Vert Émeraude",
  category: "Mode",
  price: 120.00,
  image: "/lovable-uploads/caftan-vert-1.jpg",
  instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/",
  description: "Superbe caftan en velours vert émeraude avec broderies dorées et détails traditionnels."
};

const caftanBeige: Product = {
  id: 17,
  name: "Caftan Beige Doré",
  category: "Mode",
  price: 110.00,
  image: "/lovable-uploads/caftan-beige-1.jpg",
  instagramLink: "https://www.instagram.com/reel/DEFk9QRo371/",
  description: "Caftan beige doré avec motifs floraux en soie et broderies or, une pièce élégante et confortable."
};

// Liste de tous les produits
const allProductsList = [
  hayaParfum, 
  pomegranateParfum, 
  collierBleu, 
  collierRouge, 
  collierBlanc, 
  collierNoir, 
  collierVert,
  collierDore,
  bouclesOreillesRouges, 
  bouclesOreillesVertes,
  couronneVerte,
  couronneVerte2,
  caftanRouge,
  caftanBleu,
  caftanBlanc,
  caftanVert,
  caftanBeige
];

// Exportation des groupes de produits
export const parfumProducts: Product[] = [hayaParfum, pomegranateParfum];
export const bijouterieProducts: Product[] = [
  collierBleu, collierRouge, collierBlanc, collierNoir, collierVert, collierDore, 
  bouclesOreillesRouges, bouclesOreillesVertes, 
  couronneVerte, couronneVerte2
];
export const caftansProducts: Product[] = [caftanRouge, caftanBleu, caftanBlanc, caftanVert, caftanBeige];

// Créer des catégories distinctes pour éviter les doublons sur la page d'accueil
export const featuredBijouterieProducts: Product[] = [collierBleu, collierRouge, collierVert, collierDore];
export const featuredCaftansProducts: Product[] = [caftanRouge, caftanBleu];
export const featuredParfumProducts: Product[] = [hayaParfum];

// Nouveautés - sélection différente pour éviter les doublons
export const newBijouterieProducts: Product[] = [couronneVerte2, collierBlanc, collierNoir];
export const newCaftansProducts: Product[] = [caftanBlanc, caftanVert];
export const newParfumProducts: Product[] = [pomegranateParfum];

// Catégories spécifiques pour certaines pages
export const robesMarocainesProducts: Product[] = [...caftansProducts];
export const soinsBeauteProducts: Product[] = [...parfumProducts];
export const modeHommeProducts: Product[] = [];
export const nouveautesProducts: Product[] = [
  couronneVerte2, 
  collierBlanc, 
  collierNoir, 
  hayaParfum, 
  pomegranateParfum, 
  caftanBlanc
];
export const instagramProducts: Product[] = [...allProductsList];

// Fonction pour obtenir tous les produits
export function getAllProducts(): Product[] {
  return [...allProductsList];
}
