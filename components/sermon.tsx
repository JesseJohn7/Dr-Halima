"use client";
import { useState, useRef, useEffect } from "react";

/* ─── Data ─────────────────────────────────────────────────── */
const sermons = [
  {
    id: 1,
    title: "Ŋkuma Ra Tswem — The Word That Endures",
    scripture: "Isaiah 40:8",
    topic: "Faith",
    date: "2025-01-12",
    duration: "28:14",
    audioSrc: "",
    description:
      "A meditation on the eternal nature of God's promises, drawn from the ancient wells of Jukun oral tradition and the living Word.",
  },
  {
    id: 2,
    title: "Akuma Ŋa Yisu — Walking With Jesus",
    scripture: "John 15:4",
    topic: "Discipleship",
    date: "2025-01-19",
    duration: "32:47",
    audioSrc: "",
    description:
      "How do we abide? Rev. Dr. Halima draws on 35 years of ministry to illuminate the daily practice of union with Christ.",
  },
  {
    id: 3,
    title: "Tswem Ra Ŋkam — Grace Upon Grace",
    scripture: "John 1:16",
    topic: "Grace",
    date: "2025-01-26",
    duration: "25:03",
    audioSrc: "",
    description:
      "Unpacking the lavish, layered grace of God — the inexhaustible supply that meets us in every season of life.",
  },
  {
    id: 4,
    title: "Kpukpu Ra Wurwam — The Power of Prayer",
    scripture: "Matthew 6:9-13",
    topic: "Prayer",
    date: "2025-02-02",
    duration: "30:19",
    audioSrc: "",
    description:
      "Teaching on the Lord's Prayer in Jukun, reclaiming prayer as both conversation and warfare.",
  },
  {
    id: 5,
    title: "Ŋga Wurwam — God Is Faithful",
    scripture: "Lamentations 3:23",
    topic: "Faith",
    date: "2025-02-09",
    duration: "27:55",
    audioSrc: "",
    description:
      "A testimony-laced sermon on the faithfulness of God through seasons of uncertainty and national upheaval.",
  },
  {
    id: 6,
    title: "Akuma Ra Ŋkama — The Path of Righteousness",
    scripture: "Psalm 23:3",
    topic: "Holiness",
    date: "2025-02-16",
    duration: "34:08",
    audioSrc: "",
    description:
      "Exploring what it means to walk in God's ways in a modern, distracted world — rooted in the Jukun understanding of wholeness.",
  },
];

const topics = ["All", "Faith", "Discipleship", "Grace", "Prayer", "Holiness"];
const filterOptions = ["All Sermons", "By Date", "By Topic", "By Scripture"];

const platforms = [
  {
    name: "Spotify",
    color: "#1DB954",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318c-.213.334-.666.442-1 .23-2.738-1.673-6.185-2.05-10.248-1.124-.391.09-.782-.154-.872-.545-.09-.392.154-.782.546-.872 4.44-.997 8.253-.567 11.344 1.31.334.213.442.666.23 1.001zm1.47-3.27c-.268.42-.836.552-1.254.285-3.135-1.927-7.915-2.485-11.625-1.359-.48.144-.985-.129-1.13-.607-.143-.48.13-.985.608-1.13 4.238-1.285 9.503-.663 13.116 1.556.42.268.552.836.285 1.255zm.126-3.403C15.67 8.39 9.466 8.175 5.99 9.237c-.575.174-1.184-.15-1.358-.724-.175-.574.149-1.184.723-1.358 4.013-1.22 10.69-.984 14.9 1.586.504.307.663.962.356 1.466-.307.504-.963.663-1.466.356l-.133-.642z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    color: "#B150E2",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.071 0 3.953.752 5.404 1.992L6.492 17.404A7.46 7.46 0 014.5 12c0-4.136 3.364-7.5 7.5-7.5zm0 15c-2.07 0-3.953-.752-5.404-1.992L17.508 6.596A7.46 7.46 0 0119.5 12c0 4.136-3.364 7.5-7.5 7.5zm-.5-5.5v2.75c0 .276.224.5.5.5s.5-.224.5-.5V14a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
        <circle cx="12" cy="12.5" r="1.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    color: "#FF0000",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
];

/* ─── Audio Player Component ───────────────────────────────── */
function AudioPlayer({ sermon }: { sermon: (typeof sermons)[0] }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    setProgress(pct);
    setCurrentTime(formatTime(audioRef.current.currentTime));
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * (audioRef.current.duration || 0);
  };

  return (
    <div className="featured-player px-6 sm:px-8 py-7">
      <audio
        ref={audioRef}
        src={sermon.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
      />

      {/* Now playing label */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-[3px] items-end h-4">
          {[0.6, 1, 0.75, 0.9, 0.5].map((h, i) => (
            <div
              key={i}
              className="w-[3px] bg-[#E8C97A] rounded-full"
              style={{
                height: playing ? `${h * 100}%` : "30%",
                transition: "height 0.3s ease",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.48rem" }}>
          Now Playing
        </span>
      </div>

      <h3
        className="font-cormorant text-[#F9F5EE] font-bold leading-tight mb-1"
        style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)" }}
      >
        {sermon.title}
      </h3>
      <p className="font-lato text-[#A3762E] mb-6" style={{ fontSize: "0.68rem", letterSpacing: "0.08em" }}>
        {sermon.scripture} · {sermon.topic}
      </p>

      {/* Progress bar */}
      <div
        ref={barRef}
        onClick={seek}
        className="relative h-[3px] bg-[rgba(163,118,46,0.2)] rounded-full mb-3 cursor-pointer group"
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg,#A3762E,#E8C97A)",
            transition: "width 0.1s linear",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E8C97A] shadow opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>
      <div className="flex justify-between font-lato text-[#8A7A62] mb-6" style={{ fontSize: "0.58rem" }}>
        <span>{currentTime}</span>
        <span>{sermon.duration}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button className="text-[#8A7A62] hover:text-[#E8C97A] transition-colors" title="Rewind 15s"
          onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 15; }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            <text x="8.5" y="14.5" fontSize="5" fill="currentColor" fontFamily="sans-serif">15</text>
          </svg>
        </button>

        <button
          onClick={toggle}
          className="play-btn w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1A1208]">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1A1208] ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button className="text-[#8A7A62] hover:text-[#E8C97A] transition-colors" title="Forward 15s"
          onClick={() => { if (audioRef.current) audioRef.current.currentTime += 15; }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
            <text x="8.5" y="14.5" fontSize="5" fill="currentColor" fontFamily="sans-serif">15</text>
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Sermon Card ───────────────────────────────────────────── */
function SermonCard({
  sermon,
  active,
  onSelect,
}: {
  sermon: (typeof sermons)[0];
  active: boolean;
  onSelect: () => void;
}) {
  const dateStr = new Date(sermon.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      onClick={onSelect}
      className={`sermon-card cursor-pointer ${active ? "sermon-card--active" : ""}`}
    >
      <div className="flex items-start gap-4">
        {/* Play indicator */}
        <div className={`play-dot shrink-0 mt-1 ${active ? "play-dot--active" : ""}`}>
          {active ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1A1208] ml-[1px]">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : null}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <p className="font-lato text-[#A3762E] uppercase tracking-[0.15em] mb-1" style={{ fontSize: "0.52rem" }}>
                {sermon.topic} · {sermon.scripture}
              </p>
              <h4
                className="font-cormorant text-[#1A1208] font-semibold leading-snug"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
              >
                {sermon.title}
              </h4>
            </div>
            <span className="font-lato text-[#8A7A62] shrink-0" style={{ fontSize: "0.6rem" }}>
              {sermon.duration}
            </span>
          </div>
          <p className="font-lato text-[#6B5C47] mt-1 leading-relaxed line-clamp-2" style={{ fontSize: "0.68rem" }}>
            {sermon.description}
          </p>
          <p className="font-lato text-[#A3914E] mt-2" style={{ fontSize: "0.58rem", letterSpacing: "0.05em" }}>
            {dateStr}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function SermonsPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSermon, setActiveSermon] = useState(sermons[0]);
  const [filterTopic, setFilterTopic] = useState("All");
  const [sortMode, setSortMode] = useState("All Sermons");

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

  const filtered = sermons.filter(
    (s) => filterTopic === "All" || s.topic === filterTopic
  );

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
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1); }
        }

        .gold-rule {
          background: linear-gradient(90deg, #A3762E 0%, #E8C97A 50%, #A3762E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        /* ── Featured Player ── */
        .featured-player {
          background: linear-gradient(145deg, #1A1208 0%, #241908 60%, #1A1208 100%);
          border: 1px solid rgba(163,118,46,0.25);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        .featured-player::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg,#A3762E 0%,#E8C97A 50%,#A3762E 100%);
        }
        .featured-player::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(232,201,122,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .play-btn {
          background: linear-gradient(135deg,#A3762E,#E8C97A);
          box-shadow: 0 4px 20px rgba(163,118,46,0.35);
        }
        .play-btn:hover {
          box-shadow: 0 6px 28px rgba(232,201,122,0.5);
        }

        /* ── Vision Banner ── */
        .vision-banner {
          background: linear-gradient(135deg, #1A1208 0%, #2C1E08 100%);
          border: 1px solid rgba(163,118,46,0.2);
          position: relative;
          overflow: hidden;
        }
        .vision-banner::before {
          content: 'ᴊᴜᴋᴜɴ';
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Cinzel', serif;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(163,118,46,0.06);
          white-space: nowrap;
          pointer-events: none;
        }

        /* ── Sermon card ── */
        .sermon-card {
          padding: 1.1rem 1rem;
          border-bottom: 1px solid rgba(163,118,46,0.1);
          transition: background 0.2s ease, padding-left 0.2s ease;
        }
        .sermon-card:last-child { border-bottom: none; }
        .sermon-card:hover { background: rgba(163,118,46,0.04); padding-left: 1.25rem; }
        .sermon-card--active { background: rgba(163,118,46,0.07) !important; padding-left: 1.25rem; }

        .play-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid rgba(163,118,46,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .play-dot--active {
          background: linear-gradient(135deg,#A3762E,#E8C97A);
          border-color: transparent;
        }
        .sermon-card:hover .play-dot:not(.play-dot--active) {
          border-color: rgba(163,118,46,0.6);
          background: rgba(163,118,46,0.08);
        }

        /* ── Platform pill ── */
        .platform-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.2rem;
          border: 1px solid rgba(163,118,46,0.2);
          background: rgba(255,255,255,0.02);
          transition: all 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .platform-pill:hover {
          border-color: rgba(163,118,46,0.5);
          background: rgba(163,118,46,0.06);
          transform: translateY(-2px);
        }

        /* ── Filter chip ── */
        .chip {
          font-family: 'Lato', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(163,118,46,0.22);
          background: transparent;
          color: #8A7A62;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .chip:hover { border-color: rgba(163,118,46,0.5); color: #A3762E; }
        .chip--active { background: #A3762E; border-color: #A3762E; color: #1A1208 !important; }

        /* ── Archive section ── */
        .archive-wrap {
          background: #FEFCF8;
          border: 1px solid rgba(163,118,46,0.12);
        }

        /* sec-label */
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

        /* dot grid */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(163,118,46,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Waveform bars */
        .waveform-bar {
          display: inline-block;
          width: 3px;
          border-radius: 2px;
          background: rgba(163,118,46,0.4);
          animation: wave 1.2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .platform-pill { padding: 0.55rem 0.9rem; }
        }
      `}</style>

      <div
         id="sermons" className="relative min-h-screen bg-white overflow-x-hidden"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {/* Top gold rule */}
        <div className="w-full h-[3px] gold-rule" />

        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#A3762E] hidden lg:block" />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none dot-grid" />

        {/* ══════════ HERO / HEADER ══════════ */}
        <header
          className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 pt-16 pb-10"
          style={fadeUp("0.05s")}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#A3762E] shrink-0" />
            <span
              className="font-cinzel text-[#A3762E] uppercase tracking-[0.34em]"
              style={{ fontSize: "0.54rem" }}
            >
              Daily Jukun Sermons
            </span>
          </div>
          <h1
            className="font-cormorant text-[#1A1208] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)", fontWeight: 700 }}
          >
            The{" "}
            <em className="italic text-[#A3762E]">Living Word</em>
            <br className="hidden sm:block" /> in Your Mother Tongue
          </h1>
          <p
            className="font-lato text-[#6B5C47] max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.96rem)" }}
          >
            Rev. Dr. Halima Ishaku Adamu · Broadcaster · Pastor · Theologian
          </p>
        </header>

        {/* ══════════ MAIN CONTENT ══════════ */}
        <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 pb-24">

          {/* ── Vision Banner ── */}
          <section className="vision-banner px-6 sm:px-10 py-10 mb-14" style={fadeUp("0.15s")}>
            <div className="max-w-2xl">
              <div className="sec-label">
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                  The Vision
                </span>
              </div>
              <p
                className="font-cormorant text-[#F9F5EE] leading-[1.9] mb-5"
                style={{ fontSize: "clamp(1.1rem, 1.7vw, 1.3rem)" }}
              >
                The Jukun people have carried their faith in song, story, and spoken word for
                centuries. This podcast is a sacred bridge — bringing the richness of Scripture
                into the heart language of the Jukun community, where the Word can be heard,
                received, and truly understood.
              </p>
              <p className="font-cormorant text-[#C4A96A] leading-[1.85]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.18rem)" }}>
                Each episode is recorded fresh — a daily devotional in the Jukun language,
                rooted in 35 years of broadcasting experience and decades of pastoral ministry.
                Whether you are in Taraba, Lagos, or across the diaspora, this is your daily
                encounter with the Living Word.
              </p>

              {/* Decorative waveform */}
              <div className="flex items-end gap-[4px] mt-8 h-8">
                {[40, 70, 55, 85, 60, 90, 45, 75, 50, 80, 35, 65, 88, 52, 70].map((h, i) => (
                  <div
                    key={i}
                    className="waveform-bar"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.08}s`,
                      animationDuration: `${1.2 + (i % 3) * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── Subscribe Platforms ── */}
          <section className="mb-14" style={fadeUp("0.25s")}>
            <div className="sec-label">
              <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                Subscribe & Listen
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) => (
                <a key={p.name} href={p.href} className="platform-pill" target="_blank" rel="noopener noreferrer">
                  <span style={{ color: p.color }}>{p.icon}</span>
                  <span
                    className="font-lato text-[#2C1E08] uppercase tracking-[0.14em]"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {p.name}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-[#A3762E] ml-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </section>

          {/* ── Player + Archive grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 xl:gap-14 items-start" style={fadeUp("0.35s")}>

            {/* ════ ARCHIVE (left / top on mobile) ════ */}
            <section className="order-2 lg:order-1">
              <div className="sec-label">
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                  Sermon Archive
                </span>
              </div>

              {/* Filter chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterTopic(t)}
                    className={`chip ${filterTopic === t ? "chip--active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Cards */}
              <div className="archive-wrap">
                {filtered.length === 0 ? (
                  <p className="font-lato text-[#8A7A62] px-6 py-10 text-center" style={{ fontSize: "0.75rem" }}>
                    No sermons found for this topic.
                  </p>
                ) : (
                  filtered.map((s) => (
                    <SermonCard
                      key={s.id}
                      sermon={s}
                      active={activeSermon.id === s.id}
                      onSelect={() => setActiveSermon(s)}
                    />
                  ))
                )}
              </div>

              {/* Browse more */}
              <div className="mt-4 flex justify-end">
                <button className="font-cinzel text-[#A3762E] uppercase tracking-[0.2em] hover:text-[#E8C97A] transition-colors flex items-center gap-2" style={{ fontSize: "0.48rem" }}>
                  Load More Sermons
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                    <path d="M12 5v14m7-7l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </section>

            {/* ════ PLAYER (right / bottom on mobile → above archive on mobile) ════ */}
            <aside className="order-1 lg:order-2 lg:sticky lg:top-10">
              <div className="sec-label">
                <span className="font-cinzel text-[#A3762E] uppercase tracking-[0.28em]" style={{ fontSize: "0.52rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                  Audio Player
                </span>
              </div>

              <AudioPlayer sermon={activeSermon} />

              {/* Sermon description */}
              <div className="mt-5 px-1">
                <p
                  className="font-cormorant text-[#2C1E08] leading-[1.85]"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.12rem)" }}
                >
                  {activeSermon.description}
                </p>
              </div>

              {/* Ornament */}
              <div className="flex items-center gap-4 mt-7">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right,rgba(163,118,46,0.22),transparent)" }} />
                <div className="flex gap-1.5 items-center">
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                  <div className="w-[5px] h-[5px] bg-[#A3762E] rotate-45" />
                  <div className="w-[4px] h-[4px] bg-[#A3762E] rotate-45 opacity-40" />
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left,rgba(163,118,46,0.22),transparent)" }} />
              </div>

              {/* Share / Download row */}
              <div className="mt-5 flex gap-3">
                <button className="platform-pill flex-1 justify-center" style={{ fontSize: "0.6rem" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#A3762E]">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-lato text-[#2C1E08] uppercase tracking-[0.12em]" style={{ fontSize: "0.58rem" }}>Download</span>
                </button>
                <button className="platform-pill flex-1 justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#A3762E]">
                    <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-lato text-[#2C1E08] uppercase tracking-[0.12em]" style={{ fontSize: "0.58rem" }}>Share</span>
                </button>
              </div>
            </aside>
          </div>

        </main>

        {/* Bottom gold rule */}
        <div className="w-full h-[2px] gold-rule" />
      </div>
    </>
  );
}