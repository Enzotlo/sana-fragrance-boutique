import { Search, Menu, X } from "lucide-react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            
            {/* Menu Mode */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pink-primary">Mode</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <Link to="/caftans" className="block p-3 hover:bg-pink-primary/10 rounded-md">Caftans</Link>
                      <Link to="/bijouterie" className="block p-3 hover:bg-pink-primary/10 rounded-md">Bijoux</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Menu Parfums */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pink-primary">Parfums</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <Link to="/parfums" className="block p-3 hover:bg-pink-primary/10 rounded-md">Tous nos parfums</Link>
                      <div className="p-3 hover:bg-pink-primary/10 rounded-md">
                        <span className="font-medium block">Eau de parfum Haya</span>
                        <span className="text-sm text-muted-foreground">25.00 €</span>
                      </div>
                      <div className="p-3 hover:bg-pink-primary/10 rounded-md">
                        <span className="font-medium block">Eau de parfum Pomegrante</span>
                        <span className="text-sm text-muted-foreground">20.00 €</span>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Menu Bijoux */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pink-primary">Bijoux</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <Link to="/bijouterie" className="block p-3 hover:bg-pink-primary/10 rounded-md">Tous nos bijoux</Link>
                      <div className="p-3 hover:bg-pink-primary/10 rounded-md">
                        <span className="font-medium block">Colliers</span>
                        <span className="text-sm text-muted-foreground">15.00 € pièce</span>
                      </div>
                      <div className="p-3 hover:bg-pink-primary/10 rounded-md">
                        <span className="font-medium block">Boucles d'oreille</span>
                        <span className="text-sm text-muted-foreground">10.00 € pièce</span>
                      </div>
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
              
              {/* Mode mobile */}
              <div className="flex flex-col">
                <span
                  className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2 font-semibold"
                >
                  Mode
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link to="/caftans" className="text-foreground hover:text-pink-primary py-1">Caftans</Link>
                  <Link to="/bijouterie" className="text-foreground hover:text-pink-primary py-1">Bijoux</Link>
                </div>
              </div>
              
              {/* Parfums mobile */}
              <div className="flex flex-col">
                <span
                  className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2 font-semibold"
                >
                  Parfums
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link to="/parfums" className="text-foreground hover:text-pink-primary py-1">Tous nos parfums</Link>
                  <div className="text-foreground py-1">
                    <span className="font-medium block">Eau de parfum Haya</span>
                    <span className="text-sm text-muted-foreground">25.00 €</span>
                  </div>
                  <div className="text-foreground py-1">
                    <span className="font-medium block">Eau de parfum Pomegrante</span>
                    <span className="text-sm text-muted-foreground">20.00 €</span>
                  </div>
                </div>
              </div>
              
              {/* Bijoux mobile */}
              <div className="flex flex-col">
                <span
                  className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2 font-semibold"
                >
                  Bijoux
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link to="/bijouterie" className="text-foreground hover:text-pink-primary py-1">Tous nos bijoux</Link>
                  <div className="text-foreground py-1">
                    <span className="font-medium block">Colliers</span>
                    <span className="text-sm text-muted-foreground">15.00 € pièce</span>
                  </div>
                  <div className="text-foreground py-1">
                    <span className="font-medium block">Boucles d'oreille</span>
                    <span className="text-sm text-muted-foreground">10.00 € pièce</span>
                  </div>
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
      </div>
    </header>
  );
};

export default Navbar;
