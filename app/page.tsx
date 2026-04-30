import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  )
}
