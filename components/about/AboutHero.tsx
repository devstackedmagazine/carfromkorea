"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-28 px-6 sm:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}} />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={variants.staggerContainer}
      >
        <motion.span
          variants={variants.fadeInUp}
          className="inline-block text-white/80 text-sm font-bold tracking-[0.2em] uppercase mb-6"
        >
          Rreth Nesh
        </motion.span>

        <motion.h1
          variants={variants.fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
        >
          Rreth CarFromKorea
        </motion.h1>

        <motion.p
          variants={variants.fadeInUp}
          className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
        >
          CarFromKorea është një kompani e specializuar në importimin e automjeteve premium nga Korea e Jugut.
          Me një rrjet të gjerë partnerësh dhe përvojë të viteve në treg, ne sjellim për ju makinat më
          të kërkuara me standardet më të larta të cilësisë dhe transparencës.
        </motion.p>
      </motion.div>
    </section>
  );
}
