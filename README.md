🚀 Portfolio Dynamique – Projet EPITECH
Un portfolio moderne, entièrement dynamique, développé avec React, Vite et Supabase.
Aucune donnée n’est codée en dur : tout le contenu (projets, compétences, à propos, liens sociaux, etc.) est géré depuis une base de données Supabase et affiché en temps réel.
Ce projet met en avant mes compétences en développement front-end moderne, intégration API, structuration d'une base de données, design responsive et mise en production.


📌 Fonctionnalités principales
🔹 Contenu 100% dynamique
Tout le contenu provient de Supabase :
Profil (nom, bio, photo, localisation)
À propos
Projets
Compétences
Expériences
Éducation
Liens sociaux
Informations de contact
Aucune donnée n’est écrite en dur dans le front.
🔹 Interface moderne & responsive
Design épuré avec TailwindCSS
Animations fluides (Intersection Observer + transitions)
Adapté smartphones, tablettes et desktops
🔹 Sections principales
Accueil / Hero
À propos
Compétences
Projets
Éducation
Expériences
Contact
Chaque section est automatiquement remplie avec les données récupérées via Supabase.
🔹 Gestion avancée des données
Hooks personnalisés (useSupabaseFetch, useSupabaseFetchSingle)
Tri dynamique via colonne order_index
Récupération optimisée via l’API Supabase


🛠️ Stack Technique
Technologie	Rôle
React	Front-end, composants UI
Vite	Bundler rapide
TailwindCSS	Design & responsive
Supabase (PostgreSQL)	Base de données + API
supabase-js	Client API
Vercel	Déploiement (recommandé)


🗄️ Structure de la base de données
Le projet utilise plusieurs tables dans Supabase :
users
about
projects
skills
education
experiences
social_links
contact_info
Chaque table possède :
un id auto-incrémenté
un order_index pour organiser le contenu


🔐 Sécurité (RLS)
Des policies RLS simples permettent :
lecture publique (SELECT)
écriture via Supabase Studio


📂 Structure du projet (frontend)
src/
 ├── components/
 │    ├── Section.jsx
 │    ├── Card.jsx
 │    └── ...
 ├── hooks/
 │    ├── useSupabaseFetch.js
 │    └── useSupabaseFetchSingle.js
 ├── pages/
 │    ├── Hero.jsx
 │    ├── About.jsx
 │    ├── Projects.jsx
 │    ├── Skills.jsx
 │    └── Contact.jsx
 ├── supabaseClient.js
 └── App.jsx


🚀 Déploiement
Le déploiement recommandé se fait sur Vercel :
Importer le repo GitHub dans Vercel
Définir les variables d’environnement Supabase :
VITE_SUPABASE_URL=xxxx
VITE_SUPABASE_ANON_KEY=xxxx
Build automatique
Le site est immédiatement en ligne


🧪 Lancer le projet localement
git clone https://github.com/tonpseudo/tonportfolio.git
cd frontend
npm install
npm run dev
Ensuite ouvrez :
http://localhost:5173


🎯 Objectif du projet
Construire un portfolio professionnel, dynamique et modulaire
Appliquer les bonnes pratiques du développement moderne
Manipuler une base de données en production (Supabase)
Déployer une application web complète et maintenable
Présenter ses compétences et ses travaux de manière professionnelle


👤 Auteur
Kyllian Grondin
Étudiant EPITECH – Promotion 202X
Passionné par le développement web, les projets concrets et la création de solutions modernes.