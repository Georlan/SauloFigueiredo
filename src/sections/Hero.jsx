import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PrimaryCTA } from '../components/UI'

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '7%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.72])

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26, filter: 'blur(5px)' },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.88, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={sectionRef} id="top" className="hero" aria-labelledby="hero-title">
      <motion.img
        className="hero-image"
        src="/brand/saulo-hero.webp"
        alt="Saulo Figueiredo usando fones de ouvido diante de uma paisagem urbana ao pôr do sol"
        width="1916"
        height="821"
        fetchPriority="high"
        style={reduceMotion ? undefined : { y: imageY }}
        initial={reduceMotion ? false : { scale: 1.045 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="hero-scrim" />

      <motion.div
        className="container hero-content"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="hero-copy">
          <motion.p id="hero-title" className="hero-service" {...entrance(0.15)}>
            Serviços - Filmmaker | CE
          </motion.p>
          <motion.div className="hero-actions" {...entrance(0.28)}>
            <PrimaryCTA>Pedir Orçamento</PrimaryCTA>
          </motion.div>
        </div>

        <motion.div className="hero-foot" {...entrance(0.45)} aria-hidden="true">
          <span>Imagem</span><i />
          <span>Narrativa</span><i />
          <span>Intenção</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
