import { pillars } from '../content'
import { Reveal, SectionEyebrow } from '../components/UI'

export default function Method() {
  return (
    <section id="metodo" className="section-pad method-section">
      <div className="container">
        <div className="section-heading-grid">
          <Reveal>
            <SectionEyebrow index="01">O método</SectionEyebrow>
            <h2>Não é sobre parecer bonito. É sobre parecer <span className="text-muted">inevitável.</span></h2>
          </Reveal>
          <Reveal delay={0.08} className="section-copy-wrap">
            <p className="section-copy">O conteúdo certo alinha o que você entrega, o que o público percebe e a ação que você quer gerar. O método organiza essas camadas para que estética e estratégia trabalhem juntas.</p>
          </Reveal>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="pillar-card">
                  <div className="pillar-top"><span className="pillar-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="pillar-number">{pillar.number}</span></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <div className="pillar-line" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
