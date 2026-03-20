import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Info, ArrowUp, X, Target, Eye, Heart, Users, Star, Sparkles, ArrowRight } from "lucide-react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  // Détecter le scroll pour afficher/cacher le bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Bouton flottant d'information (à droite) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowPromo(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-pulse-turquoise to-pulse-azure hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg group"
        >
          <Info className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </Button>
      </div>

      {/* Bouton retour en haut (à gauche) - visible seulement après scroll */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="w-12 h-12 rounded-full border-2 border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Modal de présentation - Version compacte et élégante */}
      {showPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-card rounded-2xl shadow-2xl max-w-md w-full border border-border animate-slide-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête avec dégradé - Compact */}
            <div className="bg-gradient-to-r from-pulse-turquoise to-pulse-azure p-6 relative">
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">PulseCX</h3>
                      <p className="text-white/80 text-sm">Operations Excellence Partner</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPromo(false)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Corps du modal - Compact */}
            <div className="p-6">
              {/* Description courte */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <span className="font-semibold text-pulse-turquoise">PulseCX</span> est votre partenaire d'externalisation structuré. Gouvernance, KPI, qualité : nous pilotons vos opérations avec rigueur et transparence.
              </p>

              {/* Statistiques en ligne */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { value: "200+", label: "Experts", icon: Users, color: "from-pulse-turquoise to-pulse-azure" },
                  { value: "98%", label: "Satisfaction", icon: Star, color: "from-pulse-azure to-pulse-turquoise" },
                  { value: "24/7", label: "Support", icon: Target, color: "from-pulse-turquoise to-pulse-azure" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-2 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5 rounded-xl">
                    <stat.icon className="w-4 h-4 text-pulse-turquoise mx-auto mb-1" />
                    <div className="font-display font-bold text-foreground text-base">{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Deux valeurs clés en une ligne */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 p-2 bg-card/50 rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulse-turquoise to-pulse-azure flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-xs">Excellence</div>
                    <p className="text-[10px] text-muted-foreground">Dans chaque interaction</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-2 p-2 bg-card/50 rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulse-azure to-pulse-turquoise flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-xs">Transparence</div>
                    <p className="text-[10px] text-muted-foreground">Reporting temps réel</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="cta" 
                  size="sm"
                  className="text-xs h-10"
                  onClick={() => {
                    setShowPromo(false);
                    window.location.href = "/about";
                  }}
                >
                  Découvrir PulseCX
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs h-10 border-pulse-turquoise text-pulse-turquoise hover:bg-pulse-turquoise hover:text-white"
                  onClick={() => {
                    setShowPromo(false);
                    window.location.href = "/contact";
                  }}
                >
                  Nous contacter
                </Button>
              </div>

              {/* Lien rapide */}
              <div className="text-center mt-3">
                <a 
                  href="/about" 
                  className="text-xs text-pulse-turquoise hover:underline inline-flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPromo(false);
                    window.location.href = "/about";
                  }}
                >
                  En savoir plus sur notre approche
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;