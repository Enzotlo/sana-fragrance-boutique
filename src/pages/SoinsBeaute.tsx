
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { soinsBeauteProducts } from "@/components/InstagramProducts";

const SoinsBeaute = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-pink-primary">Produits</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Découvrez notre parfum d'exception aux senteurs orientales envoûtantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {soinsBeauteProducts.map((item) => (
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
                  {item.description?.split('\n')[0]}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{item.price.toFixed(2)} €</span>
                  <div className="flex space-x-2">
                    <a 
                      href="https://shop.tiktok.com/view/product/1729479599136217158?region=FR&locale=fr&source=seller_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="ghost" 
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10"
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
                        variant="ghost" 
                        className="text-pink-primary hover:text-pink-accent hover:bg-pink-primary/10"
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

        <div className="bg-pink-primary/5 p-8 rounded-lg mb-10">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">Eau de parfum haya 100ml</h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default SoinsBeaute;
