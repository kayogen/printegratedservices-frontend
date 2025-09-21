import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import GoogleMap from "../components/GoogleMap";
import ServicesSection from "../components/Service";
import TestimonialsSection from "../components/testimonials";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GoogleMap />
      <ContactSection />
    </>
  );
}
