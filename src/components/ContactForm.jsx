import { useState } from 'react'
import { Check } from 'lucide-react'
import Button from './Button'
import FormField from './FormField'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email, like you@company.com.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters so we can help.'
  return errors
}

/**
 * Client-side demonstration form: there is no backend in this lab project, so a valid submission is
 * validated and acknowledged on screen but not transmitted anywhere. Swap `handleSubmit` for a real
 * endpoint (Formspree, Netlify Forms, your API) when deploying for production.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 600)
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-lg border border-border bg-surface p-6 md:p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-success text-white">
          <Check size={24} aria-hidden="true" />
        </span>
        <h3 className="text-h3 text-ink">Thanks, {values.name.trim().split(' ')[0]}.</h3>
        <p className="text-body-md text-ink-soft">
          Your message passed validation. This is a demo form, so nothing was sent. In production it would be posted
          to a form service and we would reply to {values.email.trim()} within one working day.
        </p>
        <Button
          variant="secondary"
          type="button"
          onClick={() => { setValues({ name: '', email: '', message: '' }); setStatus('idle') }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-6 md:p-8"
    >
      <FormField id="name" label="Name" type="text" autoComplete="name" placeholder="Your full name"
        value={values.name} onChange={onChange} error={errors.name} />
      <FormField id="email" label="Email" type="email" autoComplete="email" placeholder="you@company.com"
        value={values.email} onChange={onChange} error={errors.email} />
      <FormField id="message" label="Message" multiline placeholder="How can we help?"
        value={values.message} onChange={onChange} error={errors.message} />
      <Button type="submit" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
      <p className="text-body-sm text-ink-soft">Demo form: submissions are validated in your browser and are not sent.</p>
    </form>
  )
}
