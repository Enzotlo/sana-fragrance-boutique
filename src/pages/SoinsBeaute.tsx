
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const beauteData = [
  {
    id: 1,
    name: "Huile d'Argan Pure Bio",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1611082553366-b7f7f0870beb?q=80&w=1965&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Crème Visage à l'Argan",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1595425970377-1370c3a8b8ab?q=80&w=1780&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 3,
    name: "Savon Noir Traditionnel",
    price: 19.50,
    image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?q=80&w=1887&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Gommage au Ghassoul",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 5,
    name: "Huile de Rose Hydratante",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1620735692151-26a7e0748429?q=80&w=1933&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 6,
    name: "Coffret Soins Hammam",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1601742176455-bb6b1bef0d1f?q=80&w=1933&auto=format&fit=crop",
    isNew: true
  }
];

const SoinsBeaute = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Soins <span className="text-pink-primary">Beauté</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez nos soins de beauté authentiques aux ingrédients naturels. Des huiles d'argan aux savons traditionnels, nos produits sont élaborés selon les rituels ancestraux marocains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {beauteData.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.isNew && (
                  <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                    Nouveau
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
      <Footer />
    </div>
  );
};

export default SoinsBeaute;
