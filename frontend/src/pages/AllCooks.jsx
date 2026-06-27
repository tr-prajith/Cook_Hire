import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCooks } from "../services/api";

const AllCooks = () => {
  const [cooks, setCooks] = useState([]);

  useEffect(() => {
    const fetchCooks = async () => {
      try {
        const res = await getCooks();
        if (res.success) setCooks(res.data);
      } catch (error) {
        console.log("Unable to fetch cooks");
      }
    };

    fetchCooks();
  }, []);

  return (
    <section className="min-h-screen bg-[#114232] px-6 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto">
        <Link to="/" className="text-white/70 text-sm">
          ← Back to Home
        </Link>

        <h1 className="text-white text-4xl font-serif mt-6 mb-10">
          All Registered Cooks
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cooks.map((cook) => (
            <div
              key={cook._id}
              className="border border-white/30 rounded-[24px] p-5 text-white min-h-[210px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#EA7317]/40"
            >
              <div className="flex items-start gap-4 mb-5">
                <img
                  src={cook.profilePhoto}
                  alt={cook.fullName}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{cook.fullName}</h3>
                  <p className="text-white/60 text-sm">
                    {cook.cuisineSpecialization} · {cook.preferredLocation}
                  </p>
                  <p className="text-[#EA7317] text-sm mt-1">
                    ★★★★★ <span className="text-white/60">{cook.rating} · {cook.reviews} reviews</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-[#1f6b57] px-3 py-1 rounded-full text-xs">
                  {cook.cuisineSpecialization}
                </span>
                <span className="bg-[#1f6b57] px-3 py-1 rounded-full text-xs">
                  {cook.preferredWorkType}
                </span>
                <span className="bg-[#1f6b57] px-3 py-1 rounded-full text-xs">
                  {cook.experience}
                </span>
              </div>

              <div className="border-t border-dashed border-white/20 pt-4 flex justify-between items-end">
                <div>
                  <p className="text-white/50 text-xs">Starting From</p>
                  <h4 className="text-2xl font-bold">
                    ₹{cook.startingPrice} <span className="text-xs font-normal">/Meal</span>
                  </h4>
                </div>

                <Link
                  to="/customer-inquiry"
                  className="bg-[#EA7317] px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                >
                  Hire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCooks;