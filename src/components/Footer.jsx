import Logo from './Logo'

const columns = [
  { title: 'Explore', links: [['Overview', '#home'], ['Features', '#features'], ['Results', '#results']] },
  { title: 'Get in touch', links: [['Send a message', '#contact'], ['Email us', 'mailto:hello@tidewell.example'], ['Call us', 'tel:+9242111000000']] },
  { title: 'Follow', links: [['LinkedIn', 'https://www.linkedin.com', true], ['GitHub', 'https://github.com', true], ['X (Twitter)', 'https://x.com', true]] }
]

const linkClass =
  'rounded-sm text-body-md text-white/85 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-secondary px-6 pb-8 pt-16 md:gap-12 md:px-12 lg:px-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex max-w-[360px] flex-col gap-4">
          <Logo theme="Dark" />
          <p className="text-body-md text-white/80">
            Simple workflow automation for teams that would rather ship than chase updates.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12 lg:justify-start lg:gap-16">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h2 className="text-label text-accent">{col.title}</h2>
              <ul className="flex flex-col gap-3">
                {col.links.map(([label, href, external]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={linkClass}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {label}
                      {external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <hr className="h-px border-0 bg-ink-soft/40" />
      <div className="flex flex-col gap-3 text-body-sm text-white md:flex-row md:items-center md:justify-between">
        <p className="text-white/70">© 2026 Tidewell Technologies. All rights reserved.</p>
        <ul className="flex gap-6">
          <li><a href="#home" className={`${linkClass} text-body-sm`}>Back to top</a></li>
          <li><a href="#contact" className={`${linkClass} text-body-sm`}>Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}
