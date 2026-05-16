import React from 'react';
import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden">
      <Image
        src="/styles/hero-bg-layer.png"
        alt="Luxury car background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right lg:object-center opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 "></div>
    </div>
  );
}
