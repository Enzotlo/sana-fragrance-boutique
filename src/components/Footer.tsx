
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-deep-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">Sana Addict</h3>
            <p className="text-white/70 mb-6">
              Votre boutique de parfums de luxe, offrant une sélection exclusive des plus grandes marques internationales.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gold hover:text-gold-light transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  Parfums Femme
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  Parfums Homme
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  Nouveautés
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  Promotions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  123 Rue des Parfums, 67000 Strasbourg, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/70">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/70">contact@sanaaddict.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Inscrivez-vous pour recevoir nos offres exclusives et nos dernières nouveautés.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/10 border-gold/30 text-white placeholder:text-white/50 focus-visible:ring-gold/50"
              />
              <Button className="bg-gold hover:bg-gold-light text-deep-black">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Sana Addict. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
