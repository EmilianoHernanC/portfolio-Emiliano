// Configuración de EmailJS
// Estas variables las obtienes de tu dashboard de EmailJS

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
};

// Variables de entorno para producción (opcional)
export const getEmailJSConfig = () => ({
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID,
});