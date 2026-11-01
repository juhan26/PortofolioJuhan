import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowDown, FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { project } from './assets/data/project';
import { skill } from './assets/data/skill';
import portrait from './assets/juan-rapi.png';
import expertise from './assets/figma-reference/expertise.png';
import arrow from './assets/figma-reference/arrow.svg';
import logoBtix from './assets/partners/logo-btix.svg';
import logoVertura from './assets/partners/vertura.png';
import logoMelostore from './assets/partners/melostore-logo.png';
import logoBalmon from './assets/partners/balmon-white.png';
import logoCertipro from './assets/partners/certipro-white.svg';
import logoSmansa from './assets/partners/smansa.png';
import logoUnizar from './assets/partners/unizar.png';
import logoTerrahub from './assets/partners/logo-terrahub-white.svg';
import logoTracea from './assets/partners/tracea-white.png';
import logoTekadesa from './assets/partners/logo_dark.png';
import logoWargapay from './assets/partners/logo-wargapay-white.svg';
import logoCubiedu from './assets/partners/logo Cubiedu.png';
import logoCubiespot from './assets/partners/cubiespot.png';
import logoLudes from './assets/partners/ludes-white.png';
import logoDgn from './assets/partners/dgn-white.svg';
import logoLinov from './assets/partners/logo-linov-white.png';
import logoSurf from './assets/partners/logo-surf.png';
import logoUin from './assets/partners/logo-uin.png';
import logoPc from './assets/partners/logo-pc.png';
import logoSail from './assets/partners/Logo Icon.png';

const email = 'juhndaa@gmail.com';
const filters = ['All', 'React / Next.js', 'Laravel / PHP', 'Other'];
const category = ({ tech }) => {
  if (tech.some((name) => /laravel|php/i.test(name))) return 'Laravel / PHP';
  if (tech.some((name) => /react|next/i.test(name))) return 'React / Next.js';
  return 'Other';
};
const socials = [
  ['GitHub', 'https://github.com/juhan26', FiGithub],
  ['LinkedIn', 'https://www.linkedin.com/in/juhanda/', FiLinkedin],
  ['Instagram', 'https://www.instagram.com/juhndaa', FiInstagram],
];

const partners = [
  { name: 'Btix', logo: logoBtix, height: 38 },
  { name: 'Vertura', logo: logoVertura, height: 36 },
  { name: 'melostore.id', logo: logoMelostore, height: 32 },
  { name: 'Balai Monitor Semarang', logo: logoBalmon, height: 36 },
  { name: 'CertiPro.id', logo: logoCertipro, height: 32 },
  { name: 'SMAN 1 Mataram', logo: logoSmansa, height: 46 },
  { name: 'Universitas Islam Al-Azhar', logo: logoUnizar, height: 46 },
  { name: 'TerraHub', logo: logoTerrahub, height: 32 },
  { name: 'Tracea', logo: logoTracea, height: 32 },
  { name: 'Tekadesa', logo: logoTekadesa, height: 28 },
  { name: 'WargaPay', logo: logoWargapay, height: 24 },
  { name: 'Cubiedu', logo: logoCubiedu, height: 30 },
  { name: 'Cubiespot', logo: logoCubiespot, height: 40 },
  { name: 'Ludes.in', logo: logoLudes, height: 30 },
  { name: 'Digitelnusa', logo: logoDgn, height: 24 },
  { name: 'Lumbung Inovasi', logo: logoLinov, height: 42 },
  { name: 'Ocean Blue Surf School', logo: logoSurf, height: 42 },
  { name: 'UIN Mataram', logo: logoUin, height: 46 },
  { name: 'PlayIT', logo: logoPc, height: 36 },
  { name: 'Iconic Venture', logo: logoSail, height: 40 },
];

function ProjectCard({ item, featured = false, index = 0 }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <article className={`project-card${featured ? ' featured-card' : ''} reveal-up`} style={{ '--card-index': index }}>
      <a className={`project-image${!loaded ? ' is-loading' : ''}`} href={item.web || item.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name}`}>
        {!loaded && <div className="skeleton-placeholder" aria-hidden="true" />}
        <img
          ref={imgRef}
          src={item.img}
          alt={`${item.name} website preview`}
          loading="lazy"
          width="1280"
          height="800"
          onLoad={() => setLoaded(true)}
          className={`project-img ${loaded ? 'is-loaded' : 'is-loading'}`}
        />
        <span className="project-visit" aria-hidden="true"><FiArrowUpRight /></span>
        {featured && <div className="project-caption"><h3>{item.name}</h3><span>{item.tech.slice(0, 2).join(' / ')}</span></div>}
      </a>
      {!featured && <div className="project-info">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <ul className="tags" aria-label="Technologies">{item.tech.map((name) => <li key={name}>{name}</li>)}</ul>
        <div className="project-links">
          {item.web && <a href={item.web} target="_blank" rel="noopener noreferrer">Visit website <FiArrowUpRight /></a>}
          {item.github && <a href={item.github} target="_blank" rel="noopener noreferrer">Source code <FiGithub /></a>}
        </div>
      </div>}
    </article>
  );
}

function ProjectReel() {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const node = video.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (preference.matches) node.pause();
      else node.play().catch(() => {});
    };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return <section className="project-reel" aria-label="Project motion montage">
    <video ref={video} muted loop playsInline preload="metadata" poster="/project-montage.jpg" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="An animated collage of portfolio projects">
      <source src="/project-showreel.webm" type="video/webm" />
      Your browser does not support this video. <a href="/project-showreel.webm">Download the compilation</a>.
    </video>
    <button type="button" className="reel-toggle" aria-label={playing ? 'Pause compilation' : 'Play compilation'} onClick={() => playing ? video.current.pause() : video.current.play().catch(() => {})}><span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span></button>
  </section>;
}

function CursorAccent() {
  const ring = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    function move(event) {
      if (!preference.matches || event.pointerType === 'touch') return;
      const node = ring.current;
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
      node.dataset.visible = 'true';
      node.dataset.interactive = Boolean(event.target.closest('a, button, summary, video'));
    }
    function hide() { ring.current.dataset.visible = 'false'; }
    window.addEventListener('pointermove', move);
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, []);
  return <div ref={ring} className="cursor-accent" aria-hidden="true" />;
}

export default function App() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const { pathname } = useLocation();
  const projects = project.filter((item) => (filter === 'All' || category(item) === filter) && `${item.name} ${item.desc} ${item.tech.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const id = pathname === '/project' ? 'all-projects' : pathname === '/technology' ? 'technology' : null;
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-up, .partners-cluster');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [projects.length, filter]);

  function sendInquiry(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name').trim();
    const message = data.get('message').trim();
    if (!name || !message) {
      setContactStatus('Please enter your name and a message, not only spaces.');
      return;
    }
    const body = `Hi Juhanda,\n\n${message}\n\nFrom: ${name}\nEmail: ${data.get('email').trim()}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setContactStatus(`Your email app will open with a draft. Nothing is sent until you send it. You can also email ${email} directly.`);
  }

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <CursorAccent />
        <nav className="nav-pill" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Juhanda home">ju<span>.</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#clients">Clients</a></div>
          <a className="nav-contact" href="#contact">Let’s talk <FiArrowUpRight /></a>
        </nav>
      <header className="hero" id="top">
        <div className="hero-topline"><span>FULL-STACK DEVELOPER</span><span>MATARAM, INDONESIA</span></div>
        <div className="hero-portrait"><img src={portrait} alt="Juhanda Azril Kamal" fetchPriority="high" width="640" height="640" /></div>
        <div className="hero-intro"><span className="eyebrow">IDEAS INTO EXPERIENCES</span><p>I build thoughtful<br />websites & web apps.</p></div>
        <a className="pill-button hero-cta" href="#contact">Let’s talk <img src={arrow} alt="" /></a>
        <h1 className="hero-name">Juhanda <span>—</span> Azril</h1>
        <div className="hero-bottom"><span>CODE WITH PURPOSE. BUILD WITH CARE.</span><a href="#about">Scroll to explore <FiArrowDown /></a></div>
      </header>

      <main>
        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-aside"><p className="section-label">⏤ About me</p><img className="about-portrait" src={portrait} alt="Juhanda in Mataram, Indonesia" loading="lazy" width="190" height="232" /></div>
          <div className="about-content reveal-up"><h2 id="about-title">Good ideas deserve<br />a great <span className="muted">website.</span></h2>
            <div className="about-copy"><p className="about-role">Juhanda Azril Kamal<br /><span>Full-stack developer<br />Based in Lombok, Indonesia</span></p>
              <div><p>I bring ideas to life through clean interfaces and reliable web applications. From a business’s first website to platforms that handle bookings, payments, and everyday workflows, I build for the people who use them.</p>
                <p>At <a href="https://begawe.com/" target="_blank" rel="noopener noreferrer">PT. Begawe Inti Media</a>, I work with Laravel and Next.js. I also take on freelance projects, study Software Engineering at Universitas Bumigora, and explore React Native and DevOps.</p>
                <a className="text-link" href="https://drive.google.com/file/d/1k1-slkaNJAiibApMBcrtJW7uaSi64Nl_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View my résumé <FiArrowUpRight /></a>
              </div>
            </div>
          </div>
        </section>

        <div className="tech-strip" aria-label="Core technologies">{['ReactJs', 'NextJs', 'NuxtJs', 'NestJs', 'Laravel', 'Typescript', 'TailwindCSS', 'Docker'].map((name) => {
          const item = skill.find((entry) => entry.name === name);
          return <a key={name} href="#technology"><img src={item.img} alt="" loading="lazy" width="32" height="32" /><span>{name}</span></a>;
        })}</div>

        <ProjectReel />

        <section className="expertise-section" id="clients" aria-labelledby="clients-title" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.82), rgba(0,0,0,.35)), url(${expertise})` }}>
          <span id="expertise" style={{ position: 'absolute', top: '-80px' }} aria-hidden="true" />
          <div className="expertise-heading reveal-up">
            <div>
              <p className="section-label">⏤ Worked with</p>
              <h2 id="clients-title">Trusted by businesses,<br />schools & platforms.</h2>
            </div>
            <p className="clients-subhead">Selected organizations, businesses, and ventures I’ve built web solutions and digital products for.</p>
          </div>
          <div className="partners-cluster reveal-up" aria-label="Partner and client logos">
            {partners.map((p, idx) => (
              <div key={p.name} className="partner-logo-item" title={p.name} style={{ '--logo-index': idx }}>
                <img src={p.logo} alt={p.name} style={{ height: `${p.height}px` }} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="clients-footer">
            <span>Collaborations across full-stack development, UI/UX, and cloud platforms</span>
            <span className="expertise-signature">Juhanda Azril Kamal</span>
          </div>
        </section>

        <section className="section technology-section" id="technology" aria-labelledby="technology-title">
          <div className="section-heading reveal-up"><p className="section-label">⏤ My toolkit</p><h2 id="technology-title">The tools behind<br />the work.</h2><p className="heading-note">A practical stack for bringing ideas to life.<br />Select a technology to learn more.</p></div>
          <div className="technology-grid">{skill.map((item) => <details className="technology-item" key={item.name}><summary><img src={item.img} alt="" width="32" height="32" loading="lazy" /><span>{item.name}</span><span className="detail-toggle" aria-hidden="true">+</span></summary><p>{item.text}</p></details>)}</div>
        </section>

        <section className="section archive-section" id="all-projects" aria-labelledby="archive-title" style={{ position: 'relative' }}>
          <span id="work" style={{ position: 'absolute', top: '-80px' }} aria-hidden="true" />
          <div className="section-heading reveal-up"><p className="section-label">⏤ Project archive</p><h2 id="archive-title">More than a snapshot.</h2><span className="small-note">CLIENT WORK & PERSONAL PROJECTS</span></div>
          <div className="archive-toolbar"><div className="filter-list" role="group" aria-label="Filter projects by technology">{filters.map((name) => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}</div><label className="search-label"><span className="sr-only">Search projects</span><input type="search" placeholder="Find a project…" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
          <p className="result-count" aria-live="polite">{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
          <div className="archive-grid">{projects.map((item, idx) => <ProjectCard key={item.name} item={item} index={idx % 3} />)}</div>
          {projects.length === 0 && <div className="empty-state"><h3>No projects found.</h3><p>Try another name or technology.</p><button className="text-link" onClick={() => { setFilter('All'); setQuery(''); }}>Reset filters <FiArrowUpRight /></button></div>}
        </section>
      </main>

      <footer className="section contact-section" id="contact">
        <div className="contact-top reveal-up"><p>Have something in mind?<br />Let’s build something that matters.</p><div className="social-links">{socials.map(([name, href, Icon]) => <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon /></a>)}</div></div>
        <h2 className="contact-title reveal-up">Get in touch<span aria-hidden="true"> ↗</span></h2>
        <div className="contact-grid reveal-up"><div className="contact-info"><a href={`mailto:${email}`}>{email}</a><p>Mataram, Lombok · Indonesia</p><p className="small-note">HAVE AN IDEA? START WITH A HELLO.</p></div>
          <form onSubmit={sendInquiry} className="contact-form">
            <label><span>01</span><span className="sr-only">Full name</span><input name="name" autoComplete="name" placeholder="Your full name" required maxLength="100" /></label>
            <label><span>02</span><span className="sr-only">Email address</span><input name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength="254" /></label>
            <label><span>03</span><span className="sr-only">Project message</span><textarea name="message" placeholder="Tell me about your project…" required rows="2" maxLength="3000" /></label>
            <button className="text-link" type="submit">Send inquiry <FiArrowUpRight /></button><p className="form-note">Opens your email app. No data stored on this website.</p><p role="status" className="form-status">{contactStatus}</p>
          </form>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Juhanda Azril Kamal</span><span>Built with React. Made with care.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
