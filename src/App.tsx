import Hero from "./views/Hero"
import AboutMe from "./views/AboutMe"
import Projects from "./views/Projects"
// import Contact from "./sections/Contact"
// import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <Hero />
      </div>
        <AboutMe />
        <Projects />
    </>
  )
}

export default App
