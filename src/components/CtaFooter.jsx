import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Phone, Snowflake } from 'lucide-react'
import Reveal from './Reveal'
import { INSTAGRAM_URL, PHONE_DISPLAY, waLink } from '../config'

export function Cta() {
  return (
    <section className="py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-ice-400 p-10 text-center sm:p-16">
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-20 -top-20 text-white/10"
            >
              <Snowflake size={280} />
            </motion.div>
            <h2 className="relative font-display text-3xl font-extrabold text-white sm:text-5xl">
              Seu conforto térmico começa agora
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
              Fale com a TCLIMA e receba seu orçamento sem compromisso em poucos minutos.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-600 shadow-xl transition hover:scale-105"
            >
              <MessageCircle size={20} /> Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-x flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TCLIMA" className="h-12 w-12 rounded-full" />
          <div>
            <p className="font-display font-extrabold italic text-white">
              <span className="text-brand-400">T</span>CLIMA Engenharia Térmica
            </p>
            <p className="text-sm text-slate-400">Climatização &amp; Manutenção</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <Instagram size={16} /> @tclima_engenharia
          </a>
        </div>
      </div>
      <p className="container-x mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TCLIMA Engenharia Térmica. Todos os direitos reservados.
      </p>
    </footer>
  )
}
