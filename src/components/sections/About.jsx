import { ArrowUpRight, Globe2 } from 'lucide-react'
import { principles, stats } from '../../data/site'
import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function AsteriskMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M16 3v26" />
        <path d="M3 16h26" />
        <path d="M6.8 6.8 25.2 25.2" />
        <path d="M25.2 6.8 6.8 25.2" />
      </g>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bone section-pad">
      <div className="pointer-events-none absolute -right-24 top-24 h-[360px] w-[360px] rounded-full border border-ink/[0.05]" />
      <div className="pointer-events-none absolute -right-12 top-40 h-[220px] w-[220px] rounded-full border border-ink/[0.05]" />

      <div className="container-x relative">
        <SectionHeading
          index="01"
          label="About Nexus"
          title={
            <>
              A studio built for the{' '}
              <span className="font-serif font-normal italic tracking-[-0.02em]">next decade</span>{' '}
              of digital.
            </>
          }
          description="We are a small, senior team of strategists, designers, and engineers. One integrated studio, accountable for the whole outcome — not just the deliverable."
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-2xl font-display text-[clamp(1.25rem,2vw,1.6rem)] font-medium leading-[1.5] tracking-[-0.02em] text-ink/85 text-pretty">
                Nexus partners with founders, product teams, and established companies to turn
                complex problems into clear, high-performing digital products.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7 max-w-xl space-y-5 body-copy">
                <p>
                  Our approach is deliberately integrated: strategy, design, and engineering under
                  one roof. Fewer handoffs, faster decisions, and a product that feels coherent
                  from the first pixel to the final deployment.
                </p>
                <p>
                  We work with a small number of clients at a time. That is a choice — it keeps
                  the people closest to the work close to you.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-ink/10">
              {principles.map((principle, index) => (
                <Reveal key={principle.number} delay={index * 0.06}>
                  <div className="group grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-6 sm:gap-8">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-ink/60">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-ink/60">
                        {principle.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-ink/65">
                        {principle.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-28">
              <Reveal y={20}>
                <div className="relative overflow-hidden rounded-[2rem] bg-lime p-7 text-ink sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-ink/65">Our promise</span>
                    <AsteriskMark className="h-8 w-8 text-ink" />
                  </div>
                  <p className="mt-16 font-display text-[clamp(1.65rem,2.6vw,2.15rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-balance">
                    Good design is good business — when it actually ships.
                  </p>
                  <div className="mt-10 flex items-center justify-between border-t border-ink/15 pt-5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/65">
                    <span>Independent studio</span>
                    <span>Est. 2019</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} y={20}>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-ink p-7 text-white sm:p-9">
                  <div className="absolute inset-0 dot-grid-dark opacity-20" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-white/60">Global delivery</span>
                      <Globe2 size={16} className="text-lime" />
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {[
                        { value: '12', label: 'Countries' },
                        { value: '4', label: 'Continents' },
                        { value: '1', label: 'Team' },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="font-display text-[26px] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                            <CountUp value={item.value} duration={1} />
                          </p>
                          <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <a
                        href="#process"
                        className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-lime"
                      >
                        How we work
                        <ArrowUpRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                        Remote-first
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-ink/10 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div
                className={[
                  'h-full py-6 sm:py-8 lg:py-10',
                  index === 0 && 'pr-5 sm:pr-8',
                  index === 1 && 'border-l border-ink/10 pl-5 sm:pl-8 lg:pr-8',
                  index === 2 &&
                    'border-t border-ink/10 pr-5 pt-6 sm:pt-8 lg:border-l lg:border-t-0 lg:pl-8',
                  index === 3 &&
                    'border-l border-t border-ink/10 pl-5 pt-6 sm:pl-8 sm:pt-8 lg:border-t-0',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <p className="font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none tracking-[-0.05em] text-ink tabular-nums">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
