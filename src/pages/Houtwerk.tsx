import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Houtwerk = () => {
  const kitchenServices = [
    {
      title: "Pasgemaakte Kombuiskaste",
      description: "Luukse kombuiskaste volgens u spesifikasies en styl voorkeure.",
      features: ["Hoë kwaliteit materiale", "Moderne ontwerpe", "Duursame afwerking"]
    },
    {
      title: "Kombuiseilande",
      description: "Funksionele en stylvolle kombuiseilande wat ekstra werkspasie en stoorplek bied.",
      features: ["Geïntegreerde berging", "Unieke ontwerpe", "Praktiese werkspasie"]
    },
    {
      title: "Ingeboude Toerusting",
      description: "Pasgemaakte oplossings vir ingeboude kombuistoerusting.",
      features: ["Naatlose integrasie", "Maksimum spasiebenutting", "Professionele installasie"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <h1 className="text-4xl font-bold text-center mb-6">Voortrek Houtwerk</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ons spesialiseer in die ontwerp en vervaardiging van luukse pasgemaakte kombuise. 
          Met ons jarelange ervaring verseker ons dat elke kombuis 'n perfekte kombinasie 
          van funksionaliteit en styl bied.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kitchenServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hoekom Voortrek Houtwerk?</h2>
            <ul className="space-y-2 text-gray-600">
              <li>✓ 15+ jaar ervaring in kombuisontwerp</li>
              <li>✓ Hoë kwaliteit vakmanskap</li>
              <li>✓ Persoonlike diens en aandag</li>
              <li>✓ Gratis konsultasie en kwotasies</li>
              <li>✓ 5-jaar waarborg op alle installasies</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Kontak Ons</h2>
            <p className="text-gray-600">
              Skakel ons vandag nog vir 'n gratis konsultasie en kwotasie. 
              Ons span is gereed om u droomkombuis 'n realiteit te maak.
            </p>
            <div className="mt-4 text-gray-600">
              <p>Tel: +27 (0) 21 123 4567</p>
              <p>E-pos: info@voortrek.co.za</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houtwerk;