import React from 'react';
import { useEffect, useState } from 'react';

const SkillBadge = ({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setProgress(skill.level || 50);
      }, 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, skill.level]);

  return (
    <div
      className={`bg-[#1A1A1E] rounded-lg p-4 border border-white/5 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {skill.icon && (
            <span
              className="text-2xl"
              style={{ color: skill.color || '#3B82F6' }}
            >
              {skill.icon}
            </span>
          )}
          <h3 className="text-white font-medium">{skill.name}</h3>
        </div>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>

      <div className="w-full bg-[#0F0F10] rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: skill.color || '#3B82F6',
          }}
        />
      </div>

      {skill.category && (
        <p className="text-gray-500 text-xs mt-2">{skill.category}</p>
      )}
    </div>
  );
};

export default SkillBadge;
