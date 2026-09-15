import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import Method from './sections/Method'
import Mentor from './sections/Mentor'
import Ebook from './sections/Ebook'
import About from './sections/About'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <ScrollProgress />
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Mentor />
        <Ebook />
        <Method />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
