"use client";
import { useState, useEffect } from "react";

/* ─── Data ─────────────────────────────────────────────────── */
const ministryAreas = [
  {
    id: "teaching",
    label: "Teaching Ministry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Teacher at CRCN LCC Kaduna",
    body: "For years, Rev. Dr. Halima Ishaku Adamu has served as a dedicated Bible Teacher at the Christian Reformed Church of Nigeria (CRCN), LCC Kaduna — nurturing congregants in the depths of Scripture with clarity, conviction, and compassion. Her teaching style weaves Jukun cultural wisdom with sound theological exposition, making the Word accessible and transformative.",
    highlights: ["Expository Bible Teaching", "Adult Christian Education", "Theological Discipleship", "Women's Bible Study"],
  },
  {
    id: "prayer",
    label: "Women's Prayer Groups",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Pioneer of Women's Prayer Movements",
    body: "One of Rev. Dr. Halima's most enduring legacies is the network of women's prayer groups she has pioneered across Kaduna and beyond. These gatherings are far more than prayer meetings — they are sanctuaries of sisterhood, spaces where women find healing, community, intercession, and purpose. Hundreds of women have been spiritually formed through these Spirit-led gatherings.",
    highlights: ["Intercessory Prayer Circles", "Women's Spiritual Formation", "Cross-denominational Retreats", "Monthly Fasting & Prayer"],
  },
  {
    id: "church",
    label: "Church Leadership",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Church Involvement & Leadership",
    body: "Rev. Dr. Halima has served in pastoral leadership across multiple congregations — as Associate Pastor at Dew of Grace Assembly in Lagos and Arise International Church in Kaduna. Her leadership is marked by servant-heartedness, prophetic sensitivity, and a pastoral warmth that draws people into deeper relationship with God and one another.",
    highlights: ["Associate Pastor — Dew of Grace, Lagos", "Associate Pastor — Arise International, Kaduna", "Pastoral Counselling", "Leadership Mentorship"],
  },
  {
    id: "speaking",
    label: "Speaking & Engagements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Available for Speaking Engagements",
    body: "Rev. Dr. Halima brings the full weight of her 35+ years in broadcasting, ministry, and scholarship to every speaking engagement. Whether at a women's conference, church retreat, theological symposium, or book event, she delivers with grace, depth, and a prophetic clarity that leaves audiences transformed. She is available nationally and internationally.",
    highlights: ["Women's Conferences", "Church Retreats & Revivals", "Theological Symposia", "Book Events & Launches"],
  },
];

/* ─── Gallery placeholder tiles ────────────────────────────── */
const galleryItems = [
  { label: "Teaching at CRCN",        aspect: "aspect-[4/3]",  bg: "from-[#2C1E08] to-[#4A3520]", src: "/imga.png" },
  { label: "Women's Prayer Gathering", aspect: "aspect-square", bg: "from-[#1A1208] to-[#3A2810]", src: "/img2.png" },
  { label: "Kaduna Conference",        aspect: "aspect-[4/3]",  bg: "from-[#3A2810] to-[#2C1E08]", src: null },
  { label: "Pastoral Leadership",      aspect: "aspect-square", bg: "from-[#241908] to-[#1A1208]", src: null },
  { label: "Radio Ministry FRCN",      aspect: "aspect-[4/3]",  bg: "from-[#1A1208] to-[#2C1E08]", src: null },
  { label: "Ordination Ceremony",      aspect: "aspect-square", bg: "from-[#4A3520] to-[#1A1208]", src: null },
];

export default function MinistrySection() {
  const [loaded,  setLoaded]  = useState(false);
  const [active,  setActive]  = useState("teaching");

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

  const activeArea = ministryAreas.find((a) => a.id === active)!;

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
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gold-rule {
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .sec-label {
          display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.2rem;
        }
        .sec-label::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(163,118,46,0.28), transparent);
        }

        /* Ministry tab pills */
        .m-tab {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.9rem 1.1rem;
          border: 1px solid rgba(163,118,46,0.15);
          background: transparent;
          cursor: pointer;
          transition: all 0.22s ease;
          text-align: left;
          width: 100%;
        }
        .m-tab:hover { border-color: rgba(163,118,46,0.4); background: rgba(163,118,46,0.04); }
        .m-tab.m-tab--active {
          border-color: #A3762E;
          background: #1A1208;
        }
        .m-tab.m-tab--active .m-tab-icon { color: #E8C97A; }
        .m-tab.m-tab--active .m-tab-label { color: #F9F5EE; }
        .m-tab-icon  { color: rgba(163,118,46,0.5); transition: color 0.22s ease; }
        .m-tab-label {
          font-family: 'Cinzel', serif; font-size: 0.58rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #6B5C47; transition: color 0.22s ease;
        }

        /* Content panel */
        .m-panel { animation: fadeSlide 0.35s ease both; }

        /* Highlight pill */
        .hi-pill {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border: 1px solid rgba(163,118,46,0.2);
          font-family: 'Lato', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.08em; color: #6B5C47;
        }

        /* Gallery tile */
        .gallery-tile {
          position: relative; overflow: hidden; cursor: pointer;
        }
        .gallery-tile::after {
          content: attr(data-label);
          position: absolute; inset: 0;
          background: rgba(26,18,8,0.55);
          display: flex; align-items: flex-end;
          padding: 0.85rem;
          font-family: 'Cinzel', serif; font-size: 0.48rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(232,201,122,0.7);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .gallery-tile:hover::after { opacity: 1; }
        .gallery-tile:hover .gallery-img { transform: scale(1.04); }
        .gallery-img { transition: transform 0.5s ease; width: 100%; height: 100%; object-fit: cover; }

        /* Placeholder gallery inner */
        .gallery-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }

        /* Speaking CTA card */
        .cta-card {
          background: linear-gradient(135deg, #1A1208 0%, #2C1E08 100%);
          border: 1px solid rgba(163,118,46,0.22);
          position: relative; overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg,#A3762E,#E8C97A);
        }
        .cta-card::after {
          content: 'MINISTRY';
          position: absolute; right: -1rem; top: 50%; transform: translateY(-50%);
          font-family: 'Cinzel', serif; font-weight: 900;
          font-size: clamp(3rem, 8vw, 6rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.06);
          white-space: nowrap; pointer-events: none;
        }

        .invite-btn {
          display: inline-flex; align-items: center; gap: 0.6rem;
          padding: 0.85rem 1.8rem;
          background: linear-gradient(135deg,#A3762E,#C49040);
          font-family: 'Cinzel', serif; font-size: 0.6rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #fff; text-decoration: none;
          transition: all 0.25s ease;
        }
        .invite-btn:hover {
          background: linear-gradient(135deg,#C49040,#E8C97A);
          color: #1A1208;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(163,118,46,0.3);
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(163,118,46,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section
        className="relative bg-white overflow-hidden"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        id="ministry" >
        <div className="w-full h-[3px] gold-rule" />
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block" style={fadeIn("0.1s")} />
        <div className="absolute inset-0 pointer-events-none dot-grid" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">

          {/* ── Header ── */}
          <header className="mb-14 lg:mb-20" style={fadeUp("0.05s")}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
              <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.34em]" style={{ fontSize: "0.54rem" }}>
                Called to Serve
              </span>
            </div>
            <h2
              className="font-cormorant text-[#1A1208] leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.6rem)", fontWeight: 700 }}
            >
              A Ministry of{" "}
              <em className="italic text-[#A3762E]">Word,</em>
              <br className="hidden sm:block" />{" "}
              Prayer & Presence
            </h2>
          </header>

          {/* ── Tab + Panel grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 mb-20" style={fadeUp("0.2s")}>

            {/* Tabs */}
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {ministryAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActive(area.id)}
                  className={`m-tab shrink-0 ${active === area.id ? "m-tab--active" : ""}`}
                >
                  <span className="m-tab-icon">{area.icon}</span>
                  <span className="m-tab-label hidden sm:block">{area.label}</span>
                </button>
              ))}
            </nav>

            {/* Panel */}
            <div key={active} className="m-panel">
              {/* Active indicator */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.5rem" }}>
                  {activeArea.label}
                </span>
              </div>

              <h3
                className="font-cormorant text-[#1A1208] font-bold mb-5"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
              >
                {activeArea.heading}
              </h3>

              {/* Gold rule */}
              <div className="w-16 h-[2px] mb-6" style={{ background: "linear-gradient(to right,#A3762E,#E8C97A)" }} />

              <p
                className="font-cormorant text-[#2C1E08] leading-[1.9] mb-8"
                style={{ fontSize: "clamp(1.08rem, 1.5vw, 1.25rem)" }}
              >
                {activeArea.body}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {activeArea.highlights.map((h) => (
                  <span key={h} className="hi-pill">
                    <span className="text-[#A3762E]" style={{ fontSize: "0.4rem" }}>✦</span>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ornament */}
          <div className="flex items-center gap-4 mb-16" style={fadeIn("0.4s")}>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right,rgba(163,118,46,0.22),transparent)" }} />
            <div className="flex gap-1.5">
              <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
              <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
              <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left,rgba(163,118,46,0.22),transparent)" }} />
          </div>

          {/* ── Photo Gallery ── */}
          <section className="mb-20" style={fadeUp("0.45s")}>
            <div className="sec-label">
              <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                Ministry Gallery
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  data-label={item.label}
                  className={`gallery-tile ${item.aspect}`}
                >
                  {/* Placeholder — replace with <img src="..." /> */}
                  <div className={`gallery-placeholder bg-gradient-to-br ${item.bg}`}>
                    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.07]" fill="#A3762E">
                      <circle cx="100" cy="70" r="35"/>
                      <path d="M30 200 Q30 130 100 115 Q170 130 170 200Z"/>
                    </svg>
                    <div className="relative z-10 text-center px-4">
                      <p className="font-cinzel text-[#A3762E] opacity-40 uppercase tracking-[0.25em]" style={{ fontSize: "0.44rem" }}>
                        {item.label}
                      </p>
                      <p className="font-lato text-[#A3762E] opacity-20 mt-1" style={{ fontSize: "0.5rem", letterSpacing: "0.1em" }}>
                        Photo
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-lato text-[#A3914E] mt-3 text-right" style={{ fontSize: "0.58rem", letterSpacing: "0.05em" }}>
              Replace placeholders with actual ministry photos
            </p>
          </section>

          {/* ── Speaking CTA ── */}
          <section className="cta-card px-7 sm:px-12 py-10 sm:py-14" style={fadeUp("0.55s")}>
            <div className="relative z-10 max-w-2xl">
              <div className="sec-label mb-6">
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                  Invite Rev. Dr. Halima
                </span>
              </div>
              <h3
                className="font-cormorant text-[#F9F5EE] font-bold mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", lineHeight: 1.2 }}
              >
                Available for Conferences,{" "}
                <em className="italic text-[#E8C97A]">Retreats</em>{" "}
                & Book Events
              </h3>
              <p
                className="font-cormorant text-[#C4A96A] leading-[1.85] mb-8"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.18rem)" }}
              >
                Rev. Dr. Halima brings decades of Spirit-led ministry, scholarly depth, and
                broadcast experience to every platform she graces. To discuss a speaking
                invitation, please reach out via the contact page.
              </p>
              <a href="#contact" className="invite-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send an Invitation
              </a>
            </div>
          </section>

        </div>

        <div className="w-full h-[2px] gold-rule" style={fadeIn("1.2s")} />
      </section>
    </>
  );
}