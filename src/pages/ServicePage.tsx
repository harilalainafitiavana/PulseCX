import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowRight, Headphones, TrendingUp, Settings, Cpu, 
  CheckCircle2, Users, Clock, BarChart3, Shield,
  Zap, Target, Globe, Star, Award, Sparkles, Eye,
  FileText, Database, Calendar
} from "lucide-react";

const serviceData: Record<string, {
  icon: typeof Headphones;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: Array<{ title: string; desc: string; icon: any }>;
  methodology: Array<{ step: string; title: string; desc: string }>;
  stats: Array<{ value: string; label: string; icon: any }>;
  benefits: Array<{ title: string; desc: string; icon: any }>;
  useCases: Array<{ 
    title: string; 
    desc: string; 
    image: string;
    points: string[];
    cta: string;
  }>;
  ctaText: string;
}> = {
  "customer-experience": {
    icon: Headphones,
    title: "Customer Support & CX Operations",
    subtitle: "Excellence opérationnelle au service de vos clients",
    tagline: "Offrez une expérience client exceptionnelle, 24/7",
    description: "Nous gérons vos interactions clients avec la même exigence que vos équipes internes. Support multicanal, SAV, e-commerce et technique — structuré, piloté, mesuré.",
    features: [
      { title: "Support multicanal", desc: "Voix, email, chat, réseaux sociaux - une expérience unifiée", icon: Headphones },
      { title: "SAV structuré", desc: "Processus clairs et résolution rapide", icon: Shield },
      { title: "Support e-commerce", desc: "Gestion des commandes, retours, litiges", icon: TrendingUp },
      { title: "Support technique N1", desc: "Premier niveau d'assistance technique", icon: Cpu },
    ],
    methodology: [
      { step: "01", title: "Audit", desc: "Analyse approfondie de vos processus existants" },
      { step: "02", title: "Design", desc: "Conception de workflows sur mesure" },
      { step: "03", title: "Formation", desc: "Recrutement et formation des équipes" },
      { step: "04", title: "Pilotage", desc: "Mise en place des KPI et dashboards" },
    ],
    stats: [
      { value: "98%", label: "Satisfaction client", icon: Star },
      { value: "24/7", label: "Disponibilité", icon: Clock },
      { value: "-45%", label: "Réduction coûts", icon: BarChart3 },
      { value: "500+", label: "Agents formés", icon: Users },
    ],
    benefits: [
      { title: "Réduction des coûts", desc: "Jusqu'à 50% d'économie", icon: TrendingUp },
      { title: "Scalabilité", desc: "Adaptation aux pics d'activité", icon: Zap },
      { title: "KPI temps réel", desc: "Reporting transparent", icon: BarChart3 },
      { title: "Équipes dédiées", desc: "Formées à vos process", icon: Users },
    ],
    useCases: [
      { 
        title: "E-commerce en forte croissance", 
        desc: "Gérez les pics saisonniers sans recrutement interne",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["+300% de demandes pendant le Black Friday", "Support 24/7 multilingue", "Intégration avec votre CRM"],
        cta: "Voir le cas client"
      },
      { 
        title: "SaaS - Support technique", 
        desc: "Externalisez votre support niveau 1 pour vos utilisateurs",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Réponse sous 2h garantie", "Taux de satisfaction 98%", "Escalade niveau 2 structurée"],
        cta: "Voir le cas client"
      },
    ],
    ctaText: "Boostez votre expérience client",
  },
  "sales-revenue": {
    icon: TrendingUp,
    title: "Sales Development & Revenue Ops",
    subtitle: "Générez du pipeline, qualifiez, convertissez",
    tagline: "Transformez vos leads en opportunités qualifiées",
    description: "Notre équipe commerciale externalisée structure votre prospection B2B, qualifie vos leads et sécurise vos prises de rendez-vous avec rigueur et méthode.",
    features: [
      { title: "Prospection B2B", desc: "Ciblage précis et approche personnalisée", icon: Target },
      { title: "Qualification de leads", desc: "Méthodologie BANT/MEDDIC", icon: CheckCircle2 },
      { title: "Prise de RDV qualifiés", desc: "Rendez-vous avec décideurs", icon: Calendar },
      { title: "Upsell & rétention", desc: "Fidélisation et ventes additionnelles", icon: TrendingUp },
    ],
    methodology: [
      { step: "01", title: "ICP", desc: "Définition du client idéal" },
      { step: "02", title: "Scripts", desc: "Création d'argumentaires percutants" },
      { step: "03", title: "Formation", desc: "Formation des SDR/BDR" },
      { step: "04", title: "Optimisation", desc: "A/B testing et amélioration continue" },
    ],
    stats: [
      { value: "+40%", label: "Taux de conversion", icon: TrendingUp },
      { value: "24h", label: "Délai de qualification", icon: Clock },
      { value: "3x", label: "ROI moyen", icon: Award },
      { value: "500+", label: "RDV/mois", icon: Users },
    ],
    benefits: [
      { title: "Pipeline structuré", desc: "Processus commercial maîtrisé", icon: BarChart3 },
      { title: "Coût par lead optimisé", desc: "ROI mesurable", icon: Target },
      { title: "Équipe dédiée", desc: "Formée à votre marché", icon: Users },
      { title: "Reporting temps réel", desc: "Visibilité totale", icon: Eye },
    ],
    useCases: [
      { 
        title: "Scale-up SaaS B2B", 
        desc: "Générez 50+ RDV qualifiés par mois avec des décideurs",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Ciblage des CTO/VP Engineering", "Scripts personnalisés", "Intégration HubSpot"],
        cta: "Voir le cas client"
      },
      { 
        title: "Lancement nouveau marché", 
        desc: "Structurez votre prospection sur un nouveau territoire",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Équipe locale dédiée", "Adaptation culturelle", "Reporting hebdomadaire"],
        cta: "Voir le cas client"
      },
    ],
    ctaText: "Accélérez votre croissance",
  },
  "business-process": {
    icon: Settings,
    title: "Business Process Operations",
    subtitle: "Structurez vos processus métier",
    tagline: "Optimisez votre back-office pour gagner en efficacité",
    description: "Nous prenons en charge vos processus back-office avec rigueur et transparence : traitement de données, CRM, support administratif — tout est structuré et piloté.",
    features: [
      { title: "Back-office opérationnel", desc: "Gestion administrative externalisée", icon: Settings },
      { title: "Traitement de données", desc: "Saisie et validation", icon: Database },
      { title: "Gestion CRM", desc: "Mise à jour et nettoyage", icon: Users },
      { title: "Support administratif", desc: "Assistance quotidienne", icon: Shield },
    ],
    methodology: [
      { step: "01", title: "Cartographie", desc: "Analyse des processus existants" },
      { step: "02", title: "Standardisation", desc: "Documentation des procédures" },
      { step: "03", title: "Contrôle qualité", desc: "Mise en place des validations" },
      { step: "04", title: "Amélioration", desc: "Optimisation continue" },
    ],
    stats: [
      { value: "-35%", label: "Temps de traitement", icon: Clock },
      { value: "99.5%", label: "Précision des données", icon: CheckCircle2 },
      { value: "24/7", label: "Support disponible", icon: Clock },
      { value: "500+", label: "Processus documentés", icon: FileText },
    ],
    benefits: [
      { title: "Gain de temps", desc: "Équipe recentrée sur le core business", icon: Zap },
      { title: "Qualité des données", desc: "Fiabilité et précision", icon: Star },
      { title: "Processus documentés", desc: "Traçabilité complète", icon: FileText },
      { title: "Scalabilité", desc: "Adaptation aux volumes", icon: TrendingUp },
    ],
    useCases: [
      { 
        title: "Grands volumes de données", 
        desc: "Traitez 10 000+ fiches produits par mois",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Précision 99.5%", "Double validation", "Intégration ERP"],
        cta: "Voir le cas client"
      },
      { 
        title: "Transformation digitale", 
        desc: "Optimisez vos processus administratifs",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Digitalisation des processus", "Réduction 40% délais", "Formation des équipes"],
        cta: "Voir le cas client"
      },
    ],
    ctaText: "Optimisez vos processus",
  },
  "digital-ai": {
    icon: Cpu,
    title: "Digital & AI-Enhanced Support",
    subtitle: "L'IA comme levier, pas comme promesse",
    tagline: "Augmentez vos équipes avec la technologie",
    description: "Nous intégrons intelligemment les technologies d'automatisation et d'IA pour augmenter l'efficacité de vos opérations — sans surpromesse, avec des résultats mesurables.",
    features: [
      { title: "Automatisation RPA", desc: "Tâches répétitives automatisées", icon: Zap },
      { title: "Chatbots supervisés", desc: "IA + supervision humaine", icon: Cpu },
      { title: "QA augmentée", desc: "Contrôle qualité assisté par IA", icon: CheckCircle2 },
      { title: "Data processing", desc: "Traitement intelligent des données", icon: Database },
    ],
    methodology: [
      { step: "01", title: "Audit", desc: "Identification des cas d'usage" },
      { step: "02", title: "Sélection", desc: "Choix des outils adaptés" },
      { step: "03", title: "Intégration", desc: "Déploiement progressif" },
      { step: "04", title: "Supervision", desc: "Contrôle humain continu" },
    ],
    stats: [
      { value: "+30%", label: "Productivité", icon: TrendingUp },
      { value: "-50%", label: "Tâches automatisées", icon: Zap },
      { value: "24/7", label: "Disponibilité", icon: Clock },
      { value: "99%", label: "Précision", icon: Star },
    ],
    benefits: [
      { title: "Productivité", desc: "Gains de 20 à 40%", icon: TrendingUp },
      { title: "Qualité renforcée", desc: "Supervision humaine", icon: Shield },
      { title: "ROI rapide", desc: "Mesurable dès 3 mois", icon: Award },
      { title: "Approche pragmatique", desc: "IA utile, pas de buzzword", icon: Target },
    ],
    useCases: [
      { 
        title: "Support client volumineux", 
        desc: "Automatisez 40% des demandes avec un chatbot supervisé",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Réduction 30% du temps de traitement", "Supervision humaine", "Escalade intelligente"],
        cta: "Voir le cas client"
      },
      { 
        title: "Contrôle qualité automatisé", 
        desc: "Analysez 100% de vos interactions clients",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        points: ["Détection des anomalies", "Scoring automatique", "Plans d'action ciblés"],
        cta: "Voir le cas client"
      },
    ],
    ctaText: "Augmentez vos équipes",
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service non trouvé</h1>
          <Link to="/"><Button variant="cta">Retour à l'accueil</Button></Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen">
      {/* Hero - Même style que les autres pages */}
      <section className="bg-gradient-hero pt-32 pb-24">
        <div className="container mx-auto px-6 ml-0 md:ml-10">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
              {data.subtitle}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl">
              {data.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {data.stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 50} className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-full blur-xl" />
                  <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                    <stat.icon className="w-8 h-8 text-pulse-turquoise mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-4 block">Présentation</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {data.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {data.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-5 h-5 text-pulse-turquoise" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{f.title}</h4>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 rounded-3xl p-8 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Target className="w-6 h-6 text-pulse-turquoise" />
                  Notre méthodologie
                </h3>
                <div className="space-y-6">
                  {data.methodology.map((m, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center">
                          <span className="text-white font-bold">{m.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-bold text-foreground text-lg mb-1">{m.title}</h4>
                        <p className="text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Avantages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Pourquoi choisir cette solution ?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {data.benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                  <div className="relative bg-card rounded-2xl p-6 border border-border group-hover:border-transparent transition-all duration-300 h-full text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-7 h-7 text-pulse-turquoise" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage - Alternance image/texte */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Cas d'usage</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Solutions adaptées à vos besoins
            </h2>
          </AnimatedSection>

          <div className="space-y-16 max-w-5xl mx-auto">
            {data.useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden group ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Texte */}
                  <div className={`${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {useCase.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {useCase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button variant="outline" className="group border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white">
                        {useCase.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Prêt à {data.ctaText.toLowerCase()} ?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Contactez nos experts pour un audit gratuit de vos besoins et une proposition sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/careers">
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

export default ServicePage;