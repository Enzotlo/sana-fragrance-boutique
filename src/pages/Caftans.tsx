
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const caftansData = [
  {
    id: 1,
    name: "Caftan Moderne Bleu Roi",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1563170423-717654358332?q=80&w=1974&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Caftan Traditionnel Brodé",
    price: 289.99,
    image: "https://images.unsplash.com/photo-1645185978324-8b3edc142562?q=80&w=1974&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 3,
    name: "Caftan de Soirée Doré",
    price: 319.50,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944d21b?q=80&w=1887&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Caftan Modern Rose",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1581142351310-4bc7c982a1e4?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 5,
    name: "Caftan Velours Brodé",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 6,
    name: "Caftan Mariage Blanc",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1581404570382-4acd698c42e0?q=80&w=1920&auto=format&fit=crop",
    isNew: true
  }
];

const Caftans = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Caftans</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre collection exclusive de caftans marocains, alliant tradition et modernité. Chaque pièce est soigneusement confectionnée pour sublimer votre silhouette avec élégance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {caftansData.map((item) => (
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

export default Caftans;
