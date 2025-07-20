import React from "react";
import { useNavigate } from "react-router-dom";
import { AllGrid, GridFour, GridOne, GridThree, GridTwo, MoreJulius } from "../assets";

const JuliusIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#212121] text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center px-6 md:px-12 py-16 gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={MoreJulius}
            alt="Julius Mike"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[115%] tracking-[0%]">
            The Journey, <br />
            The Sound, <br />
            The Assignment.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
          Julius Mike is a prophetic worship leader and sound carrier sent to awaken hearts to the presence of God. Rooted in New Testament Christian Mission (NTCM) and now serving under The Epoch House, Julius carries a divine mandate to stir revival through sound. He is one of the voices behind the "God In This Music" movement bringing consecrated sound to a generation hungry for God. From campus gatherings to global stages, his ministry reflects purity, presence, and purpose.
          </p>
        
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="flex justify-between items-center">
        <h2 className="text-[80px] font-bold mb-[72px] pl-20">Book Julius Mike</h2>
        <button
            onClick={() => navigate("/booking")}
            className="mt-8 self-start border border-white px-[36px] py-[20px] rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Book Now
          </button>
        </div>
       <div>
        <img src={AllGrid} alt="" />
       </div>
      </section>
    </div>
  );
};

export default JuliusIntro;
