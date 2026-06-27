import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCooks } from "../services/api";

const Cooks = () => {
  const [cooks, setCooks] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = ["All", "South Indian", "North Indian", "Mughlai", "Bengali"];

  const fetchCooks = async () => {
    try {
      const res = await getCooks();

      if (res.success) {
        setCooks(res.data);
      }
    } catch (error) {
      console.log("Unable to fetch cooks");
    }
  };

  useEffect(() => {
    fetchCooks();
  }, []);

  const filteredCooks =
    selectedCuisine === "All"
      ? cooks
      : cooks.filter((cook) =>
          cook.cuisineSpecialization
            ?.toLowerCase()
            .includes(selectedCuisine.toLowerCase())
        );

  return (
    <section id="cooks" className="bg-[#114232] px-6 lg:px-20 pt-14 pb-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase mb-3">
              TOP RATED
            </p>

            <h2 className="text-white text-4xl font-serif mb-6">
              Featured Cooks
            </h2>

            <div className="flex flex-wrap gap-3">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCuisine === cuisine
                      ? "bg-[#EA7317] text-white font-semibold"
                      : "border border-white/30 text-white hover:bg-white hover:text-[#114232]"
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/all-cooks"
            className="hidden md:block border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#114232]"
          >
            View all cooks →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredCooks.length === 0 ? (
            <p className="text-white/70">No cooks found.</p>
          ) : (
            filteredCooks.slice(0, 3).map((cook) => (
              <div
                key={cook._id}
                className="border border-white/30 rounded-[24px] p-5 text-white min-h-[210px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#EA7317]/40"
              >
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${cook.profilePhoto}`}
                    alt={cook.fullName}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{cook.fullName}</h3>

                    <p className="text-white/60 text-sm">
                      {cook.cuisineSpecialization} · {cook.preferredLocation}
                    </p>

                    <p className="text-[#EA7317] text-sm mt-1">
                      ★★★★★{" "}
                      <span className="text-white/60">
                        {cook.rating} · {cook.reviews} reviews
                      </span>
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
                      ₹{cook.startingPrice}{" "}
                      <span className="text-xs font-normal">/Meal</span>
                    </h4>
                  </div>

                  <Link
                    to={`/customer-inquiry?cook=${encodeURIComponent(cook.fullName)}`}
                    className="bg-[#EA7317] px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                  >
                    Hire Now
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Cooks;