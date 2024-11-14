import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Advantages = () => {
  const benefits = [
    {
      title: "Fast Setup",
      description: "Complete installation within weeks, not months. Our modular units are pre-fabricated and ready for quick assembly on site."
    },
    {
      title: "Cost Efficiency",
      description: "Fixed pricing protects against construction cost fluctuations. Factory-controlled production reduces waste and labor costs."
    },
    {
      title: "Quality Control",
      description: "Every unit undergoes rigorous quality checks in our controlled factory environment, ensuring consistent high standards."
    },
    {
      title: "Eco-Friendly",
      description: "Sustainable materials and efficient construction processes minimize environmental impact. Energy-efficient design reduces long-term costs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Advantages of Modular Living</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-minofmeer-500" />
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-minofmeer-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality</h2>
          <p className="text-gray-600 mb-4">
            Every MinOfMeer home is built to exceed industry standards, with full certification compliance
            and rigorous quality control throughout the manufacturing process.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-minofmeer-500" />
              Full certification compliance
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-minofmeer-500" />
              Premium materials and finishes
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-minofmeer-500" />
              Customization options available
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-minofmeer-500" />
              10-year structural warranty
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;