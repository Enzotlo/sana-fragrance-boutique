
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Lefevre",
    comment: "Je suis absolument ravie des parfums achetés chez Sana Addict. La livraison était rapide et l'emballage raffiné. C'est maintenant ma boutique préférée pour les fragrances.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Thomas Martin",
    comment: "Service client extraordinaire. J'ai eu un doute sur mon choix et ils m'ont conseillé parfaitement. Le parfum correspond exactement à mes attentes.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Laurent",
    comment: "Des produits authentiques et des prix compétitifs. J'apprécie particulièrement la description détaillée des notes olfactives qui m'aide à faire mon choix en ligne.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Ce que nos clients <span className="text-gradient">disent de nous</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à notre expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="luxury-card p-8 rounded-lg relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold opacity-30" />
              
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                  />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/80">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
