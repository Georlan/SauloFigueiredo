import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { WHATSAPP_URL } from '../content'

export function Eyebrow({ children, index }) {
  return (
    <p className="eyebrow">
      {index && <span>{index}</span>}
      {children}
    </p>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PrimaryCTA({ children = 'Conversar com o Saulo', className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`button button-primary ${className}`}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.012 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      <span>{children}</span>
      <motion.span
        className="button-icon"
        aria-hidden="true"
        whileHover={reduceMotion ? undefined : { x: 2, y: -2 }}
      >
        <ArrowUpRight size={17} />
      </motion.span>
    </motion.a>
  )
}

export function SecondaryCTA({ href = '#abordagem', children = 'Conhecer a abordagem' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      className="button button-secondary"
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
    >
      <span>{children}</span>
      <span className="button-icon" aria-hidden="true"><ArrowDown size={16} /></span>
    </motion.a>
  )
}
