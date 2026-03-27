import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
// Importez vos logos
import logoClair from "@/assets/3.png"; // Logo pour fond sombre (navbar transparente)
import logoSombre from "@/assets/4.png"; // Logo pour fond clair (navbar scrolled)

const services = [
  { name: "Customer Support & CX Operations", href: "/services/customer-experience" },
  { name: "Sales Development & Revenue Ops", href: "/services/sales-revenue" },
  { name: "Business Process Operations", href: "/services/business-process" },
  { name: "Digital & Operational Automation", href: "/services/digital-ai" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Sélectionnez le logo en fonction de l'état du scroll
  // Quand scrolled = true (fond clair) -> logo sombre
  // Quand scrolled = false (fond transparent) -> logo clair
  const currentLogo = scrolled ? logoSombre : logoClair;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo - Version avec image */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={currentLogo} 
            alt="PulseCX" 
            className="h-40 w-auto" // Ajustez la hauteur selon vos besoins
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 font-medium text-sm transition-colors ${scrolled ? "text-foreground hover:text-pulse-turquoise" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-80">
                <div className="bg-card rounded-xl shadow-card-hover border border-border p-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 hover:text-pulse-turquoise transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-pulse-turquoise" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
            À propos
          </Link>
          <Link to="/careers" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-pulse-turquoise" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
            Carrières
          </Link>

          <div className="flex items-center gap-1 text-sm">
            <Globe className={`w-4 h-4 ${scrolled ? "text-muted-foreground" : "text-primary-foreground/60"}`} />
            <span className={`font-medium ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>FR</span>
            <span className={`${scrolled ? "text-muted-foreground" : "text-primary-foreground/40"}`}>/</span>
            <span className={`${scrolled ? "text-muted-foreground" : "text-primary-foreground/60"}`}>EN</span>
          </div>

          <Link to="/contact">
            <Button variant="cta" size="lg">
              Planifier un échange
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-card-hover">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-medium text-foreground w-full text-left"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((s) => (
                    <Link key={s.href} to={s.href} className="block text-sm text-muted-foreground hover:text-pulse-turquoise">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="block font-medium text-foreground">À propos</Link>
            <Link to="/careers" className="block font-medium text-foreground">Carrières</Link>
            <Link to="/contact" className="block">
              <Button variant="cta" className="w-full">Planifier un échange</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;