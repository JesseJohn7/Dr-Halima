"use client";
import { useState, useEffect } from "react";

export default function ContactSection() {
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Cinzel:wght@600;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }

        .gold-rule {
          background: linear-gradient(90deg,#A3762E 0%,#E8C97A 50%,#A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .dot-grid {
          background-image: radial-gradient(circle,rgba(163,118,46,0.08) 1px,transparent 1px);
          background-size: 28px 28px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.2rem 2.2rem;
          background: linear-gradient(135deg,#A3762E,#C49040);
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: linear-gradient(135deg,#C49040,#E8C97A);
          color: #1A1208;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(163,118,46,0.3);
        }
      `}</style>

      <section
        className="relative bg-white overflow-hidden"
        style={{ fontFamily: "'Cormorant Garamond',serif" }}
        id="contact"
      >
        <div className="w-full h-[3px] gold-rule" />
        <div
          className="absolute inset-0 pointer-events-none dot-grid"
          style={fadeIn("0.1s")}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32 text-center">
          {/* Header */}
          <header className="mb-12" style={fadeUp("0.05s")}>
            <span
              className="font-cinzel text-[#A3762E] uppercase tracking-[0.34em] block mb-3"
              style={{ fontSize: "0.74rem" }}
            >
              Get in Touch
            </span>
            <h2
              className="font-cormorant text-[#1A1208] leading-[1.05]"
              style={{
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                fontWeight: 700,
              }}
            >
              Every Connection is a{" "}
              <em className="italic text-[#A3762E]">Divine</em> Appointment
            </h2>
          </header>

          {/* CTA Button */}
          <div style={fadeUp("0.2s")}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuDNJcMNO916neG9ELkAEWc9aLbjyFxYhS2oOLrQ37LsgMvw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <path
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contact Rev. Dr. Halima
            </a>
          </div>
        </div>

        <div className="w-full h-[2px] gold-rule" style={fadeIn("1.2s")} />
      </section>
    </>
  );
}