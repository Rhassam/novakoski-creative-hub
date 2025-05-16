
type SocialLinkProps = {
  icon: string;
};

const SocialLink = ({ icon }: SocialLinkProps) => {
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

export default SocialLink;
