import { Check, Zap, Layers } from 'lucide-react'

const steps = [
  { icon: Check, title: 'Brief approved', meta: 'Owner: Sara', status: 'Done', pill: 'bg-success text-white' },
  { icon: Zap, title: 'Assets sent to design', meta: 'Triggered automatically', status: 'Running', pill: 'bg-accent text-secondary' },
  { icon: Layers, title: 'Review and publish', meta: 'Waits for Bilal', status: 'Queued', pill: 'bg-surface-muted text-ink-soft' }
]

/** Built from the Figma HeroVisual frame (WorkflowCard inside a muted panel). Exposed to assistive tech as one labelled image. */
export default function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Illustration of a product launch checklist workflow: brief approved, assets sent to design is running, review and publish is queued, 68 percent complete."
      className="min-w-0 flex-1 rounded-lg bg-surface-muted p-4 md:p-6"
    >
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface px-4 py-6 shadow-card md:px-6">
        <div className="flex items-center justify-between gap-2">
          <p className="flex-1 text-h3 text-ink">Product launch checklist</p>
          <span className="rounded-full bg-primary px-2.5 py-1 text-eyebrow text-white">Live</span>
        </div>
        {steps.map(({ icon: Icon, title, meta, status, pill }) => (
          <div key={title} className="flex items-center gap-3 rounded-md bg-background px-3 py-3 md:px-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-primary">
              <Icon size={24} aria-hidden="true" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-label text-ink">{title}</p>
              <p className="text-body-sm text-ink-soft">{meta}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-eyebrow ${pill}`}>{status}</span>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-body-sm text-ink-soft">Progress</p>
            <p className="text-label text-ink">68%</p>
          </div>
          <div className="h-2 w-full rounded-full bg-surface-muted">
            <div className="h-2 rounded-full bg-primary" style={{ width: '68%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
