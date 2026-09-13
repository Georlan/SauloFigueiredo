import { mentoringSteps } from '../content'
import { Eyebrow, PrimaryCTA, Reveal } from '../components/UI'

export default function Mentor() {
  return (
    <section id="mentoria" className="section section-mentoring" aria-labelledby="mentoring-title">
      <div className="container mentoring-grid">
        <Reveal className="mentoring-heading">
          <Eyebrow index="02">Mentoria individual</Eyebrow>
          <h2 id="mentoring-title">Clareza para decidir. Repertório para executar.</h2>
        </Reveal>

        <Reveal delay={0.08} className="mentoring-body">
          <p className="mentoring-lead">
            Um acompanhamento construído a partir do seu momento atual para organizar posicionamento, narrativa e produção de conteúdo.
          </p>
          <ol className="mentoring-list">
            {mentoringSteps.map((item, index) => (
              <li key={item}><span>0{index + 1}</span>{item}</li>
            ))}
          </ol>
          <PrimaryCTA>Entender como funciona</PrimaryCTA>
        </Reveal>
      </div>
    </section>
  )
}
