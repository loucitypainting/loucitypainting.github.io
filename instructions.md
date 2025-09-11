# instructions.md – Development Phases for Painting Company Website

These are step-by-step instructions Claude must follow to help implement the frontend of the Lou City Painting site using Vite, React, Tailwind CSS, and shadcn/ui. Follow the CLAUDE.md design principles at all times.

---

## 🚧 Phase 1: Project Initialization & Configuration

- [ ] Ensure `vite + react` project is initialized
- [ ] Add TailwindCSS, PostCSS, and autoprefixer via npm
- [ ] Generate `tailwind.config.js` and `postcss.config.js`
- [ ] Set `content` paths in Tailwind config to include `index.html` and all files in `src/**/*.{js,jsx,ts,tsx}`
- [ ] Configure `vite.config.js` with correct `base` if deploying to GitHub Pages

---

## 🎨 Phase 2: Layout & Routing Structure

- [ ] Set up routing using `react-router-dom`
- [ ] Create a top-level `Layout.jsx` component to wrap all routes with:
    - `<NavBar />` at top
    - `<Footer />` at bottom
- [ ] Define routes:
    - `/` → HomePage
    - `/residential` → ResidentialPage
    - `/commercial` → CommercialPage
    - `/contact` → ContactPage

---

## 🧱 Phase 3: Component Development

Develop the following components using Tailwind + shadcn/ui:

- [ ] `NavBar.jsx`
    - Sticky top nav
    - Links to all major pages
    - Mobile responsive (burger menu optional)

- [ ] `Hero.jsx`
    - Eye-catching welcome section for the homepage
    - Call-to-action button ("Get a Free Quote")

- [ ] `ServiceCard.jsx`
    - Reusable component to describe a service (icon, title, short description)

- [ ] `ContactForm.jsx`
    - Functional form (name, email, message)
    - Integrate with Formspree or Getform
    - Include success/error messages

- [ ] `Footer.jsx`
    - Business name
    - Copyright
    - Contact info or social media icons

---

## 📄 Phase 4: Page Assembly

- [ ] **HomePage**
    - Hero section
    - Quick links or summaries to Residential/Commercial
    - Testimonials or reviews (optional)

- [ ] **ResidentialPage**
    - List of residential services using `ServiceCard`
    - Call-to-action at bottom

- [ ] **CommercialPage**
    - List of commercial services using `ServiceCard`
    - Highlight industries served

- [ ] **ContactPage**
    - Render `ContactForm`
    - Add business contact info below form

---

## 🚀 Phase 5: Styling Polish

- [ ] Apply consistent spacing, font sizes, and color scheme using Tailwind
- [ ] Ensure mobile responsiveness with `sm:`, `md:`, and `lg:` breakpoints
- [ ] Add hover transitions and shadows for interactivity
- [ ] Ensure accessibility (e.g., label elements, semantic HTML)

---

## 🔍 Phase 6: SEO & Discoverability Optimization

- [ ] Add `<title>` and `<meta name="description">` to every page with unique, keyword-rich content
- [ ] Use Open Graph and Twitter Card meta tags in `<head>` for social preview
- [ ] Include city and region-specific keywords ("Louisville, KY", "house painting", "commercial painting") in page content
- [ ] Add `<link rel="canonical">` to all pages
- [ ] Use semantic HTML (h1, h2, p, section, article, etc.)
- [ ] Generate `public/robots.txt` to allow indexing
- [ ] Generate `public/sitemap.xml` linking to all main pages
- [ ] On homepage and contact page, embed `application/ld+json` structured data using the `LocalBusiness` schema
- [ ] Make sure page load performance is optimized (images lazy-loaded, minimal unused JS)


---

## 🌐 Phase 7: GitHub Pages Deployment

*This phase can be skipped for now per user direction.*

- [ ] Install `gh-pages`
- [ ] Add `homepage` field in `package.json`
- [ ] Add deploy script using `gh-pages -d dist`
- [ ] Run `npm run deploy` to publish to GitHub Pages

---

## ✅ Final Checklist

- [ ] Mobile-first and responsive
- [ ] Functional contact form
- [ ] Uses Tailwind + shadcn/ui for UI
- [ ] Clean, modern design with logical structure
- [ ] All components and pages modular and reusable


