// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: 'admin' | 'user';
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  image_url: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  featured: boolean;
  published: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

// Skills
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'biomedical';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  order: number;
  created_at: string;
}

// Experience
export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  location?: string;
  order: number;
  created_at: string;
}

// Certification
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential_url?: string;
  image_url?: string;
  order: number;
  created_at: string;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  price?: string;
  order: number;
  created_at: string;
}

// Contact Message
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

// Portfolio Settings
export interface PortfolioSettings {
  id: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url?: string;
  about_text: string;
  cv_url?: string;
  github_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  email: string;
  phone?: string;
  location: string;
  updated_at: string;
}

// Blog Post
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url?: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  author_id: string;
  views: number;
  created_at: string;
  updated_at: string;
}
