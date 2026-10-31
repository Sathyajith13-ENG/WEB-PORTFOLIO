import React from 'react';
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <div className="projects-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaLaptopCode className="text-lime-400" />
        Featured Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="group relative bg-gray-800/90 border border-gray-700/80 hover:border-lime-500/50 rounded-xl p-6 sm:p-7 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/5"
          >
            {/* Top subtle highlight sheen */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/30 to-transparent group-hover:via-lime-400 transition-all duration-300 rounded-t-xl" />

            {/* Header: Title, Subtitle, Timeline, and GitHub link */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-lime-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-lime-400/90 mt-1">
                  {project.subtitle}
                </p>
                <div className="text-xs text-gray-400 mt-1 font-mono">
                  {project.role}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="inline-block text-xs bg-gray-700/80 text-gray-300 border border-gray-600/50 px-3 py-1 rounded-full font-mono">
                  {project.period}
                </span>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-lime-500 hover:bg-lime-400 text-gray-950 px-3 py-1 rounded-full transition-colors shadow-sm font-sans"
                    title="View GitHub Repository"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                    <FaExternalLinkAlt size={9} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Bullets */}
            <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-lime-400 mt-1.5 shrink-0 text-xs">&#9670;</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-700/60">
              {project.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="bg-lime-950/40 text-lime-300 border border-lime-800/60 text-xs px-2.5 py-0.5 rounded font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
