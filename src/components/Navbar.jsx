import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const links = [
  { label: 'Overview', href: '#home', desktopOnly: true },
  { label: 'Features', href: '#features' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' }
]

const linkClass =
  'rounded-sm px-3 py-2 text-body-md text-ink hover:text-primary hover:underline ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="flex items-center justify-between px-6 py-3 md:px-12 md:py-4 lg:px-24">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href} className={l.desktopOnly ? 'hidden lg:block' : undefined}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#contact" className="hidden md:inline-flex">
          <span className="hidden lg:inline">Start free trial</span>
          <span className="lg:hidden">Try free</span>
        </Button>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-primary hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`block ${linkClass}`} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Start free trial
          </Button>
        </nav>
      )}
    </header>
  )
}
