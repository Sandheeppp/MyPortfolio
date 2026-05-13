import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import LazyImage from './LazyImage';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and responsive design.',
      image: 'project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'project2.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/taskmanager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
      image: 'project3.jpg',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/weather'
    },
    {
      id: 4,
      title: 'Fitness Tracker Mobile',
      category: 'mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
      image: 'project4.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/fitness'
    },
    {
      id: 5,
      title: 'Portfolio Design System',
      category: 'design',
      description: 'Comprehensive design system and component library for consistent UI/UX across multiple projects.',
      image: 'project5.jpg',
      technologies: ['Figma', 'Storybook', 'Tailwind CSS', 'React'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/design-system'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'web',
      description: 'Analytics dashboard for social media metrics with data visualization, reporting, and insights generation.',
      image: 'project6.jpg',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sandheeppp/analytics'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span>
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work showcasing various technologies, 
            design approaches, and problem-solving skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Highlight Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white'
                  : 'glass text-slate-300 hover:text-white hover:bg-indigo-600/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all btn-glow">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      } ${isHovered ? 'scale-105 border-indigo-500/50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${featured ? 'lg:flex' : ''}`}>
        {/* Project Image */}
        <div className={`relative ${featured ? 'lg:w-1/2' : 'h-48'} overflow-hidden`}>
          <LazyImage
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${isHovered ? 'scale-110' : ''} transition-transform duration-500`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
        </div>

        {/* Project Content */}
        <div className={`p-6 ${featured ? 'lg:w-1/2' : ''}`}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.featured && (
              <span className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/50 rounded-full text-indigo-400 text-xs font-medium">
                Featured
              </span>
            )}
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-indigo-600/20 border border-indigo-500/50 rounded-lg text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all text-sm font-medium"
              >
                <Eye className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 glass rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all text-sm font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
