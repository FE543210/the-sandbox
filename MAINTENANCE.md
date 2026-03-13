# Portfolio Maintenance Guide

This document outlines how to maintain, update, and deploy the portfolio.

## 1. Local Development Directory Structure
- `/src/App.jsx`: The core application file containing all layout, logic, and content.
- `/src/index.css`: Global styles, CSS variables, and responsive media queries.
- `package.json`: Dependency listing and scripts.

## 2. Updating Content

### 2.1 Adding a New Project
Projects are stored in an array at the top of `src/App.jsx`. To add a new project, insert a new object into the `projects` array:

```javascript
{
  title: 'Project Title',
  description: 'A brief description of what the project does.',
  tech: ['React', 'Node.js'], // Array of strings
  link: 'https://example.com', // Live URL
  github: 'https://github.com/yourusername/repo', // Source URL
  type: 'white' // 'white' or 'black' to dictate the card's styling
}
```

### 2.2 Updating the Hero Cards
The hero cards are defined in the `heroCards` array inside the `App` component in `src/App.jsx`. Each object requires an `id`, a `className` for styling, and a `content` property containing the React elements to render.

## 3. Styling Guidelines
The project relies on a strict high-contrast aesthetic. 
- Use the CSS variables defined in `/src/index.css` (`--black`, `--white`, `--grey`).
- **Responsive Sizing:** Use the `clamp()` CSS function for font sizes, padding, and layout bounds to ensure fluidity across devices without requiring excessive media queries.
- **Animations:** All complex mathematical or physics-based animations (like the hero card stack) should rely on `framer-motion`. Do not attempt to rebuild spring physics using raw CSS transitions.

## 4. Development Commands
- `npm install`: Installs dependencies.
- `npm run dev`: Starts the Vite local development server.
- `npm run build`: Bundles the application for production. The output will be in the `/dist` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 5. Deployment
The project is a standard Vite React application and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). 

**Standard Deployment Steps:**
1. Connect the repository to your hosting provider.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
