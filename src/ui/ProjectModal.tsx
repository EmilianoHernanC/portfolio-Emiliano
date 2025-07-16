import { ExternalLink, Github, X, Calendar, Code, Zap } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

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

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

// Componente Modal
export const ProjectModal = ({ project , isOpen, onClose }: ProjectModalProps) => {
    if (!isOpen) return null;
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
        onClose(); // solo si el click fue directamente en el backdrop
        }
    };

    return (
        <AnimatePresence>
            {isOpen && project && (
            <motion.div
                onClick={handleBackdropClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
                <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
                >
                <div className="relative">
                    {/* Header con imagen */}
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                    </div>

                    {/* Contenido */}
                    <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {project.status}
                        </span>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {project.longDescription}
                    </p>

                    {/* Características */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Características Principales
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            {feature}
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* Stack tecnológico */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-400" />
                        Stack Tecnológico
                        </h3>
                        <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>

                    {/* Fecha */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                        >
                        <ExternalLink className="w-5 h-5" />
                        Ver Proyecto
                        </a>
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                        <Github className="w-5 h-5" />
                        Código Fuente
                        </a>
                    </div>
                    </div>
                </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        );
};