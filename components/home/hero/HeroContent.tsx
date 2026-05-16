import React from 'react';
import Link from 'next/link';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';
import { variants } from '@/lib/motion-presets';

export default function HeroContent() {
  return (
    <motion.div 
      className="flex flex-col gap-6 pt-10 pb-20 relative z-20"
      initial="hidden"
      animate="visible"
      variants={variants.staggerContainer}
    >
      <motion.div variants={variants.fadeInUp} className="flex items-center gap-3">
        <span className="text-[#86e2b4] text-sm font-bold tracking-[0.2em] uppercase">
          THEMELUAR MË 1984
        </span>
      </motion.div>

      <motion.h1 variants={variants.fadeInUp} className="w-full text-5xl lg:text-[4.5rem] font-bold leading-[1.1] text-white tracking-wide">
        Gjeni Makinën Tuaj Ideale
      </motion.h1>

      <motion.p variants={variants.fadeInUp} className="text-lg leading-relaxed text-white/80 max-w-lg mt-2 font-light">
        Kuruar kryeveprat më të jashtëzakonshme të automobilave në botë. Përjetoni saktësinë e pashembullt, trashëgiminë dhe të ardhmen e lëvizshmërisë luksoze për koleksionistin e hollë.
      </motion.p>

      <motion.div variants={variants.fadeInUp} className="flex flex-col sm:flex-row gap-5 mt-6">
        <Link href="/inventory" className="w-fit">
          <Button variant="luxe" className="px-8 py-6 uppercase tracking-wider text-xs">
            Shiko Sallonin
          </Button>
        </Link>
        <Link href="/contact" className="w-fit">
          <Button variant="outline" className="px-8 py-6 uppercase tracking-wider text-xs border-white text-white hover:bg-white text-black">
            Rezervoni një Konsultim
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
