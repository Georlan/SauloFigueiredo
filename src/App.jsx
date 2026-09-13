import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Method from './sections/Method'
import Showcase from './sections/Showcase'
import Mentor from './sections/Mentor'
import About from './sections/About'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Method />
        <Showcase />
        <Mentor />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
