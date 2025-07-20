import React from "react";
import { AboutHero } from "../assets";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-10 gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 overflow-hidden">
        <img
          src={AboutHero}
          alt="About Julius Mike"
          className="w-full h-auto object-cover block rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          More than a Voice — A Vessel
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
          Julius Mike is a prophetic worship leader and minstrel under the spiritual covering of The Epoch House, featured throughout the God In This Music collective and album. His voice echoes in tracks like “The Testament” and “Praise,” bringing a heartfelt devotion and deep encounter into every live session. With Paul’s declaration “God is in this music” as his anthem, Julius ministers beyond melody—ushering heaven into hearts and crafting altars wherever he goes.
        </p>

        <Link to="/about">
        <button className="text-white border border-white rounded-full px-6 py-3 sm:py-4 mt-6 sm:mt-8 text-base sm:text-lg font-normal hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
