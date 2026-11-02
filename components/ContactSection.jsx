import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

const details = [
  { icon: Mail, text: 'hello@tidewell.example', href: 'mailto:hello@tidewell.example', label: 'Email' },
  { icon: Phone, text: '+92 42 111 000 000', href: 'tel:+9242111000000', label: 'Phone' },
  { icon: MapPin, text: 'Gulberg III, Lahore, Pakistan', label: 'Address' }
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grid gap-12 bg-surface-muted px-6 py-12 md:px-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-24 lg:py-24"
    >
      <div className="flex min-w-0 flex-col gap-4 md:gap-6">
        <p className="text-eyebrow uppercase text-primary">Contact</p>
        <h2 id="contact-heading" className="text-h2-sm text-ink md:text-h2">Talk to our team</h2>
        <p className="text-body-lg text-ink-soft">
          Tell us about the workflow you want to automate. We reply within one working day.
        </p>
        <ul className="flex flex-col gap-4">
          {details.map(({ icon: Icon, text, href, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-surface text-primary">
                <Icon size={24} aria-hidden="true" />
              </span>
              {href ? (
                <a
                  href={href}
                  aria-label={`${label}: ${text}`}
                  className="rounded-sm text-body-md text-ink hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  {text}
                </a>
              ) : (
                <address className="text-body-md not-italic text-ink">{text}</address>
              )}
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </section>
  )
}
