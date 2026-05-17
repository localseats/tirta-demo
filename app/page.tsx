import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import TreatmentSection from "@/components/TreatmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReservationSection from "@/components/ReservationSection";
import AccessSection from "@/components/AccessSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <TreatmentSection />
      <TestimonialsSection />
      <ReservationSection />
      <AccessSection />
      <FooterSection />
    </>
  );
}
