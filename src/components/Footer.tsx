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
          <p className="text-primary-foreground/60 text-sm leading-relaxed mt-3">Antananarivo, Madagascar</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services/customer-experience" className="hover:text-pulse-turquoise transition-colors">Customer Support & CX</Link></li>
            <li><Link to="/services/sales-revenue" className="hover:text-pulse-turquoise transition-colors">Sales & Revenue Ops</Link></li>
            <li><Link to="/services/business-process" className="hover:text-pulse-turquoise transition-colors">Business Process Ops</Link></li>
            <li><Link to="/services/digital-ai" className="hover:text-pulse-turquoise transition-colors">Digital & AI Support</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold mb-4">NAVIGATION</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/about" className="hover:text-pulse-turquoise transition-colors">À propos</Link></li>
            <li><Link to="/careers" className="hover:text-pulse-turquoise transition-colors">Carrières</Link></li>
            <li><Link to="/contact" className="hover:text-pulse-turquoise transition-colors">Contact</Link></li>
          </ul>
        </div>

{/* Contact */}
<div>
  <h4 className="font-display font-semibold mb-4">CONTACT</h4>
  <ul className="space-y-2 text-sm text-primary-foreground/60 mb-4">
    <li>contact@pulsecx.com</li>
    <li>xxxx xxxx xxxx</li>
    <li>Antananarivo, Madagascar</li>
  </ul>
  
  {/* Icônes réseaux sociaux */}
  <div className="flex gap-4 mt-4">
    <a 
      href="https://www.linkedin.com/company/pulsecx" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-pulse-turquoise transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
      </svg>
    </a>
    <a 
      href="https://www.facebook.com/pulsecx" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-pulse-turquoise transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>
  </div>
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
