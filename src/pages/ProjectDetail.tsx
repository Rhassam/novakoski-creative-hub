
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import backgroundImage from "/lovable-uploads/9f4fe2ac-86a3-44bf-ab5c-466be35b79be.png";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  additionalImages?: string[];
};

type ProjectCategory = {
  id: string;
  projects: Project[];
};

const ProjectDetail = () => {
  const { categoryId, projectId } = useParams<{ categoryId: string; projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // In a real app, you'd fetch this data from an API
  useEffect(() => {
    // For demo purposes, we'll create some fake data
    const projectData: Record<string, ProjectCategory> = {
      "photography": {
        id: "photography",
        projects: [
          {
            id: "serie-eventos",
            title: "Série Eventos",
            category: "Eventos",
            description: "Criando histórias envolventes com a fotografia de eventos",
            fullDescription: "Uma série de fotografias que capturam a essência e energia de diversos eventos. Cada imagem conta uma história única, preservando momentos significativos que conectam pessoas através de experiências compartilhadas.",
            imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
            additionalImages: [
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
              "https://images.unsplash.com/photo-1511795409834-432f7b1124a5"
            ]
          },
          {
            id: "retratos-urbanos",
            title: "Retratos Urbanos",
            category: "Retratos",
            description: "Capturando personalidades em cenários urbanos",
            fullDescription: "Série de retratos que exploram a conexão entre pessoas e o ambiente urbano. As fotografias destacam expressões autênticas e emoções genuínas contrastadas com a geometria e textura da cidade.",
            imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            additionalImages: [
              "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            ]
          },
          {
            id: "natureza-viva",
            title: "Natureza Viva",
            category: "Paisagens",
            description: "Explorando a beleza da natureza em suas diferentes formas",
            fullDescription: "Fotografias que revelam a grandeza, complexidade e beleza do mundo natural. Cada imagem convida o espectador a contemplar a serenidade e o poder da natureza em suas diversas manifestações.",
            imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
            additionalImages: [
              "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
              "https://images.unsplash.com/photo-1501854140801-50d01698950b",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            ]
          }
        ]
      },
      "video": {
        id: "video",
        projects: [
          {
            id: "canal-leandro-ladeira",
            title: "Canal Leandro Ladeira",
            category: "Vídeos para Youtube",
            description: "Vídeos para youtube com técnicas avançadas de narrativa e edição profissional",
            fullDescription: "Produção audiovisual para o canal do YouTube do influenciador Leandro Ladeira, combinando storytelling envolvente com técnicas avançadas de edição para criar conteúdo de alta qualidade que engaja e inspira o público.",
            imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
            additionalImages: [
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
              "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
              "https://images.unsplash.com/photo-1535016120720-40c646be5580"
            ]
          },
          {
            id: "documentario-local",
            title: "Documentário Local",
            category: "Documentário",
            description: "Contando histórias reais com sensibilidade e profundidade",
            fullDescription: "Documentário que explora histórias locais com uma perspectiva humana e sensível, revelando narrativas poderosas que normalmente passariam despercebidas e conectando o público com realidades diversas através de uma cinematografia cuidadosa.",
            imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            additionalImages: [
              "https://images.unsplash.com/photo-1576073445047-d79e26f4f3d7",
              "https://images.unsplash.com/photo-1589903308904-1010c2294adc",
              "https://images.unsplash.com/photo-1598899246709-c8273815f3ef"
            ]
          }
        ]
      },
      "motion": {
        id: "motion",
        projects: [
          {
            id: "identidade-animada",
            title: "Identidade Animada",
            category: "Animação 2D",
            description: "Logo animations e elementos de marca em movimento.",
            fullDescription: "Projetos de motion design que dão vida a identidades visuais através de animações dinâmicas e fluidas. Transformamos logos estáticos e elementos de marca em experiências visuais memoráveis que fortalecem o reconhecimento e a conexão emocional com a marca.",
            imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
            additionalImages: [
              "https://images.unsplash.com/photo-1626908013351-800ddd7b96c6",
              "https://images.unsplash.com/photo-1626785774573-4b799315345d",
              "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9"
            ]
          }
        ]
      },
      "creative": {
        id: "creative",
        projects: [
          {
            id: "criativos-infoprodutos",
            title: "Criativos para divulgação de infoprodutos",
            category: "Infoprodutos",
            description: "Criativos produzidos para captação de leads com visuais impactantes.",
            fullDescription: "Peças visuais estratégicas desenvolvidas para campanhas de marketing digital de infoprodutos. Combinando design atraente com mensagens persuasivas, esses materiais são otimizados para maximizar conversões e gerar leads qualificados através de diferentes canais digitais.",
            imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            additionalImages: [
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325"
            ]
          }
        ]
      }
    };

    if (categoryId && projectId) {
      const category = projectData[categoryId];
      if (category) {
        const foundProject = category.projects.find(p => p.id === projectId);
        setProject(foundProject || null);
      }
    }
    
    setLoading(false);
  }, [categoryId, projectId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-[#729ffa] hover:underline">Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] text-[#1C1C1C]">
      {/* Background with reduced opacity */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <div 
          className="absolute inset-0 bg-white opacity-95"
        />
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#729ffa] mb-8 transition-colors hover:text-[#5a87e6]"
        >
          <ChevronLeft className="mr-1" />
          Voltar ao portfólio
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[400px] w-full relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="text-sm uppercase tracking-wider font-medium mb-2">
                    {project.category}
                  </div>
                  <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-xl mb-8 text-center">
                {project.fullDescription || project.description}
              </p>
              
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Galeria</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.additionalImages.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden h-[200px] shadow-md">
                        <img 
                          src={img} 
                          alt={`${project.title} - Imagem ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
