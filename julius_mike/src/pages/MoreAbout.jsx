import React from "react";
import { useNavigate } from "react-router-dom";
import { AllGrid, MoreJulius } from "../assets";
import ScrollToTop from "../components/ScrollToTop";

const JuliusIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#212121] text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className=" mx-auto mt-10 flex flex-col lg:flex-row items-center   gap-10">
        {/* Image */}
        <div className="w-full absolute lg:w-[960px]">
          <img
            src={MoreJulius}
            alt="Julius Mike"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="relative  xl:ml-[691px] ml-3  flex flex-col justify-center pt-[180px] space-y-6 h-[800px] lg:h-[1108px]">
          <h1 className="text-[55px] lg:text-[80px] max-w-[6xl] lg:max-w-[935px] font-MonaSansWide leading-tight tracking-wide ">
            The Journey, <br />
            The Sound, <br />
            The Assignment.
          </h1>
          <p className="text-[14px] lg:text-[22px] max-w-[380px] lg:max-w-[732px] font-MonaSans leading-relaxed">
            Julius Mike is a prophetic worship leader and sound carrier sent to
            awaken hearts to the presence of God. Rooted in New Testament
            Christian Mission (NTCM) and now serving under The Epoch House,
            Julius carries a divine mandate to stir revival through sound. He is
            one of the voices behind the "God In This Music" movement bringing
            consecrated sound to a generation hungry for God. From campus
            gatherings to global stages, his ministry reflects purity, presence,
            and purpose.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-[60px] lg:text-[80px] font-MonaSansWide">
            Book Julius Mike
          </h2>
          <button
            onClick={() => navigate("/booking")}
            className="border border-white px-6 py-3 rounded-full cursor-pointer font-MonaSans hover:bg-white hover:text-black transition duration-300 text-[14px] lg:text-[22px]"
          >
            Book Now
          </button>
        </div>

        <div className="relative left-1/2 right-1/2 lg:left-0 lg:right-0 ml-[-50vw] lg:ml-0 lg:mr-0 mr-[-50vw] w-screen lg:w-full overflow-x-hidden">
          <img
            src={AllGrid}
            alt="Julius Mike Gallery"
            className="w-[120vw] lg:w-full max-w-none lg:max-w-[1512px] h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          {/* Your page content */}
          <ScrollToTop />
        </div>
      </section>
    </div>
  );
};

export default JuliusIntro;
