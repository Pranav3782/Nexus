import { cn } from '../../lib/utils'

export default function Logo({ tone = 'light', className = '', markClassName = '', wordClassName = '' }) {
  return (
    <span className={cn('inline-flex select-none items-center gap-2.5', className)}>
      <span
        className={cn(
          'grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-lime transition-transform duration-700 ease-expo group-hover:rotate-90',
          markClassName,
        )}
      >
        <svg viewBox="0 0 32 32" className="h-[15px] w-[15px]" aria-hidden="true">
          <g stroke="#0A0B0D" strokeWidth="2.7" strokeLinecap="round">
            <path d="M16 3v26" />
            <path d="M3 16h26" />
            <path d="M6.8 6.8 25.2 25.2" />
            <path d="M25.2 6.8 6.8 25.2" />
          </g>
        </svg>
      </span>
      <span
        className={cn(
          'font-display text-[20px] font-bold leading-none tracking-[-0.055em]',
          tone === 'light' ? 'text-white' : 'text-ink',
          wordClassName,
        )}
      >
        nexus
      </span>
    </span>
  )
}
