import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight, Headphones, TrendingUp, Settings, Cpu,
  CheckCircle2, Users, Clock, BarChart3, Shield,
  Zap, Target, Globe, Star, Award, Sparkles, Eye,
  FileText, Database, Calendar,
  Mail,
  Linkedin,
  Phone,
  RefreshCcw,
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  MessageSquare
} from "lucide-react";

const serviceData: Record<string, {
  icon: any;
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
    title: "Customer Support externalisé, structuré et piloté",
    subtitle: "Excellence opérationnelle au service de vos clients",
    tagline: "PulseCX déploie des équipes support dédiées et met en place les processus, les outils et le pilotage nécessaires pour garantir une expérience client stable et performante - sur la durée.",
    description: "Nous gérons vos interactions clients avec la même exigence que vos équipes internes. Support multicanal, SAV, e-commerce et technique — structurer, piloter, mesurer.",
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
      { value: "X%", label: "Satisfaction client", icon: Star },
      { value: "X/X", label: "Disponibilité", icon: Clock },
      { value: "-X%", label: "Réduction coûts", icon: BarChart3 },
      { value: "X+", label: "Agents formés", icon: Users },
    ],
    benefits: [
      { title: "Réduction des coûts", desc: "Jusqu'à 50% d'économie", icon: TrendingUp },
      { title: "Scalabilité", desc: "Adaptation aux pics d'activité", icon: Zap },
      { title: "KPI temps réel", desc: "Reporting transparent", icon: BarChart3 },
      { title: "Équipes dédiées", desc: "Formées à vos process", icon: Users },
    ],
    useCases: [
      {
        title: "Support commande, livraison & SAV",
        desc: "Gestion des demandes clients sur l'ensemble du parcours: avant/ pendant/ après livraison. Objectif: réduire la charge interne tout en maintenant un niveau de qualité constant.",
        image: "https://github.com/harilalainafitiavana/images-portefolio/blob/main/Support%20commande%20&%20produit.png?raw=true",
        points: [
          "Suivi commande, retours, remboursements",
          "Réclamations & litiges (pièces manquantes, colis endommagé)",
          "Coordination logistique/ transport + escalades structurées"
        ],
        cta: "Découvrir ce cas client"
      },
      {
        title: "Support utilisateur & support produit",
        desc: "Traitement du support N1/N2 avec tri, qualification et escalade vers les équipes produit/tech. Objectif:accélérer la résolution et fiabiliser la boucle de feedback.",
        image: "https://github.com/harilalainafitiavana/images-portefolio/blob/main/Capture%20d'une%20base%20de%20connaissance%20-%20customer%20support.png?raw=true",
        points: [
          "Gestion tickets (Zendesk/ Intercom/ Jira Service...",
          "Qualification, priorisation, reproduction & escalades",
          "Base de connaissance: création, maintenance, réduction du volume"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Support administratif & gestion de dossiers",
        desc: "Traitement de demandes répétitives et workflows de validation. Objectif: améliorer les délais de traitement et réduire la variance qualité.",
        image: "https://github.com/harilalainafitiavana/images-portefolio/blob/main/Support%20administratif.png?raw=true",
        points: [
          "Prise en charge emails/ formulaires/ chat + suivi client",
          "Contrôles, complétude, conformité & relances",
          "Reporting: backlog, temps de traitement, qualité & rework"
        ],
        cta: "Voir le cas client"
      }
    ],
    ctaText: "Booster votre expérience client",
  },
  "sales-revenue": {
    icon: TrendingUp,
    title: "Lead Generation opérée, structurée et pilotée.",
    subtitle: "Générez du pipeline, qualifiez, convertissez",
    tagline: "PulseCX déploie des équipes commerciales dédiées et met en place les scripts, les outils et le pilotage nécessaires pour alimenter votre pipeline de manière fiable - sans dégrader l'image de marque ni la qualité des échanges.",
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
      { value: "+X%", label: "Taux de conversion", icon: TrendingUp },
      { value: "Xh", label: "Délai de qualification", icon: Clock },
      { value: "Xx", label: "ROI moyen", icon: Award },
      { value: "X+", label: "RDV/mois", icon: Users },
    ],
    benefits: [
      { title: "Pipeline structuré", desc: "Processus commercial maîtrisé", icon: BarChart3 },
      { title: "Coût par lead optimisé", desc: "ROI mesurable", icon: Target },
      { title: "Équipe dédiée", desc: "Formée à votre marché", icon: Users },
      { title: "Reporting temps réel", desc: "Visibilité totale", icon: Eye },
    ],
    useCases: [
      {
        title: "Qualification & scoring de leads entrants",
        desc: "Tri, qualification et enrichissement des leads (formulaires, demandes démo, inbound). Objectif: accélérer la prise en charge commerciale et augmenter le taux de conversion.",
        image: "https://cdn.prod.website-files.com/619c916dd7a3fa284adc0b27/61ba4b4e3dfea030df9c7024_sales-pipeline-CRM-SPOTIO.jpeg",
        points: [
          "Qualification (BANT/ ICP/ besoins) + routing vers la bonne équipe",
          "Enrichissement (firmographics, contacts) + normalisation CRM",
          "Relances & prise de RDV avec cadences standardisées"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Prospection multicanale & prise de rendez-vous",
        desc: "Déploiement de séquences emal/ LinkedIn/ téléphone sur des cibles définies avec votre équipe. Objectif: générer des opportunités qualifiées tout en respectant votre image et vos messages.",
        image: "https://salesdorado.com/wp-content/uploads/2021/04/sales-cadence.png",
        points: [
          "Segmentation & listes (ICP, secteurs, signaux) + enrichissement",
          "Copywriting opérationnel: messages, objections, scripts d'appel",
          "Prise de RDV + handoff structuré (contexte, pains, next steps)"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Support commercial & hygiène CRM",
        desc: "Support aux équipes sales: mise à jour CRM, relances, suivi opportunités et reporting. Objectif: réduire la charge administrative et fiabiliser le pilotage pipeline.",
        image: "https://blog-gestion-de-projet.com/wp-content/uploads/2025/10/Checklist-pour-transfert-de-projet-2.png",
        points: [
          "Mise à jour CRM (stages, champs, activités) + déduplication",
          "Relances prospects/ no-shows + replanification RDV",
          "Reporting pipeline: volumes, taux, qualité de données, backlog"
        ],
        cta: "Voir le cas client"
      }
    ],
    ctaText: "Accélérer votre croissance",
  },
  "business-process": {
    icon: Settings,
    title: "Back Office externalisé, structuré et piloté.",
    subtitle: "Structurez vos processus métier",
    tagline: "PulseCX opère vos activités back-office (traitement de dossiers, contrôles, mises à jour, workflows) avec des équipes dédiées, des process documentés et un pilotage rigoureux pour sécuriser délais, qualité et continuité.",
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
      { value: "-X%", label: "Temps de traitement", icon: Clock },
      { value: "X%", label: "Précision des données", icon: CheckCircle2 },
      { value: "X/X", label: "Support disponible", icon: Clock },
      { value: "X+", label: "Processus documentés", icon: FileText },
    ],
    benefits: [
      { title: "Gain de temps", desc: "Équipe recentrée sur le core business", icon: Zap },
      { title: "Qualité des données", desc: "Fiabilité et précision", icon: Star },
      { title: "Processus documentés", desc: "Traçabilité complète", icon: FileText },
      { title: "Scalabilité", desc: "Adaptation aux volumes", icon: TrendingUp },
    ],
    useCases: [
      {
        title: "Traitement de dossiers & vérifications",
        desc: "Gestion de dossiers entrants avec contrôles de complétude, conformité et relances. Objectif: réduire les délais, limiter les erreurs et garantir une traçabilité complète.",
        image: "https://media.licdn.com/dms/image/v2/D4E12AQE9G3NLg3HolQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1683016504033?e=2147483647&v=beta&t=2dIi0jWIUVntDLA4bCn2BrJGjJyICv24-iPAs8ZUgYs",
        points: [
          "Vérification pièces/ champs obligatoires + validation",
          "Relances structurées (email/ téléphone) + suivi statut",
          "Journalisation: qui a fait quoi, quand, et pourquoi"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Backlog & traitement de demandes récurrentes",
        desc: "Traitement quotidien de demandes répétitives (mises à jour, corrections, opérations standardisées). Objectif: stabiliser la qualité et absorber les pics de volume.",
        image: "https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2024/07/Dev-exemple-tableau-planification-sprints-story-points-monday-dev.jpg",
        points: [
          "Gestion de queues (tickets/ formulaires/ emails)",
          "Règles de priorisation + escalades structurées",
          "Contrôles qualité + réduction du rework"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Saisie, enrichissement & rapprochements",
        desc: "Mise à jour et fiabilisation de données (CRM/ERP) avec règles de contrôle. Objectif: améliorer la qualité de donnée et la fluidité des processus en aval.",
        image: "https://www.qalyptus.com/blog/wp-content/uploads/2021/02/Qalyptus-Data-Quality-Dashboard.png",
        points: [
          "Saisie / mise à jour de fiches + normalisation",
          "Enrichissement (sources, compléments, dédoublonnage)",
          "Rapprochements simples + alertes d’anomalies"
        ],
        cta: "Voir le cas client"
      }
    ],
    ctaText: "Optimiser vos processus",
  },
  "digital-ai": {
    icon: Cpu,
    title: "Data & AI au service de vos opérations",
    subtitle: "L'IA comme levier, pas comme promesse",
    tagline: "PulseCX met en place des flux data fiables, des automatisations et des briques IA pragmatiques pour réduire le manuel, améliorer la qualité et donner de la visibilité - sans alourdir votre stack.",
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
      { value: "+X%", label: "Productivité", icon: TrendingUp },
      { value: "-X%", label: "Tâches automatisées", icon: Zap },
      { value: "X/X", label: "Disponibilité", icon: Clock },
      { value: "X%", label: "Précision", icon: Star },
    ],
    benefits: [
      { title: "Productivité", desc: "Gains de 20 à 40%", icon: TrendingUp },
      { title: "Qualité renforcée", desc: "Supervision humaine", icon: Shield },
      { title: "ROI rapide", desc: "Mesurable dès 3 mois", icon: Award },
      { title: "Approche pragmatique", desc: "IA utile, pas de buzzword", icon: Target },
    ],
    useCases: [
      {
        title: "Consolidation & fiabilisation des données",
        desc: "Centralisation de vos sources (support, sales, back-office) et mise en place de règles de qualité. Objectif : une donnée exploitable pour piloter l’opération au quotidien.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4-nvoOj3xnEQ63ccncGvjPdAQJ8pxaewVA&s",
        points: [
          "Extraction multi-sources (CRM, ticketing, téléphonie, spreadsheets)",
          "Normalisation, déduplication, contrôles qualité & historisation",
          "Alerting sur anomalies : volumes, délais, taux d’erreur"
        ],
        cta: "Voir le cas client"
      },
      {
        title: "Automatisation de workflows opérationnels",
        desc: "Réduction des tâches manuelles répétitives par automatisation (règles, RPA léger, intégrations). Objectif : augmenter la productivité et réduire les erreurs.",
        image: "https://www.jitterbit.com/wp-content/uploads/blog-workflowAutomation-featured-1560x740-copy-1.jpg",
        points: [
          "Création/mise à jour d’objets CRM & tickets automatiquement",
          "Routage, tags, priorisation, relances et notifications",
          "Contrôles conformité + génération de rapports récurrents"

        ],
        cta: "Voir le cas client"
      },
      {
        title: "Assistants IA pour qualité & productivité",
        desc: "Briques IA “pragmatiques” : aide à la rédaction, synthèse, classification, QA assistée. Objectif : accélérer le traitement tout en sécurisant la qualité.",
        image: "https://www.evaluagent.com/wp-content/uploads/2023/02/Evalu-score-alt.png",
        points: [
          "Résumé de conversations, catégorisation, détection d’intention",
          "Suggestions de réponses + conformité au tone of voice",
          "Contrôle qualité assisté : checks, flags, scoring"

        ],
        cta: "Voir le cas client"
      }
    ],
    ctaText: "Augmenter vos équipes",
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

  // Récupérer les autres services pour le bloc "Voir aussi"
  const otherServices = Object.entries(serviceData).filter(([key]) => key !== slug);

  // Données des outils d'intégration
  const tools = [
    { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
    { name: "Intercom", logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg" },
    { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-2.svg" },
    { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" }
  ];

  // Mapping des titres et descriptions pour chaque service
  const serviceTitleMap: Record<string, string> = {
    "customer-experience": "Ce que nous opérons côté support client.",
    "sales-revenue": "Ce que nous opérons côté génération de leads.",
    "business-process": "Ce que nous opérons côté back-office.",
    "digital-ai": "Ce que nous mettons en place côté data & IA.",
  };

  const serviceDescMap: Record<string, string> = {
    "customer-experience": "Des périmètres typiques, à adapter selon vos canaux, volumes, outils et process internes.",
    "sales-revenue": "Des périmètres typiques, à adapter selon votre cible, votre offre, vos canaux et vos outils (CRM / Sales stack).",
    "business-process": "Des périmètres typiques, à adapter selon vos workflows, outils, volumes et exigences de conformité.",
    "digital-ai": "Des cas d’usage orientés impact opérationnel, à adapter selon vos données, vos outils et vos contraintes de conformité.",
  };

  // Mapping des logos d'intégration par service
  const integrationToolsMap: Record<string, Array<{ name: string; logo: string }>> = {
    "customer-experience": [
      { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk.svg" },
      { name: "Intercom", logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg" },
      { name: "Freshdesk", logo: "https://cdn.worldvectorlogo.com/logos/freshdesk.svg" },
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-2.svg" },
    ],
    "sales-revenue": [
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
      { name: "Apollo", logo: "https://cdn.worldvectorlogo.com/logos/apollo-1.svg" },
      { name: "Outreach", logo: "https://cdn.worldvectorlogo.com/logos/outreach.svg" },
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-2.svg" },
    ],
    "business-process": [
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-2.svg" },
      { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-2.svg" },
      { name: "Google Workspace", logo: "https://cdn.worldvectorlogo.com/logos/google-workspace.svg" },
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-2.svg" },
    ],
    "digital-ai": [
      { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
      { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
      { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make.svg" },
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-2.svg" },
    ],
  };

  // Mapping des titres pour la section Intégrations
  const integrationTitleMap: Record<string, string> = {
    "customer-experience": "Des outils qui s'adaptent à votre stack support",
    "sales-revenue": "Des outils qui s'adaptent à votre stack commerciale",
    "business-process": "Des outils qui s'adaptent à votre stack back-office",
    "digital-ai": "Des outils qui s'adaptent à votre stack data & automation",
  };

  // Mapping des descriptions pour la section Intégrations
  const integrationDescMap: Record<string, string> = {
    "customer-experience": "PulseCX s'intègre parfaitement à vos outils de ticketing, CRM et communication pour une gestion fluide de votre relation client.",
    "sales-revenue": "PulseCX s'intègre parfaitement à votre CRM, vos outils de prospection et votre stack marketing pour alimenter votre pipeline sans friction.",
    "business-process": "PulseCX s'intègre parfaitement à vos ERP, vos outils de gestion documentaire et vos workflows métier pour une exécution transparente.",
    "digital-ai": "PulseCX s'intègre parfaitement à vos APIs, vos bases de données et vos outils d'automatisation pour orchestrer vos process data & IA.",
  };

  // Mapping des footers pour la section Intégrations
  const integrationFooterMap: Record<string, string> = {
    "customer-experience": "Zendesk, Intercom, Freshdesk, HubSpot, Salesforce, Jira, Slack, Google Workspace… Nous intégrons vos outils existants et configurons les workflows pour une gestion support fluide et centralisée.",
    "sales-revenue": "HubSpot, Salesforce, Pipedrive, Apollo, Lemlist, Outreach, Salesloft, LinkedIn Sales Navigator, Aircall, Slack… Nous synchronisons votre stack commerciale pour un pipeline piloté en temps réel et une qualification sans friction.",
    "business-process": "HubSpot, Salesforce, SAP, Microsoft, Google Workspace, Slack… Nous connectons vos ERP et outils métier pour automatiser les flux, sécuriser les traitements et garantir la traçabilité.",
    "digital-ai": "OpenAI, Zapier, Make, HubSpot, Salesforce, Slack… Nous orchestrons vos données et automatisations pour déployer des briques IA pragmatiques, sans alourdir votre stack technique.",
  };

  // Ajoutez ces nouveaux items pour chaque service

  const items = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Voix",
      desc: "Appels entrants & sortants",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      desc: "Traitement & réponses",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Chat",
      desc: "Live chat & messaging",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "SAV / retours",
      desc: "Litiges & remboursements",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Base de connaissance",
      desc: "Création & maintenance",
    },
    {
      icon: <ArrowUpRight className="w-5 h-5" />,
      title: "Escalades",
      desc: "Routing & suivi structuré",
    },
  ];

  // Pour sales-revenue (lead generation)
  const leadGenItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      desc: "Séquences outbound",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      desc: "Prospection ciblée",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Appels",
      desc: "Cold calling & qualification",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Prise de RDV",
      desc: "Qualification & handoff",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Enrichissement",
      desc: "Firmographics & contacts",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Hygiène CRM",
      desc: "Mise à jour & déduplication",
    },
  ];

  // Pour business-process (back office)
  const backOfficeItems = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Traitement dossiers",
      desc: "Vérification & validation",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Contrôles qualité",
      desc: "Double contrôle & conformité",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Gestion backlog",
      desc: "Priorisation & suivi délais",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Relances & suivi",
      desc: "Email, téléphone, statuts",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Saisie & mise à jour",
      desc: "CRM, ERP, formulaires",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Anomalies & escalades",
      desc: "Détection & routing",
    },
  ];

  // Pour digital-ai (data & AI)
  const dataAiItems = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Connecteurs & ETL",
      desc: "Centralisation multi-sources",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Qualité data",
      desc: "Nettoyage & normalisation",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Dashboards",
      desc: "KPI & reporting opérationnel",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Alerting",
      desc: "Anomalies & seuils automatiques",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Automatisations",
      desc: "Workflows & RPA léger",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI assist",
      desc: "QA augmentée & scoring",
    },
  ];

  // Dans le composant, avant le return, ajoutez cette logique pour déterminer quel bandeau afficher
  const getPerimetreItems = (slug: string) => {
    switch (slug) {
      case "sales-revenue":
        return leadGenItems;
      case "business-process":
        return backOfficeItems;
      case "digital-ai":
        return dataAiItems;
      default:
        return items; // items par défaut pour customer-experience
    }
  };

  const getPerimetreTitle = (slug: string) => {
    switch (slug) {
      case "sales-revenue":
        return "Ce que nous prenons en charge";
      case "business-process":
        return "Ce que nous prenons en charge";
      case "digital-ai":
        return "Ce que nous mettons en place";
      default:
        return "Ce que nous prenons en charge";
    }
  };

  const getPerimetreDesc = (slug: string) => {
    switch (slug) {
      case "sales-revenue":
        return "Canaux et activités fréquemment opérés · à ajuster selon votre stack et vos process";
      case "business-process":
        return "Activités fréquemment opérées · à ajuster selon vos workflows et exigences de conformité";
      case "digital-ai":
        return "Briques data & IA fréquemment déployées · à adapter selon vos outils et contraintes";
      default:
        return "Canaux et tâches fréquemment opérés · à ajuster selon vos outils et process";
    }
  };

  const getPerimetreFooter = (slug: string) => {
    switch (slug) {
      case "sales-revenue":
        return "Périmètre type · adapté selon votre stack CRM et vos process commerciaux";
      case "business-process":
        return "Périmètre type · adapté selon vos workflows, outils et volumes";
      case "digital-ai":
        return "Périmètre type · adapté selon vos données, vos outils et vos cas d'usage prioritaires";
      default:
        return "Périmètre type · adapté selon vos contraintes, outils et volumes";
    }
  };

  const perimetreItems = getPerimetreItems(slug);
  const perimetreTitle = getPerimetreTitle(slug);
  const perimetreDesc = getPerimetreDesc(slug);
  const perimetreFooter = getPerimetreFooter(slug);

  // Mapping pour la section Pourquoi PulseCX
  const whyPulseCXMap: Record<string, {
    title: string;
    description: string;
    cards: Array<{
      icon: any;
      miniTitle: string;      // Titre en majuscule (ex: "Visibilité totale")
      mainTitle: string;      // Phrase principale en gras (ex: "Vous savez ce qui se passe — chaque semaine, pas en fin de mois.")
      description: string;
      badges: Array<{ text: string; icon?: any }>;
    }>;
    leftCard: {
      miniTitle: string;      // Titre en majuscule
      mainTitle: string;      // Phrase principale en gras
      description: string;
      points: string[];
    };
    rightCard: {
      mainTitle: string;      // Phrase principale (ex: "Next step")
      description: string;
      buttons: Array<{ text: string; link: string; variant: string }>;
    };
  }> = {
    "customer-experience": {
      title: "Un support externalisé avec les mêmes exigences qu'en interne.",
      description: "Pas de perte de contrôle, pas de qualité qui dérive, pas d'interlocuteur qui change. Ce sont les trois problèmes classiques de l'externalisation — voici comment on les traite structurellement.",
      cards: [
        {
          icon: Users,
          miniTitle: "Visibilité totale",
          mainTitle: "Vous savez ce qui se passe — chaque semaine, pas en fin de mois.",
          description: "Dashboard partagé, reporting hebdomadaire structuré, alertes automatiques sur les écarts. Aucune zone grise entre votre équipe et la nôtre.",
          badges: [
            { text: "KPI temps réel", icon: BarChart3 },
            { text: "Reporting hebdo", icon: Clock }
          ]
        },
        {
          icon: CheckCircle2,
          miniTitle: "Qualité stable",
          mainTitle: "La qualité ne dépend pas d'un agent — elle est auditée et documentée.",
          description: "Standards QA formalisés, calibrations régulières, formation continue. Chaque écart est détecté et traité avant d'impacter votre client final.",
          badges: [
            { text: "QA continue", icon: CheckCircle2 },
            { text: "Plans correctifs", icon: Shield }
          ]
        },
        {
          icon: BarChart3,
          miniTitle: "Équipe qui dure",
          mainTitle: "Des agents formés à vos process, qui restent et qui progressent.",
          description: "Turnover maîtrisé, formation continue, staffing ajusté. La stabilité des équipes construit une performance durable — pas un démarrage suivi d'une dégradation progressive.",
          badges: [
            { text: "Équipes dédiées", icon: Users },
            { text: "Formation continue", icon: BookOpen }
          ]
        }
      ],
      leftCard: {
        miniTitle: "La différence PulseCX",
        mainTitle: "Pas un prestataire qui exécute — un opérateur qui s'engage sur la performance.",
        description: "Un BPO classique vous livre des agents. PulseCX vous livre un cadre opérationnel complet : gouvernance, pilotage, qualité et amélioration continue. Vous externalisez sans perdre le contrôle.",
        points: [
          "Responsable opérationnel dédié — un interlocuteur unique sur toute la durée",
          "KPI définis avant le déploiement — mesurés dès J+1, pas en fin de trimestre",
          "Revues hebdomadaires + plan d'action — les opérations s'améliorent dans la durée"
        ]
      },
      rightCard: {
        mainTitle: "Next step",
        description: "Parlons de vos opérations support. 30 minutes pour analyser votre périmètre, vos volumes et définir un cadre de pilotage adapté à votre organisation.",
        buttons: [
          { text: "Planifier un échange", link: "/contact", variant: "cta" },
          { text: "Voir les intégrations", link: "/services", variant: "outline" }
        ]
      }
    },
    "sales-revenue": {
      title: "Structurer votre prospection avec une équipe commerciale dédiée.",
      description: "Générer du pipeline de manière fiable ne s'improvise pas. PulseCX déploie une équipe SDR structurée autour de votre ICP, de vos outils et de vos objectifs de conversion.",
      cards: [
        {
          icon: Target,
          miniTitle: "ICP & ciblage",
          mainTitle: "Des listes construites sur votre client idéal, pas sur du volume brut.",
          description: "Définition du profil client idéal, segmentation par secteur et signaux d'achat, enrichissement des contacts. On prospecte qui doit l'être — pas tout le monde.",
          badges: [
            { text: "BANT / MEDDIC", icon: CheckCircle2 },
            { text: "Enrichissement CRM", icon: Database }
          ]
        },
        {
          icon: Mail,
          miniTitle: "Scripts & cadences",
          mainTitle: "Des messages calibrés pour votre marché, pas des templates génériques.",
          description: "Copywriting opérationnel, séquences multicanales (email, LinkedIn, téléphone), A/B testing continu. Chaque message respecte votre image et vos valeurs.",
          badges: [
            { text: "Email", icon: Mail },
            { text: "LinkedIn", icon: Linkedin },
            { text: "Appels", icon: Phone }
          ]
        },
        {
          icon: BarChart3,
          miniTitle: "Pilotage pipeline",
          mainTitle: "Conversion, volume, qualité des leads — suivis chaque semaine.",
          description: "Reporting structuré sur les KPI commerciaux : taux de conversion, délai de qualification, qualité des RDV. Le pipeline est piloté, pas subi.",
          badges: [
            { text: "Reporting hebdo", icon: Clock },
            { text: "Feedback loop", icon: RefreshCcw }
          ]
        }
      ],
      leftCard: {
        miniTitle: "Extension de votre force de vente",
        mainTitle: "Une équipe SDR dédiée qui parle votre marché et respecte vos standards.",
        description: "PulseCX ne sous-traite pas de la prospection générique. On déploie des SDR/BDR formés à votre secteur, à vos objections et à votre positionnement — avec un handoff structuré vers vos commerciaux.",
        points: [
          "Formation à votre marché et vos messages — pas un script générique",
          "Handoff structuré — contexte, pains, next steps transmis à chaque RDV",
          "Optimisation continue — A/B test, ajustement des cadences, amélioration du taux de conversion"
        ]
      },
      rightCard: {
        mainTitle: "Next step",
        description: "Construisons votre machine commerciale. Nous analysons votre ICP, vos canaux et vos objectifs de pipeline pour définir une stratégie de prospection adaptée.",
        buttons: [
          { text: "Planifier un échange", link: "/contact", variant: "cta" },
          { text: "Voir les intégrations", link: "/services", variant: "outline" }
        ]
      }
    },
    "business-process": {
      title: "Un back-office externalisé qui libère vos équipes internes.",
      description: "Traitement de dossiers, saisie, contrôles, relances — ces opérations consomment du temps et de l'énergie sans créer de valeur directe. PulseCX les prend en charge avec rigueur pour que vos équipes se concentrent sur l'essentiel.",
      cards: [
        {
          icon: Zap,
          miniTitle: "Charge administrative réduite",
          mainTitle: "Vos équipes arrêtent de gérer le flux — elles pilotent l'activité.",
          description: "PulseCX absorbe les tâches répétitives : traitement de formulaires, relances, saisie, contrôles de conformité. Votre équipe interne intervient sur les décisions, pas sur l'exécution.",
          badges: [
            { text: "Tâches répétitives", icon: RefreshCcw },
            { text: "Traitement flux", icon: FileText }
          ]
        },
        {
          icon: Clock,
          miniTitle: "Backlog maîtrisé",
          mainTitle: "Les dossiers en attente ne s'accumulent plus — ils sont traités.",
          description: "Gestion des queues, règles de priorisation, suivi du backlog en temps réel. Les délais de traitement sont mesurés et pilotés — pas découverts en fin de semaine.",
          badges: [
            { text: "Suivi backlog", icon: Clock },
            { text: "Priorisation", icon: Target }
          ]
        },
        {
          icon: Database,
          miniTitle: "Données fiabilisées",
          mainTitle: "Vos systèmes reflètent la réalité — pas ce qu'on croit avoir saisi.",
          description: "Normalisation, déduplication, enrichissement et contrôles qualité sur vos données CRM et ERP. Des données propres pour des décisions fiables et une opération qui tourne sans friction.",
          badges: [
            { text: "Normalisation CRM", icon: Database },
            { text: "Déduplication", icon: RefreshCcw }
          ]
        }
      ],
      leftCard: {
        miniTitle: "Quand le back-office est bien opéré",
        mainTitle: "Tout le reste va plus vite — la vente, le support, la prise de décision.",
        description: "Un back-office mal géré ralentit toute l'organisation : les commerciaux attendent des données propres, le support reçoit des demandes que le back-office aurait dû traiter, la direction pilote sur des chiffres faux. PulseCX résout ça structurellement.",
        points: [
          "Cartographie des flux dès le cadrage — on identifie ce qui ralentit avant de déployer",
          "Process standardisés et documentés — reproductibles, auditables, améliorables",
          "Pilotage hebdomadaire — délais, qualité, backlog, anomalies détectées et traitées"
        ]
      },
      rightCard: {
        mainTitle: "Next step",
        description: "Externalisez votre back-office sans perdre le contrôle. Nous cartographions vos flux, identifions les priorités et définissons un périmètre d'externalisation adapté à votre organisation.",
        buttons: [
          { text: "Planifier un échange", link: "/contact", variant: "cta" },
          { text: "Voir les intégrations", link: "/services", variant: "outline" }
        ]
      }
    },
    "digital-ai": {
      title: "Des gains de productivité mesurables — pas des promesses de transformation.",
      description: "PulseCX déploie des automatisations et des briques IA avec un seul critère : est-ce que ça réduit le manuel, améliore la qualité ou donne de la visibilité ? Si oui, on le mesure. Sinon, on ne le déploie pas.",
      cards: [
        {
          icon: TrendingUp,
          miniTitle: "Productivité augmentée",
          mainTitle: "Moins de tâches manuelles — plus de temps sur ce qui crée de la valeur.",
          description: "Automatisation des workflows récurrents, génération de rapports, routing intelligent et relances automatiques. Les gains de productivité sont mesurés avant et après chaque déploiement.",
          badges: [
            { text: "Gains 20-40%", icon: TrendingUp },
            { text: "Tâches automatisées", icon: Zap }
          ]
        },
        {
          icon: Shield,
          miniTitle: "Qualité renforcée",
          mainTitle: "L'IA détecte ce que l'humain rate à volume — la supervision humaine corrige.",
          description: "Scoring automatique des interactions, détection d'anomalies en temps réel, flags qualité sur les écarts. La qualité ne dépend plus du volume traité — elle est systématiquement vérifiée.",
          badges: [
            { text: "QA assistée IA", icon: Cpu },
            { text: "Scoring", icon: BarChart3 }
          ]
        },
        {
          icon: Users,
          miniTitle: "Supervision humaine maintenue",
          mainTitle: "L'IA augmente les équipes — elle ne les remplace pas sur les décisions critiques.",
          description: "Chaque automatisation est supervisée par une équipe opérationnelle. Les décisions qui impactent vos clients ou votre conformité restent humaines. L'IA gère le volume, l'humain gère le jugement.",
          badges: [
            { text: "IA + humain", icon: Cpu },
            { text: "Contrôle continu", icon: CheckCircle2 }
          ]
        }
      ],
      leftCard: {
        miniTitle: "L'IA qui se mesure — pas celle qui s'annonce",
        mainTitle: "Chaque déploiement commence par définir comment on mesure le succès.",
        description: "Avant de déployer quoi que ce soit, PulseCX définit les métriques de succès : temps de traitement avant/après, taux d'erreur, volume automatisé, gains de productivité. L'impact est visible dès les 90 premiers jours — ou on ajuste.",
        points: [
          "Baseline définie avant déploiement — on mesure l'avant pour prouver l'après",
          "ROI visible dès 3 mois — productivité, qualité, réduction du manuel mesurées",
          "Itération continue — chaque revue ajuste les automatisations selon les résultats réels"
        ]
      },
      rightCard: {
        mainTitle: "Next step",
        description: "Mesurons l'impact data & IA sur vos opérations. Nous identifions vos cas d'usage prioritaires, définissons les métriques de succès et déployons ce qui crée un impact réel.",
        buttons: [
          { text: "Planifier un échange", link: "/contact", variant: "cta" },
          { text: "Voir les intégrations", link: "/services", variant: "outline" }
        ]
      }
    }
  };

  const whyData = whyPulseCXMap[slug || "customer-experience"];

  return (
    <div className="min-h-screen">
      {/* Hero avec CTA */}
      <section className="bg-gradient-hero pt-32 pb-24">
        <div className="container mx-auto px-6 ml-0 md:ml-10">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-8">
              <span className="w-1 h-2 rounded-full bg-pulse-turquoise animate-pulse" />
              {data.subtitle}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mb-8">
              {data.tagline}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                Planifier un échange <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
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

      {/* Cas d'usage - Style inspiré du design fourni */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Cas d'usage</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              {serviceTitleMap[slug || "customer-experience"]}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-4">
              {serviceDescMap[slug || "customer-experience"]}
            </p>
          </AnimatedSection>

          <div className="space-y-16 max-w-5xl mx-auto">
            {data.useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}>
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Texte */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-md mb-6">
                      {useCase.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {useCase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-pulse-turquoise flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-md">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau périmètre - Dynamique selon le service */}
      <section className="bg-gradient-to-br from-pulse-azure/5 to-pulse-turquoise/5 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-2 block">
              Périmètre d'intervention
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {perimetreTitle}
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {perimetreDesc}
            </p>
          </div>

          {/* Grid 4 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* 4 premiers cadres */}
            {perimetreItems.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 border border-pulse-azure/20 bg-pulse-azure/5 backdrop-blur-sm rounded-xl p-4 hover:border-pulse-azure/40 hover:bg-pulse-azure/10 transition-all duration-300 hover:shadow-lg h-full"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pulse-azure/20 text-pulse-azure flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Remplissage des emplacements vides si moins de 4 items */}
            {perimetreItems.length < 4 && Array.from({ length: 4 - perimetreItems.length }).map((_, idx) => (
              <div
                key={`empty-top-${idx}`}
                className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none"
              />
            ))}

            {/* 5ème cadre - même largeur que les autres (1 colonne) */}
            {perimetreItems[4] && (
              <div
                className="group flex items-start gap-3 border border-pulse-azure/20 bg-pulse-azure/5 backdrop-blur-sm rounded-xl p-4 hover:border-pulse-azure/40 hover:bg-pulse-azure/10 transition-all duration-300 hover:shadow-lg h-full"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pulse-azure/20 text-pulse-azure flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {perimetreItems[4].icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {perimetreItems[4].title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {perimetreItems[4].desc}
                  </p>
                </div>
              </div>
            )}

            {/* Espace vide après le 5ème cadre si besoin */}
            {perimetreItems[4] && !perimetreItems[5] && (
              <div className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none" />
            )}

            {/* 6ème cadre - même largeur que les autres (1 colonne) */}
            {perimetreItems[5] && (
              <div
                className="group flex items-start gap-3 border border-pulse-azure/20 bg-pulse-azure/5 backdrop-blur-sm rounded-xl p-4 hover:border-pulse-azure/40 hover:bg-pulse-azure/10 transition-all duration-300 hover:shadow-lg h-full"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pulse-azure/20 text-pulse-azure flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {perimetreItems[5].icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {perimetreItems[5].title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {perimetreItems[5].desc}
                  </p>
                </div>
              </div>
            )}

            {/* Espaces vides pour maintenir la grille complète après le 6ème cadre */}
            {perimetreItems[5] && (
              <>
                <div className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none" />
                <div className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none" />
              </>
            )}

            {/* Si seulement 5 items, un espace vide après le 5ème */}
            {perimetreItems[4] && !perimetreItems[5] && (
              <>
                <div className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none" />
                <div className="border border-pulse-azure/20 bg-pulse-azure/5 rounded-xl p-4 opacity-0 pointer-events-none" />
              </>
            )}

            {/* Si moins de 5 items, pas de cadre supplémentaire */}
          </div>

          {/* Footer note - Dynamique selon le service */}
          <div className="text-center pt-8">
            <p className="text-xs text-muted-foreground italic border-t border-pulse-azure/20 inline-block pt-4 px-6">
              {perimetreFooter}
            </p>
          </div>

        </div>
      </section>

      {/* Section Pourquoi PulseCX */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Pourquoi PulseCX</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              {whyData.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              {whyData.description}
            </p>
          </AnimatedSection>

          {/* 3 cards en haut */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ml-0 md:ml-10 mr-0 md:mr-10">
            {whyData.cards.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-pulse-turquoise/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-pulse-turquoise" />
                  </div>
                  {/* Mini titre en majuscule - gris et petit */}
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {card.miniTitle}
                  </div>
                  {/* Titre principal en gras */}
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {card.mainTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {card.badges.map((badge, badgeIdx) => (
                      <span key={badgeIdx} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-pulse-azure/10 text-pulse-azure text-xs font-medium">
                        {badge.icon && <badge.icon className="w-3 h-3" />}
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* 2 cards en bas - gauche plus large que droite */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-0 md:ml-10 mr-0 md:mr-10">
            {/* Card gauche - large (2 colonnes) */}
            <AnimatedSection delay={300} className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-hero text-primary-foreground h-full">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pulse-turquoise/20 rounded-full blur-[80px]" />
                  <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-pulse-azure/20 rounded-full blur-[60px]" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  {/* Mini titre en majuscule */}
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    {whyData.leftCard.miniTitle}
                  </div>
                  {/* Titre principal en gras */}
                  <h3 className="font-display font-bold text-2xl text-white mb-4">
                    {whyData.leftCard.mainTitle}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {whyData.leftCard.description}
                  </p>
                  <div className="flex flex-col gap-3 mt-4">
                    {whyData.leftCard.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-pulse-turquoise flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card droite - petite (1 colonne) */}
            <AnimatedSection delay={400} className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-pulse-turquoise/10 to-pulse-turquoise/5 border border-pulse-turquoise/20 h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-pulse-turquoise/5 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                    {whyData.rightCard.mainTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {whyData.rightCard.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    {whyData.rightCard.buttons.map((btn, btnIdx) => (
                      <Link key={btnIdx} to={btn.link}>
                        <Button variant={btn.variant as any} className="w-full group">
                          {btn.text}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Logiciels / Intégrations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Intégrations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              {integrationTitleMap[slug || "customer-experience"]}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {integrationDescMap[slug || "customer-experience"]}
            </p>
          </AnimatedSection>

          {/* Bandeau de logos */}
          <div className="relative max-w-5xl mx-auto">
            {/* Dégradé subtil en arrière-plan */}
            <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/5 via-pulse-azure/5 to-pulse-turquoise/5 rounded-3xl blur-xl" />

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-pulse-turquoise/20 p-8 shadow-xl">
              {/* Grille de logos - dynamique selon le service */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
                {integrationToolsMap[slug || "customer-experience"].map((tool, index) => (
                  <AnimatedSection key={tool.name} delay={index * 50}>
                    <div className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 shadow-md group-hover:shadow-pulse-turquoise/20 transition-all duration-300">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {tool.name}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Description sous la grille - dynamique selon le service */}
              <div className="mt-10 text-center border-t border-pulse-turquoise/10 pt-8">
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  {integrationFooterMap[slug || "customer-experience"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voir aussi nos autres services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">À découvrir</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Voir aussi nos autres services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Découvrez l'ensemble de nos solutions d'externalisation pour couvrir tous vos besoins opérationnels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherServices.map(([key, service], index) => {
              const ServiceIcon = service.icon;
              const serviceTitle = service.title.split(" ").slice(0, 3).join(" ").replace(/[,.]$/, '');
              return (
                <AnimatedSection key={key} delay={index * 100}>
                  <Link to={`/services/${key}`} className="group block">
                    <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-pulse-turquoise/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ServiceIcon className="w-6 h-6 text-pulse-turquoise" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-pulse-turquoise transition-colors">
                        {serviceTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {service.tagline}
                      </p>
                      <div className="mt-4 flex items-center text-pulse-turquoise text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                        En savoir plus <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
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
              <Link to="/">
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