import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Process from './components/Process'
import Faq from './components/Faq'
import { Cta, Footer } from './components/CtaFooter'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-brand-500 to-ice-400"
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Differentials />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
