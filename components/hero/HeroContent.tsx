import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
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
          ESTABLISHED 1984
        </span>
      </motion.div>

      <motion.h1 variants={variants.fadeInUp} className="w-full text-5xl lg:text-[4.5rem] font-bold leading-[1.1] text-white tracking-wide">
        Find Your Perfect Drive
      </motion.h1>

      <motion.p variants={variants.fadeInUp} className="text-lg leading-relaxed text-white/80 max-w-lg mt-2 font-light">
        Curating the world's most exceptional automotive masterpieces. 
        Experience unparalleled precision, heritage, and the future of 
        luxury mobility for the discerning collector.
      </motion.p>

      <motion.div variants={variants.fadeInUp} className="flex flex-col sm:flex-row gap-5 mt-6">
        <Link href="/inventory" className="w-fit">
          <Button variant="luxe" className="px-8 py-6 uppercase tracking-wider text-xs">
            View Showroom
          </Button>
        </Link>
        <Link href="/contact" className="w-fit">
          <Button variant="outline" className="px-8 py-6 uppercase tracking-wider text-xs border-white text-white hover:bg-white text-black">
            Book a Consultation
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
