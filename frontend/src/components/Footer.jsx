import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#114232] px-6 lg:px-20 pt-12 pb-8 text-white">
      <div className="max-w-[1440px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif mb-4">
              <span className="text-white">Cook</span>
              <span className="text-[#EA7317]">Hire</span>
            </h2>

            <p className="text-white/70">
              Trusted cooks for every home & event.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-5">COMPANY</h3>
            <ul className="space-y-4 text-white/80">
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">About Us</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">How it Works</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">SERVICE</h3>
            <ul className="space-y-4 text-white/80">
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Home Cooking</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Part-Time Cook</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Full-Time Cook</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Event Cook</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">LEGAL</h3>
            <ul className="space-y-4 text-white/80">
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Privacy Policy</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[#EA7317]">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between gap-4 text-white/70">
          <p>© 2026 CookHire. All rights reserved.</p>
          <p>Made with ❤️ Prajith</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;