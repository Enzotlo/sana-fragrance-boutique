
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// We need to export this from CaftanShowcase.tsx, so let's create a separate import
import { caftansByColor } from "@/data/caftans";

const HomeCaftanShowcase = () => {
  // Créer un tableau de tous les caftans à partir de caftansByColor
  const allCaftans = caftansByColor.flatMap(group => group.caftans);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Nos <span className="text-pink-primary">Caftans</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Découvrez notre collection de caftans traditionnels marocains, fabriqués avec des tissus de qualité et ornés de broderies artisanales.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Carousel className="w-full">
          <CarouselContent>
            {caftansByColor.map((colorGroup) => (
              colorGroup.caftans.map((caftan) => (
                <CarouselItem key={caftan.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col">
                      <div className="relative h-[300px] bg-gray-50 flex items-center justify-center p-4">
                        <img
                          src={caftan.images[0]}
                          alt={caftan.name}
                          className="max-w-full max-h-[280px] object-contain"
                        />
                        <Badge className="absolute top-2 right-2 bg-pink-primary text-white">
                          {caftan.colorName}
                        </Badge>
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-playfair font-semibold text-lg mb-2">{caftan.name}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                            {caftan.description}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="font-bold text-xl">{caftan.price}.00 €</span>
                          <Badge variant="outline" className="bg-gray-50">
                            {caftan.sizes.join(", ")}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-5 bg-white" />
            <CarouselNext className="-right-5 bg-white" />
          </div>
        </Carousel>
      </div>

      <div className="text-center mt-8">
        <Link to="/Caftans">
          <Button className="bg-pink-primary hover:bg-pink-accent text-white">
            Voir tous nos caftans
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCaftanShowcase;
