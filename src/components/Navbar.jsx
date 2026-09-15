import { useEffect, useState } from 'react'
import { Instagram, Menu, X, Youtube } from 'lucide-react'
import { INSTAGRAM_URL, navItems } from '../content'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  return (
    <header className={`nav-shell ${isOpen ? 'is-open' : ''}`}>
      <nav className="container nav" aria-label="Navegação principal">
        <a href="#top" className="brand brand-trio" aria-label="Saulo Figueiredo — início" onClick={() => setIsOpen(false)}>
          <Logo className="brand-mark" /><Logo className="brand-mark" /><Logo className="brand-mark" />
        </a>

        <div className="nav-links" aria-label="Seções">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>

        <div className="social-links" aria-label="Redes sociais">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" className="tiktok-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.2 3c.5 2.3 1.8 3.7 4.3 4v3.2c-1.7 0-3.2-.5-4.3-1.4v6.1a6 6 0 1 1-5.1-5.9v3.3a2.8 2.8 0 1 0 1.9 2.6V3h3.2Z" /></svg>
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!isOpen}>
        <div className="container mobile-menu-inner">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mobile-contact" onClick={() => setIsOpen(false)}>
            @osaulofigueiredo <Instagram aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
