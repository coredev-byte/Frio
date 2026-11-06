import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { HeartPulse, PiggyBank, Timer, BadgeCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { waLink } from '../config'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('pt-BR') + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix])
  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { to: 1100, suffix: '+', label: 'seguidores acompanhando o trabalho' },
  { to: 30, suffix: '%', label: 'de economia de energia com aparelho limpo*' },
  { to: 6, suffix: ' meses', label: 'intervalo ideal entre higienizações' },
]

const perks = [
  { icon: HeartPulse, title: 'Saúde em primeiro lugar', text: 'Ar livre de fungos e bactérias reduz rinite, alergias e crises respiratórias.' },
  { icon: PiggyBank, title: 'Economia real', text: 'Filtros e serpentinas limpos fazem o compressor trabalhar menos.' },
  { icon: Timer, title: 'Atendimento ágil', text: 'Orçamento pelo WhatsApp em minutos e agendamento flexível.' },
  { icon: BadgeCheck, title: 'Padrão de engenharia', text: 'Procedimentos técnicos, ferramentas certas e acabamento caprichado.' },
]

const signs = [
  'Cheiro de mofo ao ligar',
  'Gelando menos que antes',
  'Pingando água dentro do ambiente',
  'Barulho ou vibração estranha',
  'Conta de luz subiu sem motivo',
  'Mais de 6 meses sem limpeza',
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      <div className="container-x">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-night-800/60 p-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle eyebrow="Por que a TCLIMA" title="Mais do que gelar: cuidar do ar que você respira" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-ice-400/40">
                  <p.icon className="text-ice-400" size={28} />
                  <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/tecnico.jpg"
                alt="Técnico da TCLIMA realizando manutenção em ar-condicionado split"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/10 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm text-slate-200">
                Equipe própria, uniformizada e identificada em cada atendimento.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <AlertTriangle size={14} /> Fique atento
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              Sinais de que seu ar está pedindo ajuda
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3 text-slate-200">
                  <CheckCircle2 size={18} className="shrink-0 text-ice-400" /> {s}
                </li>
              ))}
            </ul>
            <a
              href={waLink('Olá, TCLIMA! Meu ar-condicionado está com problema e gostaria de uma avaliação.')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Agendar avaliação
            </a>
          </Reveal>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          *Estimativa de mercado para aparelhos com manutenção em dia; varia conforme modelo e uso.
        </p>
      </div>
    </section>
  )
}
