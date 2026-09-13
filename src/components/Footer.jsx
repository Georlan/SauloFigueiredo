import { INSTAGRAM_URL, WHATSAPP_URL } from '../content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a href="#top" className="footer-brand" aria-label="Saulo Figueiredo — voltar ao início">
          <Logo />
          <span>Saulo Figueiredo</span>
        </a>
        <div className="footer-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Saulo Figueiredo</span>
        <span>Audiovisual · Direção · Narrativa</span>
      </div>
    </footer>
  )
}
