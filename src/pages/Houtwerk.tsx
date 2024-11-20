import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

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
    <div className="min-h-screen bg-gradient-to-b from-white to-voortrek-brown/10">
      <div className="section-container py-24">
        <BackButton />
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/voortreklogo.png"
            alt="Voortrek Houtwerk Logo"
            className="w-32 h-32 mb-6"
          />
          <h1 className="text-4xl font-bold text-voortrek-navy mb-6">Voortrek Houtwerk</h1>
          <p className="text-center text-gray-600 max-w-2xl">
            Ons spesialiseer in die ontwerp en vervaardiging van luukse pasgemaakte kombuise. 
            Met ons jarelange ervaring verseker ons dat elke kombuis 'n perfekte kombinasie 
            van funksionaliteit en styl bied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kitchenServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-voortrek-brown/20">
              <CardHeader className="bg-voortrek-navy/5">
                <CardTitle className="text-voortrek-navy">{service.title}</CardTitle>
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
          <div className="space-y-4 p-6 rounded-lg bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-voortrek-navy">Hoekom Voortrek Houtwerk?</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-voortrek-orange">✓</span> 15+ jaar ervaring in kombuisontwerp
              </li>
              <li className="flex items-center gap-2">
                <span className="text-voortrek-orange">✓</span> Hoë kwaliteit vakmanskap
              </li>
              <li className="flex items-center gap-2">
                <span className="text-voortrek-orange">✓</span> Persoonlike diens en aandag
              </li>
              <li className="flex items-center gap-2">
                <span className="text-voortrek-orange">✓</span> Gratis konsultasie en kwotasies
              </li>
              <li className="flex items-center gap-2">
                <span className="text-voortrek-orange">✓</span> 5-jaar waarborg op alle installasies
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-voortrek-navy text-white">
            <h2 className="text-2xl font-semibold mb-4">Kontak Ons</h2>
            <p className="mb-6">
              Skakel ons vandag nog vir 'n gratis konsultasie en kwotasie. 
              Ons span is gereed om u droomkombuis 'n realiteit te maak.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-voortrek-orange">•</span> Tel: 084-251-3952
              </p>
              <p className="flex items-center gap-2">
                <span className="text-voortrek-orange">•</span> E-pos: yolande@voortrek.co.za
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houtwerk;
