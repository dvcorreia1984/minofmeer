import { useState } from "react";
import Features from "./Features";
import Specifications from "./Specifications";
import PreOrderButton from "./PreOrderButton";
import PreOrderDialog from "./PreOrderDialog";

interface UnitSectionProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
  specs: {
    grootte: string;
    slaapkamers: string;
    badkamer: string;
    kombuis: string;
  };
  reversed?: boolean;
}

const UnitSection = ({
  title,
  description,
  price,
  imageUrl,
  features,
  specs,
  reversed = false,
}: UnitSectionProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? "md:grid-flow-dense" : ""}`}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="text-lg text-gray-600">{description}</p>
            </div>
            <Specifications specs={specs} />
            <Features features={features} />
            <PreOrderButton price={price} onClick={() => setIsDialogOpen(true)} />
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <PreOrderDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        unitName={title}
        price={price}
      />
    </section>
  );
};

export default UnitSection;