export default function ResumePage() {
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

              {[
                {
                  role: 'Software Development Engineer 1',
                  org: 'JPMorgan Chase & Co.',
                  period: 'July 2025 – Present',
                  type: 'Full-Time',
                  bullets: [
                    'Engineered and owned backend micro-services for large-scale cloud data migration using Java and SpringBoot.',
                    'Maintained and extended CI/CD pipelines via Jenkins and Spinnaker across multiple deployment environments.',
                    'Managed cloud infrastructure through IaaC, ensuring reproducible and auditable environment provisioning on AWS.',
                    'Optimised data movement workflows, reducing pipeline runtimes from days to hours through targeted automation.',
                    'Collaborated cross-functionally with platform and DevOps teams on production deployments and incident resolution.',
                  ],
                },
                {
                  role: 'Software Development Engineer Intern',
                  org: 'JPMorgan Chase & Co.',
                  period: 'Jan – Jun 2025',
                  type: 'Internship',
                  bullets: [
                    'Developed efficient micro-service for migration of data from external cloud to internal cloud using Java and SpringBoot.',
                    'Used Jenkins and Spinnaker as pipeline for CI/CD.',
                    'Controlled cloud elements with IaaC (Infra as a Code); service deployed on AWS.',
                    'Enhanced long-running data movement pipelines from days to hours by automating key steps.',
                    'Participated in InnovationWeek – Expo & Hackathon.',
                  ],
                },
                {
                  role: 'Full Stack Developer',
                  org: 'Caldeira Estate, Green Mango (US Client)',
                  period: 'Sept – Oct 2024',
                  type: 'Freelance',
                  bullets: [
                    'Built a complete hospitality platform with Next.js 15 and Supabase for a US client.',
                    'Implemented stay booking, product purchases, newsletter sign-ups, and contact flows end-to-end.',
                    'Deployed on Vercel with full architecture, UI/UX, and backend API ownership.',
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
