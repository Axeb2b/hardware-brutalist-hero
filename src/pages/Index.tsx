import { lazy, Suspense } from "react";
import type { Application } from "@splinetool/runtime";

import { Button } from "../components/ui/button";

const Spline = lazy(() => import("@splinetool/react-spline"));

const navLinks = ["Services", "About Us", "Projects", "Team", "Contacts"];
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function sectionHref(label: string) {
  return `#${label.toLowerCase().replaceAll(" ", "-")}`;
}

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-5 lg:px-16">
      <a
        className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-hero-bg"
        href="#services"
      >
        SENTINEL
      </a>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-hero-bg"
            href={sectionHref(link)}
            key={link}
          >
            {link}
          </a>
        ))}
      </div>

      <Button
        className="hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
        onClick={() => {
          window.location.href = "mailto:hello@krish.ai?subject=Security systems quote";
        }}
        size="lg"
        variant="navCta"
      >
        Get Quote
      </Button>
    </nav>
  );
}

function handleSplineLoad(_scene: Application) {
  // Runtime callback reserved for future scene interactions.
}

function MediaDeck() {
  return (
    <aside
      aria-label="Live Sentinel media feed"
      className="pointer-events-none absolute bottom-8 right-8 z-[2] hidden w-[min(26vw,22rem)] lg:block"
      id="projects"
    >
      <div className="mb-3 flex items-center justify-between border-b border-primary/20 pb-2 text-[9px] font-medium uppercase tracking-[0.24em] text-primary/80">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
          Live systems
        </span>
        <span className="text-muted-foreground/70">Grid 03 / Ohio</span>
      </div>

      <div className="grid auto-rows-[4.5rem] grid-cols-5 gap-2">
        <div className="relative col-span-3 row-span-3 overflow-hidden rounded-sm border border-primary/25 bg-hero-bg/60 shadow-[0_0_45px_hsl(var(--primary)/0.08)]">
          <video
            autoPlay
            className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
            loop
            muted
            playsInline
            poster={assetPath("media/pdc-server-room.jpg")}
            preload="metadata"
          >
            <source src={assetPath("hardware-loop.webm")} type="video/webm" />
            <source src={assetPath("hardware-loop.web.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/90 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-foreground/80">
            <span>Sensor lattice</span>
            <span className="text-primary">REC</span>
          </div>
        </div>

        <figure className="relative col-span-2 row-span-2 overflow-hidden rounded-sm border border-primary/20 bg-hero-bg/70">
          <img
            alt="Real server room at the Royal Institute of Technology"
            className="h-full w-full object-cover opacity-70 grayscale mix-blend-screen transition-transform duration-700 hover:scale-105"
            loading="lazy"
            src={assetPath("media/pdc-server-room.jpg")}
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
          <figcaption className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.16em] text-foreground/75">
            Physical layer
          </figcaption>
        </figure>

        <div className="relative col-span-2 row-span-1 overflow-hidden rounded-sm border border-primary/20 bg-hero-bg/70">
          <video
            autoPlay
            className="h-full w-full object-cover opacity-55 grayscale mix-blend-screen"
            loop
            muted
            playsInline
            poster={assetPath("media/cctv-monitor-wall.jpg")}
            preload="metadata"
          >
            <source src={assetPath("cinemaloop.webm")} type="video/webm" />
            <source src={assetPath("cinemaloop.h264.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
          <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.16em] text-foreground/75">
            Visual mesh
          </span>
        </div>

        <figure className="relative col-span-2 row-span-1 overflow-hidden rounded-sm border border-primary/20 bg-hero-bg/70">
          <img
            alt="Real CCTV monitor wall in a control room"
            className="h-full w-full object-cover opacity-60 grayscale mix-blend-screen"
            loading="lazy"
            src={assetPath("media/cctv-monitor-wall.jpg")}
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
          <figcaption className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.16em] text-foreground/75">
            Human review
          </figcaption>
        </figure>
      </div>

      <p className="mt-2 text-right text-[8px] uppercase tracking-[0.16em] text-muted-foreground/50">
        Open standards / zero-trust by default
      </p>
    </aside>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden bg-hero-bg"
      id="services"
    >
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            className="h-full w-full"
            onLoad={handleSplineLoad}
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
          />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-primary/[0.035] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />

      <div className="pointer-events-none absolute right-8 top-28 z-[2] hidden items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-muted-foreground/60 lg:flex">
        <span className="h-px w-10 bg-primary/50" />
        <span>Secure link / 01.04</span>
      </div>

      <MediaDeck />

      <div className="relative z-10 w-full max-w-[90%] pointer-events-none px-6 pb-10 pt-32 sm:max-w-md md:px-10 md:pb-10 lg:max-w-2xl">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-primary/80">
          <span className="h-px w-8 bg-primary" />
          Security infrastructure / 2026
        </p>

        <h1
          className="animate-fade-up mb-2 text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[1.05] tracking-[-0.05em] text-foreground opacity-0 md:mb-4"
          style={{ animationDelay: "0.2s" }}
        >
          SENTINEL <span className="text-primary">AI</span>
        </h1>

        <p
          className="animate-fade-up mb-3 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-foreground/80 opacity-0 md:mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          We implement security correctly.
        </p>

        <p
          className="animate-fade-up mb-4 max-w-2xl text-[clamp(0.875rem,1.5vw,1.25rem)] font-light leading-relaxed text-muted-foreground opacity-0 md:mb-8"
          style={{ animationDelay: "0.55s" }}
        >
          Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
        </p>

        <div
          className="animate-fade-up flex flex-wrap gap-3 font-bold opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            className="pointer-events-auto cursor-pointer rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
            onClick={() => {
              window.location.href = "mailto:hello@krish.ai?subject=Book a call";
            }}
            type="button"
          >
            Book a Call
          </button>
          <button
            className="pointer-events-auto cursor-pointer rounded-sm bg-white px-6 py-3 text-sm text-background transition-all hover:brightness-90 active:scale-[0.97]"
            onClick={() => {
              window.location.hash = "projects";
            }}
            type="button"
          >
            Our Work
          </button>
        </div>

        <p
          className="animate-fade-up mt-4 text-xs font-light text-muted-foreground/60 opacity-0 md:mt-6"
          style={{ animationDelay: "0.85s" }}
        >
          Trusted security partner. Columbus, OH. 12 systems deployed.
        </p>
      </div>
    </section>
  );
}

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-hero-bg">
      <Navbar />
      <HeroSection />
    </div>
  );
}
