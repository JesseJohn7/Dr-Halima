"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay: string) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
  });

  const fadeIn = (delay: string) => ({
    opacity: loaded ? 1 : 0,
    transition: `opacity 1s ease ${delay}`,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Cinzel:wght@500;600;700;900&family=Lato:wght@300;400;700&display=swap');

        .font-cinzel    { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-lato      { font-family: 'Lato', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.15); }
        }

        .animate-float        { animation: float 6s ease-in-out infinite; }
        .animate-scroll-pulse { animation: scrollPulse 2s ease-in-out infinite; }

        /* shimmer gold bar */
        .gold-rule {
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        /* Primary CTA */
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-primary:hover::after  { transform: translateX(100%); }
        .btn-primary:hover         { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(163,118,46,0.38); }

        /* Secondary CTA */
        .btn-secondary {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #A3762E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 0;
        }
        .btn-secondary:hover::before { transform: scaleX(1); }
        .btn-secondary:hover         { color: #fff !important; transform: translateY(-2px); }
        .btn-secondary > *           { position: relative; z-index: 1; }

        /* Image frame decorative border */
        .image-frame {
          position: relative;
        }
        .image-frame::before {
          content: '';
          position: absolute;
          inset: -14px -14px 14px 14px;
          border: 1.5px solid rgba(163,118,46,0.22);
          pointer-events: none;
          z-index: 0;
        }
        .image-frame::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: -22px;
          right: 22px;
          height: 55%;
          background: linear-gradient(135deg, rgba(163,118,46,0.1), rgba(163,118,46,0.03));
          z-index: -1;
        }

        /* Watermark */
        .watermark {
          position: absolute;
          font-family: 'Cinzel', serif;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.055);
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.08em;
          top: 50%;
          left: -1%;
          transform: translateY(-50%);
          font-size: clamp(5rem, 13vw, 10rem);
        }

        /* Tag pill */
        .tag-pill {
          font-family: 'Cinzel', serif;
          font-size: 0.52rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.38rem 0.85rem;
          border: 1px solid rgba(163,118,46,0.28);
          color: #A3762E;
          background: rgba(163,118,46,0.04);
          transition: background 0.25s, color 0.25s;
        }
        .tag-pill:hover {
          background: rgba(163,118,46,0.1);
        }
      `}</style>

      <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-[72px]">

        {/* Top gold bar */}
        <div className="absolute top-[72px] left-0 right-0 h-[3px] gold-rule z-10" />

        {/* Watermark */}
        <span className="watermark hidden lg:block" aria-hidden>HALIMA</span>

        {/* Dot-grid subtle bg */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(163,118,46,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Left accent bar */}
        <div className="absolute left-0 top-[72px] bottom-0 w-[5px] bg-[#A3762E] hidden lg:block" style={fadeIn("0.15s")} />

        {/* ═══════════════ GRID ═══════════════ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

            {/* ─────────────── LEFT — TEXT (always first) ─────────────── */}
            <div className="order-1 flex flex-col">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8" style={fadeUp("0.1s")}>
                <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
                <span
                  className="font-cinzel text-[#A3762E] uppercase tracking-[0.32em]"
                  style={{ fontSize: "0.56rem" }}
                >
                  Scholar · Teacher · Communicator · Voice of Hope
                </span>
              </div>

              {/* NAME BLOCK */}
              <div className="mb-2" style={fadeUp("0.2s")}>

                {/* Rev. Dr. prefix */}
                <p
                  className="font-cinzel text-[#A3762E] uppercase mb-3 tracking-[0.32em]"
                  style={{ fontSize: "0.78rem", fontWeight: 600 }}
                >
                  Rev. Dr.
                </p>

                {/* ── Line 1: Halima Ishaku — forced single line ── */}
                <div className="flex flex-wrap items-baseline gap-x-4 leading-[1.0] mb-1">
                  <h1
                    className="font-cormorant italic text-[#A3762E] leading-[1.0] whitespace-nowrap"
                    style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)", fontWeight: 700 }}
                  >
                    Halima
                  </h1>
                  <h1
                    className="font-cormorant text-[#1A1208] leading-[1.0] whitespace-nowrap"
                    style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)", fontWeight: 600 }}
                  >
                    Ishaku
                  </h1>
                </div>

                {/* ── Line 2: Adamu wraps below ── */}
                <h1
                  className="font-cormorant text-[#1A1208] leading-[1.0]"
                  style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)", fontWeight: 600 }}
                >
                  Adamu
                  <span className="text-[#A3762E]">.</span>
                </h1>
              </div>

              {/* Gold triple-diamond divider */}
              <div className="flex items-center gap-3 my-7" style={fadeIn("0.4s")}>
                <div className="h-px w-24 shrink-0" style={{ background: "linear-gradient(to right,#A3762E,transparent)" }} />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0 opacity-40" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
              </div>

              {/* Tagline */}
              <p
                className="font-cormorant italic text-[#4A3520] leading-[1.8] mb-9"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 400, ...fadeUp("0.5s") }}
              >
                Equipping lives through the Word.<br />
                Inspiring perseverance through faith.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-9" style={fadeUp("0.6s")}>
                {["Biblical Scholar", "Author", "Daily Jukun Sermons", "Faith Speaker"].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" style={fadeUp("0.72s")}>
                <a
                  href="#book"
                  className="btn-primary font-cinzel font-bold uppercase bg-[#A3762E] text-white inline-flex items-center justify-center gap-2 no-underline"
                  style={{ fontSize: "0.62rem", letterSpacing: "0.18em", padding: "1rem 1.8rem" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z"/>
                  </svg>
                  Pre-Order The Beauty of Perseverance
                </a>

                <a
                  href="#sermons"
                  className="btn-secondary font-cinzel uppercase border border-[#A3762E] text-[#A3762E] inline-flex items-center justify-center gap-2 no-underline"
                  style={{ fontSize: "0.62rem", letterSpacing: "0.18em", padding: "1rem 1.8rem" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span>Listen to Daily Jukun Sermons</span>
                </a>
              </div>

              {/* Scroll indicator (desktop only) */}
              <div className="hidden lg:flex items-center gap-3 mt-14" style={fadeIn("1.4s")}>
                <div className="w-px h-10 animate-scroll-pulse" style={{ background: "linear-gradient(to bottom,#A3762E,transparent)" }} />
                <span className="font-cinzel text-[#A3762E] uppercase opacity-50" style={{ fontSize: "0.48rem", letterSpacing: "0.4em" }}>
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* ─────────────── RIGHT — IMAGE ─────────────── */}
            <div className="order-2 flex justify-center lg:justify-end" style={fadeIn("0.3s")}>
              <div className="image-frame animate-float w-full max-w-[390px] lg:max-w-[450px]">

                {/* Corner brackets */}
                <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-[#A3762E] z-10" />
                <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-[#A3762E] z-10" />

                {/* Image area */}
                <div className="relative overflow-hidden bg-[#F5EFE0]" style={{ aspectRatio: "3/4" }}>

                  <Image
                    src="/halima.png"
                    alt="Rev. Dr. Halima Ishaku Adamu"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(245,239,224,0.55),transparent)" }}
                  />
                </div>

                {/* Name badge */}
                <div className="relative z-10 bg-white border-t-2 border-[#A3762E] px-5 py-4 flex items-center justify-between shadow-sm">
                  <div>
                    <p
                      className="font-cinzel text-[#A3762E] uppercase mb-1 tracking-[0.28em]"
                      style={{ fontSize: "0.6rem", fontWeight: 600 }}
                    >
                      Rev. Dr.
                    </p>
                    <p
                      className="font-cormorant text-[#1A1208]"
                      style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                      Halima Ishaku Adamu
                    </p>
                  </div>
                  {/* Cross */}
                  <div className="relative w-5 h-5 opacity-30 shrink-0 ml-3">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#A3762E]" />
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-[#A3762E]" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom gold rule */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-rule" style={fadeIn("1.5s")} />
      </section>
    </>
  );
}