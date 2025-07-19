import React from "react";
import { TestamentHero } from "../assets";

const Testament = () => {
  return (
    <section className="relative w-screen h-[1359px] overflow-hidden">
      {/* Background image */}
      <div>
        <img
          src={TestamentHero}
          alt="Testament Hero"
          className="absolute top-0 left-0 w-full h-full  object-center z-0"
        />
      </div>
      <div className="relative inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The Testament<br />(Live)
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-10">
            This anthem from the God In This Music collective, featuring Julius Mike, has become a worship staple stirring hearts and birthing atmosphere wherever it's played. The track delivers a moving medley of praise and prophetic declaration, blending Isaac’s anointing with Julius’s passionate delivery and the authentic sound of The Epoch House.
          </p>

          {/* Spotify Embed */}
          <div className="w-full">
            <iframe
              className="w-full rounded-xl"
              src="https://open.spotify.com/embed/album/7Ao2cYvFbCwgz5gx8PQqxb?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testament;
