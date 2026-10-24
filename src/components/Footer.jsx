
import Logo from './Logo'
import { INSTAGRAM_URL, whatsAppUrl, YOUTUBE_CHANNEL_URL, TIKTOK_URL } from '../siteData'
export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="site-footer-main">
      <a href="/" className="site-footer-logo"><Logo /><span>Saulo Figueiredo</span></a>
      <nav aria-label="Navegação do rodapé">
        <a href="/portfolio">Portfólio</a><a href="/#servicos">Serviços</a><a href="/mentoria">Mentoria e e-book</a>
        <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
        {YOUTUBE_CHANNEL_URL && <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">YouTube</a>}
        {TIKTOK_URL && <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">TikTok</a>}
      </nav>
    </div>
    <div className="site-footer-bottom"><span>© {new Date().getFullYear()} Saulo Figueiredo</span><span>Direção audiovisual · Ceará</span></div>
  </div></footer>
}
