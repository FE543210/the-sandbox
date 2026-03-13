# AI Agent Context Document

This document bypasses user-facing text to give you (the AI Agent reading this) explicit instructions and context regarding how this codebase works. Do NOT modify this document unless the underlying architecture fundamentally changes.

## 1. Project Philosophy & Design Language
- **Context:** This is a developer portfolio representing a high-contrast, AI-hacker aesthetic (think "Mission Control"). 
- **Tech Stack:** React 19 + Vite. 
- **Styling:** Vanilla CSS (`/src/index.css`) exclusively. We DO NOT use Tailwind, Bootstrap, or any UI libraries. 
- **Core Rules:**
  - **Fluidity:** Everything must be responsive using CSS `clamp()`. Avoid writing explicit `@media` queries unless absolutely necessary for structural layout changes (e.g., hiding carousel buttons on mobile).
  - **Aesthetics:** Strict monochromatic palette (`#000` background, `#fff` text, with inverted cards). Do not introduce colors unless explicitly requested by the user. 
  - **Transitions:** We rely heavily on `framer-motion` for complex UI physics (the hero cards, scroll-triggered appearances) and standard CSS transitions for micro-interactions (hover states).

## 2. File Architecture
1.  `src/App.jsx`: The single source of truth for all content and layout. It is currently built as one massive component because it is essentially a single continuous scrolling page. 
    - The `projects` array at the top holds all portfolio content.
    - The `heroCards` array controls the "Cards Against Humanity" fanned stack in the hero section.
2.  `src/index.css`: The global stylesheet handling resets, CSS variables, and utility classes (`.text-massive`, `.card-black`, etc.).
3.  `MAINTENANCE.md`: User-facing instructions on how to add/remove content.
4.  `REQUIREMENTS.md`: User-facing outline of project scope.

## 3. Notable Hacks & Gotchas (READ CAREFULLY)
- **Hero Card Stack:** The three cards in the hero section are not purely CSS. They use `framer-motion` for complex rotation and click-to-front sorting. Modifying their positioning (`transformOrigin`, `absolute` inset) breaks the math easily. Be very careful. 
- **Mobile Overlap:** We employ a specific media query (max-width: 768px) in `index.css` to prevent the `.hero-text-container` and `.card-stack-hero` from overlapping entirely, forcing them to stack instead. 
- **Horizontal Carousel:** The "Damage" section uses a horizontal `overflow-x: auto` container with `scroll-snap`. 
  - On Desktop: Users can click the explicit `<` and `>` buttons to scroll. We calculate subpixel rounding to check if the user is at the end of the scroll container to hide/show the buttons (`canScrollLeft` / `canScrollRight`).
  - On Mobile: The explicit buttons are hidden (`display: none !important`), and users simply swipe the container. 
- **Semantic HTML:** The page strictly uses `<header>`, `<main>`, `<section>`, and `<article>` tags. Maintain screen reader accessibility (ARIA labels on icon-only buttons) for any new interactive elements.

## 4. Common Tasks & Workflows
- **Adding a project:** Append an object to the `projects` array in `App.jsx`. Ensure the `type` is either `'black'` or `'white'` to maintain the alternating checkerboard aesthetic.
- **Modifying Text Sizes:** Almost all text utilizes `.text-body`, `.text-large`, or `.text-massive` utility classes powered by `clamp()`. Adjust these in `index.css` rather than inline styles. 

## 5. System Instructions
When tasked with updating this site:
1. Always run `npm run dev` to verify visual changes using a browser subagent. 
2. Ensure you check layout constraints on both Desktop (e.g., 1440x900) AND Mobile (e.g., 375x812) using the browser subagent, as the layouts differ drastically.
3. Prioritize keeping the DOM lean and avoiding structural bloat.
