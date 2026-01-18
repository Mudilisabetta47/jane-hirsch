import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onScrollToRegistration={scrollToRegistration} />
      <HeroSection onScrollToRegistration={scrollToRegistration} />
      <ScheduleSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
