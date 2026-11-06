import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { waLink } from '../config'

function WhatsAppIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.296.6 4.537 1.74 6.514L3 29l6.662-1.708A12.94 12.94 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.636a10.6 10.6 0 0 1-5.41-1.48l-.388-.23-3.953 1.014 1.055-3.85-.253-.396A10.58 10.58 0 0 1 5.364 16c0-5.866 4.774-10.636 10.64-10.636 5.866 0 10.632 4.77 10.632 10.636 0 5.866-4.766 10.636-10.632 10.636Zm5.832-7.966c-.32-.16-1.89-.932-2.183-1.04-.293-.106-.506-.16-.72.16-.212.32-.825 1.04-1.012 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.896-1.778-2.216-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.306.16.213 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.016.127.615-.092 1.89-.772 2.157-1.518.266-.746.266-1.386.186-1.52-.08-.132-.293-.212-.613-.372Z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [bubble, setBubble] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setBubble(true), 3500)
    const hide = setTimeout(() => setBubble(false), 12000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative max-w-[240px] rounded-2xl rounded-br-sm bg-white p-4 pr-8 text-sm text-slate-700 shadow-2xl"
          >
            <button
              aria-label="Fechar"
              onClick={() => setBubble(false)}
              className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
            <p className="font-semibold text-slate-900">TCLIMA 👋</p>
            <p className="mt-1">Olá! Precisa de instalação ou limpeza? Fale com a gente agora.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 animate-ring rounded-full bg-[#25D366]" />
        <span className="relative">
          <WhatsAppIcon />
        </span>
      </motion.a>
    </div>
  )
}
