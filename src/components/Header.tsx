import { useTranslation } from "../hooks/TranslationHook";
import TranslationButton from "../ui/TranslationButton";

const Header = () => {
  const t = useTranslation();

  return (
    <header className="top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-red-500 transition">{t.nav.home}</a>
          <a href="#about" className="hover:text-red-500 transition">{t.nav.about}</a>
          <a href="#projects" className="hover:text-red-500 transition">{t.nav.projects}</a>
          <a href="#contact" className="hover:text-red-500 transition">{t.nav.contact}</a>
        </nav>

        <TranslationButton />
      </div>
    </header>
  );
};

export default Header;
