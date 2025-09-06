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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <AnimatedCounters />
      <Services />
      <Counters />
      <WhyUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </ div>
  );
}
