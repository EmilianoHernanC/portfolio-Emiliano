import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  opacity: number
}

const ConnectingDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dots = useRef<Dot[]>([])
  const animationId = useRef<number | null>(null)
  const lastMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const createDot = (x: number, y: number) => {
      const dot: Dot = {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 120 + Math.random() * 60, // Vida más larga para más conexiones
        size: Math.random() * 2 + 1,
        opacity: 1
      }
      dots.current.push(dot)
    }

    const drawConnection = (dot1: Dot, dot2: Dot, distance: number) => {
      const maxDistance = 80 // Distancia máxima para conexión
      const opacity = Math.max(0, 1 - distance / maxDistance) * 0.3
      
      if (opacity > 0) {
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * Math.min(dot1.opacity, dot2.opacity)})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(dot1.x, dot1.y)
        ctx.lineTo(dot2.x, dot2.y)
        ctx.stroke()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX
      const currentY = e.clientY
      
      // Calcular la distancia desde la última posición
      const dx = currentX - lastMousePos.current.x
      const dy = currentY - lastMousePos.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // Crear dots cuando el mouse se mueve
      if (distance > 8) {
        createDot(
          currentX + (Math.random() - 0.5) * 30,
          currentY + (Math.random() - 0.5) * 30
        )
        lastMousePos.current = { x: currentX, y: currentY }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Actualizar dots
      dots.current = dots.current.filter(dot => {
        dot.life++
        dot.x += dot.vx
        dot.y += dot.vy
        
        // Aplicar fricción gradual
        dot.vx *= 0.995
        dot.vy *= 0.995
        
        // Calcular opacidad basada en vida
        dot.opacity = Math.max(0, 1 - (dot.life / dot.maxLife))
        
        return dot.life < dot.maxLife && dot.opacity > 0.01
      })
      
      // Dibujar conexiones PRIMERO (para que queden atrás)
      for (let i = 0; i < dots.current.length; i++) {
        const dot1 = dots.current[i]
        for (let j = i + 1; j < dots.current.length; j++) {
          const dot2 = dots.current[j]
          const dx = dot2.x - dot1.x
          const dy = dot2.y - dot1.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) { // Solo conectar si están cerca
            drawConnection(dot1, dot2, distance)
          }
        }
      }
      
      // Dibujar dots DESPUÉS (para que queden adelante)
      dots.current.forEach(dot => {
        if (dot.opacity > 0) {
          // Dot principal
          ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
          ctx.fill()
          
          // Efecto de glow
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, dot.size * 3
          )
          gradient.addColorStop(0, `rgba(59, 130, 246, ${dot.opacity * 0.3})`)
          gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      // Limitar número de dots para performance
      if (dots.current.length > 150) {
        dots.current = dots.current.slice(-120)
      }
      
      animationId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
      if (animationId.current) cancelAnimationFrame(animationId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}

export default ConnectingDots