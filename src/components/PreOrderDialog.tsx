import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface PreOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  unitName: string;
  price: string;
}

const PreOrderDialog = ({ open, onOpenChange, unitName, price }: PreOrderDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bestelling ingedien!",
      description: "Ons sal jou kontak met meer besonderhede oor MinOfMeer behuising.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Voorafbestelling {unitName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Volle Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Epos</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Kontak besonderhede</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-4">
              Total Price: <span className="font-semibold text-black">{price}</span>
            </p>
            <Button type="submit" className="w-full bg-minofmeer-500 hover:bg-minofmeer-600">
              Confirm Pre-order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderDialog;