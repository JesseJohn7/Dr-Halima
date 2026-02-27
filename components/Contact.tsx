"use client";
import { useState, useEffect } from "react";

const enquiryTypes = [
  "Speaking Invitation",
  "Media Request",
  "Ministry Collaboration",
  "Book Enquiry",
  "Other",
];

export default function ContactSection() {
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    type: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        @keyframes fadeSlide {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .gold-rule {
          background: linear-gradient(90deg,#A3762E 0%,#E8C97A 50%,#A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .dot-grid {
          background-image: radial-gradient(circle,rgba(163,118,46,0.08) 1px,transparent 1px);
          background-size: 28px 28px;
        }
        .sec-label {
          display:flex; align-items:center; gap:0.85rem; margin-bottom:1.2rem;
        }
        .sec-label::after {
          content:''; flex:1; height:1px;
          background:linear-gradient(to right,rgba(163,118,46,0.28),transparent);
        }

        /* ── Field labels — bigger & bolder ── */
        .field-wrap { position: relative; }
        .field-wrap label {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;           /* was 0.46rem */
          font-weight: 700;             /* was default */
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A3762E;
          margin-bottom: 0.6rem;        /* more breathing room */
        }

        /* ── Field boxes — taller, larger text ── */
        .field {
          width: 100%;
          background: #FEFCF8;
          border: 1.5px solid rgba(163,118,46,0.25);   /* slightly thicker border */
          padding: 1rem 1.1rem;                         /* was 0.78rem 1rem */
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.18rem;                           /* was 1.05rem */
          color: #1A1208;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          appearance: none; -webkit-appearance: none;
        }
        .field::placeholder {
          color: rgba(163,118,46,0.35);
          font-style: italic;
        }
        .field:focus {
          border-color: #A3762E;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(163,118,46,0.09);
        }
        select.field {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23A3762E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.8rem;
        }

        /* ── Submit button ── */
        .submit-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem;
          width: 100%;
          padding: 1.1rem 2rem;                        /* was 1rem */
          background: linear-gradient(135deg,#A3762E,#C49040);
          font-family: 'Cinzel', serif;
          font-size: 0.68rem;                          /* was 0.6rem */
          font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #fff; border: none; cursor: pointer;
          transition: all 0.25s ease;
        }
        .submit-btn:hover {
          background: linear-gradient(135deg,#C49040,#E8C97A);
          color: #1A1208;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(163,118,46,0.3);
        }

        /* ── Info card (dark sidebar) ── */
        .info-card {
          background: linear-gradient(145deg,#1A1208 0%,#241908 100%);
          border: 1px solid rgba(163,118,46,0.2);
          position: relative; overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg,#A3762E,#E8C97A);
        }
        .info-card::after {
          content: 'CONTACT';
          position: absolute; right: -1rem; bottom: -1rem;
          font-family: 'Cinzel', serif; font-weight: 900;
          font-size: clamp(3rem,8vw,5.5rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.06);
          white-space: nowrap; pointer-events: none; user-select: none;
          line-height: 1; letter-spacing: 0.06em;
        }

        /* Info row */
        .info-row {
          display: flex; gap: 1rem; align-items: flex-start;
          padding: 1rem 0;                              /* was 0.9rem */
          border-bottom: 1px solid rgba(163,118,46,0.1);
        }
        .info-row:last-child { border-bottom: none; }

        /* Info row label — bigger */
        .info-row-label {
          font-family: 'Cinzel', serif;
          font-size: 0.58rem;                          /* was 0.52rem */
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #F9F5EE;
          margin-bottom: 4px;
        }
        .info-row-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;                           /* was 0.63rem */
          letter-spacing: 0.03em;
          color: #8A7A62;
        }

        /* Success */
        .success-panel { animation: fadeSlide 0.4s ease both; }
      `}</style>

      <section
        className="relative bg-white overflow-hidden"
        style={{ fontFamily: "'Cormorant Garamond',serif" }}
        id="contact"
      >
        <div className="w-full h-[3px] gold-rule" />
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block" style={fadeIn("0.1s")} />
        <div className="absolute inset-0 pointer-events-none dot-grid" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">

          {/* ── Header ── */}
          <header className="mb-14 lg:mb-20" style={fadeUp("0.05s")}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
              <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.34em]" style={{ fontSize: "0.54rem" }}>
                Get in Touch
              </span>
            </div>
            <h2
              className="font-cormorant text-[#1A1208] leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem,5vw,4.6rem)", fontWeight: 700 }}
            >
              Every Connection is a{" "}
              <em className="italic text-[#A3762E]">Divine</em>
              <br className="hidden sm:block" /> Appointment
            </h2>
          </header>

          {/* ── Two-col grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

            {/* ═══ LEFT: Form ═══ */}
            <div style={fadeUp("0.2s")}>
              {submitted ? (
                <div className="success-panel border border-[rgba(163,118,46,0.2)] bg-[#FEFCF8] px-8 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[rgba(163,118,46,0.1)] flex items-center justify-center mx-auto mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A3762E" strokeWidth="1.6" className="w-7 h-7">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-4" style={{ fontSize: "0.62rem", fontWeight: 700 }}>
                    Message Received
                  </p>
                  <p className="font-cormorant text-[#2C1E08] leading-[1.85]" style={{ fontSize: "clamp(1.1rem,1.5vw,1.28rem)" }}>
                    Thank you for reaching out. Rev. Dr. Halima or a member of her team
                    will respond to your enquiry within a few business days.
                  </p>
                  <div className="mt-8 flex items-center gap-3 justify-center">
                    <div className="h-px w-10" style={{ background: "linear-gradient(to right,transparent,#A3762E)" }} />
                    <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                    <div className="h-px w-10" style={{ background: "linear-gradient(to left,transparent,#A3762E)" }} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">

                  {/* Intro */}
                  <p className="font-cormorant text-[#2C1E08] leading-[1.85]" style={{ fontSize: "clamp(1.08rem,1.4vw,1.22rem)" }}>
                    For speaking invitations, media requests, ministry collaboration, and book
                    enquiries, please use the form below. All messages are read personally.
                  </p>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="field-wrap">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name" className="field" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="field-wrap">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" required placeholder="your@email.com" className="field" value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  {/* Organisation + Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="field-wrap">
                      <label htmlFor="organisation">
                        Organisation{" "}
                        <span style={{ opacity: 0.45, fontWeight: 400, fontSize: "0.54rem" }}>(optional)</span>
                      </label>
                      <input id="organisation" name="organisation" type="text" placeholder="Church, media house, etc." className="field" value={form.organisation} onChange={handleChange} />
                    </div>
                    <div className="field-wrap">
                      <label htmlFor="type">Nature of Enquiry</label>
                      <select id="type" name="type" required className="field" value={form.type} onChange={handleChange}>
                        <option value="" disabled>Select a category</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="field-wrap">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message" name="message" required rows={7}
                      placeholder="Please share the details of your enquiry…"
                      className="field resize-none"
                      value={form.message} onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="space-y-3">
                    <button type="submit" className="submit-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Send Message
                    </button>
                    <p className="font-lato text-[#A3914E] text-center" style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}>
                      Your information is kept confidential and never shared.
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* ═══ RIGHT: Info card ═══ */}
            <aside style={fadeUp("0.35s")}>
              <div className="info-card px-7 py-8 mb-6">
                <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em] mb-7" style={{ fontSize: "0.94rem", fontWeight: 900 }}>
                  Enquiry Areas
                </p>

                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-[#A3762E]">
                        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Speaking Invitations",
                    desc: "Conferences, retreats, revivals & symposia",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-[#A3762E]">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Media Requests",
                    desc: "Interviews, podcasts & broadcast features",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-[#A3762E]">
                        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Ministry Collaboration",
                    desc: "Partnerships, outreach & women's ministry",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-[#A3762E]">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Book Enquiries",
                    desc: "Bulk orders, readings & book club requests",
                  },
                ].map((item) => (
                  <div key={item.label} className="info-row relative z-10">
                    <div className="shrink-0 mt-[3px]">{item.icon}</div>
                    <div>
                      <p className="info-row-label">{item.label}</p>
                      <p className="info-row-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response note */}
              <div className="px-6 py-5 border border-[rgba(163,118,46,0.15)] bg-[#FEFCF8]">
                <p className="font-cormorant text-[#6B5C47] italic leading-[1.8]" style={{ fontSize: "1.2rem" }}>
                  "Every message is received with prayer and attended to with care. We aim to respond within 3–5 business days."
                </p>
                <p className="font-cinzel text-[#A3762E] uppercase tracking-[0.2em] mt-3" style={{ fontSize: "0.5rem", fontWeight: 700 }}>
                  Rev. Dr. Halima's Office
                </p>
              </div>
            </aside>

          </div>
        </div>

        <div className="w-full h-[2px] gold-rule" style={fadeIn("1.2s")} />
      </section>
    </>
  );
}