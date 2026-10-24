
import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, Instagram, Youtube } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ContactForm from './components/ContactForm'
import Logo from './components/Logo'
import { FEATURED_VIDEO_TITLE, FEATURED_VIDEO_URL, INSTAGRAM_URL, portfolioProjects, whatsAppUrl, YOUTUBE_CHANNEL_URL } from './siteData'

function LinkCTA({ children, href, secondary = false, external = false }) {
  return <a className={'editorial-button' + (secondary ? ' editorial-button-outline' : '')} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><span>{children}</span><ArrowUpRight size={19} aria-hidden="true" /></a>
}

function LandingHero() {
  return <section id="top" className="landing-hero" aria-labelledby="home-heading">
    <img className="landing-hero-image" src="/brand/saulo-hero.webp" width="1916" height="821" alt="Saulo Figueiredo diante de uma paisagem urbana ao pôr do sol" fetchPriority="high" />
    <div className="landing-hero-shade" aria-hidden="true" />
    <div className="container landing-hero-inner"><div className="landing-hero-copy">
      <p className="site-overline">Filmmaker · Ceará</p><h1 id="home-heading">Direção audiovisual, do conceito à imagem.</h1>
      <p className="hero-description">Produção de vídeos e direção visual para dar forma à sua ideia.</p>
      <div className="hero-buttons"><LinkCTA href="/portfolio">Ver portfólio</LinkCTA><LinkCTA href="/#contato" secondary>Solicitar orçamento</LinkCTA></div>
    </div></div>
  </section>
}

function WorkPreview() {
  const hasWork = portfolioProjects.length > 0
  return <section className="work-section page-section" id="trabalhos" aria-labelledby="work-title"><div className="container">
    <div className="section-heading-row"><div><p className="site-overline">Portfólio</p><h2 id="work-title">O trabalho em primeiro plano.</h2></div><a className="text-action" href="/portfolio">Explorar portfólio <ArrowUpRight aria-hidden="true" /></a></div>
    {hasWork ? <div className="work-grid">{portfolioProjects.slice(0, 2).map((project) => <a key={project.title} className="work-tile" href={project.url || '/portfolio'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noopener noreferrer' : undefined}><img src={project.image} alt={project.title} loading="lazy" /><div><span>{project.category}</span><h3>{project.title}</h3></div></a>)}</div>
      : <div className="work-curation"><div className="work-curation-image" role="img" aria-label="Retrato de Saulo Figueiredo" /><div className="work-curation-copy"><h3>Uma seleção de projetos está sendo preparada.</h3><p>Quer conhecer trabalhos relacionados à sua ideia? Entre em contato diretamente.</p><a className="text-action" href={whatsAppUrl('Olá, Saulo! Gostaria de conhecer trabalhos audiovisuais relacionados ao meu projeto.')} target="_blank" rel="noopener noreferrer">Solicitar exemplos <ArrowUpRight aria-hidden="true" /></a></div></div>}
  </div></section>
}

const services = [
  { name: 'Direção visual', description: 'Conceito, enquadramento e escolhas de linguagem para cada projeto.' },
  { name: 'Captação e edição', description: 'Produção e montagem com atenção à imagem e ao ritmo.' },
  { name: 'Conteúdo digital', description: 'Vídeos pensados para os formatos e objetivos de cada publicação.' },
]
function Services() {
  return <section id="servicos" className="services-section page-section" aria-labelledby="services-title"><div className="container">
    <div className="section-heading-row"><div><p className="site-overline">Serviços</p><h2 id="services-title">Da direção à entrega.</h2></div><p className="section-aside">Trabalho audiovisual com decisões visuais orientadas pela mensagem.</p></div>
    <div className="services-list">{services.map((service, index) => <div className="service-line" key={service.name}><span className="service-index">0{index + 1}</span><h3>{service.name}</h3><p>{service.description}</p></div>)}</div>
  </div></section>
}

function YouTubeFeature() {
  const actionUrl = FEATURED_VIDEO_URL || YOUTUBE_CHANNEL_URL
  return <section id="youtube" className="youtube-section page-section" aria-labelledby="youtube-title"><div className="container youtube-layout">
    <div className="youtube-copy"><div className="youtube-heading"><Youtube aria-hidden="true" /><span>YouTube</span></div><h2 id="youtube-title">Uma câmera. Muitas formas de contar.</h2>
      {actionUrl ? <><p>{FEATURED_VIDEO_TITLE || 'Vídeos e conteúdos de Saulo Figueiredo.'}</p><LinkCTA href={actionUrl} external>{FEATURED_VIDEO_URL ? 'Assistir ao vídeo' : 'Visitar canal'}</LinkCTA></>
        : <><p>O espaço do canal está pronto para receber o link oficial e os vídeos selecionados.</p><span className="youtube-note">Canal ainda não vinculado</span></>}
    </div>
    <div className="youtube-visual"><img src="/brand/saulo-mentoria.webp" alt="Retrato de Saulo Figueiredo" width="1086" height="1448" loading="lazy" /><div className="youtube-visual-bottom"><span>Saulo Figueiredo</span><Youtube aria-hidden="true" /></div></div>
  </div></section>
}
function AboutSection() {
  return <section id="sobre" className="about-section page-section" aria-labelledby="about-title"><div className="container about-new-layout">
    <div className="about-symbol"><Logo alt="" /></div><div className="about-text"><p className="site-overline">Quem está por trás</p><h2 id="about-title">Saulo Figueiredo.</h2>
      <p>Filmmaker no Ceará. Meu trabalho reúne direção visual, captação e narrativa para transformar ideias em conteúdo audiovisual.</p>
      <a href={INSTAGRAM_URL} className="text-action" target="_blank" rel="noopener noreferrer">Acompanhar no Instagram <Instagram aria-hidden="true" /></a>
    </div>
  </div></section>
}
function MentoriaTeaser() {
  return <aside className="mentoria-teaser"><div className="container mentoria-teaser-inner"><div><span>Outro caminho</span><p>Mentoria e conteúdo sobre serviços digitais.</p></div><a className="text-action" href="/mentoria">Conhecer <ArrowRight aria-hidden="true" /></a></div></aside>
}
function HomePage() {
  return <><LandingHero /><WorkPreview /><Services /><YouTubeFeature /><AboutSection /><ContactForm /><MentoriaTeaser /></>
}
function PortfolioPage() {
  const hasWork = portfolioProjects.length > 0
  return <>
    <section className="interior-hero portfolio-intro" aria-labelledby="portfolio-title"><div className="container"><p className="site-overline">Portfólio / Audiovisual</p><h1 id="portfolio-title">Trabalhos e projetos.</h1><p>Uma seleção do olhar e da direção audiovisual de Saulo Figueiredo.</p></div></section>
    <section className="portfolio-content page-section" aria-label="Projetos"><div className="container">
      {hasWork ? <div className="work-grid portfolio-grid">{portfolioProjects.map((project) => <a className="work-tile" key={project.title} href={project.url || '#contato'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noopener noreferrer' : undefined}><img src={project.image} alt={project.title} loading="lazy" /><div><span>{project.category}</span><h2>{project.title}</h2></div></a>)}</div>
      : <div className="portfolio-empty"><img src="/brand/saulo-hero.webp" alt="Saulo Figueiredo em retrato com paisagem urbana" width="1916" height="821" /><div><p className="site-overline">Acervo em curadoria</p><h2>Os projetos estarão aqui em breve.</h2><p>Se você precisa de referências para um trabalho específico, pode solicitá-las diretamente.</p><LinkCTA href={whatsAppUrl('Olá, Saulo! Gostaria de ver exemplos do seu trabalho audiovisual.')} external>Solicitar trabalhos</LinkCTA></div></div>}
    </div></section><ContactForm />
  </>
}
function MentoriaPage() {
  return <>
    <section className="interior-hero mentoring-intro" aria-labelledby="mentoring-title"><div className="container mentoring-hero-grid"><div><p className="site-overline">Mentoria e serviços digitais</p><h1 id="mentoring-title">Start Now.</h1><p>Conheça o caminho que levou Saulo a sair da CLT aos 18 anos e trabalhar com serviços digitais.</p><LinkCTA href={whatsAppUrl('Olá, Saulo! Quero saber mais sobre sua mentoria.')} external>Conversar sobre mentoria</LinkCTA></div><img src="/brand/saulo-mentoria.webp" alt="Saulo Figueiredo" width="1086" height="1448" /></div></section>
    <section className="mentoria-book page-section"><div className="container mentoria-book-grid"><img src="/brand/ebook-aumente-sua-renda.webp" alt="Capa do e-book Aumente Sua Renda com Serviços Digitais" width="512" height="512" loading="lazy" /><div><p className="site-overline">E-book</p><h2>Aumente sua renda com serviços digitais.</h2><p>Material com uma metodologia prática voltada a serviços digitais.</p><LinkCTA href={whatsAppUrl('Olá, Saulo! Quero saber mais sobre o e-book Aumente Sua Renda com Serviços Digitais.')} external>Saiba mais</LinkCTA></div></div></section><ContactForm />
  </>
}
function NotFoundPage() {
  return <section className="interior-hero not-found"><div className="container"><h1>Página não encontrada.</h1><LinkCTA href="/">Voltar ao início</LinkCTA></div></section>
}
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const pageMeta = {
  '/': ['Saulo Figueiredo — Direção Audiovisual', 'Filmmaker no Ceará. Direção visual, captação e produção audiovisual. Conheça o trabalho e solicite um orçamento.'],
  '/portfolio': ['Portfólio — Saulo Figueiredo', 'Projetos e trabalhos audiovisuais de Saulo Figueiredo.'],
  '/mentoria': ['Mentoria e e-book — Saulo Figueiredo', 'Mentoria individual e conteúdo sobre serviços digitais com Saulo Figueiredo.'],
}
export default function App() {
  useEffect(() => {
    const [title, description] = pageMeta[path] || ['Página não encontrada — Saulo Figueiredo', 'Saulo Figueiredo — Direção Audiovisual']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [])
  return <div className="site-shell"><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><ScrollProgress /><Navbar /><main id="conteudo">{path === '/' ? <HomePage /> : path === '/portfolio' ? <PortfolioPage /> : path === '/mentoria' ? <MentoriaPage /> : <NotFoundPage />}</main><Footer /></div>
}
