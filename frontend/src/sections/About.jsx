import React from 'react';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';

const About = () => {
  const { data: about, loading } = useSupabaseFetch('about');

  if (loading) return null;

  // Vérification que la table contient bien au moins une ligne
  if (!about || about.length === 0) return null;

  // On prend la première (et unique) ligne de la table
  const info = about[0];

  return (
    <Section
      id="about"
      title={info.title || "À propos de moi"}
      subtitle={info.subtitle || "Apprenez à mieux me connaître"}
      className="bg-[#0F0F10]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {info.content}
        </p>
      </div>
    </Section>
  );
};

export default About;
