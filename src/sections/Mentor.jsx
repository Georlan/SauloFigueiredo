import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { WHATSAPP_URL } from '../content'
import '../styles/start-now.css'

export default function Mentor() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], ['6%', '-5%'])
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-3%', '4%'])
  const headingY = useTransform(scrollYProgress, [0.18, 0.7], ['4%', '-2%'])

  const reveal = (delay = 0, x = 0, y = 24, withBlur = true) => ({
    initial: reduceMotion ? false : {
      opacity: 0,
      x,
      y,
      ...(withBlur ? { filter: 'blur(5px)' } : {}),
    },
    whileInView: reduceMotion ? undefined : {
      opacity: 1,
      x: 0,
      y: 0,
      ...(withBlur ? { filter: 'blur(0px)' } : {}),
    },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={sectionRef} id="mentoria" className="start-now" aria-labelledby="start-now-title">
      <div className="start-now-stage">
        <motion.img
          className="start-now-phone"
          src="/brand/digital-phone.webp"
          alt=""
          aria-hidden="true"
          width="736"
          height="1308"
          loading="lazy"
          style={reduceMotion ? { rotate: -19 } : { y: phoneY, rotate: -19 }}
          {...reveal(0.05, -36, 20, false)}
        />
        <motion.img
          className="start-now-portrait"
          src="/brand/saulo-mentoria.webp"
          alt="Saulo Figueiredo"
          width="1086"
          height="1448"
          loading="lazy"
          style={reduceMotion ? undefined : { y: portraitY }}
          {...reveal(0.12, 38, 18, false)}
        />

        <motion.div
          className="start-now-heading"
          style={reduceMotion ? undefined : { y: headingY }}
        >
          <h2 id="start-now-title" aria-label="Start Now">
            <motion.span {...reveal(0.08, -12, 20)}>Start</motion.span>
            <motion.span {...reveal(0.17, 18, 20)}>Now</motion.span>
          </h2>
          <motion.span className="start-now-label" {...reveal(0.28, 10, 10)}>Mentoring</motion.span>
          <motion.div className="start-now-marks" aria-hidden="true" {...reveal(0.32, -8, 10)}>
            {[0, 1, 2].map(i => <img key={i} src="/brand/sf-mark.png" alt="" width="28" height="28" />)}
          </motion.div>
        </motion.div>

        <motion.a
          className="start-now-callout"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          {...reveal(0.36, 0, 28)}
          whileHover={reduceMotion ? undefined : { y: -4, scale: 1.008 }}
          whileTap={reduceMotion ? undefined : { scale: 0.992 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        >
          Conheça o caminho que me levou a sair da CLT aos 18 anos e trabalhar com serviços digitais
        </motion.a>
      </div>
    </section>
  )
}
