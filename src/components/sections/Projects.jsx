import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/site'
import { cn } from '../../lib/utils'
import Button from '../ui/Button'
import ProjectModal from '../ui/ProjectModal'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ProjectVisual from '../visuals/ProjectVisual'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <section id="work" className="relative overflow-hidden bg-bone section-pad">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Selected work"
          title={
            <>
              Proof, not{' '}
              <span className="font-serif font-normal italic tracking-[-0.02em]">promises.</span>
            </>
          }
          aside={
            <div className="lg:ml-auto lg:max-w-[300px]">
              <p className="text-[15px] leading-relaxed text-ink/65">
                A selection of concept products built to show how we think, design, and engineer.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink/60">
                <span className="h-1 w-1 rounded-full bg-lime-600" />
                Concept work · Replace with live case studies
              </p>
            </div>
          }
        />

        <div className="mt-14 space-y-16 sm:mt-16 lg:mt-20 lg:space-y-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <article
                key={project.id}
                className="group/project grid items-center gap-7 lg:grid-cols-12 lg:gap-10"
              >
                <div className={cn('lg:col-span-7', reversed && 'lg:order-2')}>
                  <Reveal y={24}>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="group relative block w-full overflow-hidden rounded-[1.6rem] border border-ink/10 bg-bone-50 text-left shadow-soft transition-shadow duration-500 hover:shadow-lift group-hover/project:shadow-lift sm:rounded-[2rem]"
                      aria-label={`View the ${project.title} concept case study`}
                      aria-haspopup="dialog"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <div className="h-full w-full transition-transform duration-[900ms] ease-expo group-hover/project:scale-[1.018] will-change-transform">
                          <ProjectVisual variant={project.visual} />
                        </div>
                      </div>

                      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink/85 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md sm:left-4 sm:top-4">
                        Concept / {project.year}
                      </span>

                      <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-all duration-300 ease-expo group-hover:bg-lime group-hover:text-ink sm:bottom-4 sm:right-4 sm:h-11 sm:w-11">
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </button>
                  </Reveal>
                </div>

                <div className={cn('lg:col-span-5 lg:px-2', reversed && 'lg:order-1')}>
                  <Reveal delay={0.1} y={20}>
                    <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/60">
                      <span>{project.number}</span>
                      <span className="h-px w-6 bg-ink/20" />
                      <span className="min-w-0 truncate">{project.category}</span>
                    </div>

                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-ink transition-transform duration-500 ease-expo group-hover/project:-translate-y-0.5">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[0.14em] text-ink/60">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-3 font-serif text-[clamp(1.2rem,2.1vw,1.5rem)] italic leading-snug text-ink/65 transition-colors duration-500 group-hover/project:text-ink/80">
                      {project.tagline}
                    </p>

                    <p className="mt-5 max-w-md text-[14px] leading-[1.75] text-ink/65 transition-colors duration-500 group-hover/project:text-ink/80">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-ink/10 bg-bone-50 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="group/cta mt-8 inline-flex items-center gap-3 text-left"
                      aria-haspopup="dialog"
                    >
                      <span className="border-b border-ink/25 pb-1 text-[13.5px] font-medium text-ink transition-colors group-hover/cta:border-ink/60 group-hover/cta:text-ink/60">
                        View case study
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 ease-expo group-hover/cta:border-ink group-hover/cta:bg-ink group-hover/cta:text-lime">
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        />
                      </span>
                    </button>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.6rem] border border-ink/10 bg-bone-50 p-6 sm:mt-20 sm:flex-row sm:items-center sm:rounded-[2rem] sm:p-8">
            <div>
              <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/60">
                Your project next
              </p>
              <p className="mt-2 font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold tracking-[-0.035em] text-ink">
                Have something ambitious in mind?
              </p>
            </div>
            <Button href="#contact" variant="dark" size="md" className="w-full sm:w-auto">
              Start a project
            </Button>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal key={activeProject.id} project={activeProject} onClose={closeProject} />
        )}
      </AnimatePresence>
    </section>
  )
}
