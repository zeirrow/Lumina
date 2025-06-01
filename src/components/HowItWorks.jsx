import Modal from "../ui/Modal";
import GuideVideo from "./GuideVideo";
import { FaCirclePlay } from "react-icons/fa6";
import { steps } from "../../data/data";
import Animation from "../ui/Animation";

const HowItWorks = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            Simple <span className="italic font-light">Routine</span>
          </h2>
          <p className="text-[#7C4D39]/80 max-w-lg mx-auto">
            Achieve radiant skin in just 3 steps with our clinically-backed
            protocol
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-8 left-1/2 h-1 w-2/3 bg-[#F9F6F2] transform -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <Animation key={i} index={i} className="text-center">
                <div className="relative mb-6">
                  {/* Step circle */}
                  <div className="w-16 h-16 rounded-full bg-[#F9F6F2] border-2 border-[#C28F79] flex items-center justify-center mx-auto text-2xl font-serif text-[#7C4D39]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[#7C4D39] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#7C4D39]/80">{step.description}</p>
              </Animation>
            ))}
          </div>
        </div>

        {/* Video CTA */}
        <div className="mt-24 text-center">
          <Modal>
            <Modal.Open opensWindowName="example">
              <button className="group relative flex items-center justify-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 mx-auto text-[#C28F79] hover:text-[#7C4D39] font-semibold bg-white/5 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
  <FaCirclePlay className="h-5 w-5 md:h-7 md:w-7 border-2 border-white rounded-full ring-2 ring-[#C28F79] ring-offset-2 ring-offset-black shadow-sm group-hover:scale-110 transition-transform duration-200" />
  <span className="text-sm sm:text-base underline underline-offset-4">
    Watch our 2-minute routine guide
  </span>
</button>

            </Modal.Open>

            <Modal.Window name="example">
              <GuideVideo />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
