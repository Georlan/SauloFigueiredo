import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import '../styles/ebook.css'

const EBOOK_URL =
  'https://wa.me/5588999851852?text=Ol%C3%A1%20Saulo%2C%20quero%20adquirir%20o%20e-book%20Aumente%20Sua%20Renda%20com%20Servi%C3%A7os%20Digitais!'

export default function Ebook() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0, x = 0, y = 24) => ({
    initial: reduceMotion ? false : { opacity: 0, x, y, filter: 'blur(6px)' },
    whileInView: reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.28 },
    transition: { duration: 0.86, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="ebook" className="ebook-section" aria-labelledby="ebook-title">
      <div className="ebook-glow ebook-glow-a" aria-hidden="true" />
      <div className="ebook-glow ebook-glow-b" aria-hidden="true" />

      <div className="container ebook-layout">
        <motion.div className="ebook-cover-wrap" {...reveal(0.02, -40, 18)}>
          <motion.div
            className="ebook-cover-frame"
            whileHover={reduceMotion ? undefined : { y: -8, rotate: -0.5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <img
              src="/brand/ebook-aumente-sua-renda.webp"
              alt="Capa do e-book Aumente Sua Renda com Serviços Digitais"
              width="512"
              height="512"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <div className="ebook-copy">
          <motion.p className="ebook-kicker" {...reveal(0.08, 24, 12)}>E-book</motion.p>
          <motion.h2 id="ebook-title" {...reveal(0.14, 32, 16)}>
            E-book com metodologia prática de aumento de renda com serviços digitais.
          </motion.h2>
          <motion.p className="ebook-lead" {...reveal(0.2, 32, 18)}>
            Mudar sua realidade pode ser mais fácil do que você imagina. Construa seu futuro hoje.
          </motion.p>
          <motion.a
            className="ebook-cta"
            href={EBOOK_URL}
            target="_blank"
            rel="noreferrer"
            {...reveal(0.28, 28, 18)}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.012 }}
            whileTap={reduceMotion ? undefined : { scale: 0.988 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          >
            <span>Adquirir Produto</span>
            <ArrowUpRight aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
