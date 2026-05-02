'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* ── HEADER ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem 0' }} className="responsive-padding">
        <div style={{ paddingTop: '1.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>
            Editorial Desk — Contact
          </p>
          <h1 className="headline-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '0.5rem' }}>
            Send a
            <br />
            <span style={{ color: 'var(--accent)' }}>Dispatch</span>
          </h1>
          <p className="standfirst">
            Collaborate, hire, or just say hello — the editorial desk is always open.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 3rem' }} className="responsive-padding">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: 0,
            borderTop: '3px double var(--ink)',
            marginTop: '1.5rem',
          }}
          className="responsive-grid-2"
        >
          {/* ── FORM ── */}
          <div style={{ paddingRight: '1rem', borderRight: '1px solid var(--ink)', paddingTop: '1.5rem' }} className="responsive-padding responsive-no-border-right">
            <p className="byline" style={{ marginBottom: '1.5rem' }}>
              All dispatches reviewed within 24 hours · Mumbai Standard Time
            </p>

            {sent && (
              <div
                style={{
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  padding: '1rem 1.5rem',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid var(--accent)',
                }}
              >
                <p className="font-mono" style={{ fontSize: '12px', fontWeight: 700 }}>
                  ✓ Dispatch Received — Thank you for reaching out.
                </p>
              </div>
            )}

            {error && (
              <div
                style={{
                  background: '#fee2e2',
                  color: '#991b1b',
                  padding: '1rem 1.5rem',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid #dc2626',
                }}
              >
                <p className="font-mono" style={{ fontSize: '12px', fontWeight: 700 }}>
                  ✗ Error — {error}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    className="section-tag"
                    style={{ display: 'block', marginBottom: '0.4rem' }}
                  >
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      border: '1px solid var(--ink)',
                      background: 'transparent',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '12px',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      border: '1px solid var(--ink)',
                      background: 'transparent',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '12px',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    border: '1px solid var(--ink)',
                    background: 'var(--paper)',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '12px',
                    color: 'var(--ink)',
                    outline: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select a subject...</option>
                  <option value="hiring">Hiring / Job Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  rows={7}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    border: '1px solid var(--ink)',
                    background: 'transparent',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '12px',
                    color: 'var(--ink)',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }}
                />
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email || !form.message || loading}
                  className="btn-ink"
                  style={{
                    cursor: form.name && form.email && form.message && !loading ? 'pointer' : 'not-allowed',
                    opacity: form.name && form.email && form.message && !loading ? 1 : 0.5,
                    border: 'none',
                    fontSize: '12px',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Dispatch →'}
                </button>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ paddingLeft: '1rem', paddingTop: '1.5rem' }} className="responsive-padding">
            {/* Direct contact */}
            <div style={{ marginBottom: '2rem' }}>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>
                Direct Lines
              </p>
              {[
                {
                  label: 'Email',
                  value: 'mihireshsjoshi@gmail.com',
                  href: 'mailto:mihireshsjoshi@gmail.com',
                },
                {
                  label: 'GitHub',
                  value: 'github.com/mihireshjoshi',
                  href: 'https://github.com/mihireshjoshi',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/mihiresh-joshi',
                  href: 'https://www.linkedin.com/in/mihiresh-joshi-651423207/',
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--ink)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  <span className="section-tag" style={{ display: 'block', marginBottom: '0.2rem' }}>
                    {contact.label}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '11px', color: 'var(--muted)' }}
                  >
                    {contact.value} →
                  </span>
                </a>
              ))}
            </div>

            {/* Availability banner */}
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p className="section-tag" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                Availability
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <span className="font-mono" style={{ fontSize: '11px', color: '#22c55e', fontWeight: 700 }}>
                  Open to Opportunities
                </span>
              </div>
              <p className="body-copy" style={{ fontSize: '11px', color: '#aaa', lineHeight: 1.6 }}>
                Currently SDE-1 at JPMorgan Chase. Open to full-time roles,
                freelance projects, and meaningful collaborations post-graduation (2025).
              </p>
            </div>

            {/* Location */}
            <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1rem' }}>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Location</p>
              <p className="font-mono" style={{ fontSize: '12px', lineHeight: 1.8 }}>
                Mumbai, Maharashtra
                <br />
                India — IST (UTC+5:30)
                <br />
                <span style={{ color: 'var(--muted)', fontSize: '11px' }}>
                  Response time: &lt; 24 hours
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input::placeholder, textarea::placeholder {
          color: var(--muted);
        }
        input:focus, textarea:focus, select:focus {
          border-color: var(--accent) !important;
        }
      `}</style>
    </div>
  )
}
