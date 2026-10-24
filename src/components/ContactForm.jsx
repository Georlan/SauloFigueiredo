
import { useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { whatsAppUrl } from '../siteData'

const topics = ['Produção audiovisual', 'Conteúdo para redes sociais', 'Mentoria', 'Outro projeto']

export default function ContactForm() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState(topics[0])
  const [city, setCity] = useState('')
  const [details, setDetails] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim()) return
    const message = [
      'Olá, Saulo! Meu nome é ' + name.trim() + '.',
      'Tenho interesse em: ' + topic + '.',
      city.trim() ? 'Cidade/local: ' + city.trim() + '.' : '',
      details.trim() ? 'Sobre o projeto: ' + details.trim() : '',
      'Podemos conversar?',
    ].filter(Boolean).join('\n')
    window.location.assign(whatsAppUrl(message))
  }
  return <section className="contact-section" id="contato" aria-labelledby="contact-title">
    <div className="container contact-layout">
      <div className="contact-intro"><p className="site-overline">Contato</p><h2 id="contact-title">Vamos conversar sobre o seu projeto?</h2><p>Conte o básico. A mensagem será preparada para você enviar pelo WhatsApp.</p></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field"><label htmlFor="contact-name">Seu nome *</label><input id="contact-name" name="name" autoComplete="name" maxLength="100" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos chamar você?" required /></div>
        <div className="form-field"><label htmlFor="contact-topic">O que você procura?</label><select id="contact-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>{topics.map((option) => <option key={option}>{option}</option>)}</select></div>
        <div className="form-field"><label htmlFor="contact-city">Cidade ou local <span className="field-optional">opcional</span></label><input id="contact-city" name="city" autoComplete="address-level2" maxLength="100" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Onde será o projeto?" /></div>
        <div className="form-field"><label htmlFor="contact-details">Conte um pouco da sua ideia <span className="field-optional">opcional</span></label><textarea id="contact-details" name="details" rows="3" maxLength="1200" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="O que você pretende produzir?" /></div>
        <button className="contact-submit" type="submit"><MessageCircle size={20} aria-hidden="true" /><span>Preparar mensagem</span><ArrowUpRight aria-hidden="true" /></button>
        <p className="contact-privacy">Nenhum dado é armazenado nesta página. Você confirma o envio no WhatsApp.</p>
      </form>
    </div>
  </section>
}
