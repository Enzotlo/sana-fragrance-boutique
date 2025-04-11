
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { bijouterieProducts, parfumProducts } from "@/data/ProductData";

const Nouveautes = () => {
  // Sélectionner des produits spécifiques pour éviter la duplication
  const nouveautesBijoux = [
    bijouterieProducts.find(item => item.name.includes("Couronne Verte Élégante")),
    bijouterieProducts.find(item => item.name.includes("Collier Blanc")),
    bijouterieProducts.find(item => item.name.includes("Boucles d'oreilles Rouges"))
  ].filter(Boolean);

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
            
            {/* Couronnes - nouveau produit mis en avant */}
            <div className="bg-white p-8 rounded-lg mb-10 max-w-5xl mx-auto">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">Nouvelle Collection - Couronnes 15€</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/couronneverte.jpg" 
                    alt="Couronnes élégantes" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez notre nouvelle collection de couronnes artisanales. Ces pièces uniques sublimeront vos coiffures pour toutes vos occasions spéciales.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Nos couronnes peuvent être assorties à nos colliers et boucles d'oreilles pour créer un ensemble harmonieux et élégant.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-pink-primary/10">Nouveau</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Fait main</Badge>
                    <Badge variant="outline" className="bg-pink-primary/10">Exclusif</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-foreground">15.00 € par pièce</span>
                    <div className="flex space-x-2">
                      <a 
                        href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                          TikTok Shop
                        </Button>
                      </a>
                      <a 
                        href="https://www.vinted.fr/member/15843015-abdelkadir"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-pink-primary text-pink-primary hover:bg-pink-primary/10">
                          Vinted
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bijoux Nouveautés - Grille plus petite */}
            <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Nouveaux Bijoux</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
              {nouveautesBijoux.map(product => (
                <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-2 right-2 bg-pink-primary text-white font-semibold text-xs">
                      Nouveau
                    </Badge>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-playfair text-md font-semibold mb-1 text-foreground">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">{product.price.toFixed(2)} €</span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        <a 
                          href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs"
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
                            className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10 text-xs"
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
            
            {/* Parfum - gardé de la version précédente */}
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
                    <div className="flex space-x-2">
                      <a 
                        href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-pink-primary hover:bg-pink-accent text-white">
                          TikTok Shop
                        </Button>
                      </a>
                      <a 
                        href="https://www.vinted.fr/member/15843015-abdelkadir"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-pink-primary text-pink-primary hover:bg-pink-primary/10">
                          Vinted
                        </Button>
                      </a>
                    </div>
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
