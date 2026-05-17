"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, CreditCard, Phone } from "lucide-react";
import instagram from "../../public/icons/instagram.svg";
import facebook from "../../public/icons/facebook.svg";
import whatsapp from "../../public/icons/whatsapp.svg";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  image: StaticImageData;
}

const quickLinks: FooterLink[] = [
  { label: "Ballina", href: "/" },
  { label: "Shfleto Automjetet", href: "/inventory" },
  { label: "Rreth Nesh", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
];

const companyLinks: FooterLink[] = [
  { label: "Shërbimet", href: "/services" },
  { label: "Si Funksionon", href: "/how-it-works" },
  { label: "Financimi", href: "/financing" },
  { label: "Dëshmitë", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", image: instagram },
  { label: "Facebook", href: "https://facebook.com", image: facebook },
  { label: "Instagram", href: "https://instagram.com", image: instagram },
  { label: "Twitter", href: "https://twitter.com", image: whatsapp },
];

const legalLinks: FooterLink[] = [
  { label: "Politika e Privatësisë", href: "/privacy" },
  { label: "Kushtet e Përdorimit", href: "/terms" },
  { label: "Politika e Cookies", href: "/cookies" },
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

function SocialIcon({ image, label, href }: SocialLink) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit us on ${label}`}
      className="text-off-white/70 hover:text-bright-emerald transition-colors duration-300"
    >
      <Image src={image} alt={label} className="w-4 h-4" />
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
    <div
      className="flex items-center gap-3"
      aria-label="Accepted payment methods"
    >
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
    <footer className="bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerVariants}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1: About */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-off-white text-2xl font-bold tracking-tight">
                CARFROMKOREA
              </h2>
              <p className="text-off-white/70 text-sm mt-3 leading-relaxed">
                Vepra arti premium automobilistike për koleksionistin e dalluar
              </p>
              <p className="text-off-white/50 text-xs mt-2 font-medium">
                Est. 2015
              </p>
              <div
                className="flex items-center gap-4 mt-5"
                role="list"
                aria-label="Social media links"
              >
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div variants={fadeUpVariants}>
              <LinkColumn title="Lidhje të Shpejta" links={quickLinks} />
            </motion.div>

            {/* Column 3: Company */}
            <motion.div variants={fadeUpVariants}>
              <LinkColumn title="Kompania" links={companyLinks} />
            </motion.div>

            {/* Column 4: Contact & Newsletter */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col gap-8"
            >
              {/* Contact */}
              <div>
                <h3 className="text-off-white font-semibold text-lg mb-4">
                  Kontakti
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-off-white/70">
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="text-rich-green shrink-0" />
                    <a
                      href="tel:+38343932374"
                      aria-label="Call us at +383 43 932 374"
                      className="hover:text-bright-emerald transition-colors duration-300"
                    >
                      +383 43 932 374
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="text-rich-green shrink-0" />
                    <a
                      href="mailto:info@carfromkorea.com"
                      aria-label="Email us at info@carfromkorea.com"
                      className="hover:text-bright-emerald transition-colors duration-300"
                    >
                      info@carfromkorea.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin size={16} className="text-rich-green shrink-0" />
                    <span>1 Nëna Terezë, Fushë-Kosovë 12000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={16}
                      className="text-rich-green shrink-0 mt-0.5"
                    />
                    <span>
                      Hën-Pre 9AM-6PM
                      <br />
                      Sht 10AM-4PM
                      <br />
                      Die Mbyllur
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
            <p>&copy; 2026 CarFromKorea. Të gjitha të drejtat e rezervuara.</p>
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
                    <span aria-hidden="true" className="text-off-white/20">
                      |
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
