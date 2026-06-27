const cuisines = [
  "Cuisine",
  "Continental",
  "Chinese",
  "South Indian",
  "North Indian",
  "Bengali",
  "Mughlai",
  "Gujarati",
];

const Cuisines = () => {
  return (
    <section id="cuisines" className="bg-[#F9F8F3] w-full overflow-hidden">
      <div className="w-full h-[80px] flex">

        {/* Orange Block */}
        <div className="w-[170px] md:w-[210px] lg:w-[250px] bg-[#EA7317] flex items-center shrink-0">

          {/* Large left padding like Figma */}
          <h2 className="ml-8 md:ml-12 lg:ml-20 text-white font-serif text-[20px] md:text-[22px] whitespace-nowrap">
            Cuisines
          </h2>

        </div>

        {/* Green Strip */}
        <div className="flex-1 bg-[#114232] overflow-x-auto lg:overflow-x-hidden">
          <div className="flex lg:grid lg:grid-cols-8 items-center h-full gap-8 lg:gap-0 px-8 text-white text-[14px] md:text-[15px] min-w-max lg:min-w-0">

            {cuisines.map((item, index) => (
              <span
                key={index}
                className="whitespace-nowrap shrink-0 lg:shrink text-center"
              >
                {index === 0 ? item : `• ${item}`}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Cuisines;