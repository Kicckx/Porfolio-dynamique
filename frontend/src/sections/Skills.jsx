import React from 'react';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const { data: skills, loading } = useSupabaseFetch('skills');

  if (loading) return null;

  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Technologies et outils que je maîtrise"
      className="bg-[#0F0F10]"
    >
      <div className="space-y-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categorySkills.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} delay={index * 50} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
