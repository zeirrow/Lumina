import { BsArrowDown } from "react-icons/bs";
import Animation from "../ui/Animation";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#F9F6F2] min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="hero-content py-20">
        <Animation idxndex={0}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-[#7C4D39] pt-30 mb-4 leading-tight tracking-tight">
            Reveal <span className="italic font-light">Radiance</span> Naturally
          </h1>
        </Animation>

        <Animation idxndex={1}>
          <p className="text-lg md:text-xl text-[#7C4D39] max-w-xl mx-auto mb-8 font-light tracking-wide">
            New <span className="font-medium">Anti-Aging Serum</span> by Lumina.
            <br />
            Plant-powered, clinically proven, and pre-order ready.
          </p>
        </Animation>

        <Animation idxndex={2}>
          <button
            onClick={() => scrollToSection("vip-access")}
            className="bg-[#C28F79] hover:bg-[#B37A64] text-white px-8 py-3 rounded-full text-sm md:text-base shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join the VIP Waitlist
          </button>
        </Animation>

        {/* Product mockup with soft shadow and floating animation */}
        <Animation idxndex={3}>
          <div className="mt-16 w-full max-w-md mx-auto relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E2C7B7]/30 blur-lg rounded-3xl" />
              <div className="aspect-square bg-gradient-to-br from-[#F9F6F2] to-[#E2C7B7] rounded-2xl shadow-inner relative  overflow-hidden animate-float">
                {/* Replace with actual product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#7C4D39]/50 text-sm">
                    <img
                      src="/images/Lumina.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
        <button
          onClick={() => scrollToSection("features")}
          className="text-[#7C4D39]/60 hover:text-[#7C4D39] transition-colors"
          aria-label="Scroll down"
        >
          <BsArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
