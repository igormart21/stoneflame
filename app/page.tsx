"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProductCategories from "@/components/sections/ProductCategories";
import StorytellingSection from "@/components/sections/StorytellingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductCatalog from "@/components/sections/ProductCatalog";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import QuizSection from "@/components/sections/QuizSection";
import SocialProof from "@/components/sections/SocialProof";
import Footer from "@/components/Footer";
import {
  LoadingScreen,
  WhatsAppButton,
} from "@/components/ClientOnlyComponents";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <HeroSection />
        <ProductCategories 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <ProductCatalog 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <StorytellingSection />
        <FeaturesSection />
        <ProcessTimeline />
        
        {/* Middle volcanic banner above Quiz */}
        <section className="w-full relative bg-bg border-t border-b border-stone-border/20">
          {/* Desktop Banner */}
          <div className="hidden md:block w-full relative aspect-[1536/1024]">
            <Image
              src="/banner-quiz.png"
              alt="STONEFLAME Artisanal Kitchen Banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Mobile Banner */}
          <div className="block md:hidden w-full relative aspect-[863/1823]">
            <Image
              src="/banner-quiz-mobile.png"
              alt="STONEFLAME Artisanal Kitchen Banner Mobile"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        <QuizSection />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
