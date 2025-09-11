# Lou City Painting

A modern, responsive website for a professional residential and commercial painting company. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with modern UI components
- **Service Pages**: Dedicated pages for residential and commercial painting services
- **Contact System**: Functional contact form for customer inquiries
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Includes sitemap, robots.txt, and meta tags

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/loucitypainting/loucitypainting.github.io.git
cd loucitypainting.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ContactForm.tsx  # Contact form component
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── Layout.tsx       # Main layout wrapper
│   ├── NavBar.tsx       # Navigation bar
│   └── ServiceCard.tsx  # Service display cards
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── ResidentialPage.tsx  # Residential services
│   ├── CommercialPage.tsx   # Commercial services
│   ├── ContactPage.tsx      # Contact page
│   ├── PrivacyPage.tsx      # Privacy policy
│   └── TermsPage.tsx        # Terms of service
├── assets/             # Static assets
└── index.css          # Global styles and Tailwind imports
```

## Deployment

This project is configured for deployment to GitHub Pages using the `gh-pages` package.

### Prerequisites for Deployment

1. **GitHub CLI Authentication** (recommended):
   ```bash
   # Install GitHub CLI if not already installed
   # macOS: brew install gh
   # Windows: Download from https://cli.github.com/
   
   # Authenticate with GitHub
   gh auth login
   ```

2. **Alternative: SSH/Personal Access Token**:
   - Ensure your local Git is configured with SSH keys or a personal access token
   - GitHub repository must have Pages enabled

### Deployment Process

The deployment uses a two-branch approach:
- **`main` branch**: Contains your source code
- **`gh-pages` branch**: Contains the built static files (auto-created)

### Manual Deployment

From the main branch, run:

```bash
npm run deploy
```

This command will:
1. Run `npm run build` to create the production build
2. Deploy the `dist/` folder contents to the `gh-pages` branch
3. Push to GitHub, triggering the Pages deployment

### GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch and `/ (root)` folder
5. Your site will be available at: `https://[username].github.io/[repository-name]`

### Deployment Notes

- The site uses HashRouter for client-side routing compatibility with GitHub Pages
- The `public/CNAME` file configures custom domain (if applicable)
- Changes to the main branch can be deployed anytime with `npm run deploy`
- First-time setup may take a few minutes for GitHub Pages to activate

### Troubleshooting Deployment

- Ensure you have push permissions to the repository
- Check that GitHub Pages is enabled in repository settings
- Verify authentication: `gh auth status`
- For permission issues, ensure your GitHub account has access to the repository

## License

This project is private and proprietary to Lou City Painting.
