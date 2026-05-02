import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        marginTop: '4rem',
      }}
    >
      {/* ── TOP RULE ── */}
      <div style={{ borderTop: '6px solid var(--accent)' }} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 1rem 1rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '2rem',
        }}
        className="responsive-padding responsive-grid-3"
      >
        {/* Brand */}
        <div>
          <h2
            className="font-display"
            style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              lineHeight: 0.9,
              marginBottom: '1rem',
              color: 'var(--paper)',
            }}
          >
            Software
            <br />
            <span style={{ color: 'var(--accent)' }}>Developer</span>
          </h2>
          <p
            className="font-serif"
            style={{ fontStyle: 'italic', fontSize: '13px', color: '#aaa', lineHeight: 1.6 }}
          >
            A curated record of engineering, innovation,
            <br />
            and continuous learning.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/mihireshjoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ borderColor: '#555', color: '#ccc', fontSize: '10px' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mihiresh-joshi-651423207/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ borderColor: '#555', color: '#ccc', fontSize: '10px' }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            Sections
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { href: '/', label: 'Front Page' },
              { href: '/about', label: 'Profile' },
              { href: '/projects', label: 'Portfolio' },
              { href: '/resume', label: 'Résumé' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '0.4rem' }}>
                <Link
                  href={link.href}
                  style={{
                    color: '#aaa',
                    textDecoration: 'none',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            Contact
          </h3>
          <div
            className="font-mono"
            style={{ fontSize: '11px', color: '#aaa', lineHeight: 2 }}
          >
            <p>Mumbai, India</p>
            <p>RAIT, B.Tech CS (DS)</p>
            <p>CGPA: 9.46 / 10</p>
            <a
              href="mailto:mihiresh.noreply@gmail.com"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              mihiresh.noreply@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          borderTop: '1px solid #333',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
        className="responsive-padding responsive-grid-2"
      >
        <span className="font-mono responsive-text-sm" style={{ fontSize: '9px', color: '#666' }}>
          © {new Date().getFullYear()} Mihiresh Joshi. All Rights Reserved.
        </span>
        <span className="font-mono responsive-text-sm" style={{ fontSize: '9px', color: '#666' }}>
          Built with Next.js · TypeScript · Tailwind CSS
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  )
}
