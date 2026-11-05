import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="bg-bone section-pad">
      <div className="container-x">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-ink px-5 py-12 text-white sm:rounded-[2.75rem] sm:px-10 sm:py-14 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-[0.14]" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-lime/[0.07] blur-[90px]" />
          <div className="relative">
            <SectionHeading
              theme="dark"
              index="02"
              label="What we do"
              title={
                <>
                  Everything you need.
                  <br className="hidden sm:block" /> Nothing you{' '}
                  <span className="font-serif font-normal italic text-lime">don&apos;t.</span>
                </>
              }
              description="Eight core disciplines, delivered by one senior team. Bring us in for the full build, or plug us in exactly where you need momentum."
              className="border-b border-white/10 pb-10 sm:pb-12"
            />

            <ul className="mt-2 grid md:grid-cols-2 md:gap-x-12">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <li key={service.id} className="border-b border-white/10 transition-colors duration-500 hover:border-white/20">
                    <Reveal delay={Math.min(index * 0.04, 0.24)} y={18}>
                      <a
                        href="#contact"
                        className="group block py-6 transition-transform duration-500 ease-expo hover:-translate-y-0.5 sm:py-7"
                        aria-label={`Discuss ${service.title}`}
                      >
                        <div className="grid grid-cols-[auto_1fr_auto] gap-3.5 sm:gap-5">
                          <span className="pt-2.5 font-mono text-[9px] tracking-[0.14em] text-white/55 transition-colors group-hover:text-lime">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-center gap-3">
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/55 transition-all duration-300 ease-expo group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                                <Icon size={16} strokeWidth={1.9} />
                              </span>
                              <h3 className="font-display text-[16px] font-semibold tracking-[-0.02em] text-white/85 transition-colors duration-300 group-hover:text-white sm:text-[18px]">
                                {service.title}
                              </h3>
                            </div>

                            <p className="mt-3 max-w-md text-[13px] leading-[1.7] text-white/60 transition-colors duration-300 group-hover:text-white/60 sm:text-[13.5px]">
                              {service.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/55 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/55 transition-all duration-300 ease-expo group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>
                      </a>
                    </Reveal>
                  </li>
                )
              })}
            </ul>

            <Reveal>
              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
                    A different challenge?
                  </p>
                  <p className="mt-1 text-[13px] text-white/60">
                    Most of our best work started with an unusual brief.
                  </p>
                </div>
                <Button href="#contact" variant="primary" size="md" className="w-full sm:w-auto">
                  Tell us about it
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
