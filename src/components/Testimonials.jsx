import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  // Scroll to active card
  const scrollToCard = (index) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  // Auto-rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToCard(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sync scroll position to currentIndex
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollPos = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollPos / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonials" className="relative bg-[#F9F6F2] py-28 px-6 overflow-hidden">
      {/* Decorative stuff skipped for brevity */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-[#7C4D39] mb-4 leading-tight">
            <span className="italic font-light">Voices</span> of Radiance
          </h2>
          <p className="text-[#7C4D39]/80 max-w-lg mx-auto">
            Real results from our community of skincare enthusiasts
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Arrows */}
          <button
            onClick={() => {
              const next = (currentIndex - 1 + testimonials.length) % testimonials.length;
              setCurrentIndex(next);
              scrollToCard(next);
            }}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg text-[#7C4D39] hover:text-[#C28F79] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              const next = (currentIndex + 1) % testimonials.length;
              setCurrentIndex(next);
              scrollToCard(next);
            }}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg text-[#7C4D39] hover:text-[#C28F79] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Cards */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mx-4 px-4 hide-scrollbar"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`flex-none w-full md:w-1/2 lg:w-1/3 px-4 snap-center transition-opacity duration-500 ${
                  idx === currentIndex ? "opacity-100" : "opacity-60"
                }`}
              >
                <div
                  className={`bg-white rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                    idx === currentIndex ? "shadow-xl" : "shadow-md"
                  }`}
                >
                  <div className="flex mb-4 text-[#C28F79]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <p className="text-[#7C4D39] italic text-lg mb-6 flex-grow">“{t.quote}”</p>
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#C28F79]/30"
                      />
                      {t.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-[#C28F79] text-white p-1 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#7C4D39]">{t.name}</h4>
                      <p className="text-sm text-[#7C4D39]/70">{t.role}</p>
                      {t.beforeAfter && (
                        <div className="flex items-center mt-1 text-xs">
                          <span className="text-[#7C4D39]/60 mr-2">
                            Results after {t.beforeAfter.time}:
                          </span>
                          <span className="bg-[#F9F6F2] px-2 py-0.5 rounded-full text-[#7C4D39]">
                            {t.beforeAfter.improvement}% improvement
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToCard(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-[#C28F79] w-4" : "bg-[#C28F79]/30"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
