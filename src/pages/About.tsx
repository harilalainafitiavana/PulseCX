import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Target, Eye, Heart, Users,
  ShieldCheck, BarChart3, TrendingUp, Clock,
  CheckCircle2, Zap, Award, Briefcase, Quote,
  Globe,
  MessageSquare,
  Building,
  Settings
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

            <div className="ml-0 md:ml-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
                À propos de PulseCX
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                PulseCX, un BPO offshore basé à
                <span className="text-pulse-turquoise"> Madagascar.</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Nous accompagnons des entreprises en France et en Europe en opérant des activités de support, commerciales et back-office. Notre ambition : délivrer une externalisation fiable, structurée et orientée performance.
              </p>

              {/* Deux boutons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="text-base px-8 py-6 group">
                    Nous contacter
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10">
                    Voir nos services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Section Notre identité */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
            Notre identité
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Mission, vision, valeurs.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Version corporate classique — à compléter / ajuster selon votre narration finale.
          </p>
        </AnimatedSection>

        {/* 3 cards - Mission, Vision, Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-0 md:ml-10 mr-0 md:mr-10">
          {/* Carte Mission */}
          <AnimatedSection delay={0}>
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Notre mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed flex-1">
                  Permettre à nos clients de confier leurs opérations tout en conservant un haut niveau d'exigence sur la qualité et la performance.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte Vision */}
          <AnimatedSection delay={100}>
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Notre vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed flex-1">
                  Construire un partenaire d'externalisation qui fonctionne comme une extension interne : équipes dédiées, process et pilotage clairs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte Valeurs */}
          <AnimatedSection delay={200}>
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Nos valeurs
                </h3>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-md">Excellence opérationnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-md">Transparence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-md">Responsabilisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-md">Amélioration continue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-md">Esprit d'équipe</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full" />
        </div>
      </div>
    </section>

    {/* Section Notre histoire */}
    <section className="py-24 bg-gradient-to-br from-pulse-azure/5 to-pulse-turquoise/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
            Notre histoire
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Les grandes étapes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            De la création à aujourd'hui, un parcours construit autour de l'excellence opérationnelle.
          </p>
        </AnimatedSection>

        {/* Timeline horizontale */}
        <div className="relative max-w-6xl mx-auto ml-0 md:ml-10 mr-0 md:mr-10">
          {/* Ligne horizontale décorative */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pulse-turquoise/20 via-pulse-azure/40 to-pulse-turquoise/20 hidden md:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Étape 1 - Création */}
            <AnimatedSection delay={0}>
              <div className="relative group">
                {/* <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 border-2 border-pulse-turquoise/40 flex items-center justify-center bg-card">
                <div className="w-2 h-2 rounded-full bg-pulse-turquoise" />
              </div>
            </div> */}
                <div className="bg-card rounded-xl p-5 border border-border group-hover:border-pulse-turquoise/30 group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-xs text-muted-foreground/60 mb-2 font-mono">
                    __ / __
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-xs font-medium mb-3">
                    Étape 1
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Création
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lancement des premières activités opérées depuis Madagascar.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Étape 2 - Montée en puissance */}
            <AnimatedSection delay={100}>
              <div className="relative group">
                {/* <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 border-2 border-pulse-turquoise/40 flex items-center justify-center bg-card">
                <div className="w-2 h-2 rounded-full bg-pulse-turquoise" />
              </div>
            </div> */}
                <div className="bg-card rounded-xl p-5 border border-border group-hover:border-pulse-turquoise/30 group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-xs text-muted-foreground/60 mb-2 font-mono">
                    __ / __
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-xs font-medium mb-3">
                    Étape 2
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Montée en puissance
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Structuration des équipes, mise en place des premiers rituels QA & reporting.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Étape 3 - Développement */}
            <AnimatedSection delay={200}>
              <div className="relative group">
                {/* <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 border-2 border-pulse-turquoise/40 flex items-center justify-center bg-card">
                <div className="w-2 h-2 rounded-full bg-pulse-turquoise" />
              </div>
            </div> */}
                <div className="bg-card rounded-xl p-5 border border-border group-hover:border-pulse-turquoise/30 group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-xs text-muted-foreground/60 mb-2 font-mono">
                    __ / __
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-xs font-medium mb-3">
                    Étape 3
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Développement
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Élargissement des périmètres : multicanal, back-office, opérations commerciales.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Étape 4 - Rebranding PulseCX */}
            <AnimatedSection delay={300}>
              <div className="relative group">
                {/* <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 border-2 border-pulse-turquoise/40 flex items-center justify-center bg-card">
                <div className="w-2 h-2 rounded-full bg-pulse-turquoise" />
              </div>
            </div> */}
                <div className="bg-card rounded-xl p-5 border border-border group-hover:border-pulse-turquoise/30 group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-xs text-muted-foreground/60 mb-2 font-mono">
                    __ / __
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-xs font-medium mb-3">
                    Étape 4
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Rebranding PulseCX
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clarification du positionnement premium : opérations structurées et pilotées.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full" />
        </div>
      </div>
    </section>

    {/* Section En chiffres */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
            En chiffres
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            PulseCX aujourd'hui.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Une présence solide, une équipe engagée, des résultats concrets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Carte 1 - Collaborateurs */}
          <AnimatedSection delay={0}>
            <div className="relative group text-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <div className="font-display text-5xl font-bold text-foreground mb-2">
                  __
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  Collaborateurs
                </div>
                <p className="text-xs text-muted-foreground">
                  Effectif total (agents + encadrement)
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte 2 - Clients actifs */}
          <AnimatedSection delay={100}>
            <div className="relative group text-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Building className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <div className="font-display text-5xl font-bold text-foreground mb-2">
                  __
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  Clients actifs
                </div>
                <p className="text-xs text-muted-foreground">
                  Clients opérés sur 12 mois glissants
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte 3 - Interactions / an */}
          <AnimatedSection delay={200}>
            <div className="relative group text-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <div className="font-display text-5xl font-bold text-foreground mb-2">
                  __
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  Interactions / an
                </div>
                <p className="text-xs text-muted-foreground">
                  Email, chat, voix, back-office
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte 4 - Langues supportées */}
          <AnimatedSection delay={300}>
            <div className="relative group text-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-pulse-turquoise" />
                </div>
                <div className="font-display text-5xl font-bold text-foreground mb-2">
                  __
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  Langues supportées
                </div>
                <p className="text-xs text-muted-foreground">
                  FR / EN / …
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full" />
        </div>
      </div>
    </section>

    {/* Section L'équipe */}
    <section className="py-24 bg-gradient-to-br from-pulse-azure/5 to-pulse-turquoise/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
            L'équipe
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Une organisation claire.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Des profils complémentaires pour garantir performance et pilotage.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Carte 1 - Direction */}
          <AnimatedSection delay={0}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                {/* Placeholder photo - hauteur réduite */}
                <div className="py-8 px-6 bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-3 shadow-md">
                      <Users className="w-10 h-10 text-pulse-turquoise/60" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Photo / portrait</p>
                  </div>
                </div>
                <div className="p-6 text-center flex-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-semibold mb-4">
                    Direction
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    CEO / COO
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Vision, gouvernance, relation client et pilotage des engagements.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte 2 - Operations */}
          <AnimatedSection delay={100}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                {/* Placeholder photo - hauteur réduite */}
                <div className="py-8 px-6 bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-3 shadow-md">
                      <Settings className="w-10 h-10 text-pulse-turquoise/60" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Photo / portrait</p>
                  </div>
                </div>
                <div className="p-6 text-center flex-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-semibold mb-4">
                    Operations
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Head of Ops
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Delivery, staffing, supervision, QA et amélioration continue des opérations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Carte 3 - Data & Tools */}
          <AnimatedSection delay={200}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border group-hover:border-pulse-turquoise/30 transition-all duration-300 h-full flex flex-col">
                {/* Placeholder photo - hauteur réduite */}
                <div className="py-8 px-6 bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-3 shadow-md">
                      <BarChart3 className="w-10 h-10 text-pulse-turquoise/60" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Photo / portrait</p>
                  </div>
                </div>
                <div className="p-6 text-center flex-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-semibold mb-4">
                    Data & Tools
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Data / Ops Analyst
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reporting, automatisation, outillage, intégrations et support au pilotage.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full" />
        </div>
      </div>
    </section>

    {/* Section Localisation */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
            Localisation
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            PulseCX à Madagascar.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Un cadre d'excellence, une équipe engagée, une proximité avec vos marchés.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ml-0 md:ml-20 mr-0 md:mr-10">
          {/* Partie gauche - Texte */}
          <div>
            <AnimatedSection delay={0}>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pourquoi Madagascar ?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Madagascar offre un bassin de talents francophones, une forte culture de service, et une proximité horaire avec l'Europe.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-pulse-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-pulse-turquoise/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1">
                      Francophonie et proximité culturelle
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Une maîtrise parfaite du français et une compréhension fine des codes européens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-pulse-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-pulse-turquoise/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1">
                      Stabilité d'équipes et montée en compétence
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Une culture de la fidélisation et une formation continue qui garantissent la qualité dans la durée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-pulse-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-pulse-turquoise/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1">
                      Couverture horaire adaptée à l'Europe
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Un fuseau horaire proche (UTC+3) qui permet une synergie naturelle avec vos équipes européennes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Partie droite - Placeholder visuel */}
          <AnimatedSection delay={100}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 rounded-2xl overflow-hidden border border-pulse-turquoise/20 group-hover:border-pulse-turquoise/40 transition-all duration-300">
                {/* Placeholder visuel */}
                <div className="aspect-[4/3] flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-6 shadow-lg">
                    <Globe className="w-12 h-12 text-pulse-turquoise/60" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    Visuel Madagascar
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Carte · Photo bureau · Culture & équipe
                  </p>
                  <div className="mt-6 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-pulse-turquoise/40" />
                    <div className="w-2 h-2 rounded-full bg-pulse-azure/40" />
                    <div className="w-2 h-2 rounded-full bg-pulse-turquoise/40" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full" />
        </div>
      </div>
    </section>

    {/* Section CTA - Parlons de vos opérations */}
    <section className="py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
              Next step
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Parlons de vos opérations.
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Nous analysons vos volumes, vos canaux et vos objectifs pour définir un périmètre d'externalisation et un cadre de pilotage adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-5 group">
                  Planifier un échange
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-5 group">
                  Explorer les services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Section : L'expérience PulseCX en images */}
    <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">En images</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            L'expérience PulseCX
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Découvrez notre environnement de travail et nos équipes en action
          </p>
        </AnimatedSection>

        {/* Rangée du haut - Grand cadre à gauche + 4 petits cadres (2x2) à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6 max-w-6xl mx-auto">
          {/* Grand cadre à gauche - 7 colonnes */}
          <AnimatedSection className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
              <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Image placeholder</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Collaboration d'équipe</h3>
                  <p className="text-white/90 text-sm">Plus de 50 experts à votre service</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bloc des 4 petits cadres (2x2) à droite - 5 colonnes */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Carte 1 - en haut à gauche */}
              <AnimatedSection delay={50}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground">Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h3 className="font-display text-sm font-bold text-white">KPIs temps réel</h3>
                  </div>
                </div>
              </AnimatedSection>

              {/* Carte 2 - en haut à droite */}
              <AnimatedSection delay={100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground">Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h3 className="font-display text-sm font-bold text-white">Formation continue</h3>
                  </div>
                </div>
              </AnimatedSection>

              {/* Carte 3 - en bas à gauche */}
              <AnimatedSection delay={150}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground">Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h3 className="font-display text-sm font-bold text-white">Innovation</h3>
                  </div>
                </div>
              </AnimatedSection>

              {/* Carte 4 - en bas à droite */}
              <AnimatedSection delay={200}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground">Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h3 className="font-display text-sm font-bold text-white">Relation client</h3>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Rangée du bas - 3 cadres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <AnimatedSection delay={250}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Image placeholder</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="font-display text-base font-bold text-white">Excellence opérationnelle</h3>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Image placeholder</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="font-display text-base font-bold text-white">Support multilingue</h3>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pulse-turquoise/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pulse-turquoise/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Image placeholder</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="font-display text-base font-bold text-white">Innovation continue</h3>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

  </div>
);

export default About;