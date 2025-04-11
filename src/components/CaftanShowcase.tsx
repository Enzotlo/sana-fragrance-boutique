
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
import { caftansByColor, Caftan } from "@/data/caftans";

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
                    <div className="flex space-x-2">
                      <a 
                        href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                          TikTok Shop
                        </Button>
                      </a>
                      <a 
                        href="https://www.vinted.fr/member/15843015-abdelkadir"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-pink-primary text-pink-primary hover:bg-pink-primary/10">
                          Vinted
                        </Button>
                      </a>
                    </div>
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
