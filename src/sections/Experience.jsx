import React from 'react';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const { data: experiences, loading } = useSupabaseFetch('experiences');

  if (loading) return null;

  return (
    <Section
      id="experience"
      title="Experiences"
      subtitle=""
      className="bg-[#0F0F10]"
    >
      <div className="max-w-4xl mx-auto">
        {experiences.length > 0 ? (
          <div className="space-y-0">
            {experiences.map((experience) => (
              <TimelineItem
                key={experience.id}
                item={experience}
                isExperience={true}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No work experience available yet.
          </p>
        )}
      </div>
    </Section>
  );
};

export default Experience;
