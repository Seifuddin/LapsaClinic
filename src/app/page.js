import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import Counters from "@/components/Counters";
import Services from "@/components/Sevices";
import AnimatedCounters from "@/components/Animated";
import ContactUs from "@/components/Contacts";
import Footer from "@/components/Footer";
import WhyUs from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Clinics from "@/components/Clinic";
import TrustLogos from "@/components/Trusted";
import InsuranceCoverage from "@/components/Insurance";
import PatientJourney from "@/components/Steps";
import EmergencyCall from "@/components/Emergency";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PatientJourney />
      <TrustLogos />
      <About />
      <AnimatedCounters />
      <Services />
      <EmergencyCall />
      <Clinics />
      <Counters />
      <WhyUs />
      <InsuranceCoverage />
      <Testimonials />
      <ContactUs />
      <Footer />
    </ div>
  );
}
