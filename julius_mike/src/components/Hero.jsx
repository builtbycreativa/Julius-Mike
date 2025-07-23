import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headlineRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        paragraphRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 md:px-10 lg:px-20 text-white"
    >
      <div className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] space-y-6 text-center md:text-left">
        <h1
          ref={headlineRef}
          className="text-[60px] lg:text-[80px] pt-10 lg:pt-40 font-MonaSansWide leading-tight md:leading-[90px]"
        >
          Sound From
          <br />
          The Spirit
        </h1>

        <p
          ref={paragraphRef}
          className="text-[14px] lg:text-[22px] font-MonaSans leading-relaxed max-w-[463px]"
        >
          A vessel of praise, leading with purpose. As a devoted follower of
          Christ, Julius stands at the intersection of worship and revival—
          carrying hearts into the throne room through every lyric, every note.
        </p>

        <div className="flex justify-center md:justify-start">
          <a href="#about" ref={buttonRef}>
            <button className="bg-transparent border font-MonaSans border-white text-white hover:text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[14px] lg:text-[22px] hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
              Start the Journey
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
