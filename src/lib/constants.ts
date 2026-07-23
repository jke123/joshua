export const SITE_CONFIG = {
  name: 'Joshua Portfolio',
  title: 'Josué ADAGBE | Développeur Full-Stack & Biomédical',
  description: 'Portfolio professionnel premium de Josué ADAGBE - Développeur Full-Stack et passionné par la biomédical',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://joshua.vercel.app',
  author: 'Josué ADAGBE',
  email: 'joshuawebservice@gmail.com',
  phone: '+229 01 67 00 40 80',
  location: 'Bénin',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/jke123',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const NAVIGATION = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export const SKILL_CATEGORIES = {
  frontend: 'Front-end',
  backend: 'Back-end',
  tools: 'Outils & Méthodes',
  biomedical: 'Biomédical',
};
