export default function Logo({ theme = 'Light' }) {
  const dark = theme === 'Dark'
  return (
    <a
      href="#home"
      aria-label="Tidewell, back to top"
      className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus"
    >
      <span
        aria-hidden="true"
        className={`flex size-8 items-center justify-center rounded-sm ${dark ? 'bg-accent' : 'bg-primary'}`}
      >
        <span className={`size-3 rounded-full ${dark ? 'bg-secondary' : 'bg-accent'}`} />
      </span>
      <span className={`text-h3 ${dark ? 'text-white' : 'text-ink'}`}>Tidewell</span>
    </a>
  )
}
