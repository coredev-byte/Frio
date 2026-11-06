import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
