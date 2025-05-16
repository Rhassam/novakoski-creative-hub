
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItem from "./NavItem";

type HeaderProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-8 border-b border-[#729ffa]",
      "bg-white", // Always white background
      isScrolled ? "py-4 shadow-md shadow-[#729ffa]/15" : ""
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold relative transition-transform duration-300 hover:scale-105 text-[#1C1C1C] font-['Montserrat_Alternates',sans-serif]">
          Sam<span className="text-[#729ffa]">Novakoski</span>
        </div>
        
        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-[#1C1C1C] text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </div>
        
        {/* Navigation with hover effect */}
        <nav className={cn(
          "fixed md:relative top-0 h-screen md:h-auto w-[280px] md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-start md:items-center pt-20 md:pt-0 px-8 md:px-0 transition-all duration-300 ease-in-out z-[49] shadow-[-5px_0_15px_rgba(114,159,250,0.1)] md:shadow-none",
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
  );
};

export default Header;
