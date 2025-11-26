# Flash Forward Nonprofit Site

A light-mode Next.js 15 single-page hero with supporting interior pages for the Flash Forward student-led nonprofit. The site uses a scroll-expanding hero, orange/green/yellow palette, and copy sourced directly from the organization repository.

## Stack & Key Dependencies
- Next.js 15 (App Router)
- React 18 & React DOM 18
- TypeScript 5
- Tailwind CSS 3.4 + PostCSS 8 + Autoprefixer 10
- Framer Motion 11 for the scroll-expansion animations
- ESLint 8 with `next/core-web-vitals` configuration

These are all declared in `package.json`; running `npm install` will grab them automatically.

## Prerequisites
- Node.js **18.17.0 or newer** (Next.js 15 requirement)
- npm 9+ (bundled with Node 18). Yarn or pnpm also work if you prefer, just adjust the commands below.

## Getting Started
```bash
# Install dependencies
npm install

# Start the local dev server on http://localhost:3000
npm run dev

# Run the type-safe production build
npm run build

# Start the production server (after build)
npm run start

# Lint the project
npm run lint
```

## Project Structure Highlights
- `app/page.tsx` – entry point, currently re-exporting the hero experience from `app/demo.tsx`.
- `components/blocks/scroll-expansion-hero.tsx` – Framer Motion powered scroll-expand component.
- `components/layout/site-header.tsx` & `components/layout/site-footer.tsx` – shared navigation shell.
- `app/about`, `app/impact`, `app/team`, `app/get-involved`, `app/contact` – internal pages populated with official Flash Forward content.

## Notes
- Remote images are allowed via `next.config.ts` so external Unsplash and GitHub-hosted assets load without extra configuration.
- Tailwind configuration lives in `tailwind.config.ts`; global styles are in `app/globals.css`.
- When deploying to Vercel or another host, no additional environment variables are required.
