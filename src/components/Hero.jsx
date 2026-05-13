import React from 'react';
import { Mail, ArrowRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:gssandheep9@gmail.com',
      icon: Mail,
      label: 'gssandheep9@gmail.com'
    },
    {
      name: 'GitHub',
      href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sandheeppp',
      icon: Github,
      external: true
    },
    {
      name: 'LinkedIn',
      href: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/gssandheep9',
      icon: Linkedin,
      external: true
    },
    {
      name: 'Twitter',
      href: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/sandheeppp',
      icon: Twitter,
      external: true
    },
    {
      name: 'Instagram',
      href: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/sandheeppp',
      icon: Instagram,
      external: true
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-20 bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Sandheep G S</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Full Stack Developer | UI/UX Enthusiast | Problem Solver
              </p>
              <p className="text-slate-500 max-w-lg">
                Passionate about creating exceptional digital experiences through clean code, 
                innovative design, and cutting-edge technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all btn-glow"
              >
                View Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center font-bold text-slate-300 hover:text-indigo-400 group"
              >
                Inquire <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="p-3 glass rounded-xl text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                    title={social.label || social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-20 bg-indigo-600/20 rounded-full blur-[120px]"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl float-animation">
              <LazyImage
                src="SandheepProfessional.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
