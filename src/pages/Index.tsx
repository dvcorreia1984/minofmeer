import Hero from "@/components/Hero";
import UnitSection from "@/components/UnitSection";
import Gallery from "@/components/Gallery";

const Index = () => {
  const oneBedroom = {
    title: "31.5 m² Een-Slaapkamer Eenheid",
    description: " 'n Ruim eenheid met 'n aparte slaapkamer, volledig toegeruste kombuis met stoof en oond, badkamer, en leef-/eetarea. Hierdie eenheid is ideaal vir kliënte wat 'n bietjie meer spasie en gerief benodig.",
    price: "R450,000",
    imageUrl: "/huis1.webp",
    features: [
      "Volledig-toegeruste mini-kombuis",
      "Moderne badkamer met stort",
      "Aparte slaapkamer",
      "Ingeboude stoorspasie",
      "Kragbesparende toestelle",
      "Hoe kwaliteit afwerking",
      "Ruim stoeparea",
      "Kontemporêre styl",
    ],
    specs: {
      grootte: "31.5 m²",
      slaapkamers: "1",
      badkamer: "Volledig",
      kombuis: "Mini-kombuis",
    },
  };

  const singleUnit = {
    title: "20 m² Enkel eenheid",
    description: "'n Kompakte eenheid met 'n ingeboude tweeplaat-gasstofie in die kombuis, badkamer, en leefarea. Hierdie eenheid bied 'n doeltreffende en bekostigbare oplossing vir enkelbewoning of kleiner ruimtes.",
    price: "R350,000",
    imageUrl: "/huis2.webp",
    features: [
      "Mini-kombuis",
      "Gasstoof",
      "Kompakte badkamer",
      "Veeldoelige leefarea",
      "Veeldoelige meubels",
      "Moderne afwerkings",
    ],
    specs: {
      grootte: "20 m²",
      slaapkamers: "Deel van leefarea",
      badkamer: "Kompak",
      kombuis: "Mini-kombuis",
    },
  };

  return (
    <main className="bg-white">
      <Hero />
      <div id="units">
        <UnitSection {...oneBedroom} />
        <UnitSection {...singleUnit} reversed />
      </div>
      <Gallery />
    </main>
  );
};

export default Index;