import Link from 'next/link'

const FEATURED_PROJECTS = [
  {
    tag: 'AI/ML',
    headline: 'Hisaab-Book: Revolutionising Small Business Accounting With Voice AI',
    standfirst:
      'National finalist at Bhashini Sprint, this React Native + FastAPI system brings Indic-language voice and image recognition to SME inventory management.',
    date: 'Mar 2024',
    size: 'lead',
  },
  {
    tag: 'Fintech',
    headline: 'FinVerse Connects Financial Communities on Mobile',
    standfirst:
      'A React Native fintech networking platform powered by Supabase, bridging investors and advisors in a LinkedIn-meets-Bloomberg interface.',
    date: 'Dec 2024',
    size: 'secondary',
  },
  {
    tag: 'Computer Vision',
    headline: 'SafeGuard Deploys YOLO to Monitor Workplace Safety in Real Time',
    standfirst:
      'CNN-based object detection with Twilio alerts — keeping construction sites safe, one frame at a time.',
    date: 'Aug 2024',
    size: 'secondary',
  },
  {
    tag: 'ML Engineering',
    headline: 'FutureFund Brings Machine Learning to Retirement Planning',
    standfirst:
      'TensorFlow-backed investment guidance in a Next.js interface — finalist at TIAA Retire-Thon.',
    date: 'May 2024',
    size: 'brief',
  },
  {
    tag: 'Climate Tech',
    headline: 'AQI Nexus: AI-Powered Air Quality Forecasting for Urban India',
    standfirst:
      'FastAPI + Python ML pipeline delivering real-time AQI predictions with a React Native dashboard.',
    date: 'Aug 2024',
    size: 'brief',
  },
]

const SKILLS = [
  'Java', 'SpringBoot', 'Python', 'React', 'Next.js',
  'React Native', 'FastAPI', 'TensorFlow', 'AWS', 'Supabase',
  'Jenkins', 'Spinnaker', 'TypeScript', 'Figma',
]

export default function HomePage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ════════════════════════════════════
          HERO SECTION — BROADSHEET FRONT PAGE
      ════════════════════════════════════ */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          paddingTop: '2.5rem',
        }}
        className="responsive-padding"
      >
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span className="section-tag">Today's Edition</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
          <span className="byline">Feature Interview</span>
        </div>

        {/* Main grid: Big headline + sidebar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '0',
            borderTop: '3px solid var(--ink)',
          }}
          className="responsive-grid-2"
        >
          {/* ── LEFT: HERO STORY ── */}
          <div
            style={{
              padding: '2rem 1rem 2rem 0',
              borderRight: '1px solid var(--ink)',
            }}
            className="responsive-padding responsive-no-border-right"
          >
            <p className="byline" style={{ marginBottom: '0.75rem' }}>
              By The Editorial Staff · Mumbai
            </p>
            <h1
              className="headline-xl"
              style={{
                marginBottom: '1rem',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Mihiresh
              <br />
              <span style={{ color: 'var(--accent)' }}>Joshi</span>
            </h1>
            <p
              className="standfirst"
              style={{ marginBottom: '1.5rem', maxWidth: '520px' }}
            >
              Software Engineer at JPMorgan Chase, national hackathon finalist,
              and full-stack architect with an obsession for AI-driven products
              that solve real problems.
            </p>

            {/* Decorative rule with ornament */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              <span style={{ fontSize: '1rem', color: 'var(--muted)' }}>✦</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
            </div>

            <p
              className="body-copy dropcap"
              style={{ marginBottom: '1.5rem', maxWidth: '560px' }}
            >
              Currently SDE-1 at JPMorgan Chase &amp; Co. as a Software Development
              Engineer, Mihiresh works with Java, SpringBoot, AWS, Jenkins, and Spinnaker
              on enterprise-scale backend systems. A B.Tech Computer Engineering (Data Science)
              student at RAIT Mumbai with a 9.46 CGPA, his work spans AI/ML, full-stack
              development, and cloud infrastructure — from national-level hackathon projects
              to production deployments.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/resume.pdf" className="btn-ink" download>
                Download Résumé
              </a>
              <Link href="/projects" className="btn-outline">
                View Projects
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* ── RIGHT: SIDEBAR ── */}
          <div style={{ padding: '2rem 0 2rem 1rem' }} className="responsive-padding">
            {/* Profile card */}
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p className="section-tag" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                Who's Who
              </p>
              <h2
                className="headline-md"
                style={{ color: 'var(--paper)', marginBottom: '1rem', fontSize: '1.4rem' }}
              >
                The Engineer Behind the Byline
              </h2>
              <dl style={{ fontSize: '11px', fontFamily: 'Space Mono, monospace', lineHeight: 2 }}>
                {[
                  ['Role', 'SDE-1, JPMorgan Chase'],
                  ['Education', 'B.Tech CE(DS), RAIT Mumbai'],
                  ['CGPA', '9.46 / 10'],
                  ['Location', 'Mumbai, India'],
                  ['Certification', 'AWS Cloud Practitioner'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #333', paddingBottom: '0.25rem' }}>
                    <dt style={{ color: '#888', minWidth: '90px' }}>{k}</dt>
                    <dd style={{ color: '#ddd', margin: 0 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Quick links */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>
                Direct Lines
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/mihireshjoshi' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mihiresh-joshi-651423207/' },
                  { label: 'Email', href: 'mailto:mihiresh.noreply@gmail.com' },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--ink)',
                      textDecoration: 'none',
                      color: 'var(--ink)',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>{l.label}</span>
                    <span style={{ color: 'var(--accent)' }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SKILLS TICKER BAR
      ════════════════════════════════════ */}
      <div
        style={{
          background: 'var(--paper-dark)',
          borderTop: '1px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '0.75rem 1rem',
          margin: '2rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
        className="responsive-padding responsive-gap"
      >
        <span className="section-tag" style={{ whiteSpace: 'nowrap' }}>
          Tech Stack ·
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {SKILLS.map((s) => (
            <span key={s} className="tech-tag">{s}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          FEATURED STORIES — PROJECT GRID
      ════════════════════════════════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 3rem' }} className="responsive-padding">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span className="section-tag">Portfolio Highlights</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
          <Link
            href="/projects"
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            All Projects →
          </Link>
        </div>

        {/* Lead story + 2 secondary */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '0',
            borderTop: '3px double var(--ink)',
            marginBottom: '0',
          }}
          className="responsive-grid-2"
        >
          {/* Lead */}
          <div
            style={{
              padding: '1.5rem 1rem 1.5rem 0',
              borderRight: '1px solid var(--ink)',
            }}
            className="responsive-padding responsive-no-border-right"
          >
            <span className="section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
              {FEATURED_PROJECTS[0].tag}
            </span>
            <h2 className="headline-lg" style={{ marginBottom: '0.75rem' }}>
              {FEATURED_PROJECTS[0].headline}
            </h2>
            <p className="standfirst" style={{ marginBottom: '1rem' }}>
              {FEATURED_PROJECTS[0].standfirst}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="byline">{FEATURED_PROJECTS[0].date}</span>
              <Link href="/projects" className="btn-ink" style={{ fontSize: '10px', padding: '0.4rem 1rem' }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Two secondary stories */}
          <div>
            {FEATURED_PROJECTS.slice(1, 3).map((proj, i) => (
              <div
                key={proj.headline}
                style={{
                  padding: '1.5rem 0 1.5rem 1rem',
                  borderBottom: i === 0 ? '1px solid var(--ink)' : 'none',
                }}
                className="responsive-padding"
              >
                <span className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  {proj.tag}
                </span>
                <h3 className="headline-sm" style={{ marginBottom: '0.5rem' }}>
                  {proj.headline}
                </h3>
                <p className="body-copy" style={{ fontSize: '11.5px', marginBottom: '0.75rem' }}>
                  {proj.standfirst}
                </p>
                <span className="byline">{proj.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two briefs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            borderTop: '3px double var(--ink)',
          }}
          className="responsive-grid-2"
        >
          {FEATURED_PROJECTS.slice(3).map((proj, i) => (
            <div
              key={proj.headline}
              style={{
                padding: '1.25rem',
                borderRight: i === 0 ? '1px solid var(--ink)' : 'none',
              }}
              className="responsive-no-border-right"
            >
              <span className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                {proj.tag}
              </span>
              <h3 className="headline-sm" style={{ marginBottom: '0.4rem' }}>
                {proj.headline}
              </h3>
              <p className="body-copy" style={{ fontSize: '11.5px' }}>
                {proj.standfirst}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          PULL QUOTE BAND
      ════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '3rem 1rem',
          textAlign: 'center',
        }}
        className="responsive-padding"
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-tag" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1.5rem' }}>
            In His Own Words
          </span>
          <blockquote
            className="font-display"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontStyle: 'italic',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--paper)',
              border: 'none',
              margin: '0 0 1.5rem',
            }}
          >
            "I don't just build features — I build systems
            that learn, adapt, and actually solve the problem."
          </blockquote>
          <p className="byline" style={{ color: '#888' }}>
            Mihiresh Joshi · Software Engineer & AI Enthusiast
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════
          ACHIEVEMENTS BAND
      ════════════════════════════════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }} className="responsive-padding">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span className="section-tag">Dispatch: Achievements</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            borderTop: '3px solid var(--ink)',
          }}
          className="responsive-grid-3"
        >
          {[
            {
              tag: 'Sept 2024',
              headline: 'Winner',
              sub: 'Techathon Kode Konquerors',
              desc: "First place at Kongsberg Maritime's flagship hackathon — engineering excellence recognised.",
            },
            {
              tag: 'June 2024',
              headline: 'Finalist',
              sub: 'TIAA Retire-Thon',
              desc: 'National finalist with FutureFund, an ML-powered retirement planning platform.',
            },
            {
              tag: 'May 2024',
              headline: 'Finalist',
              sub: 'Bhashini Sprint (National)',
              desc: 'Hisaab-Book reached national finals — Indic-language AI for SME accounting.',
            },
          ].map((a, i) => (
            <div
              key={a.sub}
              style={{
                padding: '1.5rem',
                borderRight: i < 2 ? '1px solid var(--ink)' : 'none',
              }}
              className="responsive-no-border-right"
            >
              <span className="byline" style={{ display: 'block', marginBottom: '0.25rem' }}>
                {a.tag}
              </span>
              <h3
                className="headline-lg"
                style={{ color: 'var(--accent)', fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.25rem' }}
              >
                {a.headline}
              </h3>
              <p
                className="font-mono"
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.75rem' }}
              >
                {a.sub}
              </p>
              <p className="body-copy">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
