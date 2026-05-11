# EmailJS Contact Form Setup

This repository currently ships as a static HTML portfolio. The React contact form lives at `src/components/ContactForm.jsx` and is ready to use in a Vite React app.

## Install dependencies

```bash
npm install @emailjs/browser framer-motion
```

## Add the component

Import the component wherever your contact section is rendered:

```jsx
import ContactForm from "./components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-glow">
          Let's talk code.
        </h2>
        <p className="text-slate-400 text-xl mb-12">
          Currently seeking new challenges and innovative collaborations.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
```

## EmailJS template fields

Create an EmailJS template with these variables:

```text
from_name
reply_to
subject
message
```

## Local environment

Copy `.env.example` to `.env.local` and fill in your EmailJS values:

```bash
cp .env.example .env.local
```

Vite exposes only variables prefixed with `VITE_`, which is why the component reads:

```js
import.meta.env.VITE_EMAILJS_SERVICE_ID
import.meta.env.VITE_EMAILJS_TEMPLATE_ID
import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## Netlify deployment

In Netlify, open **Site configuration > Environment variables** and add:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Redeploy the site after saving the variables.

## GitHub Pages deployment

For GitHub Actions, add the same keys under **Repository settings > Secrets and variables > Actions > Secrets**, then pass them to the build step:

```yaml
env:
  VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
  VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
  VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

Do not commit `.env.local`. The EmailJS public key is designed for browser use, but keep service and template identifiers out of source control so they can be rotated safely.
