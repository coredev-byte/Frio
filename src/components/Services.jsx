import { motion } from 'framer-motion'
import { Wrench, Droplets, Settings2, Building2, ArrowUpRight } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { waLink } from '../config'

const services = [
  {
    icon: Wrench,
    title: 'Instalação',
    text: 'Instalação de split, hi-wall, piso-teto e cassete com infraestrutura completa, vácuo na linha e teste de estanqueidade.',
    tags: ['Split', 'Inverter', 'Infraestrutura'],
    msg: 'Olá, TCLIMA! Vim pelo site e gostaria de um orçamento de INSTALAÇÃO de ar-condicionado.',
  },
  {
    icon: Droplets,
    title: 'Lavagem e Higienização',
    text: 'Limpeza profunda de serpentina, bandeja e turbina com produtos bactericidas. Elimina fungos, ácaros e mau cheiro.',
    tags: ['Bactericida', 'Antiácaro', 'Sem cheiro'],
    msg: 'Olá, TCLIMA! Vim pelo site e gostaria de agendar uma LAVAGEM/HIGIENIZAÇÃO do meu ar-condicionado.',
  },
  {
    icon: Settings2,
    title: 'Manutenção',
    text: 'Preventiva e corretiva: diagnóstico, carga de gás, troca de componentes e revisão elétrica para o aparelho não parar.',
    tags: ['Preventiva', 'Corretiva', 'Carga de gás'],
    msg: 'Olá, TCLIMA! Vim pelo site e preciso de MANUTENÇÃO no meu ar-condicionado.',
  },
  {
    icon: Building2,
    title: 'Empresas e Comércios',
    text: 'Contratos de manutenção periódica e PMOC para lojas, escritórios e clínicas, com relatório de cada visita.',
    tags: ['PMOC', 'Contrato', 'Relatórios'],
    msg: 'Olá, TCLIMA! Vim pelo site e gostaria de um orçamento de manutenção para minha EMPRESA.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="container-x">
        <SectionTitle
          eyebrow="Serviços"
          title="Tudo o que seu ar-condicionado precisa"
          subtitle="Do primeiro furo na parede à manutenção de rotina, com o mesmo cuidado técnico."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.a
                href={waLink(s.msg)}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-night-800 to-night-900 p-7 transition-colors hover:border-brand-400/50"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/25" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-ice-400 ring-1 ring-brand-400/30 transition group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                    <s.icon size={26} />
                  </div>
                  <ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ice-300" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="relative mt-3 text-slate-400">{s.text}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="relative mt-6 text-sm font-semibold text-ice-400">Pedir orçamento deste serviço →</p>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
