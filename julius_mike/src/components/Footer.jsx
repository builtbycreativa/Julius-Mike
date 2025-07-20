import {
    BlueGradient,
    Facebook,
    Instagram,
    JuliusLogo,
    YouTube,
  } from '../assets';
  
  export default function Footer() {
    return (
      <footer className="relative w-full text-white px-4 py-12 md:px-12">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <img src={BlueGradient} alt="Background Gradient" className="w-full h-full object-cover" />
        </div>
  
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-[1352px] mx-auto flex flex-col md:flex-row justify-between items-start bg-black rounded-3xl p-8 gap-12 md:gap-20">
          
          {/* Left: Logo + Socials */}
          <div className="flex flex-col items-start gap-6 w-full md:w-auto">
            <img
              src={JuliusLogo}
              alt="Julius Mike Logo"
              className="w-[98px] h-[78px] object-contain"
            />
  
            <div className="flex space-x-4">
              <img src={Facebook} alt="Facebook" className="bg-[#2F2F2F] p-2 rounded-full w-9 h-9" />
              <img src={YouTube} alt="YouTube" className="bg-[#2F2F2F] p-2 rounded-full w-9 h-9" />
              <img src={Instagram} alt="Instagram" className="bg-[#2F2F2F] p-2 rounded-full w-9 h-9" />
            </div>
          </div>
  
          {/* Center: Navigation Links */}
          <div className="flex flex-col gap-3 text-sm md:text-base w-full md:w-auto">
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Music</a>
            <a href="#" className="hover:text-gray-300">Ministry</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
  
          {/* Right: Contact */}
          <div className="text-sm md:text-base w-full md:w-auto mt-4 md:mt-0">
            <p>hello@juliusmike.com</p>
          </div>
        </div>
  
        {/* Bottom Copyright Section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-8 text-xs md:text-sm text-white/70 px-2 md:px-0 gap-4 md:gap-0">
          <p className="text-center">© 2025 Julius Mike. Built with ♡ by Creativa</p>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    );
  }
  