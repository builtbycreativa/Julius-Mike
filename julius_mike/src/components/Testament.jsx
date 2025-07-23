import React, { useEffect, useRef } from "react";
import { TestamentHero } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testament = () => {
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
    <section className="relative w-full min-hscreen lg:min-h-[1172px] overflow-hidden">
      {/* Background Image */}
      <img
        src={TestamentHero}
        alt="Testament Hero"
        ref={imageRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center lg:mt-10 items-center min-h-screen px-4 sm:px-6 md:px-10 text-white text-center">
        <div className="w-full max-w-4xl space-y-6">
          <h1 ref={headingRef} className="text-[60px] lg:text-[80px] font-MonaSansWide leading-tight">
            The Testament<br />(Live)
          </h1>

          <p ref={paragraphRef} className="text-[14px] sm:text-base font-MonaSans lg:text-[22px] leading-relaxed">
            This anthem from the God In This Music collective, featuring Julius Mike, has become a worship staple stirring hearts and birthing atmosphere wherever it's played. The track delivers a moving medley of praise and prophetic declaration, blending Isaac’s anointing with Julius’s passionate delivery and the authentic sound of The Epoch House.
          </p>

          {/* Spotify Embed */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mt-6">
            <iframe
            ref={imageRef}
              src="https://open.spotify.com/embed/album/7Ao2cYvFbCwgz5gx8PQqxb?utm_source=generator"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testament;
