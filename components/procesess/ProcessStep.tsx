import Image, { StaticImageData } from "next/image";

interface ProcessStepProps {
  step: {
    number: number;
    title: string;
    description: string;
    imageUrl?: string | StaticImageData;
    imageAlt: string;
  };
  isEven: boolean;
}

export default function ProcessStep({ step, isEven }: ProcessStepProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="flex-1">
        <div className=" p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0"></div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Hapi {step.number}: {step.title}
          </h3>

          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            {step.description}
          </p>

          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-rich-green to-bright-emerald rounded-full" />
        </div>
      </div>

      <div className="flex-1">
        <div className="relative w-full h-70 aspect-square rounded-lg overflow-hidden bg-black/40 border border-rich-green/30">
          {step.imageUrl ? (
            <Image
              src={step.imageUrl}
              alt={step.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 20vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rich-green/10 to-bright-emerald/10">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-gray-400 text-sm">
                  Image placeholder for Step {step.number}
                </p>
                <p className="text-gray-500 text-xs mt-2">{step.imageAlt}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
