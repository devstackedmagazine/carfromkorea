"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function CTASection() {
  return (
    <section className="py-20 px-8 sm:px-12 lg:px-20 bg-[#111415] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative rounded-2xl p-12 lg:p-16 overflow-hidden bg-muted-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants.fadeInUp}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-40 bg-light-emerald" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-soft-blue">
              Gati për të Filluar?
            </h2>
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-soft-blue">
              Planifikoni një konsultim privat ose shfletoni inventarin tonë për të
              filluar përvojën tuaj me CarFromKorea.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/cars" className="block w-full sm:w-auto">
                <Button
                  className="hover:shadow-lg hover:scale-105 active:scale-95 bg-light-emerald text-charcoal-gray"
                  variant="luxe"
                >
                  Shiko Inventarin
                </Button>
              </Link>

              <Link href="/FAQ" className="block w-full sm:w-auto">
                <Button
                  className="border-soft-blue text-soft-blue hover:shadow-lg hover:scale-105 hover:bg-soft-blue/30 hover:text-white"
                  variant="outline"
                >
                  Përgjigjet e FAQ
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
