import type{ FormData } from '../types/contact';
import type{ FormErrors } from '../types/contact';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  // Validar nombre
  if (!formData.name.trim()) {
    errors.name = 'El nombre es requerido';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }
  
  // Validar email
  if (!formData.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'El email no tiene un formato válido';
  }
  
  // Validar mensaje
  if (!formData.message.trim()) {
    errors.message = 'El mensaje es requerido';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }
  
  return errors;
};

export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};