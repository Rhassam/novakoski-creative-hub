import { Mail, Phone, MapPin, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactItem from "./ContactItem";
import { useState, FormEvent, useRef } from "react";

type ContactSectionProps = {
  isVisible: boolean;
};

// Adicionar estilo para animação
const animateFadeIn = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
`;

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      // Mostrar estado de carregamento
      setIsSubmitting(true);
      
      // Criar FormData do formulário atual
      const formData = new FormData(formRef.current);
      
      // Enviar dados para o Formspree
      const response = await fetch("https://formspree.io/f/xpwdkwjl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        // Mostrar popup de agradecimento
        setShowThankYou(true);
        
        // Limpar o formulário
        formRef.current.reset();
      } else {
        // Se houver erro, alertar o usuário
        console.error("Erro ao enviar formulário");
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
    } finally {
      // Remover estado de carregamento
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={cn(
        "py-24 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5 my-16 relative",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* Estilos para animações */}
      <style jsx>{animateFadeIn}</style>
      
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
          <div className="flex flex-wrap justify-center gap-12 mb-4">
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
          
        <div className="text-center pt-6 mb-16">
          <h3 className="text-2xl font-bold mb-4 relative pb-4 text-[#729ffa] inline-block">
            Vamos trabalhar juntos
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#729ffa]"></span>
          </h3>
          <p className="mb-6 text-center max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades criativas. Use um dos canais acima ou preencha o formulário.
          </p>
        </div>
        
        {/* Container para o formulário flutuante */}
        <div className="max-w-3xl mx-auto relative">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xpwdkwjl" 
            method="POST" 
            className="bg-white p-8 md:p-10 rounded-xl shadow-2xl mx-4 md:mx-auto transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(114,159,250,0.2)] relative z-10 border border-[#efefef]/50"
          >
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
                disabled={isSubmitting}
                className="bg-[#729ffa] text-[#fffcff] px-8 py-3 rounded font-medium tracking-wider overflow-hidden relative hover:bg-[#5a87e6] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#729ffa]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </span>
                <span className="absolute top-0 -left-full w-full h-full bg-white/10 transform transition-all duration-400 hover:left-full"></span>
              </button>
            </div>
          </form>
          
          {/* Elemento decorativo atrás do formulário para efeito de flutuação */}
          <div className="absolute top-4 left-4 right-4 bottom-0 bg-[#729ffa]/5 rounded-xl -z-0 hidden md:block"></div>
        </div>

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 animate-fadeIn relative">
              <button 
                onClick={() => setShowThankYou(false)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#729ffa]">Obrigado por entrar em contato!</h3>
                <p className="text-gray-600 mb-6">
                  Sua mensagem foi enviada com sucesso. Responderei o mais breve possível.
                </p>
                <button
                  onClick={() => setShowThankYou(false)}
                  className="bg-[#729ffa] text-[#fffcff] px-6 py-2 rounded font-medium hover:bg-[#5a87e6] transition-colors duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;