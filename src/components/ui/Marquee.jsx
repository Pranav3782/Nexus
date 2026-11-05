import { cn } from '../../lib/utils'

export default function Marquee({ children, duration = 38, reverse = false, className, trackClassName }) {
  return (
    <div className={cn('group relative flex w-full overflow-hidden', className)}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            'flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
            trackClassName,
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
