import { useState } from "react";
import BackButton from "@/components/BackButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Navraag Gestuur",
      description: "Ons sal binnekort met u in verbinding tree!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    {
      question: "Hoe lank neem dit om 'n MinOfMeer huis op te rig?",
      answer: "Tipies neem die hele proses vanaf bestelling tot intrek 8-12 weke. Dit sluit vervaardiging, vervoer en op-terrein montering in."
    },
    {
      question: "Watter aanpassings-opsies is beskikbaar?",
      answer: "Ons bied verskeie aanpassings-opsies aan, insluitend binne-afwerkings, kombuis-uitleg, addisionele bergingsoplossings, en buite-bekleding opsies."
    },
    {
      question: "Wat is by die prys ingesluit?",
      answer: "Ons pryse sluit die volledige eenheid, aflewering, installasie en basiese terreinwerk in. Addisionele kostes mag van toepassing wees vir spesifieke terreinvereistes of pasgemaakte kenmerke."
    },
    {
      question: "Is MinOfMeer huise omgewingsvriendelik?",
      answer: "Ja! Ons huise word gebou met volhoubare materiale, het energie-doeltreffende ontwerpe, en ons vervaardigingsproses minimaliseer vermorsing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <BackButton />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Kontak Ons</h1>
            <p className="text-gray-600 mb-8">
              Kom in verbinding met ons om meer te leer oor MinOfMeer huise of om jou reis na modulêre leefstyl te begin.
            </p>
            
            <div className="mb-8">
              <Button 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.open(`https://wa.me/27842513952`, '_blank')}
              >
                <Phone className="h-4 w-4" />
                Gesels met ons op WhatsApp
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Naam</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-pos</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefoon</label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Boodskap</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Stuur Boodskap</Button>
            </form>

            <div className="mt-8">
              <Button variant="outline" className="w-full">
                <a href="/brochure.pdf" download>Laai Brosjure Af</a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Gereelde Vrae</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;