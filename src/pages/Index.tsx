import Hero from "@/components/Hero";
import UnitSection from "@/components/UnitSection";

const Index = () => {
  const oneBedroom = {
    title: "31.5 m² One-Bedroom Unit",
    description: "Experience comfortable living in our spacious one-bedroom unit, complete with a fully-equipped mini-kitchen and modern bathroom. Perfect for individuals or couples seeking a premium living space.",
    price: "R1,500,000",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    features: [
      "Fully-equipped mini-kitchen",
      "Modern bathroom with shower",
      "Separate bedroom area",
      "Built-in storage solutions",
      "Energy-efficient appliances",
      "High-quality finishes",
    ],
    specs: {
      size: "31.5 m²",
      bedrooms: "1",
      bathroom: "Full",
      kitchen: "Mini-kitchen",
    },
  };

  const singleUnit = {
    title: "20 m² Single Unit",
    description: "Our compact single unit offers smart living at its finest, featuring a practical kitchenette with gas stovetop and a well-designed bathroom. Ideal for those seeking an efficient, modern living space.",
    price: "R900,000",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    features: [
      "Efficient kitchenette",
      "Gas stovetop",
      "Compact bathroom",
      "Multifunctional living area",
      "Space-saving furniture",
      "Modern fixtures",
    ],
    specs: {
      size: "20 m²",
      bedrooms: "Studio",
      bathroom: "Compact",
      kitchen: "Kitchenette",
    },
  };

  return (
    <main className="bg-white">
      <Hero />
      <div id="units">
        <UnitSection {...oneBedroom} />
        <UnitSection {...singleUnit} reversed />
      </div>
    </main>
  );
};

export default Index;