import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('board');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl bg-black/90">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl text-white/90">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-orange-400" />
            <span>AI Wireframe & High-Fidelity Generator</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Generate complete moodboards and functional prototypes from a short prompt
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Paste a concept like “modern SaaS dashboard” or “minimal portfolio website” and get curated references, layout templates, color palette, and an interactive board.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleScroll}
              className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Start Designing
            </button>
            <a
              href="#references"
              className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Browse References
            </a>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
    </section>
  );
};

export default Hero;
