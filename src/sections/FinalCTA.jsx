import Logo from '../components/Logo'
import { PrimaryCTA, Reveal, SectionEyebrow } from '../components/UI'

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <Reveal>
          <div className="final-cta-card">
            <div className="final-cta-mark"><Logo /></div>
            <SectionEyebrow>Próximo passo</SectionEyebrow>
            <h2>Sua comunicação já está dizendo alguma coisa. <span className="text-muted">Escolha o quê.</span></h2>
            <p>Converse com o Saulo, explique seu momento e entenda se a mentoria individual é a melhor próxima etapa para o seu posicionamento.</p>
            <div className="final-actions"><PrimaryCTA>Quero aplicar para a mentoria</PrimaryCTA><span>Atendimento direto via WhatsApp</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
