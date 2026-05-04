import { motion } from "framer-motion";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "./ScrollAnimations";
import logoIcon from "@/assets/grc-sphere-icon.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@ObserveriTechnologies", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/observeri-technologies", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/observeritech", label: "X" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        {/* Navigation Links */}
        <FadeUp className="mb-12 pb-8 border-b border-slate-800">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
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
              <img src={logoIcon} alt="GRC Sphere" className="w-10 h-10" />
              <span className="text-xl font-bold text-white font-display">Observeri Technologies</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
              Observeri Technologies delivers a cybersecurity GRC platform and enterprise GRC solution—governance risk and
              compliance software with AI risk management software, risk quantification software, audit workflow automation,
              third party risk management software, and UAE / Middle East programs for regulated enterprises.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
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
                <h4 className="font-semibold text-white mb-6">Get in Touch</h4>
                <a 
                  href="mailto:connect@observeri.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  connect@observeri.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom Bar */}
        <FadeUp delay={0.2}>
          <div className="pt-8 border-t border-slate-800">
            <p className="text-xs text-slate-500">
              © 2025 GRC Sphere. All rights reserved.
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};
