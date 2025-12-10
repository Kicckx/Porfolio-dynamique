import React from 'react';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';

const Education = () => {
  const { data: education, loading } = useSupabaseFetch('education');

  if (loading) return null;

  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background"
      className="bg-[#1A1A1E]"
    >
      <div className="max-w-4xl mx-auto">
        {education.length > 0 ? (
          <div className="space-y-0">
            {education.map((edu) => (
              <TimelineItem key={edu.id} item={edu} isExperience={false} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No education information available yet.
          </p>
        )}
      </div>
    </Section>
  );
};

export default Education;
