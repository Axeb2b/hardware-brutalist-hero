# hardware-brutalist-hero

Hardware Brutalist hero motion site for `harrydev.one`.

Plain HTML, CSS, and minimal vanilla JavaScript. Zero external UI libraries,
zero frameworks, zero build tools.

## Design language

- Colors: `#0A0A0A` black / `#FFFFFF` white / `#CCFF00` acid green / `#FF0000` red
- No gradients, no soft shadows, no border-radius, no blur
- Anton headline at viewport-bleeding scale; JetBrains Mono technical labels;
  Inter body
- Hard offset shadows (`4px 4px 0`), thick 3px borders, tactile
  hover/press translate
- ASCII syntax decoration (`[ ... ]`, `>>>`, `///`)

## Sections

- Full-screen video background, `object-fit: cover` + `mix-blend-mode: screen`,
  with a `rgba(0,0,0,0.7)` scrim for text readability
- Massive "HARRY DEV" headline + `$ >_` tagline
- Pure-CSS terminal marquee (no JS)
- Fixed system status bar with cycling status messages and a blinking block cursor
- Video lazy-load: `IntersectionObserver` plays/pauses when the hero enters/leaves view

## Video provenance

`hardware-loop.webm` / `hardware-loop.web.mp4` — Pexels video 10288594,
"Scrolling Circuit Board Animation" by Dan Cristian Pădureț.
Free license, no attribution required. Re-encoded on-device to a 10s, 720p,
audio-less loop:

- WebM: AV1, ~1.0 MB
- MP4: H.264, ~2.1 MB (fallback)

## Run

Open `index.html` in a browser (the video files sit beside it).
