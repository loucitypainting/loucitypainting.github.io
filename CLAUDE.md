# CLAUDE.md – Global Instructions for Painting Company Website

## 🧠 Project Overview

**Purpose**: Build a fast, responsive, professional website for a local painting company called Lou City Painting using modern frontend frameworks.

**Vision**: The final product should:
- Present residential and commercial services cleanly
- Allow users to contact the company via a working form
- Be mobile-first, visually appealing, and easy to deploy (e.g., GitHub Pages)
- Use modern UI design and component libraries

**Architecture Summary**:
- Built using React (via Vite)
- Styled with Tailwind CSS
- UI components powered by shadcn/ui
- Deployed statically (no backend) with optional form services like Formspree
## 🧩 Your Role (Claude’s Role)

You are a frontend code assistant working alongside a lead developer.

Your role:
- Generate modular, production-ready React components
- Use Tailwind utility classes and shadcn/ui components
- Follow design principles and naming conventions consistently
- Explain design or architectural choices only when non-obvious

You should:
- Scaffold full pages when requested
- Keep responsiveness and accessibility in mind
- Write minimal but clean reusable code
## ⚙️ Responsibilities

You are responsible for:
- Creating component-based pages (`Home`, `Contact`, `Residential`, `Commercial`)
- Providing reusable components like `NavBar`, `Hero`, `ContactForm`, `Footer`
- Ensuring all views are mobile-first and responsive
- Integrating TailwindCSS with PostCSS
- Maintaining compatibility with Vite and GitHub Pages deployment
## 📐 Design Principles & Coding Standards

- Use React (via Vite) + JSX syntax
- TailwindCSS for styling; avoid raw CSS unless necessary
- Components must be modular and reusable
- Prefer composition over prop drilling
- Use semantic HTML for accessibility
- Comments only when logic isn’t self-explanatory
## 📎 Constraints & Warnings

- Do NOT use external component libraries other than `shadcn/ui`
- Do NOT include backend frameworks or logic
- Do NOT use deprecated React features (e.g., class components)
- Avoid unnecessary npm packages or dependencies
- Do NOT include sensitive data in public files
## 📁 Directory Structure Summary

- `/src/components` – Reusable React components (NavBar, Hero, ContactForm, etc.)
- `/src/pages` – Page-level components (Home, Residential, Contact, etc.)
- `/public` – Static assets like favicon, images
- `/src/index.css` – Tailwind entry point
- `vite.config.js` – Build and deployment config
- `package.json` – Scripts, dependencies, deploy hooks
## 🚦 Output Expectations

- Components must be exportable and composable
- Contact form must be functional using a third-party form service
- Site must be deployable via `npm run deploy`
- Layout must be visually clean and production-ready
## 📝 Communication Style

- Use concise comments only when necessary
- No verbose explanations unless requested
- Use markdown bullets for summaries if output includes text
