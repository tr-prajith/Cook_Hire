import React from "react";
import {
  LuBadgeCheck,
  LuUsers,
  LuClock,
  LuShieldCheck,
  LuHourglass,
  LuRefreshCcw,
} from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="bg-[#F9F8F3] px-6 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[#EA7317] text-sm font-semibold uppercase mb-3">
          Why CookHire
        </p>

        <h2 className="text-4xl lg:text-[58px] leading-[1.1] text-[#114232] font-serif mb-12">
          Cooking You Can Trust,
          <br />
          Every Single Day
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuBadgeCheck className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Police Verified Cooks
            </h3>
            <p className="text-gray-600 leading-7">
              Every cook on our platform goes through background checks,
              document verification, and a cooking trial before listing.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuUsers className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Rated & Reviewed
            </h3>
            <p className="text-gray-600 leading-7">
              Real reviews from real households. See ratings, photos, and
              detailed feedback before you hire.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuClock className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 leading-7">
              Daily, weekly, or one-time. Morning tiffin, lunch, dinner, or
              full-day event catering — your choice.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuShieldCheck className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600 leading-7">
              Pay only after the cook confirms. Full refund if they don't show.
              Zero hidden charges.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuHourglass className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600 leading-7">
              Real humans available round the clock to resolve any issue
              quickly. Not bots, not forms.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#114232]/10 rounded-xl flex items-center justify-center mb-8">
              <LuRefreshCcw className="text-[#114232] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Free Replacement
            </h3>
            <p className="text-gray-600 leading-7">
              Cook unavailable last minute? We send a replacement within 2 hours
              at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;