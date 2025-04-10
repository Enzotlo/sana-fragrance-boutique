import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { instagramProducts, bijouterieProducts } from "@/components/InstagramProducts";

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
              Découvrez nos produits phares, parfums d'exception et bijoux raffinés.
            </p>
          </div>
        </div>
        
        <div className="bg-pink-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              Nos <span className="text-pink-primary">produits phares</span>
            </h2>
            
            <div className="bg-white p-8 rounded-lg mb-10 max-w-5xl mx-auto">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">Collier 15€ pièce</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png" 
                    alt="Collection de Colliers" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground mb-4">
                    Magnifique collection de colliers en perles colorées avec ornements dorés. Chaque collier est une pièce unique, fabriquée avec soin et attention aux détails.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Disponibles en plusieurs couleurs : bleu, rouge, champagne, noir et vert. Ces colliers ajouteront une touche d'élégance et de sophistication à n'importe quelle tenue.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-pink-primary/10">Fait main</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Élégant</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Exclusif</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-foreground">15.00 € par pièce</span>
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
              {bijouterieProducts.map(product => (
                <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                      Nouveau
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <span className="text-sm text-pink-primary font-medium">{product.category}</span>
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
                      <a 
                        href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="ghost" 
                          className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10"
                        >
                          Contacter pour commander
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg mb-10 max-w-5xl mx-auto">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">Eau de parfum haya 100ml - 25.00 €</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/b1451f21-d435-4b2f-a5b0-020abd878003.png" 
                    alt="Eau de parfum haya 100ml" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground mb-4">
                    Notes de tête: héliotrope, orchidée, tangerine<br/>
                    Notes de cœur: fruits tropicaux<br/>
                    Notes de fond: vanille, musc, bois de santal
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Type de parfum: floral, gourmand
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Offrez des sensations gourmandes à vos sens. L'eau de parfum pour femmes Le Chameau Arabia Haya 
                    regorge de délicieuses notes auxquelles il est difficile de résister, surtout si vous adorez 
                    les friandises sucrées.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-pink-primary/10">Parfum oriental</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Parfum sucré</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Parfum floral</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-foreground">25.00 €</span>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nouveautes;
