
type FooterNavItemProps = {
  label: string;
  onClick: () => void;
};

const FooterNavItem = ({ label, onClick }: FooterNavItemProps) => {
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

export default FooterNavItem;
