import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg">P</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground">
              Pulse<span className="text-pulse-turquoise">CX</span>
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Partenaire d'externalisation structuré et piloté. Performance, gouvernance et qualité au service de vos opérations.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services/customer-experience" className="hover:text-pulse-turquoise transition-colors">Customer Support & CX</Link></li>
            <li><Link to="/services/sales-revenue" className="hover:text-pulse-turquoise transition-colors">Sales & Revenue Ops</Link></li>
            <li><Link to="/services/business-process" className="hover:text-pulse-turquoise transition-colors">Business Process Ops</Link></li>
            <li><Link to="/services/digital-ai" className="hover:text-pulse-turquoise transition-colors">Digital & AI Support</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold mb-4">Entreprise</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/about" className="hover:text-pulse-turquoise transition-colors">À propos</Link></li>
            <li><Link to="/careers" className="hover:text-pulse-turquoise transition-colors">Carrières</Link></li>
            <li><Link to="/contact" className="hover:text-pulse-turquoise transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>contact@pulsecx.com</li>
            <li>Antananarivo, Madagascar</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/40">© {new Date().getFullYear()} PulseCX. Tous droits réservés.</p>
        <div className="flex gap-6 text-sm text-primary-foreground/40">
          <span className="hover:text-pulse-turquoise transition-colors cursor-pointer">Mentions légales</span>
          <span className="hover:text-pulse-turquoise transition-colors cursor-pointer">Politique de confidentialité</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
