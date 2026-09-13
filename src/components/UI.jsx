import { ArrowDown, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { WHATSAPP_URL } from '../content'

const MotionDiv = motion.div

export function SectionEyebrow({ children, index }) {
  return (
    <div className="section-eyebrow">
      {index && <span>{index}</span>}
      <span>{children}</span>
    </div>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()
  return (
    <MotionDiv
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  )
}

export function PrimaryCTA({ children = 'Aplicar para mentoria', className = '' }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`button button-primary ${className}`}
    >
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={1.8} />
    </a>
  )
}

export function SecondaryCTA({ href = '#metodo', children = 'Conhecer o método' }) {
  return (
    <a href={href} className="button button-secondary">
      <span>{children}</span>
      <ArrowDown size={16} strokeWidth={1.8} />
    </a>
  )
}
