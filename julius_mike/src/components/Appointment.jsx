 // Ensure correct image path

import { BlackJulius } from "../assets";
import { Link } from 'react-router-dom';

const Appointment = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <img
        src={BlackJulius}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white font-bold text-[50px] md:text-[80px] leading-tight max-w-[945px]">
          One Sound Can Shift a Room. Will It Be Yours?
        </h1>
        <p className="text-white max-w-[884px] mt-6 text-[18px] md:text-[22px] font-medium">
          Whether you’re planning a worship night, a youth convention, a prayer
          gathering, or you simply want to testify about how God has moved
          through this ministry we’d love to hear from you. Julius is available
          for ministry invitations, media collaborations, and{" "}
          <strong className="font-bold">
            SPECIAL APPEARANCES THAT ALIGN WITH THE ASSIGNMENT.
          </strong>{" "}
          For ministrations, testimonies, or media requests, click the button
          below
        </p>
        <Link to='/booking'>
        <button className="text-white border border-white rounded-full px-9 py-4 mt-8 hover:bg-white hover:text-black transition-all">
          Book an appointment
        </button>
        </Link>
      </div>

      {/* Optional: dark overlay if text lacks contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
    </section>
  );
};

export default Appointment;
