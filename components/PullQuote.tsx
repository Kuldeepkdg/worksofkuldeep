interface Props {
  children: React.ReactNode
  attribution?: string
}

export default function PullQuote({ children, attribution }: Props) {
  return (
    <blockquote className="pull-quote">
      {children}
      {attribution && (
        <footer
          style={{
            marginTop: '0.75rem',
            fontSize: '0.8rem',
            fontStyle: 'normal',
            color: '#8B7E75',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.03em',
          }}
        >
          — {attribution}
        </footer>
      )}
    </blockquote>
  )
}
