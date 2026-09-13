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
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PrimaryCTA({ children = 'Conversar com o Saulo', className = '' }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`button button-primary ${className}`}>
      <span>{children}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  )
}

export function SecondaryCTA({ href = '#abordagem', children = 'Conhecer a abordagem' }) {
  return (
    <a href={href} className="button button-secondary">
      <span>{children}</span>
      <ArrowDown size={16} aria-hidden="true" />
    </a>
  )
}
