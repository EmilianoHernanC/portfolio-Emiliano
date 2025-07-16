import type { ReactNode } from "react";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
  [key: string]: string;
}