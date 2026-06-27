import { useState } from "react";
import { submitInquiry } from "../services/api";
import toast from "react-hot-toast";
import { useSearchParams, Link } from "react-router-dom";

const CustomerInquiry = () => {
  const [searchParams] = useSearchParams();
  const selectedCook = searchParams.get("cook");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    serviceRequirement: "",
    additionalNotes: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inquiryData = {
      ...formData,
      additionalNotes: selectedCook
        ? `Selected Cook: ${selectedCook}\n${formData.additionalNotes}`
        : formData.additionalNotes,
    };

    try {
      const res = await submitInquiry(inquiryData);

      if (res.success) {
        toast.success(res.message);

        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          serviceRequirement: "",
          additionalNotes: "",
          website: "",
        });
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
            Customer Inquiry
          </p>

          <h1 className="text-4xl lg:text-[46px] leading-[1.1] font-serif text-[#114232] mb-4">
            Find a Cook for Your Home
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl leading-7">
            Share your requirement and our team will contact you with suitable
            cook options.
          </p>

          {selectedCook && (
            <div className="mb-8 bg-[#114232]/10 border border-[#114232]/20 rounded-2xl p-4">
              <p className="text-sm text-[#114232]">Selected Cook</p>
              <h3 className="text-xl font-semibold text-[#114232] mt-1">
                {selectedCook}
              </h3>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Service Requirement
              </label>

              <select
                name="serviceRequirement"
                value={formData.serviceRequirement}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
                required
              >
                <option value="">Select service type</option>
                <option value="Home Cooking">Home Cooking</option>
                <option value="Part-Time Cook">Part-Time Cook</option>
                <option value="Full-Time Cook">Full-Time Cook</option>
                <option value="Event Cook">Event Cook</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Notes
              </label>

              <textarea
                rows="4"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Tell us more about your requirement"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:border-[#EA7317] focus:ring-4 focus:ring-[#EA7317]/10"
              ></textarea>
            </div>

            <input
              type="text"
              name="website"
              value={formData.website || ""}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <button
              type="submit"
              className="w-full bg-[#EA7317] text-white py-3 rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] hover:shadow-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerInquiry;