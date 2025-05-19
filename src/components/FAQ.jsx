import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqs } from "../../data/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            Your <span className="italic font-light">Questions</span>
          </h2>
          <p className="text-[#7C4D39]/80">
            Everything you need to know about our formulations
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#a07d50] pb-4 ">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left py-4 hover:text-[#C28F79] transition-colors"
              >
                <h3 className="text-lg font-medium text-[#7C4D39]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiMinus className="text-[#C28F79] ml-4" />
                ) : (
                  <FiPlus className="text-[#C28F79] ml-4" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-[#7C4D39]/90 pb-4 pl-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <p className="text-[#7C4D39]/80 mb-6">Still have questions?</p>
          <button className="border border-[#7C4D39] text-[#7C4D39] hover:bg-[#7C4D39] hover:text-white px-6 py-3 rounded-full transition-all duration-300">
            Contact Our Skin Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
