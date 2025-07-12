import { BgGradient, JuliusHero } from "./assets";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black w-screen overflow-hidden">
      <div className="relative w-screen h-screen">
        <div>
          <img
            className="absolute inset-0 w-full left-0 h-full object-cover"
            src={JuliusHero}
            alt=""
          />
          {/* <img src={BgGradient} alt="" /> */}
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-full"/>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
