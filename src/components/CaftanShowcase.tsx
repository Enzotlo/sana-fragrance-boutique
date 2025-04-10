import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
const caftansByColor = [
  { color: "Rouge", caftans: caftansRouges },
  { color: "Bleu Royal", caftans: caftansBleus },
  { color: "Blanc", caftans: caftansBlancs },
  { color: "Vert Émeraude", caftans: caftansVerts },
  { color: "Beige", caftans: caftansBeiges }
];

const CaftanShowcase = () => {
  const [selectedCaftan, setSelectedCaftan] = useState<Caftan | null>(null);

  // Ouvrir le modal de détails
  const openDetails = (caftan: Caftan) => {
    setSelectedCaftan(caftan);
  };

  // Fermer le modal de détails
  const closeDetails = () => {
    setSelectedCaftan(null);
  };

  return (
    <div className="py-8">
      <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-foreground">
        Nos <span className="text-pink-primary">Caftans</span> par Couleur
      </h2>

      {caftansByColor.map((colorGroup) => (
        <div key={colorGroup.color} className="mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
            Collection <span className="text-pink-primary">{colorGroup.color}</span>
          </h3>

          {colorGroup.caftans.map((caftan) => (
            <div key={caftan.id} className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {caftan.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1 flex justify-center items-center bg-gray-50 rounded-lg h-[400px]">
                            <img
                              src={image}
                              alt={`${caftan.name} - Image ${index + 1}`}
                              className="max-w-full max-h-[380px] object-contain rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                      <CarouselPrevious className="-left-4 bg-white" />
                      <CarouselNext className="-right-4 bg-white" />
                    </div>
                  </Carousel>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-playfair text-xl font-bold mb-2">{caftan.name}</h4>
                    <Badge className="mb-3 bg-pink-primary/10 text-pink-primary">{caftan.colorName}</Badge>
                    <p className="text-muted-foreground mb-4">{caftan.description}</p>
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Tailles disponibles:</h5>
                      <div className="flex gap-2">
                        {caftan.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="bg-gray-100">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-foreground">{caftan.price}.00 €</span>
                    <a 
                      href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                        Contacter pour commander
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CaftanShowcase; 