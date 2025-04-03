
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const robesData = [
  {
    id: 1,
    name: "Robe Marocaine Brodée",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944d21b?q=80&w=1887&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Robe Takchita Traditionnelle",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581404746881-5c2a79c3e223?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 3,
    name: "Robe Marocaine Perlée",
    price: 229.50,
    image: "https://images.unsplash.com/photo-1645185830884-3fa9a265a1a9?q=80&w=1974&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Robe Marocaine Moderne",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1596285508948-4bf5abe79f8e?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 5,
    name: "Takchita Mariage",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1580644228032-ad51e295b40f?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 6,
    name: "Robe Djellaba Moderne",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1614093302611-8efc4de32ffb?q=80&w=1920&auto=format&fit=crop",
    isNew: true
  }
];

const RobesMarocaines = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Robes Marocaines</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Explorez notre sélection de robes marocaines authentiques, takchitas et djellabas. Ces créations artisanales allient confort et élégance pour toutes les occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {robesData.map((item) => (
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

export default RobesMarocaines;
