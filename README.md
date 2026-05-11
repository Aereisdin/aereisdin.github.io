# aereisdin.github.io

Personal portfolio site for Kiel Sprague, built with React, TypeScript, and Vite. The site is deployed to GitHub Pages at:

https://aereisdin.github.io

## Overview

This project is a static, prerendered portfolio site with multilingual routes:

- `/` - English
- `/es/` - Spanish
- `/ja/` - Japanese
- `/de/` - German

The React app is rendered once per supported language during the production build. The prerender step also writes `robots.txt` and `sitemap.xml` into `dist`.

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- GitHub Pages
- `vite-plugin-svgr` for importing SVG files as React components

## Project Structure

```text
src/
  App.tsx                  Main page composition
  AppRoot.tsx              App wrapper with language provider
  entry-server.tsx         SSR/prerender entry point
  siteConfig.ts            Site URL, social links, preview image config
  i18n/
    siteCopy.ts            All localized site copy
    languageRoutes.ts      Language route helpers
    LanguageContext.tsx    Runtime language provider
  components/              Page sections and shared UI
  assets/                  Imported images and SVGs

scripts/
  prerender.mjs            Writes static language pages and SEO files

public/
  favicon.svg
  social-preview.png
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Build Flow

The production build runs:

1. TypeScript project build with `tsc -b`
2. Vite client build into `dist`
3. Vite SSR build into `dist/server`
4. Static prerender via `scripts/prerender.mjs`

The prerender script imports the server bundle, renders each supported language route, injects language-specific metadata, writes the sitemap and robots file, then removes the temporary server bundle.

## Editing Content

Most site text lives in:

```text
src/i18n/siteCopy.ts
```

Shared metadata and external links live in:

```text
src/siteConfig.ts
```

When adding a language, update:

- `supportedLanguages` and `siteCopy` in `src/i18n/siteCopy.ts`
- `localeMap` in `src/entry-server.tsx`

## Deployment

Deployment is handled by GitHub Actions:

```text
.github/workflows/deploy.yml
```

On pushes to `main`, the workflow installs dependencies, runs `npm run build`, uploads `dist`, and deploys it through GitHub Pages.
