"use client";

import { useState, useEffect, useRef } from "react";

const data = {
  name: "M. Mubashar Ameen",
  title: "Full-Stack Web Developer",
  subtitle: "MERN · Next.js · Django · REST APIs",
  email: "mubasharameen8595@gmail.com",
  phone: "+92-329-7766036",
  location: "Lahore / Kasur, Pakistan",
  portfolio: "https://next-js-mern-stack-portfolio.vercel.app",
  linkedin: "https://linkedin.com/in/mubashar-ameen-637359397",
  github: "https://github.com/mubasharameen485-cloud",
  summary:
    "Full-Stack Web Developer with hands-on experience building and deploying production-grade web applications using the MERN stack, Next.js, and Django REST Framework. Expert in secure RESTful APIs, Role-Based Access Control, database schema design, and responsive frontend architectures.",
  skills: {
    Frontend: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "TanStack Query", "React-Hook-Form"],
    Backend: ["Node.js", "Express.js", "Python", "Django", "Django REST Framework", "JWT", "bcrypt"],
    "Databases & ORM": ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Session Management"],
    "DevOps & Tools": ["Git", "GitHub", "Vercel", "Docker", "Postman", "Socket.io", "Linux"],
  },
  projects: [
    {
      title: "Advanced Study Management System",
      stack: "Next.js · TypeScript · Prisma · MongoDB · NextAuth.js · TanStack Query",
      github: "https://github.com/mubasharameen485-cloud/next.js-resume-project",
      color: "violet",
      points: [
        "Engineered a full-stack educational platform with multi-role RBAC (Student/Teacher), auto-generated Roll Numbers, and secure session management using NextAuth.js + Prisma ORM.",
        "Implemented a real-time Chat module via background API polling and full-CRUD Research Paper blog with optimistic UI updates using TanStack Query.",
        "Designed a normalized MongoDB schema supporting relational-style references across Users, Courses, and Posts collections.",
      ],
    },
    {
      title: "Full-Stack Next.js & Django Auth System",
      stack: "Next.js · Django · PostgreSQL · Django REST Framework · JWT",
      github: "https://github.com/Muhammad-Mubashar516/full-auth-next-django-postresql",
      color: "teal",
      points: [
        "Built a fully decoupled architecture with Next.js frontend consuming a Python/Django backend via RESTful API integration.",
        "Implemented JWT-based authentication, protected API routes, and relational data models using PostgreSQL with Django ORM migrations.",
      ],
    },
    {
      title: "MERN Stack Authentication & CRUD Suite",
      stack: "MongoDB · Mongoose · Express.js · React.js · Node.js · JWT · bcrypt",
      github: "https://github.com/Muhammad-Mubashar516/Mern-auth-systems",
      color: "orange",
      points: [
        "Developed production-ready RESTful APIs with Express.js for full CRUD operations, input validation, and structured error handling following MVC architecture.",
        "Secured all endpoints with JWT authentication and bcrypt password hashing with protected routes and token refresh logic.",
      ],
    },
    {
      title: "SkillUp E-Learning Platform",
      stack: "React.js · Node.js · Express.js · MongoDB · Mongoose · REST API",
      github: "https://github.com/Muhammad-Mubashar516/skillup-frontend",
      color: "pink",
      points: [
        "Built a fully responsive, component-based e-learning UI in React.js for course browsing, enrollment, and progress tracking with seamless API integration.",
        "Designed a scalable RESTful backend with Mongoose schemas for course data, user profiles, and enrollment records.",
      ],
    },
  ],
  education: {
    degree: "BS Information Technology",
    university: "University of Education, Lahore, Pakistan",
    expected: "2028",
    coursework: "Web Engineering, DBMS, Data Structures, OOP",
  },
};

const NAV_ITEMS = ["About", "Skills", "Projects", "Education", "Contact"];

const PROJECT_COLORS: Record<string, { bg: string; accent: string; tag: string; tagText: string; border: string }> = {
  violet: { bg: "#f5f3ff", accent: "#7c3aed", tag: "#ede9fe", tagText: "#5b21b6", border: "#c4b5fd" },
  teal:   { bg: "#f0fdfa", accent: "#0d9488", tag: "#ccfbf1", tagText: "#115e59", border: "#99f6e4" },
  orange: { bg: "#fff7ed", accent: "#ea580c", tag: "#ffedd5", tagText: "#9a3412", border: "#fdba74" },
  pink:   { bg: "#fdf2f8", accent: "#db2777", tag: "#fce7f3", tagText: "#9d174d", border: "#f9a8d4" },
};

const SKILL_COLORS = [
  { card: "#f5f3ff", border: "#c4b5fd", title: "#7c3aed", tag: "#ede9fe", tagBorder: "#ddd6fe", tagText: "#5b21b6" },
  { card: "#f0fdfa", border: "#99f6e4", title: "#0d9488", tag: "#ccfbf1", tagBorder: "#a7f3d0", tagText: "#065f46" },
  { card: "#fff7ed", border: "#fdba74", title: "#ea580c", tag: "#ffedd5", tagBorder: "#fcd34d", tagText: "#9a3412" },
  { card: "#fdf2f8", border: "#f9a8d4", title: "#db2777", tag: "#fce7f3", tagBorder: "#fbcfe8", tagText: "#9d174d" },
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.3 }
    );
    NAV_ITEMS.forEach((item) => { const el = sectionRefs.current[item]; if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f8f7ff;
          color: #1e1b4b;
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 2rem; transition: all 0.3s;
        }
        .nav.scrolled {
          background: rgba(248,247,255,0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1.5px solid #e0d9ff;
          box-shadow: 0 2px 24px rgba(124,58,237,0.06);
        }
        .nav-inner {
          max-width: 1080px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
        }
        .nav-logo {
          font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;
          background: linear-gradient(90deg, #7c3aed, #0d9488);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: 0.04em;
        }
        .nav-links { display: flex; gap: 2.2rem; list-style: none; }
        .nav-links button {
          background: none; border: none; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 600; color: #6b7280; cursor: pointer;
          letter-spacing: 0.03em; text-transform: uppercase; transition: color 0.2s; padding: 0;
        }
        .nav-links button.active, .nav-links button:hover { color: #7c3aed; }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span { display: block; width: 24px; height: 2px; background: #7c3aed; border-radius: 2px; }
        .mobile-menu {
          display: none; position: fixed; top: 68px; left: 0; right: 0;
          background: rgba(248,247,255,0.97); backdrop-filter: blur(16px);
          border-bottom: 1.5px solid #e0d9ff; z-index: 99;
          padding: 1.5rem 2rem; flex-direction: column; gap: 1.2rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu button {
          background: none; border: none; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 17px; font-weight: 700; color: #6b7280;
          cursor: pointer; text-align: left; text-transform: uppercase; transition: color 0.2s;
        }
        .mobile-menu button:hover { color: #7c3aed; }
        @media (max-width: 700px) { .nav-links { display: none; } .hamburger { display: flex; } }

        .hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 7rem 2rem 4rem; position: relative; overflow: hidden;
        }
        .hero-blob1 {
          position: absolute; width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%);
          top: -80px; right: -100px; pointer-events: none;
        }
        .hero-blob2 {
          position: absolute; width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%);
          bottom: 40px; left: -60px; pointer-events: none;
        }
        .hero-blob3 {
          position: absolute; width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(251,113,133,0.12) 0%, transparent 70%);
          top: 40%; left: 40%; pointer-events: none;
        }
        .hero-inner {
          max-width: 1080px; width: 100%;
          display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center;
          position: relative; z-index: 1;
        }
        .available-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ecfdf5; border: 1.5px solid #6ee7b7; border-radius: 100px;
          padding: 6px 16px; margin-bottom: 1.6rem;
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          color: #065f46; letter-spacing: 0.05em; width: fit-content;
        }
        .badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #10b981;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .hero-name {
          font-size: clamp(2.8rem, 5.5vw, 5rem); font-weight: 800;
          line-height: 1.06; letter-spacing: -0.04em; color: #1e1b4b; margin-bottom: 0.6rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #db2777 50%, #ea580c 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-role {
          font-family: 'JetBrains Mono', monospace; font-size: 14px;
          color: #6b7280; letter-spacing: 0.05em; line-height: 2; margin-bottom: 1.4rem;
        }
        .hero-summary {
          font-size: 1rem; color: #4b5563; line-height: 1.8; max-width: 520px; margin-bottom: 2.5rem;
        }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-main {
          background: linear-gradient(135deg, #7c3aed, #db2777); color: #fff;
          border: none; border-radius: 12px; padding: 0.8rem 2rem;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; letter-spacing: 0.03em; transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none; display: inline-block; box-shadow: 0 4px 20px rgba(124,58,237,0.3);
        }
        .btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,58,237,0.38); }
        .btn-outline {
          background: #fff; color: #7c3aed; border: 2px solid #c4b5fd; border-radius: 12px;
          padding: 0.8rem 2rem; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 700; cursor: pointer; letter-spacing: 0.03em;
          transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { background: #f5f3ff; border-color: #7c3aed; transform: translateY(-2px); }

        .avatar-wrap { position: relative; flex-shrink: 0; width: 210px; height: 210px; }
        .avatar-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          background: conic-gradient(from 0deg, #7c3aed, #db2777, #ea580c, #0d9488, #7c3aed);
          animation: spin 6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .avatar-inner {
          position: absolute; inset: 4px; border-radius: 50%;
          background: linear-gradient(135deg, #ede9fe 0%, #fce7f3 50%, #fff7ed 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 4rem; font-weight: 800; color: #7c3aed;
          letter-spacing: -0.04em; border: 4px solid #f8f7ff;
        }
        @media (max-width: 700px) {
          .hero-inner { grid-template-columns: 1fr; }
          .avatar-wrap { width: 130px; height: 130px; order: -1; }
          .avatar-inner { font-size: 2.4rem; }
        }

        .section { max-width: 1080px; margin: 0 auto; padding: 6rem 2rem; }
        .sec-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7c3aed;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.6rem;
        }
        .sec-title {
          font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800;
          letter-spacing: -0.035em; color: #1e1b4b; margin-bottom: 0.8rem;
        }
        .sec-bar {
          width: 52px; height: 4px; border-radius: 2px;
          background: linear-gradient(90deg, #7c3aed, #db2777); margin-bottom: 3rem;
        }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.25rem; }
        .skill-card { border-radius: 18px; padding: 1.6rem; border: 1.5px solid; transition: transform 0.2s, box-shadow 0.2s; }
        .skill-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,0.09); }
        .skill-card-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; font-weight: 500;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .skill-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          border-radius: 7px; padding: 4px 10px; border: 1px solid;
          white-space: nowrap; font-weight: 500; transition: opacity 0.2s;
        }
        .skill-tag:hover { opacity: 0.75; }

        .projects-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .proj-card {
          border-radius: 20px; padding: 2rem 2.2rem; border: 1.5px solid;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .proj-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.1); }
        .proj-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem; }
        .proj-title { font-size: 1.18rem; font-weight: 800; color: #1e1b4b; letter-spacing: -0.02em; }
        .proj-gh-link {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; border-radius: 8px;
          padding: 5px 12px; border: 1.5px solid; text-decoration: none; font-weight: 500;
          transition: opacity 0.2s; white-space: nowrap; flex-shrink: 0;
        }
        .proj-gh-link:hover { opacity: 0.7; }
        .proj-stack { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.04em; margin-bottom: 1.2rem; font-weight: 500; }
        .proj-points { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; }
        .proj-points li { font-size: 0.9rem; color: #4b5563; line-height: 1.68; padding-left: 1.3rem; position: relative; }

        .edu-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 640px) { .edu-wrapper { grid-template-columns: 1fr; } }
        .edu-main {
          background: linear-gradient(135deg, #f5f3ff 0%, #fce7f3 100%);
          border: 1.5px solid #c4b5fd; border-radius: 20px; padding: 2rem;
          display: flex; gap: 1.2rem; align-items: flex-start; grid-column: span 2;
        }
        @media (max-width: 640px) { .edu-main { grid-column: span 1; } }
        .edu-icon-box {
          width: 56px; height: 56px; border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed, #db2777);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem; flex-shrink: 0;
        }
        .edu-degree { font-size: 1.2rem; font-weight: 800; color: #1e1b4b; margin-bottom: 0.3rem; }
        .edu-uni { color: #7c3aed; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem; }
        .edu-meta { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #6b7280; line-height: 1.9; }
        .lang-card {
          background: #fff; border: 1.5px solid #e5e7eb; border-radius: 16px; padding: 1.5rem;
          display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;
        }
        .lang-flag { font-size: 2rem; }
        .lang-name { font-size: 1.05rem; font-weight: 700; color: #1e1b4b; }
        .lang-level { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #6b7280; }
        .lang-bar-bg { width: 100%; height: 5px; background: #f3f4f6; border-radius: 5px; margin-top: 4px; }
        .lang-bar { height: 5px; border-radius: 5px; }

        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
        .contact-card {
          background: #fff; border: 1.5px solid #e5e7eb; border-radius: 16px; padding: 1.4rem 1.6rem;
          display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;
          transition: all 0.22s;
        }
        .contact-card:hover { border-color: #c4b5fd; box-shadow: 0 6px 24px rgba(124,58,237,0.1); transform: translateY(-2px); }
        .contact-icon-wrap {
          width: 46px; height: 46px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;
        }
        .contact-lbl { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9ca3af; margin-bottom: 3px; letter-spacing: 0.06em; }
        .contact-val { font-size: 14px; font-weight: 700; color: #1e1b4b; word-break: break-all; }

        .footer {
          text-align: center; padding: 3rem 2rem; border-top: 1.5px solid #e0d9ff;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #9ca3af; background: #f8f7ff;
        }
        .footer-name {
          background: linear-gradient(90deg, #7c3aed, #db2777);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        .fu  { animation: fadeUp 0.7s ease forwards; }
        .d1  { animation-delay: 0.08s; opacity: 0; }
        .d2  { animation-delay: 0.18s; opacity: 0; }
        .d3  { animation-delay: 0.3s;  opacity: 0; }
        .d4  { animation-delay: 0.44s; opacity: 0; }
        .d5  { animation-delay: 0.58s; opacity: 0; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">mubashar.dev</span>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button className={active === item ? "active" : ""} onClick={() => scrollTo(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button key={item} onClick={() => scrollTo(item)}>{item}</button>
        ))}
      </div>

      {/* HERO */}
      <section id="About" ref={(el) => { sectionRefs.current["About"] = el; }}>
        <div className="hero">
          <div className="hero-blob1" />
          <div className="hero-blob2" />
          <div className="hero-blob3" />
          <div className="hero-inner">
            <div>
              <div className="available-badge fu d1">
                <span className="badge-dot" />
                Available for Immediate Joining
              </div>
              <h1 className="hero-name fu d2">
                M. <span className="gradient-text">Mubashar</span>
                <br />Ameen
              </h1>
              <p className="hero-role fu d3">
                Full-Stack Web Developer<br />
                MERN · Next.js · Django · REST APIs
              </p>
              <p className="hero-summary fu d4">{data.summary}</p>
              <div className="hero-btns fu d5">
                <a href={data.portfolio} target="_blank" rel="noopener noreferrer" className="btn-main">
                  View Portfolio ↗
                </a>
                <a href={`mailto:${data.email}`} className="btn-outline">Contact Me</a>
              </div>
            </div>
            <div className="avatar-wrap fu d2">
              <div className="avatar-ring" />
              <div className="avatar-inner">MA</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" ref={(el) => { sectionRefs.current["Skills"] = el; }}>
        <div className="section">
          <p className="sec-eyebrow">What I work with</p>
          <h2 className="sec-title">Technical Skills</h2>
          <div className="sec-bar" />
          <div className="skills-grid">
            {Object.entries(data.skills).map(([category, items], i) => {
              const c = SKILL_COLORS[i % SKILL_COLORS.length];
              return (
                <div className="skill-card" key={category} style={{ background: c.card, borderColor: c.border }}>
                  <p className="skill-card-label" style={{ color: c.title }}>{category}</p>
                  <div className="skill-tags">
                    {items.map((skill) => (
                      <span className="skill-tag" key={skill}
                        style={{ background: c.tag, borderColor: c.tagBorder, color: c.tagText }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" ref={(el) => { sectionRefs.current["Projects"] = el; }}>
        <div className="section">
          <p className="sec-eyebrow">What I&apos;ve built</p>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-bar" />
          <div className="projects-list">
            {data.projects.map((project) => {
              const c = PROJECT_COLORS[project.color];
              return (
                <div className="proj-card" key={project.title} style={{ background: c.bg, borderColor: c.border }}>
                  <div className="proj-top">
                    <p className="proj-title">{project.title}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="proj-gh-link" style={{ color: c.accent, borderColor: c.border }}>
                      GitHub ↗
                    </a>
                  </div>
                  <p className="proj-stack" style={{ color: c.accent }}>{project.stack}</p>
                  <ul className="proj-points">
                    {project.points.map((pt, i) => (
                      <li key={i}>
                        <span style={{ position: "absolute", left: 0, top: 5, fontSize: 10, color: c.accent }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="Education" ref={(el) => { sectionRefs.current["Education"] = el; }}>
        <div className="section">
          <p className="sec-eyebrow">Academic Background</p>
          <h2 className="sec-title">Education</h2>
          <div className="sec-bar" />
          <div className="edu-wrapper">
            <div className="edu-main">
              <div className="edu-icon-box">🎓</div>
              <div>
                <p className="edu-degree">{data.education.degree}</p>
                <p className="edu-uni">{data.education.university}</p>
                <p className="edu-meta">
                  Expected Graduation: {data.education.expected}<br />
                  Coursework: {data.education.coursework}
                </p>
              </div>
            </div>
            <div className="lang-card">
              <span className="lang-flag">🇬🇧</span>
              <p className="lang-name">English</p>
              <p className="lang-level">Professional Working Proficiency</p>
              <div className="lang-bar-bg">
                <div className="lang-bar" style={{ width: "80%", background: "linear-gradient(90deg,#7c3aed,#db2777)" }} />
              </div>
            </div>
            <div className="lang-card">
              <span className="lang-flag">🇵🇰</span>
              <p className="lang-name">Urdu</p>
              <p className="lang-level">Native / Bilingual</p>
              <div className="lang-bar-bg">
                <div className="lang-bar" style={{ width: "100%", background: "linear-gradient(90deg,#0d9488,#059669)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" ref={(el) => { sectionRefs.current["Contact"] = el; }}>
        <div className="section">
          <p className="sec-eyebrow">Get in touch</p>
          <h2 className="sec-title">Contact</h2>
          <div className="sec-bar" />
          <div className="contact-grid">
            {[
              { href: `mailto:${data.email}`,  icon: "✉️", bg: "#f5f3ff", label: "Email",    val: data.email },
              { href: `tel:${data.phone}`,      icon: "📞", bg: "#f0fdfa", label: "Phone",    val: data.phone },
              { href: data.linkedin,            icon: "💼", bg: "#eff6ff", label: "LinkedIn", val: "mubashar-ameen" },
              { href: data.github,              icon: "🐙", bg: "#fdf2f8", label: "GitHub",   val: "mubasharameen485-cloud" },
              { href: "#",                      icon: "📍", bg: "#fff7ed", label: "Location", val: data.location },
            ].map((item) => (
              <a key={item.label} href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" className="contact-card"
                style={{ cursor: item.href === "#" ? "default" : "pointer" }}
                onClick={item.href === "#" ? (e) => e.preventDefault() : undefined}>
                <div className="contact-icon-wrap" style={{ background: item.bg }}>{item.icon}</div>
                <div>
                  <p className="contact-lbl">{item.label}</p>
                  <p className="contact-val">{item.val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed & built by <span className="footer-name">M. Mubashar Ameen</span> · {new Date().getFullYear()}</p>
        <p style={{ marginTop: "0.4rem", fontSize: "11px" }}>Built with Next.js · Available for Immediate Joining</p>
      </footer>
    </>
  );
}