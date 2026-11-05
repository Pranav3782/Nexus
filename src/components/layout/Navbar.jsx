import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, site } from '../../data/site'
import { cn } from '../../lib/utils'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    if (open) window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={reduceMotion ? false : { y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        <div className="container-x">
          <div
            className={cn(
              'mt-3 flex h-[62px] items-center justify-between rounded-full border px-3.5 transition-all duration-500 ease-expo sm:mt-4 sm:h-[70px] sm:px-5',
              scrolled
                ? 'border-white/10 bg-ink/85 shadow-panel backdrop-blur-xl'
                : 'border-white/[0.07] bg-ink/25 backdrop-blur-md',
            )}
          >
            <a
              href="#home"
              className="group rounded-full py-1 pl-1 pr-3 focus-visible:outline-offset-4"
              aria-label="Nexus — back to top"
            >
              <Logo />
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'group relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300',
                      isActive ? 'text-white' : 'text-white/55 hover:text-white',
                      !isActive &&
                        'after:pointer-events-none after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-white/35 after:transition-transform after:duration-300 after:ease-expo hover:after:scale-x-100 focus-visible:after:scale-x-100',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.06]"
                        transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative flex items-center gap-1.5">
                      {isActive && <span className="h-1 w-1 rounded-full bg-lime" />}
                      {link.label}
                    </span>
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="#contact"
                size="sm"
                variant="primary"
                className="hidden sm:inline-flex"
                icon={<ArrowUpRight size={13} strokeWidth={2.5} />}
              >
                Let&apos;s talk
              </Button>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <Menu size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[70] overflow-y-auto bg-ink text-white lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 grid-dark opacity-30" />
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />

            <div className="relative flex min-h-full flex-col">
              <div className="container-x flex h-[86px] items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/10"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X size={19} strokeWidth={1.8} />
                </button>
              </div>

              <nav aria-label="Mobile" className="container-x flex-1 pt-8">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.05 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-baseline justify-between border-b border-white/10 py-4"
                      >
                        <span className="font-display text-[clamp(2.1rem,9vw,3.2rem)] font-semibold tracking-[-0.045em] text-white/90 transition-colors group-hover:text-lime">
                          {link.label}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.18em] text-white/55">
                          0{index + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-10 space-y-5 pb-10"
                >
                  <Button href="#contact" onClick={closeMenu} variant="primary" size="lg" className="w-full">
                    Start a project
                  </Button>
                  <div className="flex flex-col gap-2 text-sm text-white/50">
                    <a href={`mailto:${site.email}`} className="link-line w-fit">
                      {site.email}
                    </a>
                    <a href={`tel:${site.phoneHref}`} className="link-line w-fit">
                      {site.phone}
                    </a>
                    <span className="flex items-center gap-2 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-dot" />
                      {site.availability}
                    </span>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
