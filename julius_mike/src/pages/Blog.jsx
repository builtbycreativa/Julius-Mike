import React, { useEffect, useRef } from 'react';
import { BlueJulius } from '../assets';
import { gsap } from 'gsap';
import ScrollToTop from '../components/ScrollToTop';

const Blog = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('span');

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotate: -10,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.05,
      }
    );
  }, []);

  const animatedText = "Coming soon!".split("").map((char, index) => (
    <span key={index} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={BlueJulius}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full text-white text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-[80px] font-MonaSansWide px-6 py-4 rounded-lg"
          ref={textRef}
        >
          {animatedText}
        </h1>
      </div>
      <div>
      {/* Your page content */}
      <ScrollToTop />
    </div>
    </div>
  );
};

export default Blog;

