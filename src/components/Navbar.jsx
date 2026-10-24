
import { useEffect, useState } from 'react'
import { Instagram, Menu, MessageCircle, X } from 'lucide-react'
import Logo from './Logo'
import { INSTAGRAM_URL, TIKTOK_URL, navigation, whatsAppUrl } from '../siteData'

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.2 3c.5 2.3 1.8 3.7 4.3 4v3.2c-1.7 0-3.2-.5-4.3-1.4v6.1a6 6 0 1 1-5.1-5.9v3.3a2.8 2.8 0 1 0 1.9 2.6V3h3.2Z" /></svg>
}
function SocialLinks({ mobile = false }) {
  return <div className={'social-actions' + (mobile ? ' social-actions-mobile' : '')} aria-label="Redes sociais">
    <a className="social-action whatsapp" href={whatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" title="WhatsApp"><MessageCircle aria-hidden="true" /></a>
    <a className="social-action" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Saulo" title="Instagram"><Instagram aria-hidden="true" /></a>
    {TIKTOK_URL
      ? <a className="social-action" href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok de Saulo" title="TikTok"><TikTokIcon /></a>
      : <span className="social-action social-pending" role="img" aria-label="TikTok: perfil oficial não vinculado" title="Link do TikTok a confirmar"><TikTokIcon /></span>}
  </div>
}
export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  return <header className={'site-header' + (open ? ' is-open' : '')}>
    <nav className="container site-nav" aria-label="Navegação principal">
      <a className="site-brand" href="/" onClick={() => setOpen(false)} aria-label="Saulo Figueiredo — início"><Logo className="site-brand-mark" /><span>Saulo Figueiredo</span></a>
      <div className="site-nav-links">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
      <div className="site-header-actions"><SocialLinks />
        <button type="button" className="site-menu-trigger" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="site-mobile-menu">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </nav>
    <div className="site-mobile-menu" id="site-mobile-menu" hidden={!open}>
      <div className="container">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a href="/mentoria" onClick={() => setOpen(false)}>Mentoria e e-book</a><div className="site-mobile-social"><SocialLinks mobile /></div></div>
    </div>
  </header>
}
