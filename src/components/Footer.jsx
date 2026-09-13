import { INSTAGRAM_URL, WHATSAPP_URL } from '../content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <div>
            <strong>Saulo Figueiredo</strong>
            <span>Audiovisual & percepção de valor</span>
          </div>
        </div>
        <div className="footer-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Saulo Figueiredo.</span>
        <span>Design com intenção. Conteúdo com função.</span>
      </div>
    </footer>
  )
}
