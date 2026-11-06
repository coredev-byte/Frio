import { motion } from 'framer-motion'
import { MessageCircle, ClipboardList, Wrench, Sparkles } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'

const steps = [
  { icon: MessageCircle, title: 'Chame no WhatsApp', text: 'Conte o que precisa e envie uma foto do aparelho, se puder.' },
  { icon: ClipboardList, title: 'Orçamento rápido', text: 'Valor claro, sem surpresa, e o melhor horário para você.' },
  { icon: Wrench, title: 'Execução técnica', text: 'Serviço feito com cuidado, proteção do ambiente e limpeza no final.' },
  { icon: Sparkles, title: 'Ar puro e garantia', text: 'Aparelho testado na sua frente e serviço com garantia.' },
]

export default function Process() {
  return (
    <section id="processo" className="py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Como funciona" title="Simples do começo ao fim" />
        <div className="relative mt-16">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px origin-left bg-gradient-to-r from-brand-500 via-ice-400 to-brand-500 lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.15} className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-night-800 text-ice-400 ring-1 ring-brand-400/40">
                  <s.icon size={26} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-slate-400">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
