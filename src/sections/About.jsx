import { ArrowRight, Instagram } from 'lucide-react'
import Logo from '../components/Logo'
import { Reveal, SectionEyebrow } from '../components/UI'
import { INSTAGRAM_URL } from '../content'

export default function About() {
  return (
    <section id="sobre" className="section-pad about-section">
      <div className="container about-grid">
        <Reveal className="about-visual-wrap">
          <div className="about-visual">
            <div className="about-monogram">SF</div>
            <Logo className="about-logo" />
            <span className="about-coord about-coord-a">EST. / VISUAL SYSTEM</span>
            <span className="about-coord about-coord-b">SAULO FIGUEIREDO</span>
            <span className="about-crosshair">+</span>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="about-copy">
          <SectionEyebrow index="04">Sobre</SectionEyebrow>
          <h2>Saulo Figueiredo</h2>
          <p className="about-role">Audiovisual & percepção de valor</p>
          <p>O trabalho do Saulo conecta direção visual, narrativa e posicionamento para construir presença digital com mais intenção. A ideia central é simples: uma câmera melhor não corrige uma mensagem confusa — primeiro vem a leitura que você quer provocar, depois a técnica que sustenta essa leitura.</p>
          <p>Minimalismo, consistência e atenção aos detalhes entram como linguagem, não como fim. O audiovisual serve ao posicionamento; o posicionamento serve à percepção; e a percepção precisa conversar com o modelo de negócio.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-link"><Instagram size={17} />@osaulofigueiredo<ArrowRight size={15} /></a>
        </Reveal>
      </div>
    </section>
  )
}
