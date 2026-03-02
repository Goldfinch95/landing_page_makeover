import { Navbar } from "@/app/Navbar/components/Navbar";
import { HeroSection } from "@/app/Hero/components/Hero_section";
import { Footer } from "@/app/footer/components/footer_section";
import { BeneficiosSection } from "./beneficts/components/benefits_section";
import { ServiceSection } from "./our_service/components/Service_section";
import { TratamientosSection } from "./treatment/components/treatment_section";
import { ProductosSection } from "./products/components/Products_section";
import { AnuncioBar } from "./advertisement/components/advertisement_section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BeneficiosSection />
      <ServiceSection />
      <TratamientosSection />
      <ProductosSection />
      <AnuncioBar />
      <Footer />
     
    </main>
  );
}
