import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ value, duration = 1.15, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()

  const text = String(value)
  const match = text.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || !ref.current) return undefined

    if (reduceMotion || target === null) {
      ref.current.textContent = text
      return undefined
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`
      },
      onComplete: () => {
        if (ref.current) ref.current.textContent = text
      },
    })

    return () => controls.stop()
  }, [inView, reduceMotion, target, suffix, text, duration])

  const initial = target === null || reduceMotion ? text : `0${suffix}`

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{text}</span>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span ref={ref} className="absolute inset-0" aria-hidden="true">
        {initial}
      </span>
    </span>
  )
}
