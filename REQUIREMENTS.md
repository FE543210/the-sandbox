# Portfolio Requirements Document

## 1. Project Overview
A single-page, developer-focused portfolio designed to showcase projects with a strong, opinionated "AI/Cyberpunk/Mission Control" aesthetic. The site highlights the developer's work through a fluid, responsive interface heavily utilizing modern CSS and Framer Motion animations.

## 2. Core Requirements

### 2.1 Visual Design & Aesthetic
- High-contrast monochromatic theme (Black & White).
- Typography must utilize the `Inter` font, prioritizing readability with bold (`900` weight) headings.
- "Cards Against Humanity" (CAH) style hero section featuring an interactive, fanned card stack.
- Subtle but impactful micro-interactions (hover states, scaling, drop shadows).
- Native-feeling scrolling and snapping interactions.

### 2.2 Functional Requirements
- **Hero Section:**
  - Display a prominent hook/tagline.
  - Interactive stack of 3 hero cards. Clicking a card should bring it to the front of the stack with smooth physics-based animation.
- **Projects Section ("The Damage"):**
  - Horizontal scrolling carousel of project cards.
  - Support both discrete left/right arrow navigation and native horizontal scroll/swipe.
  - Project cards must display: Title, Description, Technology Stack tags, Source link, and Live link.
  - Cards should alternate in style (black-on-white vs white-on-black).
- **Contact/Footer Section:**
  - Display a call-to-action (CTA).
  - Provide a mailto link button for direct contact.
- **Accessibility:**
  - Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Aria-labels on icon-only interactive elements.

### 2.3 Technical Requirements
- Build Tool: Vite
- UI Library: React (v19)
- Styling: Plain CSS (`index.css`) with minimal classes, relying heavily on CSS Variables and `clamp()` for responsive fluid typography and sizing.
- Animation: Framer Motion for complex physics-based UI transitions (card shuffling, scroll reveal).
- Icons: Lucide React.
- Mobile Responsiveness: Must function perfectly on mobile devices, hiding desktop-specific controls (like carousel buttons) and adapting layout via media queries and CSS `clamp`.

## 3. Scope Exclusions
- Backend infrastructure (static site only).
- Routing (implemented as a single, continuous scrolling page).
- Complex state management libraries (Redux/Zustand not required; React `useState` is sufficient).
