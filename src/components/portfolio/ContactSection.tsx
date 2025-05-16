
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactItem from "./ContactItem";

type ContactSectionProps = {
  isVisible: boolean;
};

/*teste*/

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <section 
      id="contact" 
      className={cn(
        "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5 my-16 relative",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="absolute inset-0 bg-white shadow-lg rounded-lg z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block relative mb-4 text-[#729ffa]">
            Contato
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#729ffa]"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#1C1C1C] text-center">
            Gostou do meu trabalho? Entre em contato para conversarmos sobre o seu projeto.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          {/* Aumentei o espaço entre os itens de contato e a próxima seção com mb-16 */}
          <div className="flex flex-wrap justify-center gap-12 mb-4">
            {/* Substituí space-x-8 por gap-12 para melhor controle de espaçamento entre itens */}
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
        </div>
          
        <div className="text-center pt-6">
          {/* Adicionei padding-top (pt-6) para aumentar o espaço acima do título */}
          <h3 className="text-2xl font-bold mb-4 relative pb-4 text-[#729ffa] inline-block">
            Vamos trabalhar juntos
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#729ffa]"></span>
          </h3>
          <p className="mb-6 text-center max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades criativas. Use um dos canais acima ou preencha o formulário.
          </p>
        </div>
      </div>
          
          <form action="https://formspree.io/f/xpwdkwjl" method="POST" className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
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
              
              <div className="text-center">
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
            </div>
            
            <div className="mb-6 text-center">
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
            
            <div className="mb-6 text-center">
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                className="w-full p-4 bg-[#fffcff] border border-[#efefef] rounded-md min-h-[150px] resize-none focus:outline-none focus:border-[#729ffa] focus:shadow-md focus:shadow-[#729ffa]/20 transition-all duration-300"
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">Limite de 1000 caracteres</p>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#729ffa] text-[#fffcff] px-8 py-3 rounded font-medium tracking-wider overflow-hidden relative hover:bg-[#5a87e6] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#729ffa]/30 transition-all duration-300"
              >
                <span className="relative z-10">Enviar Mensagem</span>
                <span className="absolute top-0 -left-full w-full h-full bg-white/10 transform transition-all duration-400 hover:left-full"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
