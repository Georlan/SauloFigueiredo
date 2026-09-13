import { ArrowRight } from 'lucide-react'
import { navItems, WHATSAPP_URL } from '../content'
import Logo from './Logo'

export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="container nav" aria-label="Navegação principal">
        <a href="#top" className="brand" aria-label="Saulo Figueiredo — início">
          <Logo className="brand-mark" />
          <span className="brand-copy">
            <strong>Saulo Figueiredo</strong>
            <small>Audiovisual & percepção</small>
          </span>
        </a>
        <div className="nav-links" aria-label="Seções">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-cta">
          Aplicar <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  )
}
