# krish — Sentinel AI hero

A full-screen security landing page built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, an embedded Spline 3D scene, real security infrastructure photography, and looping hardware footage.

## Stack

- React + TypeScript + Vite
- Tailwind CSS with `tailwindcss-animate`
- Sora from Google Fonts
- `@splinetool/react-spline` and `@splinetool/runtime`
- shadcn/ui-style Button with custom `navCta`, `hero`, and `heroOutline` variants
- GitHub Pages deployment via `.github/workflows/deploy-pages.yml`

## Run locally

```bash
npm install
npm run dev
```

The development server binds to `0.0.0.0` for preview environments. Build for production with:

```bash
npm run build
```

The GitHub Pages build automatically uses the `/hardware-brutalist-hero/` base path so the published site works at:

https://axeb2b.github.io/hardware-brutalist-hero/

The Spline scene is loaded from the production scene URL specified in `src/pages/Index.tsx` and is lazy-loaded with a dark fallback while it initializes. The media deck uses the existing hardware/circuit videos in the repository and locally-served real photographs from Wikimedia Commons.

## Image credits

- `public/media/pdc-server-room.jpg` — Johan Fredriksson / Esquilo, “PDC server room”, CC BY-SA 3.0, Wikimedia Commons.
- `public/media/cctv-monitor-wall.jpg` — Mark Yeomans, “CCTV control room monitor wall”, CC BY-SA 4.0, Wikimedia Commons.
