import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import Counters from "@/components/Counters";
import Services from "@/components/Sevices";
import AnimatedCounters from "@/components/Animated";
import ContactUs from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <AnimatedCounters />
      <Services />
      <Counters />
      <ContactUs />
      <Footer />
    </ div>
  );
}
