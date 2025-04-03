
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const hommeData = [
  {
    id: 1,
    name: "Djellaba Homme Moderne",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1573516515928-92444ec46ce5?q=80&w=1974&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Caftan Homme Traditionnel",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1920&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 3,
    name: "Gandoura Brodée",
    price: 129.50,
    image: "https://images.unsplash.com/photo-1551022372-0bdac482a830?q=80&w=1887&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Jabador Moderne",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553242072-345b34e7b55b?q=80&w=1887&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 5,
    name: "Djellaba Homme Brodée",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop",
    isNew: false
  },
  {
    id: 6,
    name: "Gandoura de Mariage",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=1920&auto=format&fit=crop",
    isNew: true
  }
];

const ModeHomme = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Mode <span className="text-pink-primary">Homme</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre collection pour hommes qui allie élégance traditionnelle et modernité. Des jabadors aux gandouras, retrouvez des tenues d'exception pour toutes les occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {hommeData.map((item) => (
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

export default ModeHomme;
