import { Check } from "lucide-react";

interface FeaturesProps {
  features: string[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-voortrekmoduler-500" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default Features;