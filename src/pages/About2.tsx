import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Target, Eye, Heart, Users,
  ShieldCheck, BarChart3, TrendingUp, Clock,
  CheckCircle2, Zap, Award, Briefcase, Quote
} from "lucide-react";

// Données enrichies
const stats = [
  { value: "200+", label: "Collaborateurs", icon: Users },
  { value: "10+", label: "Années d'expérience", icon: Award },
  { value: "98%", label: "Satisfaction client", icon: ShieldCheck },
  { value: "24/7", label: "Support disponible", icon: Clock },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Nous visons l'excellence dans chaque interaction, chaque processus, chaque résultat.",
    accent: "from-pulse-turquoise to-pulse-azure",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: Eye,
    title: "Transparence",
    desc: "Reporting en temps réel, KPI partagés, gouvernance ouverte avec nos partenaires.",
    accent: "from-pulse-azure to-pulse-turquoise",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: Heart,
    title: "Engagement",
    desc: "Des équipes formées, fidélisées et impliquées dans la réussite de nos clients.",
    accent: "from-pulse-turquoise to-pulse-azure",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Nous construisons des partenariats durables basés sur la confiance mutuelle.",
    accent: "from-pulse-azure to-pulse-turquoise",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
];

const teamMembers = [
  {
    name: "Sophie Martin",
    role: "Directrice Générale",
    bio: "15 ans d'expérience dans l'externalisation et la relation client",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Thomas Dubois",
    role: "Directeur des Opérations",
    bio: "Expert en optimisation de processus et transformation digitale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Claire Lefebvre",
    role: "Responsable RH",
    bio: "Passionnée par le développement des talents et la culture d'entreprise",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const testimonials = [
  {
    text: "PulseCX a transformé notre support client avec une équipe professionnelle et réactive.",
    author: "Jean Dupont",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Un partenaire de confiance qui a su s'adapter à nos besoins spécifiques.",
    author: "Marie Laurent",
    role: "Directrice Marketing, InnovPlus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    text: "L'externalisation de notre back-office avec PulseCX nous a permis de gagner en efficacité et de nous concentrer sur notre cœur de métier. Un vrai gain de productivité !",
    author: "Thomas Martin",
    role: "COO, LogiSmart",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const About = () => (
  <div className="min-h-screen">
    {/* Hero Section - Impact et chiffres clés */}
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-24">
      {/* Background décoratif */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[800px] h-[600px] rounded-full bg-pulse-turquoise blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full bg-pulse-azure blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Marche */}
          <AnimatedSection className="relative">
            {/* Marches décoratives */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="flex flex-col gap-2">
                <div className="w-1 h-12 bg-gradient-to-t from-pulse-turquoise/40 to-transparent rounded-full" />
                <div className="w-1 h-8 bg-pulse-turquoise/30 rounded-full" />
                <div className="w-1 h-8 bg-pulse-turquoise/20 rounded-full" />
                <div className="w-1 h-6 bg-pulse-turquoise/10 rounded-full" />
              </div>
            </div>

            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
                À propos de PulseCX
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Une externalisation pilotée comme une
                <span className="text-pulse-turquoise"> opération interne.</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                PulseCX aide les équipes CX, Sales et Ops à externaliser sans perdre le contrôle : équipes dédiées, process documentés, intégration à vos outils et gouvernance opérationnelle claire.
              </p>

              {/* Deux boutons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="text-base px-8 py-6 group">
                    Planifier un échange
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/model">
                  <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10">
                    Découvrir notre modèle
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Colonne droite - Stats */}
          <AnimatedSection delay={200}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1 */}
                <div className="text-center p-4 rounded-xl bg-pulse-turquoise/5 border border-pulse-turquoise/20 hover:border-pulse-turquoise/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-pulse-turquoise mb-1">XXX+</div>
                  <div className="text-sm font-medium text-primary-foreground/80">Collaborateurs</div>
                </div>

                {/* Stat 2 */}
                <div className="text-center p-4 rounded-xl bg-pulse-azure/5 border border-pulse-azure/20 hover:border-pulse-azure/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-pulse-azure mb-1">Europe</div>
                  <div className="text-sm font-medium text-primary-foreground/80">Fuseau EAT / CEST</div>
                </div>

                {/* Stat 3 */}
                <div className="text-center p-4 rounded-xl bg-pulse-turquoise/5 border border-pulse-turquoise/20 hover:border-pulse-turquoise/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-pulse-turquoise mb-1">Omnicanal</div>
                  <div className="text-sm font-medium text-primary-foreground/80">Support & Ops</div>
                </div>

                {/* Stat 4 */}
                <div className="text-center p-4 rounded-xl bg-pulse-azure/5 border border-pulse-azure/20 hover:border-pulse-azure/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-pulse-azure mb-1">XX</div>
                  <div className="text-sm font-medium text-primary-foreground/80">Clients actifs</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Section Notre modèle */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-pulse-turquoise/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-pulse-azure/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">
            Notre modèle
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Une exécution structurée, conçue pour durer.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            L'erreur la plus fréquente des BPO : parler uniquement de "talent", de "coût" ou de "disponibilité".<br />
            PulseCX met l'accent sur ce qui fait la différence en production : gouvernance, process, intégration et pilotage.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto rounded-3xl border border-pulse-turquoise/10 bg-white/70 backdrop-blur-md shadow-md py-6">

          {/* Ligne */}
          <div className="absolute mt-6 top-6 left-0 w-full h-[2px] bg-gradient-to-r from-pulse-turquoise/40 via-pulse-azure/50 to-pulse-turquoise/40" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { num: "01", title: "Cadrage", desc: "Objectifs, volumes, canaux, outils, règles d'escalade, QA & reporting." },
              { num: "02", title: "Mise en place", desc: "Recrutement ciblé, formation, scripts, base de connaissance, accès & workflows." },
              { num: "03", title: "Pilotage", desc: "Rituels opérationnels, KPI, revues hebdo, qualité & plans d'action." },
              { num: "04", title: "Amélioration", desc: "Optimisation continue : réduction du backlog, hausse qualité, automatisations ciblées." }
            ].map((step, index) => (
              <AnimatedSection key={step.num} delay={100 + index * 100}>

                <div className="flex flex-col items-center text-center relative">

                  {/* Cercle numéro */}
                  <div className="relative z-10">
                    {/* halo blanc pour couper la ligne */}
                    <div className="bg-white p-1 rounded-full">
                      <div className="w-12 h-12 rounded-full border-2 border-pulse-turquoise flex items-center justify-center bg-white shadow-sm">
                        <span className="text-pulse-turquoise font-bold text-sm">
                          {step.num}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="mt-8">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>

                </div>

              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Ligne décorative */}
        <div className="flex justify-center mt-14">
          <div className="w-24 h-[2px] bg-gradient-to-r from-pulse-turquoise/30 via-pulse-azure/30 to-pulse-turquoise/30 rounded-full" />
        </div>

      </div>
    </section>

    {/* Section Ce que vous obtenez */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-pulse-turquoise/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-pulse-azure/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Ce que vous obtenez</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Pas une "vente d'agents" : <span className="text-gradient">un cadre opérationnel complet.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Piloté et amélioré en continu.
          </p>
        </AnimatedSection>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Pilier 1 - Gouvernance claire */}
          <AnimatedSection delay={100}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-pulse-turquoise/10 group-hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🧭</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-pulse-turquoise transition-colors">
                  Gouvernance claire
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Rôles définis, routines, escalades et décisions suivies dans le temps.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Pilier 2 - Pilotage KPI */}
          <AnimatedSection delay={200}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-pulse-turquoise/10 group-hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📊</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-pulse-turquoise transition-colors">
                  Pilotage KPI
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Indicateurs utiles, suivi régulier, actions correctives : le pilotage fait partie du service.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Pilier 3 - Intégration à vos outils */}
          <AnimatedSection delay={300}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-pulse-turquoise/10 group-hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔌</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-pulse-turquoise transition-colors">
                  Intégration à vos outils
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  On opère dans votre environnement (support, CRM, collaboration) pour limiter la friction.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Pilier 4 - Amélioration continue */}
          <AnimatedSection delay={400}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-pulse-turquoise/10 group-hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔁</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-pulse-turquoise transition-colors">
                  Amélioration continue
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Analyse des données, recommandations terrain, itérations et montée en compétence.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ligne décorative sous les piliers */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise/30 via-pulse-azure/30 to-pulse-turquoise/30 rounded-full" />
        </div>
      </div>
    </section>

    {/* Section Madagascar - Hub offshore */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-pulse-turquoise/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-pulse-azure/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Madagascar</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Un hub offshore adapté aux opérations européennes.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Une base offshore orientée qualité et stabilité.
          </p>
        </AnimatedSection>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Colonne gauche - Talent & culture */}
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-pulse-turquoise/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Talent & culture
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous construisons des équipes durables, avec une culture de process et un encadrement de proximité orienté performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Équipes francophones, culture de service orientée qualité</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Formation continue, routines QA et calibration régulière</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Stabilité des équipes : réduction du turn-over, expertise qui se capitalise</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Colonne droite - Placeholder photo */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-full min-h-[320px] flex flex-col items-center justify-center p-8 text-center">
                <svg className="w-20 h-20 text-pulse-turquoise/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-muted-foreground font-medium">Placeholder — photo bureau / équipe / training</p>
                <p className="text-sm text-muted-foreground/60 mt-2">(à remplacer par visuels réels)</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Section Ce que cela change pour vous */}
        <div className="mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-pulse-turquoise/20 p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Ce que cela change pour vous
              </h3>
              <p className="text-muted-foreground">
                Proximité horaire. Coordination fluide.
              </p>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              L'enjeu n'est pas "low-cost". L'enjeu est la capacité à exécuter, stabiliser, et piloter vos opérations au quotidien — avec une équipe qui fonctionne sur votre fuseau.
            </p>
            <ul className="grid md:grid-cols-3 gap-4 mb-8">
              <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">Proximité horaire avec l'Europe (coordination fluide, rituels simples)</span>
              </li>
              <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">Scalabilité : montée en charge progressive sans sacrifier la qualité</span>
              </li>
              <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">Organisation pensée "ops" : gouvernance, process, intégration et pilotage</span>
              </li>
            </ul>

            {/* Badge fuseau horaire */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-turquoise/10 border border-pulse-turquoise/20">
                <Clock className="w-4 h-4 text-pulse-turquoise" />
                <span className="text-sm font-medium text-foreground">Fuseau EAT — UTC+3 · Compatible CEST</span>
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Planifier un échange
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white">
                  Voir les services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne décorative */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise/30 via-pulse-azure/30 to-pulse-turquoise/30 rounded-full" />
        </div>
      </div>
    </section>

    {/* Section Next step */}
    <section className="py-24 relative overflow-hidden">
      {/* Background dégradé avec effet de verre */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/10 via-pulse-azure/10 to-pulse-turquoise/10" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Effets de lumière */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pulse-turquoise/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-pulse-azure/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pulse-turquoise/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-pulse-turquoise/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
              <span className="text-sm font-medium text-foreground">Next step</span>
            </div>
          </AnimatedSection>

          {/* Titre */}
          <AnimatedSection delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Discutons de votre organisation opérationnelle.
            </h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Un échange court pour cadrer vos volumes, vos canaux, vos outils et définir un modèle de delivery adapté.
            </p>
          </AnimatedSection>

          {/* Boutons CTA */}
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="cta"
                  size="lg"
                  className="group text-base px-8 py-6 bg-gradient-to-r from-pulse-turquoise to-pulse-azure hover:shadow-lg hover:shadow-pulse-turquoise/25 transition-all duration-300"
                >
                  Planifier un échange
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white transition-all duration-300"
                >
                  Voir nos services
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Éléments décoratifs supplémentaires */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pulse-turquoise/40" />
            <div className="w-2 h-2 rounded-full bg-pulse-azure/40" />
            <div className="w-2 h-2 rounded-full bg-pulse-turquoise/40" />
          </div>
        </div>
      </div>
    </section>


    {/* Mission & Vision avec portraits */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Notre raison d'être</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Ce qui nous anime au quotidien
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 ml-0 md:ml-10 mr-0 md:mr-10">
          {/* Mission avec portrait */}
          <AnimatedSection>
            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card-hover transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pulse-turquoise/20 to-transparent rounded-full blur-3xl" />
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Mission</span>
                    <h3 className="font-display text-2xl font-bold text-foreground">Structurer pour performer</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Offrir aux entreprises un partenaire opérationnel fiable, capable de gérer leurs processus critiques avec la même exigence qu'en interne — grâce à une gouvernance solide, des KPI clairs et un management de proximité.
                </p>
                {/* Portrait de l'équipe */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pulse-turquoise/5 to-transparent rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Portrait"
                    className="w-12 h-12 rounded-full object-cover border-2 border-pulse-turquoise"
                  />
                  <div>
                    <div className="font-display font-bold text-foreground">Sophie Martin</div>
                    <div className="text-xs text-muted-foreground">Directrice Générale</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision avec portrait */}
          <AnimatedSection delay={200}>
            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card-hover transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pulse-azure/20 to-transparent rounded-full blur-3xl" />
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-azure to-pulse-turquoise flex items-center justify-center flex-shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-pulse-azure uppercase tracking-wider">Vision</span>
                    <h3 className="font-display text-2xl font-bold text-foreground">Devenir la référence</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Devenir le partenaire de référence en externalisation structurée, reconnu pour sa rigueur opérationnelle, sa transparence et sa capacité à créer de la valeur durable pour ses clients.
                </p>
                {/* Portrait de l'équipe */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pulse-azure/5 to-transparent rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Portrait"
                    className="w-12 h-12 rounded-full object-cover border-2 border-pulse-azure"
                  />
                  <div>
                    <div className="font-display font-bold text-foreground">Thomas Dubois</div>
                    <div className="text-xs text-muted-foreground">Directeur des Opérations</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Valeurs avec photos d'équipe */}
    <section className="bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Nos valeurs</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Ce qui nous guide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Des valeurs incarnées par nos équipes au quotidien
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-0 md:ml-10 mr-0 md:mr-10">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 100}>
              <div className="group relative h-full">
                {/* Image en arrière-plan au hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={value.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Carte principale */}
                <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-transparent transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.accent} flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{value.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm flex-1">
                    {value.desc}
                  </p>

                  {/* Mini avatar en bas */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                    <img
                      src={value.image}
                      alt="Team"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-muted-foreground">Équipe PulseCX</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Équipe - Grille de portraits */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Leadership</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Une équipe de direction expérimentée
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Des experts passionnés qui pilotent vos opérations avec excellence
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 ml-0 md:ml-10 mr-0 md:mr-10">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 150}>
              <div className="group relative">
                {/* Carte avec effet de profondeur */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

                <div className="relative bg-card rounded-2xl p-6 border border-border group-hover:border-transparent transition-all duration-300">
                  {/* Photo avec bordure dégradée */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-64 object-cover rounded-xl border-2 border-transparent group-hover:border-pulse-turquoise transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-pulse-turquoise font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Témoignages clients avec photos */}
    <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-pulse-turquoise/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-pulse-azure/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Ils nous font confiance</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            La parole à nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Découvrez ce que nos clients disent de leur collaboration avec PulseCX
          </p>
        </AnimatedSection>

        {/* Grille à 3 colonnes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group relative h-full">
                {/* Effet de glow au hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />

                {/* Carte principale */}
                <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                  {/* Guillemets décoratifs */}
                  <div className="absolute top-6 right-6 text-6xl font-serif text-pulse-turquoise/10">"</div>

                  {/* En-tête avec avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-pulse-turquoise/20 group-hover:border-pulse-turquoise transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground group-hover:text-pulse-turquoise transition-colors">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Texte du témoignage */}
                  <p className="text-muted-foreground italic leading-relaxed flex-1 relative">
                    <span className="text-pulse-turquoise/20 text-2xl absolute -left-2 -top-2">"</span>
                    <span className="relative z-10">{testimonial.text}</span>
                  </p>

                  {/* Note 5 étoiles */}
                  <div className="flex items-center gap-1 mt-6 pt-4 border-t border-border">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-pulse-yellow-soft text-pulse-yellow-soft" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Badge de satisfaction */}
        <AnimatedSection delay={500} className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-pulse-turquoise/20">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-foreground">
              <span className="font-bold text-pulse-turquoise">+50</span> entreprises nous font confiance
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA Final avec photo d'équipe */}
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              {teamMembers.map((member, i) => (
                <img
                  key={i}
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
              ))}
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à structurer vos opérations ?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de vos enjeux et construisons ensemble une solution sur mesure, pilotée et performante.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;