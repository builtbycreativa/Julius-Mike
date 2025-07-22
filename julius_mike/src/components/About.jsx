import React from "react";
import { AboutHero } from "../assets";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 overflow-hidden">
        <img
          src={AboutHero}
          alt="About Julius Mike"
          className="w-full h-auto object-cover pr-20 block rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[587px] text-center lg:text-left  text-white">
        <h1 className="text-[60px] lg:text-[80px] font-bold leading-[115%] tracking-tight">
          More than a Voice, A <br className="hidden lg:flex"/>Vessel
        </h1>

        <p className="mt-4 sm:mt-6 text-[14px] lg:text-[22px] font-medium leading-relaxed">
          Julius Mike is a prophetic worship leader and minstrel under the spiritual covering of The Epoch House, featured throughout the God In This Music collective and album. His voice echoes in tracks like “The Testament” and “Praise,” bringing a heartfelt devotion and deep encounter into every live session. With Paul’s declaration “God is in this music” as his anthem, Julius ministers beyond melody, ushering heaven into hearts and crafting altars wherever he goes.
        </p>

        <Link to="/about">
        <button className="text-white border border-white rounded-full px-[36px] py-3 sm:py-[20px] mt-6 sm:mt-8 text-base sm:text-lg font-normal hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
