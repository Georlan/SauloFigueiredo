import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, WHATSAPP_URL } from '../content'
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
        <a href="#top" className="brand" aria-label="Saulo Figueiredo — início" onClick={() => setIsOpen(false)}>
          <Logo className="brand-mark" />
          <span>Saulo Figueiredo</span>
        </a>

        <div className="nav-links" aria-label="Seções">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-cta">
          Conversar <ArrowUpRight size={15} aria-hidden="true" />
        </a>

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
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mobile-contact" onClick={() => setIsOpen(false)}>
            Conversar no WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
