import { motion, useReducedMotion } from 'framer-motion'
import Logo from '../components/Logo'
import { PrimaryCTA, SecondaryCTA } from '../components/UI'

function ProfileArtwork() {
  return (
    <div className="portrait-stage" aria-hidden="true">
      <div className="portrait-grid" />
      <div className="portrait-halo" />
      <svg viewBox="0 0 420 500" className="portrait-svg">
        <defs>
          <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#e8e8e8" />
            <stop offset="1" stopColor="#767676" />
          </linearGradient>
          <linearGradient id="shirt" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#1a1a1a" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
          <filter id="soft"><feGaussianBlur stdDeviation="9" /></filter>
        </defs>
        <ellipse cx="220" cy="462" rx="155" ry="26" fill="#fff" opacity=".06" filter="url(#soft)" />
        <path d="M112 488c5-99 40-160 107-169 78-11 139 55 153 169H112Z" fill="url(#shirt)" />
        <path d="M163 210c0-85 36-137 101-137 64 0 103 51 103 134 0 75-35 135-101 135-64 0-103-55-103-132Z" fill="url(#skin)" />
        <path d="M154 212c-8-74 21-159 111-159 77 0 115 53 110 117-17-13-39-26-60-27-45-3-52-16-81-27-10 29-37 65-80 96Z" fill="#111" />
        <path d="M161 223c4 29 11 50 25 72" stroke="#bbb" strokeWidth="8" strokeLinecap="round" opacity=".35" />
        <path d="M360 215c-2 30-10 52-24 76" stroke="#858585" strokeWidth="8" strokeLinecap="round" opacity=".3" />
        <path d="M217 230c12-5 24-6 36 0M290 230c12-5 24-6 36 0" stroke="#1f1f1f" strokeWidth="6" strokeLinecap="round" />
        <path d="M274 248c-1 19-4 34-11 46 10 4 19 4 27 0" stroke="#4a4a4a" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".55" />
        <path d="M230 310c22 14 47 15 71 1" stroke="#2a2a2a" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
      <div className="portrait-vignette" />
      <div className="portrait-caption portrait-caption-top"><span>Direção</span><strong>01</strong></div>
      <div className="portrait-caption portrait-caption-bottom"><span>Narrativa</span><strong>02</strong></div>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="top" className="hero section-pad">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div className="hero-kicker" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="dot" /> Audiovisual & alta performance
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
            Sua imagem define a primeira leitura do seu <span className="text-muted">valor.</span>
          </motion.h1>
          <motion.p className="hero-lead" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}>
            Construa um posicionamento magnético com direção visual, narrativa e produções audiovisuais que transformam atenção em percepção — e percepção em oportunidade.
          </motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}>
            <PrimaryCTA />
            <SecondaryCTA />
          </motion.div>
          <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.7, delay: 0.38 }}>
            <div><strong>1:1</strong><span>Acompanhamento individual</span></div>
            <div><strong>360°</strong><span>Posicionamento + execução</span></div>
            <div><strong>∞</strong><span>Sistema, não fórmula pronta</span></div>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 28 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="profile-card">
            <div className="profile-card-header">
              <div><span className="profile-overline">Creative direction / 001</span><strong>@osaulofigueiredo</strong></div>
              <span className="status-dot">AO VIVO</span>
            </div>
            <ProfileArtwork />
            <div className="profile-card-footer">
              <div><span>Posicionamento</span><strong>ALTA PERFORMANCE</strong></div>
              <div className="profile-symbol"><Logo /></div>
            </div>
          </div>
          <div className="floating-note note-one">Percepção antes de promoção.</div>
          <div className="floating-note note-two">Forma + mensagem + oferta.</div>
        </motion.div>
      </div>
      <div className="container hero-marquee" aria-hidden="true">
        <span>POSICIONAMENTO</span><i /><span>DIREÇÃO CRIATIVA</span><i /><span>STORYTELLING</span><i /><span>MONETIZAÇÃO</span>
      </div>
    </section>
  )
}
