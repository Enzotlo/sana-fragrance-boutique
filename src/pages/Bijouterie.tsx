
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bijouterieProducts } from "@/data/ProductData";

const Bijouterie = () => {
  // Regrouper et filtrer les produits par type sans duplication
  const colliers = bijouterieProducts.filter(item => item.name.includes("Collier"));
  const boucles = bijouterieProducts.filter(item => item.name.includes("Boucles")).slice(0, 2);
  
  // Pour les couronnes, puisque "Couronne Verte" et "Couronne Verte Élégante" sont le même article,
  // nous prenons seulement la "Couronne Verte Élégante" qui a l'image distincte
  const uniqueCouronnes = bijouterieProducts
    .filter(item => item.name.includes("Couronne"))
    .filter((item, index, self) => 
      // Utiliser l'ID pour filtrer les doublons plutôt que l'image
      // Garder uniquement la Couronne Verte Élégante (id: 12)
      item.id === 12
    );

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

        {/* Grille des 3 premières catégories en format compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Section Boucles d'oreilles */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="/lovable-uploads/collierrougz+bouclesrouges.jpg" 
                alt="Boucles d'oreilles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h2 className="font-playfair text-xl font-bold p-3 text-white">Boucles d'oreilles</h2>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="text-muted-foreground text-sm mb-3">
                Élégantes boucles d'oreilles artisanales, légères et raffinées.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">12.00 €</span>
                <div className="flex space-x-2">
                  <a 
                    href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      className="bg-pink-primary hover:bg-pink-accent text-white"
                    >
                      TikTok Shop
                    </Button>
                  </a>
                  <a 
                    href="https://www.vinted.fr/member/15843015-abdelkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-pink-primary text-pink-primary hover:bg-pink-primary/10"
                    >
                      Vinted
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Colliers */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="/lovable-uploads/collierblanc.jpg" 
                alt="Collection de Colliers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h2 className="font-playfair text-xl font-bold p-3 text-white">Colliers</h2>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="text-muted-foreground text-sm mb-3">
                Magnifique collection de colliers aux styles variés, disponibles en plusieurs couleurs.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">15.00 €</span>
                <div className="flex space-x-2">
                  <a 
                    href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      className="bg-pink-primary hover:bg-pink-accent text-white"
                    >
                      TikTok Shop
                    </Button>
                  </a>
                  <a 
                    href="https://www.vinted.fr/member/15843015-abdelkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-pink-primary text-pink-primary hover:bg-pink-primary/10"
                    >
                      Vinted
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Couronnes */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="/lovable-uploads/couronneverte.jpg" 
                alt="Collection de Couronnes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h2 className="font-playfair text-xl font-bold p-3 text-white">Couronnes</h2>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="text-muted-foreground text-sm mb-3">
                Magnifiques couronnes artisanales pour sublimer vos coiffures et occasions spéciales.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">15.00 €</span>
                <div className="flex space-x-2">
                  <a 
                    href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      className="bg-pink-primary hover:bg-pink-accent text-white"
                    >
                      TikTok Shop
                    </Button>
                  </a>
                  <a 
                    href="https://www.vinted.fr/member/15843015-abdelkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-pink-primary text-pink-primary hover:bg-pink-primary/10"
                    >
                      Vinted
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grille de produits */}
        <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Nos collections</h3>
        
        {/* Section Colliers */}
        <h4 className="font-playfair text-xl font-semibold mb-4 mt-8">Colliers</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {colliers.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-2 right-2 bg-pink-primary text-white font-semibold text-xs">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-3">
                <h3 className="font-playfair text-md font-semibold mb-1 text-foreground">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
                  <div className="flex gap-1">
                    <a 
                      href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        TikTok
                      </Button>
                    </a>
                    <a 
                      href="https://www.vinted.fr/member/15843015-abdelkadir"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        Vinted
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Section Boucles d'oreilles */}
        <h4 className="font-playfair text-xl font-semibold mb-4 mt-8">Boucles d'oreilles</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {boucles.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-2 right-2 bg-pink-primary text-white font-semibold text-xs">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-3">
                <h3 className="font-playfair text-md font-semibold mb-1 text-foreground">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
                  <div className="flex gap-1">
                    <a 
                      href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        TikTok
                      </Button>
                    </a>
                    <a 
                      href="https://www.vinted.fr/member/15843015-abdelkadir"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        Vinted
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Section Couronnes - Maintenant avec une seule couronne */}
        <h4 className="font-playfair text-xl font-semibold mb-4 mt-8">Couronnes</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {uniqueCouronnes.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-2 right-2 bg-pink-primary text-white font-semibold text-xs">
                  Nouveau
                </Badge>
              </div>
              <CardContent className="p-3">
                <h3 className="font-playfair text-md font-semibold mb-1 text-foreground">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
                  <div className="flex gap-1">
                    <a 
                      href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        TikTok
                      </Button>
                    </a>
                    <a 
                      href="https://www.vinted.fr/member/15843015-abdelkadir"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs px-2"
                      >
                        Vinted
                      </Button>
                    </a>
                  </div>
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
