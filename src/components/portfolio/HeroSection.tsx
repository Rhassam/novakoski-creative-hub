
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import backgroundImage from "/lovable-uploads/9f4fe2ac-86a3-44bf-ab5c-466be35b79be.png";

// Slideshow background images for hero section only
const heroSlides = [
  backgroundImage,
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
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
              currentBgIndex === index ? "opacity-30" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="absolute inset-0 bg-[#729ffa]/60 z-[-1]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 animate-fadeIn">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#fffcff]">
            Criando histórias visuais que impressionam
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-[#fffcff] text-justify">
            Fotógrafo, Editor de Vídeo e Motion Designer focado em transformar conceitos criativos em experiências visuais memoráveis.
          </p>
          <button
            onClick={() => scrollToSection("photography")}
            className="bg-[#fffcff] text-[#729ffa] px-8 py-3 rounded font-medium tracking-wider overflow-hidden relative hover:bg-[#f0ecf0] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#729ffa]/30 transition-all duration-300"
          >
            <span className="relative z-10">Ver Portfólio</span>
            <span className="absolute top-0 -left-full w-full h-full bg-[#729ffa]/20 transform transition-all duration-400 hover:left-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
