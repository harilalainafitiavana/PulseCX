import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto lg:mx-0">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-4 block">
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Discutons de <span className="text-gradient">vos besoins</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl">
              Nous analysons vos volumes, vos canaux et vos objectifs pour vous proposer un cadre adapté.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Contact principale */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
              {/* Colonne gauche - Formulaire */}
              <AnimatedSection delay={200} className="w-full">
                <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">
                  <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="w-6 h-6 text-pulse-turquoise flex-shrink-0" />
                      <h3 className="font-display text-xl font-bold text-foreground">Envoyez-nous un message</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nom complet <span className="text-pulse-turquoise">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email <span className="text-pulse-turquoise">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean.dupont@entreprise.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition"
                          required
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Entreprise
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Nom de votre entreprise"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition"
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
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition"
                          />
                        </div>
                      </div>

                      {/* NOUVEAU CHAMP - Service concerné */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service concerné <span className="text-pulse-turquoise">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition cursor-pointer"
                          required
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="customer-support">Customer Support & Expérience Client</option>
                          <option value="revenue-ops">Revenue Ops & Sales Development</option>
                          <option value="back-office">Back Office & Processus Métier</option>
                          <option value="digital-ai">Digital & IA / Automatisation</option>
                          <option value="not-sure">Je ne sais pas encore</option>
                        </select>
                        <p className="text-xs text-muted-foreground mt-1">
                          Nous adapterons notre réponse à votre besoin.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message <span className="text-pulse-turquoise">*</span>
                        </label>
                        <textarea
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-pulse-turquoise focus:ring-1 focus:ring-pulse-turquoise outline-none transition resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full group"
                      >
                        Envoyer le message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        * Champs obligatoires. Votre demande sera traitée dans les plus brefs délais.
                      </p>
                    </form>
                  </div>
                </div>
              </AnimatedSection>

              {/* Colonne droite - Informations */}
              <AnimatedSection className="w-full">
                <div className="max-w-xl mx-auto lg:mx-0">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Des besoins ? Des questions ?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-12">
                    Contactez-nous dès aujourd'hui pour discuter de vos besoins avec nos experts.
                  </p>

                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-pulse-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pulse-turquoise/20 transition-colors">
                        <Mail className="w-5 h-5 text-pulse-turquoise" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground break-all">contact@pulsecx.com</p>
                        <p className="text-sm text-pulse-turquoise mt-1">Réponse sous 24h</p>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-pulse-azure/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pulse-azure/20 transition-colors">
                        <Phone className="w-5 h-5 text-pulse-azure" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-foreground mb-1">Téléphone</h3>
                        <p className="text-muted-foreground">+261 34 00 000 00</p>
                        <p className="text-sm text-pulse-azure mt-1">Lun-Ven, 9h-18h</p>
                      </div>
                    </div>

                    {/* Adresses */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-pulse-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pulse-turquoise/20 transition-colors">
                        <MapPin className="w-5 h-5 text-pulse-turquoise" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-foreground mb-1">Adresses</h3>
                        <p className="text-muted-foreground mb-2">39 Rue Guy Môquet, 75017 Paris – France</p>
                        <p className="text-muted-foreground">Immeuble Trade Tower Ivandry, Antananarivo 101 – Madagascar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="py-12 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Carte interactive */}
            <div className="bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-3 min-h-[400px]">

                {/* Colonne gauche - Infos de contact */}
                <div className="lg:col-span-1 bg-gradient-to-br from-pulse-turquoise to-pulse-azure p-8 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2">📍 Nos bureaux</h3>
                    <p className="text-white/80 text-sm mb-6">Deux implantations pour mieux vous servir</p>

                    <div className="space-y-6">
                      {/* Madagascar */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-white">Madagascar</h4>
                          <p className="text-white/70 text-sm">Immeuble Trade Tower<br />Ivandry, Antananarivo 101</p>
                        </div>
                      </div>

                      {/* France */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-white">France</h4>
                          <p className="text-white/70 text-sm">39 Rue Guy Môquet<br />75017 Paris</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lun - Ven : 9h00 - 18h00</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+261 34 00 000 00</span>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Carte et formulaire simplifié */}
                <div className="lg:col-span-2 p-8">
                  <div className="h-full flex flex-col">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      📍 Nous trouver
                    </h3>

                    {/* Aperçu carte (simulé) */}
                    <div className="relative flex-1 bg-gradient-to-br from-pulse-turquoise/10 to-pulse-azure/10 rounded-xl border-2 border-dashed border-pulse-turquoise/30 p-6 flex items-center justify-center group hover:border-pulse-turquoise transition-colors">
                      <div className="text-center">
                        {/* Icône de carte */}
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pulse-turquoise/20 to-pulse-azure/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-pulse-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <p className="text-foreground font-medium mb-1">Carte interactive</p>
                        <p className="text-muted-foreground text-sm">Cliquez pour voir l'emplacement exact</p>

                        {/* Bouton fictif */}
                        <button className="mt-4 px-4 py-2 bg-pulse-turquoise text-white rounded-lg text-sm font-medium hover:bg-pulse-azure transition-colors">
                          Ouvrir dans Google Maps
                        </button>
                      </div>
                    </div>

                    {/* Actions rapides */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <button className="flex items-center justify-center gap-2 p-3 bg-card hover:bg-pulse-turquoise/5 rounded-xl border border-border transition-colors group">
                        <svg className="w-4 h-4 text-pulse-turquoise group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-foreground">Itinéraire</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 p-3 bg-card hover:bg-pulse-turquoise/5 rounded-xl border border-border transition-colors group">
                        <svg className="w-4 h-4 text-pulse-turquoise group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm text-foreground">Nous appeler</span>
                      </button>
                    </div>
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

export default Contact;