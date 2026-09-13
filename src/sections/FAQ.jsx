import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../content'
import { Eyebrow, Reveal } from '../components/UI'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <h3>
        <button type="button" onClick={onToggle} aria-expanded={isOpen}>
          <span>{item.question}</span>
          <Plus size={20} aria-hidden="true" />
        </button>
      </h3>
      <div className="faq-answer" aria-hidden={!isOpen}>
        <div><p>{item.answer}</p></div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section-faq" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <Reveal className="faq-heading">
          <Eyebrow index="04">Perguntas</Eyebrow>
          <h2 id="faq-title">Antes de conversar.</h2>
        </Reveal>
        <Reveal delay={0.08} className="faq-list">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
