import { ArrowUpRight } from 'lucide-react'
import { techMarquee, technologies } from '../../data/site'
import Marquee from '../ui/Marquee'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Asterisk({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M5.6 5.6 18.4 18.4" />
        <path d="M18.4 5.6 5.6 18.4" />
      </g>
    </svg>
  )
}

export default function Technologies() {
  return (
    <section className="relative overflow-hidden bg-bone section-pad">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Our toolkit"
          title={
            <>
              Modern by default.{' '}
              <span className="font-serif font-normal italic tracking-[-0.02em]">
                Proven
              </span>{' '}
              in production.
            </>
          }
          description="We choose tools for longevity and leverage — not novelty. The stack is always in service of the product."
        />
      </div>

      <Reveal className="mt-12 sm:mt-16" y={16}>
        <div className="border-y border-ink/10 py-6 sm:py-8">
          <Marquee duration={48}>
            {techMarquee.map((tech, index) => (
              <span key={tech} className="flex items-center whitespace-nowrap">
                <span
                  className={
                    index % 3 === 1
                      ? 'font-display text-[clamp(2.1rem,5.2vw,4.4rem)] font-medium tracking-[-0.055em] text-ink/60'
                      : 'font-display text-[clamp(2.1rem,5.2vw,4.4rem)] font-medium tracking-[-0.055em] text-ink'
                  }
                >
                  {tech}
                </span>
                <Asterisk className="mx-7 h-4 w-4 shrink-0 text-lime-600 sm:mx-10 sm:h-5 sm:w-5" />
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="container-x">
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:mt-16 lg:grid-cols-4">
          {technologies.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.06}>
              <div className="border-t border-ink/15 pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink/60">
                    {group.group}
                  </h3>
                  <span className="font-mono text-[8px] tracking-[0.12em] text-ink/60">
                    0{index + 1}
                  </span>
                </div>
                <ul className="mt-4 space-y-0">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="group/tech flex cursor-default items-center justify-between border-b border-ink/[0.07] py-2.5 text-[13px] text-ink/65 transition-colors duration-300 hover:text-ink">
                        <span className="flex items-center gap-2.5">
                          <span className="h-1 w-1 rounded-full bg-ink/15 transition-colors duration-300 group-hover/tech:bg-lime-600" />
                          {item}
                        </span>
                        <ArrowUpRight
                          size={11}
                          className="text-ink/0 transition-all duration-300 group-hover/tech:text-ink/60"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
            <p className="max-w-xl text-[12.5px] leading-relaxed text-ink/65">
              Always evaluating: AI-assisted workflows, edge runtimes, headless commerce, and the
              next generation of performance tooling.
            </p>
            <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/60">
              Chosen for the problem · Not the hype
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
