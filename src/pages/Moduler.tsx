import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Moduler = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <h1 className="text-4xl font-bold mb-8">Modulêre Behuising</h1>
        <p className="text-gray-600 mb-12">
          Bekostigbaar en selfstandige woon of werk oplossings
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <img 
              src="/huis1.webp" 
              alt="Modulêre Huis 1" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Standaard Modulêr</h3>
            <p className="text-gray-600 mb-4">
              Ons basiese modulêre eenheid, perfek vir 'n klein gesin of kantoorspasie.
            </p>
            <Link to="/contact">
              <Button className="w-full">Kontak Ons</Button>
            </Link>
          </Card>

          <Card className="p-6">
            <img 
              src="/huis2.webp" 
              alt="Modulêre Huis 2" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Luukse Modulêr</h3>
            <p className="text-gray-600 mb-4">
              'n Groter modulêre oplossing met meer luukse afwerkings en spasie.
            </p>
            <Link to="/contact">
              <Button className="w-full">Kontak Ons</Button>
            </Link>
          </Card>

          <Card className="p-6">
            <img 
              src="/hero.webp" 
              alt="Modulêre Huis 3" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pasgemaakte Modulêr</h3>
            <p className="text-gray-600 mb-4">
              Laat ons help om jou droom modulêre huis te ontwerp volgens jou spesifikasies.
            </p>
            <Link to="/contact">
              <Button className="w-full">Kontak Ons</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Moduler;