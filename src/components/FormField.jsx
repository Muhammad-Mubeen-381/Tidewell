/** Labelled input/textarea matching the Figma FormInput component (Default / Focus / Error states). */
export default function FormField({ id, label, error, multiline = false, ...props }) {
  const errorId = `${id}-error`
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label text-ink">{label}</label>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        className={
          'w-full rounded-md border-[1.5px] bg-surface px-4 py-3 text-body-md text-ink placeholder:text-ink-soft ' +
          'focus:border-focus focus:outline-none focus:ring-1 focus:ring-focus ' +
          (multiline ? 'h-32 resize-y ' : '') +
          (error ? 'border-error' : 'border-border')
        }
        {...props}
      />
      {error && (
        <p id={errorId} className="text-body-sm text-error">{error}</p>
      )}
    </div>
  )
}
