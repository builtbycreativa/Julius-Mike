// src/layouts/MainLayout.jsx
import { JuliusHero } from "../assets";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testament from "../components/Testament";
import Appointment from "../components/Appointment";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-black top-0 overflow-hidden">
      <div className="relative w-screen top-0 h-screen">
        <div>
          <img
            className="absolute  inset-0 w-full left-0 top-0 h-full object-cover"
            src={JuliusHero}
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-full" />
        <Hero />
      </div>
      <div className="overflow-x-hidden">
        <About />
      </div>
      <div>
        <Testament />
      </div>
      <Appointment />
      <Outlet /> {/* Optional: for nested routes if needed */}
    </div>
  );
};

export default MainLayout;
