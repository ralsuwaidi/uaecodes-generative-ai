"use client";

import AIProcessingList from "@/components/AIProcessingList";
import { useState, useEffect } from "react";
import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import SlashImagine from "@/components/SlashImagine";
import ImagineImage from "@/components/ImagineImage";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <PrimaryFeatures />
//       <SecondaryFeatures />
//       <CallToAction />
//       <Reviews />
//       <Pricing />
//       <Faqs />
//     </>
//   )
// }

export default function Home() {
  const [showSlashImagine, setShowSlashImagine] = useState(false);
  const [styleNumber, setStyleNumber] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSlashImagine(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (styleNumber !== 0) {
    return <ImagineImage styleNumber={styleNumber} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showSlashImagine ? (
        <SlashImagine setStyleNumber={setStyleNumber} />
      ) : (
        <AIProcessingList />
      )}
    </div>
  );
}
