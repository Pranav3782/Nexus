import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { process } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Process() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })

  return (
    <section id="process" className="relative overflow-hidden border-y border-ink/10 bg-bone-200 section-pad">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="How we work"
          title={
            <>
              A process engineered for{' '}
              <span className="font-serif font-normal italic tracking-[-0.02em]">clarity.</span>
            </>
          }
          aside={
            <div className="lg:ml-auto lg:max-w-[290px]">
              <p className="text-[15px] leading-relaxed text-ink/65">
                No black boxes, no long silences. Six deliberate stages, with visible progress at
                every step.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bone-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/65">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-600" />
                Typical engagement · 4–8 weeks
              </div>
            </div>
          }
        />

        <div ref={ref} className="relative mt-14 lg:mt-20">
          <div className="absolute bottom-0 left-[6px] top-2 w-px bg-ink/10 lg:hidden" />
          <div className="absolute left-0 right-0 top-[6px] hidden h-px bg-ink/15 lg:block">
            {!reduceMotion && (
              <motion.div
                className="h-px origin-left bg-ink"
                style={{ scaleX: progress }}
              />
            )}
            {reduceMotion && <div className="h-px w-full bg-ink" />}
          </div>

          <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
            {process.map((step, index) => (
              <li key={step.number} className="relative pl-8 lg:pl-0 lg:pt-12">
                <span className="absolute left-0 top-[2px] grid h-3.5 w-3.5 place-items-center rounded-full border border-ink/40 bg-bone-200 lg:top-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                </span>

                <Reveal delay={Math.min(index * 0.05, 0.3)} y={18}>
                  <span className="font-mono text-[9px] tracking-[0.16em] text-ink/60">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-display text-[19px] font-semibold tracking-[-0.025em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.7] text-ink/65">{step.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink/60"
                      >
                        <span className="h-px w-2.5 bg-lime-600" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/60 lg:mt-20">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-lime-600" /> Fixed scope
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-lime-600" /> Weekly demos
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-lime-600" /> Direct access
            </span>
            <span className="ml-auto hidden text-ink/60 sm:block">
              Your team stays close to the work
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
