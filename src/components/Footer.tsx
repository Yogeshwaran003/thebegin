import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient-primary">Clear</span>
              <span className="text-foreground">Craft</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help businesses grow online with data-driven digital marketing strategies that deliver measurable results.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Google Ads (PPC)</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hello@clearcraft.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clear Craft. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
