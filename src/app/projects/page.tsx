'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  date: string
  tag: string
  tagline: string
  abstract: string
  description: string
  features: string[]
  technologies: string[]
  role: string
  organization: string
  achievement?: string
  githubUrl?: string
  youtubeId?: string
  isFeatured?: boolean
}

function YouTubeEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <p
        className="section-tag"
        style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
      >
        <span style={{ color: 'var(--accent)' }}>▶</span> Demo Video
      </p>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9
          height: 0,
          overflow: 'hidden',
          background: '#000',
          border: '1px solid var(--ink)',
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              border: 'none',
            }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              background: `url(https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg) center/cover no-repeat`,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label={`Play demo for ${title}`}
          >
            {/* Play button overlay */}
            <span
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px', height: '64px',
                background: 'var(--accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              ▶
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="byline">Loading projects...</p>
      </div>
    )
  }

  const lead = projects[0]
  const secondary = projects.slice(1, 3)
  const rest = projects.slice(3)

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── PAGE HEADER ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem 0' }} className="responsive-padding">
        <div style={{ paddingTop: '1.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>
            Portfolio — All Projects
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <h1 className="headline-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              The Work
            </h1>
            <p className="byline">{projects.length} Projects · 2024</p>
          </div>
        </div>
      </div>

      {/* ── LEAD STORY ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }} className="responsive-padding">
        <div
          style={{
            borderTop: '3px double var(--ink)',
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: 0,
          }}
          className="responsive-grid-2"
        >
          {/* Big headline area */}
          <div style={{ padding: '2rem 1rem 2rem 0', borderRight: '1px solid var(--ink)' }} className="responsive-padding responsive-no-border-right">
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

            {/* YouTube embed under lead description */}
            {lead.youtubeId && <YouTubeEmbed youtubeId={lead.youtubeId} title={lead.title} />}
          </div>

          {/* Lead sidebar */}
          <div style={{ padding: '2rem 0 2rem 1rem' }} className="responsive-padding">
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
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }} className="responsive-padding">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            borderTop: '3px solid var(--ink)',
          }}
          className="responsive-grid-2"
        >
          {secondary.map((proj) => (
            <div
              key={proj.id}
              style={{
                padding: '1.75rem',
                borderRight: '1px solid var(--ink)',
                borderBottom: '1px solid var(--ink)',
              }}
              className="secondary-project-item responsive-no-border-right"
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
              <p className="byline" style={{ marginBottom: proj.youtubeId ? '0' : undefined }}>
                Role: {proj.role}
              </p>

              {/* YouTube embed for secondary projects */}
              {proj.youtubeId && <YouTubeEmbed youtubeId={proj.youtubeId} title={proj.title} />}
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
          padding: '2rem 1rem',
          margin: '0',
        }}
        className="responsive-padding"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="section-tag">More Projects</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}
            className="responsive-grid-3"
          >
            {rest.map((proj) => (
              <div
                key={proj.id}
                style={{
                  padding: '1.25rem',
                  borderRight: '1px solid var(--ink)',
                  borderBottom: '1px solid var(--ink)',
                }}
                className="briefs-grid-item responsive-no-border-right"
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: proj.youtubeId ? '0.75rem' : undefined }}>
                  {proj.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '9px' }}>{t}</span>
                  ))}
                </div>

                {/* YouTube embed for brief cards — compact */}
                {proj.youtubeId && <YouTubeEmbed youtubeId={proj.youtubeId} title={proj.title} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL TECH USED ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1rem' }} className="responsive-padding">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <span className="section-tag">Technologies Across All Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  )
}