import React from 'react';
import { AboutHero } from '../assets';

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-center px-6 py-10 gap-8 lg:gap-0">
      {/* Image Section */}
      <div className="w-full lg:w-auto overflow-hidden">
        <img
          src={AboutHero}
          alt="About Julius Mike"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* Text Content */}
      <div className="text-center lg:text-left max-w-3xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold leading-snug tracking-tight pt-6 lg:pt-[100.5px] lg:pl-[161px]">
          More than a Voice — A Vessel
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed mt-4 lg:mt-[20px] lg:pl-[161px]">
          Julius Mike is a prophetic worship leader and minstrel under the spiritual covering of The Epoch House, featured throughout the God In This Music collective and album. His voice echoes in tracks like “The Testament” and “Praise,” bringing a heartfelt devotion and deep encounter into every live session. With Paul’s declaration “God is in this music” as his anthem, Julius ministers beyond melody ushering heaven into hearts and crafting altars wherever he goes
        </p>

        <button className="text-white border border-white rounded-full px-6 py-4 mt-6 text-base sm:text-lg md:text-xl font-normal lg:ml-[161px]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
