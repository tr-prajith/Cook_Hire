import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="px-6 lg:px-20 pt-14 pb-24 bg-[#F9F8F3]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>
          <p className="inline-flex items-center bg-[#114232]/10 text-[#114232] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            ✦ Trusted by 12,000+ households
          </p>

          <h1 className="text-[64px] leading-[76px] font-serif text-black">
            Hire a <span className="text-[#EA7317]">Professional</span>
            <br />
            <span className="text-[#EA7317]">Cook</span> for Your
            <br />
            Home
          </h1>

          <p className="text-black text-[15px] max-w-[460px] leading-6 mt-6">
            From daily tiffin to grand celebrations find vetted, skilled
            cooks who bring authentic flavours right to your kitchen.
          </p>

          <div className="flex items-center gap-5 mt-6">
            <a href="#cooks"
              className="bg-[#EA7317] text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              Find Cooks
            </a>

            <a
              href="#how"
              className="border border-[#114232] text-[#114232] px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#114232] hover:text-white hover:scale-105"
            >
              Watch how it works
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              <img src="/images/user1.png" className="w-9 h-9 rounded-full border border-white object-cover" />
              <img src="/images/user2.png" className="w-9 h-9 rounded-full border border-white object-cover" />
              <img src="/images/user3.png" className="w-9 h-9 rounded-full border border-white object-cover" />
            </div>

            <p className="text-sm text-black">
              200+ verified cooks across Tamil Nadu
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full flex justify-end">
          <div className="relative w-[425px] h-[500px] rounded-[24px] overflow-hidden">
            <img src="/images/hero-chef.png" alt="Professional cook" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#073326] via-transparent to-transparent" />

            <div className="absolute bottom-7 left-0 right-0 text-center text-white">
              <h4 className="font-serif text-2xl">
                Home Cooks & Event Chefs
              </h4>
              <p className="text-sm mt-2">
                Experienced, background-verified professionals
              </p>
            </div>
          </div>

          {/* Professional badge */}
          <div className="absolute top-[-10px] left-[10px] bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#FEFEFC]">
            <span>🧑🏻‍🍳</span>
            <span className="text-sm text-black">
                Professional cook in kitchen
            </span>
          </div>

          {/* Verified badge */}
          <div className="absolute top-[165px] right-[-55px] bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#FEFEFC]">
            <span className="text-green-600">✅</span>
            <span className="text-sm text-black">
              Verified & Trusted
            </span>
          </div>

          {/* Quick badge */}
          <div className="absolute bottom-[-20px] left-[40px] bg-white shadow-lg rounded-full px-5 py-3 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#FEFEFC]">
            <span className="text-[#EA7317]">⚡</span>
            <span className="text-sm text-black">
              Quick Matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;