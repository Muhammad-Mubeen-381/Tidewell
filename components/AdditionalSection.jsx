const stats = [
  { value: '62%', label: 'fewer manual handoffs' },
  { value: '4.8/5', label: 'average rating from teams' },
  { value: '1,200+', label: 'teams automating weekly' }
]

export default function AdditionalSection() {
  return (
    <section id="results" aria-labelledby="results-heading" className="px-6 pb-12 md:px-12 md:pb-16 lg:px-24 lg:pb-24">
      <div className="flex flex-col gap-8 rounded-lg bg-secondary px-6 py-8 md:gap-12 md:px-8 md:py-12 lg:p-16">
        <h2 id="results-heading" className="text-h2-sm text-white md:text-h2">
          Teams ship 3x faster with Tidewell
        </h2>
        <dl className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 border-t-2 border-accent pt-4">
              <dt className="text-body-md text-white/85">{s.label}</dt>
              <dd className="text-h2-sm text-accent md:text-h2">{s.value}</dd>
            </div>
          ))}
        </dl>
        <figure className="flex flex-col gap-4 rounded-md bg-surface p-6">
          <blockquote className="text-body-lg text-ink">
            Tidewell replaced three spreadsheets and a lot of reminder messages. Our launch checklist now runs itself.
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-primary text-label text-white"
            >
              HM
            </span>
            <span className="flex flex-col">
              <span className="text-label text-ink">Hira Malik</span>
              <span className="text-body-sm text-ink-soft">Operations Lead, Lahore Digital Co.</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
