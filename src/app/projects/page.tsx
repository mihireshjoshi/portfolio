import Link from 'next/link'
import { PROJECTS } from '@/data/projects'

export default function ProjectsPage() {
  const lead = PROJECTS[0]
  const secondary = PROJECTS.slice(1, 3)
  const rest = PROJECTS.slice(3)

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── PAGE HEADER ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 0' }}>
        <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>
            Portfolio — All Projects
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h1 className="headline-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              The Work
            </h1>
            <p className="byline">{PROJECTS.length} Projects · 2024</p>
          </div>
        </div>
      </div>

      {/* ── LEAD STORY ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            borderTop: '3px double var(--ink)',
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: 0,
          }}
        >
          {/* Big headline area */}
          <div style={{ padding: '2rem 2rem 2rem 0', borderRight: '1px solid var(--ink)' }}>
            <span className="section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
              {lead.tag} · {lead.date}
            </span>
            <h2 className="headline-lg" style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {lead.title}
            </h2>
            <p className="standfirst" style={{ marginBottom: '1.25rem' }}>
              {lead.abstract}
            </p>
            <p className="body-copy dropcap" style={{ marginBottom: '1.25rem' }}>
              {lead.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {lead.achievement && (
                <span
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                  }}
                >
                  🏆 {lead.achievement}
                </span>
              )}
              {lead.githubUrl && (
                <a
                  href={lead.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '10px', padding: '0.4rem 1rem' }}
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>

          {/* Lead sidebar */}
          <div style={{ padding: '2rem 0 2rem 2rem' }}>
            <div style={{ borderBottom: '1px solid var(--ink)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.5rem' }}>Role</p>
              <p className="font-mono" style={{ fontSize: '12px' }}>{lead.role}</p>
            </div>
            <div style={{ borderBottom: '1px solid var(--ink)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.5rem' }}>Organisation</p>
              <p className="font-mono" style={{ fontSize: '12px' }}>{lead.organization}</p>
            </div>
            <div style={{ borderBottom: '1px solid var(--ink)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Key Features</p>
              {lead.features.map((f) => (
                <div key={f} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                  <p className="body-copy">{f}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {lead.technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECONDARY PROJECTS ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            borderTop: '3px solid var(--ink)',
          }}
        >
          {secondary.map((proj, i) => (
            <div
              key={proj.id}
              style={{
                padding: '1.75rem',
                paddingLeft: i === 0 ? 0 : '1.75rem',
                borderRight: i === 0 ? '1px solid var(--ink)' : 'none',
              }}
            >
              <span className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                {proj.tag} · {proj.date}
              </span>
              <h2 className="headline-md" style={{ marginBottom: '0.5rem' }}>
                {proj.title}
              </h2>
              <p className="standfirst" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                {proj.tagline}
              </p>
              <p className="body-copy" style={{ marginBottom: '1rem' }}>
                {proj.abstract}
              </p>

              {proj.achievement && (
                <p
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  🏆 {proj.achievement}
                </p>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                {proj.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <p className="byline">Role: {proj.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRIEFS GRID ── */}
      <section
        style={{
          background: 'var(--paper-dark)',
          borderTop: '3px double var(--ink)',
          borderBottom: '3px solid var(--ink)',
          padding: '2rem',
          margin: '0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="section-tag">More Projects</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
            }}
          >
            {rest.map((proj, i) => (
              <div
                key={proj.id}
                style={{
                  padding: '1.25rem',
                  paddingLeft: i % 3 === 0 ? 0 : '1.25rem',
                  borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--ink)' : 'none',
                }}
              >
                <span className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  {proj.tag}
                </span>
                <h3 className="headline-sm" style={{ marginBottom: '0.35rem' }}>
                  {proj.title}
                </h3>
                <p className="byline" style={{ marginBottom: '0.5rem' }}>{proj.date}</p>
                <p className="body-copy" style={{ marginBottom: '0.75rem' }}>
                  {proj.abstract}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {proj.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '9px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL TECH USED ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <span className="section-tag">Technologies Across All Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {Array.from(new Set(PROJECTS.flatMap((p) => p.technologies))).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
