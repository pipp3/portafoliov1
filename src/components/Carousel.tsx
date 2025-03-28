import React from "react";
import type { Settings } from "react-slick";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Malla Interactiva Enfermeria UC",
    description: "Plataforma web interactiva para visualizar la malla curricular de Enfermería UC, mostrando cursos, semestres y prerrequisitos de forma dinámica. Desarrollado con React, JavaScript y TailwindCSS.",
    image: "/images/example1.webp",
    tags: ["React", "JavaScript", "Tailwind CSS","Vite"],
    github: "https://github.com/pipp3/MallaEnfermeriaUC-React",
    demo: "https://malla-enfermeria-uc-react.vercel.app"
  },
  {
    title: "Buscador de Recetas de Tragos",
    description: "Este proyecto es una aplicación web desarrollada con React y TypeScript que permite gestionar y mostrar información sobre bebidas y tragos. La aplicación está construida utilizando Vite como bundler y herramienta de desarrollo.",
    image: "/images/example2.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/pipp3/BuscadorBebidas",
    demo: "https://buscador-bebidas-tragos.netlify.app"
  },
  {
    title: "Project 3",
    description: "Mobile-first responsive dashboard",
    image: "https://via.placeholder.com/400x300",
    tags: ["Vue.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación web para gestionar inventario en tiempo real con análisis de datos y reportes personalizados. Incluye sistema de autenticación y roles de usuario.",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Aplicación de Clima",
    description: "Aplicación web que muestra información del clima en tiempo real para diferentes ciudades. Incluye gráficos interactivos y pronóstico extendido.",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="projects-carousel">
      <SlickSlider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary tracking-tight">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Carousel;