import { useState } from "react";

const tabs = [
  {
    label: "Worship Sessions",
    description: "Invite Julius for crusades, worship nights, church services.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScTnR8-PObrw1nfmKgyIiY8ySOFLdTBeg97oXNDkUeLdnRfNQ/viewform?embedded=true",
  },
  {
    label: "One-on-One",
    description: "Book a personal interaction or counseling session.",
  },
  {
    label: "Event/Studio Planning",
    description:
      "For studio sessions, recording coordination, or spiritual event planning.",
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
    <section className="relative top-30 min-h-screen px-4 md:px-10 py-16 bg-gray-50 text-gray-800 font-mona">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Next Encounter Starts Here
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Bring the atmosphere of Heaven to your gathering. Julius is available
          for ministry across various formats and needs. Choose the appropriate
          tab below to proceed:
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full border text-sm md:text-base transition duration-200 font-medium ${
                activeTab === index
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 bg-white shadow-md rounded-xl p-6 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            {tabs[activeTab].label}
          </h2>
          <p className="text-gray-700 text-md">{tabs[activeTab].description}</p>
          <iframe
            src={tabs[activeTab].formUrl}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full rounded-2xl mt-10 border-4 border-gray-300"
            title={tabs[activeTab].label}
          >
            Loading…
          </iframe>
        </div>

        <div className="mt-10">
          <p className="text-lg font-medium italic text-gray-800">
            “Select your purpose and let’s walk in obedience.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;

{
  /* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTnR8-PObrw1nfmKgyIiY8ySOFLdTBeg97oXNDkUeLdnRfNQ/viewform?embedded=true" width="640" height="2351" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */
}
