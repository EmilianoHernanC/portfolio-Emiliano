import { useEffect, useState } from "react";
import { Rocket, ChevronUp } from "lucide-react";

const sectionOrder = ["hero", "about", "projects", "contact"];

export default function ScrollRocket() {
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) setCurrentSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const index = sectionOrder.indexOf(currentSection);
    if (index > 0) {
      const prevSection = document.getElementById(sectionOrder[index - 1]);
      prevSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (currentSection === "hero") return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-2 group">
      
      {/* Flechas animadas arriba del cohete */}
      <div className="flex flex-col items-center space-y-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-2">
        <ChevronUp className="w-4 h-4 text-white/60 animate-bounce" />
        <ChevronUp className="w-3 h-3 text-white/40 animate-bounce delay-200" />
      </div>

      {/* Botón cohete */}
      <button
        onClick={handleClick}
        className="relative p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full shadow-lg border border-white/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Subir sección"
      >
        {/* Anillo animado sutil */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-40"></div>

        {/* Icono cohete */}
        <Rocket className="w-5 h-5 text-white animate-bounce relative z-10" />
      </button>
    </div>
  );
}
