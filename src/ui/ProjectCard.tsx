import { ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  stack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  date: string;
  status: string;
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export const ProjectCard = ({ project, onClick } : ProjectCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer backdrop-blur-sm"
    >
      {/* Imagen de fondo */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Overlay con efectos */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Indicador de hover */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Stack principal */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
              +{project.stack.length - 3} más
            </span>
          )}
        </div>

        {/* Animación de carga al hover */}
        <div className="w-full bg-gray-700/30 rounded-full h-1 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  );
};