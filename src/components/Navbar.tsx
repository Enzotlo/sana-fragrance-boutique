
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-pink-primary">
                Sana Addict
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Accueil
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pink-primary">Mode</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <Link to="/caftans" className="block p-3 hover:bg-pink-primary/10 rounded-md">Caftans</Link>
                      <Link to="/robes-marocaines" className="block p-3 hover:bg-pink-primary/10 rounded-md">Robes marocaines</Link>
                      <Link to="/mode-homme" className="block p-3 hover:bg-pink-primary/10 rounded-md">Homme</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pink-primary">Beauté</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <Link to="/parfums" className="block p-3 hover:bg-pink-primary/10 rounded-md">Parfums</Link>
                      <Link to="/soins-beaute" className="block p-3 hover:bg-pink-primary/10 rounded-md">Soins visage</Link>
                      <Link to="/soins-beaute" className="block p-3 hover:bg-pink-primary/10 rounded-md">Soins corps</Link>
                      <Link to="/soins-beaute" className="block p-3 hover:bg-pink-primary/10 rounded-md">Huiles essentielles</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              to="/nouveautes"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Nouveautés
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Rechercher..."
                className="w-40 lg:w-60 bg-secondary text-foreground border-pink-primary/30 focus-visible:ring-pink-primary/50"
              />
              <Search className="absolute right-3 h-4 w-4 text-pink-primary" />
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-pink-primary"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-pink-primary"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex items-center relative mb-4">
              <Input
                type="text"
                placeholder="Rechercher..."
                className="w-full bg-secondary text-foreground border-pink-primary/30 focus-visible:ring-pink-primary/50"
              />
              <Search className="absolute right-3 h-4 w-4 text-pink-primary" />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Accueil
              </Link>
              <div className="flex flex-col">
                <span
                  className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2 font-semibold"
                >
                  Mode
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link to="/caftans" className="text-foreground hover:text-pink-primary py-1">Caftans</Link>
                  <Link to="/robes-marocaines" className="text-foreground hover:text-pink-primary py-1">Robes marocaines</Link>
                  <Link to="/mode-homme" className="text-foreground hover:text-pink-primary py-1">Homme</Link>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2 font-semibold"
                >
                  Beauté
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link to="/parfums" className="text-foreground hover:text-pink-primary py-1">Parfums</Link>
                  <Link to="/soins-beaute" className="text-foreground hover:text-pink-primary py-1">Soins visage</Link>
                  <Link to="/soins-beaute" className="text-foreground hover:text-pink-primary py-1">Soins corps</Link>
                  <Link to="/soins-beaute" className="text-foreground hover:text-pink-primary py-1">Huiles essentielles</Link>
                </div>
              </div>
              <Link
                to="/nouveautes"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Nouveautés
              </Link>
            </nav>
          </div>
        )}

        {/* Shopping Cart Panel */}
        {cartOpen && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl animate-slide-in-from-right">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Votre panier</h2>
                <Button variant="ghost" size="icon" onClick={toggleCart}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6 flex flex-col items-center justify-center h-[80vh]">
                <div className="text-center">
                  <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-xl text-muted-foreground mb-2">Votre panier est vide</p>
                  <p className="text-sm text-muted-foreground mb-6">Commencez vos achats pour ajouter des articles</p>
                  <Button 
                    className="bg-pink-primary hover:bg-pink-accent text-white" 
                    onClick={toggleCart}
                  >
                    Découvrir nos produits
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
