
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
            <a href="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-pink-primary">
                Sana Addict
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Femme
            </a>
            <a
              href="#"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Homme
            </a>
            <a
              href="#"
              className="text-foreground hover:text-pink-primary transition-colors duration-300"
            >
              Nouveautés
            </a>
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

            <Button variant="ghost" size="icon" className="text-pink-primary">
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
              <a
                href="/"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Accueil
              </a>
              <a
                href="#"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Femme
              </a>
              <a
                href="#"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Homme
              </a>
              <a
                href="#"
                className="text-foreground hover:text-pink-primary transition-colors duration-300 py-2"
              >
                Nouveautés
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
