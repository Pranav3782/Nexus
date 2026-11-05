import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { budgetOptions, services, site } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <span id={id} className="field-error" role="alert">
      {message}
    </span>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [sentMailto, setSentMailto] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name.'
    if (!values.email.trim()) next.email = 'Please add your email address.'
    else if (!emailPattern.test(values.email.trim())) next.email = 'That email address looks incomplete.'
    if (!values.service) next.service = 'Please choose the service you need.'
    if (!values.message.trim()) next.message = 'Tell us a little about the project.'
    return next
  }

  function handleSubmit(event) {
    event.preventDefault()
    const next = validate()
    setErrors(next)

    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      requestAnimationFrame(() => document.getElementById(`field-${first}`)?.focus())
      return
    }

    const subject = `New project enquiry — ${values.service}`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Service: ${values.service}`,
      `Budget: ${values.budget || 'Not provided'}`,
      '',
      'Project details:',
      values.message,
    ].join('\n')
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setStatus('sending')
    setSentMailto(mailto)
    window.setTimeout(() => {
      window.location.href = mailto
      setStatus('success')
    }, 650)
  }

  function resetForm() {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="contact" className="grain relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-dark opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_20%_10%,rgba(216,255,87,0.09),transparent_65%)]" />
      <div className="absolute -bottom-32 right-0 h-[460px] w-[460px] rounded-full bg-lime/[0.05] blur-[120px]" />

      <div className="container-x relative z-10 section-pad">
        <SectionHeading
          theme="dark"
          index="08"
          label="Contact"
          title={
            <>
              Have an idea?
              <br />
              Let&apos;s make it{' '}
              <span className="font-serif font-normal italic text-lime">inevitable.</span>
            </>
          }
          aside={
            <div className="lg:ml-auto lg:max-w-[300px]">
              <p className="text-[15px] leading-relaxed text-white/55">
                Tell us where you are headed and what is in the way. We will reply with a clear,
                honest next step.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-dot" />
                {site.availability}
              </p>
            </div>
          }
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="max-w-sm text-[14.5px] leading-[1.75] text-white/60">
                No forms lost in a void. Your brief goes directly to the people who will scope and
                shape the work.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 border-t border-white/10">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between gap-4 border-b border-white/10 py-5"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-colors group-hover:border-lime group-hover:text-lime">
                      <Mail size={15} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
                        Email
                      </span>
                      <span className="mt-1 block text-[14px] text-white/75 transition-colors group-hover:text-white">
                        {site.email}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight size={15} className="text-white/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </a>

                <a
                  href={`tel:${site.phoneHref}`}
                  className="group flex items-center justify-between gap-4 border-b border-white/10 py-5"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-colors group-hover:border-lime group-hover:text-lime">
                      <Phone size={15} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
                        Phone
                      </span>
                      <span className="mt-1 block text-[14px] text-white/75 transition-colors group-hover:text-white">
                        {site.phone}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight size={15} className="text-white/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </a>

                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 border-b border-white/10 py-5"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-colors group-hover:border-lime group-hover:text-lime">
                      <MessageCircle size={15} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
                        WhatsApp
                      </span>
                      <span className="mt-1 block text-[14px] text-white/75 transition-colors group-hover:text-white">
                        Message us directly
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight size={15} className="text-white/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/55">
                <span className="flex items-center gap-2">
                  <MapPin size={11} className="text-lime/70" />
                  {site.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={11} className="text-lime/70" />
                  Reply within 1 business day
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1} y={22}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
                    Project brief
                  </h3>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                    Secure · No spam
                  </span>
                </div>

                {status === 'success' ? (
                  <div className="flex min-h-[430px] flex-col items-center justify-center py-10 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-ink">
                      <Check size={28} strokeWidth={2.4} />
                    </span>
                    <h4 className="mt-7 font-display text-[24px] font-semibold tracking-[-0.03em] text-white">
                      Your brief is ready to send.
                    </h4>
                    <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/50">
                      Your email client should now be open with the details pre-filled. If it did
                      not open, you can send the brief directly to{' '}
                      <span className="text-white/75">{site.email}</span>.
                    </p>
                    <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                      <Button href={sentMailto} variant="primary" size="md">
                        Open email again
                      </Button>
                      <Button
                        type="button"
                        onClick={resetForm}
                        variant="outline-light"
                        size="md"
                        icon={false}
                      >
                        Send another brief
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="mt-7" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="field-name" className="field-label">
                          Name <span className="text-lime">*</span>
                        </label>
                        <input
                          id="field-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={
                            errors.name
                              ? 'field border-[#FF8A75]/70 focus:border-[#FF8A75]'
                              : 'field'
                          }
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'error-name' : undefined}
                          aria-required="true"
                        />
                        <FieldError id="error-name" message={errors.name} />
                      </div>

                      <div>
                        <label htmlFor="field-email" className="field-label">
                          Email <span className="text-lime">*</span>
                        </label>
                        <input
                          id="field-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={
                            errors.email
                              ? 'field border-[#FF8A75]/70 focus:border-[#FF8A75]'
                              : 'field'
                          }
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'error-email' : undefined}
                          aria-required="true"
                        />
                        <FieldError id="error-email" message={errors.email} />
                      </div>

                      <div>
                        <label htmlFor="field-phone" className="field-label">
                          Phone <span className="text-white/55">(optional)</span>
                        </label>
                        <input
                          id="field-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 (000) 000-0000"
                          className="field"
                        />
                      </div>

                      <div>
                        <label htmlFor="field-service" className="field-label">
                          Service required <span className="text-lime">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="field-service"
                            name="service"
                            value={values.service}
                            onChange={handleChange}
                            className={
                              (errors.service
                                ? 'field border-[#FF8A75]/70 focus:border-[#FF8A75]'
                                : 'field') + ' input-dark appearance-none pr-10'
                            }
                            aria-invalid={Boolean(errors.service)}
                            aria-describedby={errors.service ? 'error-service' : undefined}
                            aria-required="true"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.title}>
                                {service.title}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/55"
                          />
                        </div>
                        <FieldError id="error-service" message={errors.service} />
                      </div>

                      <div>
                        <label htmlFor="field-budget" className="field-label">
                          Project budget <span className="text-white/55">(optional)</span>
                        </label>
                        <div className="relative">
                          <select
                            id="field-budget"
                            name="budget"
                            value={values.budget}
                            onChange={handleChange}
                            className="field input-dark appearance-none pr-10"
                          >
                            <option value="">Select a range</option>
                            {budgetOptions.map((budget) => (
                              <option key={budget} value={budget}>
                                {budget}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/55"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] px-4 py-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime/10 text-lime">
                          <Clock size={14} />
                        </span>
                        <p className="text-[10.5px] leading-relaxed text-white/60">
                          Typical reply in under one business day.
                        </p>
                      </div>

                      <div className="sm:col-span-2">
                        <div className="mb-2 flex items-center justify-between">
                          <label htmlFor="field-message" className="field-label mb-0">
                            Message <span className="text-lime">*</span>
                          </label>
                          <span className="font-mono text-[8px] tracking-[0.1em] text-white/55">
                            {values.message.length}/1000
                          </span>
                        </div>
                        <textarea
                          id="field-message"
                          name="message"
                          rows={5}
                          maxLength={1000}
                          value={values.message}
                          onChange={handleChange}
                          placeholder="What are you building, and what does success look like?"
                          className={
                            (errors.message
                              ? 'field border-[#FF8A75]/70 focus:border-[#FF8A75]'
                              : 'field') + ' resize-none'
                          }
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'error-message' : undefined}
                          aria-required="true"
                        />
                        <FieldError id="error-message" message={errors.message} />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === 'sending'}
                        className="w-full sm:w-auto"
                        icon={
                          status === 'sending' ? (
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                          ) : (
                            <Send size={13} strokeWidth={2.2} />
                          )
                        }
                      >
                        {status === 'sending' ? 'Preparing brief…' : 'Submit project'}
                      </Button>
                      <p className="max-w-[240px] text-[10px] leading-relaxed text-white/55">
                        Opens your email client with the brief pre-filled. No data is stored on this
                        site.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
