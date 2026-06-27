import React from "react";


const Process = () => {
  return (
    <section
      id="process"
      className="bg-[#F9F8F3] px-6 lg:px-20 pt-16 pb-16" >
      <div className="max-w-[1440px] mx-auto">

        <p className="text-[#EA7317] text-sm font-semibold uppercase mb-3">
          Simple Process
        </p>

        <h2 className="text-[56px] leading-[1.15] text-[#114232] font-serif mb-3 max-w-[560px]">
          Hire a Cook in 4 Easy Steps
        </h2>

        <p className="text-gray-600 max-w-[500px] leading-8 mb-12">
          No hassle, no long commitments. Book a skilled cook for a day,
          a week, or an ongoing arrangement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#EA7317]/30">
            <div className="w-14 h-14 rounded-2xl bg-[#114232]/10 flex items-center justify-center mb-6">
              <img
                src="/images/verified.png"
                alt="Verified Cooks"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Verified Cooks
            </h3>

            <p className="text-gray-600 leading-7">
              Every cook is background-checked and skill verified before
              joining our platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#EA7317]/30">
            <div className="w-14 h-14 rounded-2xl bg-[#114232]/10 flex items-center justify-center mb-6">
              <img
                src="/images/booking.png"
                alt="Flexible Booking"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Flexible Booking
            </h3>

            <p className="text-gray-600 leading-7">
              Daily, part-time, full-time, or event basis you
              choose what works for your schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#EA7317]/30">
            <div className="w-14 h-14 rounded-2xl bg-[#114232]/10 flex items-center justify-center mb-6">
              <img
                src="/images/hiring.png"
                alt="Easy Hiring"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Easy Hiring
            </h3>

            <p className="text-gray-600 leading-7">
              Tell us your requirement and we match you
              with the right cook fast and simple.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;