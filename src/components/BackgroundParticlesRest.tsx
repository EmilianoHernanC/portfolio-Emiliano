import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  color: string
  pulseSpeed: number
  pulseOffset: number
}

const BackgroundParticlesRest = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationId = useRef<number | null>(null)
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    const createParticle = () => {
      const colors = [
        'rgba(59, 130, 246, 0.6)',    // Azul
        'rgba(147, 51, 234, 0.6)',    // Púrpura
        'rgba(236, 72, 153, 0.6)',    // Rosa
        'rgba(34, 197, 94, 0.6)',     // Verde
        'rgba(251, 191, 36, 0.6)'     // Amarillo
      ]
      
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Movimiento muy lento
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: 0.4,
        baseOpacity: Math.random() * 0.3 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      }
      particles.current.push(particle)
    }

    const initializeParticles = () => {
      particles.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000) // Densidad adaptativa
      
      for (let i = 0; i < particleCount; i++) {
        createParticle()
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeParticles()
    }

    const drawConnection = (p1: Particle, p2: Particle) => {
      const dx = p2.x - p1.x
      const dy = p2.y - p1.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 120
      
      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.08 * Math.min(p1.opacity, p2.opacity)
        
        if (opacity > 0.01) {
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
          gradient.addColorStop(0, p1.color.replace('0.6', opacity.toString()))
          gradient.addColorStop(1, p2.color.replace('0.6', opacity.toString()))
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.3
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time.current += 0.016
      
      // Actualizar partículas
      particles.current.forEach(particle => {
        // Movimiento lento y continuo
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Efecto de pulsación sutil
        particle.opacity = particle.baseOpacity + 
          Math.sin(time.current * particle.pulseSpeed + particle.pulseOffset) * 0.1
        
        // Rebote suave en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
      })
      
      // Dibujar conexiones primero (fondo)
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          drawConnection(particles.current[i], particles.current[j])
        }
      }
      
      // Dibujar partículas
      particles.current.forEach(particle => {
        // Partícula principal
        ctx.fillStyle = particle.color.replace('0.6', particle.opacity.toString())
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Efecto de glow muy sutil
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, particle.color.replace('0.6', (particle.opacity * 0.2).toString()))
        gradient.addColorStop(1, particle.color.replace('0.6', '0'))
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()
      })
      
      animationId.current = requestAnimationFrame(animate)
    }

    // Inicializar todo
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId.current) cancelAnimationFrame(animationId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)',
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default BackgroundParticlesRest