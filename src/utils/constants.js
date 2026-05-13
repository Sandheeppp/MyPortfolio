// Navigation links
export const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'Email',
    href: 'mailto:gssandheep9@gmail.com',
    icon: 'Mail',
    label: 'gssandheep9@gmail.com'
  },
  {
    name: 'GitHub',
    href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sandheeppp',
    icon: 'Github',
    external: true
  },
  {
    name: 'LinkedIn',
    href: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/gssandheep9',
    icon: 'Linkedin',
    external: true
  },
  {
    name: 'Twitter',
    href: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/sandheeppp',
    icon: 'Twitter',
    external: true
  },
  {
    name: 'Instagram',
    href: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/sandheeppp',
    icon: 'Instagram',
    external: true
  }
];

// Skills categories
export const SKILL_CATEGORIES = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools' }
];

// Project filters
export const PROJECT_FILTERS = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'design', name: 'Design' }
];

// Animation durations
export const ANIMATION_DURATION = {
  fast: 300,
  normal: 500,
  slow: 1000
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Colors
export const COLORS = {
  primary: '#6366f1',
  secondary: '#a855f7',
  background: '#020617',
  surface: 'rgba(255, 255, 255, 0.05)',
  text: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
    muted: '#94a3b8'
  }
};
