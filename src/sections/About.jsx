import { ArrowUpRight } from 'lucide-react'
import Logo from '../components/Logo'
import { Eyebrow, Reveal } from '../components/UI'
import { INSTAGRAM_URL } from '../content'

export default function About() {
  return (
    <section id="sobre" className="section section-about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-mark">
          <Logo />
        </Reveal>

        <Reveal delay={0.08} className="about-copy">
          <Eyebrow index="03">Sobre</Eyebrow>
          <h2 id="about-title">Saulo Figueiredo</h2>
          <p className="about-role">Audiovisual, direção visual e posicionamento.</p>
          <p>
            O trabalho conecta narrativa, imagem e intenção para que o conteúdo tenha uma leitura clara e coerente com aquilo que precisa comunicar.
          </p>
          <p>
            O audiovisual serve ao posicionamento; o posicionamento orienta a percepção; e cada escolha visual precisa ter uma função.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-link">
            @osaulofigueiredo <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
