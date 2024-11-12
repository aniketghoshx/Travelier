import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { TravelExperience } from "@/components/TravelExperience";
import { Testimonials } from "@/components/Testimonials";
import { NewsLetter } from "@/components/NewsLetter";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Footer } from "@/components/Footer";

export default async function ProfessionalTravelPortal() {
  const session = await getServerSession(authOptions)
  if (session?.user.role == "ADMIN") {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Featured />
        <TravelExperience />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}