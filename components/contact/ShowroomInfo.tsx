"use client";

import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

const infoItems = [
  {
    icon: MapPin,
    label: "Adresa",
    content: "1 Nëna Terezë, Fushë-Kosovë 12000",
    href: "https://www.google.com/maps/place/AutoX+Korea+International/@42.6374737,21.0930332,152m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1353630a3d6805a1:0x9ec4af8be52fd07f!8m2!3d42.6374737!4d21.0936769!16s%2Fg%2F11xwbc10ly?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    label: "Telefoni",
    content: "+1 (555) 555-0989",
    href: "tel:+15555550989",
  },
  {
    icon: Mail,
    label: "Email",
    content: "contact@carfromkorea.com",
    href: "mailto:contact@carfromkorea.com",
  },
];

const hours = [
  { day: "Hënë - Premte", time: "9:00 - 19:00" },
  { day: "Shtunë", time: "9:00 - 17:00" },
  { day: "Diele", time: "Vetëm me Takim" },
];

export default function ShowroomInfo() {
  return (
    <motion.div
      variants={variants.fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-[#1D2021] border border-light-emerald/30 rounded-lg p-6 sm:p-8 space-y-6"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-white">Showroom</h2>

      {/* Info Items */}
      <div className="space-y-4">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-start gap-3 group transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-lg bg-light-emerald/15 flex items-center justify-center shrink-0 group-hover:bg-light-emerald/30 transition-all duration-200">
                <Icon size={18} className="text-light-emerald" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-off-white/50 font-medium uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-white text-sm font-medium mt-0.5 group-hover:text-light-emerald transition-colors duration-200">
                  {item.content}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Hours */}
      <div className="flex items-start gap-3 pt-2 border-t border-white/5">
        <div className="w-9 h-9 rounded-lg bg-light-emerald/15 flex items-center justify-center shrink-0">
          <Clock size={18} className="text-light-emerald" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-off-white/50 font-medium uppercase tracking-wide mb-3">
            Orari i Punës
          </p>
          <div className="space-y-2">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-off-white/80">{h.day}</span>
                <span className="text-off-white/50 font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="pt-2">
        <p className="text-xs text-off-white/50 font-medium uppercase tracking-wide mb-3">
          Lokacioni
        </p>
        <div className="rounded-lg overflow-hidden border border-light-emerald/20 h-[240px] sm:h-[280px] relative group hover:border-light-emerald/40 transition-all duration-300">
          <iframe
            title="Showroom Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.0787552058136!2d21.09303316961223!3d42.637473698198015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353630a3d6805a1%3A0x9ec4af8be52fd07f!2sAutoX%20Korea%20International!5e1!3m2!1sen!2s!4v1778884018087!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "invert(0.93) hue-rotate(180deg) saturate(0.7) brightness(0.95)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>

      {/* Directions Link */}
      <a
        href="https://www.google.com/maps/place/AutoX+Korea+International/@42.6374737,21.0930332,152m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1353630a3d6805a1:0x9ec4af8be52fd07f!8m2!3d42.6374737!4d21.0936769!16s%2Fg%2F11xwbc10ly?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 border border-light-emerald/40 text-light-emerald text-sm font-semibold rounded-lg hover:bg-light-emerald/10 hover:border-light-emerald/60 transition-all duration-200 group"
      >
        Merr Drejtimet
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </a>
    </motion.div>
  );
}
