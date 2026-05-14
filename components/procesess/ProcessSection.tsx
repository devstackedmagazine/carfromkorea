"use client";

import { StaticImageData } from "next/image";
import ProcessStep from "./ProcessStep";
import step1Image from "@/public/images/step1Image.png";
import step2Image from "@/public/images/step2Image.png";
import step3Image from "@/public/images/step3Image.png";

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
  title: "Car Selection",
  description:
    "The first step is choosing the ideal car according to your wishes and needs.",
  imageAlt: "Car Selection",
  imageUrl: step1Image,
},
{
  number: 2,
  title: "Professional Inspection",
  description:
    "The inspection is carried out by our professional team. The vehicle is checked in detail to ensure the highest quality.",
  imageAlt: "Professional Inspection",
  imageUrl: step2Image,
},
{
  number: 3,
  title: "Purchase and Payment",
  description:
    "After the inspection is completed and if the client is satisfied with the condition of the vehicle, the vehicle is purchased. Full payment is made to the company's official account. Korea Auto Imports Prishtina is a company registered in Kosovo. All payments are made to our account at Raiffeisen Bank.",
  imageAlt: "Purchase & Payment",
  imageUrl: step3Image,
},
];

export default function ProcessSection() {
  return (
    <section className="bg-dark-gray py-20 px-8 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our 5-Step Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We make importing your dream car from Korea easy and hassle-free.
            Here’s how it works:
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
