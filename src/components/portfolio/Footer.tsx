
import SocialLink from "./SocialLink";
import FooterNavItem from "./FooterNavItem";

type FooterProps = {
  scrollToSection: (sectionId: string) => void;
};

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="py-12 border-t border-[#efefef] text-center relative bg-[#fffcff]/80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="text-2xl font-bold mb-4 font-['Montserrat_Alternates',sans-serif]">
            Sam<span className="text-[#729ffa]">Novakoski</span>
          </div>
          <p>Criando experiências visuais impactantes</p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <SocialLink icon="📸" />
            <SocialLink icon="🎬" />
            <SocialLink icon="👤" />
            <SocialLink icon="🔗" />
          </div>
        </div>
        
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center">
            <FooterNavItem label="Início" onClick={() => scrollToSection("home")} />
            <FooterNavItem label="Fotografia" onClick={() => scrollToSection("photography")} />
            <FooterNavItem label="Vídeos" onClick={() => scrollToSection("video")} />
            <FooterNavItem label="Motion Design" onClick={() => scrollToSection("motion")} />
            <FooterNavItem label="Criativos" onClick={() => scrollToSection("creative")} />
            <FooterNavItem label="Sobre" onClick={() => scrollToSection("about")} />
            <FooterNavItem label="Contato" onClick={() => scrollToSection("contact")} />
          </ul>
        </div>
        
        <div className="text-sm">
          &copy; 2025 Sam Novakoski. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
