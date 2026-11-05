import { Info, Quote } from 'lucide-react'
import { testimonials } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-bone-200 section-pad">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-ink/60">07</span>
                  <span className="h-px w-8 bg-ink/20" />
                  <span className="eyebrow text-ink/65">Voices</span>
                </div>
                <h2 className="display-title text-balance text-ink">
                  The work speaks.
                  <br />
                  So do the{' '}
                  <span className="font-serif font-normal italic tracking-[-0.02em]">people.</span>
                </h2>
                <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-ink/65">
                  What partnership feels like when the process is clear, the work is honest, and
                  the outcome matters.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex gap-3 rounded-xl border border-ink/10 bg-bone-50/70 p-4">
                  <Info size={14} className="mt-0.5 shrink-0 text-ink/40" />
                  <p className="text-[11px] leading-relaxed text-ink/60">
                    Sample testimonials for layout demonstration only. Replace with verified client
                    feedback before launch.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal y={24}>
              <figure className="relative overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white sm:rounded-[2rem] sm:p-9 lg:p-10">
                <div className="absolute inset-0 dot-grid-dark opacity-[0.12]" />
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-lime/[0.08] blur-[80px]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Quote size={26} className="text-lime" strokeWidth={1.4} />
                    <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                      Sample feedback / 01
                    </span>
                  </div>

                  <blockquote className="mt-10 font-serif text-[clamp(1.5rem,3vw,2.35rem)] italic leading-[1.25] text-white/90 text-pretty">
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-9 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-lime font-display text-[11px] font-bold text-ink">
                      {featured.initials}
                    </span>
                    <span>
                      <span className="block font-display text-[13px] font-semibold text-white">
                        {featured.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.1em] text-white/55">
                        {featured.role}
                      </span>
                    </span>
                    <span className="ml-auto hidden font-mono text-[8px] uppercase tracking-[0.14em] text-white/55 sm:block">
                      Placeholder
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {rest.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={0.08 + index * 0.06} y={20}>
                  <figure className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-bone-50 p-6 transition-all duration-500 ease-expo hover:-translate-y-0.5 hover:shadow-soft">
                    <div className="flex items-center justify-between">
                      <Quote size={18} className="text-ink/20" strokeWidth={1.6} />
                      <span className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-ink/60">
                        Sample 0{index + 2}
                      </span>
                    </div>
                    <blockquote className="mt-5 flex-1 text-[13.5px] leading-[1.7] text-ink/60">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-2.5 border-t border-ink/10 pt-4">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 font-display text-[9px] font-bold text-ink/60">
                        {testimonial.initials}
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-medium text-ink/70">
                          {testimonial.name}
                        </span>
                        <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.08em] text-ink/60">
                          {testimonial.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
