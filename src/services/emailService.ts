import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '../config/emailjs';
import type{ FormData, EmailTemplateParams } from '../types/contact';

class EmailService {
  private config = getEmailJSConfig();

  constructor() {
    // Inicializar EmailJS con tu Public Key
    emailjs.init(this.config.PUBLIC_KEY);
  }

  async sendContactEmail(formData: FormData): Promise<void> {
    try {
      // Parámetros que se enviarán a la plantilla de EmailJS
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Emiliano', // Tu nombre
      };

      const response = await emailjs.send(
        this.config.SERVICE_ID,
        this.config.TEMPLATE_ID,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`Error al enviar email: ${response.text}`);
      }

      console.log('Email enviado exitosamente:', response);
    } catch (error) {
      console.error('Error al enviar email:', error);
      throw new Error('No se pudo enviar el mensaje. Por favor, intenta de nuevo.');
    }
  }

  // Método para enviar copia al remitente (opcional)
  async sendAutoReply(formData: FormData): Promise<void> {
    try {
      const autoReplyParams = {
        to_email: formData.email,
        to_name: formData.name,
        from_name: 'Emiliano Hernán',
        message: `Hola ${formData.name}!\n\nGracias por contactarme. He recibido tu mensaje y te responderé lo antes posible.\n\nMensaje original:\n"${formData.message}"\n\nSaludos,\nEmiliano Hernán`,
      };

      await emailjs.send(
        this.config.SERVICE_ID,
        'auto_reply_template', // Necesitarías crear otra plantilla para esto
        autoReplyParams
      );
    } catch (error) {
      console.error('Error al enviar respuesta automática:', error);
      // No lanzamos error aquí porque no es crítico
    }
  }
}

export const emailService = new EmailService();