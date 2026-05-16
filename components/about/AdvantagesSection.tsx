"use client";

import { Search, Eye, Settings, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";
import type { AdvantageCard } from "./types";

const advantages: AdvantageCard[] = [
  {
    icon: Search,
    title: "Burime Eksperte",
    description:
      "Rrjeti ynë i gjerë në Korenë e Jugut na mundëson të gjejmë automjetet më të rralla dhe më të kërkuara në treg.",
  },
  {
    icon: Eye,
    title: "Çmime Transparente",
    description:
      "Asnjë surprizë. Ju shihni çmimin e plotë që në fillim, pa tarifa të fshehura ose kosto shtesë të papritura.",
  },
  {
    icon: Settings,
    title: "Përgatitje e Përsosur",
    description:
      "Çdo automjet servisohet, pastrohet dhe përgatitet me standardet më të larta përpara dorëzimit.",
  },
  {
    icon: Lock,
    title: "Transaksione të Sigurta",
    description:
      "Pagesat bëhen përmes llogarive bankare zyrtare me siguri të plotë. Ne jemi një kompani e regjistruar në Kosovë.",
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

export default function AdvantagesSection() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants.staggerContainer}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            variants={variants.fadeInLeft}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Avantazhi CarFromKorea
            </h2>
            <p className="text-off-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
              Blerja e një automjeti të rëndësishëm kërkon një partner me njohuri të
              thella të tregut dhe integritet të palëkundur. Ne jemi ai partner.
            </p>
            <div className="mt-8 h-1 w-20 bg-gradient-to-r from-light-emerald to-rich-green rounded-full hidden lg:block" />
          </motion.div>

          <motion.div
            variants={variants.fadeInRight}
            className="flex-[2]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <motion.div
                    key={advantage.title}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group bg-background border border-rich-green/20 rounded-lg p-6 hover:border-light-emerald/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rich-green/20 flex items-center justify-center mb-4 group-hover:bg-rich-green/30 transition-colors duration-300">
                      <Icon size={20} className="text-light-emerald" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {advantage.title}
                    </h3>

                    <p className="text-off-white/50 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
