import { BlackJulius } from "../assets";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <section className="relative w-full min-h-[951px]">
      {/* Background Image */}
      <img
        src={BlackJulius}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-10 text-center text-white">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-[60px] lg:text-[80px] font-MonaSansWide leading-tight">
            One Sound Can Shift a Room. Will It Be Yours?
          </h1>

          <p className="text-[14px] lg:text-[22px] font-MonaSans">
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
            <button className="text-white border border-white rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 mt-4 sm:mt-6 text-[14px] lg:text-[22px] hover:bg-white hover:text-black transition-all duration-300 font-MonaSans">
              Book an appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
