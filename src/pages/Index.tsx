import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Voortrek</h1>
        <p className="text-center text-gray-600 mb-16">
          Kwaliteit houtwerk en modulêre behuising oplossings
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Modulêre Behuising</CardTitle>
              <CardDescription>
                Bekostigbaar en selfstandige woon of werk oplossings
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img 
                src="/huis1.webp" 
                alt="Modulêre Behuising" 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <Link to="/moduler">
                <Button size="lg">
                  Verken Modulêre Opsies
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Houtwerk</CardTitle>
              <CardDescription>
                Handgemaakte meubels en pasgemaakte kabinetwerk
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img 
                src="/kombuis.jpg" 
                alt="Houtwerk" 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <Link to="/houtwerk">
                <Button size="lg">
                  Verken Houtwerk
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;