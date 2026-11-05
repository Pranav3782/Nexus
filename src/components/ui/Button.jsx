import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const variants = {
  primary: {
    shell: 'bg-lime text-ink hover:bg-white hover:shadow-[0_16px_50px_-16px_rgba(216,255,87,0.55)]',
    icon: 'bg-ink/10 group-hover/btn:bg-ink group-hover/btn:text-lime',
  },
  dark: {
    shell: 'bg-ink text-white hover:bg-ink-700 hover:shadow-lift',
    icon: 'bg-white/10 group-hover/btn:bg-lime group-hover/btn:text-ink',
  },
  outline: {
    shell: 'border border-ink/20 text-ink hover:border-ink/45 hover:bg-ink/[0.035]',
    icon: 'bg-ink/[0.06] group-hover/btn:bg-ink group-hover/btn:text-white',
  },
  white: {
    shell: 'bg-white text-ink hover:bg-bone-200 hover:shadow-lift',
    icon: 'bg-ink/[0.07] group-hover/btn:bg-ink group-hover/btn:text-lime',
  },
  'outline-light': {
    shell: 'border border-white/20 text-white hover:border-white/45 hover:bg-white/[0.045]',
    icon: 'bg-white/[0.08] group-hover/btn:bg-white group-hover/btn:text-ink',
  },
  ghost: {
    shell: 'text-ink hover:text-ink/60',
    icon: 'bg-ink/[0.06] group-hover/btn:bg-ink group-hover/btn:text-white',
  },
}

const sizes = {
  sm: 'px-4 py-2.5 text-[13px]',
  md: 'px-5 py-3 text-[13.5px] sm:px-6 sm:py-3.5 sm:text-sm',
  lg: 'px-6 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-[15px]',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  ...rest
}) {
  const styles = variants[variant] ?? variants.primary
  const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)

  const shared = {
    className: cn(
      'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-[-0.01em] transition-all duration-300 ease-expo hover:-translate-y-px active:translate-y-0 active:scale-[0.985]',
      styles.shell,
      sizes[size],
      disabled && 'pointer-events-none opacity-50',
      className,
    ),
    onClick,
    'aria-label': ariaLabel,
    ...rest,
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className={cn(
            'grid h-[23px] w-[23px] place-items-center rounded-full transition-all duration-300 ease-expo',
            styles.icon,
          )}
        >
          {icon === true ? (
            <ArrowUpRight size={13} strokeWidth={2.5} className="transition-transform duration-300 ease-expo group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]" />
          ) : (
            icon
          )}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer noopener' : undefined}
        {...shared}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} {...shared}>
      {content}
    </button>
  )
}
