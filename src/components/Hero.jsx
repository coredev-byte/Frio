import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Snowflake, MessageCircle, ArrowDown, ShieldCheck, Zap, Clock } from 'lucide-react'
import { waLink } from '../config'

const flakes = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53) % 100,
  size: 10 + ((i * 7) % 14),
  duration: 9 + ((i * 3) % 10),
  delay: -((i * 1.7) % 12),
}))

function Snowfall() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map((f, i) => (
        <Snowflake
          key={i}
          className="absolute top-0 animate-drift text-ice-300/40"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function Thermostat() {
  const [temp, setTemp] = useState(32)
  useEffect(() => {
    if (temp <= 18) return
    const t = setTimeout(() => setTemp((v) => v - 1), 140)
    return () => clearTimeout(t)
  }, [temp])
  return (
    <span className="font-display text-2xl font-bold tabular-nums text-ice-300">
      {temp}
      <span className="text-base">°C</span>
    </span>
  )
}

function AcUnit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -inset-10 rounded-full bg-brand-500/25 blur-3xl" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Unidade split */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white to-slate-200 p-5 shadow-[0_30px_80px_-20px_rgba(30,107,255,0.6)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="" className="h-8 w-8 rounded-full" />
              <span className="font-display text-sm font-extrabold italic text-night-800">
                <span className="text-brand-500">T</span>CLIMA
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-night-900 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ring rounded-full bg-ice-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ice-400" />
              </span>
              <Thermostat />
            </div>
          </div>
          <div className="mt-6 h-3 rounded-full bg-slate-300/80" />
          <div className="mt-2 grid grid-cols-12 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-slate-400/70"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.08 }}
              />
            ))}
          </div>
        </div>

        {/* Fluxo de ar */}
        <div aria-hidden className="relative mx-auto mt-1 flex h-28 w-4/5 justify-between">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="block h-10 w-[3px] origin-top animate-airflow rounded-full bg-gradient-to-b from-ice-300 to-transparent"
              style={{ animationDelay: `${(i % 3) * 0.4 + i * 0.07}s` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Cards flutuantes */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -left-2 bottom-14 flex border border-white/10 bg-night-800/90 backdrop-blur-md shadow-xl items-center gap-3 rounded-2xl px-4 py-3 sm:-left-10"
      >
        <ShieldCheck className="text-ice-400" size={22} />
        <div className="text-left">
          <p className="text-xs text-slate-400">Serviço com</p>
          <p className="text-sm font-semibold text-white">Garantia</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute -right-2 -bottom-2 flex border border-white/10 bg-night-800/90 backdrop-blur-md shadow-xl items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8"
      >
        <Zap className="text-yellow-300" size={22} />
        <div className="text-left">
          <p className="text-xs text-slate-400">Até 30% menos</p>
          <p className="text-sm font-semibold text-white">na conta de luz*</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(30,107,255,0.28),transparent_60%)]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <Snowfall />

      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.span variants={item} className="eyebrow">
            <Snowflake size={14} /> Climatização &amp; Manutenção
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ar-condicionado com <span className="text-gradient">padrão de engenharia</span>
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-slate-300 lg:mx-0">
            Instalação, lavagem, higienização e manutenção para residências e empresas. Ar mais puro, equipamento durando
            mais e conta de energia menor.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle size={20} /> Orçamento grátis no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver serviços <ArrowDown size={18} />
            </a>
          </motion.div>
          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start"
          >
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-ice-400" /> Responde muito rápido
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-ice-400" /> Técnicos uniformizados
            </li>
            <li className="flex items-center gap-2">
              <Snowflake size={16} className="text-ice-400" /> Todas as marcas
            </li>
          </motion.ul>
        </motion.div>

        <AcUnit />
      </div>
    </section>
  )
}
