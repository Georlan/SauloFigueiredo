import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../content'
import { Reveal, SectionEyebrow } from '../components/UI'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className="faq-icon"><ChevronDown size={19} /></span>
      </button>
      <div className="faq-answer" aria-hidden={!isOpen}><div><p>{item.answer}</p></div></div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section-pad faq-section">
      <div className="container faq-grid">
        <Reveal>
          <SectionEyebrow index="05">FAQ</SectionEyebrow>
          <h2>Antes de aplicar.</h2>
          <p className="section-copy">Algumas respostas para entender rapidamente se o formato faz sentido para o seu momento.</p>
        </Reveal>
        <Reveal delay={0.08} className="faq-list">
          {faqs.map((item, index) => <FAQItem key={item.question} item={item} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />)}
        </Reveal>
      </div>
    </section>
  )
}
