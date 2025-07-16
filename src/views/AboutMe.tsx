import BackgroundParticlesRest from "../components/BackgroundParticlesRest";
import Header from "../components/Header";
import dev1 from "../assets/dev1.svg"
import TechOrbit from "../components/TechOrbit";


export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen text-white overflow-hidden"
    >
      <BackgroundParticlesRest />
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
              <img src={dev1} alt="Emiliano" className="w-48 h-48 flex-shrink-0" />
              <p className="text-lg leading-relaxed flex-1 md:mt-8">
                Soy Emiliano, un desarrollador Full Stack con pasión por crear
                experiencias modernas, intuitivas y funcionales. Me enfoco tanto en
                el diseño del frontend como en la lógica del backend.
              </p>
            </div>
          </div>

          {/* LADO DERECHO */}
          <div className="flex justify-center items-center">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}