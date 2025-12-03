import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#1A1A1E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1A1A1E] border-b border-white/10 p-6 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {project.image_url && (
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {project.long_description && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">
                About This Project
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.long_description}
              </p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0F0F10] text-gray-300 rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                <span>View Live Demo</span>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#0F0F10] hover:bg-[#252529] text-white rounded-lg transition-colors border border-white/10"
              >
                <Github size={20} />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
