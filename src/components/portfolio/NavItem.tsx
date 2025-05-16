
import { cn } from "@/lib/utils";

type NavItemProps = { 
  label: string;
  sectionId: string;
  isActive: boolean;
  onClick: () => void;
};

const NavItem = ({ label, sectionId, isActive, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "md:text-[#1C1C1C] text-[#1C1C1C] uppercase text-sm tracking-wider font-medium md:ml-8 my-4 md:my-0 py-1 relative",
        isActive && "text-[#729ffa]"
      )}
    >
      {label}
      <span 
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-[#729ffa] transition-all duration-300 hover:w-full",
          isActive && "w-full"
        )}
      ></span>
    </button>
  );
};

export default NavItem;
