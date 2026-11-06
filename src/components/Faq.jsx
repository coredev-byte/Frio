import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'

const faqs = [
  {
    q: 'De quanto em quanto tempo devo higienizar o ar-condicionado?',
    a: 'Para uso residencial, o ideal é a cada 6 meses. Em comércios, clínicas ou ambientes com muito uso, a recomendação é a cada 3 meses.',
  },
  {
    q: 'A higienização faz sujeira no ambiente?',
    a: 'Não. Usamos bolsa coletora e proteção nas paredes e móveis. Ao final, o local é deixado limpo.',
  },
  {
    q: 'Vocês atendem empresas?',
    a: 'Sim. Atendemos residências, comércios e empresas, inclusive com contratos de manutenção periódica e PMOC.',
  },
  {
    q: 'Quais marcas vocês atendem?',
    a: 'Trabalhamos com todas as principais marcas do mercado: LG, Samsung, Midea, Springer, Gree, Elgin, Daikin, Fujitsu e outras.',
  },
  {
    q: 'Como peço um orçamento?',
    a: 'É só tocar no botão do WhatsApp. A mensagem já vai pronta e respondemos rapidinho.',
  },
]

function Item({ q, a, open, onClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium text-white">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="shrink-0 text-ice-400">
          <Plus />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-24">
      <div className="container-x max-w-3xl">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <Reveal className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
