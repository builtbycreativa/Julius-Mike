import { useState } from 'react';
import { FirstNavItems } from '../assets';
import { SecondNavItems } from '../assets';
import { JuliusLogo } from '../assets';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export default function() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full top-[25px] flex justify-center z-50">
      <div className="flex items-center lg:justify-around justify-between bg-black/50 rounded-full px-6 py-4 w-full max-w-[389px] h-[78px] lg:[97px] lg:max-w-[1366px]">
        {/* Desktop Nav */}
        <div className="hidden md:hidden lg:flex items-center space-x-8 font-myfont text-white">
          {FirstNavItems.map((item, i) => (
            <a key={i} href={item.href || '#'}>{item.name}</a>
          ))}
        </div>

        {/* Center Logo */}
        <Link to='/'>
        <div className="flex justify-center">
          <img
            src={JuliusLogo}
            alt="Julius Logo"
            className="lg:w-[98px] lg:h-[77px] md:w-[65px] md:h-[45px] w-[58.546px] h-[45.903px] object-contain"
          />
        </div>
        </Link>

        {/* Right Nav - Desktop */}
        <div className="hidden md:hidden lg:flex items-center space-x-8 text-white">
          {SecondNavItems.map((item, i) => (
            <a key={i} href={item.href || '#'}>{item.name}</a>
          ))}
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[110px] w-full max-w-[1366px] bg-black/80 text-white rounded-xl py-4 px-6 md:hidden">
          <div className="flex flex-col items-center space-y-4">
            {FirstNavItems.concat(SecondNavItems).map((item, i) => (
              <a key={i} href={item.href || '#'} className="hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}