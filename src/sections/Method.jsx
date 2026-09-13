import { approach } from '../content'
import { Eyebrow, Reveal } from '../components/UI'

export default function Method() {
  return (
    <section id="abordagem" className="section section-approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach-intro">
          <Reveal>
            <Eyebrow index="01">Abordagem</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="approach-title">Antes da técnica, vem a leitura que você quer provocar.</h2>
          </Reveal>
          <Reveal delay={0.12} className="approach-copy">
            <p>
              Uma câmera melhor não corrige uma mensagem confusa. Primeiro vem a direção; depois, as escolhas visuais e narrativas que sustentam essa direção.
            </p>
          </Reveal>
        </div>

        <div className="approach-list">
          {approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="approach-item">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
