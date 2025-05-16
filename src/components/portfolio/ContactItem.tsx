
import { ReactNode } from "react";

type ContactItemProps = { 
  icon: ReactNode;
  title: string;
  content: string;
};

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-[#efefef] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#729ffa] group-hover:rotate-[360deg] shadow-md">
        {icon}
      </div>
      <div className="text-center">
        <h4 className="font-medium">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactItem;
