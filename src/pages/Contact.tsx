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
      title: "Inquiry Submitted",
      description: "We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    {
      question: "How long does it take to set up a MinOfMeer home?",
      answer: "Typically, the entire process from order to move-in takes 8-12 weeks. This includes manufacturing, transportation, and on-site assembly."
    },
    {
      question: "What customization options are available?",
      answer: "We offer various customization options including interior finishes, kitchen layouts, additional storage solutions, and exterior cladding options."
    },
    {
      question: "What's included in the price?",
      answer: "Our prices include the complete unit, delivery, installation, and basic site works. Additional costs may apply for specific site requirements or custom features."
    },
    {
      question: "Are MinOfMeer homes eco-friendly?",
      answer: "Yes! Our homes are built with sustainable materials, feature energy-efficient designs, and our manufacturing process minimizes waste."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <BackButton />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Get in touch with us to learn more about MinOfMeer homes or to start your journey to modular living.
            </p>
            
            <div className="mb-8">
              <Button 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.open(`https://wa.me/27842513952`, '_blank')}
              >
                <Phone className="h-4 w-4" />
                Chat with us on WhatsApp
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>

            <div className="mt-8">
              <Button variant="outline" className="w-full">
                <a href="/brochure.pdf" download>Download Brochure</a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
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