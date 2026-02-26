"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home",       label: "Home",         id: "home" },
  { href: "#about",      label: "About",         id: "about" },
  { href: "#sermons",    label: "Sermons",       id: "sermons" },
  { href: "#book",       label: "Book",          id: "book" },
  { href: "#contact",    label: "Contact",       id: "contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');
        .font-cinzel    { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }

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
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #A3762E, #E8C97A);
          transition: width 0.32s ease;
        }
        .nav-link:hover        { color: #A3762E; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active       { color: #A3762E; }
        .nav-link.active::after{ width: 100%; }
      `}</style>

      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(163,118,46,0.15)]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#A3762E]" />

        <div className="relative flex items-center justify-between h-[80px] px-6 md:px-14 lg:px-20 xl:px-28 max-w-7xl mx-auto">

          {/* Logo / Brand */}
          <Link href="#home" className="flex flex-col leading-none no-underline group" onClick={() => setActiveLink("home")}>
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
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`nav-link ${activeLink === link.id ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 uppercase no-underline transition-all duration-300 hover:bg-[#8B6025] hover:shadow-[0_4px_20px_rgba(163,118,46,0.35)] hover:-translate-y-[1px]"
            style={{ fontFamily: "'Cinzel',serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", background: "#A3762E", color: "#fff", padding: "0.7rem 1.4rem" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z"/>
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
            <span className={`block h-[1.5px] w-3 bg-[#A3762E] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-[18px] bg-[#A3762E] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>

        {/* Backdrop */}
        <div className={`absolute inset-0 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Decorative gold strip */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#A3762E] z-10" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #A3762E 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className={`relative z-10 flex flex-col h-full px-8 pt-24 pb-14 transition-all duration-500 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

          {/* Brand name inside mobile menu */}
          <div className="mb-10 pb-8 border-b border-[rgba(163,118,46,0.15)]">
            <p className="font-cormorant text-[#1A1208] font-light" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", letterSpacing: "0.03em" }}>
              Rev. Dr. <em className="italic text-[#A3762E]">Halima</em>
            </p>
            <p className="font-cinzel text-[#A3762E] uppercase mt-1" style={{ fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.35em" }}>
              Ishaku Adamu · Ministry
            </p>
          </div>

          {/* Links */}
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
                <span style={{ fontFamily:"'Cinzel',serif", fontSize:"0.82rem", fontWeight:600, letterSpacing:"0.22em", textTransform:"uppercase" }}>{link.label}</span>
                {activeLink === link.id && (
                  <span className="ml-auto w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-8 font-cinzel text-[0.65rem] tracking-[0.2em] uppercase px-6 py-4 bg-[#A3762E] text-white text-center no-underline flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#8B6025]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h12a2 2 0 012 2v18l-8-3-8 3V4a2 2 0 012-2z"/>
            </svg>
            Pre-Order The Beauty of Perseverance
          </a>
        </div>
      </div>
    </>
  ); 
};

export default Navbar;