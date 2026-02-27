"use client";

const quickLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Sermons",  href: "#sermons" },
  { label: "Ministry", href: "#ministry" },
  { label: "Book",     href: "#book" },
  { label: "Events",   href: "#events" },
  { label: "Contact",  href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use",   href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

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
        .gold-rule {
          background: linear-gradient(90deg,#A3762E 0%,#E8C97A 50%,#A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        /* Quick link */
        .footer-link {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: rgba(249,245,238,0.5);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .footer-link::before {
          content: '';
          width: 4px; height: 4px;
          background: #A3762E;
          transform: rotate(45deg);
          opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover { color: #E8C97A; padding-left: 4px; }
        .footer-link:hover::before { opacity: 1; }

        /* Social icon */
        .social-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(163,118,46,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(249,245,238,0.45);
          transition: all 0.22s ease;
          text-decoration: none;
        }
        .social-icon:hover {
          border-color: #A3762E;
          color: #E8C97A;
          background: rgba(163,118,46,0.08);
          transform: translateY(-2px);
        }

        /* Legal link */
        .legal-link {
          font-family: 'Lato', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.06em;
          color: rgba(249,245,238,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .legal-link:hover { color: #A3762E; }

        /* Watermark */
        .footer-wm {
          position: absolute;
          font-family: 'Cinzel', serif; font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.04);
          user-select: none; pointer-events: none;
          white-space: nowrap; letter-spacing: 0.06em;
          bottom: 0; left: 50%; transform: translateX(-50%);
          font-size: clamp(4rem,12vw,9rem); line-height: 0.85;
        }
      `}</style>

      <footer
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#1A1208 0%,#0F0A04 100%)" }}
      >
        {/* Top shimmer rule */}
        <div className="w-full h-[3px] gold-rule" />

        {/* Watermark */}
        <span className="footer-wm hidden lg:block" aria-hidden>HALIMA</span>

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle,rgba(163,118,46,0.1) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">

          {/* ── Main footer content ── */}
          <div className="pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-12 lg:gap-16">

            {/* Brand column */}
            <div>
              <a href="#home" className="inline-block mb-6 no-underline">
                <p
                  className="font-cormorant text-[#F9F5EE]"
                  style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.03em", lineHeight: 1.1 }}
                >
                  Rev. Dr. <em className="italic text-[#A3762E]">Halima</em>
                </p>
                <p
                  className="font-cinzel text-[#A3762E] uppercase mt-1"
                  style={{ fontSize: "0.44rem", letterSpacing: "0.35em" }}
                >
                  Ishaku Adamu · Ministry
                </p>
              </a>

              <p
                className="font-cormorant text-[rgba(249,245,238,0.5)] italic leading-[1.85] mb-7"
                style={{ fontSize: "1rem" }}
              >
                Scholar. Teacher. Broadcaster. A voice carrying the living Word to
                hearts in every language especially in Jukun.
              </p>

              {/* Social icons */}
              <div>
                <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-4" style={{ fontSize: "0.44rem" }}>
                  Follow the Ministry
                </p>
                <div className="flex gap-2 flex-wrap">
                  {socialLinks.map((s) => (
                    <a key={s.name} href={s.href} className="social-icon" title={s.name} target="_blank" rel="noopener noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-6" style={{ fontSize: "0.48rem", fontWeight: 600 }}>
                Quick Links
              </p>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((l) => (
                  <a key={l.label} href={l.href} className="footer-link">
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact snippet */}
            <div>
              <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-6" style={{ fontSize: "0.48rem", fontWeight: 600 }}>
                Reach Out
              </p>

              <div className="space-y-5">
                {[
                  { label: "Speaking Invitations", icon: "🎤" },
                  { label: "Media Requests",        icon: "📡" },
                  { label: "Ministry Collaboration", icon: "🤝" },
                  { label: "Book Enquiries",         icon: "📖" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                    <span className="font-lato" style={{ fontSize: "0.68rem", color: "rgba(249,245,238,0.45)", letterSpacing: "0.04em" }}>
                      {item.label}
                    </span>
                  </div>
                ))}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-2 no-underline font-cinzel text-[#A3762E] uppercase tracking-[0.2em] hover:text-[#E8C97A] transition-colors"
                  style={{ fontSize: "0.46rem" }}
                >
                  Use the Contact Form
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Ornament ── */}
          <div className="flex items-center gap-4 py-6" style={{ borderTop: "1px solid rgba(163,118,46,0.12)" }}>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right,rgba(163,118,46,0.2),transparent)" }} />
            <div className="flex gap-1.5">
              <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
              <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
              <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left,rgba(163,118,46,0.2),transparent)" }} />
          </div>

          {/* ── Bottom bar ── */}
          <div className="pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="font-lato text-center sm:text-left order-2 sm:order-1" style={{ fontSize: "0.6rem", color: "rgba(249,245,238,0.28)", letterSpacing: "0.05em" }}>
              © {year} Rev. Dr. Halima Ishaku Adamu. All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-4 order-1 sm:order-2 flex-wrap justify-center">
              {legalLinks.map((l, i) => (
                <span key={l.label} className="flex items-center gap-4">
                  <a href={l.href} className="legal-link">{l.label}</a>
                  {i < legalLinks.length - 1 && (
                    <span style={{ color: "rgba(163,118,46,0.25)", fontSize: "0.5rem" }}>✦</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gold rule */}
        <div className="w-full h-[2px] gold-rule" />
      </footer>
    </>
  );
}