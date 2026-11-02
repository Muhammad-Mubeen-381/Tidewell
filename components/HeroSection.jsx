import Button from './Button'
import HeroVisual from './HeroVisual'

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="flex flex-col gap-12 px-6 py-12 md:px-12 md:py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-24 lg:py-24"
    >
      <div className="flex min-w-0 flex-1 flex-col items-start gap-4 md:gap-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-3 py-1.5 text-label text-ink">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          New: workflow templates 2.0
        </p>
        <h1 id="hero-heading" className="w-full text-display-md text-ink md:text-display-lg lg:text-display-xl">
          Automate the busywork. Keep your team in flow.
        </h1>
        <p className="w-full text-body-lg text-ink-soft">
          Tidewell turns repeat tasks, approvals and handoffs into simple workflows your whole team can see, so
          launches stop waiting on reminders.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href="#contact">Start free trial</Button>
          <Button href="#features" variant="secondary">See how it works</Button>
        </div>
        <p className="w-full text-body-sm text-ink-soft">Trusted by 1,200+ teams automating work every week</p>
      </div>
      <HeroVisual />
    </section>
  )
}
