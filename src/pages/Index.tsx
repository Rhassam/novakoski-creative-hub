
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import backgroundImage from "/lovable-uploads/9f4fe2ac-86a3-44bf-ab5c-466be35b79be.png";
import logoImage from "/lovable-uploads/631d3035-04e7-46f1-9c2d-20969e91ea79.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      // Header scroll effect
      setIsScrolled(window.scrollY > 50);

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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-['Montserrat_Alternates',sans-serif] bg-[#fffcff] text-[#1C1C1C]">
      {/* Header */}
      <header className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-8 border-b border-[#729ffa] bg-[#fffcff]/95",
        isScrolled && "py-4 shadow-md shadow-[#729ffa]/15"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold relative transition-transform duration-300 hover:scale-105">
            <img src={logoImage} alt="Sam Novakoski" className="h-10" />
          </div>
          
          {/* Mobile Menu Button */}
          <div 
            className="md:hidden text-[#729ffa] text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </div>
          
          {/* Navigation */}
          <nav className={cn(
            "fixed md:relative top-0 h-screen md:h-auto w-[280px] md:w-auto bg-[#fffcff] md:bg-transparent flex flex-col md:flex-row items-start md:items-center pt-20 md:pt-0 px-8 md:px-0 transition-all duration-300 ease-in-out z-[49] shadow-[-5px_0_15px_rgba(114,159,250,0.1)] md:shadow-none",
            mobileMenuOpen ? "right-0" : "-right-[300px]",
            "md:right-0"
          )}>
            <NavItem label="Início" sectionId="home" isActive={activeSection === "home"} onClick={() => scrollToSection("home")} />
            <NavItem label="Fotografia" sectionId="photography" isActive={activeSection === "photography"} onClick={() => scrollToSection("photography")} />
            <NavItem label="Vídeos" sectionId="video" isActive={activeSection === "video"} onClick={() => scrollToSection("video")} />
            <NavItem label="Motion Design" sectionId="motion" isActive={activeSection === "motion"} onClick={() => scrollToSection("motion")} />
            <NavItem label="Criativos" sectionId="creative" isActive={activeSection === "creative"} onClick={() => scrollToSection("creative")} />
            <NavItem label="Sobre" sectionId="about" isActive={activeSection === "about"} onClick={() => scrollToSection("about")} />
            <NavItem label="Contato" sectionId="contact" isActive={activeSection === "contact"} onClick={() => scrollToSection("contact")} />
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="home" className="relative flex items-center min-h-screen bg-[#729ffa]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-[#729ffa]/60"></div>
        
        <div className="container mx-auto px-6 relative z-10 animate-fadeIn">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#fffcff]">
              Criando histórias visuais que impressionam
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-[#fffcff]">
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
      
      {/* Photography Section */}
      <PortfolioSection
        id="photography"
        title="Fotografia"
        description="Capturo histórias através das lentes, criando imagens que expressam emoção."
        isVisible={sectionsVisible.photography}
        projects={[
          {
            title: "Série Eventos",
            category: "Eventos",
            description: "Criando histórias envolventes com a fotografia de eventos",
            imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          },
          {
            title: "Retratos Urbanos",
            category: "Retratos",
            description: "Capturando personalidades em cenários urbanos",
            imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          },
          {
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
            title: "Canal Leandro Ladeira",
            category: "Vídeos para Youtube",
            description: "Vídeos para youtube com técnicas avançadas de narrativa e edição profissional",
            imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          },
          {
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
            title: "Criativos para divulgação de infoprodutos",
            category: "Infoprodutos",
            description: "Criativos produzidos para captação de leads com visuais impactantes.",
            imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          }
        ]}
      />
      
      {/* About Section */}
      <section 
        id="about" 
        className={cn(
          "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5",
          sectionsVisible.about && "opacity-100 translate-y-0"
        )}
      >
        <div className="container mx-auto px-6">
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
            <div className="relative h-[450px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg shadow-[#729ffa]/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#729ffa]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Sam Novakoski" 
                className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-[1.03]" 
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6 relative pb-4 text-[#729ffa]">
                Olá, sou Sam Novakoski
                <span className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-[#729ffa]"></span>
              </h3>
              <p className="mb-4">
                Sou um profissional audiovisual com mais de 7 anos de experiência na criação de conteúdo visual. Meu trabalho busca combinar aspectos técnicos e artísticos para criar narrativas visuais impactantes.
              </p>
              <p className="mb-4">
                Com formação em Marketing e especializações em Edição de Vídeo e Motion Design, desenvolvi projetos para diversos clientes e marcas ao longo da minha carreira, sempre buscando inovação e excelência técnica em fotografia, edição de vídeo e motion design.
              </p>
              <p>
                Minha abordagem criativa combina uma visão contemporânea e moderna, resultando em um estilo único e reconhecível em cada trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        className={cn(
          "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5",
          sectionsVisible.contact && "opacity-100 translate-y-0"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block relative mb-4 text-[#729ffa]">
              Contato
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#729ffa]"></span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#1C1C1C]">
              Gostou do meu trabalho? Entre em contato para conversarmos sobre o seu projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 relative pb-4 text-[#729ffa]">
                  Vamos trabalhar juntos
                  <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#729ffa]"></span>
                </h3>
                <p className="mb-6">
                  Estou sempre aberto a novos projetos e oportunidades criativas. Use um dos canais abaixo para entrar em contato.
                </p>
              </div>
              
              <ContactItem 
                icon={<Mail className="text-[#729ffa] transition-colors duration-300 group-hover:text-[#fffcff]" />} 
                title="Email" 
                content="samcontato@proton.me" 
              />
              
              <ContactItem 
                icon={<Phone className="text-[#729ffa] transition-colors duration-300 group-hover:text-[#fffcff]" />} 
                title="Telefone" 
                content="+55 (99) 99118-1892" 
              />
              
              <ContactItem 
                icon={<MapPin className="text-[#729ffa] transition-colors duration-300 group-hover:text-[#fffcff]" />} 
                title="Localização" 
                content="Taguatinga, DF - Brasil" 
              />
            </div>
            
            <div>
              <form action="https://formspree.io/f/xpwdkwjl" method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 bg-[#fffcff] border border-[#efefef] rounded-md focus:outline-none focus:border-[#729ffa] focus:shadow-md focus:shadow-[#729ffa]/20 transition-all duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 bg-[#fffcff] border border-[#efefef] rounded-md focus:outline-none focus:border-[#729ffa] focus:shadow-md focus:shadow-[#729ffa]/20 transition-all duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-4 bg-[#fffcff] border border-[#efefef] rounded-md focus:outline-none focus:border-[#729ffa] focus:shadow-md focus:shadow-[#729ffa]/20 transition-all duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-4 bg-[#fffcff] border border-[#efefef] rounded-md min-h-[150px] resize-y focus:outline-none focus:border-[#729ffa] focus:shadow-md focus:shadow-[#729ffa]/20 transition-all duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#729ffa] text-[#fffcff] px-8 py-3 rounded font-medium tracking-wider overflow-hidden relative hover:bg-[#5a87e6] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#729ffa]/30 transition-all duration-300"
                >
                  <span className="relative z-10">Enviar Mensagem</span>
                  <span className="absolute top-0 -left-full w-full h-full bg-white/10 transform transition-all duration-400 hover:left-full"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-[#efefef] text-center">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <div className="text-2xl font-bold mb-4">
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
    </div>
  );
};

// Component for navigation items
const NavItem = ({ 
  label, 
  sectionId, 
  isActive, 
  onClick 
}: { 
  label: string, 
  sectionId: string, 
  isActive: boolean, 
  onClick: () => void 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-[#1C1C1C] uppercase text-sm tracking-wider font-medium md:ml-8 my-4 md:my-0 py-1 relative",
        isActive && "text-[#729ffa]"
      )}
    >
      {label}
      <span 
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-[#729ffa] transition-all duration-300",
          isActive && "w-full"
        )}
      ></span>
    </button>
  );
};

// Component for portfolio sections
const PortfolioSection = ({ 
  id, 
  title, 
  description, 
  projects, 
  isVisible 
}: { 
  id: string, 
  title: string, 
  description: string, 
  projects: {
    title: string,
    category: string,
    description: string,
    imageUrl: string
  }[], 
  isVisible: boolean 
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative mb-4 text-[#729ffa]">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#729ffa]"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#1C1C1C]">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full max-w-sm h-[350px] rounded-lg overflow-hidden shadow-lg shadow-[#729ffa]/10 border border-[#efefef] bg-[#fffcff] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#729ffa]/20"
            >
              <div className="h-[65%] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#729ffa]/0 hover:bg-[#729ffa]/20 transition-all duration-400 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="text-[#729ffa] text-xs uppercase tracking-wider font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-[#729ffa]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#1C1C1C] mb-4">
                  {project.description}
                </p>
                <Link to="#" className="text-sm font-medium text-[#729ffa] inline-flex items-center transition-all duration-300 hover:text-[#5a87e6]">
                  Ver Projeto <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for contact items
const ContactItem = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode, 
  title: string, 
  content: string 
}) => {
  return (
    <div className="flex items-center mb-4 group transition-transform duration-300 hover:translate-x-1">
      <div className="w-10 h-10 rounded-full bg-[#efefef] flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-[#729ffa] group-hover:rotate-[360deg]">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

// Component for social links
const SocialLink = ({ icon }: { icon: string }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-[#efefef] flex items-center justify-center transition-all duration-400 hover:bg-[#729ffa] hover:-translate-y-1 hover:rotate-[10deg] hover:shadow-lg hover:shadow-[#729ffa]/30"
    >
      <span className="transition-transform duration-300 hover:scale-110 group-hover:text-[#fffcff]">
        {icon}
      </span>
    </a>
  );
};

// Component for footer nav items
const FooterNavItem = ({ label, onClick }: { label: string, onClick: () => void }) => {
  return (
    <li className="mx-4 my-2">
      <button 
        onClick={onClick}
        className="text-[#1C1C1C] transition-colors duration-300 hover:text-[#729ffa]"
      >
        {label}
      </button>
    </li>
  );
};

export default Index;
