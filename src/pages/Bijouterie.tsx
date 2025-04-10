import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bijouterieProducts } from "@/components/InstagramProducts";

const Bijouterie = () => {
  // Filtrer les produits par type
  const colliers = bijouterieProducts.filter(item => item.name.includes("Collier"));
  const boucles = bijouterieProducts.filter(item => item.name.includes("Boucles"));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Bijoux</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre collection de bijoux artisanaux. Des pièces uniques qui sublimeront vos tenues avec élégance et raffinement.
          </p>
        </div>

        {/* Section Boucles d'oreilles */}
        <div className="bg-pink-primary/5 p-8 rounded-lg mb-10">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">Boucles d'oreille 10€</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/b966d12f-4d28-4893-928b-e747b75a4c7b.png" 
                alt="Boucles d'oreille" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground mb-4">
                Élégantes boucles d'oreille artisanales, légères et raffinées. Un accessoire parfait pour compléter votre tenue.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-pink-primary/10">Fait main</Badge>
                <Badge variant="outline" className="bg-pink-primary/10">Élégant</Badge>
                <Badge variant="outline" className="bg-pink-primary/10">Léger</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-2xl text-foreground">10.00 €</span>
                <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                  Contacter pour commander
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Colliers */}
        <div className="bg-pink-primary/5 p-8 rounded-lg mb-10">
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
                <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                  Contacter pour commander
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {bijouterieProducts.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-pink-primary text-white font-semibold">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-5">
                <span className="text-sm text-pink-primary font-medium">{item.category}</span>
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {typeof item.description === 'string' && item.description.split('\n')[0]}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
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
      </main>
      <Footer />
    </div>
  );
};

export default Bijouterie;
