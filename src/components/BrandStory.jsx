import { FaLeaf } from "react-icons/fa";
import { FiAward, FiDroplet } from "react-icons/fi";
import Animation from "../ui/Animation";

const BrandStory = () => {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F6F2] to-transparent" />

      <div className="max-w-7xl mx-auto py-24 px-6">
        {/* Section header */}
        <Animation idxndex={0} className="text-center mb-20">
          <span className="text-[#C28F79] tracking-widest text-sm mb-4 block">
            BEYOND SKINCARE
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            The <span className="italic font-light">Lumina</span> Philosophy
          </h2>
          <div className="w-20 h-px bg-[#C28F79] mx-auto" />
        </Animation>

        {/* Story blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <Animation idxndex={1} className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3 bg-[#F9F6F2] rounded-3xl overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className=" flex items-center justify-center text-[#7C4D39]/30">
                <img
                  src="/images/Jennifer_pic.png"
                  alt="Brand Story"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Animation>
          <Animation idxndex={2} className="order-2 lg:order-1 lg:pr-12">
            <h3 className="text-2xl font-serif text-[#7C4D39] mb-6">
              Born from a dermatologist's vision
            </h3>
            <p className="text-[#7C4D39]/90 mb-6 leading-relaxed">
              After 15 years in clinical practice, Dr. Jeniffer created Lumina
              to bridge the gap between medical-grade results and clean,
              sustainable ingredients. Our formulations deliver transformative
              results without compromising your skin's health.
            </p>
            <div className="flex items-center gap-2 text-[#C28F79]">
              <FiDroplet className="animate-pulse" />
              <span className="text-sm tracking-wider">NO HARSH CHEMICALS</span>
            </div>
          </Animation>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLeaf className="text-3xl mb-4 text-[#C28F79]" />,
              title: "Plant-Powered",
              text: "92-100% natural origin ingredients sourced sustainably",
            },
            {
              icon: <FiAward className="text-3xl mb-4 text-[#C28F79]" />,
              title: "Clinically Validated",
              text: "Proven efficacy in independent laboratory testing",
            },
            {
              icon: <FiDroplet className="text-3xl mb-4 text-[#C28F79]" />,
              title: "Clean Chemistry",
              text: "Free from 1,500+ questionable ingredients",
            },
          ].map((item, idx) => (
            <Animation
              idxndex={idx + 3}
              key={idx}
              className="bg-[#F9F6F2]/50 p-8 rounded-2xl hover:bg-[#F9F6F2] transition-all duration-500"
            >
              {item.icon}
              <h4 className="text-xl font-serif text-[#7C4D39] mb-3">
                {item.title}
              </h4>
              <p className="text-[#7C4D39]/80">{item.text}</p>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
