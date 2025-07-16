import BackgroundParticlesRest from "../components/BackgroundParticlesRest";
import Header from "../components/Header";
import dev1 from "../assets/dev1.svg";
import TechOrbit from "../components/TechOrbit";
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen text-white overflow-hidden"
    >
      <BackgroundParticlesRest />
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LADO IZQUIERDO con animación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
              <img src={dev1} alt="Emiliano" className="w-48 h-48 flex-shrink-0" />
              <p className="text-lg leading-relaxed flex-1 md:mt-8">
                Soy Emiliano, un desarrollador Full Stack con pasión por crear
                experiencias modernas, intuitivas y funcionales. Me enfoco tanto en
                el diseño del frontend como en la lógica del backend.
              </p>
            </div>
          </motion.div>

          {/* LADO DERECHO con animación */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <TechOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
