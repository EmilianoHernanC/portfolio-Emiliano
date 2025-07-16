import { useState } from "react"
const Header = () => {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => setIsEnglish(!isEnglish)

  return (
    <header className="top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-red-500 transition">Home</a> 
          <a href="#about" className="hover:text-red-500 transition">{isEnglish ? "About Me" : "Sobre mí"}</a>
          <a href="#projects" className="hover:text-red-500 transition">{isEnglish ? "Projects" : "Proyectos"}</a>
          <a href="#contact" className="hover:text-red-500 transition">{isEnglish ? "Contact" : "Contacto"}</a>
        </nav>

        <button
          onClick={toggleLanguage}
          className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-black transition"
        >
          {isEnglish ? "ES" : "EN"}
        </button>
      </div>
    </header>
  )
}

export default Header
