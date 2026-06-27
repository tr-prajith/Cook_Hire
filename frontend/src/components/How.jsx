import React from "react";
import { Link } from "react-router-dom";
import {LuChevronsRight} from "react-icons/lu";

const How = () => {
  return (
    <section id="how" className="bg-[#ECE9E2] px-6 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[#EA7317] text-sm font-semibold uppercase mb-3">
          The Process
        </p>

        <h2 className="text-4xl lg:text-[58px] leading-[1.1] text-[#114232] font-serif mb-4">
          How It Works
        </h2>

        <p className="text-gray-700 max-w-sm mb-16">
          Three simple steps to get a trusted cook at your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative">
          {/* Connector lines */}
          <div className="hidden md:block absolute top-[32px] left-[18%] right-[18%] pointer-events-none z-0">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[repeating-linear-gradient(to_right,#8DA59B_0_12px,transparent_12px_24px)]"></div>

            <LuChevronsRight
              className="absolute left-[33.33%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#6E8D80] bg-[#ECE9E2]"
              size={22}
            />

            <LuChevronsRight
              className="absolute left-[66.66%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#6E8D80] bg-[#ECE9E2]"
              size={22}
            />
          </div>

          <div>
            <div className="relative z-10 w-16 h-16 bg-[#114232] rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-[30px]">👨‍🍳</span>
            </div>

            <h3 className="text-2xl text-[#114232] font-serif mb-3">
              Share Requirement
            </h3>

            <p className="text-sm text-gray-700 max-w-xs mx-auto">
              Tell us what type of cook you need, your preferred timing,
              cuisine, and location.
            </p>
          </div>

          <div>
            <div className="relative z-10 w-16 h-16 bg-[#114232] rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-[30px]">⚡</span>
            </div>

            <h3 className="text-2xl text-[#114232] font-serif mb-3">
              Get Matched
            </h3>

            <p className="text-sm text-gray-700 max-w-xs mx-auto">
              We connect you with suitable, verified cooks available in your
              area.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/all-cooks"
                className="bg-[#EA7317] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Find a Cook
              </Link>

              <Link
                to="/cook-registration"
                className="border border-[#114232] text-[#114232] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#114232] hover:text-white"
              >
                Become a Cook
              </Link>
            </div>
          </div>

          <div>
            <div className="relative z-10 w-16 h-16 bg-[#114232] rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-[30px]">🥘</span>
            </div>

            <h3 className="text-2xl text-[#114232] font-serif mb-3">
              Confirm & Start
            </h3>

            <p className="text-sm text-gray-700 max-w-xs mx-auto">
              Choose the cook that fits your need and begin the service right
              away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;