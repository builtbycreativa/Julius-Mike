import { useState, useEffect, useRef } from "react";
import { FirstNavItems, SecondNavItems, JuliusLogo } from "../assets";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Utility function to render correct link type
  const location = useLocation();
 const renderNavItem = (item, i) => {
  const isExternal = item.link?.startsWith("http") || item.href?.startsWith("http");
  const href = item.link || item.href;
  const isActive = location.pathname === href;

  const baseClasses = "relative pb-1 transition-all duration-300";
  const activeUnderline = isActive ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white" : "";
  const hoverUnderline = "hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white";

  const finalClasses = `hover:text-gray-300 ${baseClasses} ${activeUnderline} ${hoverUnderline}`;



    return isExternal ? (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300"
      >
        {item.name}
      </a>
    ) : (
      <Link
        key={i}
        to={href}
        className={finalClasses}
        onClick={() => setIsOpen(false)} // Close menu on click (mobile)
      >
        {item.name}
      </Link>
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="absolute w-full top-[25px] flex justify-center z-50">
      <div className="flex items-center lg:justify-around justify-between bg-black/50 rounded-full px-6 py-4 w-full max-w-[389px] h-[78px] lg:h-[97px] lg:max-w-[1366px]">
        {/* Left Nav - Desktop */}
        <div className="hidden md:hidden lg:flex items-center space-x-8 font-MonaSans text-white">
          {FirstNavItems.map(renderNavItem)}
        </div>

        {/* Center Logo */}
        <Link to="/">
          <div className="flex justify-center">
            <img
              src={JuliusLogo}
              alt="Julius Logo"
              className="lg:w-[98px] lg:h-[77px] md:w-[65px] md:h-[45px] w-[58.546px] h-[45.903px] object-contain"
            />
          </div>
        </Link>

        {/* Right Nav - Desktop */}
        <div className="hidden md:hidden lg:flex items-center font-MonaSans space-x-8 text-white">
          {SecondNavItems.map(renderNavItem)}
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-black text-white md:hidden font-MonaSans flex flex-col justify-between py-10 px-6"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
            >
              <HiX />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center space-y-6 font-MonaSans flex-grow">
            {FirstNavItems.concat(SecondNavItems).map(renderNavItem)}
          </div>
        </div>
      )}
    </div>
  );
}
