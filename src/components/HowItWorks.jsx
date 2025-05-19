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
              <button className="flex items-center justify-center  text-2xl gap-2 sm:gap-4 mx-auto text-[#C28F79] hover:text-[#7C4D39] underline underline-offset-4 transition-colors">
                <FaCirclePlay className="h-5 w-5 md:h-10 md:w-10" />
                Watch our 2-minute routine guide
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
