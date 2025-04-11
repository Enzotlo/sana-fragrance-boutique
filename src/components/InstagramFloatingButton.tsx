
import { Instagram } from "lucide-react";

const InstagramFloatingButton = () => {
  return (
    <a 
      href="https://www.instagram.com/sanaaddict67?igsh=Z2VsMmdhbHo5NGVl" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-pink-primary hover:bg-pink-accent text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on Instagram"
    >
      <Instagram className="h-6 w-6" />
    </a>
  );
};

export default InstagramFloatingButton;
