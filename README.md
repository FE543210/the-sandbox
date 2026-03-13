# The Sandbox: Minimalist Developer Portfolio

A developer portfolio stripped of excess, focusing purely on high-contrast aesthetics and fluid interactions. Built specifically to showcase an array of AI engineering projects.

## Project Structure

This project has been deliberately built to minimize dependency bloat and structural complexity. It avoids massive component libraries in favor of tailored CSS and precise math.

- **Frontend:** React 19 + Vite
- **Styling:** Native CSS Variables & `clamp()` for responsive fluidity. No Tailwind or Bootstrap.
- **Animations:** Framer Motion for complex physics-based movement (e.g., the tiered hero cards).

## Documentation

For instructions on how to maintain, expand, or contribute to this portfolio, please refer to the dedicated documentation files rather than this general README:

- **[Requirements Document (REQUIREMENTS.md)](./REQUIREMENTS.md)**: Details the core visual, accessibility, and functional specifications of the site.
- **[Maintenance Guide (MAINTENANCE.md)](./MAINTENANCE.md)**: Learn how to add new projects to the carousel, modify content, and adjust styling variables.
- **[AI Agent Context (AI.md)](./AI.md)**: A specialized file designed specifically for LLMs. If you are an AI attempting to update or repair this site, **read this file first** to understand the explicit architectural rules and CSS math.

## Getting Started Locally

To run this project on your own machine:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
