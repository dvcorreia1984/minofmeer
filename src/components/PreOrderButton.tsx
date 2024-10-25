import { Button } from "@/components/ui/button";

interface PreOrderButtonProps {
  onClick: () => void;
  price: string;
}

const PreOrderButton = ({ onClick, price }: PreOrderButtonProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-3xl font-bold">{price}</p>
      <Button
        onClick={onClick}
        className="bg-minofmeer-500 hover:bg-minofmeer-600 text-white px-8 py-6 text-lg h-auto"
      >
        Bestel nou
      </Button>
    </div>
  );
};

export default PreOrderButton;