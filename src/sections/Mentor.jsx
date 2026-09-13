import { CirclePlay, MessageCircle, PenTool } from 'lucide-react'
import { PrimaryCTA, Reveal, SectionEyebrow } from '../components/UI'

export default function Mentor() {
  return (
    <section id="mentoria" className="section-pad mentor-section">
      <div className="container mentor-grid">
        <Reveal className="mentor-statement-wrap">
          <SectionEyebrow index="03">Mentoria individual</SectionEyebrow>
          <div className="mentor-statement">
            <span className="quote-mark">“</span>
            <blockquote>O objetivo não é te entregar um feed pronto. É fazer você entender por que cada escolha visual, narrativa e comercial existe.</blockquote>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="mentor-content">
          <span className="mentor-label">Acompanhamento estratégico</span>
          <h2>Clareza para decidir. Repertório para executar.</h2>
          <p>A mentoria parte do seu momento atual e constrói um plano de evolução realista. Em vez de copiar estética alheia, você desenvolve critérios para criar uma linguagem própria e conectá-la a uma oferta clara.</p>
          <div className="mentor-features">
            <div><PenTool size={18} /><span>Direção criativa aplicada</span></div>
            <div><CirclePlay size={18} /><span>Análise de conteúdo</span></div>
            <div><MessageCircle size={18} /><span>Feedback individual</span></div>
          </div>
          <PrimaryCTA>Conversar com o Saulo</PrimaryCTA>
        </Reveal>
      </div>
    </section>
  )
}
