"use client";

import { Shield, Gem, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";
import type { ValueCard } from "./types";

const values: ValueCard[] = [
  {
    icon: Shield,
    title: "Besimi",
    description:
      "Ne ndërtojmë marrëdhënie të qëndrueshme bazuar në transparencë dhe integritet. Çdo transaksion është i sigurt dhe i dokumentuar plotësisht.",
  },
  {
    icon: Gem,
    title: "Cilësia",
    description:
      "Çdo automjet kalon nëpër një inspektim rigoroz 150-pikësh për të garantuar standardet më të larta të cilësisë para se të arrijë tek ju.",
  },
  {
    icon: Users,
    title: "Klienti i Parë",
    description:
      "Ne vendosim nevojat tuaja në qendër të çdo vendimi. Ekipi ynë i dedikuar ofron mbështetje të personalizuar në çdo hap të rrugës.",
  },
  {
    icon: Lightbulb,
    title: "Inovacioni",
    description:
      "Teknologjia dhe qasjet moderne na mundësojnë të ofrojmë një përvojë importimi të shpejtë, efikase dhe pa stres për klientët tanë.",
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function CoreValuesSection() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants.staggerContainer}
      >
        <motion.div variants={variants.fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vlerat Tona Thelb&euml;sore
          </h2>
          <p className="text-off-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Parimet q&euml; nxisin k&euml;rkimin ton&euml; t&euml;
            pal&euml;kundur p&euml;r p&euml;rsosm&euml;ri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-[#1D2021] border border-rich-green/40 rounded-lg p-6 sm:p-8 hover:border-light-emerald/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-light-emerald/20 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-rich-green/40 to-light-emerald/20 flex items-center justify-center mb-6 group-hover:from-rich-green/60 group-hover:to-light-emerald/40 transition-all duration-300 group-hover:shadow-md group-hover:shadow-light-emerald/30">
                  <Icon
                    size={28}
                    className="text-light-emerald group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-light-emerald transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-off-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>

                <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-rich-green to-light-emerald group-hover:w-12 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
