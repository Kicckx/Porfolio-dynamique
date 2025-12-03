import React from 'react';
import { useState } from 'react';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const { data: projects, loading } = useSupabaseFetch('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  if (loading) return null;

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <Section
        id="projects"
        title="Projets"
        subtitle="Quelques-uns de mes travaux récents"
        className="bg-[#1A1A1E]"
      >
        <div className="space-y-12">
          {featuredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          )}

          {otherProjects.length > 0 && (
            <>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  D'autres projets
                </h3>
                <p className="text-gray-400">More work I've done</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))}
              </div>
            </>
          )}
 
          {projects.length === 0 && (
            <p className="text-center text-gray-400">
              Pas de projets disponibles pour le moment.
            </p>
          )}
        </div>
      </Section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
