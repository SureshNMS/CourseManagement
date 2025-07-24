import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/course-management-logo-dark.png';
import LoginButton from "../AuthButtons/LoginButton";
import NavItem from "./NavList"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (  
    <div className="m-0 p-2">
      {/* Banner */}
      <div className="bg-[#FF9500] h-10 flex items-center justify-center rounded-lg p-2 mb-4 text-white text-center">
        Free Courses 🌟 Sale Ends Soon, Get It Now <a href="#">{" \u2192 "}</a>
      </div>
      <div className="mx-auto border-b border-[#E4E4E7]">
        <header className="flex items-center justify-between p-4 text-[#262626] container">
          <div className="flex items-center mr-12">
            <NavLink to={"/"}>
              <img
                src={Logo}
                alt="Course Management Logo"
                className="h-auto w-[100px] mr-3"
              />
            </NavLink>
          </div>
          <nav className="hidden md:flex space-x-4 items-center text-sm">
            <NavItem to="/" end>Home</NavItem>
            <NavItem to="/course">Course</NavItem>
            <NavItem to="aboutus">About Us</NavItem>
            <NavItem to="contact">Contact Us</NavItem>
          </nav>

          {/* Login and Signup Buttons */}
          <LoginButton />

          {/* Hamburger */}
          <div className="md:hidden ml-1 mt-1">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex px-5 py-2.5 absolute right-0 left-0 top-[134px] bg-[#f2f2f2] text-right gap-5 w-[calc(100%-1rem)] mx-auto z-40 justify-center items-center flex-wrap text-xs">
            <NavItem to="/" end>Home</NavItem>
            <NavItem to="/course">Course</NavItem>
            <NavItem to="aboutus">About Us</NavItem>
            <NavItem to="contact">Contact Us</NavItem>
          </div>
        )}
        </header>
      </div>
    </div>
  );
}

export default Header;
