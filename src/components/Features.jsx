import { features } from "../../data/data";
import { useEffect } from "react";
import Animation from "../ui/Animation";
import AnimatedCounter from "../ui/AnimatedCounter";

const Features = () => {
  // Animate icons on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-icon-pop");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".feature-icon").forEach((icon) => {
      observer.observe(icon);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="bg-white py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F6F2] to-transparent z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#E2C7B7]/10 -mr-32 -mb-32" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C28F79] font-medium tracking-widest text-sm mb-4 block">
            CLINICALLY PROVEN
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            Science Meets <span className="italic font-light">Nature</span>
          </h2>
          <div className="w-20 h-px bg-[#C28F79] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, idx) => (
            <Animation
              key={idx}
              idxndex={idx}
              className="group relative pl-10 pr-6 py-6 hover:bg-[#F9F6F2]/50 rounded-2xl transition-all duration-300"
            >
              {/* Custom bullet point */}
              <div className="absolute left-0 top-8 w-6 h-px bg-[#C28F79] group-hover:w-12 transition-all duration-500" />

              <div className="flex items-start gap-6">
                <div className="feature-icon text-4xl text-[#C28F79] transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#7C4D39] mb-3 group-hover:text-[#B37A64] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#7C4D39]/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#E2C7B7]/50 rounded-2xl pointer-events-none transition-all duration-500" />
            </Animation>
          ))}
        </div>

        {/* Stats counter for credibility - optional */}
        <div className="mt-20 pt-12 border-t border-[#E2C7B7]/30">
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-sm text-[#7C4D39]/70 tracking-wider">
                CLINICAL EFFICACY
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-2">
                <AnimatedCounter end={12000} suffix="+" />
              </div>
              <p className="text-sm text-[#7C4D39]/70 tracking-wider">
                HAPPY CUSTOMERS
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-2">
                <AnimatedCounter end={72} suffix="H" />
              </div>
              <p className="text-sm text-[#7C4D39]/70 tracking-wider">
                VISIBLE RESULTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
