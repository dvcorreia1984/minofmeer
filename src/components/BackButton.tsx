import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  return (
    <Link to="/">
      <Button variant="ghost" size="sm" className="mb-4">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Terug na Tuisblad
      </Button>
    </Link>
  );
};

export default BackButton;