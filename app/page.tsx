import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
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
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <HeroSection />
        <StorytellingSection />
        <FeaturesSection />
        <ProductCatalog />
        <ProcessTimeline />
        <QuizSection />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
