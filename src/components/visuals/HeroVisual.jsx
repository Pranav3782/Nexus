import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Globe2 } from 'lucide-react'

function AsteriskMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M16 3v26" />
        <path d="M3 16h26" />
        <path d="M6.8 6.8 25.2 25.2" />
        <path d="M25.2 6.8 6.8 25.2" />
      </g>
    </svg>
  )
}

export default function HeroVisual() {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 18, mass: 0.4 })
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 18, mass: 0.4 })
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6])

  function handlePointerMove(event) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full bg-lime/[0.08] blur-3xl" />

      <motion.div
        className="relative aspect-square w-full"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      >
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/[0.06] bg-white/[0.012]">
          <div className="absolute inset-0 rounded-[2.5rem] dot-grid-dark opacity-[0.16]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
        </div>

        <span className="absolute left-5 top-5 h-4 w-4 border-l border-t border-white/20" />
        <span className="absolute right-5 top-5 h-4 w-4 border-r border-t border-white/20" />
        <span className="absolute bottom-5 left-5 h-4 w-4 border-b border-l border-white/20" />
        <span className="absolute bottom-5 right-5 h-4 w-4 border-b border-r border-white/20" />

        <div className="absolute left-6 top-7 font-mono text-[8px] uppercase tracking-[0.28em] text-white/30">
          System / 01
        </div>
        <div className="absolute right-6 top-7 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
          <span className="h-1 w-1 rounded-full bg-lime animate-pulse-dot" />
          Live
        </div>

        <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8FF57" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#D8FF57" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="205" fill="url(#coreGlow)" />
          <g
            className="animate-spin-slow"
            style={{ transformOrigin: '300px 300px', transformBox: 'view-box' }}
          >
            <circle cx="300" cy="300" r="266" fill="none" stroke="white" strokeOpacity="0.08" />
            <circle
              cx="300"
              cy="300"
              r="222"
              fill="none"
              stroke="white"
              strokeOpacity="0.2"
              strokeDasharray="2 9"
            />
            <circle
              cx="300"
              cy="300"
              r="154"
              fill="none"
              stroke="#D8FF57"
              strokeOpacity="0.28"
              strokeDasharray="1 7"
            />
            <circle cx="300" cy="34" r="4.5" fill="#D8FF57" />
            <circle cx="522" cy="365" r="3" fill="white" fillOpacity="0.45" />
            <circle cx="94" cy="240" r="2.5" fill="#D8FF57" fillOpacity="0.7" />
          </g>
          <line x1="300" y1="34" x2="300" y2="78" stroke="white" strokeOpacity="0.12" />
          <line x1="300" y1="522" x2="300" y2="566" stroke="white" strokeOpacity="0.08" />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid h-[154px] w-[154px] place-items-center rounded-full border border-white/10 bg-[#0C0E11]/90 shadow-[inset_0_0_60px_rgba(216,255,87,0.05)] sm:h-[176px] sm:w-[176px]">
            <div className="absolute inset-3 rounded-full border border-dashed border-white/[0.09]" />
            <div className="absolute inset-0 rounded-full bg-lime/[0.04] blur-xl" />
            <div className="relative grid h-[70px] w-[70px] place-items-center rounded-full bg-lime text-ink shadow-[0_0_60px_rgba(216,255,87,0.3)] sm:h-[82px] sm:w-[82px]">
              <AsteriskMark className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          </div>
          <div className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
            Nexus Core
          </div>
        </div>

        <motion.div
          className="absolute -left-2 top-[16%] w-[146px] rounded-2xl border border-white/10 bg-[#101216]/95 p-3.5 shadow-panel sm:left-[-6%] sm:w-[168px] sm:p-4"
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="mb-2.5 flex items-center justify-between">
            <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-white/35">
              Status
            </span>
            <span className="flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.12em] text-lime">
              <span className="h-1 w-1 rounded-full bg-lime animate-pulse-dot" />
              Live
            </span>
          </div>
          <p className="font-display text-[13px] font-semibold leading-tight tracking-tight text-white">
            All systems nominal
          </p>
          <div className="mt-3 flex items-end gap-1">
            {[34, 52, 44, 68, 58, 82, 74, 92].map((height, index) => (
              <span
                key={index}
                className="w-full rounded-sm bg-lime/75"
                style={{ height: `${height * 0.22}px` }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-1 top-[9%] hidden w-[150px] rounded-2xl border border-white/10 bg-[#101216]/95 p-3.5 shadow-panel sm:right-[-6%] sm:block sm:w-[168px] sm:p-4"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-white/35">
              Performance
            </span>
            <span className="text-lime">
              <ArrowUpRight size={12} />
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative grid h-12 w-12 place-items-center">
              <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="3" />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#D8FF57"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  strokeDashoffset="2.5"
                />
              </svg>
              <span className="font-display text-[15px] font-bold text-white">98</span>
            </div>
            <div>
              <p className="font-display text-[11px] font-semibold text-white">Core Web Vitals</p>
              <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.1em] text-white/35">
                All passing
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-[8%] hidden w-[162px] rounded-2xl border border-white/10 bg-[#101216]/95 p-3.5 shadow-panel sm:block sm:bottom-[12%] sm:left-[6%] sm:w-[178px] sm:p-4"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-white/35">
              Growth
            </span>
            <span className="rounded-full bg-lime/10 px-1.5 py-0.5 font-mono text-[7px] tracking-wide text-lime">
              QoQ
            </span>
          </div>
          <p className="mt-2 font-display text-[24px] font-bold leading-none tracking-tight text-white">
            +38.2<span className="text-lime">%</span>
          </p>
          <svg viewBox="0 0 160 42" className="mt-3 h-9 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D8FF57" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#D8FF57" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 34 C18 32, 26 24, 42 26 S66 18, 82 20 S106 12, 122 13 S146 4, 160 5 L160 42 L0 42 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M0 34 C18 32, 26 24, 42 26 S66 18, 82 20 S106 12, 122 13 S146 4, 160 5"
              fill="none"
              stroke="#D8FF57"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[9%] right-[7%] hidden items-center gap-2.5 rounded-full border border-white/10 bg-[#101216]/95 px-3.5 py-2.5 shadow-panel md:flex"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <Globe2 size={13} className="text-lime" />
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/50">
            12 regions
          </span>
        </motion.div>
      </motion.div>

      <div className="mt-5 flex items-center justify-between px-1 font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
        <span>Design · Engineering · Growth</span>
        <span className="hidden sm:inline">Nexus® 2026</span>
      </div>
    </div>
  )
}
