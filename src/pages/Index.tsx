import { lazy, Suspense } from "react";
import type { Application } from "@splinetool/runtime";

import { Button } from "../components/ui/button";

const Spline = lazy(() => import("@splinetool/react-spline"));

const navLinks = ["Services", "About Us", "Projects", "Team", "Contacts"];

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
        size="lg"
        variant="navCta"
      >
        Get Quote
      </Button>
    </nav>
  );
}

function handleSplineLoad(_scene: Application) {
  // Keeping the runtime callback here makes it easy to add scene interactions later.
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

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />

      <div className="relative z-10 w-full max-w-[90%] pointer-events-none px-6 pb-10 pt-32 sm:max-w-md md:px-10 md:pb-10 lg:max-w-2xl">
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
          className="animate-fade-up mb-4 text-[clamp(0.875rem,1.5vw,1.25rem)] font-light leading-relaxed text-muted-foreground opacity-0 md:mb-8"
          style={{ animationDelay: "0.55s" }}
        >
          Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
        </p>

        <div
          className="animate-fade-up flex flex-wrap gap-3 font-bold opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            className="pointer-events-auto cursor-pointer rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:px-8 md:py-4"
            onClick={() => {
              window.location.href = "mailto:hello@krish.ai?subject=Book a call";
            }}
            type="button"
          >
            Book a Call
          </button>
          <button
            className="pointer-events-auto cursor-pointer rounded-sm bg-white px-6 py-3 text-sm text-background transition-all hover:brightness-90 active:scale-[0.97] md:px-8 md:py-4"
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
