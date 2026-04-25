'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#F0EBE4',
    border: '1px solid #D4CCC6',
    padding: '0.65rem 0.85rem',
    fontSize: '0.9375rem',
    color: '#1A1613',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    lineHeight: 1.5,
    borderRadius: 0,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    letterSpacing: '0.08em',
    color: '#8B7E75',
    marginBottom: '0.4rem',
    fontVariantCaps: 'small-caps',
  }

  if (status === 'sent') {
    return (
      <div style={{ paddingTop: '1rem' }}>
        <p style={{ fontSize: '0.9375rem', color: '#1A1613', lineHeight: 1.7 }}>
          Message received. I'll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '520px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              backgroundColor: '#B8543D',
              color: '#FAF7F2',
              border: 'none',
              padding: '0.7rem 1.75rem',
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              fontFamily: 'var(--font-sans)',
              borderRadius: 0,
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </div>

        {status === 'error' && (
          <p style={{ fontSize: '0.875rem', color: '#B8543D' }}>
            Something went wrong. Try emailing me directly.
          </p>
        )}
      </div>
    </form>
  )
}
