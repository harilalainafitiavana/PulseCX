import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { Headphones, TrendingUp, Settings, Cpu, ShieldCheck, BarChart3, Users, Eye, Star, ArrowRight, CheckCircle2, Award, Clock, Zap, Target, Sparkles, Shield, X } from "lucide-react";
// import partnersBanner from "@/assets/marques_partenaire.png";
import heroIllustration from "@/assets/hero-illustration.png";
import avisAlibaba from "@/assets/avis_alibaba.png";
import avisCainiao from "@/assets/avis_cainiao.png";
import avisSwisslife from "@/assets/avis_swisslife.png";
import avisGroupeAlternance from "@/assets/avis_groupe_alternance.png";
import avisYara from "@/assets/avis_yara.png";
import avisHelixDigital from "@/assets/avis_helix_digital.png";
import React from "react";

const services = [
  {
    id: 1,
    href: "/services/cx-operations",
    title: "Customer Support & CX Operations",
    subtitle: "CUSTOMER EXPERIENCE",
    desc: "Service client multicanal et opérations support: gestion des flux, qualité et performance.",
    features: [
      "Voix, email, chat & canaux digitaux",
      "Structuration scripts & bases de connaissance",
      "Suivi SLA, CSAT, FCR & productivité"
    ],
    // Police: Inter (Google Fonts) - Moderne et élégante
    fontStyle: "font-inter",
    titleFont: "font-inter font-bold",
    descFont: "font-inter font-normal",
    listFont: "font-inter font-light",
    bgGradient: "bg-gradient-to-br from-white to-gray-50/50",
    icon: (
      <svg className="w-6 h-6 text-pulse-turquoise" viewBox="0 0 24 24" fill="none">
        <path d="M3 10H21M7 15H11M7 18H14M5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8H9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 2,
    href: "/services/sales",
    title: "Sales Development & Revenue Ops",
    subtitle: "LEAD GENERATION",
    desc: "Prospection et qualification avec pilotage du pipeline: process, volume et conversion.",
    features: [
      "SDR / prise de RDV qualifiés (process & volume)",
      "Qualification, scoring & enrichissement CRM",
      "Reporting: conversion, pipeline & feddback loop"
    ],
    // Police: Roboto (Google Fonts) - Claire et professionnelle
    fontStyle: "font-roboto",
    titleFont: "font-roboto font-bold",
    descFont: "font-roboto font-medium",
    listFont: "font-roboto font-normal",
    bgGradient: "bg-gradient-to-tr from-white to-gray-100/50",
    icon: (
      <svg className="w-6 h-6 text-pulse-turquoise" viewBox="0 0 24 24" fill="none">
        <path d="M12 4V20M8 8L12 4L16 8M8 16L12 20L16 16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 3,
    href: "/services/bpo",
    title: "Business Process Operations",
    subtitle: "BACK-OFFICE",
    desc: "Back-office et opérations CRM: tratement, contrôle et fiabilisation des flux.",
    features: [
      "Saisie, contrôle, rapprochements & conformité (KYC)",
      "Tickets, CRM & workflows (SOP + qualité)",
      "Procuction stable & montée en charge progresssive"
    ],
    // Police: Open Sans (Google Fonts) - Lisible et polyvalente
    fontStyle: "font-opensans",
    titleFont: "font-opensans font-bold",
    descFont: "font-opensans font-normal",
    listFont: "font-opensans font-light",
    bgGradient: "bg-gradient-to-bl from-white to-gray-50/70",
    icon: (
      <svg className="w-6 h-6 text-pulse-turquoise" viewBox="0 0 24 24" fill="none">
        <path d="M12 6V4M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 10V12M12 12H8.5M12 12H15.5M12 12V14M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 4.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 4,
    href: "/services/digital",
    title: "Digital & Operational Automation",
    subtitle: "DIGITAL & AUTOMATION",
    desc: "Automatiation et support opérationnel: QA augmentée, routines de contrôle, data processing (usage interne).",
    features: [
      "Automatisations simples (no-code / scripts)",
      "QA augmentée: audit, scoring, plans d'action",
      "Structuration data: fiabiliser l'opérationnel"
    ],
    // Police: Poppins (Google Fonts) - Moderne et dynamique
    fontStyle: "font-poppins",
    titleFont: "font-poppins font-bold",
    descFont: "font-poppins font-medium",
    listFont: "font-poppins font-light",
    bgGradient: "bg-gradient-to-r from-white to-gray-100/40",
    icon: (
      <svg className="w-6 h-6 text-pulse-turquoise" viewBox="0 0 24 24" fill="none">
        <path d="M9 3L5 7L9 11M15 3L19 7L15 11M12 21V13M9 17H15" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

const differentiators = [
  { icon: ShieldCheck, label: "Structuré", desc: "Processus standardisés et documentés" },
  { icon: BarChart3, label: "Piloté", desc: "KPI temps réel et reporting continu" },
  { icon: Eye, label: "Transparent", desc: "Visibilité totale sur les opérations" },
  { icon: Users, label: "Stable", desc: "Équipes formées et fidélisées" },
];

const kpis = [
  { value: 98, suffix: "%", label: "Satisfaction client" },
  { value: 45, suffix: "%", label: "Réduction coûts opérationnels" },
  { value: 500, suffix: "+", label: "Agents formés" },
  { value: 24, suffix: "/7", label: "Support disponible" },
];

const testimonials = [
  {
    company: "ALIBABA",
    text: "PulseCX s'est adapté rapidement à nos processus et a maintenu une qualité constante malgré des volumes élevés.",
    image: "https://images.seeklogo.com/logo-png/0/2/alibaba-com-logo-png_seeklogo-6545.png",
  },
  {
    company: "SWISSLIFE",
    text: "Une équipe fiable, une communication claire et un pilotage KPI qui nous donne de la visibilité au quotidien.",
    image: "https://upload.wikimedia.org/wikipedia/fr/e/e8/Logo_Swiss_Life.svg",
  },
  {
    company: "GROUPE A.",
    text: "Le suivi et la méthode de déploiement ont permis une montée en charge progressive sans dégrader l'expérience client.",
    image: "https://www.groupe-alternance.com/wp-content/uploads/2024/11/groupealternancelogoscmjnbaselinenoir-1024x694.png",
  },
  {
    company: "Groupe Alternance",
    text: "Pulse CX nous accompagne avec professionnalisme, écoute et réactivité. Leur soutien a fluidifié nos échanges, amélioré nos délais de réponse et renforcé l'image d'accompagnement personnalisé.",
    image: avisGroupeAlternance,
  },
  {
    company: "Yara",
    text: "Un support réactif, professionnel et parfaitement aligné avec les besoins de nos utilisateurs Yara Connect. Pulse CX dépasse nos attentes.",
    image: avisYara,
  },
  {
    company: "Helix Digital",
    text: "Nous avons fait appel à PulseCX pour booster notre prospection B2B. Résultat : un carnet de rendez-vous bien rempli et des prospects vraiment intéressés.",
    image: avisHelixDigital,
  },
];


const partnerLogos = [
  {
    name: "ALIBABA",
    logo: "https://images.seeklogo.com/logo-png/0/2/alibaba-com-logo-png_seeklogo-6545.png"
  },
  {
    name: "SWISSLIFE",
    logo: "https://upload.wikimedia.org/wikipedia/fr/e/e8/Logo_Swiss_Life.svg"
  },
  {
    name: "GROUPE A.",
    logo: "https://www.groupe-alternance.com/wp-content/uploads/2024/11/groupealternancelogoscmjnbaselinenoir-1024x694.png"
  },
  {
    name: "YARA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfs1BMU5zcBg6mQo66RugHVGa2-WR8aIS1KQ&s"
  }
];

const pulseFeatures = [
  {
    title: "Des équipes dédiées à vos opérations",
    description: "Nous constituons des équipes dédiées à vos activités, sélectionnées selon vos besoins métier et formées à vos processus. La stabilité des équipes et l'appropriation des outils permettent de construire une performance durable.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" stroke="currentColor" />
        <path d="M7 10v4M17 10v4M10 7h4M10 17h4" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    title: "Des opérations structurées dès le départ",
    description: "Chaque mission est organisée autour de processus clairs: scripts, standards qualité, workflows et responsabilités définies. Cette structuration sécurise le démarrage et permet une montée en charge progressive.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 3L3 13h5v5l10-10h-5z" stroke="currentColor" strokeLinejoin="round" />
        <path d="M17 8l3-3M21 4l-3 3" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  },
  {
    title: "Une performance suivie dans la durée",
    description: "Les opérations sont pilotées à partir d'indicateurs définis dès le cadrage: qualité, productivité, SLA ou satisfaction. Les rituels de suivi et l'analyse des données permettent d'identifier rapidement les axes d'amélioration.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17v2M9 11v8M15 7v12M21 3v16" stroke="currentColor" strokeLinecap="round" />
        <path d="M3 19h18" stroke="currentColor" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Analyse & cadrage opérationnel",
    description: "Objectifs, volumes, canaux, KPI et contraintes. Nous définissons le périmètre d'externalisation et le cadre de pilotage."
  },
  {
    number: "02",
    title: "Recrutement & préparation opérationnelle",
    description: "Sélection de profils adaptés, formation aux processus, outils, scripts et standards qualité."
  },
  {
    number: "03",
    title: "Déploiement opérationnel",
    description: "Intégration aux outils, lancement des opérations et montée en charge progressive."
  },
  {
    number: "04",
    title: "Pilotage & amélioration continue",
    description: "Suivi des KPI, QA, rituels de pilotage et actions d'amélioration continue."
  }
];

const pilotageFeatures = [
  "Responsable opérationnel dédié et circuit d'escalade clair",
  "KPI définis dès le cadrage (SLA, qualité, productivité, satisfaction)",
  "Reporting structuré et revues opérationnelles régulières",
  "QA et formation continue pour stabiliser la qualité",
  "Plan d'amélioration basé sur données et feedbacks terrain"
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Garde son style spécial avec les effets de glow */}
      <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-pulse-turquoise blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-pulse-azure blur-3xl" />
        </div>
        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="ml-0">
              <AnimatedSection delay={100}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                  Structurez et scalez.{" "}
                  <span className="text-gradient">Vos opérations client, commerciales et back-office.</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl">
                  PulseCX déploie et pilote des équipes externalisées avec gouvernance opérationnelle, KPI et amélioration continue.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="text-base px-8 py-6">
                      Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/careers">
                    <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                      Voir nos offres
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={400} className="hidden lg:block">
              <img
                src={heroIllustration}
                alt="Dashboard opérationnel PulseCX"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partners - Style dégradé */}
      <section className="py-20 relative overflow-hidden">
        {/* Background dégradé flou - plus subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5" />
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Effet de lumière - plus discret */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pulse-turquoise/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-pulse-azure/10 rounded-full blur-[80px]" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-lg font-semibold text-pulse-azure uppercase tracking-wider">Partenaires</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black mt-3">
              Ils nous font confiance pour opérer
            </h2>
          </AnimatedSection>

          {/* 4 logos + 1 bouton */}
          <AnimatedSection>
            <div className="grid mt-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto p-6 rounded-2xl border border-pulse-turquoise/20 shadow-lg bg-white/30 backdrop-blur-sm">
              {/* 4 logos partenaires */}
              {partnerLogos.map((partner, index) => (
                <AnimatedSection key={partner.name} delay={index * 50}>
                  <div className="group relative">
                    {/* Effet de glow au hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                    {/* Carte du logo */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <div className="flex flex-col items-center gap-4">
                        {/* Espace pour le logo - Taille augmentée */}
                        <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-pulse-turquoise/20">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Nom de l'entreprise */}
                        <span className="font-semibold text-black text-sm text-center uppercase tracking-wide group-hover:text-pulse-turquoise transition-colors">
                          {partner.name}
                        </span>

                        {/* Ligne décorative */}
                        <div className="w-8 h-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Bouton "Voir tous les partenaires" */}
              <AnimatedSection delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                  <button className="relative w-full h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center justify-center gap-4 min-h-[200px]">
                    {/* Icône plus - Taille augmentée */}
                    <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <svg className="w-14 h-14 text-pulse-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>

                    {/* Texte du bouton */}
                    <div className="text-center">
                      <span className="font-semibold text-black text-sm uppercase tracking-wide group-hover:text-pulse-turquoise transition-colors">
                        AUTRE
                      </span>
                      <span className="block text-xs text-gray-500 mt-1 group-hover:text-pulse-turquoise/70 transition-colors">
                        nos partenaires
                      </span>
                    </div>

                    {/* Ligne décorative */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Qui est PulseCX - Style dégradé */}
      <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
        <div className="container mx-auto px-6">
          {/* En-tête */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 max-w-3xl mx-auto">
              Le modèle PulseCX
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Externaliser ne consiste pas seulement à déplacer une activité. La performance repose sur la manière dont les opérations sont structurées, déployées et pilotées.
            </p>
          </AnimatedSection>

          {/* Grille des 3 cartes - largeur augmentée */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {pulseFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="group relative h-full">
                  {/* Carte avec image attachée */}
                  <div className={`relative rounded-2xl h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${index === 1
                    ? 'bg-gradient-to-br from-pulse-turquoise via-pulse-azure to-pulse-turquoise'
                    : 'bg-white border border-gray-200'
                    }`}>

                    {/* Contenu principal avec padding */}
                    <div className="p-6 flex-grow flex flex-col min-h-[280px]">
                      {/* Icône avec dégradé */}
                      <div className="mb-5">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${index === 1
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-gradient-to-br from-pulse-turquoise to-pulse-azure'
                          }`}>
                          <div className={`${index === 1 ? 'text-white' : 'text-white'}`}>
                            {feature.icon}
                          </div>
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className={`text-xl font-bold mb-3 transition-colors ${index === 1 ? 'text-white' : 'text-black group-hover:text-pulse-turquoise'
                        }`}>
                        {feature.title}
                      </h3>

                      {/* Description équilibrée */}
                      <p className={`leading-relaxed mb-5 flex-grow text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600'
                        }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Image en bas - agrandie */}
                    <div className="relative w-full h-56 overflow-hidden mt-auto">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay léger au survol */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Style dégradé */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Nos services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              04 domaines d'externalisation pour couvrir vos opérations
            </h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Une structure lisible, scalable, et adaptée à une montée en puissance progressive selon vos besoins.
            </p>
          </AnimatedSection>

          {/* 2 cartes en haut */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ml-0 md:ml-10 mr-0 md:mr-10">
            {services.slice(0, 2).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Link to={service.href} className="group block">
                  <div className={`relative rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${service.bgGradient}`}>

                    {/* Background dégradé transparent au survol */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header avec icône et titre avec espacement */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className={`text-xs font-bold text-black tracking-wider uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pulse-turquoise pb-2 ${service.fontStyle}`}>
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Titre principal */}
                    <h3 className={`text-2xl font-bold mb-4 text-black ${service.titleFont}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-700 mb-6 leading-relaxed ${service.descFont}`}>
                      {service.desc}
                    </p>

                    {/* Liste des features */}
                    <ul className={`space-y-3 mb-8 ${service.listFont}`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-pulse-turquoise flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bouton avec bordure turquoise et background dégradé */}
                    <button className="w-md inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-pulse-turquoise bg-gradient-to-r from-pulse-turquoise to-pulse-azure text-white font-semibold group-hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-pulse-turquoise/25">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* 2 cartes en bas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-0 md:ml-10 mr-0 md:mr-10">
            {services.slice(2, 4).map((service, index) => (
              <AnimatedSection key={service.id} delay={(index + 2) * 100}>
                <Link to={service.href} className="group block">
                  <div className={`relative rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${service.bgGradient}`}>

                    {/* Background dégradé transparent au survol */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header avec icône et titre avec espacement */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className={`text-xs font-bold text-black tracking-wider uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pulse-turquoise pb-2 ${service.fontStyle}`}>
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Titre principal */}
                    <h3 className={`text-2xl font-bold mb-4 text-black ${service.titleFont}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-700 mb-6 leading-relaxed ${service.descFont}`}>
                      {service.desc}
                    </p>

                    {/* Liste des features */}
                    <ul className={`space-y-3 mb-8 ${service.listFont}`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-pulse-turquoise flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bouton avec bordure turquoise et background dégradé */}
                    <button className="w-md inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-pulse-turquoise bg-gradient-to-r from-pulse-turquoise to-pulse-azure text-white font-semibold group-hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-pulse-turquoise/25">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="py-24 relative overflow-hidden">
        {/* Background dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5" />
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Effets de lumière discrets */}
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-pulse-turquoise/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-pulse-azure/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* En-tête */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Un déploiement opérationnel structuré.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode simple : cadrer l'opération, déployer les équipes, piloter la performance et améliorer en continu.
            </p>
          </AnimatedSection>

          {/* Conteneur avec dégradé et ombre */}
          <div className="relative max-w-6xl mx-auto bg-gradient-to-br from-white/90 to-pulse-turquoise/5 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-pulse-turquoise/10">

            {/* Dégradé de fond interne */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pulse-turquoise/5 via-transparent to-pulse-azure/5 pointer-events-none" />

            {/* Timeline avec numéros sur la ligne */}
            <div className="relative">
              {/* Ligne horizontale avec dégradé plus prononcé */}
              <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-pulse-turquoise via-pulse-azure to-pulse-turquoise rounded-full" />

              {/* Effet de glow sur la ligne */}
              <div className="absolute left-0 right-0 top-7 h-2 bg-gradient-to-r from-pulse-turquoise/20 via-pulse-azure/20 to-pulse-turquoise/20 rounded-full blur-sm" />

              {/* Conteneur des numéros */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {processSteps.map((step, index) => (
                  <AnimatedSection key={step.title} delay={index * 100}>
                    <div className="flex flex-col items-center text-center group">
                      {/* Numéro sur la ligne avec effet de glow */}
                      <div className="relative z-10 mb-10">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pulse-turquoise to-pulse-azure blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                      </div>

                      {/* Contenu centré avec améliorations */}
                      <div className="mt-2">
                        <h3 className="text-lg font-bold text-black mb-3 group-hover:text-pulse-turquoise transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto group-hover:text-gray-700 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Élément décoratif en bas */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pulse-turquoise/30 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Référence - Pilotage */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Pilotage</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Une externalisation pilotée comme une opération interne.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              PulseCX ne se limite pas à exécuter des tâches : nous structurons, pilotons et améliorons les opérations dans la durée.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ml-0 md:ml-10 mr-0 md:mr-10">
            {/* Grande carte bleue - 4 garanties concrètes avec chiffres */}
            <AnimatedSection className="md:col-span-12">
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-hero text-primary-foreground border border-border/10 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-pulse-turquoise blur-[120px]" />
                  <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-pulse-azure blur-[100px]" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/60 mb-4">
                    NOS ENGAGEMENTS
                  </div>
                  <Sparkles className="w-10 h-10 text-pulse-turquoise mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-primary-foreground">
                    4 garanties concrètes pour votre pilotage
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Garantie 1 */}
                    <div className="group">
                      <div className="text-4xl md:text-5xl font-display font-bold text-pulse-turquoise mb-2">X%</div>
                      <div className="text-sm font-semibold text-primary-foreground mb-1">Transparence</div>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        Accès en temps réel à vos indicateurs et reporting détaillé
                      </p>
                    </div>

                    {/* Garantie 2 */}
                    <div className="group">
                      <div className="text-4xl md:text-5xl font-display font-bold text-pulse-turquoise mb-2">-X%</div>
                      <div className="text-sm font-semibold text-primary-foreground mb-1">Délais de traitement</div>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        Objectif contractuel atteint dès les 3 premiers mois
                      </p>
                    </div>

                    {/* Garantie 3 */}
                    <div className="group">
                      <div className="text-4xl md:text-5xl font-display font-bold text-pulse-turquoise mb-2">X%</div>
                      <div className="text-sm font-semibold text-primary-foreground mb-1">SLA atteint</div>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        Engagement contractuel avec pénalités en cas de non-respect
                      </p>
                    </div>

                    {/* Garantie 4 */}
                    <div className="group">
                      <div className="text-4xl md:text-5xl font-display font-bold text-pulse-turquoise mb-2">X/X</div>
                      <div className="text-sm font-semibold text-primary-foreground mb-1">Satisfaction client</div>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        Score CSAT mesuré et publié mensuellement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Petite carte - Tableau de bord */}
            <AnimatedSection className="md:col-span-4" delay={100}>
              <div className="rounded-3xl p-7 h-full min-h-[320px] bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  PILOTAGE TEMPS RÉEL
                </div>
                <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-pulse-azure" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Tableau de bord de pilotage
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">
                  À remplacer par screenshot réel
                </p>

                {/* Placeholder du tableau de bord */}
                <div className="relative flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner min-h-[180px]">
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                    <svg className="w-12 h-12 text-pulse-turquoise/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-gray-500 text-xs font-medium">Mockup Dashboard</p>
                  </div>

                  {/* Simulation de graphiques décoratifs */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-30">
                    <div className="h-12 w-1/3 bg-pulse-turquoise/30 rounded-t-lg" style={{ height: '30px' }} />
                    <div className="h-12 w-1/3 bg-pulse-azure/30 rounded-t-lg" style={{ height: '50px' }} />
                    <div className="h-12 w-1/3 bg-pulse-turquoise/30 rounded-t-lg" style={{ height: '20px' }} />
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-3 text-center">
                  Qualité • SLA • Productivité
                </p>
              </div>
            </AnimatedSection>

            {/* Troisième carte - Indicateurs clés */}
            <AnimatedSection className="md:col-span-4" delay={200}>
              <div className="rounded-3xl p-7 h-full bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  INDICATEURS CLÉS
                </div>
                <div className="w-12 h-12 rounded-2xl bg-pulse-turquoise/10 border border-pulse-turquoise/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-pulse-turquoise" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Performance mesurée
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">
                  Des KPIs clairs pour piloter l'opération
                </p>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-pulse-turquoise">X%</div>
                    <div className="text-xs text-muted-foreground">SLA atteint</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-pulse-azure">X/X</div>
                    <div className="text-xs text-muted-foreground">CSAT</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-pulse-turquoise">-X%</div>
                    <div className="text-xs text-muted-foreground">Temps traitement</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-pulse-azure">X%</div>
                    <div className="text-xs text-muted-foreground">Qualité</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Grande carte - Amélioration continue */}
            <AnimatedSection className="md:col-span-4" delay={300}>
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full min-h-[280px] border border-border shadow-card hover:shadow-card-hover transition-all duration-300 bg-card">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-pulse-turquoise blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-pulse-azure blur-[80px]" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
                    AMÉLIORATION CONTINUE
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-pulse-azure" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Plan d'amélioration basé sur données et feedbacks terrain
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed max-w-lg mb-5">
                    Nos actions correctives sont déclenchées par des alertes automatiques et validées lors de revues opérationnelles hebdomadaires.
                  </p>
                  <ul className="flex flex-wrap gap-4">
                    <li className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> Alertes automatiques
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> Revues hebdomadaires
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> Plans d'action correctifs
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Carte - Ce que vous gagnez */}
            <AnimatedSection className="md:col-span-6" delay={350}>
              <div className="rounded-3xl p-7 h-full bg-card border border-border shadow-card hover:shadow-card-hover hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-600">
                    VALEUR AJOUTÉE
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Ce que vous <span className="text-emerald-600">gagnez</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Visibilité totale</div>
                      <div className="text-xs text-muted-foreground">Pilotez vos opérations en temps réel</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Performance garantie</div>
                      <div className="text-xs text-muted-foreground">Des objectifs clairs et mesurés</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Agilité opérationnelle</div>
                      <div className="text-xs text-muted-foreground">Adaptez vos ressources en temps réel</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Amélioration continue</div>
                      <div className="text-xs text-muted-foreground">+X% de productivité/an en moyenne</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Carte - Ce que vous évitez */}
            <AnimatedSection className="md:col-span-6" delay={400}>
              <div className="rounded-3xl p-7 h-full bg-card border border-border shadow-card hover:shadow-card-hover hover:border-rose-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-rose-600">
                    RISQUES ÉLIMINÉS
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                    <Shield className="w-5 h-5 text-rose-600" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Ce que vous <span className="text-rose-600">évitez</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                    <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Frais cachés</div>
                      <div className="text-xs text-muted-foreground">Prix transparent, sans surprise</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                    <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Délais non respectés</div>
                      <div className="text-xs text-muted-foreground">SLA contractuels avec pénalités</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                    <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Turnover des équipes</div>
                      <div className="text-xs text-muted-foreground">&lt;X% de turnover annuel</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                    <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">Effet "boîte noire"</div>
                      <div className="text-xs text-muted-foreground">Reporting hebdomadaire détaillé</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Témoignages - Style dégradé */}
      <section className="py-24 relative overflow-hidden">
        {/* Fond avec dégradé flou et éléments décoratifs - Style Beepeeoo */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/5 via-transparent to-pulse-azure/5" />
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-pulse-turquoise/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-pulse-azure/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pulse-turquoise/5 to-pulse-azure/5 blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Témoignages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Des opérations confiées, des résultats durables.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Des partenaires qui nous confient leurs opérations et avec lesquels nous construisons une relation de travail stable dans le temps.
            </p>
          </AnimatedSection>

          {/* Grille avec largeur uniforme pour toutes les lignes */}
          <div className="max-w-6xl mx-auto">
            {/* Première ligne - 3 cartes - largeur complète */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {testimonials.slice(0, 3).map((t, i) => (
                <AnimatedSection key={t.company} delay={i * 100}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-pulse-turquoise/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="absolute top-4 right-4 text-4xl font-serif text-pulse-turquoise/20">"</div>
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={t.image}
                          alt={t.company}
                          className="w-14 h-14 rounded-xl object-cover group-hover:border-pulse-turquoise transition-colors"
                        />
                        <div>
                          <h4 className="font-display font-bold text-foreground group-hover:text-pulse-turquoise transition-colors">
                            {t.company}
                          </h4>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="w-3.5 h-3.5 fill-pulse-yellow-soft text-pulse-yellow-soft" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm italic leading-relaxed">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Deuxième ligne - 2 cartes - même largeur que la ligne du haut */}
            {/* <div className="grid md:grid-cols-2 gap-6 mb-6">
              {testimonials.slice(3, 5).map((t, i) => (
                <AnimatedSection key={t.company} delay={300 + i * 100}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-azure to-pulse-turquoise rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-pulse-azure/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={t.image}
                          alt={t.company}
                          className="w-14 h-14 rounded-full object-cover border-2 border-pulse-azure/20 group-hover:border-pulse-azure transition-colors"
                        />
                        <div>
                          <h4 className="font-display font-bold text-foreground group-hover:text-pulse-azure transition-colors">
                            {t.company}
                          </h4>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="w-3.5 h-3.5 fill-pulse-yellow-soft text-pulse-yellow-soft" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm italic leading-relaxed">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div> */}

            {/* Troisième ligne - 1 carte - même largeur que les lignes au-dessus */}
            {/* <div className="grid md:grid-cols-1 gap-6">
              {testimonials.slice(5, 6).map((t, i) => (
                <AnimatedSection key={t.company} delay={500}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise via-pulse-azure to-pulse-turquoise rounded-2xl opacity-0 group-hover:opacity-40 blur transition-all duration-500" />
                    <div className="relative bg-gradient-to-r from-pulse-turquoise/5 to-pulse-azure/5 backdrop-blur-sm rounded-2xl p-8 border border-pulse-turquoise/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <img
                          src={t.image}
                          alt={t.company}
                          className="w-20 h-20 rounded-2xl object-cover border-3 border-white shadow-lg"
                        />
                        <div>
                          <h4 className="font-display text-xl font-bold text-foreground mb-1">{t.company}</h4>
                          <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="w-4 h-4 fill-pulse-yellow-soft text-pulse-yellow-soft" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 text-base leading-relaxed italic mt-4">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Final - Garde son style hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Discutons de vos opérations et de vos objectifs.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Nous analysons vos volumes, canaux et objectifs pour définir un périmètre d'externalisation et un cadre de pilotage adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">
                  Découvrir nos offres
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Index;