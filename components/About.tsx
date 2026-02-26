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
  { role: "Teacher", church: "Christian Reformed Church of Nigeria (CRCN), LCC", location: "Kaduna" },
];

const snapshots = [
  { num: "35+", label: "Years at FRCN" },
  { num: "3",   label: "Academic Degrees" },
  { num: "3",   label: "Ministry Roles" },
  { num: "∞",   label: "Jukun Sermons" },
];

const familyStats = [
  { num: "5", label: "Children" },
  { num: "2", label: "Grandchildren" },
  { num: "1", label: "Devoted Husband" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const GradIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#A3762E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const MinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#A3762E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const FamIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#A3762E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ─── Shared heading ───────────────────────────────────────────────────────────
function SectionHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 bg-[#1A1208] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span
        className="font-cinzel uppercase text-[#4A3520] tracking-[0.28em]"
        style={{ fontSize: "0.58rem", fontWeight: 600 }}
      >
        {title}
      </span>
    </div>
  );
}

// ─── Ornament divider ─────────────────────────────────────────────────────────
function Ornament() {
  return (
    <div className="flex items-center gap-3 my-10 opacity-30">
      <div className="flex-1 h-px bg-[#A3762E]" />
      <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
      <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0 opacity-40" />
      <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45 shrink-0" />
      <div className="flex-1 h-px bg-[#A3762E]" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
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
          font-size: clamp(5rem, 12vw, 9rem);
        }

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
        .tag-pill:hover { background: rgba(163,118,46,0.1); }

        .qual-card {
          background: #fff;
          border-bottom: 2px solid transparent;
          box-shadow: 0 2px 14px rgba(26,18,8,0.06);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .qual-card:hover {
          border-bottom-color: #A3762E;
          box-shadow: 0 4px 22px rgba(26,18,8,0.1);
        }

        .ministry-card {
          background: #fff;
          box-shadow: 0 2px 14px rgba(26,18,8,0.06);
          transition: box-shadow 0.2s;
          overflow: hidden;
        }
        .ministry-card:hover { box-shadow: 0 4px 22px rgba(26,18,8,0.12); }

        .animate-float { animation: float 6s ease-in-out infinite; }

        /* image corner brackets */
        .photo-wrap { position: relative; }
        .photo-wrap::before {
          content: '';
          position: absolute;
          inset: -14px -14px 14px 14px;
          border: 1.5px solid rgba(163,118,46,0.2);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <section className="relative bg-white overflow-hidden" style={{ fontFamily: "'Cormorant Garamond', serif" }}>

        {/* Top gold shimmer bar */}
        <div className="w-full h-[3px] gold-rule" />

        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block"
          style={fadeIn("0.15s")}
        />

        {/* Watermark */}
        <span className="watermark hidden lg:block" aria-hidden>ABOUT</span>

        {/* Dot-grid bg — left half */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(163,118,46,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">

          {/* ── Page header ── */}
          <div className="mb-16" style={fadeUp("0.05s")}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
              <span
                className="font-cinzel text-[#A3762E] uppercase tracking-[0.32em]"
                style={{ fontSize: "0.56rem" }}
              >
                Her Story
              </span>
            </div>
            <h2
              className="font-cormorant text-[#1A1208] leading-[1.05]"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)", fontWeight: 700 }}
            >
              A Life of{" "}
              <em className="italic text-[#A3762E]">Faith,</em>
              <br />
              Service &amp; Purpose
            </h2>
          </div>

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 lg:gap-20 items-start">

            {/* ═══ LEFT: Photo + Snapshot ═══ */}
            <aside className="lg:sticky lg:top-10" style={fadeIn("0.3s")}>

              {/* Photo frame */}
              <div className="photo-wrap animate-float">
                {/* Corner brackets */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#A3762E] z-10" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#A3762E] z-10" />

                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "3/4", background: "#F5EFE0" }}
                >
                  {/*
                    ── Replace with real image: ──
                    <Image
                      src="/images/halima.jpg"
                      alt="Rev. Dr. Halima Ishaku Adamu"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8F2E6] via-[#EDE0C4] to-[#CBAA80] flex items-end justify-center pb-8">
                    <svg viewBox="0 0 200 300" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 opacity-[.13]" fill="#A3762E">
                      <ellipse cx="100" cy="72" rx="46" ry="52" />
                      <path d="M28 300 Q28 165 100 152 Q172 165 172 300Z" />
                    </svg>
                    <p
                      className="font-cinzel text-[#A3762E] uppercase opacity-40 tracking-[0.3em] relative z-10"
                      style={{ fontSize: "0.52rem" }}
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
                <div className="bg-white border-t-2 border-[#A3762E] px-5 py-4 flex items-center justify-between shadow-sm">
                  <div>
                    <p
                      className="font-cinzel text-[#A3762E] uppercase mb-1 tracking-[0.28em]"
                      style={{ fontSize: "0.55rem", fontWeight: 600 }}
                    >
                      Rev. Dr.
                    </p>
                    <p
                      className="font-cormorant text-[#1A1208]"
                      style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                      Halima Ishaku Adamu
                    </p>
                  </div>
                  {/* Cross mark */}
                  <div className="relative w-5 h-5 opacity-25 shrink-0 ml-3">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#A3762E]" />
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-[#A3762E]" />
                  </div>
                </div>
              </div>

              {/* Snapshot stats */}
              <div className="relative mt-6 p-5 overflow-hidden bg-[#1A1208]">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ background: "linear-gradient(180deg,#A3762E 0%,#E8C97A 100%)" }}
                />
                <p
                  className="font-cinzel text-[#A3762E] uppercase tracking-[0.3em] mb-4"
                  style={{ fontSize: "0.52rem" }}
                >
                  At a Glance
                </p>
                {snapshots.map(({ num, label }) => (
                  <div key={label} className="flex items-baseline gap-3 mb-3 last:mb-0">
                    <span
                      className="font-cormorant font-bold text-[#E8C97A] leading-none min-w-[44px]"
                      style={{ fontSize: "1.7rem" }}
                    >
                      {num}
                    </span>
                    <span
                      className="font-lato"
                      style={{ fontSize: "0.7rem", color: "rgba(249,245,238,0.5)", letterSpacing: "0.04em" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            {/* ═══ RIGHT: Content ═══ */}
            <div style={fadeUp("0.45s")}>

              {/* Bio intro */}
              <p
                className="font-cormorant text-[#2C1E08] leading-[1.85] mb-12 pb-12"
                style={{
                  fontSize: "clamp(1.15rem, 1.6vw, 1.3rem)",
                  borderBottom: "1px solid rgba(163,118,46,0.22)",
                  letterSpacing: "0.01em",
                }}
              >
                <strong className="font-semibold text-[#1A1208]">Rev. Dr. Halima Ishaku Adamu</strong>{" "}
                is a seasoned communicator, dedicated scholar, and pioneer in modern ministry.
                Following a distinguished 35-year career with the{" "}
                <strong className="font-semibold text-[#1A1208]">
                  Federal Radio Corporation of Nigeria (FRCN)
                </strong>
                , she transitioned into digital evangelism — leading a daily Jukun sermon podcast
                that carries the Gospel to hearts in their native tongue.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-12">
                {["Biblical Scholar", "Theologian", "Author", "Daily Jukun Sermons"].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              {/* ── Academic Qualifications ── */}
              <section>
                <SectionHeading icon={<GradIcon />} title="Academic Qualifications" />
                <div className="flex flex-col gap-3">
                  {qualifications.map(({ degree, note }) => (
                    <div key={degree} className="qual-card flex gap-4 items-start px-5 py-4">
                      <div className="w-[7px] h-[7px] bg-[#A3762E] rotate-45 shrink-0 mt-[8px]" />
                      <div>
                        <p
                          className="font-cormorant text-[#1A1208]"
                          style={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          {degree}
                        </p>
                        {note && (
                          <p
                            className="font-lato text-[#7A6A52] mt-1"
                            style={{ fontSize: "0.7rem", letterSpacing: "0.02em", lineHeight: 1.6 }}
                          >
                            {note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Ornament />

              {/* ── Ministry Leadership ── */}
              <section>
                <SectionHeading icon={<MinIcon />} title="Ministry Leadership Roles" />
                <div className="flex flex-col gap-3">
                  {ministryRoles.map(({ role, church, location }) => (
                    <div key={church + location} className="ministry-card grid" style={{ gridTemplateColumns: "4px 1fr" }}>
                      <div style={{ background: "linear-gradient(180deg,#A3762E 0%,#7A5C2E 100%)" }} />
                      <div className="px-5 py-4">
                        <p
                          className="font-cinzel text-[#A3762E] uppercase mb-1 tracking-[0.18em]"
                          style={{ fontSize: "0.52rem" }}
                        >
                          {role}
                        </p>
                        <p
                          className="font-cormorant text-[#1A1208]"
                          style={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          {church}{" "}
                          <span
                            className="font-cormorant"
                            style={{ color: "#A3762E", fontWeight: 400 }}
                          >
                            — {location}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Ornament />

              {/* ── Family ── */}
              <section>
                <SectionHeading icon={<FamIcon />} title="Family &amp; Personal Life" />
                <div className="relative overflow-hidden p-8 bg-[#1A1208]">
                  {/* Watermark */}
                  <span
                    className="absolute right-4 top-2 font-cinzel leading-none pointer-events-none select-none"
                    style={{
                      fontSize: "5rem",
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(163,118,46,0.07)",
                    }}
                  >
                    ✦
                  </span>

                  <p
                    className="font-cormorant relative z-10"
                    style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(249,245,238,0.83)" }}
                  >
                    She is happily married to{" "}
                    <strong style={{ color: "#E8C97A", fontWeight: 600 }}>Ishaku Adamu</strong>,
                    and together they are blessed with a wonderful, growing family that
                    is the joy of her heart.
                  </p>

                  <div
                    className="flex gap-10 mt-6 pt-6 relative z-10"
                    style={{ borderTop: "1px solid rgba(163,118,46,0.2)" }}
                  >
                    {familyStats.map(({ num, label }) => (
                      <div key={label} className="text-center">
                        <span
                          className="font-cormorant block font-bold text-[#A3762E] leading-none"
                          style={{ fontSize: "2.2rem" }}
                        >
                          {num}
                        </span>
                        <span
                          className="font-lato block mt-1 uppercase tracking-widest"
                          style={{ fontSize: "0.58rem", color: "rgba(249,245,238,0.38)" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Bottom gold shimmer rule */}
        <div className="w-full h-[2px] gold-rule" style={fadeIn("1.5s")} />
      </section>
    </>
  );
}