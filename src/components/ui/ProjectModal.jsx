import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'
import Button from './Button'
import ProjectVisual from '../visuals/ProjectVisual'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab' && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (!nodes.length) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="fixed inset-0 bg-ink/75 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex min-h-full items-start justify-center p-3 py-6 sm:p-6 sm:py-10">
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-title-${project.id}`}
          className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] bg-bone shadow-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.99 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink/85 text-white backdrop-blur-md transition-colors hover:bg-ink sm:right-4 sm:top-4"
            aria-label="Close case study"
          >
            <X size={17} strokeWidth={2} />
          </button>

          <div className="p-2.5 pb-0 sm:p-3 sm:pb-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] sm:aspect-[16/9]">
              <ProjectVisual variant={project.visual} />
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/60">
                <span>{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-ink/20" />
                <span>{project.year}</span>
                <span className="rounded-full border border-ink/15 px-2 py-0.5 text-[8px] text-ink/60">
                  Concept project
                </span>
              </div>

              <h2
                id={`project-title-${project.id}`}
                className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[0.98] tracking-[-0.05em]"
              >
                {project.title}
              </h2>
              <p className="mt-3 font-serif text-[clamp(1.2rem,2.2vw,1.6rem)] italic leading-snug text-ink/65">
                {project.tagline}
              </p>

              <div className="mt-7 border-t border-ink/10 pt-6">
                <p className="eyebrow text-ink/60">Overview</p>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-ink/60">{project.overview}</p>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-6">
                <p className="eyebrow text-ink/60">The approach</p>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-ink/60">{project.approach}</p>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-6">
                <p className="eyebrow text-ink/60">Capabilities</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-[13.5px] text-ink/65">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-ink">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-ink/10 bg-bone-50 p-5 lg:sticky lg:top-4">
                <p className="eyebrow text-ink/60">At a glance</p>
                <dl className="mt-4 space-y-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/60">Discipline</dt>
                    <dd className="max-w-[150px] text-right text-[12px] leading-snug text-ink/70">
                      {project.category.split('·')[1]?.trim() ?? project.category}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/60">Year</dt>
                    <dd className="text-[12px] text-ink/70">{project.year}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/60">Type</dt>
                    <dd className="text-[12px] text-ink/70">Concept</dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-ink/10 pt-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/60">Stack</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink/10 bg-white/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button href="#contact" onClick={onClose} className="mt-6 w-full" variant="dark" size="md">
                  Start a similar project
                </Button>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-ink/60"
                >
                  Discuss this case study
                  <ArrowUpRight size={10} />
                </a>
              </div>

              <p className="mt-4 px-1 text-[10.5px] leading-relaxed text-ink/60">
                Concept project created to demonstrate capability. Replace with a verified client
                case study before launch.
              </p>
            </aside>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
