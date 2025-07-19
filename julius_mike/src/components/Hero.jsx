const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 text-white">
      <div className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] pt-40 font-bold leading-tight md:leading-[90px]">
          Sound From
          <br />
          The Spirit
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-[463px]">
          A vessel of praise, leading with purpose. As a devoted follower of
          Christ, Julius stands at the intersection of worship and revival—
          carrying hearts into the throne room through every lyric, every note.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="bg-transparent border border-white text-white hover:text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium hover:bg-white transition-all duration-300 ease-in-out">
            Start the Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
