import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { VideoReelSection } from "@/components/video-reel-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <VideoReelSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
