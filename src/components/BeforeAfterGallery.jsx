import { useState } from "react";
import { beforeAfterResults } from "../../data/data";

const BeforeAfterGallery = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState(0);

  const handleMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section className="bg-[#F9F6F2] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C28F79] tracking-widest text-sm mb-4 block">
            VISIBLE RESULTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            Real <span className="italic font-light">Transformations</span>
          </h2>
          <p className="text-[#7C4D39]/80 max-w-lg mx-auto">
            Clinical study participants after 28 days of consistent use
          </p>
        </div>

        {/* Results tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {beforeAfterResults.map((result, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === idx
                  ? "bg-[#7C4D39] text-white"
                  : "bg-white text-[#7C4D39] hover:bg-[#7C4D39]/10"
              }`}
            >
              {result.label}
            </button>
          ))}
        </div>

        {/* Comparison slider */}
<div
  className="relative h-96 w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl cursor-ew-resize"
  onMouseDown={(e) => {
    e.preventDefault();
    handleMove(e);
    const handleMouseMove = (e) => handleMove(e);
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }}
  onTouchStart={(e) => {
    handleMove(e.touches[0]);
    const handleTouchMove = (e) => handleMove(e.touches[0]);
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  }}
>
  {/* Before image (background) */}
  <img
    src={beforeAfterResults[activeTab].before}
    alt="Before"
    className="absolute inset-0 object-cover w-full h-full"
  />

  {/* After image (foreground, clipped) */}
  <div
    className="absolute inset-0 overflow-hidden"
    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
  >
    <img
      src={beforeAfterResults[activeTab].after}
      alt="After"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Slider control */}
  <div
    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
    style={{ left: `${sliderPosition}%` }}
  >
    <div className="absolute -left-3 -top-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#7C4D39]"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414zm6 0a1 1 0 000-1.414L11.414 11H3a1 1 0 110-2h8.414l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  {/* Labels */}
  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm text-[#7C4D39]">
    Before
  </div>
  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm text-[#7C4D39]">
    After 28 days
  </div>
</div>


        {/* Disclaimer */}
        <p className="text-center text-xs text-[#7C4D39]/60 mt-8 max-w-2xl mx-auto">
          *Individual results may vary. Clinical study of 112 participants
          showed 89% reported visibly improved skin texture and firmness.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
