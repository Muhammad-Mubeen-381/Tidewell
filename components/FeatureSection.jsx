import { Layers, Zap, Users, Shield } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  { icon: Layers, title: 'Visual workflow builder', description: 'Drag steps into place and see every handoff before it goes live.' },
  { icon: Zap, title: 'Smart triggers', description: 'Start work from form submissions, emails or deadlines with no code.' },
  { icon: Users, title: 'Clear team handoffs', description: 'Assign owners, due dates and reminders so nothing waits in an inbox.' },
  { icon: Shield, title: 'Secure by default', description: 'Role-based access and audit logs keep sensitive workflows under control.' }
]

export default function FeatureSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="flex flex-col items-center gap-8 px-6 py-12 md:gap-12 md:px-12 md:py-16 lg:px-24 lg:py-24"
    >
      <div className="flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
        <p className="text-eyebrow uppercase text-primary">Why Tidewell</p>
        <h2 id="features-heading" className="text-h2-sm text-ink md:text-h2">
          Everything your team needs to move faster
        </h2>
        <p className="text-body-lg text-ink-soft">
          Build once, share with everyone, and let the routine parts run on their own.
        </p>
      </div>
      <ul className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </ul>
    </section>
  )
}
