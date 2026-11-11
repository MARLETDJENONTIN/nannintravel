import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowRight, Plane, MessageCircle, ChevronDown, Send } from "lucide-react";
import { departments, values } from "./data";

const waNumber = "22996895780"; // Numéro WhatsApp officiel : +229 96 89 57 80 (format international sans « + » pour wa.me).
const whatsappLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Bonjour NANNIN GROUP, je souhaite obtenir des informations.")}`;

function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("Français");
  return <>
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="top-contact">
          <a href="tel:+22996591818"><Phone size={13}/> +229 96 59 18 18</a>
          <a href="mailto:contact@nanningroup.com"><Mail size={13}/> contact@nanningroup.com</a>
          <a href="mailto:mobility@nanningroup.com"><Mail size={13}/> mobility@nanningroup.com</a>
          <span><MapPin size={13}/> Cotonou, Bénin</span>
        </div>
        <div className="top-right">
          <button className="language" onClick={() => setLang(lang === "Français" ? "English" : "Français")}>{lang === "Français" ? "🇫🇷 Français" : "🇬🇧 English"} <ChevronDown size={12}/></button>
          <a aria-label="Facebook" href="#social"><Facebook size={14}/></a>
          <a aria-label="LinkedIn" href="#social"><Linkedin size={14}/></a>
          <a aria-label="YouTube" href="#social"><Youtube size={14}/></a>
        </div>
      </div>
    </div>
    <header className="main-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <div className="brand-mark"><span>🌐</span><Plane size={24}/></div>
          <div><strong>NAN NIN <b>GROUP</b></strong><small>L’avenir se construit avec vous.</small></div>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? "nav open" : "nav"}>
          <a className="active" href="#accueil" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#apropos" onClick={() => setOpen(false)}>À propos</a>
          <a href="#pourquoi" onClick={() => setOpen(false)}>Pourquoi nous ?</a>
          <a href="#departements" onClick={() => setOpen(false)}>Nos départements <ChevronDown size={12}/></a>
          <a href="#partenaires" onClick={() => setOpen(false)}>Nos partenaires</a>
          <a href="#actualites" onClick={() => setOpen(false)}>Actualités</a>
          <a href="#devis" onClick={() => setOpen(false)}>Demander un devis</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  </>;
}

function Hero() {
  return <section className="hero" id="accueil">
    <div className="hero-bg"></div>
    <div className="container hero-content">
      <div className="hero-copy">
        <span className="eyebrow">UN GROUPE • CINQ EXPERTISES</span>
        <h1>NANNIN GROUP</h1>
        <h2>L’avenir se construit<br/><em>avec vous.</em></h2>
        <p>Un groupe multiservices au service de vos projets de voyage, d’études, de mobilité et de réussite.</p>
        <div className="hero-actions">
          <a className="btn btn-red" href="#departements"><Plane size={16}/> Découvrir nos services <ArrowRight size={16}/></a>
          <a className="btn btn-outline" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={17} className="whatsapp"/> Nous contacter</a>
        </div>
        <div className="hero-trust"><span><b>5</b> départements</span><i></i><span>Un seul partenaire pour vos projets</span></div>
      </div>
    </div>
    <div className="hero-wave"></div>
  </section>;
}

function About() {
  return <section className="section about-section" id="apropos">
    <div className="container about-grid">
      <div className="about-media">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85" alt="L’équipe NAN NIN GROUP"/>
        <div className="about-badge"><strong>5</strong><span>départements<br/>à votre service</span></div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">QUI SOMMES-NOUS ?</span>
        <h2>À propos de <em>NAN NIN GROUP</em></h2>
        <p>Basé à Cotonou, au Bénin, NAN NIN GROUP est un groupe multiservices dédié à vos projets de voyage, d’études, de mobilité et de formation. Cinq expertises complémentaires réunies au sein d’un même partenaire de confiance, au service de votre réussite.</p>
        <ul className="about-list">
          <li>Un interlocuteur unique pour des besoins variés</li>
          <li>Un accompagnement administratif complet (formalités, ANIP)</li>
          <li>Des solutions professionnelles et des partenariats B2B</li>
          <li>Un ancrage local fort et un rayonnement international</li>
        </ul>
        <div className="about-actions">
          <a className="btn btn-red" href="#departements">Nos départements <ArrowRight size={15}/></a>
          <a className="btn btn-outline" href="#devis">Demander un devis</a>
        </div>
      </div>
    </div>
  </section>;
}

function Departments() {
  return <section className="section departments" id="departements">
    <div className="container">
      <div className="section-heading"><span></span><div><h2>Nos 5 départements</h2><p>Une offre complète pour tous vos projets</p></div><span></span></div>
      <div className="department-grid">
        {departments.map((d) => <article className="department-card" key={d.number}>
          <div className="department-image"><img src={d.image} alt={d.title}/><span className="department-icon">{d.icon}</span><span className="department-number">{d.number}</span></div>
          <div className="department-body"><small>{d.subtitle}</small><h3>{d.title}</h3><p>{d.description}</p><a href="#devis">En savoir plus <ArrowRight size={15}/></a></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function WhyUs() {
  return <section className="why-section" id="pourquoi">
    <div className="container why-inner">
      <div className="why-title"><h2>Pourquoi<br/>nous <em>choisir ?</em></h2><div className="gold-line"></div></div>
      <div className="why-values">{values.map((v,i)=><div className="value" key={i}><div className="value-icon">{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></div>)}</div>
      <div className="why-cta"><small>Votre partenaire de confiance</small><strong>au Bénin et à l’international.</strong><a className="btn btn-red" href="#devis">Demander un devis <ArrowRight size={15}/></a></div>
    </div>
  </section>;
}

function Partners() {
  const partners = ["AIR FRANCE", "Canada", "Campus France", "BÉNIN RÉVÉLÉ", "ANIP", "Google"];
  return <section className="section partners" id="partenaires"><div className="container">
    <div className="section-heading"><span></span><div><h2>Nos partenaires</h2><p>Un réseau au service de vos ambitions</p></div><span></span></div>
    <div className="partner-row">{partners.map((p,i)=><div className={`partner-logo partner-${i}`} key={p}>{p}</div>)}</div>
    <p className="partner-note">Logos illustratifs à remplacer ou valider avant publication.</p>
  </div></section>;
}

function TestimonialsNews() {
  return <section className="section testimonial-news" id="actualites"><div className="container two-column">
    <div><div className="section-heading left"><span></span><h2>Témoignages</h2></div>
      <div className="testimonial-card"><div className="avatar">A</div><div><b className="quote">“</b><p>Une équipe attentive et professionnelle, à l’écoute de mes besoins. Je recommande NAN NIN GROUP !</p><strong>— Client accompagné</strong></div></div>
    </div>
    <div><div className="section-heading left"><h2>Actualités</h2><a href="#contact">Nous contacter →</a></div>
      <article className="news-card"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" alt="Avion en vol"/><div><small>À LA UNE</small><h3>De nouvelles opportunités pour vos projets à l’international</h3><p>Contactez notre équipe pour découvrir nos services et bénéficier d’un accompagnement.</p><a href="#contact">En savoir plus <ArrowRight size={14}/></a></div></article>
    </div>
  </div></section>;
}

function QuoteContact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Demande de devis — NANNIN GROUP");
    const body = encodeURIComponent(`Nom : ${f.get("name")}\nEmail : ${f.get("email")}\nDépartement : ${f.get("service")}\nMessage : ${f.get("message")}`);
    window.location.href = `mailto:contact@nanningroup.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <section className="contact-section" id="devis"><div className="container contact-grid">
    <div className="contact-copy"><span className="eyebrow">PARLONS DE VOTRE PROJET</span><h2>Construisons<br/><em>l’avenir ensemble.</em></h2><p>Vous avez un projet de voyage, d’études, de formation ou besoin d’une assistance ? Notre équipe est à votre écoute.</p>
      <div className="contact-detail"><Mail/><div><small>Email général</small><a href="mailto:contact@nanningroup.com">contact@nanningroup.com</a></div></div>
      <div className="contact-detail"><Mail/><div><small>Email mobilité</small><a href="mailto:mobility@nanningroup.com">mobility@nanningroup.com</a></div></div>
      <div className="contact-detail"><Phone/><div><small>Bureau</small><a href="tel:+22996591818">+229 96 59 18 18</a></div></div>
      <div className="contact-detail"><MapPin/><div><small>Adresse</small><strong>Cotonou, Bénin</strong></div></div>
      <a className="btn btn-outline light" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle className="whatsapp"/> Écrire sur WhatsApp</a>
    </div>
    <form className="quote-form" onSubmit={submit} id="contact"><h3>Demander un devis</h3><p>Décrivez-nous votre besoin, nous vous répondrons.</p>
      <label>Nom complet<input name="name" required placeholder="Votre nom"/></label>
      <label>Email<input name="email" type="email" required placeholder="vous@exemple.com"/></label>
      <label>Département<select name="service" defaultValue=""><option value="" disabled>Choisir un service</option>{departments.map(d=><option key={d.number}>{d.title}</option>)}</select></label>
      <label>Votre message<textarea name="message" required rows="4" placeholder="Parlez-nous de votre projet..."/></label>
      <button className="btn btn-red submit-btn" type="submit"><Send size={16}/> Envoyer ma demande</button>
      {sent && <small className="form-note">Votre application email va s’ouvrir pour envoyer la demande.</small>}
      <small className="form-note">Le formulaire ouvre votre logiciel de messagerie. Un système d’envoi automatique pourra être connecté ultérieurement.</small>
    </form>
  </div></section>;
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-main">
      <div className="footer-brand"><div className="brand-mark"><span>🌐</span><Plane size={23}/></div><div><strong>NAN NIN <b>GROUP</b></strong><small>L’avenir se construit avec vous.</small></div><p>Un groupe multiservices pour accompagner vos ambitions au Bénin et à l’international.</p></div>
      <div><h4>Nos coordonnées</h4><a href="tel:+22996591818"><Phone size={14}/> Bureau : +229 96 59 18 18</a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp : +229 96 89 57 80</a><a href="mailto:contact@nanningroup.com"><Mail size={14}/> contact@nanningroup.com</a><a href="mailto:mobility@nanningroup.com"><Mail size={14}/> mobility@nanningroup.com</a><p><MapPin size={14}/> Cotonou, Bénin</p></div>
      <div><h4>Liens utiles</h4><a href="#apropos">À propos</a><a href="#departements">Nos départements</a><a href="#partenaires">Nos partenaires</a><a href="#devis">Demander un devis</a></div>
      <div id="social"><h4>Suivez-nous</h4><div className="socials"><a href="#social"><Facebook/></a><a href="#social"><Linkedin/></a><a href="#social"><Youtube/></a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle/></a></div></div>
    </div>
    <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} NANNIN GROUP. Tous droits réservés.</span><span><a href="#legal">Mentions légales</a> · <a href="#privacy">Politique de confidentialité</a></span><em>L’avenir se construit avec vous.</em></div></div>
  </footer>;
}

export default function App() {
  return <><Header/><main><Hero/><About/><Departments/><WhyUs/><Partners/><TestimonialsNews/><QuoteContact/></main><Footer/><a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contacter sur WhatsApp"><MessageCircle/><span>Contactez-nous<br/>sur WhatsApp</span></a></>;
}
