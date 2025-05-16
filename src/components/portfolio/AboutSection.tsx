
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  isVisible: boolean;
};

const AboutSection = ({ isVisible }: AboutSectionProps) => {
  // Mouse parallax effect for about section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (aboutImageRef.current) {
      const { left, top, width, height } = aboutImageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <section 
      id="about" 
      className={cn(
        "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5 relative my-16",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="absolute inset-0 bg-white shadow-lg rounded-lg z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative mb-4 text-[#729ffa]">
            Sobre Mim
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#729ffa]"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#1C1C1C]">
            Conheça um pouco da minha trajetória e do meu processo criativo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={aboutImageRef}
            className="relative h-[450px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg shadow-[#729ffa]/20"
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#729ffa]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
              alt="Sam Novakoski" 
              className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-[1.03]"
              style={{
                transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px) scale(1.1)`
              }}
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 relative pb-4 text-[#729ffa]">
              Olá, sou Sam Novakoski
              <span className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-[#729ffa]"></span>
            </h3>
            <p className="mb-4 text-justify">
              Sou um profissional audiovisual com mais de 7 anos de experiência na criação de conteúdo visual. Meu trabalho busca combinar aspectos técnicos e artísticos para criar narrativas visuais impactantes.
            </p>
            <p className="mb-4 text-justify">
              Com formação em Marketing e especializações em Edição de Vídeo e Motion Design, desenvolvi projetos para diversos clientes e marcas ao longo da minha carreira, sempre buscando inovação e excelência técnica em fotografia, edição de vídeo e motion design.
            </p>
            <p className="text-justify">
              Minha abordagem criativa combina uma visão contemporânea e moderna, resultando em um estilo único e reconhecível em cada trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
