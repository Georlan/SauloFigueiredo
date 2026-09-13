import { motion, useReducedMotion } from 'framer-motion'
import { PrimaryCTA, SecondaryCTA } from '../components/UI'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <motion.img
        className="hero-image"
        src="/brand/saulo-hero.webp"
        alt="Saulo Figueiredo usando fones de ouvido diante de uma paisagem urbana ao pôr do sol"
        width="1916"
        height="821"
        fetchPriority="high"
        initial={reduceMotion ? false : { scale: 1.04 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="hero-scrim" />

      <div className="container hero-content">
        <div className="hero-copy">
          <motion.p className="hero-kicker" {...entrance(0.08)}>
            Saulo Figueiredo <span /> Direção audiovisual
          </motion.p>
          <motion.h1 id="hero-title" {...entrance(0.15)}>
            Sua imagem define a primeira leitura do seu <em>valor.</em>
          </motion.h1>
          <motion.p className="hero-lead" {...entrance(0.24)}>
            Direção visual, narrativa e audiovisual para construir uma presença com intenção — da ideia à execução.
          </motion.p>
          <motion.div className="hero-actions" {...entrance(0.33)}>
            <PrimaryCTA />
            <SecondaryCTA />
          </motion.div>
        </div>

        <motion.div className="hero-foot" {...entrance(0.45)} aria-hidden="true">
          <span>Imagem</span><i />
          <span>Narrativa</span><i />
          <span>Intenção</span>
        </motion.div>
      </div>
    </section>
  )
}
