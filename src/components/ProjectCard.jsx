import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick(project)}
      className="bg-[#1A1A1E] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer group"
    >
      {project.image_url && (
        <div className="relative h-48 overflow-hidden bg-[#0F0F10]">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1E] to-transparent opacity-60" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-[#0F0F10] text-gray-300 rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-3">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
