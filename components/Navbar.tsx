"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#features", label: "Features", id: "features" },
  { href: "#how-it-works", label: "How it Works", id: "how-it-works" },
  { href: "#faqs", label: "FAQs", id: "faqs" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/75 backdrop-blur-xl border-b border-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="relative flex items-center justify-center h-[70px] px-6 md:px-16 lg:px-24 xl:px-32">

          {/* Desktop links — centered */}
          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`relative text-sm font-medium tracking-wide pb-1 transition-colors duration-200 group no-underline
                    ${activeLink === link.id ? "text-black" : "text-black hover:text-black"}`}
                >
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300
                      ${activeLink === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only, positioned absolute so links stay centered */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden absolute right-6 flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/35 transition-all duration-200 active:scale-95"
          >
            <span
              className={`block h-[1.5px] w-[18px] bg-blue-400 rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-3.5 bg-blue-400 rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-[18px] bg-blue-400 rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/97 backdrop-blur-2xl transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Ambient glow */}
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col h-full px-10 pt-24 pb-14 transition-all duration-500 ease-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Links */}
          <div className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink(link.id);
                }}
                style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.055}s` : "0s" }}
                className={`flex items-center gap-4 py-[18px] text-2xl font-medium tracking-tight text-slate-400 hover:text-white hover:pl-2 border-b border-blue-500/10 no-underline transition-all duration-200
                  ${i === 0 ? "border-t border-blue-500/10" : ""}
                  ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
              >
                <span className="text-xs font-semibold tracking-widest text-blue-500/50 min-w-[28px]">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default Navbar;