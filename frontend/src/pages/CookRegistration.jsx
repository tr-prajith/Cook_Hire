import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { registerCook } from "../services/api";

const CookRegistration = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    experience: "",
    cuisineSpecialization: "",
    preferredWorkType: "",
    preferredLocation: "",
    profilePhoto: null,
    document: null,
    startingPrice: "",
    website: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cookData = new FormData();

      cookData.append("fullName", data.fullName);
      cookData.append("phone", data.phone);
      cookData.append("email", data.email);
      cookData.append("experience", data.experience);
      cookData.append("cuisineSpecialization", data.cuisineSpecialization);
      cookData.append("preferredWorkType", data.preferredWorkType);
      cookData.append("preferredLocation", data.preferredLocation);
      cookData.append("profilePhoto", data.profilePhoto);
      cookData.append("document", data.document);
      cookData.append("startingPrice", data.startingPrice);
      cookData.append("website", data.website);

      const res = await registerCook(cookData);

      if (res.success) {
        toast.success(res.message);

        setData({
          fullName: "",
          phone: "",
          email: "",
          experience: "",
          cuisineSpecialization: "",
          preferredWorkType: "",
          preferredLocation: "",
          profilePhoto: null,
          document: null,
          startingPrice: "",
          website: "",
        });

        e.target.reset();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-[#F9F8F3] px-6 lg:px-20 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#114232] font-medium mb-6 transition-all duration-300 hover:text-[#EA7317]"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-[32px] shadow-xl border border-[#E8E3DA] p-7 lg:p-10">
          <p className="text-[#EA7317] text-sm font-semibold uppercase mb-3">
            Cook Registration
          </p>

          <h1 className="text-4xl lg:text-[46px] leading-[1.1] font-serif text-[#114232] mb-4">
            Join CookHire
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl leading-7">
            Register yourself and we'll review your application before listing
            your profile.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={data.experience}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Example: 5 Years"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  Cuisine Specialization
                </label>

                <select
                  name="cuisineSpecialization"
                  value={data.cuisineSpecialization}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                >
                  <option value="">Select cuisine</option>
                  <option value="South Indian">South Indian</option>
                  <option value="North Indian">North Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Continental">Continental</option>
                  <option value="Mughlai">Mughlai</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Gujarati">Gujarati</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Preferred Work Type
                </label>

                <select
                  name="preferredWorkType"
                  value={data.preferredWorkType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                >
                  <option value="">Select work type</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Event Based">Event Based</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  Preferred Location
                </label>
                <input
                  type="text"
                  name="preferredLocation"
                  value={data.preferredLocation}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Enter preferred location"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Starting Price / Meal
                </label>
                <input
                  type="number"
                  name="startingPrice"
                  value={data.startingPrice}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  placeholder="Example: 1500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  Upload Profile Photo
                </label>

                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Upload Identity Document
                </label>

                <input
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                />
              </div>
            </div>

            <input
              type="text"
              name="website"
              value={data.website || ""}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <button
              type="submit"
              className="w-full bg-[#EA7317] text-white py-3 rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] hover:shadow-lg"
            >
              Register as Cook
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CookRegistration;