import Link from 'next/link'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuldeep-garg/' },
  { label: 'GitHub', href: 'https://github.com/Kuldeepkdg' },
  { label: 'Twitter/X', href: '#' },
  { label: 'Instagram', href: 'https://www.instagram.com/_kd.garg_/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@kuldeep_garg' },
]

export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid #D4CCC6', marginTop: 'auto' }}
      className="py-8 mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.69rem', color: '#8B7E75', letterSpacing: '0.06em' }}>
          © Kuldeep Garg · 2026 · Composed in Fraunces &amp; Inter
        </span>
        <div className="flex items-center gap-5 flex-wrap">
          {socials.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.69rem', color: '#8B7E75', letterSpacing: '0.06em', textDecoration: 'none' }}
              className="hover:text-[#1A1613] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
