import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Plane,
  Globe,
  Car,
  FileText,
  Handshake,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ChevronDown,
  X,
  ExternalLink,
  Shield,
  Award,
  Users,
  Menu,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Types
interface Department {
  id: string;
  name: string;
  subtitle?: string;
  tag?: string;
  image: string;
  icon: any;
  buttonColor: 'navy' | 'burgundy';
  description: string;
  highlights: string[];
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedDeptModal, setSelectedDeptModal] = useState<Department | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Quote form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'travel',
    agency: 'Cotonou',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const departments: Department[] = [
    {
      id: 'travel',
      name: 'NAN NIN TRAVEL',
      subtitle: 'Voyages et tourisme',
      image: '/src/assets/images/site_cotonou_1793977611164.jpg',
      icon: Plane,
      buttonColor: 'navy',
      description: 'Billetterie aérienne, hôtels, circuits et séjours sur mesure.',
      highlights: [
        'Réservation et émission de billets d’avion toutes compagnies',
        'Circuits touristiques guidés au Bénin (Ganvié, Ouidah, Pendjari)',
        'Accueil protocolaire & navettes privées aéroport de Cotonou',
        'Réservations hôtelières et conciergerie de séjour'
      ]
    },
    {
      id: 'mobility',
      name: 'Mobilité internationale',
      tag: 'Assistance Accès Canada',
      image: '/src/assets/images/pole_mobilite_1793978794895.jpg',
      icon: Globe,
      buttonColor: 'burgundy',
      description: 'Études à l’étranger, assistance visa et mobilité professionnelle.',
      highlights: [
        'Orientation académique personnalisée (France, Canada, Europe)',
        'Constitution rigoureuse des dossiers de candidature & Campus France',
        'Coaching et simulations d’entretiens pédagogiques & consulaires',
        'Accompagnement complet jusqu’à l’obtention du visa d’études'
      ]
    },
    {
      id: 'driving',
      name: 'NAN NIN AUTO-ÉCOLE',
      image: '/src/assets/images/pole_conduite_1793978795311.jpg',
      icon: Car,
      buttonColor: 'navy',
      description: 'Formation théorique et pratique, permis de conduire.',
      highlights: [
        'Code de la route interactif et simulations multimédias',
        'Leçons pratiques sur véhicules récents à double-commande',
        'Moniteurs certifiés et pédagogie adaptée à chaque rythme',
        'Préparation intensive aux examens officiels du Permis B'
      ]
    },
    {
      id: 'assistance',
      name: 'NAN NIN ASSISTANCE',
      image: '/src/assets/images/pole_admin_1793978795976.jpg',
      icon: FileText,
      buttonColor: 'burgundy',
      description: 'ANIP, formalités administratives et services numériques.',
      highlights: [
        'Accompagnement pour actes d’état civil, CIP et certificat ANIP',
        'Formalités pour passeports biométriques et légalisations',
        'Immatriculation fiscale (IFU) et Registre du Commerce (RCCM)',
        'Traductions certifiées et assistance consulaire pour la diaspora'
      ]
    },
    {
      id: 'b2b',
      name: 'NAN NIN SERVICES B2B',
      image: '/src/assets/images/pole_business_1793978795566.jpg',
      icon: Handshake,
      buttonColor: 'navy',
      description: 'Solutions professionnelles et partenariats.',
      highlights: [
        'Domiciliation commerciale et juridique de sociétés à Cotonou',
        'Gestion du courrier d’affaires, secrétariat et permanence',
        'Mise à disposition de bureaux partagés et salles de réunion',
        'Appui opérationnel et logistique d’affaires pour investisseurs'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Chrétien A.',
      role: 'Étudiant',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      text: 'Grâce à NAN NIN TRAVEL, j’ai pu étudier en France en toute sérénité. Un accompagnement exceptionnel !'
    },
    {
      name: 'Aminatou D.',
      role: 'Entrepreneure',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      text: 'Une équipe professionnelle et à l’écoute. Je recommande vivement pour toutes vos démarches administratives et voyages !'
    },
    {
      name: 'Rodrigue S.',
      role: 'Cadre d’entreprise',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: 'Service de billetterie rapide et fiable. Le suivi entre Cotonou et Parakou est irréprochable.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-rose-900 selection:text-white">
      {/* ========================================== */}
      {/* 1. TOP DARK NAVY BAR                       */}
      {/* ========================================== */}
      <div className="bg-[#081839] text-white text-[11.5px] py-1.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left contact coordinates */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
            <a href="tel:+2290197000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+229 01 97 00 00 00</span>
            </a>
            <a href="mailto:info@nanningroup.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@nanningroup.com</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Cotonou, Bénin</span>
            </div>
          </div>

          {/* Right languages & social icons */}
          <div className="flex items-center gap-4 text-slate-300">
            {/* Languages */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                <span className="text-xs">🇫🇷</span>
                <span>Français</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <span className="text-white/20">|</span>
              <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                <span className="text-xs">🇬🇧</span>
                <span>English</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <span className="text-white/20">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. MAIN HEADER & LOGO NAVBAR               */}
      {/* ========================================== */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo Brand matching image */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              {/* Globe wireframe vector */}
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="18" stroke="#0B1B3D" strokeWidth="2.2" fill="#F0F4FA" />
                <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#0B1B3D" strokeWidth="1.6" />
                <line x1="6" y1="24" x2="42" y2="24" stroke="#0B1B3D" strokeWidth="1.6" />
                <path d="M9 14 C16 19 32 19 39 14" stroke="#0B1B3D" strokeWidth="1.4" />
                <path d="M9 34 C16 29 32 29 39 34" stroke="#0B1B3D" strokeWidth="1.4" />
                {/* Airplane swooshing across */}
                <path d="M4 36 C14 28 28 16 44 8" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                <polygon points="44,8 37,9 41,15" fill="#D4AF37" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-black text-[#0B1B3D] tracking-tight leading-none">
                NAN NIN TRAVEL
              </div>
              <div className="text-[11px] italic font-medium text-slate-500 font-serif tracking-wide mt-0.5">
                L'avenir se construit avec vous.
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13.5px] font-semibold text-[#0B1B3D]">
            <a
              href="#"
              className="bg-[#8B1E2D] text-white px-4 py-1.5 rounded-md shadow-2xs font-bold"
            >
              Accueil
            </a>
            <button
              onClick={() => setAboutModalOpen(true)}
              className="flex items-center gap-1 hover:text-[#8B1E2D] transition-colors cursor-pointer"
            >
              À propos <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <a href="#departements" className="hover:text-[#8B1E2D] transition-colors">
              Nos départements ▾
            </a>
            <a href="#partenaires" className="hover:text-[#8B1E2D] transition-colors">
              Nos partenaires
            </a>
            <a href="#actualites" className="hover:text-[#8B1E2D] transition-colors">
              Actualités
            </a>
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="hover:text-[#8B1E2D] transition-colors font-bold cursor-pointer"
            >
              Demander un devis
            </button>
            <a href="#contact" className="hover:text-[#8B1E2D] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-md"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-[#8B1E2D] py-1"
            >
              Accueil
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); setAboutModalOpen(true); }}
              className="block text-left w-full font-semibold text-slate-700 py-1"
            >
              À propos & Nos 5 Agences
            </button>
            <a
              href="#departements"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 py-1"
            >
              Nos départements
            </a>
            <a
              href="#partenaires"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 py-1"
            >
              Nos partenaires
            </a>
            <a
              href="#actualites"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-700 py-1"
            >
              Actualités
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }}
              className="w-full bg-[#8B1E2D] text-white py-2.5 rounded-md text-xs uppercase font-bold tracking-wider mt-2"
            >
              Demander un devis
            </button>
          </div>
        )}
      </header>

      {/* ========================================== */}
      {/* 3. HERO SECTION EXACTEMENT COMME L'IMAGE   */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf3fc] via-[#f2f8fd] to-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-100">
        
        {/* Decorative backdrop monuments silhouette */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-3/5 pointer-events-none opacity-90 overflow-hidden flex items-end justify-end">
          {/* Composite illustration of travel / plane / monument amazone / eiffel */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Soft decorative atmospheric glow */}
            <div className="absolute w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl -top-10 right-10"></div>
            
            {/* Commercial Airliner Illustration floating in sky */}
            <div className="absolute top-6 sm:top-10 right-4 sm:right-16 w-72 sm:w-96 lg:w-[480px] drop-shadow-2xl z-10 animate-pulse transition-all">
              <svg viewBox="0 0 600 320" className="w-full h-auto" fill="none">
                {/* Aircraft Body */}
                <path d="M120 180 Q320 130 520 80 Q560 70 580 85 Q560 110 480 140 Q280 200 120 220 Z" fill="#FFFFFF" stroke="#0B1B3D" strokeWidth="2" />
                <path d="M300 135 L420 30 L450 35 L380 125 Z" fill="#FFFFFF" stroke="#0B1B3D" strokeWidth="2" />
                {/* Left wing */}
                <path d="M260 160 L140 280 L180 285 L320 165 Z" fill="#E2E8F0" stroke="#0B1B3D" strokeWidth="2" />
                {/* Tail Wing */}
                <path d="M130 180 L80 120 L115 118 L155 175 Z" fill="#8B1E2D" stroke="#0B1B3D" strokeWidth="2" />
                {/* Cockpit windows */}
                <path d="M540 85 Q555 83 565 90 Q550 96 535 94 Z" fill="#0B1B3D" />
                {/* Cabin Windows */}
                <circle cx="500" cy="103" r="3.5" fill="#0B1B3D" />
                <circle cx="480" cy="108" r="3.5" fill="#0B1B3D" />
                <circle cx="460" cy="113" r="3.5" fill="#0B1B3D" />
                <circle cx="440" cy="118" r="3.5" fill="#0B1B3D" />
                <circle cx="420" cy="123" r="3.5" fill="#0B1B3D" />
                <circle cx="400" cy="128" r="3.5" fill="#0B1B3D" />
                {/* Red livery stripe */}
                <path d="M120 200 Q320 160 540 100" stroke="#8B1E2D" strokeWidth="5" />
              </svg>
            </div>

            {/* Skyline & Monument silhouette at bottom */}
            <div className="absolute bottom-0 right-0 w-full flex items-end justify-end gap-3 sm:gap-6 pr-4 sm:pr-12 opacity-85">
              {/* Paris Eiffel Tower silhouette */}
              <div className="w-16 sm:w-28 text-slate-700/80">
                <svg viewBox="0 0 100 240" fill="currentColor" className="w-full h-auto">
                  <path d="M48 0 L52 0 L54 60 L62 130 L78 240 L66 240 L58 170 L50 170 L42 170 L34 240 L22 240 L38 130 L46 60 Z"/>
                  <rect x="42" y="60" width="16" height="6" />
                  <rect x="36" y="130" width="28" height="8" />
                  <path d="M38 240 Q50 190 62 240" fill="#f2f8fd" />
                </svg>
              </div>

              {/* Arc de Triomphe */}
              <div className="w-16 sm:w-24 text-slate-600/70">
                <svg viewBox="0 0 140 120" fill="currentColor" className="w-full h-auto">
                  <rect x="10" y="20" width="120" height="20" />
                  <rect x="20" y="40" width="30" height="80" />
                  <rect x="90" y="40" width="30" height="80" />
                  <path d="M50 70 Q70 50 90 70 L90 120 L50 120 Z" fill="#f2f8fd" />
                </svg>
              </div>

              {/* Monument de l'Amazone (Cotonou) */}
              <div className="w-14 sm:w-22 text-amber-700/85">
                <svg viewBox="0 0 100 180" fill="currentColor" className="w-full h-auto">
                  <rect x="25" y="140" width="50" height="40" rx="3" />
                  {/* Amazone statue warrior holding spear */}
                  <path d="M45 40 Q50 30 55 40 L58 75 L68 140 L32 140 L42 75 Z" />
                  <circle cx="50" cy="25" r="9" />
                  <line x1="75" y1="10" x2="60" y2="150" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content (Left column) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight leading-none mb-1">
              NAN NIN TRAVEL
            </h1>
            <div className="text-2xl sm:text-4xl font-serif italic font-bold text-[#0B1B3D] leading-tight mb-4">
              L'avenir se construit <span className="text-[#8B1E2D] not-italic font-sans font-black">avec vous.</span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8 max-w-lg">
              Un groupe multiservices au service de vos projets de voyage, d’études, de mobilité et de réussite.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#departements"
                className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#721824] text-white font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <Plane className="w-4 h-4" />
                <span>Découvrir nos services →</span>
              </a>

              <a
                href="https://wa.me/2290197000000?text=Bonjour%20NAN%20NIN%20TRAVEL,%20je%20souhaite%20des%20informations."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-emerald-700 border-2 border-emerald-500 font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full shadow-xs transition-all hover:shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Nous contacter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. NOS 5 DÉPARTEMENTS                      */}
      {/* ========================================== */}
      <section className="py-14 sm:py-20 bg-white" id="departements">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Section Header with blue dividing rules */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="w-12 sm:w-16 h-[2px] bg-[#0B1B3D]"></span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                Nos 5 départements
              </h2>
              <span className="w-12 sm:w-16 h-[2px] bg-[#0B1B3D]"></span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              Une offre complète pour tous vos projets
            </p>
          </div>

          {/* 5 Cards Row (Responsive Grid: 1 col mobile, 2 tablet, 5 on wide screen) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {departments.map((dept) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                >
                  {/* Card Thumbnail */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Optional Top Tag (like "Assistance Accès Canada") */}
                    {dept.tag && (
                      <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0B1B3D] text-[10.5px] font-black uppercase px-2.5 py-1 rounded-bl-lg shadow-sm">
                        {dept.tag}
                      </div>
                    )}

                    {/* Floating Center Icon Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center border-2 border-white shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-6 pb-5 px-4 flex flex-col flex-1 text-center">
                    <h3 className="text-sm font-black text-[#0B1B3D] uppercase tracking-tight mb-1">
                      {dept.name}
                    </h3>
                    
                    {dept.subtitle && (
                      <div className="text-[11px] font-bold text-slate-500 mb-1">
                        {dept.subtitle}
                      </div>
                    )}

                    <p className="text-[11.5px] text-slate-600 leading-relaxed mb-4 flex-1">
                      {dept.description}
                    </p>

                    <button
                      onClick={() => setSelectedDeptModal(dept)}
                      className={`w-full py-1.5 px-3 rounded-full text-xs font-bold text-white tracking-wide transition-colors ${
                        dept.buttonColor === 'burgundy'
                          ? 'bg-[#8B1E2D] hover:bg-[#721824]'
                          : 'bg-[#0B1B3D] hover:bg-[#1a2d54]'
                      }`}
                    >
                      En savoir plus →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 5. POURQUOI NOUS CHOISIR ? BANNER          */}
      {/* ========================================== */}
      <section className="relative bg-[#0B1B3D] text-white overflow-hidden py-10 sm:py-12 border-y border-white/10">
        
        {/* Golden curved decorative wave */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
            <path d="M0 220 C360 80 1080 340 1440 120" stroke="#D4AF37" strokeWidth="18" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left title */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Pourquoi<br />nous choisir ?
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] rounded-full mt-2"></div>
            </div>

            {/* 4 Center Icons */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-2 shadow-xs">
                  <Plane className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-200 leading-tight">
                  Expertise multiservices
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-2 shadow-xs">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-200 leading-tight">
                  Accompagnement personnalisé
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-2 shadow-xs">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-200 leading-tight">
                  Fiabilité et sécurité
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-2 shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-200 leading-tight">
                  Rayonnement international
                </span>
              </div>
            </div>

            {/* Right Gold Box with CTA */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#f8e3b6] via-[#f4d293] to-[#e8be6e] text-[#0B1B3D] p-5 rounded-xl shadow-md text-center flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-extrabold leading-snug mb-3">
                Votre partenaire de confiance, au Bénin et à l'international.
              </p>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#8B1E2D] hover:bg-[#721824] text-white text-xs uppercase font-black px-4 py-2 rounded-full shadow-xs transition-colors"
              >
                Demander un devis →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. NOS PARTENAIRES                         */}
      {/* ========================================== */}
      <section className="py-12 bg-white border-b border-slate-100" id="partenaires">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1B3D]">
              Nos partenaires
            </h2>
          </div>

          {/* Partner logos row matching preview */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-90 max-w-5xl mx-auto">
            {/* Air France */}
            <div className="flex items-center gap-1 font-black text-lg tracking-widest text-[#0B1B3D]">
              <span>AIRFRANCE</span>
              <span className="w-4 h-2 bg-red-600 skew-x-12 inline-block"></span>
            </div>

            {/* Canada */}
            <div className="flex items-center gap-1.5 font-bold text-lg text-slate-800">
              <span>Canada</span>
              <span className="text-red-600 text-base">🍁</span>
            </div>

            {/* Campus France */}
            <div className="flex items-center gap-2">
              <div className="text-xs font-black uppercase text-[#0B1B3D] leading-none text-right">
                Campus<br />France
              </div>
              <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                <span className="bg-blue-600"></span>
                <span className="bg-blue-400"></span>
                <span className="bg-blue-500"></span>
                <span className="bg-blue-700"></span>
              </div>
            </div>

            {/* Bénin Révélé */}
            <div className="flex items-center gap-1.5">
              <div className="flex flex-col leading-none">
                <span className="text-xs font-black tracking-widest text-emerald-700">BÉNIN</span>
                <span className="text-[10px] font-bold text-red-600 tracking-wider">RÉVÉLÉ</span>
              </div>
              <span className="text-xs">✨</span>
            </div>

            {/* ANIP */}
            <div className="flex items-center gap-1.5 font-black text-lg text-[#0B1B3D]">
              <span className="text-amber-500 text-xl font-serif">◠</span>
              <span>ANIP</span>
            </div>

            {/* Google */}
            <div className="font-medium text-lg tracking-tight font-sans">
              <span className="text-blue-500 font-bold">G</span>
              <span className="text-red-500 font-bold">o</span>
              <span className="text-amber-500 font-bold">o</span>
              <span className="text-blue-500 font-bold">g</span>
              <span className="text-green-500 font-bold">l</span>
              <span className="text-red-500 font-bold">e</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 7. TÉMOIGNAGES & ACTUALITÉS                */}
      {/* ========================================== */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200" id="actualites">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Témoignages */}
            <div className="lg:col-span-8">
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1B3D] mb-6">
                Témoignages
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testimonials.slice(0, 2).map((testi, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs flex gap-3.5 items-start"
                  >
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="flex-1">
                      <div className="text-red-600 font-serif text-2xl font-black leading-none mb-1">“</div>
                      <p className="text-xs text-slate-700 italic leading-relaxed mb-2">
                        {testi.text}
                      </p>
                      <div className="text-xs font-bold text-slate-900">
                        — {testi.name}, <span className="text-slate-500 font-normal">{testi.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicator dots */}
              <div className="flex items-center justify-center gap-1.5 mt-5">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              </div>
            </div>

            {/* Right 4 cols: Actualités */}
            <div className="lg:col-span-4" id="contact">
              <div className="flex items-center justify-between gap-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-[#0B1B3D]">
                  Actualités
                </h2>
                <a href="#actualites" className="text-xs font-bold text-slate-600 hover:text-[#8B1E2D]">
                  Voir toutes les actualités →
                </a>
              </div>

              {/* Actualité Card */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/site_cotonou_1793977611164.jpg"
                    alt="Actualité Canada"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-[#0B1B3D] leading-snug mb-2">
                    Nouvelles opportunités d'études au Canada
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>15 avril 2025</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 8. FOOTER WITH GOLDEN CURVED SWOOP         */}
      {/* ========================================== */}
      <footer className="relative bg-[#061229] text-white overflow-hidden pt-14 pb-8">
        
        {/* Golden curved ribbon swoop along footer bottom */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
            <path d="M400 0 C250 150 200 300 0 400" stroke="#D4AF37" strokeWidth="24" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Col 1 : Logo & Slogan */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-xl font-black text-white tracking-wider">
                  NAN NIN TRAVEL
                </div>
              </div>
              <p className="text-xs italic text-slate-300 font-serif mb-4">
                L'avenir se construit avec vous.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Accompagnement multiservices au Bénin et à l'international : voyage, mobilités académiques, auto-école et formalités professionnelles.
              </p>
            </div>

            {/* Col 2 : Coordonnées */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                Nos coordonnées
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="tel:+2290197000000" className="hover:text-white">+229 01 97 00 00 00</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="mailto:info@nanningroup.com" className="hover:text-white">info@nanningroup.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Cotonou, Bénin</span>
                </li>
              </ul>
            </div>

            {/* Col 3 : Liens utiles */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                Liens utiles
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><button onClick={() => setAboutModalOpen(true)} className="hover:text-white text-left">À propos</button></li>
                <li><a href="#departements" className="hover:text-white">Nos départements</a></li>
                <li><a href="#partenaires" className="hover:text-white">Nos partenaires</a></li>
                <li><a href="#contact" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Col 4 : Suivez-nous & WhatsApp Floating Pill */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Suivez-nous
                </h4>
                <div className="flex items-center gap-2.5 mb-6">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook">
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-sky-700 flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform" aria-label="YouTube">
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://wa.me/2290197000000" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center hover:scale-110 transition-transform" aria-label="WhatsApp">
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>
              </div>

              {/* Large Gold WhatsApp pill button matching mockup */}
              <a
                href="https://wa.me/2290197000000?text=Bonjour%20NAN%20NIN%20TRAVEL"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#e8be6e] hover:bg-[#dfb05c] text-[#0B1B3D] py-2.5 px-4 rounded-full font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold text-[10px] uppercase">Contactez-nous</span>
                  <span className="font-black text-xs">sur WhatsApp</span>
                </div>
              </a>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
            <div>
              © 2025 NAN NIN TRAVEL. Tous droits réservés. | Mentions légales | Politique de confidentialité
            </div>
            <div className="font-serif italic text-[#D4AF37] font-semibold">
              L'avenir se construit avec vous.
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================== */}
      {/* MODAL 1 : DEMANDER UN DEVIS               */}
      {/* ========================================== */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => { setQuoteModalOpen(false); setFormSent(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-[#0B1B3D] mb-1">
              Demander un devis personnalisé
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Nos conseillers vous répondent avec une proposition claire sous 24h ouvrées.
            </p>

            {formSent ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Demande enregistrée !</h4>
                <p className="text-xs text-slate-600 mb-4">
                  Merci {formData.name || 'cher client'}. Votre demande pour l’agence de {formData.agency} a été transmise avec succès.
                </p>
                <button
                  onClick={() => { setQuoteModalOpen(false); setFormSent(false); }}
                  className="bg-[#0B1B3D] text-white text-xs font-bold uppercase px-4 py-2 rounded-md"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Votre Nom & Prénom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Koffi Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Téléphone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+229 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Email (facultatif)</label>
                    <input
                      type="email"
                      placeholder="nom@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Département concerné</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                    >
                      <option value="travel">NAN NIN TRAVEL (Voyages)</option>
                      <option value="mobility">Mobilité internationale (Études)</option>
                      <option value="driving">NAN NIN AUTO-ÉCOLE (Permis)</option>
                      <option value="assistance">NAN NIN ASSISTANCE (ANIP & Actes)</option>
                      <option value="b2b">NAN NIN SERVICES B2B</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Agence de référence</label>
                    <select
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                    >
                      <option value="Cotonou">Cotonou (Siège)</option>
                      <option value="Parakou">Parakou (Nord)</option>
                      <option value="Natitingou">Natitingou (Atacora)</option>
                      <option value="Malanville">Malanville (Alibori)</option>
                      <option value="Nikki">Nikki (Borgou-Est)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">Détails de votre demande</label>
                  <textarea
                    rows={3}
                    placeholder="Précisez votre destination, formation souhaitée ou démarches..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-md p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B1E2D] hover:bg-[#721824] text-white text-xs uppercase font-bold py-3 rounded-md transition-colors shadow-xs"
                >
                  Envoyer ma demande de devis
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 2 : DÉTAILS D'UN DÉPARTEMENT         */}
      {/* ========================================== */}
      {selectedDeptModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDeptModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#8B1E2D] font-bold text-xs uppercase tracking-wider">
              <span>Département officiel</span>
            </div>

            <h3 className="text-xl font-black text-[#0B1B3D] mb-1">
              {selectedDeptModal.name}
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              {selectedDeptModal.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase text-slate-800 mb-2">Prestations incluses :</h4>
              {selectedDeptModal.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-md border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedDeptModal(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  const deptId = selectedDeptModal.id;
                  setSelectedDeptModal(null);
                  setFormData({ ...formData, department: deptId });
                  setQuoteModalOpen(true);
                }}
                className="bg-[#8B1E2D] hover:bg-[#721824] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-md"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 3 : À PROPOS, 5 AGENCES & 7 VALEURS  */}
      {/* ========================================== */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-[#8B1E2D] mb-1">
              À Propos de NAN NIN TRAVEL / NAN NIN GROUP
            </div>
            <h3 className="text-2xl font-black text-[#0B1B3D] mb-3">
              Un réseau d'expertise et de proximité
            </h3>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 mb-6">
              <p>
                <strong>Parce que chaque projet mérite une attention particulière</strong>, NAN NIN GROUP réunit plusieurs domaines d’activité afin de proposer un accompagnement adapté à des besoins variés : voyages, mobilité internationale, conduite, démarches administratives et solutions professionnelles.
              </p>
              <blockquote className="bg-amber-50 border-l-4 border-[#D4AF37] p-3 rounded-r-md text-xs font-bold text-slate-900 italic">
                « Vous accompagner avec sérieux, de la première demande jusqu’au suivi de votre prestation, dans la limite des services et responsabilités de NAN NIN GROUP. »
              </blockquote>
            </div>

            {/* Nos 5 Agences au Bénin */}
            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1B3D] mb-3">
                Nos 5 Agences au Bénin
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Cotonou (Siège Littoral)</div>
                  <div className="text-slate-500">Cadjehoun / Bd de la Marina</div>
                  <div className="text-amber-700 font-semibold mt-1">Tel : +229 01 97 00 00 00</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Parakou (Direction Nord)</div>
                  <div className="text-slate-500">Quartier Albarika, Grand Carrefour</div>
                  <div className="text-amber-700 font-semibold mt-1">Tel : +229 01 97 04 05 06</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Natitingou (Atacora)</div>
                  <div className="text-slate-500">Centre Commercial, Avenue Principale</div>
                  <div className="text-amber-700 font-semibold mt-1">Tel : +229 01 97 07 08 09</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Malanville (Alibori)</div>
                  <div className="text-slate-500">Zone Douanière & Marché Central</div>
                  <div className="text-amber-700 font-semibold mt-1">Tel : +229 01 97 10 11 12</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 sm:col-span-2">
                  <div className="font-bold text-slate-900">Nikki (Borgou-Est)</div>
                  <div className="text-slate-500">Avenue du Palais Royal, Nikki Centre</div>
                  <div className="text-amber-700 font-semibold mt-1">Tel : +229 01 97 13 14 15</div>
                </div>
              </div>
            </div>

            {/* Nos 7 Valeurs */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1B3D] mb-2">
                Nos 7 Valeurs
              </h4>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {['Écoute', 'Professionnalisme', 'Transparence', 'Proximité', 'Responsabilité', 'Adaptabilité', 'Esprit de service'].map((val, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-800 font-bold px-2.5 py-1 rounded-md border border-slate-200">
                    ✓ {val}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setAboutModalOpen(false)}
                className="bg-[#0B1B3D] text-white text-xs font-bold uppercase px-4 py-2 rounded-md"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
