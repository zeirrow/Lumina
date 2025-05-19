import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BrandStory from "../components/BrandStory";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import EmailCapture from "../components/EmailCapture";
import ProductShowcase from "../components/ProductShowcase";
import BeforeAfterGallery from "../components/BeforeAfterGallery";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Immediate hook */}
        <Hero />

        {/* 2. Brand Story - Establish credibility */}
        <BrandStory />

        {/* 3. Product Showcase - Core offering */}
        <ProductShowcase />

        {/* 4. Features - Detailed benefits */}
        <Features />

        {/* 5. How It Works - Reduce cognitive load */}
        <HowItWorks />

        {/* 6. Before/After - Social proof */}
        <BeforeAfterGallery />

        {/* 7. Testimonials - Third-party validation */}
        <Testimonials />

        {/* 8. Email Capture - First CTA point */}
        <EmailCapture />

        {/* 9. FAQ - Overcome objections */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
