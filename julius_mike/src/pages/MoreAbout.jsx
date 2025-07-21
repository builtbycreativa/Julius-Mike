import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AllGrid,
  MoreJulius,
} from "../assets";
import ScrollToTop from "../components/ScrollToTop";

const JuliusIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#212121] text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 py-16 gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={MoreJulius}
            alt="Julius Mike"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            The Journey, <br />
            The Sound, <br />
            The Assignment.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Julius Mike is a prophetic worship leader and sound carrier sent to awaken hearts to the presence of God. Rooted in New Testament Christian Mission (NTCM) and now serving under The Epoch House, Julius carries a divine mandate to stir revival through sound. He is one of the voices behind the "God In This Music" movement bringing consecrated sound to a generation hungry for God. From campus gatherings to global stages, his ministry reflects purity, presence, and purpose.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Book Julius Mike</h2>
          <button
            onClick={() => navigate("/booking")}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-base md:text-lg"
          >
            Book Now
          </button>
        </div>

        <div className="w-full">
          <img src={AllGrid} alt="Julius Mike Gallery" className="w-full h-auto object-cover rounded-lg" />
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
