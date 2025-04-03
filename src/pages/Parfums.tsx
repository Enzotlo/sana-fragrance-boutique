
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const parfumsData = [
  {
    id: 1,
    name: "Eau de Parfum Ambre Royal",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1965&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Parfum Oriental Oud",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1615341724265-5952bf11d7a6?q=80&w=1780&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 3,
    name: "Essence de Rose de Damas",
    price: 69.50,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1887&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Parfum Musc Blanc",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1887&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 5,
    name: "Eau de Parfum Jasmin",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1618481207507-f91256049706?q=80&w=1933&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 6,
    name: "Parfum Bois de Cèdre",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1965&auto=format&fit=crop",
    isNew: true
  }
];

const Parfums = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Parfums</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre collection de parfums d'exception aux senteurs orientales envoûtantes. Des fragrances rares élaborées selon un savoir-faire ancestral pour sublimer votre élégance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {parfumsData.map((item) => (
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

export default Parfums;
