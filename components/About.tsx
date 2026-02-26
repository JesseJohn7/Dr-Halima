"use client";
import { useState, useEffect } from "react";

const qualifications = [
  { degree: "Bachelor of Christian Education", note: null },
  { degree: "Master of Christian Education", note: null },
  {
    degree: "PhD in Theology",
    note: "Central Christian University, North Carolina — through Faith Christian Theological Seminary, Nigeria",
  },
];

const ministryRoles = [
  { role: "Associate Pastor", church: "Dew of Grace Assembly", location: "Lagos" },
  { role: "Associate Pastor", church: "Arise International Church", location: "Kaduna" },
  {
    role: "Teacher",
    church: "Christian Reformed Church of Nigeria (CRCN), LCC",
    location: "Kaduna",
  },
];

const familyStats = [
  { num: "5", label: "Children" },
  { num: "2", label: "Grandchildren" },
  { num: "1", label: "Devoted Husband" },
];

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
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

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .gold-rule {
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .watermark-about {
          position: absolute;
          font-family: 'Cinzel', serif;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.05);
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.08em;
          top: 46%;
          right: -1%;
          transform: translateY(-50%);
          font-size: clamp(5rem, 11vw, 8.5rem);
        }

        .photo-wrap-about { position: relative; }
        .photo-wrap-about::before {
          content: '';
          position: absolute;
          inset: -14px -14px 14px 14px;
          border: 1.5px solid rgba(163,118,46,0.18);
          pointer-events: none;
          z-index: 0;
        }
        @media (max-width: 640px) {
          .photo-wrap-about::before { display: none; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }

        /* Row items — elegant, no box shadow cards */
        .data-row {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(163,118,46,0.1);
          transition: padding-left 0.25s ease;
          cursor: default;
        }
        .data-row:last-child { border-bottom: none; }
        .data-row:hover { padding-left: 8px; }

        /* Section label with extending line */
        .sec-label {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.2rem;
        }
        .sec-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(163,118,46,0.28), transparent);
        }

        /* Snap card */
        .snap-card {
          background: #1A1208;
          position: relative;
          overflow: hidden;
        }
        .snap-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #A3762E 0%, #E8C97A 100%);
        }

        /* Family block */
        .family-block {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1A1208 0%, #2a1e0a 100%);
        }
        .family-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #A3762E, #E8C97A, #A3762E);
        }
        .family-block .deco-cross {
          position: absolute;
          bottom: 1.5rem;
          right: 2rem;
          opacity: 0.06;
          pointer-events: none;
        }
      `}</style>

      <section
        className="relative bg-white overflow-hidden"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {/* Top shimmer bar */}
        <div className="w-full h-[3px] gold-rule" />

        {/* Left accent bar — desktop only */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block"
          style={fadeIn("0.1s")}
        />

        {/* Watermark */}
        <span className="watermark-about hidden xl:block" aria-hidden>ABOUT</span>

        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(163,118,46,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Content wrapper ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">

          {/* ── Page Header ── */}
          <header className="mb-14 lg:mb-20" style={fadeUp("0.05s")}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
              <span
                className="font-cinzel text-[#A3762E] uppercase tracking-[0.34em]"
                style={{ fontSize: "0.54rem" }}
              >
                Her Story
              </span>
            </div>
            <h2
              className="font-cormorant text-[#1A1208] leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.6rem)", fontWeight: 700 }}
            >
              A Life Rooted in{" "}
              <em className="italic text-[#A3762E]">Faith,</em>
              <br className="hidden sm:block" />{" "}
              Shaped by Purpose
            </h2>
          </header>

          {/* ── Two-col Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr] gap-12 lg:gap-20 xl:gap-28 items-start">

            {/* ═══════════ LEFT ═══════════ */}
            <aside className="lg:sticky lg:top-12" style={fadeIn("0.3s")}>

              {/* Photo */}
              <div className="photo-wrap-about animate-float mb-6">
                {/* Corner brackets — hidden on small screens */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#A3762E] z-10 hidden sm:block" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#A3762E] z-10 hidden sm:block" />

                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  {/*
                    ── Replace this placeholder with your real image ──
                    <Image
                      src="/images/halima.jpg"
                      alt="Rev. Dr. Halima Ishaku Adamu"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8F2E6] via-[#EDE0C4] to-[#CBAA80] flex items-end justify-center pb-8">
                    <svg
                      viewBox="0 0 200 300"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 opacity-[.13]"
                      fill="#A3762E"
                    >
                      <ellipse cx="100" cy="72" rx="46" ry="52" />
                      <path d="M28 300 Q28 165 100 152 Q172 165 172 300Z" />
                    </svg>
                    <p
                      className="font-cinzel text-[#A3762E] uppercase opacity-40 tracking-[0.3em] relative z-10"
                      style={{ fontSize: "0.5rem" }}
                    >
                      Your Photo Here
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(245,239,224,0.55),transparent)" }}
                  />
                </div>

                {/* Name badge */}
                <div className="bg-white border-t-2 border-[#A3762E] px-5 py-4 flex items-center justify-between">
                  <div>
                    <p
                      className="font-cinzel text-[#A3762E] uppercase mb-1 tracking-[0.28em]"
                      style={{ fontSize: "0.52rem", fontWeight: 600 }}
                    >
                      Rev. Dr.
                    </p>
                    <p
                      className="font-cormorant text-[#1A1208]"
                      style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                      Halima Ishaku Adamu
                    </p>
                  </div>
                  <div className="relative w-5 h-5 opacity-25 shrink-0 ml-3">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#A3762E]" />
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-[#A3762E]" />
                  </div>
                </div>
              </div>

              {/* Snapshot stats */}
              <div className="snap-card px-6 py-5">
                <p
                  className="font-cinzel text-[#A3762E] uppercase tracking-[0.3em] mb-5"
                  style={{ fontSize: "0.5rem" }}
                >
                  At a Glance
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {[
                    { num: "35+", label: "Years at FRCN" },
                    { num: "PhD", label: "in Theology" },
                    { num: "3",   label: "Ministry Roles" },
                    { num: "∞",   label: "Jukun Sermons" },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <span
                        className="font-cormorant font-bold text-[#E8C97A] block leading-none"
                        style={{ fontSize: "1.9rem" }}
                      >
                        {num}
                      </span>
                      <span
                        className="font-lato block mt-[5px]"
                        style={{
                          fontSize: "0.6rem",
                          color: "rgba(249,245,238,0.42)",
                          letterSpacing: "0.07em",
                          lineHeight: 1.5,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ═══════════ RIGHT ═══════════ */}
            <div style={fadeUp("0.4s")}>

              {/* Bio */}
              <p
                className="font-cormorant text-[#2C1E08] leading-[1.9] mb-10 pb-10"
                style={{
                  fontSize: "clamp(1.12rem, 1.5vw, 1.32rem)",
                  borderBottom: "1px solid rgba(163,118,46,0.15)",
                }}
              >
                <strong className="font-semibold text-[#1A1208]">
                  Rev. Dr. Halima Ishaku Adamu
                </strong>{" "}
                is a seasoned communicator, dedicated scholar, and pioneer of modern ministry in Nigeria.
                Over a distinguished 35-year career at the{" "}
                <strong className="font-semibold text-[#1A1208]">
                  Federal Radio Corporation of Nigeria (FRCN)
                </strong>
                , she became a trusted voice — bringing clarity, comfort, and conviction to countless
                homes across the nation. Today, her mission continues through digital evangelism,
                leading a daily Jukun-language sermon podcast that carries the living Word to hearts
                in their mother tongue.
              </p>

              {/* ─── Academic Qualifications ─── */}
              <section className="mb-12">
                <div className="sec-label">
                  <span
                    className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]"
                    style={{ fontSize: "0.54rem", fontWeight: 600, whiteSpace: "nowrap" }}
                  >
                    Academic Qualifications
                  </span>
                </div>

                {qualifications.map(({ degree, note }, i) => (
                  <div key={i} className="data-row">
                    {/* Bullet + connector */}
                    <div className="shrink-0 flex flex-col items-center" style={{ paddingTop: "6px" }}>
                      <div className="w-[6px] h-[6px] bg-[#A3762E] rotate-45 shrink-0" />
                      {i < qualifications.length - 1 && (
                        <div
                          className="w-px mt-2 flex-1"
                          style={{ background: "rgba(163,118,46,0.18)", minHeight: "18px" }}
                        />
                      )}
                    </div>
                    <div className="pb-1">
                      <p
                        className="font-cormorant text-[#1A1208] font-semibold"
                        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", lineHeight: 1.4 }}
                      >
                        {degree}
                      </p>
                      {note && (
                        <p
                          className="font-lato text-[#8A7A62] mt-1"
                          style={{ fontSize: "0.67rem", lineHeight: 1.75, letterSpacing: "0.02em" }}
                        >
                          {note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </section>

              {/* Ornament */}
              <div className="flex items-center gap-4 my-10">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right,rgba(163,118,46,0.22),transparent)" }} />
                <div className="flex gap-1.5 items-center">
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                  <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left,rgba(163,118,46,0.22),transparent)" }} />
              </div>

              {/* ─── Ministry Leadership ─── */}
              <section className="mb-12">
                <div className="sec-label">
                  <span
                    className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]"
                    style={{ fontSize: "0.54rem", fontWeight: 600, whiteSpace: "nowrap" }}
                  >
                    Ministry Leadership
                  </span>
                </div>

                {ministryRoles.map(({ role, church, location }, i) => (
                  <div key={i} className="data-row">
                    <div className="shrink-0 flex flex-col items-center" style={{ paddingTop: "6px" }}>
                      <div className="w-[6px] h-[6px] bg-[#A3762E] rotate-45 shrink-0" />
                      {i < ministryRoles.length - 1 && (
                        <div
                          className="w-px mt-2"
                          style={{ background: "rgba(163,118,46,0.18)", minHeight: "28px" }}
                        />
                      )}
                    </div>
                    <div>
                      <p
                        className="font-lato text-[#A3762E] uppercase tracking-[0.16em] mb-[3px]"
                        style={{ fontSize: "0.58rem" }}
                      >
                        {role}
                      </p>
                      <p
                        className="font-cormorant text-[#1A1208] font-semibold"
                        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", lineHeight: 1.3 }}
                      >
                        {church}
                      </p>
                      <p
                        className="font-lato text-[#8A7A62] mt-[2px]"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}
                      >
                        {location}
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Ornament */}
              <div className="flex items-center gap-4 my-10">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right,rgba(163,118,46,0.22),transparent)" }} />
                <div className="flex gap-1.5 items-center">
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                  <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left,rgba(163,118,46,0.22),transparent)" }} />
              </div>

              {/* ─── Family ─── */}
              <section>
                <div className="sec-label">
                  <span
                    className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]"
                    style={{ fontSize: "0.54rem", fontWeight: 600, whiteSpace: "nowrap" }}
                  >
                    Family &amp; Personal Life
                  </span>
                </div>

                <div className="family-block px-6 sm:px-10 py-8 sm:py-10">
                  {/* Decorative cross */}
                  <div className="deco-cross">
                    <div className="relative w-16 h-16">
                      <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#E8C97A]" />
                      <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-[#E8C97A]" />
                    </div>
                  </div>

                  {/* Opening quote */}
                  <div
                    className="font-cormorant text-[#A3762E] leading-none mb-1 select-none"
                    style={{ fontSize: "3.5rem", lineHeight: 0.75, opacity: 0.35 }}
                  >
                    "
                  </div>

                  <p
                    className="font-cormorant italic"
                    style={{
                      fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
                      lineHeight: 1.95,
                      color: "rgba(249,245,238,0.86)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    Behind every great work of faith is a home that holds it together. She is
                    happily married to{" "}
                    <strong
                      style={{ color: "#E8C97A", fontWeight: 600, fontStyle: "normal" }}
                    >
                      Ishaku Adamu
                    </strong>
                    , and together they have built a home filled with love, laughter, and the
                    unwavering presence of God.
                  </p>

                  {/* Stats — inline, no boxes */}
                  <div
                    className="flex flex-wrap gap-6 sm:gap-10 pt-6"
                    style={{ borderTop: "1px solid rgba(163,118,46,0.18)" }}
                  >
                    {familyStats.map(({ num, label }) => (
                      <div key={label} className="flex items-baseline gap-2">
                        <span
                          className="font-cormorant font-bold text-[#A3762E]"
                          style={{ fontSize: "2.1rem", lineHeight: 1 }}
                        >
                          {num}
                        </span>
                        <span
                          className="font-lato uppercase tracking-widest"
                          style={{ fontSize: "0.57rem", color: "rgba(249,245,238,0.38)" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>{/* end right col */}
          </div>
        </div>

        {/* Bottom shimmer rule */}
        <div className="w-full h-[2px] gold-rule" style={fadeIn("1.5s")} />
      </section>
    </>
  );
}