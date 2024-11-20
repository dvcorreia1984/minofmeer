import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "standard",
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a random order number between 1000 and 9999
    const orderNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Nuwe Moduler Bestelling #${orderNumber}:\n\nNaam: ${formData.name}\nEpos: ${formData.email}\nTelefoon: ${formData.phone}\nEenheid: ${formData.unit}`
    );

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/27842513952?text=${whatsappMessage}`, '_blank');

    // Create mailto link with order details
    const mailtoSubject = encodeURIComponent("Nuwe Moduler Bestelling");
    const mailtoBody = encodeURIComponent(
      `Nuwe Moduler Bestelling #${orderNumber}:\n\nNaam: ${formData.name}\nEpos: ${formData.email}\nTelefoon: ${formData.phone}\nEenheid: ${formData.unit}`
    );
    window.location.href = `mailto:yolande@voortrek.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;

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
          <h1 className="text-3xl font-bold mb-8">Bestel jou Moduler Eenheid</h1>
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
                  <SelectItem value="premium">Premium Moduler (R650 000)</SelectItem>
                  <SelectItem value="luxury">Luukse Moduler (R850 000)</SelectItem>
                </SelectContent>
              </Select>
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