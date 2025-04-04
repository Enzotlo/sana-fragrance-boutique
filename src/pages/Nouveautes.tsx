
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Instagram } from "lucide-react";
import { instagramProducts } from "@/components/InstagramProducts";

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
              Découvrez nos dernières créations et nouveaux arrivages disponibles sur notre Instagram. Des caftans luxueux et des robes marocaines traditionnelles de haute qualité.
            </p>
            
            <div className="mb-6">
              <a 
                href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-primary hover:text-pink-accent transition-colors"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Suivez-nous sur Instagram pour voir tous nos produits
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-pink-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              Nos produits disponibles sur <span className="text-pink-primary">Instagram</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {instagramProducts.map(product => (
                <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                      Instagram
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <span className="text-sm text-pink-primary font-medium">{product.category}</span>
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
                      <a 
                        href={product.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 px-3 py-2 rounded transition-colors"
                      >
                        Voir sur Instagram
                        <Instagram className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-pink-primary hover:bg-pink-accent text-white border border-pink-primary/30 px-8">
                  Voir tous nos produits sur Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nouveautes;
