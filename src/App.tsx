import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Clock3, Instagram, MapPin, Menu, Scissors, X } from 'lucide-react'
import { barbers, CONTACT, gallery, photo, services } from './config'

const nav = [['A casa', '#sobre'], ['Serviços', '#servicos'], ['A equipe', '#equipe'], ['Visita', '#visita']]
const wa = (text: string) => `https://wa.me/${CONTACT.barbershopWhatsApp}?text=${encodeURIComponent(text)}`

function Booking() {
  const [open, setOpen] = useState(false)
  const [service, setService] = useState('')
  const [barber, setBarber] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [review, setReview] = useState(false)
  const selected = services.find(item => item.name === service)
  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
  const today = new Date()
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const message = `Olá! Gostaria de solicitar um horário na BLACKJACK BARBER CLUB.\n\nServiço: ${service}\nBarbeiro: ${barber}\nData: ${date}\nHorário desejado: ${time}\nNome: ${name}\nTelefone: ${phone}\n\nSei que o horário só será confirmado pela barbearia após o contato.`
  return <>
    <button className="book-float" onClick={() => { setOpen(true); setReview(false) }} aria-label="Abrir formulário de agendamento"><CalendarDays size={18} /> <span>Marcar horário</span></button>
    {open && <div className="modal-shade" onMouseDown={event => event.target === event.currentTarget && setOpen(false)}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" aria-label="Fechar" onClick={() => setOpen(false)}><X /></button>
        {!review ? <>
          <div className="eyebrow">A PRÓXIMA CADEIRA É SUA</div><h2 id="booking-title">MARQUE SEU<br /><span>HORÁRIO.</span></h2>
          <p className="modal-note">Solicite pelo WhatsApp. A equipe confirma a disponibilidade com você.</p>
          <form onSubmit={event => { event.preventDefault(); const form = new FormData(event.currentTarget); setService(String(form.get('service'))); setBarber(String(form.get('barber'))); setDate(String(form.get('date'))); setTime(String(form.get('time'))); setName(String(form.get('name'))); setPhone(String(form.get('phone'))); setReview(true) }}>
            <label>01 / Serviço<select name="service" required value={service} onChange={event => setService(event.target.value)}><option value="">Escolha seu serviço</option>{services.map(item => <option key={item.name} value={item.name}>{item.name} — R$ {item.price}</option>)}</select></label>
            <label>02 / Barbeiro<select name="barber" required value={barber} onChange={event => setBarber(event.target.value)}><option value="">Quem cuida do corte?</option>{barbers.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}<option>Primeiro disponível</option></select></label>
            <div className="form-pair"><label>03 / Data<input name="date" required type="date" min={minDate} value={date} onChange={event => setDate(event.target.value)} /></label><label>04 / Horário<select name="time" required value={time} onChange={event => setTime(event.target.value)}><option value="">Escolha</option>{times.map(item => <option key={item}>{item}</option>)}</select></label></div>
            <div className="form-pair"><label>Seu nome<input name="name" required value={name} onChange={event => setName(event.target.value)} placeholder="Como podemos chamar você?" /></label><label>Seu telefone<input name="phone" required type="tel" value={phone} onChange={event => setPhone(event.target.value)} placeholder="(11) 99999-9999" /></label></div>
            <button className="btn-red form-submit" type="submit">Revisar pedido <ArrowRight size={17} /></button>
          </form>
        </> : <>
          <div className="eyebrow">CONFIRA OS DETALHES</div><h2 id="booking-title">SEU PEDIDO,<br /><span>NO CAPRICHO.</span></h2>
          <div className="review-box"><p><b>Serviço</b>{service} · R$ {selected?.price}</p><p><b>Profissional</b>{barber}</p><p><b>Data e hora</b>{date} às {time}</p><p><b>Contato</b>{name} · {phone}</p></div>
          <p className="modal-note">O horário ainda não está confirmado. A barbearia responde pelo WhatsApp para confirmar a disponibilidade.</p>
          <a className="btn-red form-submit" href={wa(message)} target="_blank" rel="noreferrer">Continuar no WhatsApp <ArrowRight size={17} /></a>
          <button className="edit-request" onClick={() => setReview(false)}>← Editar pedido</button>
        </>}
      </section>
    </div>}
  </>
}

function App() {
  const [menu, setMenu] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  return <>
    <header className="header"><a className="brand" href="#top" aria-label="Blackjack, início"><span className="brand-mark">BJ</span><span>BLACKJACK<small>BARBER CLUB · SP</small></span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? <X /> : <Menu />}</button>
      <nav className={menu ? 'nav nav-open' : 'nav'}><span className="sr-only">Navegação principal</span>{nav.map(([label, url], i) => <a key={url} href={url} onClick={() => setMenu(false)}><sup>0{i + 1}</sup>{label}</a>)}<button className="nav-book" onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}>AGENDAR <ArrowUpRight size={15} /></button></nav>
    </header>
    <main id="top">
      <section className="hero">
        <img className="hero-image" src={photo('photo-1503951914875-452162b0f3f1', 1800)} alt="Interior urbano de uma barbearia" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content"><div className="hero-kicker"><span /> RUA AUGUSTA, SÃO PAULO · DESDE 2018</div><h1>O CORTE<br />TEM <em>ATITUDE.</em></h1><p>Clássico na técnica.<br />Rua na essência.</p><button className="btn-red hero-cta" onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}>ESCOLHA SEU HORÁRIO <ArrowRight size={17} /></button></div>
        <div className="hero-side">CORTE BOM NÃO PRECISA DE LEGENDA <span>—</span> SÓ DE UMA CADEIRA LIVRE.</div>
        <a className="hero-scroll" href="#manifesto"><ArrowDown size={16} /> DESCE AÍ</a><div className="hero-index">001 <span>—</span> 007</div>
        <div className="hero-stamp"><Scissors size={20} /><span>SHARP<br />SINCE<br />2018</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, i) => <span key={i}>CORTE CLÁSSICO <b>✳</b> ATITUDE DE RUA <b>✳</b> SEM PRESSA, SEM ERRO <b>✳</b> BLACKJACK BARBER CLUB <b>✳</b> </span>)}</div></div>
      <section className="manifesto section-pad" id="manifesto"><div className="section-tag"><span>01 / MANIFESTO</span><span>SEM ATALHO. SEM MÁSCARA.</span></div><div className="manifesto-grid"><h2>TODO MUNDO<br />TEM UM <span>ESTILO.</span><br />O SEU MERECE<br />UM BOM CORTE<span className="red-dot">.</span></h2><div className="manifesto-aside"><div className="big-number">8<span>+</span></div><p>ANOS DE TESOURA<br />AFIADA E CONVERSA<br />SEM HORA PRA ACABAR.</p><div className="rule"/><p className="body-copy">A BLACKJACK nasceu pra quem sabe que sentar na cadeira é mais do que cortar o cabelo. É desacelerar, trocar ideia e sair com a cabeça no lugar.</p><a className="text-link" href="#sobre">CONHEÇA A CASA <ArrowRight size={16} /></a></div></div><div className="manifesto-bottom"><span>EST. 2018 · SÃO PAULO</span><span>RITUAL, NÃO ROTINA</span><span>✳ BLACKJACK BARBER CLUB</span></div></section>
      <section className="services section-pad" id="servicos"><div className="section-tag"><span>02 / MENU DA CASA</span><span>PREÇO LIMPO, SEM SURPRESA</span></div><div className="services-head"><h2>NA CADEIRA,<br /><em>DO SEU JEITO.</em></h2><span className="service-note">Cada detalhe conta.<br />Escolha o seu ritual.</span></div><div className="service-list">{services.map((item, i) => <button key={item.name} className="service-row" onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}><span className="service-num">0{i + 1}</span><span className="service-name">{item.name}</span><span className="service-detail">{item.detail}</span><span className="service-duration"><Clock3 size={14} />{item.duration}</span><span className="service-price">R$ {item.price}</span><ArrowUpRight className="service-arrow" size={20} /></button>)}</div><button className="btn-outline" onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}>MARCAR UM HORÁRIO <ArrowRight size={16} /></button></section>
      <section className="crew section-pad" id="equipe"><div className="section-tag"><span>03 / QUEM SEGURA A TESOURA</span><span>GENTE DE VERDADE, PAPO RETO</span></div><div className="crew-head"><h2>OS CARAS<br />DA <em>CADEIRA.</em></h2><p>Boa mão é importante.<br />Boa conversa também.</p></div><div className="crew-grid">{barbers.map((person, i) => <article className={`crew-card crew-${i + 1}`} key={person.name}><div className="crew-photo"><img src={photo(person.image, 700)} alt={`${person.name}, barbeiro`} loading="lazy" /><span>{person.number}</span></div><div className="crew-meta"><div><h3>{person.name}</h3><p>{person.role}</p></div><button aria-label={`Agendar com ${person.name}`} onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}><ArrowUpRight /></button></div></article>)}</div></section>
      <section className="gallery-section section-pad"><div className="section-tag"><span>04 / TRABALHO FALA</span><span>SP · #BLACKJACKBARBER</span></div><div className="gallery-head"><h2>FEITO NA <em>RÉGUA.</em></h2><p>Um pouco da casa.<br />Um pouco de quem passou por ela.</p></div><div className="gallery-grid">{gallery.map((item, i) => <button key={item.image} className={`gallery-item ${item.className}`} onClick={() => setLightbox(i)} onPointerMove={event => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`); event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`) }} aria-label={`Ampliar foto: ${item.label}`}><img src={photo(item.image, 1000)} alt={item.label} loading="lazy" /><span className="gallery-caption">{item.label}<ArrowUpRight size={16} /></span><span className="spotlight" /></button>)}</div></section>
      <section className="quote-band"><span className="quote-mark">“</span><blockquote>SAI MAIS LEVE<br />DO QUE ENTROU.</blockquote><div className="quote-caption">— CLIENTE DA CASA <small>Depoimento demonstrativo, conteúdo fictício</small></div></section>
      <section className="about section-pad" id="sobre"><div className="section-tag"><span>05 / A CASA</span><span>RUA AUGUSTA, 1200</span></div><div className="about-grid"><div className="about-image-wrap"><img src={photo('photo-1521590832167-7bcbfaa6381f', 1000)} alt="Cadeira e ferramentas no espaço da barbearia" loading="lazy" /><span>UM LUGAR PRA SER VOCÊ.</span></div><div className="about-copy"><div className="eyebrow">MAIS DO QUE UM CORTE</div><h2>ENTRA PELO<br />CABELO.<br /><em>FICA PELO<br />CLIMA.</em></h2><p>Sem frescura, sem pressa. Na BLACKJACK, a navalha é afiada, o café é passado na hora e cada cliente senta na cadeira do jeito que é.</p><p>A gente acredita no clássico bem feito — e em ter liberdade pra dar o seu próprio acabamento.</p><a className="text-link" href="#visita">APARECE POR AQUI <ArrowRight size={16} /></a></div></div></section>
      <section className="visit section-pad" id="visita"><div className="section-tag"><span>06 / A GENTE TE ESPERA</span><span>SEM CERIMÔNIA</span></div><div className="visit-grid"><div className="visit-main"><div className="eyebrow">SÃO PAULO · SP</div><h2>PASSA<br />AQUI NA<br /><em>CASA.</em></h2><p>Rua Augusta, 1200<br />Consolação · São Paulo, SP</p><div className="visit-buttons"><a className="btn-red" href="https://maps.google.com/?q=Rua+Augusta+1200+Sao+Paulo" target="_blank" rel="noreferrer">ABRIR NO MAPA <MapPin size={16} /></a><a className="visit-whatsapp" href={wa('Olá! Quero saber os horários disponíveis na BLACKJACK.')} target="_blank" rel="noreferrer">CHAMAR NO WHATSAPP <ArrowUpRight size={15} /></a></div></div><div className="visit-info"><div className="hours-title"><Clock3 size={17} /> HORÁRIO DA CASA</div>{[['Terça a sexta', '09h — 20h'], ['Sábado', '09h — 18h'], ['Domingo e segunda', 'Fechado']].map(row => <div className="hours-row" key={row[0]}><span>{row[0]}</span><b>{row[1]}</b></div>)}<div className="map-box"><iframe title="Mapa da Rua Augusta, São Paulo" src="https://maps.google.com/maps?q=Rua%20Augusta%201200%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><span><MapPin size={15} /> R. Augusta, 1200 · Consolação</span></div></div></div></section>
      <section className="contact-strip"><div><span>SEM ENROLAÇÃO.</span><h2>BORA <em>MARCAR?</em></h2></div><button onClick={() => document.querySelector<HTMLButtonElement>('.book-float')?.click()}>SUA PRÓXIMA CADEIRA É AQUI <ArrowRight /></button></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">BJ</span><span>BLACKJACK<small>BARBER CLUB · SP</small></span></a><p>Corte clássico.<br />Atitude de rua.</p><div className="footer-social"><a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={wa('Olá, BLACKJACK!')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><ArrowUpRight /></a></div></div><div className="portfolio-cta"><div><span>UM RECADO DO DESENVOLVEDOR</span><h3>Gostou deste site? Tenha um site profissional para o seu negócio.</h3><p>Desenvolvo sites modernos, rápidos e personalizados para empresas que desejam fortalecer sua presença digital e conquistar mais clientes.</p></div><a href={`https://wa.me/${CONTACT.portfolioWhatsApp}?text=${encodeURIComponent('Olá! Gostei do site da BLACKJACK e quero conversar sobre um site profissional para o meu negócio.')}`} target="_blank" rel="noreferrer">QUERO UM SITE ASSIM <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 BLACKJACK BARBER CLUB · NEGÓCIO FICTÍCIO PARA PORTFÓLIO</span><a href="#top">VOLTAR AO TOPO ↑</a></div></footer>
    <Booking />
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setLightbox(null)}><button aria-label="Fechar foto"><X /></button><img src={photo(gallery[lightbox].image, 1500)} alt={gallery[lightbox].label} /><span>{gallery[lightbox].label}</span></div>}
  </>
}

export default App
