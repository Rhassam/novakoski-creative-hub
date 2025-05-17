import { useEffect, useState } from "react";
import backgroundImage from "/lovable-uploads/9f4fe2ac-86a3-44bf-ab5c-466be35b79be.png";

// Import components
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

import { scrollToSectionCentered } from "@/lib/scrollHelper";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sectionsVisible, setSectionsVisible] = useState<Record<string, boolean>>({
    photography: false,
    video: false,
    motion: false,
    creative: false,
    about: false,
    contact: false,
  });

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Check which section is in view
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") || "";
        
        if (sectionTop < window.innerHeight * 0.5 && sectionTop > -section.clientHeight * 0.5) {
          setActiveSection(sectionId);
        }
        
        if (sectionTop < window.innerHeight * 0.75) {
          setSectionsVisible(prev => ({
            ...prev,
            [sectionId]: true
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    scrollToSectionCentered(sectionId);
  };

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] text-[#1C1C1C] relative">
      {/* Sam Novakoski background for portfolio sections */}
      <div className="fixed inset-0 w-full h-full z-[-2]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.15 }}
        />
        <div className="absolute inset-0 bg-[#729ffa]/30 z-[-1]"></div>
      </div>
      
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      {/* Portfolio Sections */}
      <div className="space-y-8 mt-8">
        {/* Photography Section */}
        <PortfolioSection
          id="photography"
          title="Fotografia"
          description="Capturo histórias através das lentes, criando imagens que expressam emoção."
          isVisible={sectionsVisible.photography}
          projects={[
            {
              id: "serie-eventos",
              title: "Série Eventos",
              category: "Eventos",
              description: "Criando histórias envolventes com a fotografia de eventos",
              imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            },
            {
              id: "retratos-urbanos",
              title: "Retratos Urbanos",
              category: "Retratos",
              description: "Capturando personalidades em cenários urbanos",
              imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            },
            {
              id: "natureza-viva",
              title: "Natureza Viva",
              category: "Paisagens",
              description: "Explorando a beleza da natureza em suas diferentes formas",
              imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
            },
          ]}
        />
        
        {/* Video Section */}
        <PortfolioSection
          id="video"
          title="Vídeos"
          description="Do conceito à edição final, crio narrativas visuais em movimento que capturam a essência do seu projeto com técnicas profissionais avançadas de edição."
          isVisible={sectionsVisible.video}
          projects={[
            {
              id: "canal-leandro-ladeira",
              title: "Canal Leandro Ladeira",
              category: "Vídeos para Youtube",
              description: "Vídeos para youtube com técnicas avançadas de narrativa e edição profissional",
              imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            },
            {
              id: "documentario-local",
              title: "Documentário Local",
              category: "Documentário",
              description: "Contando histórias reais com sensibilidade e profundidade",
              imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            }
          ]}
        />
        
        {/* Motion Design Section */}
        <PortfolioSection
          id="motion"
          title="Motion Design"
          description="Animações e elementos visuais dinâmicos que dão vida às ideias e elevam a experiência visual do espectador."
          isVisible={sectionsVisible.motion}
          projects={[
            {
              id: "identidade-animada",
              title: "Identidade Animada",
              category: "Animação 2D",
              description: "Logo animations e elementos de marca em movimento.",
              imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            }
          ]}
        />
        
        {/* Creative Section */}
        <PortfolioSection
          id="creative"
          title="Criativos & Anúncios"
          description="Produções que combinam estratégia e estética para transmitir mensagens de forma impactante."
          isVisible={sectionsVisible.creative}
          projects={[
            {
              id: "criativos-infoprodutos",
              title: "Criativos para divulgação de infoprodutos",
              category: "Infoprodutos",
              description: "Criativos produzidos para captação de leads com visuais impactantes.",
              imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            }
          ]}
        />
      </div>
      
      <AboutSection isVisible={sectionsVisible.about} />
      
      <ContactSection isVisible={sectionsVisible.contact} />
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
