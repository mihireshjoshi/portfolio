'use client'

import { useState, useEffect } from 'react'

interface Experience {
  id: string
  role: string
  org: string
  period: string
  type: string
  bullets: string[]
}

interface Achievement {
  id: string
  award: string
  event: string
  org: string
  date: string
}

interface ProjectSummary {
  id: string
  title: string
  technologies: string[]
  note: string
}

interface Skill {
  id: string
  name: string
  type: string
  expertiseLevel: number
  displayOrder: number
}

export default function ResumePage() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [projects, setProjects] = useState<ProjectSummary[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      console.log('[RESUME] Starting data fetch...')
      try {
        console.log('[RESUME] Fetching experiences, achievements, projects, and skills...')
        const [expRes, achRes, projRes, skillRes] = await Promise.all([
          fetch('/api/experiences'),
          fetch('/api/achievements'),
          fetch('/api/projects'),
          fetch('/api/skills'),
        ])
        const expData = await expRes.json()
        const achData = await achRes.json()
        const projData = await projRes.json()
        const skillData = await skillRes.json()
        console.log('[RESUME] Data fetched:', { experiences: expData?.length || 0, achievements: achData?.length || 0, projects: projData?.length || 0, skills: skillData?.length || 0 })
        setExperiences(expData)
        setAchievements(achData)
        setProjects(projData)
        setSkills(skillData)
      } catch (error) {
        console.error('[RESUME] Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="byline">Loading resume...</p>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── HEADER ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem 0' }} className="responsive-padding">
        <div style={{ paddingTop: '1.5rem', marginBottom: '0' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
            className="resume-header-row"
          >
            <div style={{ flex: '1 1 320px' }}>
              <p className="section-tag" style={{ marginBottom: '0.5rem' }}>Résumé — Curriculum Vitae</p>
              <h1 className="headline-xl">
                Mihiresh Joshi
              </h1>
              <p className="standfirst">
                Software Engineer · AI/ML Enthusiast · Full Stack Developer
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Mihiresh_Joshi_Resume.pdf"
              className="btn-ink resume-download-btn"
              style={{ alignSelf: 'flex-start' }}
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 3rem' }} className="responsive-padding">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 0,
            borderTop: '3px double var(--ink)',
            marginTop: '1.5rem',
          }}
          className="responsive-grid-2"
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ paddingRight: '1rem', borderRight: '1px solid var(--ink)' }} className="responsive-padding responsive-no-border-right">

            {/* EXPERIENCE */}
            <div style={{ paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Experience</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>

              {experiences.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: i > 0 ? '1px solid var(--ink)' : 'none',
                    paddingTop: i > 0 ? '1.25rem' : 0,
                    paddingBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <h3 className="headline-sm">{exp.role}</h3>
                    <span
                      style={{
                        background: exp.type === 'Full-Time' ? 'var(--accent)' : 'var(--ink)',
                        color: 'var(--paper)',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '2px 6px',
                        flexShrink: 0,
                        marginLeft: '1rem',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <p
                    className="font-mono"
                    style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.25rem' }}
                  >
                    {exp.org}
                  </p>
                  <p className="byline" style={{ marginBottom: '0.75rem' }}>{exp.period}</p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="body-copy"
                        style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.3rem' }}
                      >
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* PROJECTS SUMMARY */}
            <div style={{ borderTop: '3px double var(--ink)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Selected Projects</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>

              {projects.map((proj, i) => (
                <div
                  key={proj.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '0.7fr 1.2fr 1.2fr',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--paper-dark)',
                    padding: '0.6rem 0',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700 }}>{proj.title}</span>
                  <span className="body-copy" style={{ fontSize: '11px', color: 'var(--muted)' }}>{proj.technologies.join(' · ')}</span>
                  <span className="body-copy" style={{ fontSize: '11px', color: 'var(--accent)' }}>{proj.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div style={{ paddingLeft: '1rem', paddingTop: '1.5rem' }} className="responsive-padding">
            {/* Education */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Education</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>

              {[
                {
                  degree: 'B.Tech Computer Engineering (Data Science)',
                  school: 'RAIT, Dr. D.Y. Patil University',
                  period: '2021 – 2025',
                  grade: 'CGPA: 9.46 / 10',
                },
                {
                  degree: 'HSC (Science)',
                  school: "St. Xavier's High School, Mumbai",
                  period: '2021',
                  grade: '84.83%',
                },
                {
                  degree: 'SSC',
                  school: 'IES Chandrakant Patkar Vidyalaya',
                  period: '2019',
                  grade: '84.60%',
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: i > 0 ? '1px solid var(--ink)' : 'none',
                    paddingTop: i > 0 ? '1rem' : 0,
                    paddingBottom: '1rem',
                  }}
                >
                  <h3 className="headline-sm" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h3>
                  <p className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {edu.school}
                  </p>
                  <p className="byline">{edu.period}</p>
                  {edu.grade && (
                    <p
                      className="font-mono"
                      style={{ fontSize: '12px', fontWeight: 700, marginTop: '0.25rem' }}
                    >
                      {edu.grade}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Awards</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>
              {achievements.map((a, i) => (
                <div
                  key={a.id}
                  style={{
                    borderTop: i > 0 ? '1px solid var(--ink)' : 'none',
                    padding: '0.75rem 0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span
                      style={{
                        background: i === 0 ? 'var(--accent)' : 'var(--ink)',
                        color: '#fff',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '9px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '2px 6px',
                      }}
                    >
                      {a.award}
                    </span>
                    <span className="byline">{a.date}</span>
                  </div>
                  <p className="font-mono" style={{ fontSize: '12px', fontWeight: 700, marginBottom: '0.1rem' }}>{a.event}</p>
                  <p className="body-copy" style={{ fontSize: '11px', color: 'var(--muted)' }}>{a.org}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Certifications</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '16px' }}>☁</span>
                </div>
                <div>
                  <a
                    href="https://cp.certmetrics.com/amazon/en/public/verify/credential/9db1d0200bb84d6a91bf695991a1ee89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    style={{ fontSize: '12px', fontWeight: 700, marginBottom: '0.1rem', display: 'block', textDecoration: 'none', color: 'var(--ink)' }}
                  >
                    AWS Certified Cloud Practitioner →
                  </a>
                  <p className="byline">Amazon Web Services</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Skills</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {skills.map((s) => (
                  <span key={s.id} className="tech-tag">{s.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
