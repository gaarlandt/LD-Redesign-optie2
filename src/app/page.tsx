import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { AppShowcaseSection } from "@/components/sections/app-showcase";
import { PuppyAcademySection } from "@/components/sections/puppy-academy";
import { TrainerProfileSection } from "@/components/sections/trainer-profile";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppShowcaseSection />
        <PuppyAcademySection />
        <TrainerProfileSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
