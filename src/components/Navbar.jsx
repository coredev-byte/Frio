import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { waLink } from '../config'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#faq', label: 'Dúvidas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-night-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/logo.png" alt="TCLIMA Engenharia Térmica" className="h-10 w-10 rounded-full sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <span className="block font-display text-lg font-extrabold italic tracking-tight text-white">
              <span className="text-brand-400">T</span>CLIMA
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
              Engenharia Térmica
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary hidden !py-2.5 text-sm md:inline-flex">
          <MessageCircle size={18} /> Orçamento
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-night-900/95 backdrop-blur-lg md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary w-full">
                  <MessageCircle size={18} /> Pedir orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
