import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit avoir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(5, 'Le sujet doit avoir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit avoir au moins 10 caractères'),
});

export const projectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  long_description: z.string().optional(),
  image_url: z.string().url(),
  technologies: z.array(z.string()).min(1),
  github_url: z.string().url().optional().or(z.literal('')),
  live_url: z.string().url().optional().or(z.literal('')),
  featured: z.boolean(),
  published: z.boolean(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
