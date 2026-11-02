const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-button transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus ' +
  'disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover disabled:bg-border disabled:text-ink-soft',
  secondary:
    'border-[1.5px] border-border bg-surface text-ink hover:border-primary hover:bg-surface-muted ' +
    'disabled:bg-background disabled:text-ink-soft'
}

/** Renders a link when `href` is given, otherwise a native button. Variants match the Figma Button component set. */
export default function Button({ variant = 'primary', href, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
