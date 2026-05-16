"use client";

import { StaticImageData } from "next/image";
import ProcessStep from "./ProcessStep";
import step1Image from "@/public/images/step1Image.png";
import step2Image from "@/public/images/step2Image.png";
import step3Image from "@/public/images/step3Image.png";
import step4Image from "@/public/images/step4Image.png";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

interface ProcessStepData {
  number: number;
  title: string;
  description: string;
  imageUrl?: StaticImageData;
  imageAlt: string;
}

const processSteps: ProcessStepData[] = [
  {
    number: 1,
    title: "Zgjedhja e Makinës",
    description:
      "Hapi i parë është zgjedhja e makinës ideale sipas dëshirave dhe nevojave tuaja.",
    imageAlt: "Zgjedhja e Makinës",
    imageUrl: step4Image,
  },
  {
    number: 2,
    title: "Inspektimi Profesional",
    description:
      "Inspektimi kryhet nga ekipi ynë profesional. Automjeti kontrollohet në detaje për të siguruar cilësinë më të lartë.",
    imageAlt: "Inspektimi Profesional",
    imageUrl: step1Image,
  },
  {
    number: 3,
    title: "Blerja dhe Pagesa",
    description:
      "Pas përfundimit të inspektimit dhe nëse klienti është i kënaqur me gjendjen e automjetit, automjeti blihet. Pagesa e plotë bëhet në llogarinë zyrtare të kompanisë. Korea Auto Imports Prishtina është një kompani e regjistruar në Kosovë. Të gjitha pagesat bëhen në llogarinë tonë në Bankë.",
    imageAlt: "Blerja dhe Pagesa",
    imageUrl: step3Image,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-dark-gray py-20 px-8 sm:px-12 lg:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants.staggerContainer}
      >
        <motion.div variants={variants.fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Procesi Ynë në 3 Hapa
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ne e bëjmë importimin e makinës suaj të ëndrrave nga Korea të lehtë
            dhe pa stres. Ja si funksionon:
          </p>
        </motion.div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={
                index % 2 === 0 ? variants.fadeInLeft : variants.fadeInRight
              }
            >
              <ProcessStep step={step} isEven={index % 2 === 0} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
