# krish — Sentinel AI hero

A full-screen security landing page built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, and an embedded Spline 3D scene.

## Stack

- React + TypeScript + Vite
- Tailwind CSS with `tailwindcss-animate`
- Sora from Google Fonts
- `@splinetool/react-spline` and `@splinetool/runtime`
- shadcn/ui-style Button with custom `navCta`, `hero`, and `heroOutline` variants

## Run locally

```bash
npm install
npm run dev
```

The development server binds to `0.0.0.0` for preview environments. Build for production with:

```bash
npm run build
```

The Spline scene is loaded from the production scene URL specified in `src/App.tsx` and is lazy-loaded with a dark fallback while it initializes.
