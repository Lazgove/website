---
name: Portfolio Site — Tech Stack & Structure
description: Next.js 15 App Router portfolio, 3 pages, Three.js playground
type: project
---

**Stack:** Next.js 15.2.4, React 19, Three.js 0.173, CSS Modules, Inter (next/font)
**Style:** Minimalist, off-white bg (#f8f8f6), dark project cards, clean sans-serif typography

**Pages:**
- `/` — Work grid: asymmetric 2-col grid, 8 placeholder project cards (2 featured full-width), dark gradient thumbnails with abstract SVG shapes
- `/playground` — Three.js particle scene (full-width, mouse-interactive) + 4 experiment placeholder slots
- `/about` — Bio, experience timeline, skills grid, education — all sourced from CV

**Key files:**
- `data/projects.js` — project data (add real videos/images here)
- `components/ParticleScene.js` — Three.js particle network, dynamically imported with ssr:false
- `components/ProjectCard.js` — shows "Add video / image" hint on hover

**Why:** Built from blank repo, inspired by philiplueck.com (minimalist motion designer portfolio)
**How to apply:** When adding features, maintain the minimal aesthetic. Project cards are placeholders — user needs to add real video/image assets.
