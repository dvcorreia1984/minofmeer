import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "standard",
    solarPower: false
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a random order number between 1000 and 9999
    const orderNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    // Calculate total price
    let basePrice = 450000; // Standard price
    if (formData.unit === "luxury") basePrice = 550000;
    if (formData.unit === "custom") basePrice = 650000;
    if (formData.solarPower) basePrice += 80000;

    // Format the message
    const message = `Nuwe Moduler Bestelling #${orderNumber}:\n\nNaam: ${formData.name}\nEpos: ${formData.email}\nTelefoon: ${formData.phone}\nEenheid: ${formData.unit}\nSonkrag: ${formData.solarPower ? 'Ja' : 'Nee'}\nTotale Prys: R${basePrice.toLocaleString()}`;

    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Use WhatsApp for mobile
      const whatsappMessage = encodeURIComponent(message);
      window.open(`https://wa.me/27842513952?text=${whatsappMessage}`, '_blank');
    } else {
      // Use email for desktop
      const mailtoSubject = encodeURIComponent("Nuwe Moduler Bestelling");
      const mailtoBody = encodeURIComponent(message);
      window.location.href = `mailto:yolande@voortrek.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;
    }

    toast({
      title: "Bestelling gestuur!",
      description: "Ons sal binnekort met u in verbinding tree.",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="section-container">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">Bestel nou jou Modulêre eenheid</h1>
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
              <Label htmlFor="phone">Telefoon</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Kies Eenheid</Label>
              <Select
                value={formData.unit}
                onValueChange={(value) => setFormData({ ...formData, unit: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Kies 'n eenheid" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standaard Moduler (R450 000)</SelectItem>
                  <SelectItem value="luxury">Luukse Moduler (R550 000)</SelectItem>
                  <SelectItem value="custom">Pasmaak Moduler (R650 000)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="solarPower"
                checked={formData.solarPower}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, solarPower: checked as boolean })
                }
              />
              <Label htmlFor="solarPower">Sonkrag installasie (+R80 000)</Label>
            </div>
            <Button type="submit" className="w-full">
              Stuur Bestelling
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;