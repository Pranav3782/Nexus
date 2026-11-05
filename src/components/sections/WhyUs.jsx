import { Check } from 'lucide-react'
import { reasons } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const commitments = ['Senior-only team', 'Weekly demos', 'Clear, written scope']

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-bone section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                index="03"
                label="Why Nexus"
                title={
                  <>
                    Built to be a{' '}
                    <span className="font-serif font-normal italic tracking-[-0.02em]">
                      long-term
                    </span>{' '}
                    partner.
                  </>
                }
                description="Anyone can ship a website. We build the technical and design foundation your business keeps compounding on."
              />

              <Reveal delay={0.1}>
                <div className="mt-10 flex items-end gap-5 border-t border-ink/10 pt-8">
                  <span
                    aria-hidden="true"
                    className="font-display text-[88px] font-semibold leading-[0.75] tracking-[-0.07em] text-ink/[0.09]"
                  >
                    06
                  </span>
                  <div className="pb-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
                      Reasons to stay
                    </p>
                    <p className="mt-1.5 max-w-[200px] text-[13px] leading-relaxed text-ink/65">
                      The things our clients notice long after launch.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {commitments.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bone-50 px-3 py-1.5 text-[11px] font-medium text-ink/60"
                    >
                      <Check size={11} strokeWidth={2.6} className="text-lime-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid border-t border-ink/10 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <Reveal key={reason.title} delay={Math.min(index * 0.05, 0.25)} y={18}>
                    <div
                      className={
                        'group relative h-full border-b border-ink/10 py-7 transition-all duration-500 ease-expo hover:-translate-y-0.5 hover:bg-ink/[0.015] sm:py-8 ' +
                        (index % 2 === 0
                          ? 'sm:border-r sm:border-r-ink/10 sm:pr-7'
                          : 'sm:pl-7')
                      }
                    >
                      <div className="flex items-start justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-bone-50 text-ink/70 transition-all duration-300 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-lime">
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.16em] text-ink/60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-[280px] text-[13.5px] leading-[1.7] text-ink/65">
                        {reason.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
