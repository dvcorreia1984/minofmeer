import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("units");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
        <img
          src="/hero.webp"
          alt="Modern modular home"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Moduler
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl animate-fade-in">
          Bekostigbaar en selfstandige woon of werk oplossings.
        </p>
        <button
          onClick={scrollToNextSection}
          className="animate-fade-in hover:text-minofmeer-300 transition-colors"
          aria-label="Scroll to units"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;