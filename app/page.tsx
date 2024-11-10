import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { TravelExperience } from "@/components/TravelExperience";
import { Testimonials } from "@/components/Testimonials";
import { NewsLetter } from "@/components/NewsLetter";
import { Footer } from "@/components/Footer";

export default function ProfessionalTravelPortal() {
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Featured />
        <TravelExperience/>
        <Testimonials/>
        <NewsLetter/>
      </main>
      <Footer/>
    </div>
  );
}