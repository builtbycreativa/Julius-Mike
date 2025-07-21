import { useState } from "react";
import { BgVideo } from "../assets";
import ScrollToTop from "../components/ScrollToTop";

const tabs = [
  {
    label: "Worship Sessions",
    description:
      "Invite Julius for crusades, worship nights, church services.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfeYw5s7LzveysF9RKFJ1QNYh6il1ygPOjskMrjMecDzSCw1Q/viewform?embedded=true",
  },
  {
    label: "One-on-One",
    description: "Book a personal interaction or counseling session.",
    formUrl:
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Z0E_kDN6Gh9GCbjxeg7YAqBwfv3S9vM2WRWYZGVbWJ6W_gHc2UQPe5R10hXKIEst0fEaX8BJ1?gv=true",
  },
  {
    label: "Event/Studio Planning",
    description:
      "For studio sessions, recording coordination, or spiritual event planning.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfXMsc38koh3uoAu0c1hqS5c3xxLPKfg_9JS1zViM69a_F_SA/viewform?embedded=true",
  },
  {
    label: "Testimonies",
    description: "Share how God has used this ministry in your life.",
  },
  {
    label: "Media Requests",
    description: "For press, interviews, and content collaborations.",
  },
];

const Booking = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full min-h-screen text-white font-mona overflow-hidden">
      {/* Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-[-1]" />

      {/* Page Content */}
      <div className="relative top-40 z-10 px-4 md:px-10 py-16 min-h-screen">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your Next Encounter Starts Here
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">
            Bring the atmosphere of Heaven to your gathering. Julius is
            available for ministry across various formats and needs. Choose the
            appropriate tab below to proceed:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full border text-sm md:text-base transition duration-200 font-medium ${
                  activeTab === index
                    ? "bg-white text-black border-white"
                    : "border-gray-300 text-white hover:bg-gray-200 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-10 bg-white/70 backdrop-blur-md shadow-xl rounded-4xl p-6 md:p-10 max-w-3xl mx-auto">
            <h2 className="text-xl text-black md:text-2xl font-semibold mb-2">
              {tabs[activeTab].label}
            </h2>
            <p className="text-black text-md mb-4">
              {tabs[activeTab].description}
            </p>
            {tabs[activeTab].formUrl && (
              <iframe
                src={tabs[activeTab].formUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full rounded-2xl border-4 border-gray-200"
                title={tabs[activeTab].label}
              >
                Loading…
              </iframe>
            )}
          </div>

          <div className="mt-10">
            <p className="text-lg font-medium italic text-white">
              “Select your purpose and let’s walk in obedience.”
            </p>
          </div>
        </div>
      </div>
      <div>
      {/* Your page content */}
      <ScrollToTop />
    </div>
    </section>
  );
};

export default Booking;
