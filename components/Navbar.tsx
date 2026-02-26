"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Nav structure with dropdown content per section ───────── */
const navLinks = [
  {
    href: "#home",
    label: "Home",
    id: "home",
    dropdown: null,
  },
  {
    href: "#about",
    label: "About",
    id: "about",
    dropdown: {
      heading: "Her Story",
      items: [
        { label: "Biography",          href: "#about",        icon: "✦" },
        { label: "Academic Journey",   href: "#about",        icon: "✦" },
        { label: "Ministry Roles",     href: "#about",        icon: "✦" },
        { label: "Family & Heritage",  href: "#about",        icon: "✦" },
      ],
      quote: "A life rooted in faith, shaped by purpose.",
    },
  },
  {
    href: "#sermons",
    label: "Sermons",
    id: "sermons",
    dropdown: {
      heading: "Daily Jukun Sermons",
      items: [
        { label: "Listen Now",         href: "#sermons",      icon: "▶" },
        { label: "Sermon Archive",     href: "#sermons",      icon: "✦" },
        { label: "Subscribe on Spotify", href: "#sermons",   icon: "✦" },
        { label: "Apple Podcasts",     href: "#sermons",      icon: "✦" },
        { label: "YouTube Channel",    href: "#sermons",      icon: "✦" },
      ],
      quote: "The Living Word in your mother tongue.",
    },
  },
  {
    href: "#book",
    label: "Book",
    id: "book",
    dropdown: {
      heading: "The Beauty of Perseverance",
      items: [
        { label: "About the Book",     href: "#book",         icon: "✦" },
        { label: "Read an Excerpt",    href: "#book",         icon: "✦" },
        { label: "Pre-Order Now",      href: "#book",         icon: "✦" },
        { label: "Speaking Engagements", href: "#contact",   icon: "✦" },
      ],
      quote: "Faith forged through decades of faithfulness.",
    },
  },
  {
    href: "#contact",
    label: "Contact",
    id: "contact",
    dropdown: {
      heading: "Get in Touch",
      items: [
        { label: "Send a Message",     href: "#contact",      icon: "✦" },
        { label: "Booking & Invitations", href: "#contact",  icon: "✦" },
        { label: "Prayer Requests",    href: "#contact",      icon: "✦" },
      ],
      quote: "Every connection is a divine appointment.",
    },
  },
];

const Navbar: React.FC = () => {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef      = useRef<HTMLDivElement>(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navLinks.map((l) => l.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            setActiveLink(id);
            return;
          }
        }
      }
      setActiveLink("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  /* ── Hover handlers with short grace delay on leave ── */
  const handleEnter = (id: string, el: HTMLElement) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredLink(id);

    // Calculate horizontal offset so dropdown aligns under the link
    if (navRef.current) {
      const navRect  = navRef.current.getBoundingClientRect();
      const linkRect = el.getBoundingClientRect();
      const center   = linkRect.left + linkRect.width / 2 - navRect.left;
      setDropdownPos(center);
    }
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredLink(null), 120);
  };

  const handleDropdownEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const activeDropdown = navLinks.find((l) => l.id === hoveredLink)?.dropdown ?? null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');
        .font-cinzel    { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)    translateX(-50%); }
        }

        /* Nav link */
        .nav-link {
          position: relative;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2D1F0E;
          text-decoration: none;
          padding-bottom: 5px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(to right, #A3762E, #E8C97A);
          transition: width 0.32s ease;
        }
        .nav-link:hover         { color: #A3762E; }
        .nav-link:hover::after  { width: 100%; }
        .nav-link.active        { color: #A3762E; }
        .nav-link.active::after { width: 100%; }

        /* Caret under active link that has a dropdown */
        .nav-caret {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 7px solid #fff;
          z-index: 60;
          filter: drop-shadow(0 -1px 0 rgba(163,118,46,0.18));
          animation: dropIn 0.22s ease both;
        }

        /* Dropdown panel */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          transform: translateX(-50%);
          min-width: 280px;
          background: #fff;
          border: 1px solid rgba(163,118,46,0.18);
          box-shadow: 0 16px 48px rgba(26,18,8,0.12), 0 2px 8px rgba(163,118,46,0.08);
          z-index: 55;
          animation: dropIn 0.22s ease both;
          overflow: hidden;
        }

        /* Gold left bar on panel */
        .dropdown-panel::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #A3762E 0%, #E8C97A 100%);
        }

        /* Dropdown item */
        .dd-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.62rem 1.1rem 0.62rem 1.4rem;
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: #4A3520;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease, padding-left 0.15s ease;
          border-bottom: 1px solid rgba(163,118,46,0.07);
          cursor: pointer;
        }
        .dd-item:last-child { border-bottom: none; }
        .dd-item:hover {
          background: rgba(163,118,46,0.06);
          color: #A3762E;
          padding-left: 1.65rem;
        }
        .dd-item-icon {
          color: #A3762E;
          font-size: 0.45rem;
          opacity: 0.6;
          transition: opacity 0.15s ease;
        }
        .dd-item:hover .dd-item-icon { opacity: 1; }

        /* Dropdown footer quote */
        .dd-quote {
          background: #1A1208;
          padding: 0.75rem 1.4rem;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.72rem;
          color: rgba(232,201,122,0.7);
          letter-spacing: 0.04em;
          line-height: 1.5;
        }

        /* Gold shimmer rule inside dropdown */
        .dd-shimmer {
          height: 2px;
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(163,118,46,0.15)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        onMouseLeave={handleLeave}
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#A3762E]" />

        <div
          ref={navRef}
          className="relative flex items-center justify-between h-[80px] px-6 md:px-14 lg:px-20 xl:px-28 max-w-7xl mx-auto"
        >
          {/* Logo */}
          <Link
            href="#home"
            className="flex flex-col leading-none no-underline group"
            onClick={() => setActiveLink("home")}
          >
            <span
              className="font-cormorant text-[#1A1208]"
              style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "0.04em" }}
            >
              Rev. Dr. <span className="italic text-[#A3762E]">Halima</span>
            </span>
            <span
              className="font-cinzel text-[#A3762E] uppercase"
              style={{ fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.32em" }}
            >
              Ishaku Adamu · Ministry
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  onMouseEnter={(e) => handleEnter(link.id, e.currentTarget)}
                  className={`nav-link ${activeLink === link.id ? "active" : ""}`}
                >
                  {link.label}
                </Link>

                {/* Caret arrow — only when this item is hovered and has dropdown */}
                {hoveredLink === link.id && link.dropdown && (
                  <div className="nav-caret" />
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 uppercase no-underline transition-all duration-300 hover:bg-[#8B6025] hover:shadow-[0_4px_20px_rgba(163,118,46,0.35)] hover:-translate-y-[1px]"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              background: "#A3762E",
              color: "#fff",
              padding: "0.7rem 1.4rem",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z" />
            </svg>
            Pre-Order Book
          </a>

          {/* Hamburger — mobile */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 border border-[rgba(163,118,46,0.3)] hover:border-[#A3762E] hover:bg-[rgba(163,118,46,0.05)] transition-all duration-200 active:scale-95"
          >
            <span className={`block h-[1.5px] w-[18px] bg-[#A3762E] rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-3   bg-[#A3762E] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-[18px] bg-[#A3762E] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

          {/* ── Dropdown panel ── */}
          {hoveredLink && activeDropdown && (
            <div
              className="dropdown-panel"
              style={{ left: `${dropdownPos}px` }}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleLeave}
            >
              {/* Shimmer top rule */}
              <div className="dd-shimmer" />

              {/* Heading */}
              <div className="px-5 pt-4 pb-3">
                <p
                  className="font-cinzel text-[#A3762E] uppercase"
                  style={{ fontSize: "0.48rem", letterSpacing: "0.3em", fontWeight: 700 }}
                >
                  {activeDropdown.heading}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(163,118,46,0.1)", margin: "0 1.1rem" }} />

              {/* Items */}
              <div className="py-1">
                {activeDropdown.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="dd-item"
                    onClick={() => {
                      setActiveLink(hoveredLink);
                      setHoveredLink(null);
                    }}
                  >
                    <span className="dd-item-icon">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Quote footer */}
              <div className="dd-quote">"{activeDropdown.quote}"</div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`} />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#A3762E] z-10" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #A3762E 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className={`relative z-10 flex flex-col h-full px-8 pt-24 pb-14 transition-all duration-500 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="mb-10 pb-8 border-b border-[rgba(163,118,46,0.15)]">
            <p className="font-cormorant text-[#1A1208] font-light" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", letterSpacing: "0.03em" }}>
              Rev. Dr. <em className="italic text-[#A3762E]">Halima</em>
            </p>
            <p className="font-cinzel text-[#A3762E] uppercase mt-1" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.35em" }}>
              Ishaku Adamu · Ministry
            </p>
          </div>

          <div className="flex flex-col flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => { setMenuOpen(false); setActiveLink(link.id); }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  transitionDelay: menuOpen ? `${0.07 + i * 0.05}s` : "0s",
                }}
                className={`flex items-center gap-5 py-5 border-b border-[rgba(163,118,46,0.12)] no-underline transition-all duration-200 group
                  ${activeLink === link.id ? "text-[#A3762E]" : "text-[#4A3520] hover:text-[#A3762E] hover:pl-2"}
                  ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <span className="font-cinzel text-[0.5rem] tracking-[0.3em] text-[#A3762E] opacity-50 min-w-[22px]">
                  0{i + 1}
                </span>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  {link.label}
                </span>
                {activeLink === link.id && (
                  <span className="ml-auto w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                )}
              </a>
            ))}
          </div>

          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-8 font-cinzel text-[0.65rem] tracking-[0.2em] uppercase px-6 py-4 bg-[#A3762E] text-white text-center no-underline flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#8B6025]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z" />
            </svg>
            Pre-Order The Beauty of Perseverance
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;