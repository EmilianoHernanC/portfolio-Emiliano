import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import BackgroundParticlesRest from './BackgroundParticlesRest';
import { useTranslation } from '../hooks/TranslationHook';

export default function Footer() {
  const t = useTranslation();
  const footerLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:emilianohernan92@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emiliano-hernan-cortez'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/EmilianoHernanC'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      href: 'https://wa.me/542914228541'
    }
  ];

  return (
    <footer
      id="footer"
      className="relative z-10 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white overflow-hidden"
    >
      <BackgroundParticlesRest />

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-8">
        <h3 className="text-2xl md:text-3xl font-semibold">
          {t.footer.thanks}
        </h3>
        <p className="text-gray-400 max-w-xl">
          {t.footer.shortDescription}
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          {footerLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/30 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/60 transition-all duration-300 group"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-gray-700/40 mt-6"></div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
