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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');

        .font-cinzel    { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-lato      { font-family: 'Lato', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.15); }
        }
        @keyframes draw {
          from { stroke-dashoffset: 400; }
          to   { stroke-dashoffset: 0; }
        }

        .animate-float        { animation: float 6s ease-in-out infinite; }
        .animate-scroll-pulse { animation: scrollPulse 2s ease-in-out infinite; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          background-size: 200% 100%;
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-primary:hover::after  { transform: translateX(100%); }
        .btn-primary:hover         { transform: translateY(-2px); box-shadow: 0 10px 35px rgba(163,118,46,0.35); }

        .btn-secondary {
          position: relative;
          transition: all 0.3s ease;
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
        .btn-secondary:hover         { color: #fff; transform: translateY(-2px); }
        .btn-secondary span          { position: relative; z-index: 1; }

        .image-card {
          position: relative;
        }
        .image-card::before {
          content: '';
          position: absolute;
          inset: -12px -12px 12px 12px;
          border: 1.5px solid rgba(163,118,46,0.25);
          border-radius: 2px;
          pointer-events: none;
          z-index: 0;
        }
        .image-card::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -20px;
          right: 20px;
          height: 60%;
          background: linear-gradient(135deg, rgba(163,118,46,0.12), rgba(163,118,46,0.04));
          z-index: -1;
          border-radius: 2px;
        }

        .gold-rule {
          height: 2px;
          background: linear-gradient(to right, #A3762E, #E8C97A, #A3762E);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .watermark-text {
          position: absolute;
          font-family: 'Cinzel', serif;
          font-size: clamp(5rem, 12vw, 9rem);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.07);
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
          top: 50%;
          left: -2%;
          transform: translateY(-50%);
        }
      `}</style>

      <section className="relative min-h-screen bg-white font-lato overflow-hidden flex items-center">

        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] gold-rule z-20" />

        {/* Background watermark */}
        <span className="watermark-text select-none" aria-hidden>HALIMA</span>

        {/* Faint dot grid pattern left side */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #A3762E 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gold accent block — decorative far left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block"
          style={fadeIn("0.2s")}
        />

        {/* ══════════ MAIN GRID ══════════ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* ── LEFT: Text Content ── */}
            <div className="order-2 lg:order-1 flex flex-col">

              {/* Eyebrow label */}
              <div className="flex items-center gap-3 mb-8" style={fadeUp("0.1s")}>
                <div className="w-8 h-[2px] bg-[#A3762E]" />
                <span className="font-cinzel text-[0.6rem] tracking-[0.4em] text-[#A3762E] uppercase">
                  Scholar · Teacher · Communicator · Voice of Hope
                </span>
              </div>

              {/* Name */}
              <div style={fadeUp("0.25s")}>
                <p className="font-cinzel text-[0.75rem] tracking-[0.3em] text-[#A3762E] uppercase mb-3">
                  Rev. Dr.
                </p>
                <h1
                  className="font-cormorant font-light text-[#1A1208] leading-[1.05] mb-2"
                  style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
                >
                  Halima
                </h1>
                <h1
                  className="font-cormorant italic text-[#A3762E] leading-[1.05] mb-2"
                  style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)", fontWeight: 300 }}
                >
                  Ishaku
                </h1>
                <h1
                  className="font-cormorant font-light text-[#1A1208] leading-[1.05]"
                  style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
                >
                  Adamu
                </h1>
              </div>

              {/* Gold divider */}
              <div className="flex items-center gap-3 my-8" style={fadeIn("0.45s")}>
                <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to right, #A3762E, transparent)" }} />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0 opacity-40" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
              </div>

              {/* Tagline */}
              <p
                className="font-cormorant italic text-[#4A3520] leading-[1.75] mb-10"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)", ...fadeUp("0.55s") }}
              >
                Equipping lives through the Word.<br />
                Inspiring perseverance through faith.
              </p>

              {/* Ministry tags */}
              <div className="flex flex-wrap gap-2 mb-10" style={fadeUp("0.65s")}>
                {["Biblical Scholar", "Author", "Daily Jukun Sermons", "Faith Speaker"].map((tag) => (
                  <span
                    key={tag}
                    className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase px-3 py-[0.4rem] border border-[rgba(163,118,46,0.3)] text-[#A3762E] bg-[rgba(163,118,46,0.04)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" style={fadeUp("0.75s")}>
                <a
                  href="#book"
                  className="btn-primary font-cinzel font-bold text-[0.65rem] tracking-[0.18em] uppercase px-8 py-4 bg-[#A3762E] text-white inline-flex items-center justify-center gap-3 cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z"/>
                  </svg>
                  Pre-Order The Beauty of Perseverance
                </a>

                <a
                  href="#sermons"
                  className="btn-secondary font-cinzel text-[0.65rem] tracking-[0.18em] uppercase px-8 py-4 border border-[#A3762E] text-[#A3762E] inline-flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </span>
                  <span>Listen to Daily Jukun Sermons</span>
                </a>
              </div>

              {/* Scroll indicator */}
              <div
                className="hidden lg:flex items-center gap-3 mt-16"
                style={fadeIn("1.4s")}
              >
                <div className="w-px h-10 animate-scroll-pulse" style={{ background: "linear-gradient(to bottom,#A3762E,transparent)" }} />
                <span className="font-cinzel text-[0.5rem] tracking-[0.4em] text-[#A3762E] uppercase opacity-60">Scroll to explore</span>
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end" style={fadeIn("0.3s")}>
              <div className="image-card animate-float w-full max-w-[420px] lg:max-w-[480px]">

                {/* Decorative gold corner top-left */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#A3762E] z-10" />
                {/* Decorative gold corner bottom-right */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#A3762E] z-10" />

                {/* Image container */}
                <div className="relative overflow-hidden bg-[#F5EFE0]" style={{ aspectRatio: "3/4" }}>
                  {/* Placeholder – swap src with real image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#F5EFE0] via-[#EDE0C4] to-[#D4B896]">
                    {/* Silhouette placeholder */}
                    <svg viewBox="0 0 200 280" className="w-3/4 opacity-20" fill="#A3762E">
                      <ellipse cx="100" cy="70" rx="45" ry="50" />
                      <path d="M30 280 Q30 160 100 150 Q170 160 170 280Z" />
                    </svg>
                    <p className="font-cinzel text-[0.6rem] tracking-[0.3em] text-[#A3762E] uppercase opacity-60 mt-4 absolute bottom-6">
                      Photo Placeholder
                    </p>
                  </div>

                  {/* If you have an actual image, replace the div above with:
                  <Image
                    src="/images/halima.jpg"
                    alt="Rev. Dr. Halima Ishaku Adamu"
                    fill
                    className="object-cover object-top"
                    priority
                  /> */}

                  {/* Subtle overlay gradient at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(245,239,224,0.6), transparent)" }}
                  />
                </div>

                {/* Name badge below image */}
                <div className="relative z-10 bg-white border-t-2 border-[#A3762E] px-6 py-4 flex items-center justify-between shadow-sm">
                  <div>
                    <p className="font-cinzel text-[0.55rem] tracking-[0.3em] text-[#A3762E] uppercase mb-0.5">Rev. Dr.</p>
                    <p className="font-cormorant text-[#1A1208] font-light" style={{ fontSize: "1.1rem", letterSpacing: "0.02em" }}>
                      Halima Ishaku Adamu
                    </p>
                  </div>
                  {/* Small cross icon */}
                  <div className="relative w-6 h-6 opacity-40">
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