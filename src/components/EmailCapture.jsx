import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="vip-access" className="relative bg-[#1F1F1F] text-white py-24 px-6 overflow-hidden">
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
      
      {/* Floating serum bottle silhouette */}
      <div className="absolute -right-20 -top-20 w-64 h-64 opacity-10">
        <div className="absolute inset-0 bg-[#C28F79] rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#C28F79] tracking-widest text-sm mb-4 block">
            EXCLUSIVE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            <span className="italic font-light">VIP</span> Serum Access
          </h2>
          <div className="w-16 h-px bg-[#C28F79] mx-auto my-6" />
          <p className="text-[#F9F6F2]/80 text-lg max-w-lg mx-auto">
            Join our inner circle for <span className="text-white">20% pre-launch discount</span>, 
            free shipping, and early access to limited batches.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-[#2A2A2A] border border-[#C28F79]/30 rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-serif text-[#C28F79] mb-2">Welcome Aboard</h3>
            <p className="text-[#F9F6F2]/90 mb-4">
              Your VIP confirmation is on its way to your inbox.
            </p>
            <p className="text-sm text-[#F9F6F2]/60">
              Check your spam folder if you don't see it within 5 minutes.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 shadow-2xl"
          >
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#F9F6F2]/70 mb-2 text-left">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl text-[#F9F6F2] placeholder-[#5A5A5A] focus:outline-none focus:ring-2 focus:ring-[#C28F79]/50 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all ${isSubmitting ? 'bg-[#C28F79]/80' : 'bg-[#C28F79] hover:bg-[#B37A64]'} text-white font-medium`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Reserve My Exclusive Spot
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-xs text-[#5A5A5A] mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-80">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C28F79]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C28F79]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Secure data</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C28F79]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-sm">Exclusive offers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;