import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustStrip from './components/sections/TrustStrip'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import Projects from './components/sections/Projects'
import Technologies from './components/sections/Technologies'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-lime px-5 py-3 text-[13px] font-semibold text-ink transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>

      {!reduceMotion && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-lime"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      )}

      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
