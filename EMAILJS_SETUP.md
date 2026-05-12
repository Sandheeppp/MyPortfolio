# EmailJS Contact Form Setup

This repository includes a fully functional contact form with EmailJS integration. The contact form is implemented in both:
- Static HTML: `contact.html` (ready to use)
- React component: `src/components/ContactForm.jsx` (for Vite React apps)

## Static HTML Setup (Recommended for this portfolio)

### 1. Get EmailJS Credentials
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with these variables:
   - `from_name`
   - `reply_to` 
   - `subject`
   - `message`

### 2. Update contact.html
Replace the placeholder values in `contact.html`:
```javascript
// Line 399: Replace with your EmailJS public key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 440: Replace with your service ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

### 3. Template Example
Create an email template with this content:
```
Hello,

You have a new message from {{from_name}} ({{reply_to}}):

Subject: {{subject}}

{{message}}

---
Sent via your portfolio contact form
```

## React Setup (Alternative)

### Install dependencies

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
