import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sandheeppp',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/gssandheep9',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:gssandheep9@gmail.com',
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <span className="text-xl font-bold text-white">Sandheep G S</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through clean code and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Apps',
                'API Development',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <p className="text-slate-400 text-sm mb-6">
              Let's collaborate on your next project or just have a chat about technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-2 glass rounded-lg text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-slate-500 text-sm">
              <span>© {currentYear} Sandheep G S. All Rights Reserved.</span>
            </div>
            <div className="flex items-center text-slate-500 text-sm">
              <span>Made with </span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span> using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
