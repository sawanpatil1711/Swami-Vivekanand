import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PrincipalSection from "../components/home/PrincipalSection";
import AdmissionCTA from "../components/home/AdmissionCTA";
import ContactCTA from "../components/home/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <PrincipalSection />
      <AdmissionCTA />
      <ContactCTA />
    </>
  );
};

export default Home;