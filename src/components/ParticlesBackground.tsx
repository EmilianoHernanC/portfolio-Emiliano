import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine, Container } from "tsparticles-engine"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      console.log('Particles loaded', container)
    }
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0a0a0a"
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#3b82f6" },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      }}
      className="absolute inset-0 z-0"
    />
  )
}

export default ParticlesBackground