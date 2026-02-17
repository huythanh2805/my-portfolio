import AboutSection from '@/sections/AboutSection'
import ClientTestimonial from '@/sections/ClientTestimonial'
import ContactSection from '@/sections/ContactSection'
// import ExperienceSection from '@/sections/ExperienceSection'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import HeroSection from '@/sections/HeroSection'
import ProductsSection from '@/sections/ProductsSection'
import TapeSection from '@/sections/TapeSection'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <ExperienceSection /> */}
      <ProductsSection />
      <TapeSection />
      <ClientTestimonial />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
