"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function ContactHeader() {
  return (
    <section className="px-6 sm:px-12 lg:px-20 pt-16 pb-12 bg-background">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={variants.staggerContainer}
      >
        <motion.span
          variants={variants.fadeInUp}
          className="inline-block text-light-emerald text-sm font-bold tracking-[0.2em] uppercase mb-5"
        >
          Na Kontaktoni
        </motion.span>

        <motion.h1
          variants={variants.fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Na Kontaktoni
        </motion.h1>

        <motion.p
          variants={variants.fadeInUp}
          className="text-base sm:text-lg text-off-white/60 leading-relaxed max-w-2xl mx-auto"
        >
          Pavar&euml;sisht n&euml;se po pyesni p&euml;r nj&euml; automjet specifik n&euml; galerin&euml; ton&euml;,
          diskutoni opsionet e financimit t&euml; personalizuara, ose d&euml;shironi t&euml; organizoni nj&euml;
          shikim privat, ekipi yn&euml; i sh&euml;rbimit &euml;sht&euml; n&euml; dispozicionin tuaj.
        </motion.p>
      </motion.div>
    </section>
  );
}
