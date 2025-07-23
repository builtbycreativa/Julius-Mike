import React, { useEffect, useRef } from "react";
import { AboutHero } from "../assets";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: imageRef, y: 100 },
        { ref: headingRef, y: 80 },
        { ref: paragraphRef, y: 60 },
        { ref: buttonRef, y: 40 },
      ];

      elements.forEach(({ ref, y }) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
            onStart: () => {
              ref.current.classList.remove("invisible");
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex flex-col lg:flex-row items-center gap-8"
    >
      {/* Image Section */}
      <div ref={imageRef} className="w-full lg:w-1/2 overflow-hidden invisible">
        <img
          src={AboutHero}
          alt="About Julius Mike"
          className="w-full h-auto object-cover lg:pr-20 block rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[587px] text-center lg:text-left text-white">
        <h1
          ref={headingRef}
          className="invisible text-[60px] lg:text-[80px] font-MonaSansWide leading-[115%] tracking-tight"
        >
          More than a Voice, A <br className="hidden lg:flex" /> Vessel
        </h1>

        <p
          ref={paragraphRef}
          className="invisible mt-4 sm:mt-6 text-[14px] lg:text-[22px] font-MonaSans leading-relaxed"
        >
          Julius Mike is a prophetic worship leader and minstrel under the
          spiritual covering of The Epoch House, featured throughout the God In
          This Music collective and album. His voice echoes in tracks like “The
          Testament” and “Praise,” bringing a heartfelt devotion and deep
          encounter into every live session. With Paul’s declaration “God is in
          this music” as his anthem, Julius ministers beyond melody, ushering
          heaven into hearts and crafting altars wherever he goes.
        </p>

        <Link to="/about">
          <button
            ref={buttonRef}
            className="invisible text-white border border-white rounded-full px-[36px] py-3 mb-6 sm:py-[20px] mt-6 sm:mt-8 text-[14px] lg:text-[22px] hover:bg-white hover:text-black transition-all duration-300 font-MonaSans cursor-pointer"
          >
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
