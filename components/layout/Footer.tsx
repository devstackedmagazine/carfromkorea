"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MessageCircle,
  Camera,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CreditCard,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: typeof ExternalLink;
}

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Browse Vehicles", href: "/inventory" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const companyLinks: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Financing", href: "/financing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: ExternalLink },
  { label: "Facebook", href: "https://facebook.com", icon: MessageCircle },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "Twitter", href: "https://twitter.com", icon: X },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SocialIcon({ icon: Icon, label, href }: SocialLink) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit us on ${label}`}
      className="text-off-white/70 hover:text-bright-emerald transition-colors duration-300"
    >
      <Icon size={22} />
    </Link>
  );
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-off-white font-semibold text-lg mb-4">{title}</h3>
      <nav aria-label={title} className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-off-white/70 hover:text-bright-emerald transition-colors duration-300 text-sm"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function PaymentIcons() {
  return (
    <div className="flex items-center gap-3" aria-label="Accepted payment methods">
      <span className="text-off-white/50 text-xs font-medium tracking-wide uppercase border border-off-white/20 rounded px-2 py-1">
        Visa
      </span>
      <span className="text-off-white/50 text-xs font-medium tracking-wide uppercase border border-off-white/20 rounded px-2 py-1">
        MC
      </span>
      <span className="text-off-white/50 text-xs font-medium tracking-wide uppercase border border-off-white/20 rounded px-2 py-1">
        Amex
      </span>
      <CreditCard size={18} className="text-off-white/50" />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerVariants}
      className="bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <motion.div variants={fadeUpVariants}>
            <h2 className="text-off-white text-2xl font-bold tracking-tight">
              Threads Studio
            </h2>
            <p className="text-off-white/70 text-sm mt-3 leading-relaxed">
              Premium automotive masterpieces for the discerning collector
            </p>
            <p className="text-off-white/50 text-xs mt-2 font-medium">
              Est. 1984
            </p>
            <div className="flex items-center gap-4 mt-5" role="list" aria-label="Social media links">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeUpVariants}>
            <LinkColumn title="Quick Links" links={quickLinks} />
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={fadeUpVariants}>
            <LinkColumn title="Company" links={companyLinks} />
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div variants={fadeUpVariants} className="flex flex-col gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-off-white font-semibold text-lg mb-4">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-off-white/70">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-rich-green shrink-0" />
                  <a
                    href="tel:+15551234567"
                    aria-label="Call us at +1 (555) 123-4567"
                    className="hover:text-bright-emerald transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-rich-green shrink-0" />
                  <a
                    href="mailto:hello@threadsstudio.com"
                    aria-label="Email us at hello@threadsstudio.com"
                    className="hover:text-bright-emerald transition-colors duration-300"
                  >
                    hello@threadsstudio.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-rich-green shrink-0" />
                  <span>123 Luxury Lane, Seoul, Korea</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-rich-green shrink-0 mt-0.5" />
                  <span>
                    Mon-Fri 9AM-6PM<br />
                    Sat 10AM-4PM<br />
                    Sun Closed
                  </span>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-off-white/50">
          <p>&copy; 2024 Threads Studio. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="hover:text-bright-emerald transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span aria-hidden="true" className="text-off-white/20">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
