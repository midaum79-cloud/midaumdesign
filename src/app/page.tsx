import Hero from "@/components/Hero/Hero";
import Philosophy from "@/components/Philosophy/Philosophy";
import Portfolio from "@/components/Portfolio/Portfolio";
import Process from "@/components/Process/Process";
import Consultation from "@/components/Consultation/Consultation";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Portfolio />
      <Process />
      <Consultation />
    </main>
  );
}
