import { ArrowDown, Sparkles } from 'lucide-react'
import { site, stats } from '../../data/site'
import Button from '../ui/Button'
import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'
import HeroVisual from '../visuals/HeroVisual'

export default function Hero() {
  return (
    <section id="home" className="grain relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-dark opacity-40 mask-fade-b" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime/[0.04] blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-x relative z-10 pb-8 pt-28 sm:pt-32 lg:pb-10 lg:pt-40">
        <div className="mb-12 hidden items-center justify-between border-b border-white/[0.08] pb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55 md:flex">
          <span className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-dot" />
            {site.availability}
          </span>
          <span>Independent digital studio</span>
          <span>{site.location}</span>
          <span>Est. {site.founded}</span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55 sm:mb-8">
                <Sparkles size={11} className="text-lime" />
                Technology · Design · Growth
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-[clamp(3rem,7.1vw,6.35rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-balance">
                Digital products
                <br />
                built to{' '}
                <span className="font-serif font-normal italic tracking-[-0.02em] text-lime">
                  outperform.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-[530px] text-[15px] leading-[1.75] text-pretty text-white/55 sm:text-base">
                Nexus is a technology and digital solutions studio. We design, engineer, and
                scale the websites, platforms, and products that move ambitious businesses
                forward.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#services" size="lg" variant="primary" className="w-full sm:w-auto">
                  Explore our services
                </Button>
                <Button
                  href="#contact"
                  size="lg"
                  variant="outline-light"
                  className="w-full sm:w-auto"
                >
                  Start a project
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-12 grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:gap-6">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-[26px] font-semibold leading-none tracking-[-0.04em] text-white tabular-nums sm:text-[30px]">
                      <CountUp value={stat.value} duration={1.3} />
                    </dd>
                    <dd className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.16em] text-white/55 sm:text-[9px]">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={16}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 sm:mt-20">
          <a
            href="#about"
            className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white/80"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-lime/50 group-hover:text-lime">
              <ArrowDown size={13} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
            Scroll to explore
          </a>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 sm:block">
            Built with intent / Shipped with care
          </span>
        </div>
      </div>
    </section>
  )
}
