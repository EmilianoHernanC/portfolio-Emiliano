import { useState } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import BackgroundParticlesRest from '../components/BackgroundParticlesRest';
import GestionStock from '../assets/GestionStock.jpeg';

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

  // Datos de ejemplo - reemplaza con tus proyectos reales
  const projects = [
    {
      id: 1,
      title: "Gestion de Inventario",
      category: "Full Stack",
      description: "Plataforma de Gesiton de inventario y Stock para una Empresa de Respuestos de Automovil y Motocicletas.",
      longDescription: "Plataforma moderna que permite al usuario mantener una base de datos de todos los productos que ingresan y salen, realizar actualizaciones y tener un Dashboard completo al final del dia.",
      image: GestionStock,
      stack: ["React", "Tailwind", "PostgreSQL", "Typescript", "Zustand"],
      features: [
        "Autenticación JWT segura",
        "Sistema de pagos con Stripe",
        "Panel de administración",
        "Carrito de compras persistente",
        "Sistema de reviews y ratings",
        "Notificaciones en tiempo real"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      date: "Enero 2024",
      status: "Completado"
    },
    {
      id: 2,
      title: "Sistema TSA",
      category: "Full Stack",
      description: "Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
      longDescription: " plataforma tipo campus con login para instructores, administradores, contratistas y comitentes. Permite gestión de cursos, asignación de alumnos, visualización de datos desde base de datos y control de accesos según rol. Stack: React, Tailwind, Node.js, Express, MySQL, manejo de estados globales y autenticación con tokens. ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      stack: ["React", "Tailwind", "ExpressJS", "NodeJS", "JWT"],
      features: [
        "Sincronización en tiempo real",
        "Trabajo offline",
        "Notificaciones push",
        "Colaboración en equipo",
        "Seguimiento de progreso",
        "Interfaz intuitiva"
      ],
      liveUrl: "https://aattvac.com/capacitacionestsa",
      githubUrl: "https://github.com/username/project",
      date: "Marzo 2025",
      status: "Completado"
    },
    {
      id: 3,
      title: "AI Data Dashboard",
      category: "Data Science",
      description: "Dashboard interactivo para visualización de datos con machine learning y análisis predictivo.",
      longDescription: "Plataforma de análisis de datos que combina visualizaciones interactivas con modelos de machine learning para proporcionar insights empresariales. Incluye análisis predictivo, detección de anomalías y generación automática de reportes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stack: ["Python", "React", "D3.js", "TensorFlow", "PostgreSQL", "Docker"],
      features: [
        "Visualizaciones interactivas",
        "Modelos de ML integrados",
        "Análisis predictivo",
        "Reportes automatizados",
        "API REST escalable",
        "Procesamiento en tiempo real"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      date: "Marzo 2024",
      status: "En desarrollo"
    }
  ];

  return (
    <section 
      id="projects"
      className="relative z-10 min-h-screen text-white overflow-hidden py-20"
    >
        <BackgroundParticlesRest />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre una selección de mis trabajos más destacados, donde la innovación se encuentra con la funcionalidad.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            ¿Interesado en colaborar en un proyecto?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Hablemos
          </button>
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