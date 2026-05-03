import Link from 'next/link'
import { headers } from 'next/headers'

interface Skill {
  id: string
  name: string
  type: string
  expertiseLevel: number
  displayOrder: number
}

const TIMELINE = [
  {
    year: '2024 – Present',
    role: 'SDE Intern',
    org: 'JPMorgan Chase & Co.',
    type: 'Industry',
    desc: 'Backend development with Java, SpringBoot, AWS. CI/CD pipelines via Jenkins and Spinnaker. Enterprise-scale financial systems.',
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    org: 'Caldeira Estate (Green Mango)',
    type: 'Freelance',
    desc: 'Built a production Next.js 15 + Supabase platform for a US client — full end-to-end delivery.',
  },
  {
    year: '2024',
    role: 'ML Engineer / Frontend Dev',
    org: 'CSI RAIT — Code for Good',
    type: 'Society',
    desc: 'Led ML and frontend development for community tech projects under the Computer Society of India at RAIT.',
  },
  {
    year: '2021 – 2025',
    role: 'B.Tech Computer Engineering (Data Science)',
    org: 'RAIT, Dr. D.Y. Patil University, Mumbai',
    type: 'Education',
    desc: 'CGPA: 9.46 / 10. Focused on AI/ML, cloud computing, and full-stack systems. Active hackathon competitor.',
  },
]

export default async function AboutPage() {
  console.log('[PAGE] About page rendering...')
  const headersList = await headers()
  const host = headersList.get('x-forwarded-host') ?? headersList.get('host')
  const proto = headersList.get('x-forwarded-proto') ?? 'http'
  const baseUrl = host ? `${proto}://${host}` : process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  console.log('[PAGE] Base URL:', baseUrl)

  console.log('[PAGE] Fetching skills...')
  const skillsRes = await fetch(new URL('/api/skills', baseUrl), { cache: 'no-store' })
  const allSkills: Skill[] = skillsRes.ok ? await skillsRes.json() : []

  console.log('[PAGE] Fetched skills:', allSkills?.length || 0)

  if (!skillsRes.ok) {
    console.error('[PAGE] Failed to load skills:', skillsRes.status, await skillsRes.text())
  }

  // Group skills by type with friendly names
  const typeLabels: Record<string, string> = {
    backend: 'Backend',
    frontend: 'Frontend',
    ml: 'AI / ML',
    devops: 'Cloud & DevOps',
    tools: 'Tools & Design',
  }

  const skillsByType = allSkills.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = []
    }
    acc[skill.type].push(skill)
    return acc
  }, {})

  const skillsGroups = Object.entries(skillsByType).map(([type, skills]) => ({
    category: typeLabels[type] || type,
    items: skills.map(s => s.name),
  }))

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── PAGE HEADER ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 1rem 0',
        }}
        className="responsive-padding"
      >
        <div style={{ paddingTop: '1.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>
            Profile
          </p>
          <h1 className="headline-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', marginBottom: '0.5rem' }}>
            The Man
            <br />
            <span style={{ color: 'var(--accent)' }}>Behind the Code</span>
          </h1>
          <p className="standfirst" style={{ maxWidth: '600px' }}>
            An intimate profile of Mihiresh Joshi — engineer, innovator, and relentless
            builder of things that actually matter.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }} className="responsive-padding">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 0,
            borderTop: '1px solid var(--ink)',
          }}
          className="responsive-grid-2"
        >
          {/* ── LEFT: BIO COLUMNS ── */}
          <div style={{ paddingRight: '1rem', borderRight: '1px solid var(--ink)', paddingBottom: '1rem' }} className="responsive-padding about-left-column">
            <p className="byline" style={{ padding: '1rem 0', borderBottom: '1px solid var(--ink)' }}>
              Reporter: The Portfolio Chronicle · Mumbai
            </p>

            <div
              style={{
                columns: 2,
                columnGap: '2rem',
                columnRule: '1px solid var(--ink)',
                padding: '1.5rem 0',
              }}
              className="about-columns"
            >
              <p className="body-copy dropcap" style={{ marginBottom: '1rem' }}>
                Mihiresh Joshi does not fit neatly into a single category. He is a
                backend engineer at one of the world's largest financial institutions
                in the morning, an AI researcher in the afternoon, and a hackathon
                strategist on weekends. His CV reads like a case study in deliberate
                breadth — Java, Python, React, TensorFlow, AWS — but beneath the
                technology stack lies a singular obsession: making software that
                solves real problems for real people.
              </p>
              <p className="body-copy" style={{ marginBottom: '1rem' }}>
                Born and raised in Mumbai, Mihiresh enrolled in the B.Tech Computer
                Engineering (Data Science) programme at RAIT — Dr. D.Y. Patil
                University — in 2021. By his third year he had already led three
                national-level hackathon teams, won Kongsberg Maritime's Techathon
                Kode Konquerors, reached the finals of TIAA Retire-Thon and
                Bhashini Sprint, and picked up an AWS Cloud Practitioner
                certification along the way.
              </p>
              <p className="body-copy" style={{ marginBottom: '1rem' }}>
                His internship at JPMorgan Chase & Co. placed him in the engine
                room of enterprise software — working with Spring Boot microservices,
                Jenkins CI/CD pipelines, and Spinnaker deployments at a scale most
                developers never encounter in their first job, let alone their first
                internship.
              </p>
              <p className="body-copy">
                Outside of structured roles, Mihiresh freelanced for a US client
                on a Next.js 15 + Supabase platform, led development on Hisaab-Book
                — an Indic-language inventory management system for small businesses —
                and built FinVerse, a fintech community app, entirely from concept to
                deployment. He is, in a phrase, relentlessly productive.
              </p>
            </div>

            {/* Pull quote */}
            <div
              style={{
                borderTop: '3px double var(--ink)',
                borderBottom: '3px double var(--ink)',
                padding: '1.5rem 0',
                margin: '1rem 0',
              }}
            >
              <p className="pull-quote">
                "The best products don't announce themselves — they quietly become
                indispensable."
              </p>
            </div>

            <div
              style={{
                columns: 2,
                columnGap: '2rem',
                columnRule: '1px solid var(--ink)',
                padding: '1rem 0',
              }}
              className="about-columns"
            >
              <p className="body-copy" style={{ marginBottom: '1rem' }}>
                His design sensibility is equally sharp. Mihiresh approaches UI with
                the same analytical rigour he brings to systems architecture —
                studying editorial design, experimenting with typography, and
                iterating away from anything that feels "off-the-shelf". This
                portfolio itself is a testament to that instinct.
              </p>
              <p className="body-copy">
                When not shipping code, he can be found thinking through investment
                strategies, tracking his SIP portfolio, or brainstorming the next
                product idea in the margins of his notebook. A CGPA of 9.46 out of
                10 suggests he does all of this while keeping his academic record
                immaculate.
              </p>
            </div>
          </div>

          {/* ── RIGHT: SIDEBAR ── */}
          <div style={{ paddingLeft: '1rem', paddingTop: '1rem' }} className="responsive-padding about-right-sidebar">
            {/* Fact File */}
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p className="section-tag" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                Fact File
              </p>
              {[
                ['Name', 'Mihiresh Joshi'],
                ['Based In', 'Mumbai, India'],
                ['Current Role', 'SDE Intern, JPMorgan'],
                ['Degree', 'B.Tech CE (DS)'],
                ['University', 'RAIT, Mumbai'],
                ['CGPA', '9.46 / 10'],
                ['Certification', 'AWS Cloud Practitioner'],
                ['Hackathons Won', '1st Place (Kode Konquerors)'],
                ['GitHub', 'mihireshjoshi'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    borderBottom: '1px solid #222',
                    padding: '0.35rem 0',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                  }}
                >
                  <dt style={{ color: '#888', minWidth: '95px', flexShrink: 0 }}>{k}</dt>
                  <dd style={{ color: '#ddd', margin: 0 }}>{v}</dd>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>
                Off the Record
              </p>
              {[
                'Hackathon strategist',
                'Personal finance & SIP investing',
                'Editorial UI/UX design',
                'Exploring cutting-edge ML research',
                'Building side projects for fun',
              ].map((h) => (
                <div
                  key={h}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid var(--paper-dark)',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>■</span>
                  {h}
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-ink" style={{ display: 'block', textAlign: 'center' }}>
              Interview Request →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section
        style={{
          background: 'var(--paper-dark)',
          borderTop: '3px solid var(--ink)',
          borderBottom: '3px solid var(--ink)',
          padding: '2.5rem 1rem',
        }}
        className="responsive-padding"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="section-tag">Technical Competencies</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
            }}
            className="responsive-grid-3"
          >
            {skillsGroups.map((group, i) => (
              <div
                key={group.category}
                style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--ink)',
                  borderRight: '1px solid var(--ink)',
                }}
                className="skills-grid-item"
              >
                <p className="section-tag" style={{ marginBottom: '0.75rem' }}>{group.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1rem' }} className="responsive-padding">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span className="section-tag">Career Timeline</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
        </div>
        <div>
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: '2rem',
                borderTop: '1px solid var(--ink)',
                padding: '1.25rem 0',
              }}
              className="timeline-item"
            >
              <div className="timeline-year">
                <span className="byline" style={{ display: 'block', marginBottom: '0.25rem' }}>
                  {item.year}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    background: item.type === 'Industry' ? 'var(--accent)' : 'var(--ink)',
                    color: 'var(--paper)',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                  }}
                >
                  {item.type}
                </span>
              </div>
              <div>
                <h3 className="headline-sm" style={{ marginBottom: '0.25rem' }}>{item.role}</h3>
                <p
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.06em' }}
                >
                  {item.org}
                </p>
                <p className="body-copy">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
