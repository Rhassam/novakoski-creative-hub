
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import { scrollToSectionCentered } from "@/lib/scrollHelper";

type HeaderProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [nameCompressed, setNameCompressed] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effects for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setNameCompressed(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside of mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('[data-menu-toggle]')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);
  
  // Handle navigation item click to close menu
  const handleNavClick = (sectionId: string) => {
    scrollToSectionCentered(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-8 border-b border-[#729ffa]",
      "bg-white", // Always white background
      isScrolled ? "py-4 shadow-md shadow-[#729ffa]/15" : ""
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 transition-all duration-300">
          {/* Logo placeholder - user can replace with actual logo */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img 
              src="/logo-placeholder.png" 
              alt="Sam Novakoski Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
          <div className="overflow-hidden transition-all duration-500">
            <div className={cn(
              "font-bold relative transition-all duration-500 whitespace-nowrap flex items-center",
              "text-[#1C1C1C] font-['Montserrat_Alternates',sans-serif]",
              nameCompressed ? "text-xl" : "text-2xl"
            )}>
              <div className={cn(
                "flex overflow-hidden transition-all duration-500",
                nameCompressed ? "w-[1ch]" : "w-[4ch]"
              )}>
                <span className="text-[#729ffa] min-w-[1ch] flex-shrink-0">S</span>
                <span className={cn(
                  "transition-all duration-500 origin-left",
                  nameCompressed ? "max-w-0 opacity-0 scale-x-0" : "max-w-[3ch] opacity-100 scale-x-100"
                )}>
                  am
                </span>
              </div>
              <div className="mx-1"></div> {/* Espaço entre os nomes */}
              <div className={cn(
                "flex overflow-hidden transition-all duration-500",
                nameCompressed ? "w-[1ch]" : "w-[9ch]"
              )}>
                <span className="text-[#729ffa] min-w-[1ch] flex-shrink-0">N</span>
                <span className={cn(
                  "transition-all duration-500 origin-left",
                  nameCompressed ? "max-w-0 opacity-0 scale-x-0" : "max-w-[8ch] opacity-100 scale-x-100"
                )}>
                  ovakoski
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div 
          data-menu-toggle
          className="md:hidden text-[#1C1C1C] text-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:text-[#729ffa]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </div>
        
        {/* Navigation with hover effect */}
        <nav 
          ref={navRef}
          className={cn(
            "fixed md:relative top-0 h-screen md:h-auto w-[280px] md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-start md:items-center pt-20 md:pt-0 px-8 md:px-0 transition-all duration-300 ease-in-out z-[49] shadow-[-5px_0_15px_rgba(114,159,250,0.1)] md:shadow-none",
            mobileMenuOpen ? "right-0" : "-right-[300px]",
            "md:right-0"
          )}
        >
          {/* Close button for mobile menu (visible only on mobile) */}
          <button
            className="absolute top-6 right-6 text-[#1C1C1C] md:hidden hover:text-[#729ffa] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <NavItem 
            label="Início" 
            sectionId="home" 
            isActive={activeSection === "home"} 
            onClick={() => handleNavClick("home")} 
          />
          <NavItem 
            label="Fotografia" 
            sectionId="photography" 
            isActive={activeSection === "photography"} 
            onClick={() => handleNavClick("photography")} 
          />
          <NavItem 
            label="Vídeos" 
            sectionId="video" 
            isActive={activeSection === "video"} 
            onClick={() => handleNavClick("video")} 
          />
          <NavItem 
            label="Motion Design" 
            sectionId="motion" 
            isActive={activeSection === "motion"} 
            onClick={() => handleNavClick("motion")} 
          />
          <NavItem 
            label="Criativos" 
            sectionId="creative" 
            isActive={activeSection === "creative"} 
            onClick={() => handleNavClick("creative")} 
          />
          <NavItem 
            label="Sobre" 
            sectionId="about" 
            isActive={activeSection === "about"} 
            onClick={() => handleNavClick("about")} 
          />
          <NavItem 
            label="Contato" 
            sectionId="contact" 
            isActive={activeSection === "contact"} 
            onClick={() => handleNavClick("contact")} 
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
