"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function AboutLegacy() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants.staggerContainer}
      >
        <motion.div variants={variants.fadeInLeft} className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Një Trashëgimi{" "}
            <span className="text-light-emerald">Performanca</span>
          </h2>

          <div className="space-y-5 text-off-white/70 leading-relaxed text-base sm:text-lg">
            <p>
              Rrënjët tona shtrihen thellë në kulturën automobilistike të Koresë së Jugut,
              një vend i njohur për inxhinierinë precize dhe përkushtimin ndaj cilësisë.
              Prej vitit 1984, CarFromKorea ka ndërtuar ura besimi midis tregut korean
              dhe blerësve evropianë që kërkojnë përsosmëri.
            </p>
            <p>
              Çdo automjet që zgjedhim përfaqëson kulmin e artit inxhinierik – nga
              makinat sportive ikonike deri te limuzinat luksoze. Ne besojmë se një
              makinë nuk është thjesht një mjet transporti, por një shprehje e
              personalitetit dhe stilit të jetesës.
            </p>
            <p>
              Me seli në Prishtinë dhe partnerë në Seul, ne ofrojmë një përvojë
              të plotë importimi – nga përzgjedhja deri te dorëzimi derë më derë –
              duke siguruar që çdo detaj të jetë në nivelin më të lartë.
            </p>
          </div>

          <div className="mt-8 h-1 w-20 bg-gradient-to-r from-light-emerald to-rich-green rounded-full" />
        </motion.div>

        <motion.div
          variants={variants.fadeInRight}
          className="flex-1 w-full"
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rich-green/20 via-deep-dark-blue/40 to-background" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-light-emerald/40 mx-auto mb-4"
                >
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <p className="text-off-white/40 text-sm font-medium tracking-wide">
                  Imazhi i Automjetit
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
