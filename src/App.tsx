import Hero from "./views/Hero"
import AboutMe from "./views/AboutMe"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Footer from "./components/Footer"
import ScrollRocket from "./components/ScrollRocket"

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
        <ScrollRocket />
      </div>
    </>
  )
}

export default App
