interface Props {
  children: React.ReactNode
  dot?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function SmallCapsLabel({ children, dot = false, className = '', style }: Props) {
  return (
    <span
      className={`small-caps ${className}`}
      style={{ color: '#8B7E75', display: 'inline-flex', alignItems: 'center', gap: '0.4em', ...style }}
    >
      {dot && (
        <span
          style={{
            display: 'inline-block',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: '#B8543D',
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  )
}
