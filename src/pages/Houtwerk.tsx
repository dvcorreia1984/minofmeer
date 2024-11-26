import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

const Houtwerk = () => {
  const kitchenServices = [
    {
      title: "Pasgemaakte Kombuiskaste",
      description: "Luukse kombuiskaste volgens u spesifikasies en styl voorkeure.",
      features: ["Hoë kwaliteit materiale", "Moderne ontwerpe", "Duursame afwerking"],
      image: "/kombuis1.webp"
    },
    {
      title: "Kombuiseilande",
      description: "Funksionele en stylvolle kombuiseilande wat ekstra werkspasie en stoorplek bied.",
      features: ["Geïntegreerde berging", "Unieke ontwerpe", "Praktiese werkspasie"],
      image: "/kombuis2.webp"
    },
    {
      title: "Ingeboude Toerusting",
      description: "Pasgemaakte oplossings vir ingeboude kombuistoerusting.",
      features: ["Naatlose integrasie", "Maksimum spasiebenutting", "Professionele installasie"],
      image: "/kombuis3.webp"
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
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
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

          <a href="https://www.facebook.com/voortrekhoutwerk" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow bg-blue-50 border-blue-200 h-full flex items-center justify-center">
              <CardHeader className="flex flex-col items-center justify-center text-center">
                <CardTitle className="text-blue-600 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Volg ons op Facebook
                </CardTitle>
                <CardDescription className="text-center">
                  Sien meer projek foto's en opdaterings op ons Facebook-blad
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Houtwerk;
