import React from 'react';
import { Code2, Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developing scalable web applications using React, Node.js, and modern cloud technologies.',
      icon: Briefcase
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Created responsive and interactive user interfaces with React and Vue.js.',
      icon: Briefcase
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2019 - 2023',
      description: 'Specialized in Software Engineering and Web Technologies.',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: 'Best Project Award',
      description: 'Recognized for innovative web application development',
      icon: Award
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to various open source projects',
      icon: Code2
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">About</span>
            <span className="gradient-text"> Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate developer with a keen eye for design and a love for creating 
            exceptional digital experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              My journey in tech started with a curiosity about how websites work, and has evolved 
              into a career focused on building scalable, user-centric applications.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in React, Node.js, and cloud technologies, with a strong foundation in 
              both frontend and backend development. I believe in writing clean, maintainable code 
              and creating intuitive user experiences.
            </p>
            
            {/* Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">Available for work</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Full Stack Development</h4>
                    <p className="text-slate-400">
                      Building end-to-end web applications with modern frameworks and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">UI/UX Design</h4>
                    <p className="text-slate-400">
                      Creating beautiful, intuitive interfaces with focus on user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-indigo-400 w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                        <p className="text-indigo-400 font-medium mb-2">{exp.company}</p>
                        <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                        <p className="text-slate-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div key={index} className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-purple-400 w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                        <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                        <p className="text-slate-400">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-indigo-400 w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-400">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
