import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='about' className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
            Desarrollador Full Stack
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 mb-4 tracking-tight">¡Hola! Soy <span className="text-primary">Felipe Muñoz</span> 👋</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Soy un desarrollador Full Stack con enfoque en backend, pero también disfruto creando interfaces intuitivas. Actualmente, curso el último año de Ingeniería Civil Informática y Telecomunicaciones, en busca de práctica profesional y un lugar para desarrollar mi tesis. Me apasiona el código limpio y eficiente, quiero especializarme en el desarrollo de aplicaciones web escalables.
          </p>
          <br />
          <p className="text-lg text-gray-600 mb-8">
          Me motiva el aprendizaje continuo y el desarrollo de proyectos desafiantes donde pueda aplicar y ampliar mis habilidades. Estoy preparado para asumir nuevos retos y colaborar en equipo para alcanzar resultados de alto impacto.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-70 h-70 mx-auto rounded-full overflow-hidden shadow-xl">
            <img src="/images/perfil.webp" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}