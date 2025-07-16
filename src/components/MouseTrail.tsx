import { useEffect, useRef } from "react"

interface TrailPoint {
  x: number
  y: number
  opacity: number
  size: number
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const trail = useRef<TrailPoint[]>([])
  const animationId = useRef<number | null>(null)

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

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 20 + 10
      })
      if (trail.current.length > 20) trail.current.shift()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      trail.current.forEach((point, index) => {
        const opacity = point.opacity * (index / trail.current.length)
        const size = point.size * (index / trail.current.length)
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()
        point.opacity *= 0.95
        point.size *= 0.98
      })
      trail.current = trail.current.filter(p => p.opacity > 0.01)
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

export default MouseTrail