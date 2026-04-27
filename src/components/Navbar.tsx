'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Front Page' },
  { href: '/about', label: 'Profile' },
  { href: '/projects', label: 'Portfolio' },
  { href: '/resume', label: 'Résumé' },
  { href: '/contact', label: 'Contact' },
]

const TICKER_ITEMS = [
  'AWS Certified Cloud Practitioner',
  'JPMorgan Chase & Co. SDE Intern',
  'Winner — Techathon Kode Konquerors 2024',
  'Finalist — Bhashini Sprint (National Level)',
  'B.Tech Computer Engineering (Data Science) · CGPA 9.46',
  'Full Stack · AI/ML · Cloud · React · Next.js · SpringBoot',
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const tickerText = TICKER_ITEMS.join('   ·   ') + '   ·   ' + TICKER_ITEMS.join('   ·   ')

  return (
    <header>
      {/* ── TOP STRIP ── */}
      <div
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '6px 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="masthead-date" style={{ color: '#ccc' }}>
          {today}
        </span>
        <span className="masthead-date" style={{ color: '#ccc' }}>
          Mumbai, India · Vol. 1, Issue 1
        </span>
      </div>

      {/* ── TICKER ── */}
      <div
        style={{
          background: 'var(--accent)',
          color: 'var(--paper)',
          padding: '5px 0',
          overflow: 'hidden',
        }}
      >
        <div className="ticker-wrap">
          <div className="ticker-inner">
            <span
              className="font-mono"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff' }}
            >
              {tickerText}
            </span>
          </div>
        </div>
      </div>

      {/* ── MASTHEAD ── */}
      <div
        className="rule-top-thick rule-bottom"
        style={{
          padding: '1.5rem 2rem',
          textAlign: 'center',
          background: 'var(--paper)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '0.5rem',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <p className="masthead-date">Est. 2021</p>
            <p className="font-serif" style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--muted)' }}>
              "Building things that matter"
            </p>
          </div>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1
              className="headline-xl"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
              }}
            >
              Software
              <br />
              <span style={{ color: 'var(--accent)' }}>Developer</span>
            </h1>
          </Link>

          <div style={{ textAlign: 'right' }}>
            <p className="masthead-date">Mihiresh Joshi</p>
            <p className="font-serif" style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--muted)' }}>
              Engineer & Innovator
            </p>
          </div>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      <nav
        style={{
          borderBottom: '3px solid var(--ink)',
          background: 'var(--paper)',
          padding: '0 2rem',
        }}
      >
        {/* Desktop */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: '0.6rem 0',
            gap: '2rem',
            justifyContent: 'center',
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.6rem 0',
          }}
          className="mobile-nav"
        >
          <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700 }}>
            THE CHRONICLE
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {menuOpen ? 'CLOSE ×' : 'MENU ≡'}
          </button>
        </div>

        {menuOpen && (
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '0.5rem 0 1rem',
              borderTop: '1px solid var(--ink)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href} style={{ padding: '0.4rem 0' }}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <style>{`
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
