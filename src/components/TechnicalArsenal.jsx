import React, { useState } from 'react';
import { Code2, Database, Globe, Palette, Server, Smartphone, Cpu, Cloud } from 'lucide-react';

const TechnicalArsenal = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' }
  ];

  const skills = [
    {
      category: 'frontend',
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Tailwind CSS, Next.js',
      color: 'indigo'
    },
    {
      category: 'backend',
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express, Python, Java, REST APIs, GraphQL',
      color: 'purple'
    },
    {
      category: 'frontend',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design, Design Systems',
      color: 'pink'
    },
    {
      category: 'backend',
      icon: Database,
      title: 'Database Management',
      description: 'MongoDB, PostgreSQL, MySQL, Redis, Firebase',
      color: 'blue'
    },
    {
      category: 'tools',
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Git, CI/CD, Vercel, Netlify',
      color: 'green'
    },
    {
      category: 'frontend',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, Progressive Web Apps',
      color: 'orange'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30',
      purple: 'bg-purple-600/20 text-purple-400 hover:bg-purple-600/30',
      pink: 'bg-pink-600/20 text-pink-400 hover:bg-pink-600/30',
      blue: 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30',
      green: 'bg-green-600/20 text-green-400 hover:bg-green-600/30',
      orange: 'bg-orange-600/20 text-orange-400 hover:bg-orange-600/30'
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Technical</span>
            <span className="gradient-text"> Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of modern technologies and frameworks I work with 
            to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'glass text-slate-300 hover:text-white hover:bg-indigo-600/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all group hover:scale-105 duration-300"
              >
                <div className={`w-16 h-16 ${getColorClasses(skill.color)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-indigo-400 text-sm font-medium">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 text-center">
          <div className="glass p-12 rounded-[3rem]">
            <h3 className="text-2xl font-bold text-white mb-6">Always Learning</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Technology is constantly evolving, and so am I. I'm always exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['WebAssembly', 'AI/ML Integration', 'Web3', 'Microservices', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-indigo-600/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
