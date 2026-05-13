# Portfolio React - Modern React Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring glassmorphic design, smooth animations, and EmailJS integration.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Glassmorphic Design**: Beautiful cyberpunk-inspired glassmorphism effects
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Scroll-based animations and micro-interactions
- **3D Background**: Interactive Three.js particle background
- **EmailJS Integration**: Functional contact form with email notifications
- **Component-Based**: Modular, reusable React components
- **Environment Variables**: Secure configuration with Vite env variables
- **Lazy Loading**: Optimized image loading with intersection observer
- **Mobile Menu**: Responsive navigation with mobile hamburger menu

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (optional)

### Backend & Services
- **EmailJS** - Email service for contact form
- **Three.js** - 3D graphics library for background

### Development
- **ESLint** - Code linting
- **TypeScript** - Type safety (optional)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── Hero.jsx                # Landing section
│   ├── About.jsx               # About section
│   ├── TechnicalArsenal.jsx    # Skills grid
│   ├── Projects.jsx            # Project showcase
│   ├── ContactFormReact.jsx    # Contact form with EmailJS
│   ├── Footer.jsx              # Footer component
│   ├── LazyImage.jsx           # Lazy loading image component
│   └── ThreeBackground.jsx     # 3D particle background
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sandheeppp/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.react .env
   ```

4. **Configure EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template with variables: `from_name`, `reply_to`, `subject`, `message`
   - Update your `.env` file with your credentials:
     ```env
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

# Social Links (Optional)
VITE_GITHUB_URL=https://github.com/sandheeppp
VITE_LINKEDIN_URL=https://linkedin.com/in/gssandheep9
VITE_TWITTER_URL=https://twitter.com/sandheeppp
VITE_INSTAGRAM_URL=https://instagram.com/sandheeppp
```

## 🎨 Customization

### Colors and Theme
The theme uses Tailwind CSS with custom glassmorphic effects. Modify `src/index.css` to change:
- Background colors
- Glass effects
- Animations
- Typography

### Content
Update the content in each component:
- **Hero.jsx**: Update personal info and social links
- **About.jsx**: Update bio, experience, and education
- **TechnicalArsenal.jsx**: Update skills and technologies
- **Projects.jsx**: Update project showcase
- **ContactFormReact.jsx**: Update contact information

### Images
Add your images to the `public/` directory:
- `SandheepProfessional.jpg` - Profile image
- Project images for the portfolio section

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deployment Options

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com)
3. Set environment variables in Netlify dashboard

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Deploy: `npm run deploy`

## 📧 EmailJS Setup

### Template Example
Create an email template with this content:

```
Hello,

You have a new message from {{from_name}} ({{reply_to}}):

Subject: {{subject}}

{{message}}

---
Sent via your portfolio contact form
```

### Required Variables
- `from_name`: Sender's name
- `reply_to`: Sender's email
- `subject`: Message subject
- `message`: Message content

## 🎯 Performance Optimization

- **Lazy Loading**: Images load when they enter viewport
- **Code Splitting**: Vite automatically splits code
- **Tree Shaking**: Unused code is eliminated
- **Optimized Assets**: Images and assets are optimized
- **Smooth Scrolling**: Hardware-accelerated animations

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS not working**
   - Check environment variables
   - Verify EmailJS service and template IDs
   - Check browser console for errors

2. **3D Background not showing**
   - Check Three.js import
   - Verify browser supports WebGL
   - Check for JavaScript errors

3. **Styles not loading**
   - Ensure Tailwind CSS is properly imported
   - Check `index.css` imports
   - Verify Tailwind configuration

4. **Build errors**
   - Check all imports are correct
   - Verify environment variables
   - Check for TypeScript errors (if using)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons
- [Three.js](https://threejs.org/) for 3D graphics
- [EmailJS](https://www.emailjs.com/) for email service
- [Vite](https://vitejs.dev/) for the build tool

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at gssandheep9@gmail.com
- Connect with me on [LinkedIn](https://linkedin.com/in/gssandheep9)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
