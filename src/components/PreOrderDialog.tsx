import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PersonalInfoForm from "./pre-order/PersonalInfoForm";
import FinishesForm from "./pre-order/FinishesForm";

interface PreOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  unitName: string;
  price: string;
}

interface Finishes {
  kitchen: string;
  bathroom: string;
  floor: string;
  exterior: string;
}

const PreOrderDialog = ({ open, onOpenChange, unitName, price }: PreOrderDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [finishes, setFinishes] = useState<Finishes>({
    kitchen: "standard",
    bathroom: "standard",
    floor: "vinyl",
    exterior: "standard",
  });

  const [solarPower, setSolarPower] = useState(false);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bestelling ingedien!",
      description: "Ons sal jou kontak met meer besonderhede oor MinOfMeer behuising.",
    });
    onOpenChange(false);
  };

  const finishingOptions = {
    kitchen: ["standard", "premium", "luxury"],
    bathroom: ["standard", "premium", "luxury"],
    floor: ["vinyl", "laminate", "engineered wood"],
    exterior: ["standard", "premium", "custom"],
  };

  const calculateTotalPrice = () => {
    const basePrice = parseInt(price.replace(/[^0-9]/g, ""));
    const solarPowerCost = solarPower ? 70000 : 0;
    return `R${(basePrice + solarPowerCost).toLocaleString()}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Voorafbestelling {unitName}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <PersonalInfoForm formData={formData} setFormData={setFormData} />
            
            <div className="space-y-4 pt-4 border-t">
              <FinishesForm
                finishes={finishes}
                setFinishes={setFinishes}
                finishingOptions={finishingOptions}
              />
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t">
              <Switch
                id="solar-power"
                checked={solarPower}
                onCheckedChange={setSolarPower}
              />
              <Label htmlFor="solar-power">Sonkrag Installasie (+R70 000)</Label>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500 mb-4">
                Total Price: <span className="font-semibold text-black">{calculateTotalPrice()}</span>
              </p>
              <Button type="submit" className="w-full bg-minofmeer-500 hover:bg-minofmeer-600">
                Confirm Pre-order
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderDialog;