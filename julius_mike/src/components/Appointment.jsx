import React, { useEffect, useRef } from "react";
import { BlackJulius } from "../assets";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Appointment = () => {
const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

   useEffect(() => {
      const animateFrom = (elem, direction = 1) => {
        const x = 0;
        const y = direction * 100;
        gsap.fromTo(
          elem,
          { x: x, y: y, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      };
  
      imageRef.current && animateFrom(imageRef.current);
      headingRef.current && animateFrom(headingRef.current);
      paragraphRef.current && animateFrom(paragraphRef.current);
      buttonRef.current && animateFrom(buttonRef.current);
    }, []);

  return (
    <section className="relative w-full min-h-[951px]">
      {/* Background Image */}
      <img
      ref={imageRef}
        src={BlackJulius}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-10 text-center text-white">
        <div className="max-w-4xl space-y-6">
          <h1 ref={headingRef} className="text-[60px] lg:text-[80px] font-MonaSansWide leading-tight">
            One Sound Can Shift a Room. Will It Be Yours?
          </h1>

          <p ref={paragraphRef} className="text-[14px] lg:text-[22px] font-MonaSans">
            Whether you’re planning a worship night, a youth convention, a prayer
            gathering, or you simply want to testify about how God has moved
            through this ministry, we’d love to hear from you. Julius is available
            for ministry invitations, media collaborations, and{" "}
            <strong className="font-MonaSans">
              SPECIAL APPEARANCES THAT ALIGN WITH THE ASSIGNMENT.
            </strong>{" "}
            For ministrations, testimonies, or media requests, click the button
            below.
          </p>

          <Link to="/booking">
            <button ref={buttonRef} className="text-white border border-white rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 mt-4 sm:mt-6 text-[14px] lg:text-[22px] hover:bg-white hover:text-black transition-all duration-300 font-MonaSans">
              Book an appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
