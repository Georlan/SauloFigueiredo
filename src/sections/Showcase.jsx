import { useRef } from 'react'
import { ArrowRight, Check, Layers3, Sparkles, Workflow } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SectionEyebrow } from '../components/UI'

function Item({ children }) {
  return <li><Check size={15} strokeWidth={1.8} /><span>{children}</span></li>
}

export default function Showcase() {
  const targetRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%'])
  return (
    <section id="produtos" ref={targetRef} className="showcase-shell">
      <div className="showcase-sticky">
        <div className="container showcase-heading">
          <SectionEyebrow index="02">Produtos e módulos</SectionEyebrow>
          <div className="showcase-heading-row"><h2>Do diagnóstico à execução.</h2><span className="showcase-scroll-hint">Role para explorar <ArrowRight size={16} /></span></div>
        </div>
        <div className="showcase-viewport">
          <motion.div className="showcase-track" style={{ x: reduceMotion ? '0%' : x }}>
            <article className="module-card">
              <div className="module-visual"><div className="module-index">01</div><div className="module-icon"><Sparkles size={36} strokeWidth={1.25} /></div><div className="module-grid-lines" /><span className="module-code">SF / SYSTEM / 01</span></div>
              <div className="module-content"><span className="module-kicker">Flagship</span><h3>Mentoria 1 a 1</h3><p>Acompanhamento individual para diagnosticar posicionamento, organizar narrativa e direcionar o audiovisual.</p><ul><Item>Análise de perfil e posicionamento</Item><Item>Direção criativa aplicada ao seu contexto</Item><Item>Reuniões estratégicas e plano de ação</Item></ul></div>
            </article>
            <article className="module-card">
              <div className="module-visual"><div className="module-index">02</div><div className="module-icon"><Layers3 size={36} strokeWidth={1.25} /></div><div className="module-grid-lines" /><span className="module-code">SF / SYSTEM / 02</span></div>
              <div className="module-content"><span className="module-kicker">Toolkit visual</span><h3>Dark Aesthetic Presets</h3><p>Uma base visual para acelerar tratamento e manter consistência de cor entre peças.</p><ul><Item>Base monocromática e cinematográfica</Item><Item>Consistência visual entre conteúdos</Item><Item>Fluxo mais rápido de pós-produção</Item></ul></div>
            </article>
            <article className="module-card">
              <div className="module-visual"><div className="module-index">03</div><div className="module-icon"><Workflow size={36} strokeWidth={1.25} /></div><div className="module-grid-lines" /><span className="module-code">SF / SYSTEM / 03</span></div>
              <div className="module-content"><span className="module-kicker">Creative OS</span><h3>Sistema para creators</h3><p>Templates e fluxos de produção para organizar ideias, roteiros, gravações e publicação.</p><ul><Item>Framework de roteiros e storytelling</Item><Item>Pipeline editorial no Notion</Item><Item>Biblioteca de ideias e referências</Item></ul></div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
