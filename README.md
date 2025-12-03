Portfolio Dynamique – Projet EPITECH
Description
Ce projet consiste à développer un site web de portfolio entièrement dynamique.
Aucune donnée n’est codée en dur dans le front-end : l’ensemble du contenu (profil, expériences, projets, compétences, liens sociaux, informations de contact, etc.) est chargé depuis une base de données Supabase.
Le site permet de présenter son profil professionnel à travers une interface moderne, responsive et animée.
Le contenu peut être modifié directement depuis Supabase Studio ou une interface d’administration externe si elle est ajoutée par la suite.
Objectifs du projet
Construire un portfolio professionnel personnalisable.
Utiliser une API Supabase pour charger tout le contenu dynamiquement.
Respecter les bonnes pratiques de développement moderne (React + Vite).
Déployer le site pour qu’il soit accessible publiquement.
Fournir un code propre, organisé et maintenable.
Stack technique
Front-end : React + Vite
Styling : TailwindCSS ou CSS Modules selon choix
Animations : Framer Motion (ou transitions CSS natives)
Base de données : Supabase (PostgreSQL)
Hébergement : Vercel / Netlify / ou autre solution similaire
API client : supabase-js
Fonctionnalités principales
Chargement dynamique de toutes les données depuis Supabase.
Page d’accueil avec photo, nom, bio et liens sociaux.
Sections dynamiques :
Expériences professionnelles
Éducation
Projets
Compétences
Informations de contact
Gestion du tri via les colonnes order_index.
Design adaptatif (mobile, tablette, desktop).
Interface moderne avec animations légères.
Code organisé en composants réutilisables.
Structure de la base de données
Les tables utilisées :
users
contact_info
social_links
experiences
education
projects
skills
Chaque table contient un champ order_index permettant d’afficher les données dans un ordre contrôlé.
Le front-end récupère les données via un hook utilitaire (useSupabaseFetch) qui interroge Supabase en fonction de la table demandée.