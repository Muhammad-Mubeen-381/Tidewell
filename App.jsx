import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import AdditionalSection from './components/AdditionalSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-[3px] focus:ring-focus"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <FeatureSection />
        <AdditionalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
