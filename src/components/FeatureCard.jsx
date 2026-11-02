export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <li className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition hover:border-primary hover:shadow-card">
      <span className="flex size-12 items-center justify-center rounded-md bg-surface-muted text-primary">
        <Icon size={24} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-h3 text-ink">{title}</h3>
        <p className="text-body-md text-ink-soft">{description}</p>
      </div>
    </li>
  )
}
