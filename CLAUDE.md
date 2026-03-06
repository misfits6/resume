# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # ESLint (zero warnings allowed)
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
```

## Architecture

This is a single-page React resume/CV site built with Vite and Tailwind CSS, deployed to GitHub Pages at `misfits6.github.io/resume`.

**Data source:** All CV content lives in `cv.json` at the project root. Each section component imports its relevant slice directly from this JSON file (e.g., `import { work } from "../../../cv.json"`). To update resume content, edit `cv.json`.

**Section pattern:** Every section uses the shared `Section` wrapper component (`src/components/Section.jsx`) which enforces consistent layout (`container mx-auto mb-12 max-w-3xl`). New sections should follow this pattern.

**Sections rendered in `App.jsx` (in order):**
- `Hero` — name, title, location, contact links (from `basics`)
- `About` — summary (from `basics.summary`)
- `Experience` — work history (from `work`)
- `Education` — education (from `education`)
- `Pubilish` — publications (from `publications`) — note the intentional typo in component name
- `Voluntary` — volunteer work
- `Lenguage` — languages (from `languages`) — note the intentional typo in component name
- `Skills` — skills list
- `Projects` — currently commented out

**Vite config:** `base` is set to `/resume/` for GitHub Pages subdirectory hosting.

**Image:** Profile photo is referenced as `cv3.jpeg` in `cv.json` and must exist in the public directory or be resolvable by Vite.
