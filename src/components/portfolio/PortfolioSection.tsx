
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, X, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

type ProjectType = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // URL para vídeos do YouTube
};

type PortfolioSectionProps = {
  id: string;
  title: string;
  description: string;
  projects: ProjectType[];
  isVisible: boolean;
};

const PortfolioSection = ({ id, title, description, projects, isVisible }: PortfolioSectionProps) => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; url: string } | null>(null);

  // Função para extrair o ID do vídeo do YouTube de uma URL
  const getYoutubeVideoId = (url: string): string | null => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  // Função para lidar com cliques em mídia
  const handleMediaClick = (project: ProjectType) => {
    // Se o projeto tem um vídeo, abre o modal de vídeo
    if (project.videoUrl) {
      setSelectedMedia({ type: "video", url: project.videoUrl });
    } 
    // Caso contrário, abre o modal de imagem
    else {
      setSelectedMedia({ type: "image", url: project.imageUrl });
    }
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-12 transition-all duration-800 ease-in-out opacity-0 transform translate-y-5 relative",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="absolute inset-0 bg-[#fffcff]/80 backdrop-blur-sm rounded-lg z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative mb-4 text-[#729ffa] font-['Montserrat_Alternates',sans-serif]">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#729ffa]"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#1C1C1C] text-center">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full max-w-sm h-[400px] rounded-lg overflow-hidden shadow-lg shadow-[#729ffa]/10 border border-[#efefef] bg-[#fffcff] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#729ffa]/20"
            >
              <div 
                className="h-[55%] relative overflow-hidden cursor-pointer"
                onClick={() => handleMediaClick(project)}
              >
                <div className="absolute inset-0 bg-[#729ffa]/0 hover:bg-[#729ffa]/20 transition-all duration-400 z-10 flex items-center justify-center">
                  {project.videoUrl && (
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-full p-2">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="text-[#729ffa] text-xs uppercase tracking-wider font-medium mb-2 text-center">
                  {project.category}
                </div>
                <h3 className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-[#729ffa] text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-[#1C1C1C] mb-4 text-center line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <Link 
                    to={`/project/${id}/${project.id}`} 
                    className="text-sm font-medium text-[#729ffa] inline-flex items-center transition-all duration-300 hover:text-[#5a87e6]"
                  >
                    Ver Projeto <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualização de mídia */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none overflow-hidden">
          <div className="relative w-full">
            <DialogClose className="absolute right-2 top-2 z-50 bg-white/80 rounded-full p-1 hover:bg-white">
              <X className="h-6 w-6 text-gray-700" />
            </DialogClose>
            
            {selectedMedia?.type === "image" && (
              <img 
                src={selectedMedia.url} 
                alt="Imagem em destaque" 
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
            
            {selectedMedia?.type === "video" && getYoutubeVideoId(selectedMedia.url) && (
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedMedia.url)}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
