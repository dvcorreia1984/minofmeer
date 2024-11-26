import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const PreOrderBanner = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-lg z-50 relative">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-white"
      >
        &times;
      </button>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold">Bestel nou jou modulêre huis vanaf R450 000</h3>
          <p className="text-sm text-white/90">Betaal 'n deposito van R50 000 jou eenheid te verseker.</p>
        </div>
        <Button 
          onClick={() => navigate("/order")}
          className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
        >
          Bestel Nou
        </Button>
      </div>
    </div>
  );
};

export default PreOrderBanner;
