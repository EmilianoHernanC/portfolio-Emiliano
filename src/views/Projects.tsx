import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import BackgroundParticlesRest from '../components/BackgroundParticlesRest';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/TranslationHook';
import gestion from "../assets/gestion.webp"

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t= useTranslation()


  // Datos de ejemplo - reemplaza con tus proyectos reales
  const projects = [
    {
    id: 1,
    title: t.project.inventory.title,
    category: t.project.inventory.category,
    description: t.project.inventory.description,
    longDescription: t.project.inventory.longDescription,
    image: gestion,
    stack: ["React", "Tailwind", "PostgreSQL", "Typescript", "Zustand", "vite"],
    features: t.project.inventory.features,
    liveUrl: "https://res-api-typescript-client.vercel.app/",
    githubUrl: "https://res-api-typescript-client.vercel.app/",
    date: t.project.inventory.date,
    status: t.project.inventory.status
    },
    {
      id: 2,
      title: t.project.tsa.title,
      category: t.project.tsa.category,
      description: t.project.tsa.description,
      longDescription: t.project.tsa.longDescription,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      stack: ["React", "Tailwind", "ExpressJS", "NodeJS", "JWT"],
      features: t.project.tsa.features,
      liveUrl: "https://aattvac.com/capacitacionestsa",
      githubUrl: "https://github.com/username/project",
      date: t.project.tsa.date,
      status: t.project.tsa.status
    }
    // {
    //   id: 3,
    //   title: "AI Data Dashboard",
    //   category: "Data Science",
    //   description: "Dashboard interactivo para visualización de datos con machine learning y análisis predictivo.",
    //   longDescription: "Plataforma de análisis de datos que combina visualizaciones interactivas con modelos de machine learning para proporcionar insights empresariales. Incluye análisis predictivo, detección de anomalías y generación automática de reportes.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    //   stack: ["Python", "React", "D3.js", "TensorFlow", "PostgreSQL", "Docker"],
    //   features: [
    //     "Visualizaciones interactivas",
    //     "Modelos de ML integrados",
    //     "Análisis predictivo",
    //     "Reportes automatizados",
    //     "API REST escalable",
    //     "Procesamiento en tiempo real"
    //   ],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/username/project",
    //   date: "Marzo 2024",
    //   status: "En desarrollo"
    // },
    // {
    //   id: 4,
    //   title: "E-commerce Platform",
    //   category: "Full Stack",
    //   description: "Plataforma de comercio electrónico moderna con sistema de pagos integrado y gestión de inventario.",
    //   longDescription: "Sistema completo de e-commerce con funcionalidades avanzadas de gestión de productos, usuarios y pedidos.",
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    //   stack: ["Next.js", "Stripe", "MongoDB", "Redis", "Docker"],
    //   features: [
    //     "Sistema de pagos",
    //     "Gestión de inventario",
    //     "Dashboard de ventas",
    //     "Notificaciones push",
    //     "Sistema de reviews",
    //     "Carrito persistente"
    //   ],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/username/project",
    //   date: "Abril 2024",
    //   status: "Completado"
    // },
    // {
    //   id: 5,
    //   title: "Chat Application",
    //   category: "Real Time",
    //   description: "Aplicación de chat en tiempo real con rooms, mensajes privados y compartir archivos.",
    //   longDescription: "Sistema de mensajería instantánea con funcionalidades avanzadas de comunicación y colaboración.",
    //   image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    //   stack: ["Socket.io", "React", "Node.js", "MongoDB", "WebRTC"],
    //   features: [
    //     "Mensajes en tiempo real",
    //     "Videollamadas",
    //     "Compartir archivos",
    //     "Rooms públicas y privadas",
    //     "Notificaciones push",
    //     "Historial de mensajes"
    //   ],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/username/project",
    //   date: "Mayo 2024",
    //   status: "En desarrollo"
    // }
  ];

  // Configuración responsive para mostrar diferentes cantidades de cards
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 cards
      if (window.innerWidth >= 768) return 2;  // md: 2 cards
      return 1; // sm: 1 card
    }
    return 3;
  };

  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };
  return (
    <section 
      id="projects"
      className="relative z-10 min-h-screen text-white overflow-hidden py-20"
    >
      <BackgroundParticlesRest />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
        </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre una selección de mis trabajos más destacados, donde la innovación se encuentra con la funcionalidad.
          </p>
        </div>

        {/* Carrusel de proyectos */}
        <div className="relative mb-12">
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
            disabled={projects.length <= cardsPerView}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
            disabled={projects.length <= cardsPerView}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container del carrusel */}
          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` 
              }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="px-2">
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de puntos */}
        {projects.length > cardsPerView && (
          <div className="flex justify-center gap-2 mb-12">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Call to action */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            ¿Interesado en colaborar en un proyecto?
          </p>
          <a 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
             href='#contact'
            >
            Hablemos
          </a>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;