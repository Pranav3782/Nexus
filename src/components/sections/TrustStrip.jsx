import Marquee from '../ui/Marquee'

const capabilities = [
  'Strategy',
  'UI/UX Design',
  'Web Development',
  'Product Engineering',
  'SEO',
  'Digital Growth',
  'Automation',
  'E-commerce',
]

export default function TrustStrip() {
  return (
    <section aria-label="Our capabilities" className="relative z-10 border-y border-ink/10 bg-lime">
      <Marquee duration={34} className="py-3.5">
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="flex items-center whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/80"
          >
            <svg viewBox="0 0 24 24" className="mx-6 h-3 w-3 text-ink/50" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <path d="M5.6 5.6 18.4 18.4" />
                <path d="M18.4 5.6 5.6 18.4" />
              </g>
            </svg>
            {capability}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
