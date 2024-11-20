import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <div className="flex items-center justify-center gap-6 bg-[url('/wood-texture-light.webp')] bg-cover p-8 rounded-lg">
            <img 
              src="/voortreklogo.png" 
              alt="Voortrek Logo" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Voortrek Houtwerk</h1>
              <p className="text-gray-600 italic mt-2">
                Kwaliteit houtwerk en modulêre behuising oplossings
              </p>
            </div>
          </div>
        </div>
        
        <p className="max-w-3xl mx-auto mb-16 text-lg leading-relaxed text-gray-700 border-l-4 border-primary pl-6">
          Ons spesialiseer in die vervaardiging van hoë-gehalte houtwerk en modulêre behuising oplossings. Met ons ervaring en vakmanskap verseker ons dat elke projek aan die hoogste standaarde voldoen.
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