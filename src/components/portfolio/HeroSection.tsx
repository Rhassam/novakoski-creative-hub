
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Slideshow background images for hero section only
const heroSlides = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
];

type HeroSectionProps = {
  scrollToSection: (sectionId: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background slideshow effect for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex items-center min-h-screen">
      {/* Hero section slideshow */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-2000",
              currentBgIndex === index ? "opacity-25" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="absolute inset-0 bg-white/90 z-[-1]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 animate-fadeIn">
        <div className="max-w-3xl ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#729ffa] text-left">
            Criando histórias visuais que impressionam
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-[#002766] text-left">
            Fotógrafo, Editor de Vídeo e Motion Designer focado em transformar conceitos criativos em experiências visuais memoráveis.
          </p>
          <div className="flex justify-start">
            <button
              onClick={() => scrollToSection("photography")}
              className="bg-[#729ffa] text-white px-8 py-3 rounded font-medium tracking-wider overflow-hidden relative hover:bg-[#5a87e6] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#729ffa]/30 transition-all duration-300"
            >
              <span className="relative z-10">Ver Portfólio</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/10 transform transition-all duration-400 hover:left-full"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
