import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27842513952', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed top-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white shadow-lg"
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      Gesels met ons op WhatsApp
    </Button>
  );
};

export default WhatsAppButton;