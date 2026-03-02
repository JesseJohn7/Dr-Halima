"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const themes = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    label: "Faith Under Pressure",
    desc: "Anchoring the soul when circumstances press hardest.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: "Divine Timing & Hope",
    desc: "Trusting God's calendar when yours runs out.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "Character Formation",
    desc: "How trials sculpt the man and woman God envisions.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Spiritual Maturity",
    desc: "Growing deeper roots through seasons of waiting.",
  },
];

export default function BookPage() {
  const [visible, setVisible] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fadeUp = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
  });

  const fadeIn = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1s ease ${delay}`,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Cinzel:wght@500;600;700;900&family=Lato:wght@300;400;700&display=swap');

        .font-cinzel    { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-lato      { font-family: 'Lato', sans-serif; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float-book {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%       { transform: translateY(-14px) rotate(-2deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.75; }
        }

        .gold-rule {
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .book-float { animation: float-book 5s ease-in-out infinite; }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: glow-pulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        .theme-card {
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(163,118,46,0.18);
          background: rgba(163,118,46,0.02);
          transition: all 0.3s ease;
          padding: 0.9rem 1.1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .theme-card:hover,
        .theme-card.active {
          background: rgba(163,118,46,0.07);
          border-color: rgba(163,118,46,0.45);
          transform: translateX(4px);
        }
        .theme-card.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #A3762E;
        }
        .theme-icon {
          color: #A3762E;
          opacity: 0.75;
          margin-top: 2px;
          flex-shrink: 0;
          transition: opacity 0.25s;
        }
        .theme-card.active .theme-icon,
        .theme-card:hover .theme-icon { opacity: 1; }

        .btn-order {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 0.64rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #A3762E;
          color: #fff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
        }
        .btn-order::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-order:hover::after  { transform: translateX(100%); }
        .btn-order:hover         { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(163,118,46,0.38); }

        .btn-sample {
          position: relative;
          overflow: hidden;
          font-family: 'Cinzel', serif;
          font-size: 0.64rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1.5px solid #A3762E;
          color: #A3762E;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .btn-sample::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #A3762E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 0;
        }
        .btn-sample:hover::before { transform: scaleX(1); }
        .btn-sample:hover         { color: #fff; transform: translateY(-2px); }
        .btn-sample > *           { position: relative; z-index: 1; }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 28px;
          background: linear-gradient(to right, #6B4A1A, #A3762E);
          z-index: 2;
        }
        .book-cover-shadow {
          position: absolute;
          inset: 0;
          box-shadow: inset -8px 0 20px rgba(0,0,0,0.18), inset 8px 0 12px rgba(255,255,255,0.05);
          z-index: 3;
          pointer-events: none;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          line-height: 1;
          color: #A3762E;
          opacity: 0.18;
          font-style: italic;
          position: absolute;
          top: -1rem;
          left: -0.5rem;
          user-select: none;
        }

        .watermark-book {
          position: absolute;
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(4rem, 10vw, 8rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.05);
          top: 50%;
          right: -2%;
          transform: translateY(-50%);
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          letter-spacing: 0.1em;
        }
      `}</style>

      <section
        id="book"
        ref={ref}
        className="relative bg-white overflow-hidden font-lato py-24 lg:py-32"
      >
        {/* Top gold bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] gold-rule" />

        {/* Watermark */}
        <span className="watermark-book hidden lg:block" aria-hidden>PERSEVERANCE</span>

        {/* Dot grid right side */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(163,118,46,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow orbs */}
        <div className="glow-orb w-72 h-72 bg-[#E8C97A] top-[-80px] right-[10%]" style={{ opacity: 0.12 }} />
        <div className="glow-orb w-96 h-96 bg-[#A3762E] bottom-[-100px] right-[5%]" style={{ opacity: 0.08 }} />

        {/* Right accent bar */}
        <div className="absolute right-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block" style={fadeIn("0.15s")} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ──────────── LEFT — TEXT ──────────── */}
            <div className="order-1 flex flex-col">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7" style={fadeUp("0.1s")}>
                <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.32em]" style={{ fontSize: "0.56rem" }}>
                  New Release · 2026
                </span>
              </div>

              {/* Title */}
              <div style={fadeUp("0.2s")}>
                <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-2" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                  The Book
                </p>
                <h2
                  className="font-cormorant text-[#1A1208] leading-[1.05] mb-3"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 700 }}
                >
                  The Beauty of
                </h2>
                <h2
                  className="font-cormorant italic text-[#A3762E] leading-[1.0]"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 700 }}
                >
                  Perseverance
                  <span className="text-[#1A1208] not-italic">.</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p
                className="font-cormorant italic text-[#7A6245] mt-4 mb-6 leading-[1.6]"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", fontWeight: 400, ...fadeUp("0.35s") }}
              >
                Finding Strength, Purpose, and Refinement<br className="hidden sm:block" /> Through Life's Trials
              </p>

              {/* Gold divider */}
              <div className="flex items-center gap-3 mb-7" style={fadeIn("0.45s")}>
                <div className="h-px w-20 shrink-0" style={{ background: "linear-gradient(to right,#A3762E,transparent)" }} />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0 opacity-40" />
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
              </div>

              {/* Description */}
              <div className="relative mb-8" style={fadeUp("0.5s")}>
                <span className="quote-mark">"</span>
                <p
                  className="font-lato text-[#4A3520] leading-[1.85] pl-4"
                  style={{ fontSize: "clamp(0.88rem, 1.4vw, 1rem)" }}
                >
                  Perseverance is not merely survival—it is transformation. This book explores the spiritual architecture of endurance through Scripture, reflection, and pastoral insight.
                </p>
              </div>

              {/* Key Themes */}
              <div className="mb-9" style={fadeUp("0.6s")}>
                <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-4" style={{ fontSize: "0.58rem", fontWeight: 600 }}>
                  Key Themes
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {themes.map((t, i) => (
                    <div
                      key={i}
                      className={`theme-card ${activeTheme === i ? "active" : ""}`}
                      onClick={() => setActiveTheme(i)}
                    >
                      <span className="theme-icon">{t.icon}</span>
                      <div>
                        <p className="font-cinzel text-[#2D1F0E] mb-0.5" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                          {t.label}
                        </p>
                        <p className="font-lato text-[#7A6245]" style={{ fontSize: "0.8rem" }}>
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4" style={fadeUp("0.75s")}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuDNJcMNO916neG9ELkAEWc9aLbjyFxYhS2oOLrQ37LsgMvw/viewform"
                   target="_blank" className="btn-order">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z"/>
                  </svg>
                  Order Now
                </a>
                <a href="#sample" className="btn-sample">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Download Sample Chapter</span>
                </a>
              </div>
            </div>

            {/* ──────────── RIGHT — BOOK IMAGE ──────────── */}
            <div className="order-2 flex justify-center lg:justify-end items-center" style={fadeIn("0.3s")}>
              <div className="relative flex items-center justify-center">

                {/* Ambient glow behind book */}
                <div
                  className="absolute w-[280px] h-[380px] rounded-full"
                  style={{
                    background: "radial-gradient(ellipse, rgba(232,201,122,0.25) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                {/* Book wrapper — perspective tilt */}
                <div
                  className="book-float relative"
                  style={{
                    width: "clamp(220px, 32vw, 320px)",
                    height: "clamp(300px, 43vw, 430px)",
                    transform: "rotate(-2deg)",
                    filter: "drop-shadow(0 30px 50px rgba(26,18,8,0.28)) drop-shadow(0 8px 16px rgba(163,118,46,0.2))",
                  }}
                >
                  {/* Book spine */}
                  <div className="book-spine rounded-l-sm" />

                  {/* Book cover */}
                  <div className="absolute inset-0 overflow-hidden rounded-sm">
                    <Image
                      src="/BookCover.png"
                      alt="The Beauty of Perseverance Book Cover"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 320px"
                      quality={85}
                    />

                    {/* Cover gloss sheen */}
                    <div className="book-cover-shadow" />
                  </div>
                </div>

                {/* Book page edges (right side) */}
                <div
                  className="absolute"
                  style={{
                    right: "calc(50% - clamp(110px,16vw,160px) - 6px)",
                    top: "4%",
                    bottom: "4%",
                    width: "10px",
                    background: "linear-gradient(to right, #E8E0D0, #F5F0E8)",
                    transform: "rotate(-2deg)",
                    boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)",
                    borderRadius: "0 2px 2px 0",
                  }}
                />
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