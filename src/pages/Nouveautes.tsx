
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import NewArrivals from "@/components/NewArrivals";

const Nouveautes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nos <span className="text-pink-primary">Nouveautés</span>
            </h1>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Découvrez nos dernières créations et nouveaux arrivages. Mode, beauté, parfums - restez à la pointe des tendances avec nos produits exclusifs.
            </p>
          </div>
        </div>
        
        <NewArrivals />
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Toutes nos <span className="text-pink-primary">Nouveautés</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Mode Femme */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563170423-717654358332?q=80&w=1974&auto=format&fit=crop" 
                  alt="Caftan Moderne Brodé" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-5">
                <span className="text-sm text-pink-primary font-medium">Mode</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Caftan Moderne Brodé</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">249.99 €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Beauté */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595425970377-1370c3a8b8ab?q=80&w=1780&auto=format&fit=crop" 
                  alt="Crème Visage à l'Argan" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-5">
                <span className="text-sm text-pink-primary font-medium">Soins Beauté</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Crème Visage à l'Argan</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">49.99 €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Mode Homme */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573516515928-92444ec46ce5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Djellaba Homme Moderne" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-5">
                <span className="text-sm text-pink-primary font-medium">Mode Homme</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Djellaba Homme Moderne</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">149.99 €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Parfums */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1965&auto=format&fit=crop" 
                  alt="Eau de Parfum Ambre Royal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-5">
                <span className="text-sm text-pink-primary font-medium">Parfums</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Eau de Parfum Ambre Royal</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">79.99 €</span>
                  <Button variant="ghost" className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nouveautes;
