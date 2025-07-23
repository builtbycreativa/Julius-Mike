import {
  albums,
  AllGrid,
  FeaturedBg,
  Music,
  MusicLogo,
  SpotifyLogo,
  YouTubeLogo,
} from "../assets";

import { FaYoutube } from "react-icons/fa";
import Testament from "../components/Testament";
import ScrollToTop from "../components/ScrollToTop";
import { Link, useNavigate } from "react-router-dom";

const featuredSessions = [
  {
    title: "Praise Medley (feat. Dreysongz, Yanmife and Julius...)",
    source: "YouTube",
    src: "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192670/thumbnail-container_iptrxf.png",
    iconY:
      "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192800/youtube_wkmiya.svg",
    iconT:
      "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192800/youtube_wkmiya.svg",
      link: "https://youtu.be/wpG1jUnnI7o?si=BTAno1O9zRMRRWnX"
  },
  {
    title: "SOAKING WORSHIP SESSION (Feat. Julius Mike)...",
    source: "YouTube",
    src: "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192671/thumbnail-container1_ctrved.png",
    iconY:
      "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192800/youtube_wkmiya.svg",
    iconT:
      "https://res.cloudinary.com/de5kq5blj/image/upload/v1753192800/youtube_wkmiya.svg",
      link: "https://youtu.be/XyTQNjoOiXI?si=gJicetOoaYXVzNl5"
  },
];

const MusicSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] md:h-[1000px] xl:h-[1200px] overflow-hidden">
        <img
          src={Music}
          alt="Hero"
          className="absolute inset-0 w-full xl:w-[847px] lg:w-[550px] h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col justify-center h-full lg:max-w-5xl xl:max-w-6xl xl:ml-[640px] lg:ml-[420px] px-6 pt-30 md:pt-20">
          <h1 className="text-[60px] lg:text-[80px] font-MonaSansWide leading-tight">
            Sounds of <br /> Heaven. <br /> Songs of Revival.
          </h1>
          <p className="mt-4 sm:mt-6 text-[14px] lg:text-[22px] font-MonaSans text-gray-200 max-w-2xl mb-10">
            Experience the soul-stirring sound of Julius Mike where spirit meets
            melody. From anointed worship moments to spirit-led studio
            creations, Julius brings music that heals, uplifts, and ignites
            passion for God. Dive into original tracks, live sessions, and
            collaborations that carry the presence of God.
          </p>
        </div>
      </div>

      {/* Music Section */}
      <div className="relative px-6 md:px-10 lg:px-24 -mt-13 md:-mt-12 xl:-mt-17">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-[60px] lg:text-[80px] font-MonaSansWide ">
            Music
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://music.apple.com/ug/artist/julius-mike/777511731">
              <img src={MusicLogo} alt="Apple" className="h-8 w-8" />
            </a>
            <a href="https://open.spotify.com/artist/5hStYWHBX6O7ZekiLRGweS?si=nvScHb3zSiCNQVJEIvxj7A">
              <img src={SpotifyLogo} alt="Spotify" className="h-8 w-8" />
            </a>
            <a href="https://www.youtube.com/@_juliusmike">
              <img src={YouTubeLogo} alt="YouTube" className="h-8 w-8" />
            </a>
            <button className="border px-[36px] py-[20px] rounded-full text-[14px] cursor-pointer lg:text-[22px] font-MonaSans hover:bg-white hover:text-black transition-all">
              Julius's Music
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-MonaSans gap-[20px] pt-10 md:pt-20 mb-20">
          {albums.map((album, index) => (
            <div key={index} className="rounded-md shadow-md overflow-hidden">
              <img
                src={album.image}
                alt={album.title}
                className="w-[380px] h-[250px] md:h-[300px]  object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {album.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">{`${album.year} • ${album.type}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Live Sessions Section */}
      <div className="relative px-6 md:px-10 lg:px-24 py-20 md:py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img src={FeaturedBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-MonaSansWide mb-6">
            Featured Live <br /> Sessions
          </h2>
          <p className="text-[14px] lg:text-[22px] text-gray-300 max-w-4xl mx-auto font-MonaSans leading-relaxed mb-10 md:mb-16">
            Dive into the sacred soundscape of our Featured Live Sessions —
            anointed, spontaneous moments captured in the presence of God.
            Experience the Soaking Worship Session (Campus Invasion '24)
            featuring Julius Mike, a heartfelt, spirit-led flow that drew
            students into deep intimacy with the Father. Then turn up the
            spiritual intensity with the Praise Medley featuring Dreysongz,
            Yanmife, and Julius Mike, a vibrant, prophetic outburst of praise
            recorded live at SFZ24.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-MonaSans justify-items-center">
            {featuredSessions.map((session, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg max-w-md w-full"
              >
                <Link to={session.link}>
                  <img
                  src={session.src}
                  alt="YouTube Thumbnail"
                  className="w-full h-[200px] md:h-[300px] object-cover"
                />
                </Link>
                <div className="text-black p-4 text-left">
                  <h3 className="text-lg font-semibold">{session.title}</h3>
                  <div className="flex items-center gap-2 pt-3">
                    <FaYoutube className="text-red-600 w-6 h-6" />
                    <p className="text-sm text-gray-600">{session.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testament />

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-20 space-y-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-[60px] lg:text-[80px] font-MonaSansWide">
            Book Julius Mike
          </h2>
          <button
            onClick={() => navigate("/booking")}
            className="border border-white px-[36px] py-[20px] rounded-full hover:bg-white hover:text-black transition font-MonaSans cursor-pointer duration-300 text-[14px] lg:text-[22px]"
          >
            Book Now
          </button>
        </div>
        <div className="relative left-1/2 right-1/2 lg:left-0 lg:right-0 ml-[-50vw] lg:ml-0 lg:mr-0 mr-[-50vw] w-screen lg:w-full overflow-x-hidden">
          <img
            src={AllGrid}
            alt="Julius Mike Gallery"
            className="w-[120vw] lg:w-full max-w-none lg:max-w-[1512px] h-auto object-cover rounded-lg"
          />
        </div>
        <ScrollToTop />
      </section>
    </section>
  );
};

export default MusicSection;
