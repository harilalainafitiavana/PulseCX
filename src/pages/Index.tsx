import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { Headphones, TrendingUp, Settings, Cpu, ShieldCheck, BarChart3, Users, Eye, Star, ArrowRight, CheckCircle2, Award, Clock } from "lucide-react";
// import partnersBanner from "@/assets/marques_partenaire.png";
import heroIllustration from "@/assets/hero-illustration.png";
import avisAlibaba from "@/assets/avis_alibaba.png";
import avisCainiao from "@/assets/avis_cainiao.png";
import avisSwisslife from "@/assets/avis_swisslife.png";
import avisGroupeAlternance from "@/assets/avis_groupe_alternance.png";
import avisYara from "@/assets/avis_yara.png";
import avisHelixDigital from "@/assets/avis_helix_digital.png";

const services = [
  {
    icon: Headphones,
    title: "Customer Support & CX Operations",
    desc: "Support client multicanal, SAV, support e-commerce et assistance technique niveau 1. Nous assurons une expérience client fluide sur tous vos canaux.",
    href: "/services/customer-experience",
    features: ["Support multicanal", "SAV & e-commerce", "Technique N1"],
    accent: "from-pulse-turquoise to-pulse-azure",
  },
  {
    icon: TrendingUp,
    title: "Sales Development & Revenue Ops",
    desc: "Télémarketing B2B, qualification de leads, prise de rendez-vous qualifiés, upsell et rétention pour accélérer votre croissance commerciale.",
    href: "/services/sales-revenue",
    features: ["Prospection B2B", "Qualification leads", "Upsell & rétention"],
    accent: "from-pulse-azure to-pulse-turquoise",
  },
  {
    icon: Settings,
    title: "Business Process Operations",
    desc: "Back-office, traitement de données, gestion CRM et support administratif. Nous structurons vos processus pour une efficacité maximale.",
    href: "/services/business-process",
    features: ["Back-office", "Data processing", "Support admin"],
    accent: "from-pulse-turquoise to-pulse-azure",
  },
  {
    icon: Cpu,
    title: "Digital & Operations Automation",
    desc: "Automatisation des workflows, chatbots supervisés, QA augmentée et data processing pour optimiser vos opérations avec la technologie.",
    href: "/services/digital-ai",
    features: ["Automatisation", "Chatbots supervisés", "QA augmentée"],
    accent: "from-pulse-azure to-pulse-turquoise",
  },
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
    company: "Alibaba",
    text: "Pulse CX has transformed the efficiency of our customer support operations. Their team adapted quickly to our processes, handled high volumes with impressive accuracy, and consistently maintained excellent customer satisfaction metrics.",
    image: avisAlibaba,
  },
  {
    company: "Cainiao",
    text: "Pulse CX a optimisé la gestion de nos demandes clients liées au suivi et à la logistique. Leur équipe, réactive et précise, comprend parfaitement les exigences d'un environnement rapide et international.",
    image: avisCainiao,
  },
  {
    company: "SwissLife",
    text: "Professionnels, conformes et efficaces : Pulse CX fournit exactement la qualité attendue d'un partenaire de service client de haut niveau.",
    image: avisSwisslife,
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

const processSteps = [
  { step: "01", title: "Analyse", desc: "Audit de vos processus et identification des leviers d'optimisation" },
  { step: "02", title: "Mise en place", desc: "Déploiement des équipes, outils et processus sur mesure" },
  { step: "03", title: "Pilotage", desc: "Suivi KPI en temps réel, reporting et gouvernance continue" },
  { step: "04", title: "Optimisation", desc: "Amélioration continue basée sur les données et retours" },
];

const partnerLogos = [
  "Alibaba", "Cainiao", "SwissLife", "Groupe Alternance", "Yara Connect", "Helix Digital"
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
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
                  Operations Partner
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                  Structurez vos opérations.{" "}
                  <span className="text-gradient">Pilotez la performance.</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl">
                  PulseCX est votre partenaire d'externalisation structuré. Gouvernance, KPI, qualité : nous pilotons vos opérations avec rigueur et transparence.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="text-base px-8 py-6">
                      Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                      Découvrir PulseCX
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

      {/* Qui est PulseCX - Style dégradé */}
      <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative ml-0 md:ml-10">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-partners overflow-hidden flex items-center justify-center border border-border">
                  <div className="text-center p-12">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-accent flex items-center justify-center mb-6">
                      <span className="text-primary font-display font-bold text-3xl">P</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">PulseCX</h3>
                    <p className="text-muted-foreground">Operations Excellence Partner</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-accent opacity-20 blur-xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="mr-0 md:mr-10">
                <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Qui sommes-nous</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Un partenaire, pas un prestataire
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PulseCX n'est pas un centre d'appel traditionnel. Nous sommes un partenaire d'externalisation structuré qui intègre gouvernance, pilotage et qualité au cœur de chaque opération.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Notre approche repose sur des processus standardisés, un reporting transparent et un management solide — pour que vos opérations soient aussi performantes qu'en interne.
                </p>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services - Style dégradé */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Nos services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              04 domaines d'externalisation pour couvrir vos opérations
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ml-0 md:ml-10 mr-0 md:mr-10">
            {/* Large card - CX Operations */}
            <AnimatedSection className="md:col-span-8">
              <Link to={services[0].href} className="group block h-full">
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full min-h-[320px] bg-gradient-hero text-primary-foreground border border-border/10 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-[500px] h-[300px] rounded-full bg-pulse-turquoise blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[250px] rounded-full bg-pulse-azure blur-[100px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/60 mb-4">Pôle 1</div>
                    <Headphones className="w-10 h-10 text-pulse-turquoise mb-4" />
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 max-w-md">{services[0].title}</h3>
                    <p className="text-primary-foreground/80 font-medium leading-relaxed max-w-lg mb-6">{services[0].desc}</p>
                    <ul className="flex flex-wrap gap-3">
                      {services[0].features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Right card - Sales */}
            <AnimatedSection className="md:col-span-4" delay={100}>
              <Link to={services[1].href} className="group block h-full">
                <div className="rounded-3xl p-7 h-full min-h-[320px] bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 2</div>
                  <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-pulse-azure" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{services[1].title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">{services[1].desc}</p>
                  <ul className="space-y-2">
                    {services[1].features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </AnimatedSection>

            {/* Bottom left - BPO */}
            <AnimatedSection className="md:col-span-4" delay={200}>
              <Link to={services[2].href} className="group block h-full">
                <div className="rounded-3xl p-7 h-full min-h-[280px] bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 3</div>
                  <div className="w-12 h-12 rounded-2xl bg-pulse-turquoise/10 border border-pulse-turquoise/20 flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-pulse-turquoise" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{services[2].title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">{services[2].desc}</p>
                  <ul className="space-y-2">
                    {services[2].features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </AnimatedSection>

            {/* Bottom right - Digital & Automation */}
            <AnimatedSection className="md:col-span-8" delay={300}>
              <Link to={services[3].href} className="group block h-full">
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full min-h-[280px] border border-border shadow-card hover:shadow-card-hover transition-all duration-300" style={{
                  background: "radial-gradient(600px 250px at 80% 20%, hsl(168 75% 53% / 0.12), transparent 60%), radial-gradient(500px 200px at 20% 80%, hsl(204 73% 46% / 0.08), transparent 60%), hsl(0 0% 100%)"
                }}>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 4</div>
                  <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-pulse-azure" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{services[3].title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed max-w-lg mb-5">{services[3].desc}</p>
                  <ul className="flex flex-wrap gap-4">
                    {services[3].features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Différenciation - Style dégradé */}
      <section className="py-24 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 relative overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-pulse-turquoise/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-pulse-azure/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Pourquoi PulseCX</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              L'excellence opérationnelle, <span className="text-gradient">par design</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Quatre piliers fondamentaux qui font notre différence
            </p>
          </AnimatedSection>

          {/* Grille avec cartes animées */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-0 md:ml-10 mr-0 md:mr-10">
            {differentiators.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 100}>
                <div className="group relative h-full perspective-1000">
                  {/* Effet de carte 3D */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

                  {/* Carte principale */}
                  <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent transition-all duration-300 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* Icône avec animation */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                      <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-10 h-10 text-pulse-turquoise group-hover:text-pulse-azure transition-colors duration-300" />
                      </div>

                      {/* Badge numéro */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <span className="text-white text-sm font-bold">0{index + 1}</span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-pulse-turquoise transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Ligne décorative animée */}
                    <div className="absolute bottom-6 left-8 right-8 h-0.5 bg-gradient-to-r from-pulse-turquoise/0 via-pulse-turquoise/50 to-pulse-azure/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Section supplémentaire avec des chiffres clés */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "98%", label: "Clients satisfaits", icon: Star },
              { value: "500+", label: "Projets réalisés", icon: TrendingUp },
              { value: "24/7", label: "Support disponible", icon: Clock },
              { value: "10+", label: "Années d'expérience", icon: Award },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={400 + i * 50}>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center border border-border hover:border-pulse-turquoise/30 transition-all duration-300 group">
                  <stat.icon className="w-5 h-5 text-pulse-turquoise mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display font-bold text-foreground text-lg">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs - Garde son style hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Performance</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              Des résultats mesurables
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((k, i) => (
              <AnimatedSection key={k.label} delay={i * 100} className="text-center">
                <div className="text-5xl font-display font-bold text-pulse-turquoise mb-2">
                  <CountUp end={k.value} suffix={k.suffix} />
                </div>
                <p className="text-primary-foreground/70">{k.label}</p>
              </AnimatedSection>
            ))}
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
              Ils nous confient leur quotidien
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Découvrez ce que nos clients disent de leur expérience avec PulseCX
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
                          className="w-14 h-14 rounded-xl object-cover border-2 border-pulse-turquoise/20 group-hover:border-pulse-turquoise transition-colors"
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
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
            </div>

            {/* Troisième ligne - 1 carte - même largeur que les lignes au-dessus */}
            <div className="grid md:grid-cols-1 gap-6">
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
            </div>
          </div>

          {/* Badge de confiance */}
          <AnimatedSection delay={600} className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-pulse-turquoise/20">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <img
                    key={i}
                    src={t.image}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-foreground">+50 entreprises nous font confiance</span>
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

          {/* Première rangée - Grande carte + 2 petites */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 ml-0 md:ml-10 mr-0 md:mr-10">

            {/* Grande carte - 2 colonnes */}
            <AnimatedSection className="md:col-span-2">
              <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[2/1] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Équipe PulseCX"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Collaboration d'équipe</h3>
                    <p className="text-white/90">Plus de 50 experts à votre service</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Carte standard - 1 colonne */}
            <AnimatedSection delay={50} className="md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl aspect-square bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="font-display text-lg font-bold text-white">KPIs temps réel</h3>
                </div>
              </div>
            </AnimatedSection>

            {/* Carte standard - 1 colonne */}
            <AnimatedSection delay={100} className="md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl aspect-square bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Support"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="font-display text-lg font-bold text-white">Support 24/7</h3>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Deuxième rangée - 2 petites + grande carte */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 ml-0 md:ml-10 mr-0 md:mr-10">

            {/* Carte standard - 1 colonne */}
            <AnimatedSection delay={150} className="md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl aspect-square bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Formation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="font-display text-lg font-bold text-white">Formation continue</h3>
                </div>
              </div>
            </AnimatedSection>

            {/* Carte standard - 1 colonne */}
            <AnimatedSection delay={200} className="md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl aspect-square bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Innovation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="font-display text-lg font-bold text-white">Innovation</h3>
                </div>
              </div>
            </AnimatedSection>

            {/* Grande carte - 2 colonnes */}
            <AnimatedSection delay={250} className="md:col-span-2">
              <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[2/1] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Relation client"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-azure/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Relation client</h3>
                    <p className="text-white/90">Une approche personnalisée</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Troisième rangée - Une seule carte (pas trop haute) */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ml-0 md:ml-10 mr-0 md:mr-10">
            <AnimatedSection delay={300}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[16/5] bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Bureau moderne PulseCX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/80 to-pulse-azure/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      Un environnement de travail moderne
                    </h3>
                    <p className="text-white/90">
                      Des espaces conçus pour la collaboration et l'innovation
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Bouton Voir plus */}
          <AnimatedSection delay={350} className="text-center mt-12">
            <Link to="/nos-realisations">
              <Button variant="outline" size="lg" className="group border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white transition-all duration-300 px-8 py-6 text-base">
                Voir plus de réalisations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners - Style dégradé */}
      <section className="py-20 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Partenaires</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3">
              Marques avec lesquelles nous travaillons
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Ils nous font confiance au quotidien pour leurs opérations
            </p>
          </AnimatedSection>

          <AnimatedSection>
            {/* Grille de logos stylisés */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnerLogos.map((name, index) => {
                // Générer des couleurs de fond différentes pour chaque logo
                const gradientPairs = [
                  "from-pulse-turquoise to-pulse-azure",
                  "from-pulse-azure to-pulse-turquoise",
                  "from-pulse-turquoise/80 to-pulse-azure/80",
                  "from-pulse-azure/80 to-pulse-turquoise/80",
                  "from-pulse-turquoise to-pulse-azure/70",
                  "from-pulse-azure to-pulse-turquoise/70"
                ];

                const bgColor = gradientPairs[index % gradientPairs.length];
                const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

                return (
                  <AnimatedSection key={name} delay={index * 50}>
                    <div className="group relative">
                      {/* Effet de glow au hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />

                      {/* Carte du logo */}
                      <div className="relative bg-card rounded-2xl border border-border p-6 hover:border-transparent transition-all duration-300 hover:shadow-xl">
                        <div className="flex flex-col items-center gap-3">
                          {/* Logo par défaut avec dégradé */}
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${bgColor} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-display font-bold text-xl">
                              {initials}
                            </span>
                          </div>

                          {/* Nom de l'entreprise */}
                          <span className="font-display font-semibold text-foreground text-sm text-center group-hover:text-pulse-turquoise transition-colors">
                            {name}
                          </span>

                          {/* Badge "Partenaire" au hover */}
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold text-pulse-turquoise bg-pulse-turquoise/10 px-2 py-1 rounded-full">
                              ✓ Partenaire
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Ligne de confiance avec chiffres */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-pulse-turquoise">50+</div>
                <p className="text-sm text-muted-foreground">Clients actifs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-pulse-turquoise">8</div>
                <p className="text-sm text-muted-foreground">Pays couverts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-pulse-turquoise">98%</div>
                <p className="text-sm text-muted-foreground">Taux de satisfaction</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process - Style dégradé */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Notre méthode</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Un processus éprouvé
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-accent opacity-20 -translate-y-1/2" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 150}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center mb-4 relative z-10">
                      <span className="font-display font-bold text-primary text-lg">{s.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Garde son style hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
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
};

export default Index;