export default function ResumePage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── HEADER ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 0' }}>
        <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.5rem', marginBottom: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '0.5rem' }}>Résumé — Curriculum Vitae</p>
              <h1 className="headline-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                Mihiresh Joshi
              </h1>
              <p className="standfirst">
                Software Engineer · AI/ML Enthusiast · Full Stack Developer
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Mihiresh_Joshi_Resume.pdf"
              className="btn-ink"
              style={{ alignSelf: 'flex-end' }}
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 0,
            borderTop: '3px double var(--ink)',
            marginTop: '1.5rem',
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ paddingRight: '2rem', borderRight: '1px solid var(--ink)' }}>

            {/* EXPERIENCE */}
            <div style={{ paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="section-tag">Experience</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--ink)' }} />
              </div>

              {[
                {
                  role: 'Software Development Engineer Intern',
                  org: 'JPMorgan Chase & Co.',
                  period: '2024 – Present',
                  type: 'Industry',
                  bullets: [
                    'Backend development with Java and SpringBoot on enterprise financial systems',
                    'CI/CD pipeline management via Jenkins and Spinnaker on AWS infrastructure',
                    'Collaborated with cross-functional teams on production-grade microservices',
                  ],
                },
                {
                  role: 'Full Stack Developer',
                  org: 'Caldeira Estate, Green Mango (US Client)',
                  period: '2024',
                  type: 'Freelance',
                  bullets: [
                    'Built complete platform with Next.js 15 and Supabase for a US hospitality client',
                    'End-to-end delivery: architecture, UI/UX, backend APIs, and deployment',
                  ],
                },
                {
                  role: 'ML Engineer / Front-End Developer',
                  org: 'Computer Society of India, RAIT',
                  period: '2023 – 2024',
                  type: 'Society',
                  bullets: [
                    'Led ML and frontend development for CSI community tech projects',
                    'Mentored junior members on React Native and Python ML workflows',
                  ],
                },
              ].map((exp, i) => (
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
                        background: exp.type === 'Industry' ? 'var(--accent)' : 'var(--ink)',
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

              {[
                { name: 'Hisaab-Book', tech: 'React Native · FastAPI · ML', note: 'National Finalist — Bhashini Sprint' },
                { name: 'FutureFund', tech: 'Next.js · FastAPI · TensorFlow', note: 'National Finalist — TIAA Retire-Thon' },
                { name: 'SafeGuard', tech: 'CNN · YOLO · Twilio · Supabase', note: 'Workplace safety AI' },
                { name: 'AQI Nexus', tech: 'React Native · FastAPI · Python ML', note: 'Air quality forecasting' },
                { name: 'FinVerse', tech: 'React Native · Supabase', note: 'Fintech networking platform' },
                { name: 'Cartsy', tech: 'React Native · Supabase · Stripe', note: 'A* retail navigation app' },
              ].map((proj, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--paper-dark)',
                    padding: '0.6rem 0',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700 }}>{proj.name}</span>
                  <span className="body-copy" style={{ fontSize: '11px', color: 'var(--muted)' }}>{proj.tech}</span>
                  <span className="body-copy" style={{ fontSize: '11px', color: 'var(--accent)' }}>{proj.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div style={{ paddingLeft: '2rem', paddingTop: '1.5rem' }}>
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
                  grade: '',
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
              {[
                { award: '1st Place', event: 'Techathon Kode Konquerors', org: 'Kongsberg Maritime', date: 'Sept 2024' },
                { award: 'National Finalist', event: 'TIAA Retire-Thon', org: 'TIAA', date: 'June 2024' },
                { award: 'National Finalist', event: 'Bhashini Sprint', org: 'Govt. of India', date: 'May 2024' },
              ].map((a, i) => (
                <div
                  key={i}
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
                  <p className="font-mono" style={{ fontSize: '12px', fontWeight: 700, marginBottom: '0.1rem' }}>
                    AWS Certified Cloud Practitioner
                  </p>
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
                {[
                  'Java', 'SpringBoot', 'Python', 'TypeScript',
                  'React', 'Next.js', 'React Native', 'FastAPI',
                  'TensorFlow', 'AWS', 'Jenkins', 'Spinnaker',
                  'Supabase', 'PostgreSQL', 'Figma', 'Git',
                ].map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
