import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { navLinks, services, site } from '../../data/site'
import Logo from '../ui/Logo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07080A] text-white">
      <div className="pointer-events-none absolute inset-0 grid-dark opacity-20" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-lime/[0.04] blur-[100px]" />

      <div className="container-x relative pb-8 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="group inline-flex w-fit" aria-label="Nexus — back to top">
              <Logo />
            </a>
            <p className="mt-6 max-w-sm text-[13.5px] leading-[1.75] text-white/60">
              An independent technology and digital solutions studio. We design and engineer
              websites, platforms, and products that move ambitious businesses forward.
            </p>

            <div className="mt-7 flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-dot" />
              {site.availability}
            </div>

            <div className="mt-8">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
                Follow along
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[10.5px] text-white/60 transition-colors duration-300 hover:border-lime/40 hover:text-lime"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-line inline-block text-[12.5px] text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href="#services"
                      className="link-line inline-block text-[12.5px] leading-snug text-white/50 transition-colors hover:text-white"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-line inline-block text-[12.5px] text-white/50 transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="link-line inline-block text-[12.5px] text-white/50 transition-colors hover:text-white"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-line inline-block text-[12.5px] text-white/50 transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="pt-1 font-mono text-[8.5px] leading-relaxed tracking-[0.1em] text-white/55">
                  {site.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 border-t border-white/10 pt-10 lg:mt-20">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
              Technology · Design · Growth
            </p>
            <p className="mt-2 font-display text-[clamp(3.8rem,13vw,11rem)] font-bold leading-[0.72] tracking-[-0.07em] text-white">
              nexus<span className="text-lime">.</span>
            </p>
          </div>
          <a
            href="#home"
            aria-label="Back to top"
            className="group mb-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink sm:h-12 sm:w-12"
          >
            <ArrowUp size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Designed &amp; engineered in-house</p>
        </div>
      </div>
    </footer>
  )
}
