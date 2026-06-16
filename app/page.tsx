"use client";

import { useState } from "react";
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

        <QuizSection />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
