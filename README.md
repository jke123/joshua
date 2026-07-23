# Joshua Portfolio - Premium 2026

Portfolio professionnel premium pour Josué ADAGBE, développeur Full-Stack et passionné de biomédical.

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (Auth, Database, Storage)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics (optionnel)

## 📋 Features

✅ Design Premium Glassmorphism
✅ Mode Sombre/Clair automatique
✅ Admin Panel sécurisé
✅ Gestion dynamique des projets, compétences, expériences
✅ Blog intégré
✅ Timeline/Expérience
✅ Formulaire de contact avec base de données
✅ PWA Ready
✅ SEO Optimisé
✅ Lighthouse Score > 95
✅ Responsive (320px - 1920px)
✅ Animations Framer Motion

## 🛠️ Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Compte Supabase

### Setup Local

```bash
# 1. Clone et install
git clone https://github.com/jke123/joshua.git
cd joshua
npm install

# 2. Variables d'environnement
cp .env.example .env.local
# Remplir les variables avec vos credentials Supabase

# 3. Setup Supabase
# Voir supabase/setup.sql

# 4. Dev server
npm run dev
```

Le site est accessible à `http://localhost:3000`

## 📁 Structure du Projet

```
src/
├── app/                 # Next.js App Router
│   ├── (public)/       # Routes publiques
│   ├── (admin)/        # Routes admin (protégées)
│   ├── api/            # API Routes
│   └── layout.tsx      # Layout principal
├── components/         # Composants réutilisables
│   ├── ui/            # Composants UI de base
│   ├── sections/      # Sections principales
│   └── admin/         # Composants admin
├── hooks/             # React Hooks personnalisés
├── lib/               # Utilitaires
│   ├── cn.ts          # Clsx + tailwind-merge
│   └── validators.ts  # Zod schemas
├── services/          # Services (Supabase, API)
├── types/             # Types TypeScript
├── styles/            # CSS global
└── supabase/          # Client Supabase
public/               # Fichiers statiques
```

## 🗄️ Supabase Setup

Voir le fichier `supabase/setup.sql` pour créer la structure complète.

```bash
# Exécuter le SQL dans l'éditeur SQL de Supabase
```

## 🔐 Admin Access

1. Naviguer à `/admin/login`
2. Se connecter avec les credentials
3. Accéder au dashboard

## 📱 Responsive Breakpoints

- 320px (Mobile SM)
- 375px (Mobile)
- 425px (Mobile LG)
- 768px (Tablet)
- 1024px (Desktop)
- 1440px (Desktop LG)
- 1920px (4K)

## 🚀 Deployment

### Vercel

```bash
# Connecter le repo à Vercel
# Les variables d'environnement sont configurées automatiquement
# Push sur main = deploy automatique
```

## 📊 Performance

- Lighthouse Score: > 95
- Core Web Vitals optimisés
- Images optimisées avec Next/Image
- Fonts auto-optimisées
- Code splitting automatique

## 📝 Licence

Copyright © 2026 Josué ADAGBE. Tous droits réservés.
