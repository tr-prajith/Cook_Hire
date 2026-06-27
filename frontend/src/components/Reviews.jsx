import React from 'react'

const Reviews = () => {
  return (
    <section id="reviews" className="bg-[#F9F8F3] px-6 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[#EA7317] text-sm font-semibold uppercase mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl lg:text-[54px] leading-[1.1] text-[#114232] font-serif mb-10">
          What Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <img src="/images/review1.png" alt="Food" className="w-full h-[155px] object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <p className="font-bold mb-3">“</p>
              <p className="text-gray-700 text-sm leading-6 mb-5">
                Cook Hire made it so easy to find a reliable cook for our family.
                The whole process took less than a day!
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <img src="/images/user1.png" alt="Customer" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[17px] leading-none">Anand Kumar</h4>
                  <p className="text-[#EA7317] text-sm mt-1">★★★★★ <span className="text-gray-500">Coimbatore</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <img src="/images/review2.png" alt="Food" className="w-full h-[155px] object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <p className="font-bold mb-3">“</p>
              <p className="text-gray-700 text-sm leading-6 mb-5">
                We hired an event cook for our daughter’s birthday. Excellent
                food, great presentation.
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <img src="/images/user2.png" alt="Customer" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[17px] leading-none">Anand Kumar</h4>
                  <p className="text-[#EA7317] text-sm mt-1">★★★★★ <span className="text-gray-500">Coimbatore</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <img src="/images/review3.png" alt="Food" className="w-full h-[155px] object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <p className="font-bold mb-3">“</p>
              <p className="text-gray-700 text-sm leading-6 mb-5">
                The cook they matched us with is fantastic, punctual, clean, and
                makes amazing South Indian food every day.
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <img src="/images/user3.png" alt="Customer" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[17px] leading-none">Anand Kumar</h4>
                  <p className="text-[#EA7317] text-sm mt-1">★★★★★ <span className="text-gray-500">Coimbatore</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <img src="/images/review4.png" alt="Food" className="w-full h-[155px] object-cover object-top" />
            <div className="p-4 flex flex-col flex-1">
              <p className="font-bold mb-3">“</p>
              <p className="text-gray-700 text-sm leading-6 mb-5">
                Cook Hire made it so easy to find a reliable cook for our family.
                The whole process took less than a day!
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <img src="/images/user1.png" alt="Customer" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[17px] leading-none">Anand Kumar</h4>
                  <p className="text-[#EA7317] text-sm mt-1">★★★★★ <span className="text-gray-500">Coimbatore</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;