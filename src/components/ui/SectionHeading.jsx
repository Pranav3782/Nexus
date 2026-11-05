import { cn } from '../../lib/utils'
import Reveal from './Reveal'

export default function SectionHeading({
  index,
  label,
  title,
  description,
  aside,
  theme = 'light',
  className,
}) {
  return (
    <div className={cn('grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12', className)}>
      <div className="lg:col-span-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            {index && (
              <span
                className={cn(
                  'font-mono text-[10px] font-medium tracking-[0.18em]',
                  theme === 'dark' ? 'text-lime' : 'text-ink/60',
                )}
              >
                {index}
              </span>
            )}
            <span className={cn('h-px w-8', theme === 'dark' ? 'bg-white/20' : 'bg-ink/20')} />
            <span
              className={cn(
                'eyebrow',
                theme === 'dark' ? 'text-white/50' : 'text-ink/60',
              )}
            >
              {label}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className={cn(
              'display-title text-balance',
              theme === 'dark' ? 'text-white' : 'text-ink',
            )}
          >
            {title}
          </h2>
        </Reveal>
      </div>

      {(description || aside) && (
        <Reveal delay={0.14} className="lg:col-span-4">
          {aside ?? (
            <p
              className={cn(
                'max-w-md text-[15px] leading-relaxed text-pretty lg:ml-auto',
                theme === 'dark' ? 'text-white/55' : 'text-ink/65',
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
      )}
    </div>
  )
}
