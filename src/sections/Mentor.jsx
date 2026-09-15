import { WHATSAPP_URL } from '../content'
import '../styles/start-now.css'

export default function Mentor() {
  return (
    <section id="mentoria" className="start-now" aria-labelledby="start-now-title">
      <div className="start-now-stage">
        <img className="start-now-phone" src="/brand/digital-phone.webp" alt="" aria-hidden="true" width="736" height="1308" loading="lazy" />
        <img className="start-now-portrait" src="/brand/saulo-mentoria.webp" alt="Saulo Figueiredo" width="1086" height="1448" loading="lazy" />
        <div className="start-now-heading">
          <h2 id="start-now-title"><span>Start</span><span>Now</span></h2>
          <span className="start-now-label">Mentoria</span>
          <div className="start-now-marks" aria-hidden="true">
            {[0, 1, 2].map(i => <img key={i} src="/brand/sf-mark.png" alt="" width="28" height="28" />)}
          </div>
        </div>
        <a className="start-now-callout" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Conheça o caminho que me levou a sair da CLT aos 19 anos e trabalhar com serviços digitais
        </a>
      </div>
    </section>
  )
}
