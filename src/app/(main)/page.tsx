import HeroSection from "@/components/sections/hero-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import FeaturesSection from "@/components/sections/features-section";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import BookingSection from "@/components/sections/booking-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <CTASection />
    </>
  );
}
