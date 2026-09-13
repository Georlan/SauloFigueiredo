import Logo from '../components/Logo'
import { PrimaryCTA, Reveal } from '../components/UI'

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" aria-labelledby="final-title">
      <div className="container final-cta-grid">
        <Reveal className="final-cta-mark">
          <Logo />
        </Reveal>
        <Reveal delay={0.08} className="final-cta-copy">
          <p className="eyebrow">Próximo passo</p>
          <h2 id="final-title">Sua comunicação já está dizendo alguma coisa. Escolha o quê.</h2>
          <p>Explique seu momento e entenda se a mentoria individual faz sentido para o seu próximo passo.</p>
          <PrimaryCTA>Conversar no WhatsApp</PrimaryCTA>
        </Reveal>
      </div>
    </section>
  )
}
