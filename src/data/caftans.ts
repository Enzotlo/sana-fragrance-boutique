
// Type pour les caftans
export type Caftan = {
  id: number;
  name: string;
  color: string;
  colorName: string;
  images: string[];
  price: number;
  description: string;
  sizes: string[];
};

// Créer les caftans par couleur
const caftansRouges: Caftan[] = [
  {
    id: 1,
    name: "Caftan Rouge Velours",
    color: "red",
    colorName: "Rouge",
    images: [
      "/lovable-uploads/caftan-rouge-1.jpg",
      "/lovable-uploads/caftan-rouge-2.jpg"
    ],
    price: 120,
    description: "Magnifique caftan en velours rouge avec broderies dorées traditionnelles, idéal pour les occasions spéciales.",
    sizes: ["38", "40", "42"]
  }
];

const caftansBleus: Caftan[] = [
  {
    id: 2,
    name: "Caftan Bleu Royal Velours",
    color: "blue",
    colorName: "Bleu Royal",
    images: [
      "/lovable-uploads/caftan-bleu-1.jpg",
      "/lovable-uploads/caftan-bleu-2.jpg"
    ],
    price: 120,
    description: "Élégant caftan en velours bleu royal avec des détails dorés finement travaillés.",
    sizes: ["38", "40", "42"]
  }
];

const caftansBlancs: Caftan[] = [
  {
    id: 3,
    name: "Caftan Blanc Crème",
    color: "white",
    colorName: "Blanc",
    images: [
      "/lovable-uploads/caftan-blanc-1.jpg",
      "/lovable-uploads/caftan-blanc-2.jpg"
    ],
    price: 130,
    description: "Caftan blanc crème avec broderies dorées et rouges, parfait pour les célébrations ou mariages.",
    sizes: ["38", "40", "42"]
  }
];

const caftansVerts: Caftan[] = [
  {
    id: 4,
    name: "Caftan Vert Émeraude",
    color: "green",
    colorName: "Vert Émeraude",
    images: [
      "/lovable-uploads/caftan-vert-1.jpg",
      "/lovable-uploads/caftan-vert-2.jpg"
    ],
    price: 120,
    description: "Superbe caftan en velours vert émeraude avec broderies dorées et détails traditionnels.",
    sizes: ["38", "40", "42"]
  }
];

const caftansBeiges: Caftan[] = [
  {
    id: 5,
    name: "Caftan Beige Doré",
    color: "beige",
    colorName: "Beige",
    images: [
      "/lovable-uploads/caftan-beige-1.jpg",
      "/lovable-uploads/caftan-beige-2.jpg"
    ],
    price: 110,
    description: "Caftan beige doré avec motifs floraux en soie et broderies or, une pièce élégante et confortable.",
    sizes: ["38", "40", "42"]
  }
];

// Regrouper tous les caftans par couleur
export const caftansByColor = [
  { color: "Rouge", caftans: caftansRouges },
  { color: "Bleu Royal", caftans: caftansBleus },
  { color: "Blanc", caftans: caftansBlancs },
  { color: "Vert Émeraude", caftans: caftansVerts },
  { color: "Beige", caftans: caftansBeiges }
];
