import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, MapPin, Clock, Send, Briefcase,
  TrendingUp, Users, Award, Heart, Star, ChevronDown,
  Mail, Phone, FileText, CheckCircle2, Sparkles,
  Calendar, Coffee, Gift, Zap, Globe, Shield
} from "lucide-react";
import { useState, useRef } from "react";

// Données enrichies
const stats = [
  { value: "X+", label: "Collaborateurs", icon: Users },
  { value: "X%", label: "Satisfaction", icon: Star },
  { value: "X+", label: "Nationalités", icon: Award },
  { value: "X%", label: "Formation interne", icon: TrendingUp },
];

const jobs = [
  {
    title: "Conseiller Client Multilingue",
    type: "Temps plein",
    location: "Antananarivo",
    department: "Customer Experience",
    posted: "date fixe",
    description: "Vous assurez un support client exceptionnel sur nos canaux multiples (email, chat, téléphone).",
    requirements: ["Anglais courant", "Excellente communication", "Résolution de problèmes"],
    icon: Users
  },
  {
    title: "Team Leader CX",
    type: "Temps plein",
    location: "Antananarivo",
    department: "Management",
    posted: "date fixe",
    description: "Vous pilotez une équipe de conseillers et garantissez l'atteinte des objectifs de performance.",
    requirements: ["Expérience en management", "Leadership", "Analyse de données"],
    icon: Award
  },
  {
    title: "Chargé de Qualité (QA)",
    type: "Temps plein",
    location: "Antananarivo",
    department: "Qualité",
    posted: "date fixe",
    description: "Vous analysez la qualité des interactions et mettez en place des plans d'amélioration.",
    requirements: ["Souci du détail", "Méthodologie", "Reporting"],
    icon: Shield
  },
  {
    title: "Business Development Representative",
    type: "Temps plein",
    location: "Antananarivo",
    department: "Sales",
    posted: "date fixe",
    description: "Vous développez le portefeuille clients et qualifiez les opportunités commerciales.",
    requirements: ["Prospection", "Négociation", "Relation client"],
    icon: TrendingUp
  },
];

const benefits = [
  { icon: Coffee, label: "Tickets restaurant" },
  { icon: Heart, label: "Mutuelle entreprise" },
  { icon: Calendar, label: "Congés supplémentaires" },
  { icon: Award, label: "Formation continue" },
  { icon: TrendingUp, label: "Évolution rapide" },
  { icon: Gift, label: "Prime de performance" },
  { icon: Globe, label: "Environnement international" },
  { icon: Zap, label: "Événements d'équipe" },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null
  });

  const formSectionRef = useRef(null);

  // Scroll vers le formulaire quand on clique sur Postuler
  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ ...formData, position: jobTitle });
    // Scroll vers la section formulaire
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Candidature envoyée avec succès !");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      cv: null
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section Animée */}
      <section className="relative bg-gradient-hero pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pulse-turquoise blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pulse-azure blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Particules animées */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pulse-turquoise/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse-turquoise/30 bg-pulse-turquoise/10 text-pulse-turquoise text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Rejoignez l'aventure PulseCX
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Façonnez l'avenir de{" "}
                <span className="text-gradient">l'externalisation</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl">
                PulseCX offre un cadre structuré, des opportunités d'évolution accélérées et une culture de la performance où chaque talent peut s'épanouir.
              </p>

              {/* Stats animées */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pulse-turquoise/20 to-pulse-azure/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                        <stat.icon className="w-5 h-5 text-pulse-turquoise mx-auto mb-1" />
                        <div className="font-display text-xl font-bold text-primary-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Image/Illustration animée */}
            <AnimatedSection delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pulse-turquoise/30 to-pulse-azure/30 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.slice(0, 6).map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-white/5 rounded-xl p-4 border border-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <benefit.icon className="w-5 h-5 text-pulse-turquoise" />
                        <p className="text-white text-sm font-medium">{benefit.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* SECTION OPPORTUNITÉS */}
      <section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Opportunités</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Rejoignez nos équipes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Découvrez nos postes ouverts à Antananarivo
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 items-start ml-0 md:ml-10 mr-0 md:mr-10">
            {/* Colonne de gauche - Liste des offres */}
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 100}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pulse-turquoise to-pulse-azure rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />

                    <div className="relative bg-card rounded-2xl p-6 border border-border group-hover:border-transparent transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center flex-shrink-0`}>
                          <job.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-pulse-turquoise bg-pulse-turquoise/10 px-3 py-1 rounded-full">
                              {job.department}
                            </span>
                            <span className="text-xs text-muted-foreground">{job.posted}</span>
                          </div>

                          <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-pulse-turquoise transition-colors">
                            {job.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-pulse-turquoise" /> {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-pulse-turquoise" /> {job.location}
                            </span>
                          </div>

                          <Button
                            variant="cta"
                            size="sm"
                            onClick={() => handleApply(job.title)}
                            className="group/btn mt-2"
                          >
                            Postuler
                            <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Candidature spontanée */}
              <AnimatedSection delay={500}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border text-center mt-6">
                  <p className="text-foreground mb-4">Vous ne trouvez pas le poste idéal ?</p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleApply("Candidature spontanée")}
                    className="border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white w-full"
                  >
                    Candidature spontanée
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Colonne de droite - Pourquoi postuler */}
            <AnimatedSection delay={200} className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 rounded-3xl p-8 border border-border shadow-2xl">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Pourquoi postuler chez PulseCX ?
                </h3>

                {/* Grille des avantages */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-card/30 rounded-xl hover:bg-card/50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-foreground">{benefit.label}</span>
                    </div>
                  ))}
                </div>

                {/* Image d'ambiance */}
                <div className="relative rounded-xl overflow-hidden mb-6 h-48 group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Équipe PulseCX"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-medium">Une équipe soudée et dynamique</p>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="bg-card/50 rounded-xl p-4 border border-border italic">
                  <p className="text-muted-foreground text-sm mb-2">
                    "J'ai commencé comme conseiller il y a 2 ans, aujourd'hui je suis Team Leader. PulseCX croit en ses talents."
                  </p>
                  <p className="text-foreground font-display font-bold text-sm">— Rado Rakoto</p>
                  <p className="text-xs text-muted-foreground">Team Leader CX</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION FORMULAIRE DE CANDIDATURE - Toujours visible en bas */}
      <section
        ref={formSectionRef}
        id="candidature-form"
        className="py-16 bg-gradient-to-r from-pulse-turquoise/10 to-pulse-azure/10 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Candidature</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              {selectedJob ? `Postuler pour : ${selectedJob}` : "Candidature spontanée"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Remplissez le formulaire ci-dessous pour nous rejoindre
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* DIV GAUCHE - Formulaire de candidature (seul) */}
              <div className="bg-card rounded-2xl shadow-card-hover p-8 border border-border relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-pulse-turquoise/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-pulse-turquoise" />
                    Vos informations
                  </h4>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet <span className="text-pulse-turquoise">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-pulse-turquoise/20 focus:border-pulse-turquoise outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email <span className="text-pulse-turquoise">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean.dupont@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-pulse-turquoise/20 focus:border-pulse-turquoise outline-none transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+261 34 00 000 00"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-pulse-turquoise/20 focus:border-pulse-turquoise outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        CV (PDF, DOC) <span className="text-pulse-turquoise">*</span>
                      </label>
                      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-pulse-turquoise/30 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
                          className="hidden"
                          id="cv-upload"
                          required
                        />
                        <label htmlFor="cv-upload" className="cursor-pointer">
                          <FileText className="w-10 h-10 text-pulse-turquoise mx-auto mb-3" />
                          <p className="text-foreground font-medium mb-1">Cliquez pour télécharger</p>
                          <p className="text-xs text-muted-foreground">PDF ou DOC - Max 5MB</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Parlez-nous de votre motivation..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-pulse-turquoise/20 focus:border-pulse-turquoise outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="flex-1 group"
                      >
                        Envoyer ma candidature
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* DIV DROITE - Pourquoi postuler chez PulseCX ? (seul) */}
              <div className="bg-card rounded-2xl shadow-card-hover p-8 border border-border relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pulse-azure/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-pulse-turquoise" />
                    Pourquoi postuler chez PulseCX ?
                  </h4>

                  {/* Avantages en deux colonnes */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-pulse-turquoise/5 to-transparent hover:from-pulse-turquoise/10 transition-colors">
                        <benefit.icon className="w-4 h-4 text-pulse-turquoise" />
                        <span className="text-xs text-foreground">{benefit.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Image inspirante */}
                  <div className="relative rounded-xl overflow-hidden mb-6 h-36 group">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Team meeting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pulse-turquoise/60 to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-medium">Rejoignez une équipe qui vous ressemble</p>
                    </div>
                  </div>

                  {/* Contact direct */}
                  <div className="bg-card/50 rounded-xl p-4 border border-border mb-4">
                    <h5 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-pulse-turquoise" />
                      Une question ?
                    </h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      Notre équipe RH est à votre écoute
                    </p>
                    <a
                      href="mailto:recrutement@pulsecx.com"
                      className="text-sm text-pulse-turquoise hover:underline flex items-center gap-1"
                    >
                      recrutement@pulsecx.com
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Processus rapide */}
                  <div className="text-center p-3 bg-gradient-to-r from-pulse-turquoise/5 to-pulse-azure/5 rounded-xl">
                    <Clock className="w-5 h-5 text-pulse-turquoise mx-auto mb-1" />
                    <p className="text-xs text-foreground">Délai de réponse moyen : 48h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;