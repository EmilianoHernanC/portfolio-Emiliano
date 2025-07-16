import ParticlesBackground from "../components/ParticlesBackground"
import ConnectingDots from "../components/ConnectingDots"
import MouseTrail from "../components/MouseTrail"

const Hero = () => {
   return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden">
      {/* Fondo de partículas */}
      <MouseTrail />
      <ParticlesBackground />
      
      {/* Mouse trail */}
      <ConnectingDots />
      
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light mb-4">
                Hola mi nombre es <span className="text-red-500 font-normal">Emiliano</span>.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
                Soy un desarrollador FullStack
            </p>
            <a
                href="#about"
                className="border-2 border-red-500 text-red-500 px-8 py-3 text-lg hover:bg-red-500 hover:text-white transition-all duration-300 group"
                >
                Mirá mi trabajo{' '}
                <span className="inline-block transition-transform group-hover:translate-y-1">
                    ↓
                </span>
            </a>
        </div>
      </div>
      
      {/* Overlay gradient para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10 pointer-events-none" />
    </section>

    
  )
}
export default Hero

