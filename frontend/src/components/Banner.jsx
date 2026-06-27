import React from 'react'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[#114232] px-6 lg:px-20 pt-16 pb-10 text-center">
      <div className="max-w-[1440px] mx-auto">

        <p className="text-white/70 text-sm font-semibold uppercase mb-4">
          Get Started
        </p>

        <h2 className="text-4xl lg:text-[52px] leading-[1.1] font-serif text-white">
          Ready to have{" "}
          <span className="text-[#EA7317]">delicious food</span>
          <br />
          cooked at home?
        </h2>

        <p className="text-white/70 mt-5 max-w-xl mx-auto leading-7">
          Join 12,000+ families who eat better every day with CookHire.
          We'll connect you with a trusted, skilled cook fast.
        </p>

        <Link
          to="/customer-inquiry"
          className="mt-8 inline-block bg-[#EA7317] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
        >
          Hire a Cook Now
        </Link>

      </div>
    </section>
  );
};

export default Banner;