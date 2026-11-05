import { CookieSettingsButton } from "./CookieConsent";
import { RelatedProducts } from "./RelatedProducts";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "./ScrollAnimations";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/career" },
  { label: "Team", href: "/team" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Us", href: "/#contact" },
];

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@ObserveriTechnologies", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/observeri-technologies", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/observeritech", label: "X" },

];

export const Footer = () => {
  return (
    <>
    <RelatedProducts />
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        {/* Navigation Links */}
        <FadeUp className="mb-12 border-b border-border pb-8">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
            <CookieSettingsButton />
          </nav>
        </FadeUp>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Logo & Description */}
          <FadeUp>
            <Link 
              to="/" 
              className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <img
                loading="lazy"
                decoding="async"
                src="/observeri-logo.png"
                alt="Observeri Technologies"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Observeri GRC covers enterprise risk as well as cybersecurity. Cyber, operational, technology, financial,
              and ESG risk sit with compliance, audit, and third-party risk in one record. Observeri serves enterprises,
              SMEs, and startups worldwide, and covers the regulatory regimes they work under.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* Right Side - Contact Info */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="mb-6 font-semibold text-foreground">Get in Touch</h4>
                <address className="mb-4 text-sm not-italic text-muted-foreground">Observeri Technologies<br />Dubai, United Arab Emirates</address>
                <a 
                  href="mailto:connect@observeri.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  connect@observeri.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom Bar */}
        <FadeUp delay={0.2}>
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Observeri Technologies. All rights reserved.
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
    </>
  );
};
