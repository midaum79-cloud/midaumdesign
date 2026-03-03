import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import Consultation from "@/components/Consultation/Consultation";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Process />
      <Consultation />
      <Footer />
    </main>
  );
}
